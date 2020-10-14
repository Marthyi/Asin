using Asin.AmazonWebScraper;
using Asin.AmazonWebScraper.Models;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Asin.AmazonService
{

    public enum State
    {
        Loading = 1,
        Loaded = 2,
        Error = 3
    }

    public class AsinData
    {
        public string Asin { get; set; }

        public string Title { get; set; }

        public State State { get; set; }

        // public List<AsinPageData> Pages { get; set; }
    }

    public class InMemory // AKA 'CACHE'
    {
        public ConcurrentDictionary<string, AsinData> AasinDictionary { get; set; } = new ConcurrentDictionary<string, AsinData>();
        public ConcurrentDictionary<string, List<AsinPageData>> CustomerReviewsPageDictionary { get; set; } = new ConcurrentDictionary<string, List<AsinPageData>>();

        public void AddCustomerReviews(string asinCode, AsinPageData pageData)
        {
            var item = CustomerReviewsPageDictionary.GetOrAdd(asinCode, new List<AsinPageData>());
            item.Add(pageData);
        }
    }

    public class BackgroundEngine
    {
        private readonly InMemory _inMemory;
        private readonly AmazonScraper _amazonScraper;
        BlockingCollection<string> _producer = new BlockingCollection<string>();

        Task _process;

        public BackgroundEngine(InMemory inMemory, AmazonScraper amazonScraper)
        {
            _process = Task.Run(async () => await Consummer());
            _inMemory = inMemory;
            _amazonScraper = amazonScraper;
        }

        public void AddAsin(string asin)
        {
            if (_inMemory.AasinDictionary.TryAdd(asin, new AsinData()
            {
                Asin = asin,
                State = State.Loading
            }))
            {
                _producer.Add(asin);
            }

        }

        private async Task Consummer()
        {
            foreach (string asin in _producer.GetConsumingEnumerable())
            {
                try
                {
                    var scrapData = await _amazonScraper.GetPageDataFromAsinAsync(asin);

                    var newData = new AsinData()
                    {
                        Asin = asin,
                        Title = scrapData.ProductTitle,
                        State = State.Loaded,
                    };


                    // /!\  not really thread safe
                    if (_inMemory.AasinDictionary.TryGetValue(asin, out AsinData asinData))
                    {
                        asinData.State = newData.State;
                        asinData.Title = newData.Title;
                    }

                    _inMemory.AddCustomerReviews(asin, scrapData);

                }
                catch (Exception)
                {
                    if (_inMemory.AasinDictionary.TryGetValue(asin, out AsinData asinData))
                    {
                        asinData.State = State.Error;
                        asinData.Title = null;
                    }
                }
            }
        }
    }
}

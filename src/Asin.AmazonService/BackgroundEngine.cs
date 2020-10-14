using Asin.AmazonWebScraper;
using System;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Asin.AmazonService
{
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
            if (_inMemory.AasinDictionary.TryAdd(asin, new AsinServiceModel()
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

                    var newData = new AsinServiceModel()
                    {
                        Asin = asin,
                        Title = scrapData.ProductTitle,
                        State = State.Loaded,
                    };

                    // /!\  not really thread safe
                    if (_inMemory.AasinDictionary.TryGetValue(asin, out AsinServiceModel asinData))
                    {
                        asinData.State = newData.State;
                        asinData.Title = newData.Title;
                    }

                    _inMemory.AddCustomerReviews(asin, scrapData);

                    _inMemory.AddCustomerReviews(asin, await _amazonScraper.GetPageDataFromUriAsync(scrapData.NextPageUri));

                }
                catch (Exception)
                {
                    if (_inMemory.AasinDictionary.TryGetValue(asin, out AsinServiceModel asinData))
                    {
                        asinData.State = State.Error;
                        asinData.Title = null;
                    }
                }
            }
        }
    }
}

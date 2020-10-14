using Asin.AmazonWebScraper.Models;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Asin.AmazonWebScraper
{
    public class AmazonScraper
    {
        private const string AsinUrl = @"https://www.amazon.com/product-reviews/{0}";

        private readonly AmazonParser _parser;
        private readonly Scraper _scraper;

        public AmazonScraper(AmazonParser parser, Scraper scraper)
        {
            _parser = parser;
            _scraper = scraper;
        }

        public Task<AsinPageData> GetPageDataFromAsinAsync(string asin) => GetPageDataFromUriAsync(new Uri($@"/product-reviews/{asin}", UriKind.Relative));
        
        public async Task <AsinPageData> GetPageDataFromUriAsync(Uri uri)
        {
            string content = await _scraper.GetPageAsync(uri);

            return _parser.ParseAsinPage(content);
        }

        public async Task<AsinPageData[]> GeAlltPageDataFromAsinAsync(string asin)
        {
            var pages = new List<AsinPageData>();
            
            var page = await GetPageDataFromAsinAsync(asin);

            pages.Add(page);

            while(!string.IsNullOrWhiteSpace(page.NextPageUri?.ToString()))
            {
                page = await this.GetPageDataFromUriAsync(page.NextPageUri);
                pages.Add(page);
            }


            return pages.ToArray();
        }

    }


}

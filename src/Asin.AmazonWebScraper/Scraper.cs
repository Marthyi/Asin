using System;
using System.Net.Http;
using System.Threading.Tasks;

namespace Asin.AmazonWebScraper
{
    public class Scraper
    {
        private readonly IHttpClientFactory _httpClient;

        public Scraper(IHttpClientFactory httpClient)
        {
            _httpClient = httpClient;
        }


        public async Task<string> GetPageAsync(Uri uri)
        {
            var page = await _httpClient.CreateClient("amazon").GetAsync(uri);
            
            return await page.Content.ReadAsStringAsync();
        }

    }


}

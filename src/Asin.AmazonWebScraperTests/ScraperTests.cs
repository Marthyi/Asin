using Asin.AmazonWebScraper;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Asin.AmazonWebScraperTests
{
    public class ScraperTests
    {
        [Fact]
        public async Task Scraper_GetPageContent()
        {
            // Arrange
            Scraper scraper = AmazonModule.Create<Scraper>();

            // Act
            string content = await scraper.GetPageAsync(new Uri(@"/product-reviews/B082XY23D5", UriKind.Relative));

            // Assert
            Assert.NotNull(content);
            Assert.True(content.StartsWith("<!doctype html>"));
            Assert.True(content.Length > 0);
        }

        [Fact]
        public async Task Scraper_GetPageContent2()
        {
            // Arrange
            Scraper scraper = AmazonModule.Create<Scraper>();

            // Act
            string content = await scraper.GetPageAsync(new Uri(@"/Samsung-Unlocked-Fingerprint-Recognition-Long-Lasting/product-reviews/B082XY23D5/ref=cm_cr_arp_d_paging_btm_2?ie=UTF8&amp;pageNumber=2", UriKind.Relative));

            // Assert
            Assert.NotNull(content);
            Assert.True(content.StartsWith("<!doctype html>"));
            Assert.True(content.Length > 0);
        }


       
    }
}

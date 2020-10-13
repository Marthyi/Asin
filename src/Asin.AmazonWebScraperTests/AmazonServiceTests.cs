using Asin.AmazonWebScraper;
using Asin.AmazonWebScraper.Models;
using System;
using System.Threading.Tasks;
using Xunit;

namespace Asin.AmazonWebScraperTests
{
    public class AmazonServiceTests
    {
        [Fact]
        public async Task AmazonService_GetAllPages()
        {
            // Arrange
            AmazonService amazonService = AmazonModule.Create<AmazonService>();

            // Act
            var pages = await amazonService.GeAlltPageDataFromAsinAsync("B082XY23D5");

            // Assert
            Assert.NotNull(pages);            
        }


        [Fact]
        public async Task AmazonService_GetPages()
        {
            // Arrange
            AmazonService amazonService = AmazonModule.Create<AmazonService>();

            // Act
            AsinPageData page = await amazonService.GetPageDataFromAsinAsync("B082XY23D5");

            AsinPageData page2 = await amazonService.GetPageDataFromUriAsync(page.NextPageUri);


            // Assert
            Assert.NotNull(page);
            Assert.NotEqual(page.NextPageUri.ToString(), page2.NextPageUri.ToString());
        }
    }
}

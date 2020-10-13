using Asin.AmazonWebScraper;
using System.IO;
using System.Reflection;
using Xunit;

namespace Asin.AmazonWebScraperTests
{

    public class AmazonParserTests
    {
        [Fact]
        public void Scraper_GetPageContent()
        {
            // Arrange
            AmazonParser parser = AmazonModule.Create<AmazonParser>();

            // Act
            var page = parser.ParseAsinPage(GetStringRessource(this.GetType().Assembly, "B082XY23D5.html"));

            // Assert
            Assert.NotNull(page);

            // dummy
            Assert.Equal("Samsung Galaxy S20 5G Factory Unlocked New Android Cell Phone US Version, 128GB of Storage, Fingerprint ID and Facial Recognition, Long-Lasting Battery, Cosmic Gray", page.ProductTitle);
            Assert.Equal("/Samsung-Unlocked-Fingerprint-Recognition-Long-Lasting/product-reviews/B082XY23D5/ref=cm_cr_arp_d_paging_btm_2?ie=UTF8&pageNumber=2", page.NextPageUri.ToString());
            Assert.Equal(10, page.CustomerReviews.Count);




        }

        public string GetStringRessource(Assembly assembly, string assemblyPath)
        {
            string path = $"{assembly.GetName().Name}.{assemblyPath}";

            using (var sr = new StreamReader(assembly.GetManifestResourceStream(path)))
            {
                return sr.ReadToEnd();
            }
        }
    }
}

using Asin.AmazonWebScraper;
using Asin.AmazonWebScraper.Models;
using System.IO;
using System.Reflection;
using Xunit;

namespace Asin.AmazonWebScraperTests
{

    public class CustomerReviewTests
    {
        [Fact]
        public void Scraper_GetPageContent()
        {
            // Arrange
            CustomerReview review = new CustomerReview();

           

            // Act
            review.Rating = "1.0 out of 5 stars";
            string s = review.Rating.Replace("out of 5 stars", string.Empty).Trim();

            float x = float.TryParse(s, out float result) ? result : 0f;
            float x1 = float.TryParse("1.0", out float result1) ? result1 : 0f;
            float x2 = float.TryParse("1,0", out float result2) ? result2 : 0f;

            // Assert
            Assert.Equal(1, review.RatingValue);

        }
    }
}

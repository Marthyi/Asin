using Asin.AmazonWebScraper;
using Asin.AmazonWebScraper.Models;
using System;
using System.IO;
using System.Reflection;
using Xunit;

namespace Asin.AmazonWebScraperTests
{

    public class CustomerReviewTests
    {
        [Fact]
        public void CustomerReview_ParseRating()
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

        [Fact]
        public void CustomerReview_ParseDate()
        {
            // Arrange
            CustomerReview review = new CustomerReview();



            // Act
            review.RawDate = "Reviewed in the United States on March 8, 2020";



          
            // Assert
            Assert.Equal(new DateTime(2020,3,8), review.Date);

        }
    }
}

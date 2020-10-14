using Asin.AmazonWebScraper.Models;
using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using System.Security.Cryptography.X509Certificates;

namespace Asin.AmazonService
{
    /// <summary>
    /// InMemory aka 'CACHE'
    /// </summary>
    public class InMemory
    {
        public ConcurrentDictionary<string, AsinServiceModel> AasinDictionary { get; set; } = new ConcurrentDictionary<string, AsinServiceModel>();
        public ConcurrentDictionary<string, List<AsinPageData>> CustomerReviewsPageDictionary { get; set; } = new ConcurrentDictionary<string, List<AsinPageData>>();

        public void AddCustomerReviews(string asinCode, AsinPageData pageData)
        {
            var item = CustomerReviewsPageDictionary.GetOrAdd(asinCode, new List<AsinPageData>());
            item.Add(pageData);
        }

        public ReviewServiceModel[] GetReviews()
        {

            KeyValuePair<string, List<AsinPageData>>[] pageByProduct = CustomerReviewsPageDictionary.ToArray();

            var comments = pageByProduct.SelectMany(kvp => kvp.Value.SelectMany(p => p.CustomerReviews)
                                        .Select(review => new { productId = kvp.Key, review = review })).ToArray();

            List<ReviewServiceModel> resposne = (comments.Select(comment => new ReviewServiceModel()
            {
                Asin = comment.productId,
                Content = comment.review.Content,
                Rating = comment.review.RatingValue,
                Title = comment.review.Title,
                Date = comment.review.Date,
            })).ToList();

            return resposne.ToArray();
            //return CustomerReviewsPageDictionary.SelectMany(p => p.Value.SelectMany(p => p.CustomerReviews))
        }
    }
}

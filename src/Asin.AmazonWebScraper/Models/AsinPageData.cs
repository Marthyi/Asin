using System;
using System.Collections.Generic;
using System.Linq;

namespace Asin.AmazonWebScraper.Models
{
    public class AsinPageData
    {
        public string ProductTitle { get; }
        public Uri NextPageUri { get; }

        public IList<CustomerReview> CustomerReviews { get; }


        public AsinPageData(string productTitle, IEnumerable<CustomerReview> reviews, Uri nextPage)
        {
            ProductTitle = productTitle;
            CustomerReviews = reviews.ToList();
            NextPageUri = nextPage;
        }
    }
}

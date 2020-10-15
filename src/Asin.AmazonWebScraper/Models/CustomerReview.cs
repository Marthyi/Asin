using System;
using System.Globalization;

namespace Asin.AmazonWebScraper.Models
{

    public class CustomerReview
    {
        //Product ASIN, 

        public string Title { get; set; }
        public string RawDate { get; set; }
        public DateTime Date
        {
            get
            {
                return DateTime.SpecifyKind(DateTime.TryParse(RawDate.Replace("Reviewed in the United States on ", string.Empty), out DateTime date) ? date : default, DateTimeKind.Utc);
            }
        }
        public string Content { get; set; }
        public string Rating { get; set; }

        public int RatingValue => (int)(float.TryParse(Rating
                                                        .Replace("out of 5 stars", string.Empty)
                                                        .Replace(".", ",")
                                                        .Trim(),
                                                        out float result)

                                    ? result : 0f);

    }
}

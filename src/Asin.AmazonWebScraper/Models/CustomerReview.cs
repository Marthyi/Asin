using System.Globalization;

namespace Asin.AmazonWebScraper.Models
{

    public class CustomerReview
    {
        //Product ASIN, 

        public string Title { get; set; }
        public string Date { get; set; }
        public string Content { get; set; }
        public string Rating { get; set; }

        public int RatingValue => (int) (float.TryParse(Rating
                                                        .Replace("out of 5 stars",string.Empty)
                                                        .Replace(".",",")
                                                        .Trim(),
                                                        out float result)
                                                        
                                    ? result : 0f);

    }
}

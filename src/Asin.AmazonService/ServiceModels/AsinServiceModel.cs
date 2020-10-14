namespace Asin.AmazonService
{
    public class AsinServiceModel
    {
        public string Asin { get; set; }

        public string Title { get; set; }

        public State State { get; set; }

    }

    public class ReviewServiceModel
    {
        public string Asin { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        public int Rating { get; set; }
        public string Date { get; internal set; }
    }

}

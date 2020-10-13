using Asin.AmazonWebScraper.Models;
using HtmlAgilityPack;
using System;
using System.Net;
using System.Web;

namespace Asin.AmazonWebScraper
{
    public class AmazonParser
    {
        private const string CustomerReviewPage_ProductTitle = @"//div[@role='main']//*/a[@data-hook='product-link']";
        private const string CustomerReviewPage_ArticleNodes = @"//div[@id='cm_cr-review_list']//div[@data-hook='review']";
        private const string CustomerReviewPage_NextPage = @"//*/ul[@class='a-pagination']/li/a[contains(text(),'Next page')]";

        public AsinPageData ParseAsinPage(string content)
        {
            var doc = CreateHtmlDoccument(content);



            AsinPageData page = new AsinPageData
                (
                productTitle: GetProductTitle(doc),
                reviews: GetReviews(doc),
                nextPage: GetNextpageUri(doc)
                );

            return page;
        }

        private HtmlDocument CreateHtmlDoccument(string content)
        {
            var htmlDoc = new HtmlDocument();
            htmlDoc.LoadHtml(content);
            return htmlDoc;
        }


        private string GetProductTitle(HtmlDocument htmlDoc) => htmlDoc.DocumentNode.SelectSingleNode(CustomerReviewPage_ProductTitle).InnerText;

        private Uri GetNextpageUri(HtmlDocument htmlDoc)
        {
            string nextUri = GetXpathOrNull(htmlDoc, CustomerReviewPage_NextPage, p => p.GetAttributeValue("href", string.Empty));

            if (!string.IsNullOrWhiteSpace(nextUri))
            {
                return new Uri(HttpUtility.HtmlDecode(nextUri), UriKind.RelativeOrAbsolute);
            }

            return null;
        }


        private string GetXpathOrNull(HtmlDocument document, string xPath, Func<HtmlNode, string> getter)
        {
            try
            {
                return getter(document.DocumentNode.SelectSingleNode(xPath));
            }
            catch (Exception)
            {
                return null;
            }
        }

        private CustomerReview[] GetReviews(HtmlDocument htmlDoc)
        {
            HtmlNodeCollection nodes = htmlDoc.DocumentNode.SelectNodes(CustomerReviewPage_ArticleNodes);

            var items = new CustomerReview[nodes.Count];

            for (int i = 0; i < items.Length; i++)
            {
                var item = new CustomerReview();
                items[i] = item;

                item.Title = nodes[i].SelectSingleNode(@"//a[@data-hook='review-title']/span").InnerText.Trim();
                item.Date = nodes[i].SelectSingleNode(@"//span[@data-hook='review-date']").InnerText.Trim();
                item.Rating = nodes[i].SelectSingleNode(@"//i[@data-hook='review-star-rating']/span").InnerText.Trim();
                item.Content = nodes[i].SelectSingleNode(@"//span[@data-hook='review-body']/span").InnerText.Trim();
            }

            return items;
        }



    }


}

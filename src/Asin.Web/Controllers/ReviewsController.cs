using Asin.AmazonService;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Linq;
using System.Linq.Expressions;

namespace Asin.Web.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReviewsController : ControllerBase
    {
        private readonly AmazonProvider _amazonProvider;

        public ReviewsController(AmazonProvider amazonProvider)
        {
            _amazonProvider = amazonProvider;
        }

        [HttpGet("")]
        public ReviewServiceModel[] AddAsinCodeAsync(int page = 0, string column = "date", string direction = "asc")
        {
            const int PAGING = 10;

            IQueryable<ReviewServiceModel> data = _amazonProvider.GetReviews().AsQueryable();

            data = column switch
            {
                "asin" => direction == "asc" ? data.OrderBy(p => p.Asin) : data.OrderByDescending(p => p.Asin),
                "date" => direction == "asc" ? data.OrderBy(p => p.Date) : data.OrderByDescending(p => p.Date),
                "rating" => direction == "asc" ? data.OrderBy(p => p.Rating) : data.OrderByDescending(p => p.Rating),
                "title" => direction == "asc" ? data.OrderBy(p => p.Title) : data.OrderByDescending(p => p.Title),
                _ => data
            };


            return data.Skip(PAGING * page).Take(PAGING).ToArray();
        }
    }
}

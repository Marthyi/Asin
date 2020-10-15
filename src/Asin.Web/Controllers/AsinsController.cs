using Asin.AmazonService;
using Microsoft.AspNetCore.Mvc;

namespace Asin.Web.Controllers
{

    public class AddAsinCodeRequest
    {
        public string AsinCode { get; set; }
    }

    [ApiController]
    [Route("[controller]")]
    public class AsinsController : ControllerBase
    {
        private readonly AmazonProvider _amazonProvider;

        public AsinsController(AmazonProvider amazonProvider)
        {
            _amazonProvider = amazonProvider;
        }

        [HttpGet("")]
        public AsinServiceModel[] GetAsinsAsync()
        {
            return _amazonProvider.GetAsins();
        }

        [HttpPost("")]
        public void AddAsinCodeAsync([FromBody] AddAsinCodeRequest request)
        {
            _amazonProvider.AddAsin(request.AsinCode);
        }

        [HttpGet("reviews")]
        public ReviewServiceModel[] AddAsinCodeAsync()
        {
            return _amazonProvider.GetReviews();
        }
    }
}

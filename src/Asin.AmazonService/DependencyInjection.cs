using Asin.AmazonWebScraper;
using Microsoft.Extensions.DependencyInjection;

namespace Asin.AmazonService
{
    public static class DependencyInjection
    {


        public static IServiceCollection AddAmazonService(this IServiceCollection services)
        {
            services.AddAmazonWebScraper();
            services.AddTransient<AmazonProvider>();
            services.AddSingleton<InMemory>();
            services.AddSingleton<BackgroundEngine>();

            return services;
        }
    }
}

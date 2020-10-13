using Microsoft.Extensions.DependencyInjection;
using System;
using System.Net;
using System.Net.Http;

namespace Asin.AmazonWebScraper
{

    public static class DependencyInjection
    {
        public static IServiceCollection AddAmazonWebScraper(this IServiceCollection services)
        {
            var httpBuilder = services
                .AddHttpClient("amazon", p =>
                 {
                     p.BaseAddress = new Uri("https://www.amazon.com");
                     p.DefaultRequestHeaders.UserAgent.ParseAdd(@"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.75 Safari/537.36");
                 })
                .ConfigurePrimaryHttpMessageHandler(() =>
            {
                return new HttpClientHandler
                {
                    AutomaticDecompression = DecompressionMethods.GZip | DecompressionMethods.Deflate,
                };
            });

            services.AddTransient<Scraper>();

            services.AddTransient<AmazonParser>();
            services.AddTransient<AmazonService>();

            return services;
        }
    }
}

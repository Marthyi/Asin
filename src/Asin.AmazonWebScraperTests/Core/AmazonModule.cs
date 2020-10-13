using Asin.AmazonWebScraper;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace Asin.AmazonWebScraperTests
{
    public static class AmazonModule
    {
        public static IServiceProvider _serviceProvider { get; }

        static AmazonModule()
        {
            IServiceCollection services = new ServiceCollection();
            services.AddAmazonWebScraper();
            _serviceProvider = services.BuildServiceProvider();
        }

        public static T Create<T>() => _serviceProvider.GetService<T>();
    }
}

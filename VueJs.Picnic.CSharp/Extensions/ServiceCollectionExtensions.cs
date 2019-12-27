using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;

namespace VueJs.Picnic.CSharp.Extensions
{
    public static class ServiceCollectionExtensions
    {
        public static IServiceCollection AddKestrelCompression(this IServiceCollection services)
        {
            // Enable the Gzip compression especially for Kestrel
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression(options =>
            {
#if (!NoHttps)
                options.EnableForHttps = true;
#endif
            });

            return services;
        }
    }
}

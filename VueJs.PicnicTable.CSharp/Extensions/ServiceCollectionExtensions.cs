using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;
using System.IO;
using System.Reflection;

namespace VueJs.PicnicTable.CSharp.Extensions
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

        public static IServiceCollection AddSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                //c.SwaggerDoc("v1", new Info
                //{
                //    Title = "My app API",
                //    Description = "A simple example Core Web API",
                //    TermsOfService = "None",
                //    Version = "v1",
                //    Contact = new Contact
                //    {
                //        Name = "Nordes Lamarre",
                //        Email = string.Empty,
                //        Url = "https://twitter.com/nordes"
                //    },
                //    License = new License
                //    {
                //        Name = "Use under MIT",
                //        Url = "https://github.com/Nordes/HoNoSoFt.DotNet.Web.Spa.ProjectTemplates/blob/master/LICENSE"
                //    }
                //});

                // Set the comments path for the Swagger JSON and UI.
                var xmlFile = $"{Assembly.GetExecutingAssembly().GetName().Name}.xml";
                var xmlPath = Path.Combine(Path.GetDirectoryName(Assembly.GetEntryAssembly().Location), xmlFile);
                c.IncludeXmlComments(xmlPath);
            });

            return services;
        }
    }
}

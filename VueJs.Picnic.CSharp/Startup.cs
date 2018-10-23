using System.IO;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace VueJs.Picnic.CSharp
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().SetCompatibilityVersion(CompatibilityVersion.Version_2_1);
            
            // Enable the Gzip compression especially for Kestrel
            services.Configure<GzipCompressionProviderOptions>(options => options.Level = System.IO.Compression.CompressionLevel.Optimal);
            services.AddResponseCompression(options =>
                {
                    options.EnableForHttps = true;
                });
            
            // Example with dependency injection for a data provider.
            services.AddSingleton<Providers.IWeatherProvider, Providers.WeatherProviderFake>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseWebpackDevMiddleware(
                    new WebpackDevMiddlewareOptions {
                        HotModuleReplacement = true,
                        ConfigFile = "./build/webpack.config.js"
                    }); // Should be used only in dev. mode!
            }
            else
            {
                app.UseHsts();
            }

            app.UseHttpsRedirection();
            app.UseResponseCompression(); // This is especially true for Kestrel!
            
            // Idea: https://code.msdn.microsoft.com/How-to-fix-the-routing-225ac90f
            // This avoid having a real mvc view.
            app.Use(async (context, next) => 
                { 
                    await next(); 
                    if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value)) 
                    { 
                        context.Request.Path = "/index.html"; 
                        await next(); 
                    } 
                });
            app.UseDefaultFiles();
            app.UseStaticFiles();
            app.UseMvc();
        }
    }
}

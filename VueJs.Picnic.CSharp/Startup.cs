using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.ResponseCompression;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.DependencyInjection;
using VueJs.Picnic.CSharp.Extensions;
using VueJs.Picnic.CSharp.BackgroundJob;
using VueJs.Picnic.CSharp.Configurations;

namespace VueJs.Picnic.CSharp
{
    public class Startup
    {

        public Startup(IConfiguration configuration, IWebHostEnvironment env)
        {
            Configuration = configuration;
            CurrentEnvironment = env;
        }

        public IConfiguration Configuration { get; }
        public IWebHostEnvironment CurrentEnvironment { get; }

        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(mvcOptions => { mvcOptions.EnableEndpointRouting = false; });
            services.AddKestrelCompression();
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "wwwroot/"; });
            
            if (CurrentEnvironment.IsDevelopment())
            {
                services.Configure<WebpackConfiguration>(Configuration.GetSection("Webpack"));
                services.AddHostedService<WebpackJob>();
            }

            // Dependency injection for a data provider.
            services.AddSingleton<Providers.IWeatherProvider, Providers.WeatherProviderFake>();
        }

        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
#if (!NoHttps)
                app.UseHsts();
            }

            app.UseHttpsRedirection();
#else
            }
#endif

            app.UseResponseCompression(); // No need if you use IIS, but really useful for Kestrel
            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            //app.UseDefaultFiles(); // was there, now not needed (Maybe still in production)

            app.UseRouting();

            app.UseEndpoints(endpoints =>
                {
                    endpoints.MapControllerRoute(
                        name: "default",
                        pattern: "/api/{controller}/{action=Index}/{id?}");
                    // endpoints.MapRazorPages(); // <== if we want to use some Authentication
                });

            app.UseSpa(spa =>
            {
                spa.Options.SourcePath = "ClientApp";

                if (env.IsDevelopment())
                {
                    // If launchSettings.json use HTTPS then you need to use the same certificate for
                    // the HTTPS within the SpaDevelopmentServer (webpack-dev-server in this instance).
                    //
                    // You will also have to update the ./BackgroundJob/WebpackJob.cs with the certificate
                    // option.
                    spa.UseProxyToSpaDevelopmentServer("http://localhost:8080");
                }
            });
        }
    }
}

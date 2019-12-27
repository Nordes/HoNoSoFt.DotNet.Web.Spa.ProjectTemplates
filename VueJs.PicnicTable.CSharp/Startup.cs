using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using VueJs.PicnicTable.CSharp.Extensions;
using Microsoft.Extensions.Options;
using VueJs.PicnicTable.CSharp.Configurations;

namespace VueJs.PicnicTable.CSharp
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

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc(mvcOptions => { mvcOptions.EnableEndpointRouting = false; });
            //services.AddNewtonsoftJson();
            services.AddKestrelCompression();
            services.AddSpaStaticFiles(configuration => { configuration.RootPath = "wwwroot/"; });
            services.AddSwagger();

            if (CurrentEnvironment.IsDevelopment())
            {
                services.Configure<WebpackConfiguration>(Configuration.GetSection("Webpack"));
                //services.AddHostedService<WebpackJob>();
            }

            // Example with dependency injection for a data provider.
            services.AddSingleton<Providers.IWeatherProvider, Providers.WeatherProviderFake>();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app)
        {
            if (CurrentEnvironment.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
#if (!NoHttps)
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }

            app.UseHttpsRedirection();
#else
            }
#endif
            app.UseResponseCompression(); // This is especially true for Kestrel!
            // Enable middleware to serve generated Swagger as a JSON endpoint.
            app.UseSwagger();
            // Enable middleware to serve swagger-ui (HTML, JS, CSS, etc.), specifying the Swagger JSON endpoint.
            app.UseSwaggerUI(c =>
            {
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "My API V1");
            });

            app.UseStaticFiles();
            app.UseSpaStaticFiles();
            app.UseRouting();

            //app.UseDefaultFiles();
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

                if (CurrentEnvironment.IsDevelopment())
                {
                    // Alternative: https://github.com/aspnet/AspNetCore/issues/5204#issuecomment-558132169
                    // Use NPM script, but the issue with the process not being killed will remain.
                    //
                    // If launchSettings.json use HTTPS then you need to use the same certificate for
                    // the HTTPS within the SpaDevelopmentServer (webpack-dev-server in this instance).
                    //
                    // You will also have to update the ./BackgroundJob/WebpackJob.cs with the certificate
                    // option.
                    var webpackOptions = app.ApplicationServices.GetService<IOptions<WebpackConfiguration>>();
                    var webpack = webpackOptions == null ? new WebpackConfiguration() : webpackOptions.Value;
                    spa.UseProxyToSpaDevelopmentServer($"http://localhost:{webpack.Port}");
                //spa.UseProxyToSpaDevelopmentServer(f=> {
                //    f. })
                }
            });
        }
    }
}

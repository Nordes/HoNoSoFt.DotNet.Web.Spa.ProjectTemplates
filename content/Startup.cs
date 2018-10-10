using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SpaServices.Webpack;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;

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

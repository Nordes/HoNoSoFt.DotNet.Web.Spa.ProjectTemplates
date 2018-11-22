using Microsoft.AspNetCore.Builder;
using System.IO;

namespace VueJs.PicnicTable.CSharp.Extensions
{
    public static class StartupConfigureExtensions
    {
        public static IApplicationBuilder UseSpa(this IApplicationBuilder app)
        {
            // There's also a possibility of using app.UseSpaStaticFiles
            return app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 404 && !Path.HasExtension(context.Request.Path.Value))
                {
                    context.Request.Path = "/index.html";
                    await next();
                }
            });
        }
    }
}

using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Hosting;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Options;
using System;
using System.Diagnostics;
using System.Threading;
using System.Threading.Tasks;
using VueJs.Picnic.CSharp.Configurations;

namespace VueJs.Picnic.CSharp.BackgroundJob
{
    /// <summary>
    /// This is used only for development purposess, it should not be running when in production or
    /// any other mode than development.
    /// </summary>
    internal class WebpackJob : BackgroundService
    {
        private IWebHostEnvironment _environment;
        private ILogger<WebpackJob> _logger;
        private WebpackConfiguration _webpackOptions;

        public WebpackJob(
            ILogger<WebpackJob> logger,
            IOptions<WebpackConfiguration> webpackOptions,
            IWebHostEnvironment env)
        {
            _environment = env;
            _logger = logger;
            _webpackOptions = webpackOptions == null ? new WebpackConfiguration() : webpackOptions.Value;
        }

        protected override Task ExecuteAsync(CancellationToken stoppingToken)
        {
            if (_environment.IsDevelopment())
            {
                var webpackProc = StartWebpack();
                stoppingToken.Register(() =>
                {
                    webpackProc?.Kill(true);
                    webpackProc?.Dispose();
                });

                return Task.Delay(Timeout.Infinite, stoppingToken);
            }

            return Task.CompletedTask;
        }

        private void BgError(object sender, DataReceivedEventArgs e)
        {
            if (!string.IsNullOrEmpty(e.Data))
                _logger.LogError(default(EventId), $"[Webpack] {e.Data}");
        }

        private void BgOutput(object sender, DataReceivedEventArgs e)
        {
            if (!string.IsNullOrEmpty(e.Data))
                _logger.LogInformation(default(EventId), $"[Webpack] {e.Data}");
        }

        private Process StartWebpack()
        {
            var command = new string [] {
                $"--config {_webpackOptions.Configuration}",
                $"--port {_webpackOptions.Port}",
                "--hide-modules",
                "--no-cache"
                //"--https", // Require a certificate shared between localhost:5001 and localhost:8080
            };

            _logger.LogInformation(Environment.CurrentDirectory);
            var process = new Process
            {
                StartInfo = new ProcessStartInfo
                {
                    FileName = _webpackOptions.Command, // Change by OS
                    Arguments = string.Join(' ', command),
                    RedirectStandardError = true,
                    RedirectStandardOutput = true,
                    UseShellExecute = false,
                    CreateNoWindow = true
                }
            };

            //SetEnvVariables(process);
            process.OutputDataReceived += BgOutput;
            process.ErrorDataReceived += BgError;

            process.Start();
            process.BeginOutputReadLine();
            process.BeginErrorReadLine();

            return process;
        }

        //[Obsolete("Not sure if this is really required")]
        //private void SetEnvVariables(Process process)
        //{
        //    foreach (DictionaryEntry entry in Environment.GetEnvironmentVariables())
        //    {
        //        if (!process.StartInfo.Environment.ContainsKey(entry.Key.ToString()))
        //        {
        //            process.StartInfo.EnvironmentVariables.Add(entry.Key.ToString(), entry.Value.ToString());
        //        }
        //    }
        //}
    }
}

using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VueJs.Picnic.CSharp.Providers;

namespace VueJs.Picnic.CSharp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class WeatherController : ControllerBase
    {
      private readonly IWeatherProvider weatherProvider;

        public WeatherController(IWeatherProvider weatherProvider)
        {
            this.weatherProvider = weatherProvider;
        }

        [HttpGet("[action]")]
        public IActionResult Forecasts([FromQuery(Name = "from")] int from = 0, [FromQuery(Name = "to")] int to = 4)
        {
            System.Threading.Thread.Sleep(TimeSpan.FromSeconds(1)); // Fake latency
            var quantity = to - from;

            // We should also avoid going too far in the list.
            if (quantity <= 0)
            {
                return BadRequest("You cannot have the 'to' parameter higher than 'from' parameter.");
            }

            if (from < 0)
            {
                return BadRequest("You cannot go in the negative with the 'from' parameter");
            }

            var allForecasts = weatherProvider.GetForecasts();
            var result = new
            {
                Total = allForecasts.Count,
                Forecasts = allForecasts.Skip(from).Take(quantity).ToArray()
            };

            return Ok(result);
        }
    }
}
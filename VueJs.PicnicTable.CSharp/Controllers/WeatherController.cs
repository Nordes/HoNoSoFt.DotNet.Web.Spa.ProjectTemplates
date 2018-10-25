using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using VueJs.PicnicTable.CSharp.Models.Dto;
using VueJs.PicnicTable.CSharp.Providers;

namespace VueJs.PicnicTable.CSharp.Controllers
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

        /// <summary>
        /// Gets the forecast using some paging.
        /// </summary>
        /// <param name="from">Define the index to start from</param>
        /// <param name="to">Define the index until what value</param>
        /// <returns>The forecast as an enumerable.</returns>
        /// <remarks>This method is simply used as an example for simple pagination.</remarks>
        [HttpGet("[action]")]
        [ProducesResponseType(typeof(WeatherForecastResults), (int)System.Net.HttpStatusCode.OK)]
        [ProducesResponseType((int)System.Net.HttpStatusCode.BadRequest)]
        public IActionResult Forecasts([FromQuery(Name = "from")] int from = 0, [FromQuery(Name = "to")] int to = 4)
        {
            //System.Threading.Thread.Sleep(500); // Fake latency
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
            var result = new WeatherForecastResults
            {
                Total = allForecasts.Count,
                Forecasts = allForecasts.Skip(from).Take(quantity).ToArray()
            };

            return Ok(result);
        }
    }
}
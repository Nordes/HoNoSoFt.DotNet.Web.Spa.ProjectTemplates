using System.Collections.Generic;

namespace VueJs.PicnicTable.CSharp.Models.Dto
{
    public class WeatherForecastResults
    {
        public int Total { get; set; }
        public IEnumerable<WeatherForecast> Forecasts;
    }
}
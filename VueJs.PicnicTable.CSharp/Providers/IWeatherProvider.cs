using System.Collections.Generic;
using VueJs.PicnicTable.CSharp.Models;

namespace VueJs.PicnicTable.CSharp.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
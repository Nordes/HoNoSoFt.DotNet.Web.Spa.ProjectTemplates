using System.Collections.Generic;
using VueJs.Picnic.CSharp.Models;

namespace VueJs.Picnic.CSharp.Providers
{
    public interface IWeatherProvider
    {
        List<WeatherForecast> GetForecasts();
    }
}
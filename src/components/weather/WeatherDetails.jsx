import React from 'react'
import { useWeatherContext } from '@state/hooks/weatherContext';

export const WeatherDetails = () => {

  const { weather } = useWeatherContext();
	const windSpeed = (weather?.wind.speed * 3.6).toFixed(2);

  return (
		<div className='weather-info'>
			{weather ? (
				<div className='weather-info-wrapper'>
					<div className='weather-info-item'>
						<h1>{weather.name} Weather</h1>
						<img
							src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
							alt='weather icon'
						></img>
						<p>{weather.weather[0].description}</p>
						<p>Current Temp: {Math.floor(weather.main.temp)}&deg;C</p>
						<p>Wind speed: {windSpeed} km/h</p>
						<p>Feels Like: {weather.main.feels_like}&deg;C</p>
					</div>
				</div>
			) : (
				<p>Enter a city to get weather information</p>
			)}
		</div>
	);
}

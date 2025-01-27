import { useWeatherContext } from '@state/hooks/weatherContext';
import React from 'react';
import { WeatherWidget } from './WeatherWidget';

export const WeatherContainer = () => {
	const { weather } = useWeatherContext();
	const windSpeed = (weather?.wind.speed * 3.6).toFixed(2);

  const mockWeather = {
    name: 'London',
    main: {
      temp: 20,
      feels_like: 21,
    },
    sys: {
      sunrise: 1627580400,
      sunset: 1627630800,
    },
    weather: [
      {
        description: 'Cloudy',
        icon: '04d',
      },
    ],
    wind: {
      speed: 4.5,
    },
  }

	return (
		<div className='weather-details-container'>
			{weather ? (
				<WeatherWidget mockWeather={mockWeather}/>
			) : (
				<div className='no-weather-info'>
					<p>Enter a city to get weather</p>
					<p>information</p>
				</div>
			)}
		</div>
	);
};

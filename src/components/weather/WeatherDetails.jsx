import { useWeatherContext } from '@state/hooks/weatherContext';
import React from 'react';
import { WeatherWidget } from './WeatherWidget';

export const WeatherDetails = () => {
	const { weather } = useWeatherContext();
	const windSpeed = (weather?.wind.speed * 3.6).toFixed(2);

	return (
		<div className='weather-details-container'>
			{weather ? (
				<WeatherWidget />
			) : (
				<div className='no-weather-info'>
					<p>Enter a city to get weather</p>
					<p>information</p>
				</div>
			)}
		</div>
	);
};

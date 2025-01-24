import '@styles/weather.css';
import { useState } from 'react';
import { useWeatherContext } from '@state/hooks/weatherContext';

export const WeatherForm = () => {
	const [city, setCity] = useState('');

	const { getWeatherByCity, weather } = useWeatherContext();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!city) return;
		getWeatherByCity(city);
    setCity('');
	};

	return (
		<div className='weather-form'>
			{weather ? (
				<h2 className='city-title'>{weather.name}</h2>
			) : (
				(null)
			)}
			<form
				name='weatherForm'
				className='todo-form'
				onSubmit={handleSubmit}
			>
				<input
					className='todo-input'
					type='text'
					value={city}
					placeholder='Enter city'
					onChange={(e) => setCity(e.target.value)}
				/>
				<button
					type='submit'
					className='weather-btn'
				>
					GET WEATHER CALL
				</button>
			</form>
		</div>
	);
};

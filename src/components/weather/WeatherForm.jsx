import '@styles/weather.css';
import { useState } from 'react';
import { useWeatherContext } from '@state/hooks/weatherContext';

export const WeatherForm = () => {
	const [city, setCity] = useState('');

	const { getWeatherByCity } = useWeatherContext();

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!city) return;
		getWeatherByCity(city);
    setCity('');
	};

	return (
		<div className='weather-container'>
			<form
				name='weatherForm'
				className='weather-form'
				onSubmit={handleSubmit}
			>
				<input
					className='weather-input'
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

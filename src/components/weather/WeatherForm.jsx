import { useState } from 'react';
import weatherService from '../../service/weatherService';

export const WeatherForm = () => {
	const [city, setCity] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!city) return;
    weatherService.getWeatherByCity(city);
  }

	return (
		<div className='Weather-Form'>
			<form
        name='weatherForm'
				className='TodoForm'
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
					className='todo-btn'
				>
					GET WEATHER CALL
				</button>
			</form>
		</div>
	);
};

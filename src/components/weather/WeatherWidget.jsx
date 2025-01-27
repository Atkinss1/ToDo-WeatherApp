import { useWeatherContext } from '@state/hooks/weatherContext';
import { TempAndSun } from './TempAndSun';
import { WeatherIcon } from './WeatherIcon';

export const WeatherWidget = () => {
	const { weather } = useWeatherContext();

	return (
		<div className='widget-wrapper'>
			<div className='city-title'>{weather.name}</div>
			<div className='widget-info'>
				<div className='temp-and-sun-container'>
					<TempAndSun />
				</div>
				<div className='weather-icon-container'>
					<WeatherIcon />
				</div>
				<div className='weather-info-container'>
					<p>WEATHER INFO COMING SOON</p>
				</div>
			</div>
		</div>
	);
};

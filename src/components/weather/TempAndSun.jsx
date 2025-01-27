import { useWeatherContext } from '@state/hooks/weatherContext';

export const TempAndSun = () => {
	const { weather } = useWeatherContext();
	console.log('weather', weather);
	return (
		<div className='temp-and-sun-wrapper'>
			<div className='temp'>
				<div className='current-temp'>
					{Math.floor(weather.main.temp)}&deg;C
				</div>
				<div className='feels-like-temp'>
					<p>Feels Like:</p> {weather.main.feels_like}&deg;C
				</div>
			</div>
			<div className='sun-info'>
				<div className='sunrise'>
					<p>Sunrise</p>
					<p>{new Date(weather.sys.sunrise * 1000).toLocaleTimeString()}</p>
				</div>
				<div className='sunset'>
					<p>Sunset</p>
					<p>{new Date(weather.sys.sunset * 1000).toLocaleTimeString()}</p>
				</div>
			</div>
		</div>
	);
};

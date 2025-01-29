import { useWeatherContext } from '@state/hooks/weatherContext';

export const TempAndSun = ({ mockWeather }) => {
	
  const { weather } = useWeatherContext();
	
	return (
		<div className='temp-and-sun-wrapper'>
			<div className='temp'>
				<div className='current-temp'>
					{Math.floor(mockWeather.main.temp)}&deg;C
				</div>
				<div className='feels-like-temp'>
					<p>Feels Like: &nbsp;{mockWeather.main.feels_like}&deg;C</p>
				</div>
			</div>
			<div className='sun-info'>
				<div className='sunrise'>
					<p>Sunrise</p>
					<p>{new Date(mockWeather.sys.sunrise * 1000).toLocaleTimeString()}</p>
				</div>
				<div className='sunset'>
					<p>Sunset</p>
					<p>{new Date(mockWeather.sys.sunset * 1000).toLocaleTimeString()}</p>
				</div>
			</div>
		</div>
	);
};

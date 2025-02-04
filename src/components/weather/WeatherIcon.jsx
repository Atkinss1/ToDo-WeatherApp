import { useWeatherContext } from '@state/hooks/weatherContext';

export const WeatherIcon = () => {
  const { weather } = useWeatherContext();

  return (
    <div className="weather-icon-wrapper">
      <div className="weather-icon-img">
        <img
          src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
          alt="weather-icon"
        />
      </div>
      <div className="weather-description">
        {weather.weather[0].description}
      </div>
    </div>
  );
};

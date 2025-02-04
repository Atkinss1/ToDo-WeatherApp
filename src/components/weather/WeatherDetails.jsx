import { useWeatherContext } from '@state/hooks/weatherContext';
import windDirection from '@utils/windDirection';

export const WeatherDetails = () => {
  // adding details such as humitiy, wind speed, wind direction, and pressure
  const { weather } = useWeatherContext();

  return (
    <div className="weather-details">
      <div className="weather-column">
        <div className="weather-detail">
          <div className="detail-value">{weather.main.humidity}%</div>
          <div className="detail-title">Humidity</div>
        </div>
        <div className="weather-detail">
          <div className="detail-value">{weather.wind.speed}m/s</div>
          <div className="detail-title">Wind Speed</div>
        </div>
      </div>
      <div className="weather-column">
        <div className="weather-detail">
          <div className="detail-value">{windDirection(weather.wind.deg)}</div>
          <div className="detail-title">Wind Direction</div>
        </div>
        <div className="weather-detail">
          <div className="detail-value">{weather.main.pressure}hPa</div>
          <div className="detail-title">Pressure</div>
        </div>
      </div>
    </div>
  );
};

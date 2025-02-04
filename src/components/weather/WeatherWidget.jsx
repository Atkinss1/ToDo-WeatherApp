import { useWeatherContext } from '@state/hooks/weatherContext';
import { WeatherDetails } from './WeatherDetails';
import { WeatherIcon } from './WeatherIcon';
import { ClimateOverview } from './climate-overview/ClimateOverview';

export const WeatherWidget = () => {
  const { weather } = useWeatherContext();

  return (
    <div className="widget-container">
      {weather ? (
        <div className="widget-wrapper">
          <div className="city-title">{weather.name}</div>
          <div className="widget-info">
            <div className="temp-and-sun-container">
              <ClimateOverview />
            </div>
            <div className="weather-icon-container">
              <WeatherIcon />
            </div>
            <div className="weather-info-container">
              <WeatherDetails />
            </div>
          </div>
        </div>
      ) : (
        <div className="no-weather-info">
          <p>Enter a city to get weather</p>
          <p>information</p>
        </div>
      )}
    </div>
  );
};

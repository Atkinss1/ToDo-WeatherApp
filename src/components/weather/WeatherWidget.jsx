import { useWeatherContext } from '@state/hooks/weatherContext';
import { WeatherIcon } from './WeatherIcon';
import { WeatherDetails } from './WeatherDetails';
import { ClimateOverview } from './climate-overview/ClimateOverview';

export const WeatherWidget = ({ mockWeather }) => {
  const { weather } = useWeatherContext();

  console.log('weather', weather);

  return (
    <div className="widget-container">
      {mockWeather ? (
        <div className="widget-wrapper">
          <div className="city-title">{mockWeather.name}</div>
          <div className="widget-info">
            <div className="temp-and-sun-container">
              <ClimateOverview mockWeather={mockWeather} />
            </div>
            <div className="weather-icon-container">
              <WeatherIcon mockWeather={mockWeather} />
            </div>
            <div className="weather-info-container">
              <WeatherDetails mockWeather={mockWeather} />
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

import { useWeatherContext} from '@state/hooks/weatherContext';

export const WeatherDetails = ({ mockWeather }) => {
  // adding details such as humitiy, wind speed, wind direction, and pressure
  const { weather } = useWeatherContext();

  const windDirection = (deg) => {

    switch (deg) {
      case deg >= 0 && deg <= 22.5:
        return 'North';
      case deg > 22.5 && deg <= 67.5:
        return 'North East';
      case deg > 67.5 && deg <= 112.5:
        return 'East';
      case deg > 112.5 && deg <= 157.5:
        return 'South East';
      case deg > 157.5 && deg <= 202.5:
        return 'South';
      case deg > 202.5 && deg <= 247.5:
        return 'South West';
      case deg > 247.5 && deg <= 292.5:
        return 'West';
      case deg > 292.5 && deg <= 337.5:
        return 'North West';
      case deg > 337.5 && deg <= 360:
        return 'North';
      default:
        return 'North';
    }
  };

  return (
    <div className='weather-details-wrapper'>
      <div className='weather-details'>
        <div className='weather-detail'>
          <div className='detail-title'>Humidity</div>
          <div className='detail-value'>{mockWeather.main.humidity}%</div>
        </div>
        <div className='weather-detail'>
          <div className='detail-title'>Wind Speed</div>
          <div className='detail-value'>{mockWeather.wind.speed}m/s</div>
        </div>
        <div className='weather-detail'>
          <div className='detail-title'>Wind Direction</div>
          <div className='detail-value'>{windDirection(mockWeather.wind.deg)}</div>
        </div>
        <div className='weather-detail'>
          <div className='detail-title'>Pressure</div>
          <div className='detail-value'>{mockWeather.main.pressure}hPa</div>
        </div>
      </div>
    </div>
  );
}
import { useWeatherContext } from '@state/hooks/weatherContext';
import dateConversion from '@utils/dateConversion';

export const Sun = () => {
  const { weather } = useWeatherContext();

  console.log('weather', weather);
  return (
    <div className="sun-info">
      <div className="sunrise">
        <p>Sunrise</p>
        <p>{dateConversion(weather.sys.sunrise * 1000)}</p>
      </div>
      <div className="sunset">
        <p>Sunset</p>
        <p>{dateConversion(weather.sys.sunset * 1000)}</p>
      </div>
    </div>
  );
};

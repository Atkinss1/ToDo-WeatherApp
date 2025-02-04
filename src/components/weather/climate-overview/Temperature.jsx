import { useWeatherContext } from '@state/hooks/weatherContext';

export const Temperature = () => {
  const { weather } = useWeatherContext();

  return (
    <div className="temp">
      <div className="current-temp">{Math.floor(weather.main.temp)}&deg;C</div>
      <div className="feels-like-temp">
        <p>Feels Like: &nbsp;{weather.main.feels_like}&deg;C</p>
      </div>
    </div>
  );
};

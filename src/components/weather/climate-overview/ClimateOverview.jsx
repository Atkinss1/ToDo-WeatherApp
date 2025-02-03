import { useWeatherContext } from '@state/hooks/weatherContext';
import { Sun } from './Sun';
import { Temperature } from './Temperature';

export const ClimateOverview = ({ mockWeather }) => {
  const { weather } = useWeatherContext();

  return (
    <div className="temp-and-sun-wrapper">
      <Temperature mockWeather={mockWeather} />
      <Sun mockWeather={mockWeather} />
    </div>
  );
};

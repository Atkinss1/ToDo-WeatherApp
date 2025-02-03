import { useContext } from 'react';
import { WeatherContext } from '../WeatherContextProvider';

export const useWeatherContext = () => {
  if (!WeatherContext) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return useContext(WeatherContext);
};

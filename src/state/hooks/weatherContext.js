import { createContext, useContext } from 'react';

export const WeatherContext = createContext();

export const useWeatherContext = () => {
  if (!WeatherContext) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return useContext(WeatherContext);
};

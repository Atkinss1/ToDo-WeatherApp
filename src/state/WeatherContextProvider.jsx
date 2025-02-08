import weatherService from '@service/weatherService';
import { WeatherContext } from '@state/hooks/weatherContext';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const getWeatherByCity = async (cityName) => {
    const result = await weatherService.getWeatherByCity(cityName);

    if (result.error) {
      setError(`${cityName} ${result.error.toLowerCase()}`);
      return;
    }

    setWeather(result.data);
  };

  return (
    <WeatherContext.Provider value={{ getWeatherByCity, weather, error }}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

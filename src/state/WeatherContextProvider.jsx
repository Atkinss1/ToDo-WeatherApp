import { useState } from 'react';
import { WeatherContext } from '@state/hooks/weatherContext';
import weatherService from '@service/weatherService';
import PropTypes from 'prop-types';

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);

  const getWeatherByCity = async (cityName) => {
    const data = await weatherService.getWeatherByCity(cityName);
    setWeather(data);
  };

  return (
    <WeatherContext.Provider value={{ getWeatherByCity, weather }}>
      {children}
    </WeatherContext.Provider>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

import { createContext, useState } from "react";
import PropTypes from 'prop-types';


export const WeatherContext = createContext();

export const WeatherContextProvider = ({ children }) => {
  const [weather, setWeather] = useState(null);



  return (
    <WeatherContext.Provider value={null} >
      {children}
    </WeatherContext.Provider>
  )
};

WeatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired
}
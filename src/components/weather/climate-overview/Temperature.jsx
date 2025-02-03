import React from 'react';

export const Temperature = ({ mockWeather }) => {
  return (
    <div className="temp">
      <div className="current-temp">
        {Math.floor(mockWeather.main.temp)}&deg;C
      </div>
      <div className="feels-like-temp">
        <p>Feels Like: &nbsp;{mockWeather.main.feels_like}&deg;C</p>
      </div>
    </div>
  );
};

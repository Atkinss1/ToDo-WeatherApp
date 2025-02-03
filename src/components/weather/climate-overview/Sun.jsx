import dateConversion from '@utils/dateConversion';
import React from 'react';

export const Sun = ({ mockWeather }) => {
  return (
    <div className="sun-info">
      <div className="sunrise">
        <p>Sunrise</p>
        <p>{dateConversion(mockWeather.sys.sunrise * 1000)}</p>
      </div>
      <div className="sunset">
        <p>Sunset</p>
        <p>{dateConversion(mockWeather.sys.sunset * 1000)}</p>
      </div>
    </div>
  );
};

import { Sun } from './Sun';
import { Temperature } from './Temperature';

export const ClimateOverview = () => {
  return (
    <div className="temp-and-sun-wrapper">
      <Temperature />
      <Sun />
    </div>
  );
};

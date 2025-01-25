import { ToDoWrapper } from '@components/todo/ToDoWrapper';
import { WeatherForm } from '@components/weather/WeatherForm';
import { useWeatherContext } from '@state/hooks/weatherContext';
import './App.css';
import { WeatherDetails } from './components/weather/WeatherDetails';

function App() {
  
	return (
		<div className='app-wrapper'>
			<div className='weather-app-wrapper'>
				<div className='weather-app'>
					<WeatherForm />
          <WeatherDetails />
				</div>
			</div>

			<div className='todo-app-wrapper'>
				<div className='todo-App'>
					<ToDoWrapper />
				</div>
			</div>
		</div>
	);
}

export default App;

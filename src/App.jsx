import { ToDoWrapper } from '@components/todo/ToDoWrapper';
import { WeatherForm } from '@components/weather/WeatherForm';
import './App.css';
import { WeatherWidget } from './components/weather/WeatherWidget';

function App() {

  const mockWeather = {
    main: {
      temp: 10,
      humidity: 80,
      pressure: 1010,
      feels_like: 10
    },
    wind: {
      speed: 5,
      deg: 290,
      gust: 2.96
    },
    sys: {
      sunrise: 1600000000,
      sunset: 1600000000
    },
    weather: [
      {
        icon: '01d',
        description: 'clear sky'
      }
    ],
    name: 'London'
  };
  
	return (
		<div className='app-wrapper'>
			<div className='weather-app-wrapper'>
				<div className='weather-app'>
					<WeatherForm />
          <WeatherWidget mockWeather={mockWeather}/>
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

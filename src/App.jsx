import './App.css';
import { ToDoWrapper } from './components/todo/ToDoWrapper';
import { WeatherForm } from './components/weather/WeatherForm';
import { WeatherContextProvider } from './state/WeatherContextProvider';

function App() {
	return (
		<div className='app-wrapper'>
			<WeatherContextProvider>
				<div className='weather-app-wrapper'>
					<div className='weather-app'>
						<WeatherForm />
					</div>
				</div>
			</WeatherContextProvider>

			<div className='todo-app-wrapper'>
				<div className='todo-App'>
					<ToDoWrapper />
				</div>
			</div>
		</div>
	);
}

export default App;

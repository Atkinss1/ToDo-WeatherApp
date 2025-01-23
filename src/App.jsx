import './App.css';
import { ToDoWrapper } from './components/todo/ToDoWrapper';
import { WeatherWrapper } from './components/weather/WeatherWrapper';

function App() {
	return (
		<div className='App-Wrapper'>
			<div className='Weather-App-Wrapper'>
				<div className='Weather-App'>
					<WeatherWrapper />
				</div>
			</div>

			<div className='Todo-App-Wrapper'>
				<div className='Todo-App'>
					<ToDoWrapper />
				</div>
			</div>
		</div>
	);
}

export default App;

import './App.css';
import { ToDoWrapper } from './components/ToDoWrapper';

function App() {
	return (
		<div className='App-Wrapper'>
			<div className='Weather-App-Wrapper'>
				<div className='Weather-App'>
					<p>weather app</p>
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

import { ToDoWrapper } from '@components/todo/ToDoWrapper';
import { WeatherForm } from '@components/weather/WeatherForm';
import './App.css';
import { WeatherWidget } from './components/weather/WeatherWidget';

function App() {
  return (
    <div className="app-wrapper">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <WeatherForm />
          <WeatherWidget />
        </div>
      </div>

      <div className="todo-app-wrapper">
        <div className="todo-App">
          <ToDoWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;

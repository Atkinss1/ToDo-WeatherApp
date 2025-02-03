import { TodosContextProvider } from '@state/TodosContextProvider.jsx';
import { WeatherContextProvider } from '@state/WeatherContextProvider.jsx';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route
          path="*"
          element={
            <TodosContextProvider>
              <WeatherContextProvider>
                <App />
              </WeatherContextProvider>
            </TodosContextProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

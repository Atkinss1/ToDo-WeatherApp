import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import App from './App.jsx'
import { TodosContextProvider } from './state/TodosContextProvider.jsx'

createRoot(document.getElementById('root')).render(
	<StrictMode>
		<BrowserRouter>
      <Routes>
        <Route path='*' element={
          <TodosContextProvider>
            <App/>
          </TodosContextProvider>
        } />
      </Routes>
		</BrowserRouter>
	</StrictMode>
);

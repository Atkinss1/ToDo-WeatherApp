import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { TodosContextProvider } from './state/TodosContextProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  </StrictMode>,
)

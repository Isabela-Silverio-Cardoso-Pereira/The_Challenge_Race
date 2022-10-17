import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import AnimatedRoutes from './components/AnimatedRoutes'
import { AuthProvider } from './contexts/Auth/AuthProvider'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <App />
        <AnimatedRoutes />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
)

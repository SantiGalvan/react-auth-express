import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './scss/index.scss'
import { BrowserRouter } from 'react-router-dom'
import { GlobalProvider } from './contexts/GlobalContext.jsx'
import { AuthProvider } from './contexts/AuthContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalProvider>
        <AuthProvider>

          <App />

        </AuthProvider>
      </GlobalProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

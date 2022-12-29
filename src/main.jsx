import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './index.css'
import './styles/colors.scss'
import './styles/fonts.scss'
import './styles/Mobile.scss'
import './styles/Desktop.scss'
import './styles/DarkMode.scss'
import './styles/LightMode.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

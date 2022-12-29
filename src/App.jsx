import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.scss'
import { AuthProvider } from './context/authContext'
import Home from './layouts/Home/Home'

function App() {
  const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const currentWidth = window.matchMedia('(min-width: 720px)').matches

  const [darkTheme, setDarkTheme] = useState(currentTheme)
  
  return (
    <div className="App" id='App'>
      <AuthProvider>
        <Routes>
          {/* To do a protected route and improve props */}
          <Route path='/' element={<Home theme={darkTheme} setDarkTheme={setDarkTheme} currentWidth={currentWidth} />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App

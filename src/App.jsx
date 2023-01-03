import { useState } from 'react'
import { Routes, Route } from 'react-router'
import './App.scss'
import Header from './components/Header/Header'
import { AuthProvider } from './context/authContext'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import Register from './layouts/Register/Register'
import ProtectedRoute from './ProtectedRoute'

function App() {
  const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const currentWidth = window.matchMedia('(min-width: 720px)').matches

  const [darkTheme, setDarkTheme] = useState(currentTheme)
  
  return (
    <div className="App" id='App'>
      <AuthProvider>
        <Header theme={darkTheme} setDarkTheme={setDarkTheme} currentWidth={currentWidth} />

        <Routes>
          <Route path='/' element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </AuthProvider>
    </div>
  )
}

export default App

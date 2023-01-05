import './App.scss'

import { Routes, Route } from 'react-router'
import { AuthProvider } from './context/authContext'

import Header from './components/Header/Header'
import Home from './layouts/Home/Home'
import Login from './layouts/Login/Login'
import Register from './layouts/Register/Register'
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <div className="App" id='App'>
      <AuthProvider>
        <Header />
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

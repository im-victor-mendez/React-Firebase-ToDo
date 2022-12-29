import { useState } from 'react'
import './App.scss'
import Header from './components/Header'

function App() {
  const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const currentWidth = window.matchMedia('(min-width: 720px)').matches

  const [darkTheme, setDarkTheme] = useState(currentTheme)
  
  return (
    <div className="App" id='App'>
      <Header theme={darkTheme} setDarkTheme={setDarkTheme} currentWidth={currentWidth} />
    </div>
  )
}

export default App

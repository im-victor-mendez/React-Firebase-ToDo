import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import ToDo_Maker from './components/ToDo_Maker/ToDo_Maker'

function App() {
  const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
  const currentWidth = window.matchMedia('(min-width: 720px)').matches

  const [darkTheme, setDarkTheme] = useState(currentTheme)
  
  return (
    <div className="App" id='App'>
      <Header theme={darkTheme} setDarkTheme={setDarkTheme} currentWidth={currentWidth} />
      <ToDo_Maker />
    </div>
  )
}

export default App

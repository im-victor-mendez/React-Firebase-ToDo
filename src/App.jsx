import { useState } from 'react'
import './App.css'

const currentTheme = window.matchMedia('(prefers-color-scheme: dark)').matches

function App() {
  const [darkTheme, setDarkTheme] = useState(currentTheme)
  
  return (
    <div className="App"
    style={{
      backgroundColor: darkTheme ? 'var(--very-dark-blue)' : 'var(--very-light-gray)',
    }}
    >
    </div>
  )
}

export default App

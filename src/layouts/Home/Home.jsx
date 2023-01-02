import React from 'react'
import Header from '../../components/Header'
import ToDo_Maker from '../../components/ToDo_Maker/ToDo_Maker'
import ToDo_Viewer from '../../components/ToDo_Viewer/ToDo_Viewer'

/* To fix props */
function Home({ theme, setDarkTheme, currentWidth }) {
  return (
    <section id='home'>
        <Header theme={theme} setDarkTheme={setDarkTheme} currentWidth={currentWidth} />
        <ToDo_Maker />
        <ToDo_Viewer />
    </section>
  )
}

export default Home
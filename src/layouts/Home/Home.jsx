import React from 'react'
import ToDo_Maker from '../../components/ToDo_Maker/ToDo_Maker'
import ToDo_Viewer from '../../components/ToDo_Viewer/ToDo_Viewer'

function Home() {
  return (
    <section id='home'>
        <ToDo_Maker />

        <ToDo_Viewer />
    </section>
  )
}

export default Home
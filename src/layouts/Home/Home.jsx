import './Home.scss'
import React from 'react'
import ToDo_Maker from '../../components/ToDo_Maker/ToDo_Maker'
import ToDo_Viewer from '../../components/ToDo_Viewer/ToDo_Viewer'
import { useAuthContext } from '../../context/authContext'

function Home() {
  const { logout } = useAuthContext()

  function onClickLogout() {
    logout()

    window.location.reload()
  }

  return (
    <section id='home'>
        <button id='logout' onClick={onClickLogout}>LogOut</button>

        <ToDo_Maker />

        <ToDo_Viewer />
    </section>
  )
}

export default Home
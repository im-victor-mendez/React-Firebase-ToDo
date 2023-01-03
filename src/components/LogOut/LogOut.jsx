import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

function LogOut() {
  const { logout } = useAuthContext()
  const navigate = useNavigate()

  function onClick() {
    logout()
    window.location.reload()
  }

  return (
    <section id='logout'>
      <button onClick={onClick}>LogOut</button>
    </section>
  )
}

export default LogOut
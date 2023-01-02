import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

function Login() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const { login } = useAuthContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

    async function onSubmit() {
        try {
            await login(user.email, user.password)
            navigate('/')
        } catch (error) {
            /* To do a file for messages and use here and in register layout */
            setError(error)
        }
    }

  return (
    <section id='login'>
        {error && <>{error.message}</>}
        <form
        onSubmit={(event) =>{
            event.preventDefault()
            onSubmit()
        }}
        >
            <label>
                Email:
                <input type="email" name='email' id='login-email' onChange={handleChange} />
            </label>

            <label>
                Password:
                <input type="password" name='password' id='login-password' onChange={handleChange} />
            </label>

            <button type="submit">Login</button>
        </form>
    </section>
  )
}

export default Login
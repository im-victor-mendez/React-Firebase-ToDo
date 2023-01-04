import './Login.scss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../../context/authContext'

function Login() {
    const [userLogin, setUserLogin] = useState(null)
    const [error, setError] = useState(null)

    const { user, login } = useAuthContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const target = event.target
        setUserLogin({ ...userLogin, [target.name]: target.value })
    }

    async function onSubmit() {
        try {
            await login(userLogin.email, userLogin.password)
            navigate('/')
        } catch (error) {
            /* To do a file for messages and use here and in register layout */
            setError(error)
        }
    }

  return (
    <section id='login'>
        {/* To do better messages */}
        { error && <>{error.message}</> }
        { user && <>Are you already logged :D
        <button onClick={() => navigate('/')}>Go Home :D</button>
        </>}

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

        <div className='userLogin-existence'>
            <p>Not register? Do it now! 😄</p>
            <button onClick={() => navigate('/register')}>Register</button>
        </div>
    </section>
  )
}

export default Login
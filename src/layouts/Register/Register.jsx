import './Register.scss'
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../../context/authContext'

function Register() {
    const [userRegister, setUserRegisterRegister] = useState(null)
    const [error, setError] = useState(null)

    const { user, register } = useAuthContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const target = event.target
        setUserRegisterRegister({ ...userRegisterRegister, [target.name]: target.value })
    }

    async function onSubmit() {
        try {
            await register(userRegister.email, userRegister.password)
            navigate('/')
        } catch (error) {
            let errorMessage
            switch (error.message) {
                case 'Firebase: Error (auth/email-already-in-use).':
                    errorMessage = 'Error: Email already in use.'
                    break;
            
                default:
                    errorMessage = error.message
                    break;
            }
            setError(errorMessage)
        }
    }

  return (
    <section id='register'>
        {/* To do better messages */}
        {error && <>{error.message}</>}
        { user && <>Are you already logged!
        <button onClick={() => navigate('/')}>Go Home :D</button>
        </>}
        
        <form onSubmit={(event) => {
            event.preventDefault()
            onSubmit()
        }}>
            <label>
                Email:
                <input type="email" name="email" id="register-email" onChange={handleChange} />
            </label>

            <label>
                Password:
                <input type="password" name="password" id="register-password" onChange={handleChange} />
            </label>

            <button type="submit">Register</button>
        </form>

        <div className='userRegister-existence'>
            <p>Do you have an account? LogIn! 😄</p>
            <button onClick={() => navigate('/login')}>LogIn</button>
        </div>
    </section>
  )
}

export default Register
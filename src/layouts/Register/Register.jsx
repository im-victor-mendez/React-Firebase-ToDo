import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { useAuthContext } from '../../context/authContext'

function Register() {
    const [user, setUser] = useState(null)
    const [error, setError] = useState(null)

    const { register } = useAuthContext()
    const navigate = useNavigate()

    function handleChange(event) {
        const target = event.target
        setUser({ ...user, [target.name]: target.value })
    }

    async function onSubmit() {
        try {
            await register(user.email, user.password)
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
        {error && <>{error.message}</>}
        
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
    </section>
  )
}

export default Register
import './ToDo_Maker.scss'
import React, { useState } from 'react'

import ICON_CROSS from '../../assets/images/icon-cross.svg'
import { uid } from 'uid'
import { ref, set } from 'firebase/database'
import { auth, db } from '../../firebase'

{/* To implement addTodo function */}
function ToDo_Maker() {
  const [todo, setTodo] = useState('')
  const [error, setError] = useState(null)

  function handleChange(event) {
    setTodo(event.target.value)
  }

  function writeDataBase() {
    if(todo) try {
      const uidd = uid()
      set(ref(db, `${auth.currentUser.uid}/${uidd}`), { todo, uidd })
    } catch (error) { setError(error.message) }
  }

  return (
    <form id='todo_maker'
    onSubmit={(event) => {
      event.preventDefault()
      writeDataBase()
    }}
    >
      {/* To structure better :P */}
      {error && <>{error}</>}
        <button id='todo_maker-button' type='submit'>
            <img src={ICON_CROSS} alt="" />
        </button>

        <input type="text" name="todo" id="todo_maker-input" placeholder='Create a new todo...' onChange={handleChange} />
    </form>
  )
}

export default ToDo_Maker
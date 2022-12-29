import './ToDo_Maker.scss'
import React from 'react'

import ICON_CROSS from '../../assets/images/icon-cross.svg'

{/* To implement addTodo function */}
function ToDo_Maker() {
  return (
    <form id='todo_maker'>
        <button id='todo_maker-button' type='submit'>
            <img src={ICON_CROSS} alt="" />
        </button>

        <input type="text" name="todo" id="todo_maker-input" placeholder='Create a new todo...' />
    </form>
  )
}

export default ToDo_Maker
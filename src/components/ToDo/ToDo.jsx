import React from 'react'
import ICON_CHECK from "../../assets/images/icon-check.svg";

function ToDo({ content }) {
  return (
    <div className='todo'>
        {/* To implement onClick function */}
        <button className='todo-button'>
            <img src={ICON_CHECK} alt="" />
        </button>

        <p>{ content }</p>
    </div>
  )
}

export default ToDo
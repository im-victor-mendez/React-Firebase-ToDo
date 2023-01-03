import './ToDo.scss'
import React from 'react'
import ICON_CHECK from "../../assets/images/icon-check.svg";
import ICON_CROSS from "../../assets/images/icon-cross.svg";

function ToDo({ content }) {
  return (
    <div className='todo'>
        {/* To implement onClick function */}
        <button className='todo-check-button'>
            <img src={ICON_CHECK} alt="" />
        </button>

        <p>{ content }</p>

        <button className='todo-delete-button'>
          <img src={ICON_CROSS} alt="" />
        </button>
    </div>
  )
}

export default ToDo
import './ToDo.scss'
import React from 'react'
import ICON_CHECK from "../../assets/images/icon-check.svg";
import ICON_CROSS from "../../assets/images/icon-cross.svg";
import { ref, remove } from '@firebase/database';
import { db } from '../../firebase';
import { useAuthContext } from '../../context/authContext';

function ToDo({ content, uid }) {
  const { user } = useAuthContext()

  async function deleteToDo() {
    try {
      await remove(ref(db, `/${user.uid}/${uid}`))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='todo'>
        {/* To implement onClick function */}
        <button className='todo-check-button'>
            <img src={ICON_CHECK} alt="" />
        </button>

        <p>{ content }</p>

        <button className='todo-delete-button' onClick={deleteToDo}>
          <img src={ICON_CROSS} alt="" />
        </button>
    </div>
  )
}

export default ToDo
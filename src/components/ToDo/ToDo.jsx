import './ToDo.scss'
import React, { useState } from 'react'
import ICON_CHECK from "../../assets/images/icon-check.svg";
import ICON_CROSS from "../../assets/images/icon-cross.svg";
import { ref, remove, update } from '@firebase/database';
import { db } from '../../firebase';
import { useAuthContext } from '../../context/authContext';

function ToDo({ uid, content, status }) {
  const [finished, setFinished] = useState(status)
  
  const { user } = useAuthContext()

  function changeStatus() {
    const newStatus = !finished

    update(ref(db, `/${user.uid}/${uid}`), { status: newStatus })
    setFinished(newStatus)
  }

  async function deleteToDo() {
    try {
      await remove(ref(db, `/${user.uid}/${uid}`))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='todo'>
        <button className='todo-check-button'
        style={{
          backgroundImage: finished ? 'var(--check-background)' : 'none'
        }}
        onClick={changeStatus}
        >
            <img src={ICON_CHECK} alt="" style={{
              display: finished ? 'block' : 'none'
            }} />
        </button>

        <p>{ content }</p>

        <button className='todo-delete-button' onClick={deleteToDo}>
          <img src={ICON_CROSS} alt="" />
        </button>
    </div>
  )
}

export default ToDo
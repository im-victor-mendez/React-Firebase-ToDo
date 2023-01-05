import './ToDo_Viewer.scss'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { uid } from 'uid'
import { useAuthContext } from '../../context/authContext'
import { auth, db } from '../../firebase'
import ToDo from '../ToDo/ToDo'

function ToDo_Viewer() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState(null)

    const { user } = useAuthContext()

    useEffect(() => {
        if(user) onValue(ref(db, `${auth.currentUser.uid}`), snapshot => onValueCallback(snapshot))
    }, [])

    function onValueCallback(snapshot) {
        setTodos([])

        const data = snapshot.val()
        if (data) Object.values(data).map(todo => setTodos(oldArray => [...oldArray, todo]))
    }

  return (
    <section id='todo_viewer'>
        { todos && todos.filter(todo => { if(!filter) return todo; return `${todo.status}` === filter }).map(todo => <ToDo key={uid()} uid={todo.uidd} content={todo.todo} status={todo.status} />) }

        <div id='todo_viewer-filter'>
          <p id='todo_viewer-items_left'>{ todos && todos.filter(todo => todo.status === false).length } items left</p>

          <form id='todo_viewer-filters' onChange={event => setFilter(event.target.value)}>
            <label className='filter-label'>
              All
              <input type="radio" name="filter" className='filter' value={null} />
            </label>

            <label className='filter-label'>
              Active
              <input type="radio" name="filter" className='filter' value={false} />
            </label>

            <label className='filter-label'>
              Completed
              <input type="radio" name="filter" className='filter' value={true} />
            </label>
          </form>

          <button className='clear'>Clear Completed</button>
        </div>
    </section>
  )
}

export default ToDo_Viewer
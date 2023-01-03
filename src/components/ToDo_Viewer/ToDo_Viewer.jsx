import './ToDo_Viewer.scss'
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { uid } from 'uid'
import { useAuthContext } from '../../context/authContext'
import { auth, db } from '../../firebase'
import ToDo from '../ToDo/ToDo'

function ToDo_Viewer() {
    const [todos, setTodos] = useState([])

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
        { todos && todos.map(todo => <ToDo content={todo.todo} key={uid()} />) }
    </section>
  )
}

export default ToDo_Viewer
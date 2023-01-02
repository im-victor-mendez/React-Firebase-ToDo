import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { useAuthContext } from '../../context/authContext'
import { auth, db } from '../../firebase'

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
        {todos && todos.map(todo => <>{ todo.todo }</>)}
    </section>
  )
}

export default ToDo_Viewer
import React, { useState } from 'react'

const TodoList = () => {
    const [todos, setTodos] = useState([{ id: "1", text: "todo1" }, { id: "1", text: "todo1" }])




    return (
        <ul>
            {
                todos.map(item => { return <li> {item.text}</li> })
            }
            <li>

            </li>
        </ul>
    )
}

export default TodoList
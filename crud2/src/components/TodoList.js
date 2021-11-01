import React from 'react'

const TodoList = ({todos, setTodos}) => {
    return (
        <div>
            {todos.map(todo => {
                <li className="todo-list" key={todo.id}>
                    {todo.title}
                    <input type="text" value={todo.title} className="list" onChange={e => e.preventDefault()} />
                </li>
            })}
        </div>
    )
}

export default TodoList

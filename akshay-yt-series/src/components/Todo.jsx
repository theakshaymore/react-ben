import React, { useState } from "react";

function Todo() {
    // 
  const [todoList, setTodoList] = useState([
    { id: 1, text: "javascript", completed: false },
    { id: 2, text: "react", completed: false },
  ]);

  const checkboxHandler = (id) => {
    todoList.map(todo => {
        if (todo.id == id) {
           return  (...todo,
            completed: !todo.completed
        }else{
            return todo
        }
  })
  }

  return (
    <>
      <input type="text" placeholder="Enter todo" />
      <button>Add</button>
      <div>
        <ul>
          {todoList.map((todo) => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => checkboxHandler(todo.id)}
              />
              <span className={todo.completed ? "strike" : ""}>
                {todo.text}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Todo;

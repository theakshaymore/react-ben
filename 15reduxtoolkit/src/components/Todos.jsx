import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const [editingId, setEditingId] = useState(null);
  const [editText, setEditText] = useState("");

  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
          >
            {editingId === todo.id ? (
              <>
                <input
                  type="text"
                  className="bg-gray-700 text-white px-2 py-1 rounded"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button
                  onClick={() => {
                    dispatch(updateTodo({ id: todo.id, text: editText }));
                    setEditingId(null);
                    setEditText("");
                  }}
                  className="ml-2 text-white bg-green-500 px-3 rounded"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditingId(null);
                    setEditText("");
                  }}
                  className="ml-2 text-white bg-gray-500 px-3 rounded"
                >
                  Cancel
                </button>
              </>
            ) : (
              <>
                <span className="text-white">{todo.text}</span>
                <div>
                  <button
                    onClick={() => {
                      setEditingId(todo.id);
                      setEditText(todo.text);
                    }}
                    className="ml-2 text-white bg-yellow-500 px-3 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => dispatch(removeTodo({ id: todo.id }))}
                    className="ml-2 text-white bg-red-500 px-3 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

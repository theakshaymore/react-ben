import { createContext, useContext } from "react";

// context creation with initial values
export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "todo title",
      completed: false,
    },
  ],
  addTodo: (title) => {},
  editTodo: (id, title) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

// context-provider creation
export const TodoProvider = TodoContext.Provider;

// this is for use everywhere
export const useTodo = () => {
  return useContext(TodoContext);
};

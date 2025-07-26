import { createContext, useContext } from "react";

// context creation with initial values
export const TodoContext = createContext({});

// context-provider creation
export const TodoProvider = TodoContext.Provider;

// this is for use everywhere
export const useTodo = () => {
  return useContext(TodoContext);
};

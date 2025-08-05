import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [
    {
      id: 1,
      text: "akshay",
    },
  ],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        text: action.payload.text,
      };
      state.todos.push(todo);
    },
    removeTodo: () => {},
  },
});

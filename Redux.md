# React Redux Toolkit

## store:

- single source of truth
- global varibale

## reducers

- manages functionality of store
- useSelector() - select the value from store
- useDispatch() - dispatch/send value from store

## Learning steps

- npm install @reduxjs/toolkit
- npm install react-redux
  What's Included
  Redux Toolkit includes these APIs:

#### configureStore():

wraps createStore to provide simplified configuration options and good defaults. It can automatically combine your slice reducers, adds whatever Redux middleware you supply, includes redux-thunk by default, and enables use of the Redux DevTools Extension.

#### createReducer():

that lets you supply a lookup table of action types to case reducer functions, rather than writing switch statements. In addition, it automatically uses the immer library to let you write simpler immutable updates with normal mutative code, like state.todos[3].completed = true.

#### createAction():

generates an action creator function for the given action type string.

#### createSlice():

accepts an object of reducer functions, a slice name, and an initial state value, and automatically generates a slice reducer with corresponding action creators and action types.

#### combineSlices():

combines multiple slices into a single reducer, and allows "lazy loading" of slices after initialisation.

#### createAsyncThunk:

accepts an action type string and a function that returns a promise, and generates a thunk that dispatches pending/fulfilled/rejected action types based on that promise

#### createEntityAdapter:

generates a set of reusable reducers and selectors to manage normalized data in the store

#### The createSelector

utility from the Reselect library, re-exported for ease of use.

## configureStore():

```
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/todo/todoSlice";

export const store = configureStore({
  reducer: todoReducer,
});
```

## createReducer():

```
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
    removeTodo: (state, action) => {
      //state.todos.pop(action.payload.id);
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    updateTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
      }
      state.todos.push(todo);
    },
  },
});

export const { addTodo, removeTodo, updateTodo } = todoSlice.actions;

export default todoSlice.reducer;


```

## Usage in Apps

### add (useDispatch)

```
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (event) => {
    event.preventDefault();
    // dispatch(addTodo(input));
    dispatch(addTodo({ text: input }));
    setInput("");
  };

  return (
    <form onSubmit={addTodoHandler}>
      <input
        type="text"
        value={input}
        onChange={(event) => setInput(event.target.value)}
      />

      <button type="submit" >Add Todo</button>
    </form>
  );
}

export default AddTodo;

```

### get (useSelector)

```
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <>
      <div>Todos</div>
      <ul >
        {todos.map((todo) => (
          <li key={todo.id}>
            <div>{todo.text}</div>
            <button
              onClick={() => dispatch(removeTodo({ id: todo.id }))}
            >
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;

```

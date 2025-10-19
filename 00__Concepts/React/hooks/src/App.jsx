import React, { useState } from "react";
import "./App.css";
import UseStateDemo from "./components/UseStateDemo";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>Ben Hooks Demo</h1>
      <UseStateDemo />
    </>
  );
}

export default App;

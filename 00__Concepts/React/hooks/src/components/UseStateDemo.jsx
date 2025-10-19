import React, { useState } from "react";

function UseStateDemo() {
  //
  const [count, setCount] = useState(0);

  function handleChange() {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  }

  return (
    <>
      <hr />
      <h2>useState()</h2>
      <p>{count}</p>
      <button onClick={handleChange}>increase count</button>
    </>
  );
}

export default UseStateDemo;

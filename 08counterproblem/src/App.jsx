import React, { useState } from "react";

function App() {
  const [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };

  return (
    <>
      <div>
        <h1>Ben-Counter</h1>
        <p>{counter}</p>

        <button onClick={addValue}>Increment +</button>
        <br />
        <button onClick={removeValue}>Increment -</button>

        <footer>{counter}</footer>
      </div>
    </>
  );
}

export default App;

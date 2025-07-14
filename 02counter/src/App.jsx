import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  return (
    <>
      <h1>Ben Counter {counter}</h1>

      <button>Increment {counter}</button>
      <br />
      <button>Decrement {counter}</button>

      <footer>{counter}</footer>
    </>
  );
}

export default App;

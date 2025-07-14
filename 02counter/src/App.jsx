import React, { useState } from "react";

function App() {
  let [counter, setCounter] = useState(15);

  const increaseCounter = () => {
    console.log(setCounter(counter + 1));
    console.log(counter);
  };

  const decreaseCounter = () => {
    counter = counter - 1;
    if (counter > 0) {
      console.log(setCounter(counter - 1));
      console.log(counter);
    }
  };

  return (
    <>
      <h1>Ben Counter 🙅‍♂️ {counter}</h1>

      <button onClick={increaseCounter}>Increment {counter}</button>
      <br />
      <button onClick={decreaseCounter}>Decrement {counter}</button>

      <footer>{counter}</footer>
    </>
  );
}

export default App;

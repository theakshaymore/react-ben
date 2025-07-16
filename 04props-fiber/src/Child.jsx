import React from "react";

function Child({ count, setCount }) {
  return (
    <div>
      <p>From Child: {count}</p>
      <button onClick={setCount}>From Child: Increase</button>
    </div>
  );
}

export default Child;

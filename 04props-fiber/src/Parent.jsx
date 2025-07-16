import { useState } from "react";
import Child from "./Child";

function Parent() {
  let [count, setCount] = useState(0);

  return (
    <div>
      Parent
      <Child count={count} setCount={() => setCount(count + 1)} />
    </div>
  );
}

export default Parent;

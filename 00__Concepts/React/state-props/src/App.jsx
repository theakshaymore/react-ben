import React, { useState } from "react";

import "./App.css";
import Second from "./Second";
import Third from "./Third";

function App() {
  const [userName, setUserName] = useState("akshaymore");

  return (
    <>
      <h1>Ben props $ state</h1>

      <p>{userName}</p>
      <hr />
      <Second username={userName} onChange={setUserName} />
      <hr />
      <Third username={userName} />
    </>
  );
}

export default App;

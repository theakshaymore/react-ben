import React, { useState } from "react";
import "./App.css";
import LocalAPI from "./LocalAPI";
import OnlineAPI from "./OnlineAPI";

function App() {
  return (
    <>
      <h1>Ben APIs</h1>
      {/* <LocalAPI /> */}
      <OnlineAPI />
    </>
  );
}

export default App;

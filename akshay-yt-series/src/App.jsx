import React, { useState } from "react";
import "./App.css";
import LocalAPI from "./LocalAPI";
import OnlineAPI from "./OnlineAPI";
import Accordion from "./components/Accordion";
// import Todo from "./components/Todo";

function App() {
  //

  const items = [
    {
      title: "JavaScript Basics",
      content: "Learn variables, functions, and loops in JavaScript.",
    },
    {
      title: "React.js Overview",
      content: "Understand components, state, and props in React.",
    },
    {
      title: "Node.js",
      content: "Basics of server-side development with Node.js.",
    },
    {
      title: "Full-Stack Development",
      content: "Build full-stack apps with React and Node.js.",
    },
  ];

  return (
    <>
      <h1>Ben APIs</h1>
      {/* <LocalAPI /> */}
      {/* <OnlineAPI /> */}
      <Accordion items={items} />
      {/* <Todo /> */}
    </>
  );
}

export default App;

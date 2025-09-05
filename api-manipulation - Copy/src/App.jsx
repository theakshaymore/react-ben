import React, { useState } from "react";
import "./App.css";
import LocalAPI from "./LocalAPI";
import OnlineAPI from "./OnlineAPI";
import Accordion from "./components/Accordion";
import Todo from "./components/Todo";

function App() {
  //

  const items = [
    {
      title: "first items Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat soluta in, minima porro dicta temporibus, totam facere reprehenderit laudantium cupiditate aliquid nihil debitis amet architecto labore aspernatur? Sunt, alias.",
    },
    {
      title: "second items Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat soluta in, minima porro dicta temporibus, totam facere reprehenderit laudantium cupiditate aliquid nihil debitis amet architecto labore aspernatur? Sunt, alias.",
    },
    {
      title: "third items Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat soluta in, minima porro dicta temporibus, totam facere reprehenderit laudantium cupiditate aliquid nihil debitis amet architecto labore aspernatur? Sunt, alias.",
    },
    {
      title: "fourth items Lorem ipsum dolor sit amet.",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat soluta in, minima porro dicta temporibus, totam facere reprehenderit laudantium cupiditate aliquid nihil debitis amet architecto labore aspernatur? Sunt, alias.",
    },
  ];

  return (
    <>
      <h1>Ben APIs</h1>
      {/* <LocalAPI /> */}
      {/* <OnlineAPI /> */}
      {/* <Accordion items={items} /> */}
      <Todo />
    </>
  );
}

export default App;

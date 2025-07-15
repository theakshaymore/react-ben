import React, { useState } from "react";
import Card from "./components/Card";

function App() {
  return (
    <>
      <div className="">
        <h1 className="bg-green-400 text-center rounded-2xl p-2">
          Tailwind Ben
        </h1>

        <Card title="Akshay" username="akshaymore" />
        <Card title="Hitesh" username="hiteshhh" />
      </div>
    </>
  );
}

export default App;

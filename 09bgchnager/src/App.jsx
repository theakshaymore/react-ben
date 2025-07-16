import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-6xl p-3">Ben-Bg-Changer</h1>

        <button
          onClick={() => setColor("red")}
          className="bg-red-600 p-2 rounded-xl"
        >
          Red
        </button>
        <br />
        <button
          onClick={() => setColor("green")}
          className="bg-green-600 p-2 rounded-xl"
        >
          Green
        </button>
        <br />
        <button
          onClick={() => setColor("blue")}
          className="bg-blue-600 p-2 rounded-xl"
        >
          Blue
        </button>
        <br />
        <button
          onClick={() => setColor("pink")}
          className="bg-pink-600 p-2 rounded-xl"
        >
          pink
        </button>
      </div>
    </>
  );
}

export default App;

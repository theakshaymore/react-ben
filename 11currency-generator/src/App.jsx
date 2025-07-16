import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full h-screen bg-black text-white">
      <h1 className="text-2xl">Ben Currency Convertor 💰</h1>
    </div>
  );
}

export default App;

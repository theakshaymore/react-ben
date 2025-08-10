import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios
      .get("/api/jokes")
      .then((res) => {
        setJokes(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <h1>Ben Backend- Frontend</h1>
      <p>Count: {jokes.length}</p>

      {jokes.map((joke) => (
        <div key={joke.id}>
          <h3>{joke.name}</h3>
          <p>{joke.desc}</p>
        </div>
      ))}
    </>
  );
}

export default App;

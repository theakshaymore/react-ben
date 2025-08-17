import React, { useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [users, setUsers] = useState([]);

  const getUsersFromAPI = async () => {
    try {
      const response = await axios.get("/api/jokes");
      setUsers(response.data);
      // console.log(response.data);
      console.log(users);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Ben APIs</h1>
      <div>
        <h2>User List from API</h2>
        <h3>User Count: {users.length}</h3>
        <button onClick={getUsersFromAPI}>Get UserList</button>
        {users.map((user) => (
          <div key={user.id}>
            <p>{user.name}</p>
            <p>{user.desc}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;

import React, { useState } from "react";
import axios from "axios";

function OnlineAPI() {
  const [users, setUsers] = useState([]);
  const getUsersFromAPI = async () => {
    try {
      const response = await axios.get(
        "https://api.freeapi.app/api/v1/public/randomusers"
      );
      console.log("DIRECT: ", response.data?.data?.data);
      setUsers(response.data?.data?.data);
      console.log("STATE: ", users);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>User List from API</h2>
      <h3>User Count: {users.length}</h3>
      <button onClick={getUsersFromAPI}>Get UserList</button>

      {users.map((user) => (
        <div key={user.id}>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <img src={user.picture.medium} alt="user-image" />
        </div>
      ))}
    </div>
  );
}

export default OnlineAPI;

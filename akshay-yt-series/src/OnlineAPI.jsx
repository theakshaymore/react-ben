import React, { useState } from "react";
import axios from "axios";

function OnlineAPI() {
  const [users, setUsers] = useState([]);
  let cancelToken;

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

  const changeHandler = async (event) => {
    event.preventDefault();
    const query = event.target.value;

    if (cancelToken) {
      cancelToken.cancel("Cancelled previous tokens");
    }
    cancelToken = axios.CancelToken.source();

    try {
      const response = await axios.get(
        `https://api.freeapi.app/api/v1/public/randomusers?q=${query}`,
        { cancelToken: cancelToken.token }
      );

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h2>User List from API</h2>
      <h3>User Count: {users.length}</h3>
      <button onClick={getUsersFromAPI}>Get UserList</button>
      <div>
        <input
          type="text"
          placeholder="enter text"
          className="border p-3"
          onChange={changeHandler}
        />
      </div>
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

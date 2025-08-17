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
      <h2 className="text-2xl font-semibold">User List from API</h2>
      <h3 className="text-sm text-gray-600 mb-4">User Count: {users.length}</h3>
      <button
        onClick={getUsersFromAPI}
        className="mb-6 rounded bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-500"
      >
        Get UserList
      </button>

      {users.map((user) => (
        <div
          className="max-w-sm rounded overflow-hidden shadow-lg mb-6"
          key={user.id}
        >
          <img
            className="w-full h-30 object-cover"
            src={user.picture.medium}
            alt="User picture"
            loading="lazy"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <p className="truncate">{user.email}</p>
              <p className="text-gray-600">{user.phone}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default OnlineAPI;

import React, { useState } from "react";
import { useEffect } from "react";

function Github() {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("https://api.github.com/users/theakshaymore")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      <p>Github Details</p>
      <p>Followers: {data.followers}</p>
      <p>Github Details</p>
    </div>
  );
}

export default Github;

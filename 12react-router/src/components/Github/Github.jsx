import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const [data, setData] = useState([]);

  const { gitusername = "theakshaymore" } = useParams();

  useEffect(() => {
    fetch(`https://api.github.com/users/${gitusername}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 ">
      <p className="text-3xl">Github Details</p>
      <p className="text-2xl">Followers: {data.followers}</p>
      <p className="text-2xl">Github Details</p>
      <img src={data.avatar_url} alt="git picture" />
    </div>
  );
}

export default Github;

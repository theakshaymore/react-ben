import React, { useState } from "react";
import { useEffect } from "react";
import { useParams, useLoaderData } from "react-router-dom";

function Github() {
  const { gitusername = "theakshaymore" } = useParams();

  const data = useLoaderData();

  //   const [data, setData] = useState([]);
  //   useEffect(() => {
  //     fetch(`https://api.github.com/users/${gitusername}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         console.log(data);
  //         setData(data);
  //       });
  //   }, []);

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

export const githubInfoLoader = async ({ params }) => {
  const gitusername = params.gitusername || "theakshaymore";
  const res = await fetch(`https://api.github.com/users/${gitusername}`);
  return res.json();
};

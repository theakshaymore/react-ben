import React, { useState } from "react";

function UseStateDemo() {
  //
  const [count, setCount] = useState(0);

  const [user, setUser] = useState({
    username: "akshaymore",
    age: 20,
    email: "akshay@gmail.com",
  });

  function handleChange() {
    setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
    // setCount((prev) => prev + 1);
  }

  function handleUserChange(fieldName, fieldValue) {
    switch (fieldName) {
      case "username":
        setUser({ ...user, username: fieldValue });
        break;
      case "age":
        setUser({ ...user, age: fieldValue });
        break;
      case "email":
        setUser({ ...user, email: fieldValue });
        break;
      default:
        break;
    }
  }

  return (
    <>
      <hr />
      <h2>useState()</h2>
      <p>{count}</p>
      <button onClick={handleChange}>increase count</button>
      <div>
        <input
          type="text"
          name="username"
          placeholder="enter new username"
          value={user.username}
          onChange={(event) =>
            handleUserChange(event.target.name, event.target.value)
          }
        />
        <input
          type="text"
          name="age"
          placeholder="enter new age"
          value={user.age}
          onChange={(event) =>
            handleUserChange(event.target.name, event.target.value)
          }
        />
        <input
          type="text"
          name="email"
          placeholder="enter new email"
          value={user.email}
          onChange={(event) =>
            handleUserChange(event.target.name, event.target.value)
          }
        />
        <br />
        <button type="submit">update user data</button>
        <br />
        <ul>
          <li>{user.username}</li>
          <li>{user.age}</li>
          <li>{user.email}</li>
        </ul>
      </div>
    </>
  );
}

export default UseStateDemo;

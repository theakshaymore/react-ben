import React, { useContext } from "react";
import UserContext from "../context/UserContext";

function Profile() {
  const { user } = useContext(UserContext);

  if (!user) return <div>Please login in</div>;

  return (
    <div>
      <h2>Welcome {user.username}</h2>
      <h3>Your password is - {user.password}</h3>
    </div>
  );
}

export default Profile;

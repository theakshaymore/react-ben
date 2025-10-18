import React from "react";

function Second({ username, onChange }) {
  return (
    <div>
      <p>{username}</p>
      <input
        type="text"
        value={username}
        onChange={(event) => onChange(event.target.value)}
      />
    </div>
  );
}

export default Second;

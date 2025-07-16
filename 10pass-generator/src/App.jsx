import React, { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [length, setLength] = useState(8);

  let generatePassword = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQXWYZabcdefghijklmnopqwxyz";

    if (isNumber) str = str + "1234567890";
    if (isCharacter) str = str + "!@#$%&";

    for (let i = 1; i <= length; i++) {
      let ran = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(ran);
    }

    setPassword(pass);
  }, [length, isNumber, isCharacter, setPassword]);

  const copyPassword = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current.setSelectionRange(0, 3);
    window.navigator.clipboard.writeText(password);
  }, [password]);

  const passwordRef = useRef(null);

  useEffect(() => {
    generatePassword();
  }, [length, isNumber, isCharacter, generatePassword]);

  return (
    <div>
      <div className="p-4 bg-gray-800 text-gray-100 m-5 rounded-2xl">
        <h2 className="text-lg font-bold mb-4 text-gray-100">
          Ben Password Generator 🙅‍♂️
        </h2>

        <div className="mb-4">
          <input
            value={password}
            ref={passwordRef}
            type="text"
            placeholder="password"
            readOnly
            className="p-2 border border-gray-500 bg-gray-700 rounded mr-2 flex-1 text-gray-100 placeholder-gray-300"
          />
          <button
            onClick={copyPassword}
            className="p-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Copy
          </button>
        </div>

        <div className="mb-4">
          <label className="block mb-1 text-gray-300">Length: {length}</label>
          <input
            onChange={(e) => setLength(e.target.value)}
            type="range"
            className="w-full h-2 bg-gray-600 rounded"
            min="1"
            max="100"
          />
        </div>

        <div className="flex gap-4">
          <label className="flex items-center gap-1 text-gray-100">
            <input
              onChange={() => {
                setIsNumber((prev) => !prev);
              }}
              type="checkbox"
              className="h-4 w-4 text-blue-400"
            />
            <span>Numbers</span>
          </label>
          <label className="flex items-center gap-1 text-gray-100">
            <input
              onChange={() => {
                setIsCharacter((prev) => !prev);
              }}
              type="checkbox"
              className="h-4 w-4 text-blue-400"
            />
            <span>Characters</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default App;

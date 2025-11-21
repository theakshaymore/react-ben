import React, { useState } from 'react';
import './App.css'

function App() {
  const [inputText, setInputText] = useState('');
  const [chipList, setChipList] = useState([]);


  function handlePress(event) {
    if (event.key === "Enter" && inputText.trim()) {
      setChipList((prev) => [...prev, inputText])
      setInputText('');
    }
  }
  function handleDelete(indexNo) {
    setChipList((prev) => prev.filter((chip, index) => index !== indexNo))
  }

  return (

    <div className='main-container'>
      <h2>Chips Input</h2>
      <input
        type="text"
        placeholder="Type a chip and press tag"
        className="input"
        value={inputText}
        onChange={(event) => setInputText(event.target.value)}
        onKeyDown={(event) => handlePress(event)}
      />
      <div>
        <ul>
          {chipList.map((chip, index) => (
            <li key={index}>
              {chip}<span> </span>
              <button
                onClick={() => handleDelete(index)}
              >X</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App

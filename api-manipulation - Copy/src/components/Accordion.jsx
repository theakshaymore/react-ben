import React, { useState } from "react";

function Accordion({ items }) {
  //
  const [currentIndex, setCurrentIndex] = useState(null);

  const clickHandler = (index) => {
    setCurrentIndex(currentIndex == index ? null : index);
    console.log(currentIndex);
  };
  return !items || items.length == 0 ? (
    "No items available"
  ) : (
    <>
      <div className="accordion">
        {items.map((item, index) => (
          <div className="accordion-item" key={index}>
            <button
              className="accordion-btn"
              onClick={() => clickHandler(index)}
            >
              {item.title}
            </button>
            {currentIndex == index && (
              <p className="accordion-text">{item.desc}</p>
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Accordion;

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import "./styles.css";

function Accordion({ items }) {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleClick = (index) => {
    setActiveAccordion(activeAccordion != index ? index : null);
  };

  return !items || items.length == 0 ? (
    "No items available"
  ) : (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <h4 className="accordion-title" onClick={() => handleClick(index)}>
            {item.title}
            {activeAccordion == index ? <FaChevronUp /> : <FaChevronDown />}
          </h4>

          {activeAccordion == index && (
            <div className="accordion-content">
              <p>{item.content}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Accordion;

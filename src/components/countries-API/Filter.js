import { useState } from "react";
import { FaAngleDown, FaAngleUp, FaArrowDown, FaArrowUp, FaCaretDown, FaCaretUp } from "react-icons/fa";

export default function Filter({filterCountries,continent}) {
  const [isOpen, setIsOpen] = useState(false); // Controls dropdown visibility

  const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  const handleSelect = (value) => {
    setIsOpen(false); // Close dropdown after selection
    filterCountries(value);
  };

  return (
    <div className="custom-select-wrapper">
      {/* Trigger to show/hide options */}
      <div className="custom-select-trigger" onClick={() => setIsOpen(!isOpen)}>
        <span>{continent === "all" ? "Filter by Region" : continent}</span>
        {isOpen ? <FaAngleUp /> : <FaAngleDown />}
      </div>

      {/* Dropdown options */}
      {isOpen && (
        <div className="custom-options">
          {options.map((option, index) => (
            <div
              key={index}
              className={`custom-option ${
                continent === option ? "selected" : ""
              }`}
              onClick={() => handleSelect(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

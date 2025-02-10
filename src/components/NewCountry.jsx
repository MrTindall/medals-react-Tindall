import React, { useState } from "react";
import "./NewCountry.css";

const NewCountryModal = ({ onAddCountry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [countryName, setCountryName] = useState("");

  const handleSave = () => {
    if (countryName.trim()) {
      onAddCountry(countryName);
      setCountryName(""); // Clear the input after saving
      setIsOpen(false); // Close the modal
    } else {
      alert("Please enter a valid country name");
    }
  };

  return (
    <>
      <button id="trigger" onClick={() => setIsOpen(true)}>Open Modal</button>

      {isOpen && (
        <>
          <div id="overlay" onClick={() => setIsOpen(false)}></div>

          <div id="dialog">
            <header>New Country</header>

            <div>
              <input
                type="text"
                id="text"
                placeholder="Enter country name"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
              />
            </div>

            <div>
              <button id="save" onClick={handleSave}>Save</button>
            </div>

            <div>
              <button id="cancel" onClick={() => setIsOpen(false)}>Cancel</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default NewCountryModal;

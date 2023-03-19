import React, { useState, useEffect } from "react";
import "./Popup.css";

function Popup({ character, handleClose }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(true);
  }, []);

  const handleClosePopup = () => {
    setIsOpen(false);
    setTimeout(handleClose, 300);
  };
  
  return (
    <div className={`popup ${isOpen ? "popup__open" : ""}`}>
        <div className="popup__inner">
          <button className="popup__close-button" onClick={handleClosePopup}>
            X
          </button>
          <h2>{character.name}</h2>
          <p>Height: {character.height}</p>
          <p>Mass: {character.mass}</p>
          <p>Hair color: {character.hair_color}</p>
          <p>Skin color: {character.skin_color}</p>
          <p>Eye color: {character.eye_color}</p>
          <p>Birth year: {character.birth_year}</p>
          <p>Gender: {character.gender}</p>
        </div>
    </div>
  );
}

export default Popup;
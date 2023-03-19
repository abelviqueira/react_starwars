import React from "react";

function Character({ character, handleClick }) {
  return (
    <li onClick={() => handleClick(character)}>
      <h3>{character.name}</h3>
    </li>
  );
}

export default Character;
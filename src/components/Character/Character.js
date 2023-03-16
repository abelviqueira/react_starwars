import React from "react";

function Character({ character, handleClick }) {
  return (
    <li onClick={() => handleClick(character)}>
      <h3>{character.name}</h3>
      <p>Gender: {character.gender}</p>
      <p>Birth Year: {character.birth_year}</p>
    </li>
  );
}

export default Character;
import React, {useState, useEffect} from 'react';
import * as API from '../../services/getCharacters';

export default function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    API.getAllCharacters().then(data => {
      setCharacters(data.results);
      setLoading(false);
    });
  }, []);

  return (
    <>
        <h2>List of Characters</h2>
        <ul className="listOfCharacters">
        {loading ? (
            <div>Loading...</div>
        ) : (
            characters.map(character => (
            <li key={character.url}>
                <p>{character.name}</p>
            </li>
            ))
        )}
        </ul>
    </>
  );
}
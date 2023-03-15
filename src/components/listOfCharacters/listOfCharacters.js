import React, {useState, useEffect} from 'react';
import * as API from '../../services/getCharacters';
import './listOfCharacters.css'

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
    <div className='c-characters-list'>
        <h2>List of Characters</h2>
        <ul className="listOfCharacters">
        {loading ? (
            <li>Loading...</li>
        ) : (
            characters.map(character => (
            <li key={character.url} onClick="">
                <p>{character.name}</p>
            </li>
            ))
        )}
        </ul>
    </div>
  );
}
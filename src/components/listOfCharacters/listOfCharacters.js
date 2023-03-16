import React, {useState, useEffect} from 'react';
import * as API from '../../services/getCharacters';
import './ListOfCharacters.css'
import SearchForm from "../SearchForm/SearchForm";
import Character from "../Character/Character";


export default function ListOfCharacters() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCharacter, setSelectedCharacter] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    API.getAllCharacters().then(data => {
      setCharacters(data.results);
      setLoading(false);
    });
  }, []);

  useEffect(() => {
    API.getCharacterByName(searchTerm)
      .then(response => response.json())
      .then(data => setCharacters(data.results))
      .catch(error => console.log(error));
  }, [searchTerm]);

  const handleClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='c-characters-list'>
      <SearchForm className='c-characters-list__search' handleSearch={handleSearch}></SearchForm>
      <div>
        {selectedCharacter && (
          <div className='c-characters-list__detail'>
            <h2>{selectedCharacter.name}</h2>
            <p>Height: {selectedCharacter.height}</p>
            <p>Mass: {selectedCharacter.mass}</p>
            <p>Hair Color: {selectedCharacter.hair_color}</p>
            <p>Skin Color: {selectedCharacter.skin_color}</p>
          </div>
        )}
        <div className='c-characters-list__list'>
          <h2>List of Characters</h2>
          <ul className="listOfCharacters">
            {loading ? (
                <li>Loading...</li>
            ) : (
              characters.map(character => (
                <Character key={character.url} character={character} handleClick={handleClick} />
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
import React, {useState, useEffect} from 'react';
import * as API from '../../services/getCharacters';
import './ListOfCharacters.css'
import SearchForm from "../SearchForm/SearchForm";
import Character from "../Character/Character";
import Popup from "../Popup/Popup";

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

  const handleCharacterClick = (character) => {
    setSelectedCharacter(character);
  };

  const handleClosePopup = () => {
    setSelectedCharacter(null);
  };

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className='c-characters-list'>
      <SearchForm className='c-characters-list__search' handleSearch={handleSearch}></SearchForm>
      <div>
        {selectedCharacter && (
          <Popup
            character={selectedCharacter}
            handleClose={handleClosePopup}
          />
        )}
        <div className='c-characters-list__list'>
          <h2>List of Characters</h2>
          <ul className="listOfCharacters">
            {loading ? (
                <li>Loading...</li>
            ) : (
              characters.map(character => (
                <Character key={character.url} character={character} handleClick={handleCharacterClick}/>
              ))
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}
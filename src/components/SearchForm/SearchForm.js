import React, { useState } from "react";
import './SearchForm.css'

function CharacterSearch(props) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    props.handleSearch(event.target.value);
  };

  return (
    <div>
      <form>
        <input type="text" placeholder="Search for a character..." value={searchTerm} onChange={handleInputChange} />
        <input type="submit" value={'Search'}/>
      </form>
    </div>
  );
}

export default CharacterSearch;
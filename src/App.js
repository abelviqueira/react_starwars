import React from 'react';
import './App.css';
import logo from './images/starwars-logo.png';
import { Link, Route } from "wouter";
import stars from './utils/Stars/stars';
import SearchForm from './components/SearchForm/SearchForm';
import ListOfCharacters from './components/listOfCharacters/listOfCharacters';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>
            <img src={logo} className="App-logo" alt="logo" /> 
          </h1>
        </Link>
        <SearchForm />
        <ListOfCharacters />
      </header>
    </div>
  );
}
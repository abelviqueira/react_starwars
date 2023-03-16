import React from 'react';
import './App.css';
import logo from './images/starwars-logo.png';
import { Link, Route } from "wouter";
import stars from './utils/Stars/stars';
import ListOfCharacters from './components/ListOfCharacters/ListOfCharacters';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <h1>
            <img src={logo} className="App-logo" alt="logo" /> 
          </h1>
        </Link>
        <ListOfCharacters />
      </header>
    </div>
  );
}
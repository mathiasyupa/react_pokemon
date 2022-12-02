//import logo from './logo.svg';
//import './App.css';
import React, { useState } from "react";
import PokemonList from "./PokemonList";
function App() {
  const [pokemon, setPokemon] = useState(["bulbasaur", "charmander"])
  return (
   <PokemonList pokemon={pokemon}/>


  );
}

export default App;

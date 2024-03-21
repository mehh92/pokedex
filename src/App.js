import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Importez Routes
 
import PokemonList from './PokemonList';
import Pokedex from './Pokedex';
 
function App() {
  const [pokedex, setPokedex] = useState([]);
 
  const addToPokedex = (pokemon) => {
    setPokedex([...pokedex, pokemon]);
    localStorage.setItem('pokedex', JSON.stringify([...pokedex, pokemon]));
  };
 
  const removeFromPokedex = (pokemon) => {
    const updatedPokedex = pokedex.filter(p => p !== pokemon);
    setPokedex(updatedPokedex);
    localStorage.setItem('pokedex', JSON.stringify(updatedPokedex));
  };
 
  useEffect(() => {
    const savedPokedex = JSON.parse(localStorage.getItem('pokedex'));
    if (savedPokedex) {
      setPokedex(savedPokedex);
    }
  }, []);
 
  return (
<Router>
<div>
<nav>
<ul>
<li>
<Link to="/">Pokemon List</Link>
</li>
<li>
<Link to="/pokedex">My Pokedex</Link>
</li>
</ul>
</nav>
 
        <Routes> {/* Remplacez les routes par des Routes */}
<Route path="/pokedex" element={<Pokedex pokedex={pokedex} removeFromPokedex={removeFromPokedex} />} />
<Route path="/" element={<PokemonList addToPokedex={addToPokedex} />} />
</Routes>
</div>
</Router>
  );
}
 
export default App;
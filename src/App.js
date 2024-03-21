import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import de Link
import Home from './pages/Home';
import PokedexPage from './pages/PokedexPage';
import './App.css'; // Import des styles CSS globaux
 
const App = () => {
    const [pokedex, setPokedex] = useState([]);
 
    const addToPokedex = (pokemonName) => {
        setPokedex([...pokedex, pokemonName]);
    };
 
    // const removeFromPokedex = (pokemonName) => {
    //     setPokedex(pokedex.filter(name => name !== pokemonName));
    // };

    const removeFromPokedex = (pokemonId) => {
        setPokedex(pokedex.filter(pokemon => pokemon.id !== pokemonId));
    };
    
 
    return (
<Router>
<div>
<nav>
<ul>
<li>
<Link to="/">Accueil</Link>
</li>
<li>
<Link to="/pokedex">Mon Pokédex</Link>
</li>
</ul>
</nav>
 
                <Routes>
<Route path="/" element={<Home addToPokedex={addToPokedex} />} />
<Route path="/pokedex" element={<PokedexPage pokedex={pokedex} removeFromPokedex={removeFromPokedex} />} />
</Routes>
</div>
</Router>
    );
};
 
export default App;
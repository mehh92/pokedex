import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import PokedexPage from './pages/PokedexPage';
import './App.css';


const App = () => {
    const [pokedex, setPokedex] = useState(() => {
        // Load the pokedex from localStorage or initialize as an empty array if not found
        const savedPokedex = localStorage.getItem('pokedex');
        return savedPokedex ? JSON.parse(savedPokedex) : [];
    });

    // Update localStorage whenever the pokedex state changes
    useEffect(() => {
        localStorage.setItem('pokedex', JSON.stringify(pokedex));
    }, [pokedex]);

    const addToPokedex = (pokemon) => {
        // Add a new pokemon to the pokedex state
        setPokedex(prev => [...prev, pokemon]);
    };

    const removeFromPokedex = (pokemonId) => {
        // Remove a pokemon from the pokedex state by filtering out the pokemon with the matching id
        setPokedex(pokedex.filter(pokemon => pokemon.id !== pokemonId));
    };

    const removeAllFromPokedex = () => {
        setPokedex([]);
        localStorage.removeItem('pokedex');
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
                    {/* <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} removeFromPokedex={removeFromPokedex} clearPokedex={clearPokedex} />} /> */}
                    <Route path="/pokedex" element={<PokedexPage pokedex={pokedex} removeFromPokedex={removeFromPokedex} removeAllFromPokedex={removeAllFromPokedex} />} />

                </Routes>
            </div>
        </Router>
    );
};

export default App;

import React from 'react';
import Pokedex from '../components/Pokedex';
 
const PokedexPage = ({ pokedex, removeFromPokedex }) => {
    return (
<div>
<h1>Mon Pokédex</h1>
<Pokedex pokedex={pokedex} removeFromPokedex={removeFromPokedex} />
</div>
    );
};
 
export default PokedexPage;
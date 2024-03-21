import React from 'react';
import Pokedex from '../components/Pokedex';
 

const PokedexPage = ({ pokedex, removeFromPokedex, removeAllFromPokedex }) => {
    return (
<div>
<h1>Mon Pokédex</h1>
<Pokedex pokedex={pokedex} removeFromPokedex={removeFromPokedex} removeAllFromPokedex={removeAllFromPokedex} />
</div>
    );
};
 
export default PokedexPage;
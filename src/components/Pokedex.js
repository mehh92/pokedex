import React from 'react';
 
const Pokedex = ({ pokedex, removeFromPokedex }) => {
    return (
<div>
<h2>Mon Pokédex</h2>
<div className="pokedex-list">
                {pokedex.map((pokemon, index) => (
<div key={index} className="pokemon-item">
<p>{pokemon}</p>
<button onClick={() => removeFromPokedex(pokemon)}>Supprimer</button>
</div>
                ))}
</div>
</div>
    );
};
 
export default Pokedex;
import React from 'react';

const Pokedex = ({ pokedex, removeFromPokedex, removeAllFromPokedex }) => {
    return (
        <div>
            <div className="pokedex-list">
                {pokedex.map((pokemon, index) => (
                    <div key={index} className="pokemon-item">
                        <p>{pokemon.name}</p>
                        <p>ID: {pokemon.id}</p>
                        <p>Types: {pokemon.types.join(', ')}</p>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <button onClick={() => removeFromPokedex(pokemon.id)}>Supprimer</button>
                        
                    </div>
                ))}
            </div>
            <button onClick={() => removeAllFromPokedex()}>Vider le Pokédex</button>
        </div>
    );
};

 
export default Pokedex;
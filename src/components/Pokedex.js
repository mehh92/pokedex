import React from 'react';

 
// const Pokedex = ({ pokedex, removeFromPokedex }) => {
//     return (
// <div>
// <h2>Mon Pokédex</h2>
// <div className="pokedex-list">
//                 {pokedex.map((pokemon, index) => (
// <div key={index} className="pokemon-item">
// <p>{pokemon}</p>
// <button onClick={() => removeFromPokedex(pokemon)}>Supprimer</button>
// </div>
//                 ))}
// </div>
// </div>
//     );
// };

// const clearPokedex = () => {
//     localStorage.clear();
// };

const Pokedex = ({ pokedex, removeFromPokedex, removeAllFromPokedex }) => {
    return (
        <div>
            {/* <h2>Mon Pokédex</h2> */}
            <div className="pokedex-list">
                {pokedex.map((pokemon, index) => (
                    <div key={index} className="pokemon-item">
                        <p>{pokemon.name}</p>
                        <p>ID: {pokemon.id}</p>
                        <p>Types: {pokemon.types.join(', ')}</p>
                        <img src={pokemon.image} alt={pokemon.name} />
                        {/* Now, you might want to adjust the removeFromPokedex call to use a unique identifier like pokemon.id */}
                        <button onClick={() => removeFromPokedex(pokemon.id)}>Supprimer</button>
                        
                    </div>
                ))}
            </div>
            <button onClick={() => removeAllFromPokedex()}>Vider le Pokédex</button>
        </div>
    );
};

 
export default Pokedex;
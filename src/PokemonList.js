import React, { useState, useEffect } from 'react';
 
function PokemonList({ addToPokedex }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState('');
  const [prevPage, setPrevPage] = useState('');
 
  useEffect(() => {
    fetchPokemonList('https://pokeapi.co/api/v2/pokemon');
  }, []);
 
  const fetchPokemonList = (url) => {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setPokemonList(data.results);
        setNextPage(data.next);
        setPrevPage(data.previous);
      });
  };
 
  const handleAddToPokedex = (pokemon) => {
    addToPokedex(pokemon);
    alert(`${pokemon.name} added to Pokedex!`);
  };
 
  return (
<div>
<h2>Pokemon List</h2>
<ul>
        {pokemonList.map((pokemon, index) => (
<li key={index}>
            {pokemon.name} -{' '}
<button onClick={() => handleAddToPokedex(pokemon)}>Add to Pokedex</button>
</li>
        ))}
</ul>
<div>
        {prevPage && <button onClick={() => fetchPokemonList(prevPage)}>Previous</button>}
        {nextPage && <button onClick={() => fetchPokemonList(nextPage)}>Next</button>}
</div>
</div>
  );
}
 
export default PokemonList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const PokemonList = ({ addToPokedex }) => {
    const [pokemonList, setPokemonList] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [searchQuery, setSearchQuery] = useState('');

 
    useEffect(() => {
        const fetchPokemonList = async () => {
            try {
                const response = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=50&offset=${(currentPage - 1) * 10}`);
                const data = response.data.results;
                const pokemonDataPromises = data.map(async (pokemon) => {
                    const pokemonResponse = await axios.get(pokemon.url);
                    return {
                        id: pokemonResponse.data.id,
                        name: pokemonResponse.data.name,
                        types: pokemonResponse.data.types.map(type => type.type.name),
                        image: pokemonResponse.data.sprites.front_default
                    };
                });
                const pokemonData = await Promise.all(pokemonDataPromises);
                setPokemonList(pokemonData);
                setTotalPages(Math.ceil(response.data.count / 10));
            } catch (error) {
                console.error('Error fetching Pokemon list:', error);
            }
        };
 
        fetchPokemonList();
    }, [currentPage]);
 
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value.toLowerCase());
    };

    const filteredPokemonList = pokemonList.filter(pokemon => 
        pokemon.name.toLowerCase().includes(searchQuery)
    );
    
    
 
    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };
 
    return (
<div>
{/* <h2>Pokémons</h2> */}
{/* <input
    type="text"
    placeholder="Search Pokémon..."
    value={searchQuery}
    onChange={handleSearchChange}
/> */}

<div className="search-container">
  <input
    type="text"
    placeholder="Search Pokémon..."
    value={searchQuery}
    onChange={handleSearchChange}
  />
</div>


<div className="pokemon-list">
                {/* {pokemonList.map((pokemon, index) => (
<div key={index} className="pokemon-item">
<p>{pokemon.name}</p>
<p>ID: {pokemon.id}</p>
<p>Types: {pokemon.types.join(', ')}</p>
<img src={pokemon.image} alt={pokemon.name} />
{/* <button onClick={() => addToPokedex(pokemon.name)}>Ajouter au Pokédex</button> */}
{/* <button onClick={() => addToPokedex(pokemon)}>Ajouter au Pokédex</button>
</div> */}
                {/* ))} */} 

                {filteredPokemonList.map((pokemon, index) => (
    <div key={index} className="pokemon-item">
        <p>{pokemon.name}</p>
        <p>ID: {pokemon.id}</p>
        <p>Types: {pokemon.types.join(', ')}</p>
        <img src={pokemon.image} alt={pokemon.name} />
        <button onClick={() => addToPokedex(pokemon)}>Ajouter au Pokédex</button>
    </div>
))}

</div>
{/* <div className="pagination">
<button onClick={handlePrevPage} disabled={currentPage === 1}>Page précédente</button>
<span>Page {currentPage} / {totalPages}</span>
<button onClick={handleNextPage} disabled={currentPage === totalPages}>Page suivante</button>
</div> */}

<div className="pagination">
  <button onClick={handlePrevPage} disabled={currentPage === 1}>Page précédente</button>
  <span>{currentPage} / {totalPages}</span>
  <button onClick={handleNextPage} disabled={currentPage === totalPages}>Page suivante</button>
</div>


</div>
    );
};
 
export default PokemonList;
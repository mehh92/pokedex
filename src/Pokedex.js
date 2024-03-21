import React, { useState } from 'react';
 
function Pokedex({ pokedex, removeFromPokedex }) {
  const [searchTerm, setSearchTerm] = useState('');
 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
 
  const filteredPokedex = pokedex.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
 
  return (
<div>
<h2>My Pokedex</h2>
<input
        type="text"
        placeholder="Search Pokemon"
        value={searchTerm}
        onChange={handleSearch}
      />
<ul>
        {filteredPokedex.map((pokemon, index) => (
<li key={index}>
            {pokemon.name}
<button onClick={() => removeFromPokedex(pokemon)}>Remove</button>
</li>
        ))}
</ul>
<button onClick={() => localStorage.clear()}>Clear Pokedex</button>
</div>
  );
}
 
export default Pokedex;
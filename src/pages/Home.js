import React from 'react';
import PokemonList from '../components/PokemonList';
 
const Home = ({ addToPokedex }) => {
    return (
<div>
<h1>Accueil</h1>
<PokemonList addToPokedex={addToPokedex} />
</div>
    );
};
 
export default Home;
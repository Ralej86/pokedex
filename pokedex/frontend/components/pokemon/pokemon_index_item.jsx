// {pokemon.map(poke =>
//   (<li key={poke.id}><h2>{poke.name}</h2>
//   <img src={poke.image_url}></img></li>))}
import React from 'react';
import { Link } from 'react-router-dom';


const PokemonIndexItem = (
  ({pokemon}) =>
  <li key={pokemon.id}>
    <Link to={`/pokemon/${pokemon.id}`}> <h2>{pokemon.name}</h2> <img src={pokemon.image_url}></img> </Link>
  </li>);

export default PokemonIndexItem;

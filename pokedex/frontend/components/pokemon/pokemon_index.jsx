import React from 'react';
import PokemonIndexItem from './pokemon_index_item';
import PokemonDetail from './pokemon_detail';
import { Route } from 'react-router-dom';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestAllPokemon();
  }

  render() {
    const {pokemon} = this.props;
    return(
      <div className="test">
        <ul>
          {pokemon.map( poke => <PokemonIndexItem key={poke.id} pokemon={poke} />)};
        </ul>
    </div>
  );}
}

export default PokemonIndex;

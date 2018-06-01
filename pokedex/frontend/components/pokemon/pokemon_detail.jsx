import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const {pokemon} = this.props;

    <div>
      <ul>
        <li>Type: {pokemon.type}</li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  }
}

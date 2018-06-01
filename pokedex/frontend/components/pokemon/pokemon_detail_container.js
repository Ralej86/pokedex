import { connect } from 'react-redux';
import { selectPokemon } from '../../reducers/selectors';
import { requestPokemon, receivePokemon
        , RECEIVE_POKEMON } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStateToProps = (state, ownProps) => ({
  pokemon: selectPokemon(state, ownProps.match.params.id)
});

const mapDispatchToProps = dispatch =>  ({
  requestPokemon: (id) => dispatch(requestPokemon(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PokemonDetail);

import { RECEIVE_ALL_POKEMON, RECEIVE_POKEMON } from '../actions/pokemon_actions';
import merge from 'lodash/merge';

const pokemonReducer = (state = {}, action) => {
  Object.freeze(state);
    switch(action.type) {
      case RECEIVE_ALL_POKEMON:
        return merge({}, state, action.pokemon);
      case RECEIVE_POKEMON:
        //LOOK AT ME, is merge correct?
         const newState = merge({}, state, {[action.pokemon.id]: action.pokemon});
         return newState;
      default:
        return state;
    }
};

export default pokemonReducer;

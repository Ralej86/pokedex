import merge from 'lodash/merge';

const itemsReducer = (state = {}, action) => {
  switch(action.type) {
    case RECEIVE_POKEMON:
      const newState = merge({}, state, {[action.pokemon]: action.pokemon.items});
      return newState;
    default:
      return state;
  }
};

import { values } from 'lodash';

export const selectAllPokemon = state => (values(state.entities.pokemon));

export const selectPokemon = (state, id) => (values(state.entities.pokemon.id));

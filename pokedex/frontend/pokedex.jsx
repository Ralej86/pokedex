import React from 'react';
import ReactDOM from 'react-dom';
import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import fetchAllPokemon from './util/api_util';
import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors';
import Root from './components/root';
import { HashRouter, Route } from 'react-router-dom';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.fetchAllPokemon = fetchAllPokemon;
  window.RECEIVE_ALL_POKEMON = RECEIVE_ALL_POKEMON;
  window.receiveAllPokemon = receiveAllPokemon;
  window.store = store;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  window.requestAllPokemon = requestAllPokemon;
  window.selectAllPokemon = selectAllPokemon;

  ReactDOM.render(<Root store={store}/>, root);
});

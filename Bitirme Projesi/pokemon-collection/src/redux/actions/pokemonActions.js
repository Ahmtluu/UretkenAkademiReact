import { ActionTypes } from "../constants/action-types";

export const setPokemons = (pokemons) => {
  return {
    type: ActionTypes.SET_POKEMONS,
    payload: pokemons,
  };
};

export const selectPokemon = (pokemon) => {
  return {
    type: ActionTypes.SELECTED_POKEMON,
    payload: pokemon,
  };
};

export const removeSelectedPokemons = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_POKEMON,
  };
};

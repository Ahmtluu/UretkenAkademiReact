import { ActionTypes } from "../constants/action-types";

const initialState = {
  pokemons: [],
};
export const pokemonReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_POKEMONS:
      return { ...state, pokemons: payload };
    default:
      return state;
  }
};

export const selectedPokemonReducer = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_POKEMON:
      return { ...state, ...payload };
    case ActionTypes.REMOVE_SELECTED_POKEMON:
      return {};
    default:
      return state;
  }
};

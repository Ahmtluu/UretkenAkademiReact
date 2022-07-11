import { combineReducers } from "redux";
import {pokemonReducer,selectedPokemonReducer} from "./pokemonReducer";

const reducers = combineReducers({
  allPokemons: pokemonReducer,
  pokemon: selectedPokemonReducer,
});

export default reducers;

import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import PokemonAvatar from "../components/PokemonAvatar";
import PokemonAbilities from "../components/PokemonAbilities";
import PokemonInfo from "../components/PokemonInfo";
import PokemonType from "../components/PokemonType";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPokemon,
  removeSelectedPokemons,
} from "../redux/actions/pokemonActions";

export default function DetailPage() {
  const pokemon = useSelector((state) => state.pokemon);
  const { id } = useParams();

  const dispatch = useDispatch();

  const fetchSelectedPokemon = async () => {
    const response = await axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .catch((err) => console.log(err));
    dispatch(selectPokemon(response.data));
  };

  useEffect(() => {
    if (id && id !== "") fetchSelectedPokemon();
    return () => {
      dispatch(removeSelectedPokemons());
    };
  }, [id]);

  return (
    <section>
      <div className="container py-3">
        <div className="row">
          <div className="col-lg-4">
            <PokemonAvatar />
            <PokemonType />
          </div>
          <div className="col-lg-8">
            <PokemonInfo />
            <div className="col-lg-8">
              <PokemonAbilities />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

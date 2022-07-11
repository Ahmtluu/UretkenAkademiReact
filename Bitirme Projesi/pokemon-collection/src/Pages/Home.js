import { useEffect } from "react";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { setPokemons } from "../redux/actions/pokemonActions";
import axios from "axios";

export default function Home() {
  const pokemons = useSelector((state) => state.allPokemons.pokemons);
  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=51")
      .catch((err) => console.log(err));
    dispatch(setPokemons(response.data.results));
  };

  useEffect(() => {
    fetchPokemons();
  }, []);

  return (
    <main className="mt-3">
      <div className="container">
        <Header />
        <PokemonList />
      </div>
    </main>
  );
}

import { useEffect } from "react";
import PokemonList from "../components/PokemonList";
import Header from "../components/Header";
import { useDispatch } from "react-redux";
import { setPokemons } from "../redux/actions/pokemonActions";
import axios from "axios";

export default function Home() {

  console.log(process.env.REACT_APP_FIREBASE_API_KEY)

  const dispatch = useDispatch();

  const fetchPokemons = async () => {
    const response = await axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=51")
      .catch((err) => console.log(err));
    dispatch(setPokemons(response.data.results));
  };

  useEffect(() => {
    fetchPokemons();
  });

  return (
    <main className="mt-3">
      <div className="container">
        <Header />
        <PokemonList />
      </div>
    </main>
  );
}

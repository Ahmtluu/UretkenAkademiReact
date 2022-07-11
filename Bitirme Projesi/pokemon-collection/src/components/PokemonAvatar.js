import React from "react";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function PokemonAvatar() {
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <div className="card mb-4">
      <div className="card-body text-center">
        {pokemon ? (
          <img
            src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
            alt="pokemon"
            className="img-fluid avatar"
          />
        ) : (
          <TailSpin color="#F37878" height={80} width={80} />
        )}
      </div>
    </div>
  );
}

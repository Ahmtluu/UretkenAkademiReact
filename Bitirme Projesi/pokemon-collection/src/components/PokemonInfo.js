import React from "react";
import { Heart } from "react-bootstrap-icons";
import { addFavPokemon } from "../service/firebase";
import { TailSpin } from "react-loader-spinner";
import { useSelector } from "react-redux";

export default function PokemonInfo() {
  const pokemon = useSelector((state) => state.pokemon);

  return (
    <div className="card mb-4">
      <div className="card-body pokemon-info-card">
        <div className="container">
          <div className="row mt-3">
            <div className="col-sm-3">
              <p className="mb-0">Name</p>
            </div>
            <div className="col-sm-9">
              <p className="mb-0">
                {pokemon.name?.charAt(0).toUpperCase() + pokemon.name?.slice(1)}
              </p>
            </div>
            <hr />
          </div>
        </div>

        <div className="container">
          {pokemon.stats ? (
            pokemon.stats.map((stat, idx) => (
              <div className="row" key={idx}>
                <div className="col-sm-3">
                  <p className="mb-0">
                    {stat.stat.name?.charAt(0).toUpperCase() +
                      stat.stat.name?.slice(1)}
                  </p>
                </div>
                <div className="col-sm-9">
                  <p className="mb-0">{stat.base_stat}</p>
                </div>
                <hr />
              </div>
            ))
          ) : (
            <TailSpin color="#F37878" height={80} width={80} />
          )}
        </div>

        <div className="row d-flex text-end m-1">
          <div className="col-sm-12">
            <button
              type="button"
              onClick={(e) => addFavPokemon(pokemon)}
              className="btn btn-danger"
            >
              <Heart /> | Add Favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

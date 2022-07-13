import React from "react";
import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PokemonList() {
  const pokemons = useSelector((state) => state.allPokemons.pokemons);

  const renderList = pokemons.map((pokemon, idx) => {
    return (
      <div className="col-lg-4 col-md-6 mb-4" key={idx}>
        <Link to={`/pokemon/${idx + 1}`}>
          <Card
            id="pokemon-card"
            className="cards item-center"
            style={{ width: "20rem" }}
          >
            <Image
              src={`https://img.pokemondb.net/artwork/large/${pokemon.name}.jpg`}
              alt="talkie"
              className="card-img-top"
            />

            <Card.Body>
              <Card.Title className="card-title">
                {pokemon.name[0].toUpperCase() + pokemon.name.slice(1)}
              </Card.Title>
            </Card.Body>
          </Card>
        </Link>
      </div>
    );
  });

  return (
    <div className="row text-center">
      <>{renderList}</>
    </div>
  );
}

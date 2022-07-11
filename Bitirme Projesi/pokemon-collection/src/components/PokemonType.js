import React from "react";
import { useSelector } from "react-redux";

export default function PokemonType(props) {
  const { types } = useSelector((state) => state.pokemon);

  return (
    <div className="card mb-4 ">
      <div className="card-body p-0 pokemon-ability-card">
        <h3 className="text-center mt-2 card-title">Types</h3>
        <hr />
        <ul className="list-group list-group-horizontal">
          {types?.map(({ type }, idx) => (
            <img
              key={idx}
              id="type-icon"
              className="list-group-item border-0"
              src={require(`../Assets/icons/${type.name}.png`)}
              alt="type"
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

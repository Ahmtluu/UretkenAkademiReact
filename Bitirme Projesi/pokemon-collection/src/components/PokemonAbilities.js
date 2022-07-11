import React from "react";
import { useSelector } from "react-redux";

export default function PokemonAbilities() {
  const { abilities } = useSelector((state) => state.pokemon);

  return (
    <div className="card mb-4 ">
      <div className="card-body p-0 pokemon-ability-card">
        <h3 className="text-center mt-2 card-title">Abilities</h3>
        <hr />
        <ul className="list-group list-group-flush rounded-3">
          {abilities?.map(({ ability }, idx) => (
            <li
              className="list-group-item d-flex justify-content-between align-items-center p-3 pokemon-ability-card"
              key={idx}
            >
              <i className="fas fa fa-superpowers fa-color"></i>
              <p className="mb-0">
                {ability.name[0].toUpperCase() + ability.name.slice(1)}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

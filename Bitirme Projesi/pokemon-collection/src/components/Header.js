import React from "react";
import HeaderImage from "../Assets/Charmander.png";
import PokemonLogo from "../Assets/Pokemon_Logo.png";

export default function Header() {
  return (
    <section>
      <div className="row">
        <div className="col-md-6 gx-5 mb-4">
          <div className="bg-image" data-mdb-ripple-color="light">
            <img src={HeaderImage} className="img-fluid" alt="slideImage" />
          </div>
        </div>

        <div className="col-md-6 logo-container">
          <img className=" img-fluid mt-5" src={PokemonLogo} alt="slideImage" />
        </div>
      </div>
      <hr className="my-3" />
    </section>
  );
}

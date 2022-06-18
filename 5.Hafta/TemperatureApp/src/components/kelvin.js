import React from "react";

export function Kelvin(props) {
  return (
    <div class="col">
      <p>Kelvin - {props.kelvinTemp + 273.15}</p>
    </div>
  );
}

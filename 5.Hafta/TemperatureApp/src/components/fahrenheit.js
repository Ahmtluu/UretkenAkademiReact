import React from "react";

export function Fahrenheit(props) {
  return (
    <div class="col">
      <p>Fahrenheit - {props.fahrenheitTemp * 1.8 + 32}</p>
    </div>
  );
}

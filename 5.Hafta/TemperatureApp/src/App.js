import "./App.css";
import React, { useState } from "react";
import { Celcius } from "./components/celcius";
import { Fahrenheit } from "./components/fahrenheit";
import { Kelvin } from "./components/kelvin";
import { Button } from "reactstrap";

function App() {
  const [temperature, setTemperature] = useState(1);

  const increaseTemp = () => {
    setTemperature((count) => count + 1);
  };

  return (
    <div className="App">
      <div className="container">
        <h3 className="pt-3">Hava Nasıl?</h3>
        <p>Şu anda sıcaklık {temperature} derece</p>
        <Button color="secondary" onClick={increaseTemp}>
          Sıcaklık Artır
        </Button>
        <p>3 Birimde Sıcaklık Ölçümü</p>

        <div className="container">
          <div className="row">
            <Celcius celciusTemp={temperature} />
            <Fahrenheit fahrenheitTemp={temperature} />
            <Kelvin kelvinTemp={temperature} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

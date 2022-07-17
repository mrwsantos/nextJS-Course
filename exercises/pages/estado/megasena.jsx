import React from "react";
import { mega } from "../../functions/mega";
import NumeroDisplay from "./../../components/NumeroDisplay";

const megasena = () => {
  const [qtde, setQtde] = React.useState(6);
  const [numeros, setNumeros] = React.useState([]);

  React.useEffect(() => setNumeros(mega()), []);

  function renderNumeros() {
    return numeros.map((numero) => (
      <NumeroDisplay key={numero} numero={numero} />
    ));
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <h1>megasena</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        {renderNumeros()}
      </div>
      <div>
        <input
          type="number"
          min={6}
          max={20}
          value={qtde}
          onChange={(e) => setQtde(e.target.value)}
        />
        <button onClick={() => setNumeros(mega(qtde))}>Gerar Aposta</button>
      </div>
    </div>
  );
};

export default megasena;

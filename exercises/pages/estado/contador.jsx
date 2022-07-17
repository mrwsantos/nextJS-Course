import React from "react";
import ContadorDisplay from "../../components/ContadorDisplay";

const contador = () => {
  const [numero, setNumero] = React.useState(0);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>Contador</h1>
      <ContadorDisplay numero={numero} />
      <div>
        <button onClick={() => setNumero((prev) => prev - 1)}>-</button>
        <button onClick={() => setNumero((prev) => prev + 1)}>+</button>
      </div>
    </div>
  );
};

export default contador;

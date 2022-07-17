import React from "react";

const estilo = {
  backgroundColor: "#222",
  color: "#fff",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: "100vh",
};

const mouse = () => {
  const [x, setX] = React.useState(0);
  const [y, setY] = React.useState(0);

  function quandoMove(ev) {
    setX(ev.clientX);
    setY(ev.clientY);
  }

  return (
    <div style={estilo} onMouseMove={quandoMove}>
      <span>Eixo X: {x}</span>
      <span>Eixo Y: {y}</span>
    </div>
  );
};

export default mouse;

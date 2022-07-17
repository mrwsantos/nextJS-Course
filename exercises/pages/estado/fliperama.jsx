import React from "react";

const quad = {
  width: "40px",
  height: "40px",
  border: "1px solid",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "#fff",
  fontSize: "1.5rem",
};

const button = {
  backgroundColor: "red",
  color: "#fff",
  fontSize: "2rem",
  cursor: "pointer",
};

const Fliperama = () => {
  const [a, setA] = React.useState(0);
  const [b, setB] = React.useState(0);
  const [c, setC] = React.useState(0);
  const [loading, setLoading] = React.useState(false);
  const [status, setStatus] = React.useState("");

  function girar() {
    setLoading(true);
    let rand = Math.floor(Math.random() * 10);
    let cta = 0;
    let cta2 = 0;
    setStatus('');
    setA(0)
    setB(0)
    setC(0)


    const timer = setInterval(() => {
      if (cta === 9) {
        cta = 0;
      }
      if (cta2 === 50) {
        setA(rand);
        vezB();
        clearInterval(timer);
        return;
      }
      setA(cta);
      cta++;
      cta2++;
    }, 25);
  }

  function vezB() {
    let rand = Math.floor(Math.random() * 10);
    let cta = 0;
    let cta2 = 0;

    const timer = setInterval(() => {
      if (cta === 9) {
        cta = 0;
      }
      if (cta2 === 50) {
        setB(rand);
        vezC();
        clearInterval(timer);
        return;
      }
      setB(cta);
      cta++;
      cta2++;
    }, 25);
  }
  function vezC() {
    let rand = Math.floor(Math.random() * 10);
    let cta = 0;
    let cta2 = 0;

    const timer = setInterval(() => {
      if (cta === 9) {
        cta = 0;
      }
      if (cta2 === 50) {
        setC(rand);
        clearInterval(timer);
        confere();
        return;
      }
      setC(cta);
      cta++;
      cta2++;
    }, 25);
  }

  function confere() {
    if (a === b && b === c) {
      setStatus("SORTUDO! PARABENS!");
    } else {
      setStatus("Não foi desta vez :( Mas, continue tentando!");
    }

    setLoading(false);
  }

  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e5e5e5",
        height: "100vh",
        gap: "5px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "5px",
        }}
      >
        <div className="quad quad-1" style={quad}>
          {a}
        </div>
        <div className="quad quad-2" style={quad}>
          {b}
        </div>
        <div className="quad quad-3" style={quad}>
          {c}
        </div>
      </div>
      <button onClick={girar} style={button} disabled={loading && "disabled"}>
        Acionar
      </button>
      <p>{status}</p>
    </div>
  );
};

export default Fliperama;

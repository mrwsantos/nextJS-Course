import React from "react";

const mega = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  justifyContent: "center",
  flexWrap: "wrap",
};
const circle = {
  width: "50px",
  height: "50px",
  fontSize: "1.5rem",
  backgroundColor: "#fcb300",
  borderRadius: "50px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
const button = {
  maxWidth: "150px",
};

const megasena = () => {
  const [boxes, setBoxes] = React.useState(3);
  const [circles, setCircles] = React.useState();

  function checkTwoAlgarisms(rand, arr) {
    if (rand < 10) {
      console.log(rand);
      rand = `0${rand}`;
      arr.push(rand);
    }else{
        arr.push(rand);
    }
  }

  function sortear() {
    let arr = [];
    for (let i = 0; i < boxes; i++) {
      const rand = Math.ceil(Math.random() * 60);
      const numAlreadyExists = arr.some((num) => num === rand);

      if (numAlreadyExists) {
        rand = Math.ceil(Math.random() * 60);
        checkTwoAlgarisms(rand, arr);
      } else {
        checkTwoAlgarisms(rand, arr);
      }
    }

    let allCircles = arr.sort().map((numero, index) => {
      return (
        <span key={index} style={circle}>
          {numero}
        </span>
      );
    });
    setCircles(allCircles);
  }

  return (
    <div style={mega}>
      <h2>Quantos numeros gostaria de sortear?</h2>
      <select onChange={({ target }) => setBoxes(target.value)}>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
      </select>

      <div style={{ display: "flex", gap: "10px", margin: "40px" }}>
        {circles}
      </div>

      <button style={button} onClick={() => sortear()}>
        SORTEAR
      </button>
    </div>
  );
};

export default megasena;

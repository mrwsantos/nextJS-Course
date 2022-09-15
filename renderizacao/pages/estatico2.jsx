import React from "react";

export function getStaticProps() {
  return {
    props: {
      numero: Math.random(),
    },
  };
}

const estatico2 = (props) => {
  return (
    <div>
      <h1>estatico 02</h1>
      <h2>{props.numero}</h2>
    </div>
  );
};

export default estatico2;

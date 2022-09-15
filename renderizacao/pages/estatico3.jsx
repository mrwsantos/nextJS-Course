import React from "react";

export function getStaticProps() {
  return {
    revalidate: 7, // tempo em segundos para gerar novo conteudo
    props: {
      numero: Math.random(),
    },
  };
}

const estatico3 = (props) => {
  return (
    <div>
      <h1>estatico 03</h1>
      <h2>{props.numero}</h2>
    </div>
  );
};

export default estatico3;

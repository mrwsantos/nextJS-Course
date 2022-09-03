import React from "react";

export function getStaticProps(){
    return{
        props:{
            numero: Math.random()
        }
    }
}

const Estatico = (props) => {
  return (
    <div>
      <span>Aleatorio: {props.numero}</span>
    </div>
  );
};

export default Estatico;

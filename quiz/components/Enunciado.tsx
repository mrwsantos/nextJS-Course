import React from "react";
import styles from "./Enunciado.module.css";

interface EnunciadoProps {
  texto: string;
}

const Enunciado = (props: EnunciadoProps) => {
  return (
    <div className={styles.enunciado}>
      <span className={styles.texto}>{props.texto}</span>
    </div>
  );
};

export default Enunciado;

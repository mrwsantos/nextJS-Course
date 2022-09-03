import React from "react";
import styles from "./EntradaNumerica.module.css";

interface EntradaNumericaProps {
  text: string;
  value: number;
  onChange: (newValue: number) => void;
}

const EntradaNumerica = (props: EntradaNumericaProps) => {
  const dec = () => props.onChange(props.value - 1);
  const inc = () => props.onChange(props.value + 1);

  return (
    <div className={styles.entradanumerica}>
      <span className={styles.text}>{props.text}</span>
      <span className={styles.value}>{props.value}</span>
      <div className={styles.botoes}>
        <button className={styles.btn} onClick={dec}>
          -
        </button>
        <button className={styles.btn} onClick={inc}>
          +
        </button>
      </div>
    </div>
  );
};

export default EntradaNumerica;

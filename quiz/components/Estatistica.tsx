import React from "react";
import styles from "./Estatistica.module.css";

interface EstatisticaProps {
  valor: any;
  texto: string;
  corFundo?: string;
  corFonte?: string;
}

const Estatistica = (props: EstatisticaProps) => {
  function renderizaCorCondicional() {
    let color = "";
    let bgColor = "";

    if (props.valor.replace("%", "") <= 35) {
      bgColor = "#ff0000";
      color = "#fff";
    } else if (props.valor.replace("%", "") <= 50) {
      bgColor = "#ff8c00";
      color = "#000";
    } else if (props.valor.replace("%", "") <= 75) {
      bgColor = "#eaff00";
      color = "#000";
    } else if (props.valor.replace("%", "") <= 100) {
      bgColor = "#a3f25e";
      color = "#000";
    }

    return (
      <div
        className={styles.valor}
        style={{
          backgroundColor: bgColor,
          color: color,
        }}
      >
        {props.valor}
      </div>
    );
  }

  return (
    <div className={styles.estatistica}>
      {props.texto === "Percentual" ? (
        renderizaCorCondicional()
      ) : (
        <div
          className={styles.valor}
          style={{
            backgroundColor: props.corFundo ?? "#FDD60F",
            color: props.corFonte ?? "#333",
          }}
        >
          {props.valor}
        </div>
      )}
      <div className={styles.texto}>{props.texto}</div>
    </div>
  );
};

export default Estatistica;

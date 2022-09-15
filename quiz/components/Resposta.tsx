import React from "react";
import RespostaModel from "../model/resposta";
import styles from "./Resposta.module.css";

interface RespostaProps {
  valor: RespostaModel;
  indice: number;
  letra: string;
  corFundoLetra: string;
  respostaFornecida: (indice: number) => void;
}

const Resposta = (props: RespostaProps) => {
  const resposta = props.valor;
  const respostaRevelada = resposta.revelada ? styles.respostaRevelada : "";

  return (
    <div
      className={styles.resposta}
      onClick={() => props.respostaFornecida(props.indice)}
    >
      <div className={`${styles.conteudoResposta} ${respostaRevelada}`}>
        <div className={styles.frente}>
          <span
            className={styles.letra}
            style={{ backgroundColor: props.corFundoLetra }}
          >
            {props.letra}
          </span>
          <span className={styles.valor}>{resposta.valor}</span>
        </div>
        <div className={styles.verso}>
          {resposta.certa ? (
            <div className={styles.certa}>
              <div>A resposta certa é...</div>
              <div className={styles.valor}>{resposta.valor}</div>
            </div>
          ) : (
            <div className={styles.errada}>
              <div>Resposta errada...</div>
              <div className={styles.valor}>{resposta.valor}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Resposta;

import React from "react";
import styles from "./Porta.module.css";
import PortaModel from "../model/porta";
import Presente from "../components/Presente";

interface PortaProps {
  value: PortaModel;
  onChange: (novaPorta: PortaModel) => void;
}

const Porta = (props: PortaProps) => {
  const porta = props.value;
  const portaSelecionada =
    porta.selecionada && !porta.aberta ? styles.selecionada : "";

  const alternarSelecao = (e) => props.onChange(porta.alternarSelecao());
  const abrir = (e) => {
    e.stopPropagation();
    props.onChange(porta.abrir());
  };

  function renderizarPorta() {
    return (
      <div className={styles.porta}>
        <div className={styles.numero}>{porta.numero}</div>
        <div className={styles.macaneta} onClick={abrir}></div>
      </div>
    );
  }

  return (
    <div className={styles.area} onClick={alternarSelecao}>
      <div className={`${styles.estrutura} ${portaSelecionada}`}>
        {porta.fechada ? (
          renderizarPorta()
        ) : porta.temPresente ? (
          <Presente />
        ) : (
          false
        )}
      </div>

      <div className={styles.chao}></div>
    </div>
  );
};

export default Porta;

import React from "react";
import { useRouter } from "next/router";
import styles from "./resultado.module.css";
import Estatistica from "../components/Estatistica";
import Botao from "../components/Botao";

const resultado = () => {
  const router = useRouter();

  const total = +router.query.total;
  const certas = +router.query.certas;
  const percentual = Math.round((certas / total) * 100);

  return (
    <div className={styles.resultado}>
      <h1>Resultado Final</h1>
      <div style={{ display: "flex" }}>
        <Estatistica texto="Perguntas" valor={total} corFundo="#fff"/>
        <Estatistica texto="Certas" valor={certas} corFundo="lime"/>
        <Estatistica texto="Percentual" valor={`${percentual}%`}/>
      </div>
      <Botao texto="Tentar Novamente" href="/"/>
    </div>
  );
};

export default resultado;

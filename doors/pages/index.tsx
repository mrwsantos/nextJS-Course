import React from "react";
import Cartao from "../components/Cartao";
import styles from "./formulario.module.css";
import Link from "next/link";
import EntradaNumerica from "../components/EntradaNumerica";

export default function Formulario() {
  const [qtdePortas, setQtdePortas] = React.useState(3);
  const [comPresente, setComPresente] = React.useState(1);

  return (
    <div className={styles.formulario}>
      <div>
        <Cartao bgcolor="#c0392c">
          <h1>Monty Hall</h1>
        </Cartao>
        <Cartao>
          <EntradaNumerica
            text="Quantidade de portas"
            value={qtdePortas}
            onChange={(newValue) => setQtdePortas(newValue)}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          {" "}
          <EntradaNumerica
            text="Porta com presente"
            value={comPresente}
            onChange={(novaPortaComPresente) => setComPresente(novaPortaComPresente)}
          />
        </Cartao>
        <Cartao bgcolor="#28a085">
          <Link href={`/jogo/${qtdePortas}/${comPresente}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}

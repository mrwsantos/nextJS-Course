import React from "react";
import Porta from "../../../components/Porta";
import { atualizarPortas, criarPortas } from "../../../functions/portas";
import styles from "./../jogo.module.css";
import Link from "next/link";
import { useRouter } from "next/router";

const Jogo = () => {
  const router = useRouter();
  const [portas, setPortas] = React.useState(criarPortas(10, 2));

  React.useEffect(() => {
    const portas = +router.query.portas;
    let temPresente = +router.query.temPresente;

    if(temPresente > portas) temPresente = portas

    setPortas(criarPortas(portas, temPresente));
  }, [router?.query]);

  function renderizarPortas() {
    return portas.map((porta) => {
      return (
        <Porta
          key={porta.numero}
          value={porta}
          onChange={(novaPorta) =>
            setPortas(atualizarPortas(portas, novaPorta))
          }
        />
      );
    });
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.botoes}>
        <Link href="/">
          <button>Reiniciar Jogo!</button>
        </Link>
      </div>
      <div className={styles.portas}>{renderizarPortas()}</div>
    </div>
  );
};

export default Jogo;

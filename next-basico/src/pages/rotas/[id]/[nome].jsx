import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";


const IdENome = () => {
  const router = useRouter();
  const id = router.query.id;
  const nome = router.query.nome;
  console.log(router);

  return (
    <div>
      ROTAS DINAMICAS COM ID
      {id && (
        <>
          <h2>
            ID: {id} NOME: {nome}
          </h2>
          <Link href="/rotas" passHref>voltar</Link>
        </>
      )}
    </div>
  );
};

export default IdENome;

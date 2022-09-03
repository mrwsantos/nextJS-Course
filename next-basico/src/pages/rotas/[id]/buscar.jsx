import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Buscar = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log("raou: ", id);

  return (
    <div>
      ROTAS DINAMICAS COM ID
      {id && <h2>{id}</h2>}
      <Link href="/rotas">
        <a>
          <button>voltar</button>
        </a>
      </Link>
    </div>
  );
};

export default Buscar;

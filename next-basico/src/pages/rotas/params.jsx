import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Params = () => {
  const router = useRouter();
  const id = router.query.id;
  const name = router.query.name;

  return (
    <>
      <div>
        {id} - {name}
      </div>
      <Link href="/rotas"  passHref>
          voltar
      </Link>
    </>
  );
};

export default Params;

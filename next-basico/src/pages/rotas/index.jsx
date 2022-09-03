import React from "react";
import Link from "next/link";
import router from "next/router";

const index = () => {
  function navegacaoSimples(url) {
    router.push(url);
  }

  function navegacaoComParams() {
    router.push({
      pathname: "rotas/params",
      query: {
        id: 123,
        name: "Ana",
      },
    });
  }

  return (
    <div>
      <h1>Rotas index</h1>
      <ul>
        <Link href="/rotas/params?id=12&name=Beca" passHref>
          <li>Params</li>
        </Link>
        <Link href="/rotas/04/buscar" passHref>
          <li>Search page</li>
        </Link>
        <Link href="/rotas/012/Rebeca" passHref>
          <li>Rebeca</li>
        </Link>
      </ul>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <button onClick={() => router.push("/rotas/04/buscar")}>Buscar</button>
        <button onClick={() => navegacaoSimples("/rotas/123/daniel")}>
          Daniel
        </button>
        <button onClick={() => navegacaoComParams()}>Ana</button>
      </div>
    </div>
  );
};

export default index;

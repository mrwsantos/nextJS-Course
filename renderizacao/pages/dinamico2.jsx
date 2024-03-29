import React from "react";

export async function getServerSideProps() {
  console.log("[SERVER]  Gerando props para componente");
  const resp = await fetch("http://localhost:3000/api/produtos");
  const produtos = await resp.json();

  return {
    props: {
      produtos
    },
  };
}

const dinamico2 = (props) => {
  console.log("[CLIENTE] Renderizando componente");
  function renderizarProdutos() {
    return props.produtos.map((produto) => {
      return (
        <li key={produto.id}>
          {produto.id} - {produto.nome} está saindo por R${" "}
          {produto.preco.toFixed(2)}
        </li>
      );
    });
  }

  return (
    <div>
      <h1>DINAMICO 2</h1>

      <ul>{renderizarProdutos()}</ul>
    </div>
  );
};

export default dinamico2;

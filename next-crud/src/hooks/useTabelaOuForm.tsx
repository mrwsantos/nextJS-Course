import React from "react";

const useTabelaOuForm = () => {
  const [visivel, setVisivel] = React.useState<"tabela" | "form">("tabela");

  const exibirTabela = () => setVisivel("tabela");
  const exibirFormulario = () => setVisivel("form");

  return {
    formularioVisivel: visivel === "form",
    tabelaVisivel: visivel === "tabela",
    exibirTabela,
    exibirFormulario,
  };
};

export default useTabelaOuForm;

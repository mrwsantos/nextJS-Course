import React from "react";
import Botao from "../components/Botao";
import Formulario from "../components/Formulario";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import useClientes from "../hooks/useClientes";

export default function Home() {
  const {
    cliente,
    clientes,

    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,

    tabelaVisivel,
    exibirTabela
  } = useClientes();

  return (
    <div className="flex items-center h-screen justify-center bg-gradient-to-r from-blue-700 to-cyan-300">
      <Layout titulo="Cadastro simples">
        {tabelaVisivel ? (
          <>
            <div className="flex justify-end">
              <Botao className="m-4 mr-0" cor="blue" onClick={novoCliente}>
                Novo Cliente
              </Botao>
            </div>
            <Tabela
              clientes={clientes}
              clienteSelecionado={selecionarCliente}
              clienteExcluido={excluirCliente}
            ></Tabela>
          </>
        ) : (
          <Formulario
            cliente={cliente}
            cancelado={exibirTabela}
            clienteMudou={salvarCliente}
          />
        )}
      </Layout>
    </div>
  );
}

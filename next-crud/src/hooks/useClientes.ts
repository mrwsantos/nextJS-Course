import React from "react";
import ColecaoCliente from "../backend/db/ColecaoCliente";
import Cliente from "../core/Cliente";
import ClienteRepositorio from "../core/ClienteRepositorio";
import useTabelaOuForm from "./useTabelaOuForm";

const useClientes = () => {
  const [cliente, setCliente] = React.useState<Cliente>(Cliente.vazio());
  const [clientes, setClientes] = React.useState<Cliente[]>([]);

  const repo: ClienteRepositorio = new ColecaoCliente();

  const { tabelaVisivel, exibirFormulario, exibirTabela } = useTabelaOuForm()

  React.useEffect(() => {
    obterTodos();
  }, []);

  function obterTodos() {
    repo.obterTodos().then((clientes) => {
      setClientes(clientes);
      exibirTabela()
    });
  }

  function selecionarCliente(cliente: Cliente) {
    setCliente(cliente);
    exibirFormulario()
  }
  async function excluirCliente(cliente: Cliente) {
    await repo.excluir(cliente);
    obterTodos();
  }
  async function salvarCliente(cliente: Cliente) {
    await repo.salvar(cliente);
    obterTodos();
  }

  function novoCliente() {
    setCliente(Cliente.vazio());
    exibirFormulario()
  }

  return {
    cliente,
    clientes,

    novoCliente,
    salvarCliente,
    excluirCliente,
    selecionarCliente,
    obterTodos,

    tabelaVisivel, 
    exibirTabela
    
  };
};

export default useClientes;

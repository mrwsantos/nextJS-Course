import React from "react";
import Cliente from "../core/Cliente";
import { IconeEdicao, IconeLixo } from "./Icones";

interface TabelaProps {
  clientes: Cliente[];
  clienteSelecionado?: (cliente: Cliente) => void;
  clienteExcluido?: (cliente: Cliente) => void;
}

const Tabela = (props: TabelaProps) => {

    const exibirAcoes = props.clienteExcluido || props.clienteSelecionado

  function renderizarDados() {
    return props.clientes?.map((cliente, i) => {
      return (
        <tr
          key={cliente.id}
          className={`${i % 2 === 0 ? "bg-white" : "bg-cyan-100"}`}
        >
          <td className="text-left p-4">{cliente.id}</td>
          <td className="text-left p-4">{cliente.nome}</td>
          <td className="text-left p-4">{cliente.idade}</td>
          {exibirAcoes && renderizarAções(cliente)}
        </tr>
      );
    });
  }

  function renderizarAções(cliente: Cliente) {
    return (
      <td className="p-4 text-center">
        {props.clienteSelecionado && (
          <button
          onClick={()=> props.clienteSelecionado?.(cliente)}
          className="m-1 p-1  rounded-full hover:bg-cyan-300" >
            {IconeEdicao}
          </button>
        )}
        {props.clienteExcluido && (
          <button 
          onClick={()=> props.clienteExcluido?.(cliente)}
          className="m-1 p-1  rounded-full hover:bg-red-300">
            {IconeLixo}
          </button>
        )}
      </td>
    );
  }

//   function editaCliente(cliente: Cliente){
//     console.log('EDITA: ', cliente.id);
//   }

  return (
    <table className="w-full rounded-xl overflow-hidden">
      <thead className="bg-gradient-to-r from-blue-500 to-cyan-300 text-gray-100">
        <tr>
          <th className="text-left p-4">Codigo</th>
          <th className="text-left p-4">Nome</th>
          <th className="text-left p-4">Idade</th>
          <th className="text-center p-4">Ações</th>
        </tr>
      </thead>
      <tbody>{renderizarDados()}</tbody>
    </table>
  );
};

export default Tabela;

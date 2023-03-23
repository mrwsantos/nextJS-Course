import React from "react";
import Cliente from "../core/Cliente";
import Botao from "./Botao";
import Entrada from "./Entrada";

interface FormularioProps {
  cliente: Cliente;
  clienteMudou?: (cliente: Cliente) => void;
  cancelado?: () => void;
}

const Formulario = (props: FormularioProps) => {
  const id = props.cliente?.id ?? null;
  const [nome, setNome] = React.useState(props.cliente?.nome ?? "");
  const [idade, setIdade] = React.useState(props.cliente?.idade ?? 0);

  return (
    <div>
      {id && <Entrada texto="Código" valor={id} />}
      <Entrada texto="Nome" valor={nome} onChange={setNome} className="mb-2" />
      <Entrada
        texto="Idade"
        valor={idade}
        onChange={setIdade}
        tipo="number"
        minIntNumber={0}
        maxIntNumber={120}
      />

      <div className="flex items-center justify-end gap-2 mt-4">
        <Botao cor="red" onClick={props.cancelado}>
          Cancelar
        </Botao>
        <Botao
          cor="green"
          className="mr-2"
          onClick={() => props.clienteMudou?.(new Cliente(nome, +idade, id))}
        >
          {id ? "Alterar" : "Salvar"}
        </Botao>
      </div>
    </div>
  );
};

export default Formulario;

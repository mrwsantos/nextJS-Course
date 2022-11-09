import React from "react";
import useAppData from "../../../data/hook/useAppData";
import AvatarUsuario from "./AvatarUsuario";
import BotaoAlternarTema from "./BotaoAlternarTema";
import Titulo from "./Titulo";
interface CabecalhoProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

const Cabecalho = (props: CabecalhoProps) => {

  const { tema, alternarTema} = useAppData()

  return (
    <div className="flex">
      <Titulo titulo={props.titulo} subtitulo={props.subtitulo} />
      <div className="flex flex-grow justify-end  items-center gap-4">
        <BotaoAlternarTema tema={tema} alternarTema={alternarTema}/>
        <AvatarUsuario />
      </div>
    </div>
  );
};

export default Cabecalho;

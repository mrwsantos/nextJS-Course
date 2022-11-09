import React from "react";
import useAppData from "../../../data/hook/useAppData";
// import forcarAutenticacao from "../../../functions/ForcarAutenticacao";
import ForcarAutenticacao from "../auth/ForcarAutenticacao";
import Cabecalho from "./Cabecalho";
import Conteudo from "./Conteudo";
import MenuLateral from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export default function Layout(props: LayoutProps) {
  const { tema } = useAppData();

  // POR FUNCAO
  // return forcarAutenticacao(
  //   <div className={`${tema} flex h-screen w-screen`}>
  //     <MenuLateral />
  //     <div
  //       className={`flex flex-col w-full p-4 md:p-7 bg-gray-300 dark:bg-gray-900`}
  //     >
  //       <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
  //       <Conteudo>{props.children}</Conteudo>
  //     </div>
  //   </div>
  // );

  // POR COMPONENTE
  return (
    <ForcarAutenticacao>
      <div className={`${tema} flex h-screen w-screen`}>
        <MenuLateral />
        <div
          className={`flex flex-col w-full p-4 md:p-7 bg-gray-300 dark:bg-gray-900`}
        >
          <Cabecalho titulo={props.titulo} subtitulo={props.subtitulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
    </ForcarAutenticacao>
  );
}

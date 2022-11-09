import React from "react";
import { IconeLua, IconeSol } from "../Icons/Index";

interface BotaoAlternarTemaProps {
  tema: string;
  alternarTema: () => void;
}

const BotaoAlternarTema = (props: BotaoAlternarTemaProps) => {
  return props.tema === "dark" ? (
    <div
      onClick={props.alternarTema}
      className={`
    hidden sm:flex items-center cursor-pointer
    bg-gradient-to-r from-lime-400 to-lime-900
    w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div
        className={`
      flex items-center justify-center
      text-white 
      w-6 h-6 rounded-full
      `}
      >
        {IconeSol(4)}
      </div>
      <div
        className={`hidden lg:flex items-center ml-2
      text-white text-sm`}
      >
        Claro
      </div>
    </div>
  ) : (
    <div
      onClick={props.alternarTema}
      className={` hidden sm:flex items-center justify-end cursor-pointer
        bg-gradient-to-r from-gray-400 to-gray-900 
        w-14 lg:w-24 h-8 p-1 rounded-full
    `}
    >
      <div className={`hidden lg:flex items-center mr-2 text-white text-sm`}>
        Escuro
      </div>
      <div
        className={`flex items-center justify-center text-white w-6 h-6 rounded-full `}
      >
        {IconeLua(4)}
      </div>
    </div>
  );
};

export default BotaoAlternarTema;

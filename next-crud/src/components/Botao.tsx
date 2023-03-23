import React from "react";

interface BotaoProps {
  cor?: "green" | "blue" | "gray" | "red";
  className?: string;
  children: any;
  onClick?: () => void;
}

const Botao = (props: BotaoProps) => {
  const cor = props.cor ?? "gray";

  return (
    <button
      className={`
    bg-gradient-to-r from-${cor}-400 to-${cor}-700 
    text-white px-4 py-2 rounded-lg hover:opacity-70
    ${props.className}
    `}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Botao;

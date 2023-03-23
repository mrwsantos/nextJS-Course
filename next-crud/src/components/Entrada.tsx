import React from "react";

interface EntradaProps {
  className?: string;
  tipo?: "text" | "number";
  texto: string;
  valor: any;
  somenteLeitura?: boolean;
  onChange?: (valor: any) => void;
  minIntNumber?: number
  maxIntNumber?: number
}

const Entrada = (props: EntradaProps) => {
  return (
    <div className="">
      <label className={`flex flex-col ${props.className}`}>
        <span className="font-semibold  mb-2">{props.texto}</span>
        <input
          className={`
          p-2 border-2 border-blue-400 
          focus:outline-none focus:bg-blue-50 bg-white rounded-lg
          ${!props.somenteLeitura ? "" : "focus:bg-white"}
          `}
          type={props.tipo ?? "text"}
          value={props.valor}
          readOnly={props.somenteLeitura}
          onChange={(e) => props.onChange?.(e.target.value)}
          min={props.minIntNumber}
          max={props.maxIntNumber}
        />
      </label>
    </div>
  );
};

export default Entrada;

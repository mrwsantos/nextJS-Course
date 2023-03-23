import React from "react";

const Titulo = (props) => {
  return (
    <div className="flex flex-col justify-center bor">
      <h1 className="px-5 py-2 font-bold text-2xl">{props.children}</h1>
      <hr className="border-1 border-blue-500" />
    </div>
  );
};

export default Titulo;

import React from "react";
import Titulo from "./Titulo";

interface LayoutProps {
  titulo: string;
  children: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div
      className={`
    flex flex-col w-4/5
    bg-white text-gray-800 rounded-md
    shadow-2xl shadow-blue-900
    `}
    >
      <Titulo>{props.titulo}</Titulo>
      <div className="p-6">{props.children}</div>
    </div>
  );
};

export default Layout;

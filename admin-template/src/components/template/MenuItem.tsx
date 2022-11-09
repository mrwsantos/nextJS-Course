import Link from "next/link";
import React from "react";

interface MenuItemProps {
  texto: string;
  icone: any;
  url?: string;
  onClick?: (evento: any) => void;
  className?: string 
}

const MenuItem = (props: MenuItemProps) => {
  function renderizarLink() {
    return (
      <a className={`flex flex-col justify-center items-center w-20 h-20 text-lime-800 dark:text-gray-200 ${props.className}`}>
        {props.icone}
        <span className="text-xs font-light ">{props.texto}</span>
      </a>
    );
  }

  return (
    <li className="
    hover:bg-gray-300 dark:hover:bg-gray-700 
    cursor-pointer" 
      onClick={props.onClick}>
      {props.url ? (
        <Link href={props.url} passHref>
          {renderizarLink()}
        </Link>
      ) : (
        renderizarLink()
      )}
    </li>
  );
};

export default MenuItem;

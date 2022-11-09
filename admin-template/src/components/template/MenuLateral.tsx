import React from "react";
import useAuth from "../../../data/hook/useAuth";
import { IconeAjustes, IconeHome, IconeSair, IconeSino } from "../Icons/Index";
import Logo from "./Logo";
import MenuItem from "./MenuItem";

const MenuLateral = () => {
  const { logout} = useAuth()

  return (
    <aside
      className="
    flex flex-col
    bg-gray-200 text-gray-700
    dark:bg-gray-800
    "
    >
      <Logo />
      <ul className="flex-grow">
        <MenuItem url="/" texto="Inicio" icone={IconeHome} />
        <MenuItem url="/ajustes" texto="Ajustes" icone={IconeAjustes} />
        <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino} />
      </ul>
      <ul className="">
        <MenuItem
          onClick={() => logout()}
          texto="Sair"
          icone={IconeSair}
          className={`hover:text-white hover:bg-lime-700`}
        />
      </ul>
    </aside>
  );
};

export default MenuLateral;

import React from "react";
import Link from "next/link";
import useAuth from "../../../data/hook/useAuth";

import cat from "../../../public/images/cat.png";
import chicken from "../../../public/images/chicken.png";
import dog from "../../../public/images/dog.png";
import panda from "../../../public/images/panda.png";
import rabbit from "../../../public/images/rabbit.png";

interface AvatarUsuarioProps {
  className?: string;
}

const AvatarUsuario = ({ className }: AvatarUsuarioProps) => {
  const { usuario } = useAuth();

  const avatars = [cat, chicken, dog, panda, rabbit];
  const indexAvatar = Math.floor(Math.random() * 5);
  const avatarChoosen = avatars[indexAvatar].src;

  return (
    <Link href="/perfil">
      <div className="flex items-center cursor-pointer">
        <img
          className={`w-12 h-12 rounded-full object-contain ${className}`}
          src={usuario?.imagemUrl ? `${usuario.imagemUrl}` : avatarChoosen}
          alt=""
        />
        <span className="text-black dark:text-white font-bold">
          <span className="hidden md:block ml-2">
            {usuario?.nome ?? "Anonymous"}
          </span>
        </span>
      </div>
    </Link>
  );
};

export default AvatarUsuario;

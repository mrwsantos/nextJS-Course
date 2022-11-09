import React from "react";
import Layout from "../components/template/Layout";
import useAppData from "../../data/hook/useAppData";

const Perfil = () => {
  return (
    <Layout
      titulo="Perfil do usuario"
      subtitulo="Administre suas configurações"
    >
      <h1>Seu perfil</h1>
    </Layout>
  );
};

export default Perfil;

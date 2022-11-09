import React from "react";
import Layout from "../components/template/Layout";
import useAppData from "../../data/hook/useAppData";

const notificacoes = () => {
  const {alternarTema} = useAppData()

  return (
    <Layout
      titulo="Notificações"
      subtitulo="Aqui você irá gerenciar suas notificações"    >
   
    <h1>Notificaocoes</h1>
    </Layout>
  );
};

export default notificacoes;

import React, { useEffect } from "react";
import Questionario from "../components/Questionario";
import QuestaoModel from "../model/questao";
import styles from "../styles/Home.module.css";
import Router, { useRouter } from "next/router";

const BASE_URL = "/api";

export default function Home() {
  const [idsDasQuestoes, setIdsDasQuestoes] = React.useState<number[]>([]);
  const [questao, setQuestao] = React.useState<QuestaoModel>();
  const [respostasCertas, setRespostasCertas] = React.useState<number>(0);

  async function carregarIdsDasQuestoes() {
    const resp = await fetch(`${BASE_URL}/questionario`);
    const idsObtidos = await resp.json();
    setIdsDasQuestoes(idsObtidos);
  }
  async function carregarQuestoes(idQuestao: number) {
    const resp = await fetch(`${BASE_URL}/questoes/${idQuestao}`);
    const json = await resp.json();
    const novaQuestao = QuestaoModel.criarUsandoObjeto(json);
    setQuestao(novaQuestao);
  }

  React.useEffect(() => {
    carregarIdsDasQuestoes();
  }, []);
  React.useEffect(() => {
    idsDasQuestoes.length > 0 && carregarQuestoes(idsDasQuestoes[0]);
  }, [idsDasQuestoes]);

  function questaoRespondida(questaoRespondida: QuestaoModel) {
    setQuestao(questaoRespondida);
    const acertou = questaoRespondida.acertou;
    setRespostasCertas(respostasCertas + (acertou ? 1 : 0));
  }

  function idProximaPergunta() {
    const proximoIndice = idsDasQuestoes.indexOf(questao.id) + 1;
    return idsDasQuestoes[proximoIndice];
  }

  function irProProximoPasso() {
    const proximoId = idProximaPergunta();
    proximoId ? irPraProximaPergunta(proximoId) : finalizar();
  }

  function irPraProximaPergunta(proximoId: number) {
    carregarQuestoes(proximoId);
  }

  function finalizar() {
    Router.push({
      pathname: "/resultado",
      query: {
        total: idsDasQuestoes.length,
        certas: respostasCertas,
      },
    });
  }

  return questao ? (
    <Questionario
      questao={questao}
      ultima={idProximaPergunta() === undefined}
      questaoRespondida={questaoRespondida}
      irProProximoPasso={irProProximoPasso}
    />
  ) : (
    false
  );
}

import React from "react";
import QuestaoModel from "../model/questao";
import Botao from "./Botao";
import Questao from "./Questao";
import styles from "./Questionario.module.css";

interface QuestionarioProps {
  questao: QuestaoModel;
  ultima: boolean;
  questaoRespondida: (questao: QuestaoModel) => void;
  irProProximoPasso: () => void;
}

const Questionario = (props: QuestionarioProps) => {
  function respostaFornecida(indice: number) {
    if(props.questao.naoRespondida){
        props.questaoRespondida(props.questao.responderCom(indice))
    }
  }

  return (
    <div className={styles.questionario}>
      {props.questao ? (
        <>
          <Questao
            valor={props.questao}
            tempoPraResposta={10}
            respostaFornecida={respostaFornecida}
            tempoEsgotado={props.irProProximoPasso}
          />
          <Botao
            onClick={props.irProProximoPasso}
            texto={props.ultima ? "Finalizar" : "Próxima"}
          />
        </>
      ) : (
        false
      )}
    </div>
  );
};

export default Questionario;

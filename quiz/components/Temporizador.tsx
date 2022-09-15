import React from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";
import styles from "./Temporizador.module.css";

interface TemporizadorProps {
  key: any
  duracao: number;
  tempoEsgotado: () => void;
}

const Temporizador = (props: TemporizadorProps) => {
  return (
    <div className={styles.temporizador}>
      <CountdownCircleTimer
        size={120}
        duration={props.duracao}
        isPlaying
        onComplete={props.tempoEsgotado}
        colors={["#bce596", "#f7b801", "#ed827a"]}
        colorsTime={[10, 5, 0]}
      >
          {({remainingTime})=> remainingTime}
          </CountdownCircleTimer>
    </div>
  );
};

export default Temporizador;

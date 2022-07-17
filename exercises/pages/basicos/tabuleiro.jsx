import Linha from "../../components/ChessBoard";
import styles from "./../../components/ChessBoard.module.css";

export default function tabuleiro() {
  return (
    <div className={styles.tabuleiro}>
      <Linha />
      <Linha invert />
      <Linha />
      <Linha invert />
      <Linha />
      <Linha invert />
      <Linha />
      <Linha invert />
    </div>
  );
}

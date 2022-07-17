import styles from "./ChessBoard.module.css";

function geraLinha() {
  let arr = [];

  for (let i = 0; i < 8; i++) {
    if (i % 2 === 0) {
      arr.push(
        <span className={`${styles.quadrado} ${styles.branca} `}></span>
      );
    } else {
      arr.push(<span className={`${styles.quadrado} ${styles.preta}`}></span>);
    }
  }

  return arr;
}

export default function Linha({ invert }) {
  return (
    <div className={`${styles.linha} ${invert ? styles.invert : ''}`}>
      {geraLinha()}
    </div>
  );
}

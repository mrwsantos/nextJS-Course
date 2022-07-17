import If from "../../components/If";

export default function condicional2() {
  const num = 2;

  return (
    <div>
      <If teste={num % 2 === 0}>
        <h1>Numero par</h1>
      </If>{" "}
    </div>
  );
}

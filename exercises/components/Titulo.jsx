export default function Titulo({ principal, secundario, pequeno }) {
  return pequeno ? (
    <>
      {principal && <p>{principal}</p>}
      {secundario && <small>{secundario}</small>}
    </>
  ) : (
    <>
      {principal && <h1>{principal}</h1>}
      {secundario && <h2>{secundario}</h2>}
    </>
  );
}

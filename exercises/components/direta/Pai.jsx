import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho nome="Dudu" familia={props.familia} />
      <Filho nome="Craudiao" familia={props.familia} />
      <Filho nome="Bilau" familia={props.familia} />
    </div>
  );
}

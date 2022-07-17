function geraLista(max = 10) {
  const array = [];
  for (let i = 0; i <= max; i++) {
    array.push(<p key={i}>{i},</p>);
  }
  return array;
}

export default function lista1() {
    return <div>{geraLista()}</div>
}

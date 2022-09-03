import React from "react";

const Form = () => {
  const [nome, setNome] = React.useState("");
  const [idade, setIdade] = React.useState(0);
  const [usuarios, setUsuarios] = React.useState([]);

  async function salvarUsuario() {
    await fetch("/api/form", {
      method: "POST",
      body: JSON.stringify({ nome, idade }),
    });

    setIdade(0);
    setNome("");

    const resp = await fetch("/api/form");
    const usuariosArr = await resp.json();
    setUsuarios(usuariosArr);
  }

  function renderizarUsuarios() {
    return usuarios.map((usuario, i) => {
      if (usuario.nome && usuario.idade) {
        return (
          <li key={i}>
            {usuario?.nome} tem {usuario?.idade} anos
          </li>
        );
      }
      return false
    });
  }

  return (
    <div>
      <h1>Integrando com API</h1>
      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <input
        type="number"
        value={idade}
        onChange={(e) => setIdade(+e.target.value)}
      />
      <button onClick={salvarUsuario}>ENVIAR</button>

      <ul>{renderizarUsuarios()}</ul>
    </div>
  );
};

export default Form;

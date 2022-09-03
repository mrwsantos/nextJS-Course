import React from "react";

const Questao = () => {
  const [questao, setQuestao] = React.useState(null);

  React.useEffect(() => {
    fetch("http://localhost:3000/api/questao/123")
      .then((resp) => resp.json())
      .then(setQuestao);
  }, []);

  function renderizarRespostas(){
      if(questao){
          return questao.respostas.map((resp,i) =>{
              return <li key={i}>{resp}</li>
          })
      }
      return false
  }

  return (
    <div>
      <h1>Questao</h1>
      <div>
          <span>{questao?.id} - {questao?.enunciado}</span>
        <ul>
            {renderizarRespostas()}
        </ul>
      </div>
    </div>
  );
};

export default Questao;

import questoes from "./bancoDeQuestoes";

const buscaQuestoes =  (req, res) => {
  const idSelecionado = +req.query.id;

  const unicaQuestaoOuNada = questoes.filter(
    (questao) => questao.id === idSelecionado
  );

  if (unicaQuestaoOuNada.length === 1) {
    const questaoSelecionada = unicaQuestaoOuNada[0].embaralharRespostas();
    res.status(200).json(questaoSelecionada.converterParaObjeto())
  }else{
    res.status(204).send()
  }
}; 

export default buscaQuestoes

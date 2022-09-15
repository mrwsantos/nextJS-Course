import { embaralhar } from "../../../functions/array";
import questoes from "../questoes/bancoDeQuestoes";

const buscaQuestao = (req, res) => {
  const ids = questoes.map((questao) => questao.id);

  res.status(200).json(embaralhar(ids));
};

export default buscaQuestao

import QuestaoModel from "../../../model/questao";
import RespostaModel from "../../../model/resposta";

const questoes: QuestaoModel[]=[
    new QuestaoModel(9, 'Cual animuaire transmuaite a duainça de Chuiagas?',[
        RespostaModel.errada('Abualha'),
        RespostaModel.errada('Borbuluaita'),
        RespostaModel.errada('Morfuaiga'),
        RespostaModel.certa('Barbuairo')
  
        // new RespostaModel('Abelha', false),
        // new RespostaModel('Cobra', false),
        // new RespostaModel('Onça', false),
        // new RespostaModel('Barbeiro', true),
    ]),
    new QuestaoModel(99, 'Cual fruita a duana Eiva teimou em comeire nu Juarduaim do Aiden?',[
        RespostaModel.errada('Banuana'),
        RespostaModel.errada('Laruainja'),
        RespostaModel.errada('Papuaya'),
        RespostaModel.certa('Maçuã')
    ]),
    new QuestaoModel(999, 'Cual coletuaivo de cães?',[
        RespostaModel.errada('Mamada'),
        RespostaModel.errada('Esplanada'),
        RespostaModel.errada('Maguila'),
        RespostaModel.certa('Matilha')
    ]),
    new QuestaoModel(9999, 'Cual é o triangulo com todos os lados diferentes?',[
        RespostaModel.errada('Diferentoses'),
        RespostaModel.errada('Isóceles'),
        RespostaModel.errada('Tropoia'),
        RespostaModel.certa('Escaleno')
    ])
]

export default questoes
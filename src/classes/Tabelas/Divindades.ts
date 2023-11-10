import { divindade, enumEnergia } from "../Construtores/Divindade";

export const tabelaDivindades: divindade[] = [
    {
        nome: "Aharadak",
        descricao: "Outrora um dos terríveis Lordes da Tormenta, esta aberração monstruosa ambicionava o grande poder divino oferecido pelos devotos de Arton. Após anos liderando seu próprio culto profano, Aharadak matou Tauron, o Deus da Força, e ascendeu como o novo e macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper Arton. Apenas os devotos mais depravados ousam cultuar esta divindade de escatologia e sadismo.",
        crencas: "Reverenciar a Tormenta, apregoar a inevitabilidade de sua chegada ao mundo. Praticar a devassidão e a perversão. Deturpar tudo que é correto, desfigurar tudo que é normal. Abraçar a agonia, crueldade e loucura.",
        simbolo: "Um olho macabro de pupila vertical e cercado de espinhos.",
        energia: enumEnergia.Negativa,
        arma: "Corrente de espinhos.",
        devotos: ["Quaisquer. A Tormenta aceita tudo e todos."],
        poderes: [],
        obrigacoes: "Quase todos os cultistas de Aharadak são maníacos insanos, compelidos a praticar os atos mais abomináveis. No entanto, talvez devido à natureza alienígena e incompreensível deste deus, alguns devotos conseguem se resguardar. Preservam sua humanidade, abstendo-se de cometer crimes ou profanações. Ainda assim, o devoto paga um preço. No início de qualquer cena de ação, role 1d6. Com um resultado ímpar, você fica fascinado na primeira rodada, perdido em devaneios sobre a futilidade da vida (mesmo que seja imune a esta condição).",
        imagens: ["./img/divindades/display/Aharadak.png", "./img/divindades/simbolos/Aharadak.png"],
    },
    {
        nome: "Allihanna",
        descricao: "A Deusa da Natureza representa a bondade inerente ao mundo natural, a pureza das plantas e animais. Mesmo os animais predadores são considerados puros, inocentes — pois matam apenas para sobreviver, ao contrário dos monstros e seres civilizados. A divindade principal dos druidas, Allihanna também é cultuada por povos bárbaros. Estes veneram faces variadas desta deusa, que pode se manifestar como um majestoso animal (diferente para cada culto) ou uma criatura quimérica de muitas cabeças.",
        crencas: "Reverenciar os seres da natureza. Proteger a vida selvagem. Promover harmonia entre a natureza e a civilização. Combater monstros, mortos-vivos e outras criaturas que per- turbam o equilíbrio natural.",
        simbolo: "Para bárbaros e outros adoradores de animais, o símbolo corresponde ao respectivo animal. Para outros, uma pequena árvore.",
        energia: enumEnergia.Positiva,
        arma: "Bordão.",
        devotos: ["Dahllan, elfos, sílfides, bárbaros,caçadores, druidas"],
        poderes: [],
        obrigacoes: "Devotos de Allihanna não podem usar armaduras e escudos feitos de metal. Assim, você só pode usar armadura acolchoada, de couro, gibão de peles e escudo leve, ou itens feitos de materiais especiais não metálicos. Devotos de Allihanna não podem descansar em nenhuma comunidade maior que uma aldeia (não perdem seus poderes, mas também não recuperam pontos de vida ou mana). Por isso, sempre preferem o relento a um quarto de estalagem.",
        imagens: ["./img/divindades/display/Allihanna.png", "./img/divindades/simbolos/Allihanna.png"] 
    } ,
    {
        nome: "Arsenal",
        descricao: "Outrora um infame clérigo guerreiro, o vilão conhecido apenas como Mestre Arsenal se tornou sumo-sacerdote do violento deus Keenn. No entanto, após uma longa campanha que envolveu a conquista da mais poderosa espada mágica de Arton, o clérigo derrotou seu próprio patrono em combate durante um torneio épico, ascendendo ao Panteão como o novo Deus da Guerra. Com o objetivo de tornar Arton mais forte, capaz de confrontar qualquer inimigo, Arsenal e seus devotos seguem deflagrando conflitos por todo o Reinado e além.",
        crencas: "Promover a guerra e o conflito. Vencer a qualquer custo, pela força ou estratégia. Jamais oferecer ou aceitar rendição. Eliminar as próprias fraquezas. Conhecer o inimigo como a si mesmo. Sempre encontrar condições de vitória; quando não existirem, criá-las.",
        simbolo: "Um martelo de guerra e uma espada longa cruzados sobre um escudo.",
        energia: enumEnergia.Qualquer,
        arma: "Martelo de Guerra.",
        devotos: ["Anões, minotauros, bárbaros cavaleiros, guerreiros, lutadores"],
        poderes: [],
        obrigacoes: "Um devoto de Arsenal é proibido de ser derrotado em qualquer tipo de combate ou disputa (como um teste oposto para ver quem é mais forte). Caso seu grupo seja derrotado, isso também constitui uma violação das obrigações.",
        imagens: ["./img/divindades/display/Arsenal.png", "./img/divindades/simbolos/Arsenal.png"] 
    } ,
    {
        nome: "Azgher",
        descricao: "Venerado pelos povos do Deserto da Perdição, o Deus Sol é também cultuado por viajantes, mercadores honestos e todos aqueles que combatem as trevas. É um deus generoso; sua jornada diária derrama calor e conforto sobre Arton. Azgher é como um pai severo: responsável, provedor, mas que também exige respeito de seus filhos. Como um olho sempre vigilante nos céus, nada acontece à luz do dia sem que Azgher perceba.",
        crencas: "Praticar a gratidão pela proteção e generosidade do sol. Promover a honestidade, expor embustes e mentiras. Praticar a caridade e o altruísmo. Proteger os necessitados. Oferecer clemência, perdão e redenção. Combater o mal.",
        simbolo: "Um sol dourado",
        energia: enumEnergia.Positiva,
        arma: "Cimitarra",
        devotos: ["Aggelus, qareen, arcanistas, bárbaros,caçadores, cavaleiros, guerreiros, nobres, paladinos"],
        poderes: [],
        obrigacoes: "O devoto de Azgher deve manter o rosto sempre coberto (com uma máscara, capuz ou trapos). Sua face pode ser revelada apenas ao sumo-sacerdote ou em seu funeral. Devotos do Sol também devem doar para a igreja de Azgher 20% de qualquer tesouro obtido. Essa doação deve ser feita em ouro, seja na forma de moedas ou itens",
        imagens: ["./img/divindades/display/Azgher.png", "./img/divindades/simbolos/Azgher.png"] 
    },
    {
        nome: "Hyninn",
        descricao: "Capaz de enganar até mesmo outros deuses, o ardiloso Deus da Trapaça é uma divindade favorita de foras da lei — seus clérigos atuam como conselheiros, ou até mesmo líderes, em guildas criminosas ou navios piratas. Também é louvado por regentes e mercadores não muito honestos, orando por vantagens ilícitas. No entanto, mesmo pessoas honradas eventualmente simpatizam com Hyninn por sua esperteza, despreocupação e ousadia",
        crencas: "Praticar a astúcia e a esperteza. Demonstrar que honestidade e sinceridade levam ao fracasso. Desafiar a lei e a ordem. Ser vitorioso sem seguir regras. Fazer aos outros antes que façam a você. Levar vantagem em tudo.",
        simbolo: "Uma adaga atravessando uma máscara, ou uma raposa",
        energia: enumEnergia.Positiva,
        arma: "Adaga",
        devotos: ["Hynne, goblins, sílfides, bardos,bucaneiros, ladinos, inventores, nobres"],
        poderes: [],
        obrigacoes: "Um devoto de Hyninn não recusa participação em um golpe, trapaça ou artimanha (o que muitas vezes inclui missões para roubar... hã, resgatar tesouros), exceto quando prejudica seus próprios aliados. O devoto também deve fazer um ato furtivo, ousado ou proibido por dia (ou por sessão de jogo, o que demorar mais), como oferenda a Hyninn. Roubar uma bolsa, enganar um miliciano, invadir o quarto de um nobre... Em termos de jogo, uma ação exigindo um teste de Enganação ou Ladinagem com CD mínima 15 + metade do seu nível.",
        imagens: ["./img/divindades/display/Hynnin.png", "./img/divindades/simbolos/Hynnin.png"] 
    },
    {
        nome: "Kallyadranoch",
        descricao: "Como punição imposta por Khalmyr pelo crime de criar a Tormenta, o Deus dos Dragões estava esquecido até poucos anos atrás, conhecido apenas como “o Terceiro”. Restaurado em tempos recentes durante um combate épico contra os invasores aberrantes, Kallyadranoch agora governa não apenas os dragões, mas todos que cultuam o poder elemental das grandes feras. Além disso, enquanto Wynna representa o lado bondoso e generoso da magia arcana, Kally é cultuado por arcanistas malignos.",
        crencas: "Praticar a soberania. Demonstrar orgulho, superioridade, majestade. Praticar o acúmulo de riquezas. Proteger suas posses e sua dignidade. Ser implacável com seus inimigos. Reverenciar os dragões e suas crias.",
        simbolo: "Escamas de cinco cores diferentes.",
        energia: enumEnergia.Negativa,
        arma: "Lança",
        devotos: ["Elfos, medusas, sulfure, arcanistas,cavaleiros, guerreiros, lutadores, nobres"],
        poderes: [],
        obrigacoes: "Para subir de nível, além de acumular XP suficiente, o devoto de Kally deve realizar uma oferenda em tesouro. O valor é igual à 20% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual (por exemplo, T$ 80 para subir para o 4° nível). Sabe-se, também, de devotos malignos que sacrificam vítimas a Kally (não permitido para personagens jogadores).",
        imagens: ["./img/divindades/display/Kallyadranoch.png", "./img/divindades/simbolos/Kallyadranoch.png"] 
    },
    {
        nome: "Khalmyr",
        descricao: "Antigo líder do Panteão, o Deus da Justiça já foi considerado a divindade mais popular no Reinado. Isso mudaria com a vitória dos minotauros nas Guerras Táuricas, bem como a recente ascensão de Valkaria como nova líder dos deuses. Mesmo assim, Khalmyr ainda é louvado por aqueles que lutam pela ordem e justiça. As duas maiores ordens de cavaleiros em Arton foram criadas em sua honra: a Ordem da Luz e a Ordem de Khalmyr. Esta é também uma das divindades principais dos anões, junto de Tenebra — conforme a crença, ambos teriam gerado juntos a raça anã.",
        crencas: "Praticar a caridade e o altruísmo. Defender a lei, a ordem e os necessitados. Combater a mentira, o crime e o mal. Oferecer clemência, perdão e redenção. Lutar o bom combate.",
        simbolo: "Espada sobreposta a uma balança.",
        energia: enumEnergia.Positiva,
        arma: "Espada Longa",
        devotos: ["Aggelus, anões, cavaleiros, guerreriros, paladinos"],
        poderes: [],
        obrigacoes: "Devotos de Khalmyr não podem recusar pedidos de ajuda de pessoas inocentes. Também devem cumprir as ordens de superiores na hierarquia da igreja (devotos do Deus da Justiça de nível maior) e só podem usar itens mágicos permanentes criados por devotos do mesmo deus.",
        imagens: ["./img/divindades/display/Khalmyr.png", "./img/divindades/simbolos/Khalmyr.png"] 
    },
    {
        nome: "Lena",
        descricao: "Mesmo os deuses mais violentos e cruéis são respeitosos com a Deusa Criança, provedora da fertilidade, do sustento, da própria vida. Lena não é venerada apenas por aventureiros necessitados de curas mágicas, mas também por fazendeiros que imploram por colheitas fartas, criadores desejosos de saúde para seus animais e cada grávida prestes a dar à luz. Servida quase exclusivamente por mulheres, a Deusa da Vida oferece os mais poderosos milagres de cura presenciados em Arton.",
        crencas: "Reverenciar e proteger a vida em todas as suas formas. Reverenciar a fertilidade, a fecundidade, a maternidade e a infância. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção. Aliviar a dor e o sofrimento físico, mental ou espiritual.",
        simbolo: "Espada sobreposta a uma balança.",
        energia: enumEnergia.Positiva,
        arma: "Não há. Servos dessa deusa não podem lançar a magia Arma Espiritual e similares.",
        devotos: ["Dahllan, qareen, nobres, paladinos"],
        poderes: [],
        obrigacoes: "Devotos de Lena não podem causar dano letal ou perda de PV a criaturas vivas (fornecer bônus em dano letal também é proibido). Podem causar dano não letal e prejudicar seus inimigos (em termos de jogo, impondo condições), desde que não causem dano letal ou perda de PV. Para um devoto de Lena, é preferível perder a própria vida a tirá-la de outros. Apenas mulheres podem ser devotas de Lena. Uma clériga precisa dar à luz pelo menos uma vez antes de receber seus poderes divinos. A fecundação é um mistério bem guardado pelas sacerdotisas; conta-se que a própria deusa vem semear suas discípulas. Paladinos de Lena podem ser homens (são os únicos devotos masculinos permitidos) ou mulheres.",
        imagens: ["./img/divindades/display/Lena.png", "./img/divindades/simbolos/Lena.png"] 
    },
    {
        nome: "Lin-Wu",
        descricao: "Mesmo com a quase extinção de seu povo pela Tormenta, o honrado Deus Samurai nunca fraquejou, nunca perdeu sua dignidade. Hoje, o Império de Jade está livre da tempestade, seus habitantes retornam para a grande reconstrução. Lin-Wu e seu povo sempre serão gratos aos campeões gaijin, por sua amizade e suporte durante os anos de pesadelo. Talvez por esse motivo, conforme especulam seus servos shugenja, devotos de Lin-Wu atuando longe de Tamu-ra recebem poderes diferentes, mais convenientes para suas missões.",
        crencas: "Promover a honra acima de tudo. Proteger Tamu-ra e o Reinado de Arton. Praticar honestidade, coragem, cortesia e compaixão. Demonstrar integridade e dignidade. Ser leal a seus companheiros. Buscar redenção após cometer desonra.",
        simbolo: "Placa de metal com a silhueta de um dragão-serpente celestial.",
        energia: enumEnergia.Qualquer,
        arma: "Katana",
        devotos: ["Anões, cavaleiros, guerreiros, nobres, paladinos"],
        poderes: [],
        obrigacoes: "Antigas proibições quanto a devotos estrangeiros ou do gênero feminino não mais se aplicam. No entanto, devotos de Lin-Wu ainda devem demonstrar comportamento honrado, jamais recorrendo a mentiras e subterfúgios. Em termos de jogo, são proibidos de tentar qualquer ação que exigiria um teste de Enganação, Furtividade ou Ladinagem.",
        imagens: ["./img/divindades/display/Lin-Wu.png", "./img/divindades/simbolos/Lin-Wu.png"] 
    },
    {
        nome: "Marah",
        descricao: "Neste mundo sempre em guerra, devotos da Deusa da Paz talvez sejam os mais corajosos e perseverantes, buscando inspiração em sua padroeira para proteger Arton sem usar de violência. Marah ensina a suportar qualquer provação, demonstrar que brutalidade nunca é a única resposta. Ainda assim, esta não é apenas uma divindade de placidez e indolência; devotos de Marah costumam ser plenos de bom humor e atitude positiva, sempre prontos para uma nova celebração ou romance..",
        crencas: "Praticar o amor e a gratidão pela vida e pela bondade. Promover a paz, harmonia e felicidade. Aliviar a dor e o sofrimento, trazer conforto aos aflitos. Praticar a caridade e o altruísmo. Oferecer clemência, perdão e redenção.",
        simbolo: "Um coraçãop vermelho.",
        energia: enumEnergia.Positiva,
        arma: "Não há. Devotos desta deusa não podem lanãr a magia Arma Espiritual e similares.",
        devotos: ["Aggelus, elfos, hynne, qareen, bardos, nobres, paladinos"],
        poderes: [],
        obrigacoes: "Devotos de Marah não podem causar dano, perda de PV e condições a criaturas, exceto enfeitiçado, fascinado e pasmo (fornecer bônus em dano também é proibido). Em combate, só podem recorrer a ações como proteger ou curar — ou fugir, render-se ou aceitar a morte. Um devoto de Marah jamais vai causar violência, nem mesmo para se salvar.",
        imagens: ["./img/divindades/display/Marah.png", "./img/divindades/simbolos/Marah.png"] 
    }
]
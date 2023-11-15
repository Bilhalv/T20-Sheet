import { divindade, enumEnergia } from "../Construtores/Divindade";
import { RequisitoPoder, TipoPoder } from "../Construtores/Poder";

export const tabelaDivindades: divindade[] = [
    {
        nome: "Aharadak",
        descricao: "Outrora um dos terríveis Lordes da Tormenta, esta aberração monstruosa ambicionava o grande poder divino oferecido pelos devotos de Arton. Após anos liderando seu próprio culto profano, Aharadak matou Tauron, o Deus da Força, e ascendeu como o novo e macabro Deus da Tormenta. Agora ocupando uma posição importante no Panteão, os invasores lefeu avançam mais uma etapa em seus planos para corromper Arton. Apenas os devotos mais depravados ousam cultuar esta divindade de escatologia e sadismo.",
        crencas: "reverenciam a Tormenta, apregoam a inevitabilidade de sua chegada ao mundo. Praticam a devassidão e a perversão. Deturpam tudo que é correto, desfiguram tudo que é normal. Abraçam a agonia, crueldade e loucura.",
        simbolo: "Um olho macabro de pupila vertical e cercado de espinhos.",
        energia: enumEnergia.Negativa,
        arma: "Corrente de espinhos.",
        devotos: ["Quaisquer. A Tormenta aceita tudo e todos."],
        poderes: [
            {
                nome: "Afinidade com a Tormenta",
                descricao: "Você recebe +10 em testes de resistência contra efeitos da Tormenta, de suas criaturas e de devotos de Aharadak. Além disso, seu primeiro poder da Tormenta não conta para perda de Carisma.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Êxtase da Loucura",
                descricao: "Toda vez que uma ou mais criaturas falham em um teste de Vontade contra uma de suas habilidades mágicas, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena desta forma igual a sua Sabedoria.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Percepção Temporal",
                descricao: "Você pode gastar 3 PM para somar sua Sabedoria (limitado por seu nível e não cumulativo com efeitos que somam este atributo) a seus ataques, Defesa e testes de Reflexos até o fim da cena.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Rejeição Divina",
                descricao: "Você recebe resistência a magia divina +5.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Quase todos os cultistas de Aharadak são maníacos insanos, compelidos a praticar os atos mais abomináveis. No entanto, talvez devido à natureza alienígena e incompreensível deste deus, alguns devotos conseguem se resguardar. Preservam sua humanidade, abstendo-se de cometer crimes ou profanações. Ainda assim, o devoto paga um preço. No início de qualquer cena de ação, role 1d6. Com um resultado ímpar, você fica fascinado na primeira rodada, perdido em devaneios sobre a futilidade da vida (mesmo que seja imune a esta condição).",
        imagens: ["./img/divindades/display/Aharadak.png", "./img/divindades/simbolos/Aharadak.png"],
    },
    {
        nome: "Allihanna",
        descricao: "A Deusa da Natureza representa a bondade inerente ao mundo natural, a pureza das plantas e animais. Mesmo os animais predadores são considerados puros, inocentes — pois matam apenas para sobreviver, ao contrário dos monstros e seres civilizados. A divindade principal dos druidas, Allihanna também é cultuada por povos bárbaros. Estes veneram faces variadas desta deusa, que pode se manifestar como um majestoso animal (diferente para cada culto) ou uma criatura quimérica de muitas cabeças.",
        crencas: "reverenciam os seres da natureza. Protegem a vida selvagem. Promovem harmonia entre a natureza e a civilização. Combatem monstros, mortos-vivos e outras criaturas que perturbam o equilíbrio natural.",
        simbolo: "Para bárbaros e outros adoradores de animais, o símbolo corresponde ao respectivo animal. Para outros, uma pequena árvore.",
        energia: enumEnergia.Positiva,
        arma: "Bordão.",
        devotos: ["Dahllan, elfos, sílfides, bárbaros,caçadores, druidas"],
        poderes: [
            {
                nome: "Compreender os Ermos",
                descricao: "Você recebe +2 em Sobrevivência e pode usar Sabedoria para Adestramento (em vez de Carisma).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dedo Verde",
                descricao: "Você aprende e pode lançar Controlar Plantas. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Descanso Natural",
                descricao: "Para você, dormir ao relento conta como condição de descanso confortável.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Voz da Natureza",
                descricao: "Você pode falar com animais (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra animais. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }

        ],
        obrigacoes: "Devotos de Allihanna não podem usar armaduras e escudos feitos de metal. Assim, você só pode usar armadura acolchoada, de couro, gibão de peles e escudo leve, ou itens feitos de materiais especiais não metálicos. Devotos de Allihanna não podem descansar em nenhuma comunidade maior que uma aldeia (não perdem seus poderes, mas também não recuperam pontos de vida ou mana). Por isso, sempre preferem o relento a um quarto de estalagem.",
        imagens: ["./img/divindades/display/Allihanna.png", "./img/divindades/simbolos/Allihanna.png"]
    },
    {
        nome: "Arsenal",
        descricao: "Outrora um infame clérigo guerreiro, o vilão conhecido apenas como Mestre Arsenal se tornou sumo-sacerdote do violento deus Keenn. No entanto, após uma longa campanha que envolveu a conquista da mais poderosa espada mágica de Arton, o clérigo derrotou seu próprio patrono em combate durante um torneio épico, ascendendo ao Panteão como o novo Deus da Guerra. Com o objetivo de tornar Arton mais forte, capaz de confrontar qualquer inimigo, Arsenal e seus devotos seguem deflagrando conflitos por todo o Reinado e além.",
        crencas: "promovem a guerra e o conflito. Vencem a qualquer custo, pela força ou estratégia. Jamais oferecem ou aceitam rendição. Eliminam as próprias fraquezas. Conhecem o inimigo como a si mesmo. Sempre encontram condições de vitória; quando não existirem, criá-las.",
        simbolo: "Um martelo de guerra e uma espada longa cruzados sobre um escudo.",
        energia: enumEnergia.Qualquer,
        arma: "Martelo de Guerra.",
        devotos: ["Anões, minotauros, bárbaros cavaleiros, guerreiros, lutadores"],
        poderes: [
            {
                nome: "Conjurar Arma",
                descricao: "Você pode gastar 1 PM para invocar uma arma corpo a corpo ou de arremesso com a qual seja proficiente. A arma surge em sua mão, fornece +1 em testes de ataque e rolagens de dano, é considerada mágica e dura pela cena. Você não pode criar armas de disparo, mas pode criar 20 munições.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Coragem Total",
                descricao: "Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Fé Guerreira",
                descricao: "Você pode usar Sabedoria para Guerra (em vez de Inteligência). Além disso, em combate, pode gastar 2 PM para substituir um teste de perícia (exceto testes de ataque) por um teste de Guerra.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Sangue de Ferro",
                descricao: "Você pode pagar 3 PM para receber +2 em rolagens de dano e redução de dano 5 até o fim da cena.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Um devoto de Arsenal é proibido de ser derrotado em qualquer tipo de combate ou disputa (como um teste oposto para ver quem é mais forte). Caso seu grupo seja derrotado, isso também constitui uma violação das obrigações.",
        imagens: ["./img/divindades/display/Arsenal.png", "./img/divindades/simbolos/Arsenal.png"]
    },
    {
        nome: "Azgher",
        descricao: "Venerado pelos povos do Deserto da Perdição, o Deus Sol é também cultuado por viajantes, mercadores honestos e todos aqueles que combatem as trevas. É um deus generoso; sua jornada diária derrama calor e conforto sobre Arton. Azgher é como um pai severo: responsável, provedor, mas que também exige respeito de seus filhos. Como um olho sempre vigilante nos céus, nada acontece à luz do dia sem que Azgher perceba.",
        crencas: "praticam a gratidão pela proteção e generosidade do sol. Promovem a honestidade, expoem embustes e mentiras. Praticam a caridade e o altruísmo. Protegem os necessitados. Oferecem clemência, perdão e redenção. Combatem o mal.",
        simbolo: "Um sol dourado",
        energia: enumEnergia.Positiva,
        arma: "Cimitarra",
        devotos: ["Aggelus, qareen, arcanistas, bárbaros,caçadores, cavaleiros, guerreiros, nobres, paladinos"],
        poderes: [
            {
                nome: "Espada Solar",
                descricao: "Você pode gastar 1 PM para fazer uma arma corpo a corpo de corte que esteja empunhando causar +1d6 de dano por fogo até o fim da cena.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Fulgor Solar",
                descricao: "Você recebe redução de frio e trevas 5. Além disso, quando é alvo de um ataque você pode gastar 1 PM para emitir um clarão solar que deixa o atacante ofuscado por uma rodada.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Habitante do Deserto",
                descricao: "Você recebe redução de fogo 10 e pode pagar 1 PM para criar água pura e potável suficiente para um odre (ou outro recipiente pequeno).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Inimigo de Tenebra",
                descricao: "Seus ataques e habilidades causam +1d6 pontos de dano contra mortos-vivos. Quando você usa um efeito que gera luz, o alcance da iluminação dobra.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "O devoto de Azgher deve manter o rosto sempre coberto (com uma máscara, capuz ou trapos). Sua face pode ser revelada apenas ao sumo-sacerdote ou em seu funeral. Devotos do Sol também devem doar para a igreja de Azgher 20% de qualquer tesouro obtido. Essa doação deve ser feita em ouro, seja na forma de moedas ou itens",
        imagens: ["./img/divindades/display/Azgher.png", "./img/divindades/simbolos/Azgher.png"]
    },
    {
        nome: "Hyninn",
        descricao: "Capaz de enganar até mesmo outros deuses, o ardiloso Deus da Trapaça é uma divindade favorita de foras da lei — seus clérigos atuam como conselheiros, ou até mesmo líderes, em guildas criminosas ou navios piratas. Também é louvado por regentes e mercadores não muito honestos, orando por vantagens ilícitas. No entanto, mesmo pessoas honradas eventualmente simpatizam com Hyninn por sua esperteza, despreocupação e ousadia",
        crencas: "praticam a astúcia e a esperteza. Demonstram que honestidade e sinceridade levam ao fracasso. Desafiam a lei e a ordem. São vitoriosos sem seguir regras. Fazem aos outros antes que façam a você. Levam vantagem em tudo.",
        simbolo: "Uma adaga atravessando uma máscara, ou uma raposa",
        energia: enumEnergia.Positiva,
        arma: "Adaga",
        devotos: ["Hynne, goblins, sílfides, bardos,bucaneiros, ladinos, inventores, nobres"],
        poderes: [
            {
                nome: "Apostar com o Trapaceiro",
                descricao: "Quando faz um teste de perícia, você pode gastar 1 PM para apostar com Hyninn. Você e o mestre rolam 1d20, mas o mestre mantém o resultado dele em segredo. Você então escolhe entre usar seu próprio resultado ou o resultado oculto do mestre (neste caso, ele revela o resultado).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Farsa do Fingidor",
                descricao: "Você aprende e pode lançar Criar Ilusão. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Forma de Macaco",
                descricao: "Você pode gastar uma ação completa e 2 PM para se transformar em um macaco. Você adquire tamanho Minúsculo (o que fornece +5 em Furtividade e –5 em testes de manobra) e recebe deslocamento de escalar 9m. Seu equipamento desaparece (e você perde seus benefícios) até você voltar ao normal, mas suas outras estatísticas não são alteradas. A transformação dura indefinidamente, mas termina caso você faça um ataque, lance uma magia ou sofra dano.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Golpista Divino",
                descricao: "Você recebe +2 em Enganação, Jogatina e Ladinagem.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Um devoto de Hyninn não recusa participação em um golpe, trapaça ou artimanha (o que muitas vezes inclui missões para roubar... hã, resgatar tesouros), exceto quando prejudica seus próprios aliados. O devoto também deve fazer um ato furtivo, ousado ou proibido por dia (ou por sessão de jogo, o que demorar mais), como oferenda a Hyninn. Roubar uma bolsa, enganar um miliciano, invadir o quarto de um nobre... Em termos de jogo, uma ação exigindo um teste de Enganação ou Ladinagem com CD mínima 15 + metade do seu nível.",
        imagens: ["./img/divindades/display/Hynnin.png", "./img/divindades/simbolos/Hynnin.png"]
    },
    {
        nome: "Kallyadranoch",
        descricao: "Como punição imposta por Khalmyr pelo crime de criar a Tormenta, o Deus dos Dragões estava esquecido até poucos anos atrás, conhecido apenas como “o Terceiro”. Restaurado em tempos recentes durante um combate épico contra os invasores aberrantes, Kallyadranoch agora governa não apenas os dragões, mas todos que cultuam o poder elemental das grandes feras. Além disso, enquanto Wynna representa o lado bondoso e generoso da magia arcana, Kally é cultuado por arcanistas malignos.",
        crencas: "praticam a soberania. Demonstram orgulho, superioridade, majestade. Praticam o acúmulo de riquezas. Protegem suas posses e sua dignidade. São implacáveis com seus inimigos. Reverenciam os dragões e suas crias.",
        simbolo: "Escamas de cinco cores diferentes.",
        energia: enumEnergia.Negativa,
        arma: "Lança",
        devotos: ["Elfos, medusas, sulfure, arcanistas,cavaleiros, guerreiros, lutadores, nobres"],
        poderes: [
            {
                nome: "Servos do Dragão",
                descricao: "Você pode gastar uma ação completa e 2 PM para invocar 2d4+1 kobolds capangas em espaços desocupados em alcance curto. Você pode gastar uma ação de movimento para fazer os kobolds andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6–1 pontos de dano de perfuração cada). Os kobolds têm For –1, Des 1, Defesa 12, 1 PV e falham automaticamente em qualquer teste de resistência ou oposto. Eles desaparecem quando morrem ou no fim da cena. Os kobolds não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Presas Primordiais",
                descricao: "Você pode gastar 1 PM para transformar seus dentes em presas afiadas até o fim da cena. Você recebe uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Se já possuir outro ataque natural de mordida, em vez disso, o dano desse ataque aumenta em dois passos.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Escamas Dracônicas",
                descricao: "Você recebe +2 na Defesa e em Fortitude.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Aura de Medo",
                descricao: "Você pode gastar 2 PM para gerar uma aura de medo de 9m de raio e duração até o fim da cena. Todos os inimigos que entrem na aura devem fazer um teste de Vontade (CD Car) ou ficam abalados até o fim da cena. Uma criatura que passe no teste de Vontade fica imune a esta habilidade por um dia.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Para subir de nível, além de acumular XP suficiente, o devoto de Kally deve realizar uma oferenda em tesouro. O valor é igual à 20% da diferença do dinheiro inicial do nível que vai alcançar para o nível atual (por exemplo, T$ 80 para subir para o 4° nível). Sabe-se, também, de devotos malignos que sacrificam vítimas a Kally (não permitido para personagens jogadores).",
        imagens: ["./img/divindades/display/Kallyadranoch.png", "./img/divindades/simbolos/Kallyadranoch.png"]
    },
    {
        nome: "Khalmyr",
        descricao: "Antigo líder do Panteão, o Deus da Justiça já foi considerado a divindade mais popular no Reinado. Isso mudaria com a vitória dos minotauros nas Guerras Táuricas, bem como a recente ascensão de Valkaria como nova líder dos deuses. Mesmo assim, Khalmyr ainda é louvado por aqueles que lutam pela ordem e justiça. As duas maiores ordens de cavaleiros em Arton foram criadas em sua honra: a Ordem da Luz e a Ordem de Khalmyr. Esta é também uma das divindades principais dos anões, junto de Tenebra — conforme a crença, ambos teriam gerado juntos a raça anã.",
        crencas: "praticam a caridade e o altruísmo. Defendem a lei, a ordem e os necessitados. Combatem a mentira, o crime e o mal. Oferecem clemência, perdão e redenção. Lutam o bom combate.",
        simbolo: "Espada sobreposta a uma balança.",
        energia: enumEnergia.Positiva,
        arma: "Espada Longa",
        devotos: ["Aggelus, anões, cavaleiros, guerreriros, paladinos"],
        poderes: [
            {
                nome: "Coragem total",
                descricao: "Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dom da Verdade",
                descricao: "Você pode pagar 2 PM para receber +5 em testes de Intuição, e em testes de Percepção contra Enganação e Furtividade, até o fim da cena.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Espada Justiceira",
                descricao: "Você pode gastar 1 PM para encantar sua espada (ou outra arma corpo a corpo de corte que esteja empunhando). Ela tem seu dano aumentado em um passo até o fim da cena.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Reparar Injustiça",
                descricao: "Uma vez por rodada, quando um oponente em alcance curto acerta um ataque em você ou em um de seus aliados, você pode gastar 2 PM para fazer este oponente repetir o ataque, escolhendo o pior entre os dois resultados.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Khalmyr não podem recusar pedidos de ajuda de pessoas inocentes. Também devem cumprir as ordens de superiores na hierarquia da igreja (devotos do Deus da Justiça de nível maior) e só podem usar itens mágicos permanentes criados por devotos do mesmo deus.",
        imagens: ["./img/divindades/display/Khalmyr.png", "./img/divindades/simbolos/Khalmyr.png"]
    },
    {
        nome: "Lena",
        descricao: "Mesmo os deuses mais violentos e cruéis são respeitosos com a Deusa Criança, provedora da fertilidade, do sustento, da própria vida. Lena não é venerada apenas por aventureiros necessitados de curas mágicas, mas também por fazendeiros que imploram por colheitas fartas, criadores desejosos de saúde para seus animais e cada grávida prestes a dar à luz. Servida quase exclusivamente por mulheres, a Deusa da Vida oferece os mais poderosos milagres de cura presenciados em Arton.",
        crencas: "reverenciam e protegem a vida em todas as suas formas. Reverenciam a fertilidade, a fecundidade, a maternidade e a infância. Praticam a caridade e o altruísmo. Oferecem clemência, perdão e redenção. Aliviam a dor e o sofrimento físico, mental ou espiritual.",
        simbolo: "Espada sobreposta a uma balança.",
        energia: enumEnergia.Positiva,
        arma: "Não há. Servos dessa deusa não podem lançar a magia Arma Espiritual e similares.",
        devotos: ["Dahllan, qareen, nobres, paladinos"],
        poderes: [
            {
                nome: "Ataque Piedoso",
                descricao: "Você pode usar armas corpo a corpo para causar dano não letal sem sofrer a penalidade de –5 no teste de ataque.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Aura Restauradora",
                descricao: "Efeitos de cura usados por você e seus aliados em alcance curto recuperam +1 PV por dado.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Cura Gentil",
                descricao: "Você soma seu Carisma aos PV restaurados por seus efeitos mágicos de cura.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Curandeira Perfeita",
                descricao: "Você sempre pode escolher 10 em testes de Cura. Além disso, não sofre penalidade por usar essa perícia sem uma maleta de medicamentos. Se possuir o item, recebe +2 no teste de Cura (ou +5, se ele for aprimorado).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Lena não podem causar dano letal ou perda de PV a criaturas vivas (fornecer bônus em dano letal também é proibido). Podem causar dano não letal e prejudicar seus inimigos (em termos de jogo, impondo condições), desde que não causem dano letal ou perda de PV. Para um devoto de Lena, é preferível perder a própria vida a tirá-la de outros. Apenas mulheres podem ser devotas de Lena. Uma clériga precisa dar à luz pelo menos uma vez antes de receber seus poderes divinos. A fecundação é um mistério bem guardado pelas sacerdotisas; conta-se que a própria deusa vem semear suas discípulas. Paladinos de Lena podem ser homens (são os únicos devotos masculinos permitidos) ou mulheres.",
        imagens: ["./img/divindades/display/Lena.png", "./img/divindades/simbolos/Lena.png"]
    },
    {
        nome: "Lin-Wu",
        descricao: "Mesmo com a quase extinção de seu povo pela Tormenta, o honrado Deus Samurai nunca fraquejou, nunca perdeu sua dignidade. Hoje, o Império de Jade está livre da tempestade, seus habitantes retornam para a grande reconstrução. Lin-Wu e seu povo sempre serão gratos aos campeões gaijin, por sua amizade e suporte durante os anos de pesadelo. Talvez por esse motivo, conforme especulam seus servos shugenja, devotos de Lin-Wu atuando longe de Tamu-ra recebem poderes diferentes, mais convenientes para suas missões.",
        crencas: "promovem a honra acima de tudo. Protegem Tamu-ra e o Reinado de Arton. Praticar honestidade, coragem, cortesia e compaixão. Demonstram integridade e dignidade. São leais a seus companheiros. Buscam redenção após cometerem desonra.",
        simbolo: "Placa de metal com a silhueta de um dragão-serpente celestial.",
        energia: enumEnergia.Qualquer,
        arma: "Katana",
        devotos: ["Anões, cavaleiros, guerreiros, nobres, paladinos"],
        poderes: [
            {
                nome: "Coragem total",
                descricao: "Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Kiai Divino",
                descricao: "Uma vez por rodada, quando faz um ataque corpo a corpo, você pode pagar 3 PM. Se acertar o ataque, causa dano máximo, sem necessidade de rolar dados.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Mente Vazia",
                descricao: "Você recebe +2 em Iniciativa, Percepção e Vontade.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Tradição de Lin-Wu",
                descricao: "Você considera a katana uma arma simples e, se for proficiente em armas marciais, recebe +1 na margem de ameaça com ela.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }

        ],
        obrigacoes: "Antigas proibições quanto a devotos estrangeiros ou do gênero feminino não mais se aplicam. No entanto, devotos de Lin-Wu ainda devem demonstrar comportamento honrado, jamais recorrendo a mentiras e subterfúgios. Em termos de jogo, são proibidos de tentar qualquer ação que exigiria um teste de Enganação, Furtividade ou Ladinagem.",
        imagens: ["./img/divindades/display/Lin-Wu.png", "./img/divindades/simbolos/Lin-Wu.png"]
    },
    {
        nome: "Marah",
        descricao: "Neste mundo sempre em guerra, devotos da Deusa da Paz talvez sejam os mais corajosos e perseverantes, buscando inspiração em sua padroeira para proteger Arton sem usar de violência. Marah ensina a suportar qualquer provação, demonstrar que brutalidade nunca é a única resposta. Ainda assim, esta não é apenas uma divindade de placidez e indolência; devotos de Marah costumam ser plenos de bom humor e atitude positiva, sempre prontos para uma nova celebração ou romance..",
        crencas: "praticam o amor e a gratidão pela vida e pela bondade. Promovem a paz, harmonia e felicidade. Aliviam a dor e o sofrimento, trazem conforto aos aflitos. Praticam a caridade e o altruísmo. Oferecem clemência, perdão e redenção.",
        simbolo: "Um coração vermelho.",
        energia: enumEnergia.Positiva,
        arma: "Não há. Devotos desta deusa não podem lanãr a magia Arma Espiritual e similares.",
        devotos: ["Aggelus, elfos, hynne, qareen, bardos, nobres, paladinos"],
        poderes: [
            {
                nome: "Aura de Paz",
                descricao: "Você pode gastar 2 PM para gerar uma aura de paz com alcance curto e duração de uma cena. Qualquer inimigo dentro da aura que tente fazer uma ação hostil contra você deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Se passar, fica imune a esta habilidade por um dia.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dom da Esperança",
                descricao: "Você soma sua Sabedoria em seus PV em vez de Constituição, e se torna imune às condições alquebrado, esmorecido e frustrado.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Palavras de Bondade",
                descricao: "Você aprende e pode lançar Enfeitiçar. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Talento Artístico",
                descricao: "Você recebe +2 em Acrobacia, Atuação e Diplomacia.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Marah não podem causar dano, perda de PV e condições a criaturas, exceto enfeitiçado, fascinado e pasmo (fornecer bônus em dano também é proibido). Em combate, só podem recorrer a ações como proteger ou curar — ou fugir, render-se ou aceitar a morte. Um devoto de Marah jamais vai causar violência, nem mesmo para se salvar.",
        imagens: ["./img/divindades/display/Marah.png", "./img/divindades/simbolos/Marah.png"]
    },
    {
        nome: "Megalokk",
        descricao: "O Deus dos Monstros é uma divindade de selvageria e descontrole — quando bárbaros entram em fúria, diz-se que estão apenas canalizando seu rancor primordial. Enquanto servos de Allihanna promovem harmonia entre a natureza e os povos civilizados, devotos de seu irmão sanguinário buscam apenas o extermínio de seus inimigos. E, para um servo do Deus dos Monstros, quase tudo que se move é um inimigo...",
        crencas: "praticam a violência, a soberania do mais forte. Jamais reprimem os próprios instintos e desejos. Jamais são domados, desafiam qualquer forma de controle. Jamais oferecem perdão ou rendição. Eliminam os fracos. Destroem seus inimigos.",
        simbolo: "A garra de um monstro.",
        energia: enumEnergia.Negativa,
        arma: "Maça",
        devotos: ["Goblins, medusas, minotauros, sulfure, trogs, bárbaros, caçadores, druidas, lutadores"],
        poderes: [
            {
                nome: "Presas primordiais",
                descricao: "Você pode gastar 1 PM para transformar seus dentes em presas afiadas até o fim da cena. Você recebe uma arma natural de mordida (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir com outra arma, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida. Se já possuir outro ataque natural de mordida, em vez disso, o dano desse ataque aumenta em dois passos.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Olhar Amedrontador",
                descricao: "Você aprende e pode lançar Amedrontar. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Urro Divino",
                descricao: "Quando faz um ataque ou lança uma magia, você pode pagar 1 PM para somar sua Constituição (mínimo +1) à rolagem de dano desse ataque ou magia.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Voz dos Monstros",
                descricao: "Você conhece os idiomas de todos os monstros inteligentes e pode se comunicar livremente com monstros não inteligentes (Int –4 ou menor), como se estivesse sob efeito da magia Voz Divina.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Megalokk devem rejeitar os modos civilizados e se entregar à ferocidade, descontrole e impaciência. Você é proibido de usar perícias baseadas em Inteligência ou Carisma (exceto Adestramento e Intimidação) e não pode preparar uma ação, escolher 10 ou 20 em testes e lançar magias sustentadas (pois são ações que exigem foco e paciência).",
        imagens: ["./img/divindades/display/Megalokk.png", "./img/divindades/simbolos/Megalokk.png"]
    },
    {
        nome: "Nimb",
        descricao: "“Khalmyr tem o tabuleiro, mas quem move as peças é Nimb” — provérbio dos tempos em que o Deus da Justiça governava o Panteão, sua liderança sempre desafiada pelo insano Deus do Caos. Nada é certo sobre esta entidade do acaso, sorte e azar. Teria Nimb cuidadosamente tramado a queda de Khalmyr, enfim derrotando o eterno rival? Seria ele capaz de um plano tão louco e brilhante? Ou não?",
        crencas: "reverenciam o caos, a aleatoriedade, a sorte e o azar. Praticam a ousadia e a rebeldia, desafiam regras e leis. Rejeitam o bom senso. Tornam o mundo mais interessante. Ou divertido. Ou terrível. Ou não.",
        simbolo: "Um dado de seis faces.",
        energia: enumEnergia.Qualquer,
        arma: "Nenhuma e todas! Ao usar um efeito que dependa de arma preferida, qualquer arma (ou outro objeto!) pode aparecer, de acordo com o mestre.",
        devotos: ["Goblins, qareen, sílfides, arcanistas, bárbaros, bardos, bucaneiros, inventores, ladinos"],
        poderes: [
            {
                nome: "Êxtase da Loucura",
                descricao: "Toda vez que uma ou mais criaturas falham em um teste de Vontade contra uma de suas habilidades mágicas, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena desta forma igual a sua Sabedoria.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Poder Oculto",
                descricao: "Você pode gastar uma ação de movimento e 2 PM para invocar a força, a rapidez ou o vigor dos loucos. Role 1d6 para receber +2 em Força (1 ou 2), Destreza (3 ou 4) ou Constituição (5 ou 6) até o fim da cena. Você pode usar este poder várias vezes, mas bônus no mesmo atributo não são cumulativos.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Sorte dos loucos",
                descricao: "Você pode pagar 1 PM para rolar novamente um teste recém realizado. Se ainda assim falhar no teste, você perde 1d6 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Transmissão da Loucura",
                descricao: "Você pode lançar Sussurros Insanos (CD Car). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Por serem incapazes de seguir regras, estes devotos não têm “obrigações” verdadeiras (portanto, nunca perdem PM por descumprirem suas O&R). No entanto, sofrem certas restrições que não podem ignorar. Devotos de Nimb são loucos (ou agem como se fossem), não conseguindo convencer ninguém de coisa alguma. Você sofre –5 em testes de perícias baseadas em Carisma. Além disso, no início de cada cena de ação, role 1d6. Com um resultado 1, você fica confuso (mesmo que seja imune a esta condição).",
        imagens: ["./img/divindades/display/Nimb.png", "./img/divindades/simbolos/Nimb.png"]
    },
    {
        nome: "Oceano",
        descricao: "Nestes tempos de grande tumulto no plano divino, em meio a deuses caindo e ascendendo, o Deus dos Mares está entre os poucos ainda imutáveis. Sua época de fúria, quando arrasava civilizações inteiras, foi quase esquecida. Hoje o Oceano é sereno, pleno em si mesmo, alienado dos conflitos no Panteão — acha os outros deuses mesquinhos, disputando ninharias, frente à vastidão de seus domínios. Ainda assim, recebe preces de marinheiros, piratas e povos marinhos, orando por sua tranquilidade, rogando que suas tempestades sejam breves.",
        crencas: "reverenciar os mares, o oceano e os seres que ali habitam. Promover harmonia entre o oceano e o mundo seco. Proteger os seres marinhos, mas também os seres do mundo seco que se aventuram sobre as ondas. Demandar devido respeito ao mar e seu poder.",
        simbolo: "Uma concha.",
        energia: enumEnergia.Qualquer,
        arma: "Tridente.",
        devotos: ["Dahllan, hynne, minotauros, sereias/tritões, bárbaros, bucaneiros, caçadores, druidas."],
        poderes: [
            {
                nome: "Anfíbio",
                descricao: "Você pode respirar embaixo d’água e adquire deslocamento de natação igual a seu deslocamento terrestre.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Arsenal das profundezas",
                descricao: "Você recebe +2 nas rolagens de dano com azagaias, lanças e tridentes e seu multiplicador de crítico com essas armas aumenta em +1.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Mestre dos Mares",
                descricao: "Você pode falar com animais aquáticos (como o efeito da magia Voz Divina) e aprende e pode lançar Acalmar Animal, mas só contra criaturas aquáticas. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Sopro do Mar",
                descricao: "Você pode gastar uma ação padrão e 1 PM para soprar vento marinho em um cone de 6m. Criaturas na área sofrem 2d6 pontos de dano de frio (Reflexos CD Sab reduz à metade). Você pode aprender Sopro das Uivantes como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "As únicas armas permitidas para devotos do Oceano são a azagaia, a lança, o tridente e a rede. Podem usar apenas armaduras leves. O devoto também não pode se manter afastado do oceano por mais de um mês.",
        imagens: ["./img/divindades/display/Oceano.png", "./img/divindades/simbolos/Oceano.png"]
    },
    {
        nome: "Sszzaas",
        descricao: "O sibilante Deus da Traição não é apenas o mais inteligente entre os deuses, mas também o mais perigoso. Tão perigoso que, certa vez, tentou reunir os Rubis da Virtude — vinte gemas de poder contendo a essência de todos os deuses. Chegou a ser expulso do Panteão por esse crime, mas sua astúcia não conhecia limites; Sszzaas conseguiu tramar um novo plano para ser aceito de volta. Hoje, mesmo após a quase extinção de seu culto, os sszzaazitas voltam a se espalhar sobre Arton, agindo em nome do Grande Corruptor. Mas será prudente devotar-se a um Deus da Traição? Apenas os mais ousados e astutos acreditam que sim.",
        crencas: "praticam a mentira e a trapaça. Buscam sempre a solução mais inteligente. Demonstrar que lealdade e confiança são fraquezas, devem ser eliminadas. Promover competição, rivalidade, desconfiança. Usar os recursos do inimigo para alcançar seus objetivos. Levar outros a se sacrificarem em seu lugar.",
        simbolo: "Uma naja vertendo veneno pelas presas.",
        energia: enumEnergia.Negativa,
        arma: "Adaga.",
        devotos: ["Medusas, arcanistas, bardos, bucaneiros, inventores, ladinos, nobres"],
        poderes: [
            {
                nome: "Astúcia da Serpente",
                descricao: "Você recebe +2 em Enganação, Furtividade e Intuição.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Familiar Ofídico",
                descricao: "Você recebe um familiar cobra (veja a página 38) que não conta em seu limite de parceiros.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Presas venenosas",
                descricao: "Você pode gastar uma ação de movimento e 1 PM para envenenar uma arma corpo a corpo que esteja empunhando. Em caso de acerto, a arma causa perda de 1d12 pontos de vida. A arma permanece envenenada até atingir uma criatura ou até o fim da cena, o que acontecer primeiro.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Sangue Ofídico",
                descricao: "Você recebe resistência a veneno +5 e a CD para resistir aos seus venenos aumenta em +2.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Sszzaas devem sempre mentir, enganar e trair. Você é proibido de usar perícias baseadas em Sabedoria ou Carisma (exceto Intimidação e Percepção) e não pode recusar um pedido de ajuda de um aliado (pois seria uma traição).",
        imagens: ["./img/divindades/display/Sszzaas.png", "./img/divindades/simbolos/Sszzaas.png"]
    },
    {
        nome: "Tanna-Toh",
        descricao: "Em uma socicdade medieval típica, apenas membros do clero ou da nobreza teriam acesso a boa educação — camponeses jamais saberiam ler e escrever. Não é assim no Reinado de Arton, graças ao empenho da igreja de Tanna-Toh. Devotos da Deusa do Conhecimento atuam como professores, catequistas e pesquisadores, tomando a missão sagrada de levar educação e cultura para todos. Tanna-Toh é amplamente venerada pelos povos civilizados, amada por aqueles que se devotam aos estudos ou artes. Ainda assim, esta deusa é inimiga de povos bárbaros que escolhem permanecer ignorantes e selvagens.",
        crencas: "reverenciam a mente racional, o conhecimento, a civilização, a verdade. Protegem o progresso, o avanço dos povos civilizados. Promovem o ensino e a prática das artes e das ciências. Solucionam todos os mistérios, revelam todas as mentiras. Buscam novo conhecimento. Não toleram a ignorância.",
        simbolo: "Pergaminho e pena.",
        energia: enumEnergia.Qualquer,
        arma: "Bordão.",
        devotos: ["Golens, kliren, arcanistas, bardos, inventores, nobres, paladinos."],
        poderes: [
            {
                nome: "Conhecimento Enciclopédico",
                descricao: "Você se torna treinado em duas perícias baseadas em Inteligência a sua escolha.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Mente Analítica",
                descricao: "Você recebe +2 em Intuição, Investigação e Vontade.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Pesquisa Abençoada",
                descricao: "Se passar uma hora pesquisando seus livros e anotações, você pode rolar novamente um teste de perícia baseada em Inteligência ou Sabedoria que tenha feito desde a última cena. Se tiver acesso a mais livros, você recebe um bônus no teste: +2 para uma coleção particular ou biblioteca pequena e +5 para a biblioteca de um templo ou universidade.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Voz da Civilização",
                descricao: "Você está sempre sob efeito de Compreensão.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Tanna-Toh jamais podem recusar uma missão que envolva a busca por um novo conhecimento ou informação; investigar rumores sobre um livro perdido, procurar uma aldeia lendária, pesquisar os hábitos de uma criatura desconhecida... Além disso, o devoto sempre deve dizer a verdade e nunca pode se recusar a responder uma pergunta direta, pouco importando as consequências. É proibido para ele esconder qualquer conhecimento.",
        imagens: ["./img/divindades/display/Tanna-Toh.png", "./img/divindades/simbolos/Tanna-Toh.png"]
    },
    {
        nome: "Tenebra",
        descricao: "Assim como seu inimigo Azgher vigia e protege Arton durante o dia, Tenebra é atenta sob as estrelas; nada acontece na noite sem seu conhecimento. A sedutora e misteriosa Deusa das Trevas é mãe de tudo que anda e rasteja no escuro, dos nobres anões aos sinistros mortos-vivos e trogloditas. Ainda que muitas vezes temida, Tenebra sempre protegeu as criaturas noturnas e subterrâneas, bondosas ou malignas. No entanto, com a recente destruição de Ragnar, antigo Deus da Morte, cada vez mais cultos necromantes começam a oferecer sacrifícios à Mãe Noite.",
        crencas: "reverenciam a noite, a escuridão, a lua e as estrelas. Protegem segredos e mistérios, protegem tudo que é oculto e invisível. Reverenciam a não vida e os mortos-vivos, propagam a prática da necromancia. Rejeitam o sol e a luz.",
        simbolo: "Estrela negra de cinco pontas.",
        energia: enumEnergia.Negativa,
        arma: "Adaga.",
        devotos: ["Anões, medusas, qareen, osteon, sulfure, trogs, arcanistas, bardos, ladinos."],
        poderes: [
            {
                nome: "Carícia Sombria",
                descricao: "Você pode gastar 1 PM e uma ação padrão para cobrir sua mão com energia negativa e tocar uma criatura em alcance corpo a corpo. A criatura sofre 2d6 pontos de dano de trevas (Fortitude CD Sab reduz à metade) e você recupera PV iguais à metade do dano causado. Você pode aprender Toque Vampírico como uma magia divina. Se fizer isso, o custo dela diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Manto da Penumbra",
                descricao: "Você aprende e pode lançar Escuridão. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Visão nas Trevas",
                descricao: "Você enxerga perfeitamente no escuro, incluindo em magias de escuridão.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Zumbificar",
                descricao: "Você pode gastar uma ação completa e 3 PM para reanimar o cadáver de uma criatura Pequena ou Média adjacente por um dia. O cadáver funciona como um parceiro iniciante de um tipo a sua escolha entre combatente, fortão ou guardião. Além disso, quando sofre dano, você pode sacrificar esse parceiro; se fizer isso, você sofre apenas metade do dano, mas o cadáver é destruído.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Tenebra proíbe que seus devotos sejam tocados por Azgher, o odiado rival. O devoto deve se cobrir inteiramente durante o dia, sem expor ao sol nenhum pedaço de pele.",
        imagens: ["./img/divindades/display/Tenebra.png", "./img/divindades/simbolos/Tenebra.png"]
    },
    {
        nome: "Thwor",
        descricao: "A Flecha de Fogo foi disparada, rompendo o coração das trevas. A antiga profecia foi cumprida. No entanto, o que muitos pensavam significar o fim da Aliança Negra dos goblinoides resultou em algo totalmente diferente, totalmente novo. Ao enfrentar e derrotar o próprio Ragnar, antigo Deus da Morte, o imperador bugbear Thwor Khoshkothruk ascendeu ao Panteão como o Deus dos Goblinoides. Agora protegidos e governados por uma poderosa divindade, os povos duyshidakk erguem sua própria civilização no continente de Lamnor, e o Reinado de Arton jamais será o mesmo.",
        crencas: "reverenciam a força e a guerra. Promovem a violência e a destruição. Praticam a soberania do mais forte. Praticam a conquista e a expansão territorial. Protegem os povos goblinoides e seus aliados. Destroem seus inimigos.",
        simbolo: "Um machado de guerra.",
        energia: enumEnergia.Qualquer,
        arma: "Machado de Guerra.",
        devotos: ["Goblins, hobgoblins, orcs, bugbears, bárbaros, guerreiros, lutadores, nobres"],
        poderes: [
            {
                nome: "Almejar o Impossível",
                descricao: "Quando faz um teste de perícia, um resultado de 19 ou mais no dado sempre é um sucesso, não importando o valor a ser alcançado.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Fúria Divina",
                descricao: "Você pode gastar 2 PM para invocar uma fúria selvagem, tornando-se temível em combate. Até o fim da cena, você recebe +2 em testes de ataque e rolagens de dano corpo a corpo, mas não pode executar nenhuma ação que exija paciência ou concentração (como usar a perícia Furtividade ou lançar magias). Se usar este poder em conjunto com a habilidade Fúria, ela também dura uma cena (e não termina se você não atacar ou for alvo de uma ação hostil).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Olhar Amedrontador",
                descricao: "Você aprende e pode lançar Amedrontar. Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Tropas Duyshidakk",
                descricao: "Você pode gastar uma ação completa e 2 PM para invocar 1d4+1 goblinoides capangas em espaços desocupados em alcance curto. Você pode gastar uma ação de movimento para fazer os goblinoides andarem (eles têm deslocamento 9m) ou uma ação",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Thwor devem sempre buscar a expansão de seu território e poder. Você é proibido de recusar uma oportunidade de conquista, seja de território, riquezas ou poder. Além disso, o devoto deve sempre se esforçar para se tornar mais forte, seja por meio de treinamento, magia ou itens mágicos.",
        imagens: ["./img/divindades/display/Thwor.png", "./img/divindades/simbolos/Thwor.png"]
    },
    {
        nome: "Thyatis",
        descricao: "O generoso Deus da Ressurreição e Profecia representa o perdão, a tolerância, as segundas chances. Seu dom maior é a prevenção ou correção dos erros — através de previsões que evitam esses erros ou reversão das mortes que tenham causado. Para Thyatis, ninguém deve ser castigado por errar e todos merecem a chance de aprender com suas falhas, em vez de morrer por elas. Dizem que seus clérigos são contemplados com poderosos dons de profecia e ressurreição, e seus paladinos nunca morrem!",
        crencas: "protegem a vida e aqueles necessitados de novas chances. Renegam a morte e a mentira. Ajudam os perdidos a encontrar seus caminhos e alcançar seus destinos. Oferecem clemência, perdão e redenção.",
        simbolo: "Uma ave fênix.",
        energia: enumEnergia.Positiva,
        arma: "Espada Longa.",
        devotos: ["Aggelus, cavaleiros, guerreiros, inventores, lutadores, paladinos."],
        poderes: [
            {
                nome: "Ataque Piedoso",
                descricao: "Você pode usar armas corpo a corpo para causar dano não letal sem sofrer a penalidade de –5 no teste de ataque.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dom da Imortalidade",
                descricao: "Você é imortal. Sempre que morre, não importando o motivo, volta à vida após 3d6 dias. Apenas paladinos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dom da Profecia",
                descricao: "Você pode lançar Augúrio. Caso aprenda novamente essa magia, seu custo diminui em –1 PM. Você também pode gastar 2 PM para receber +2 em um teste.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Dom da Ressurreição",
                descricao: "Você pode gastar uma ação completa e todos os PM que possui (mínimo 1 PM) para tocar o corpo de uma criatura morta há menos de um ano e ressuscitá-la. A criatura volta à vida com 1 PV e 0 PM, e perde 1 ponto de Constituição permanentemente. Este poder só pode ser usado uma vez em cada criatura. Apenas clérigos podem escolher este poder. Um personagem pode ter Dom da Imortalidade ou Dom da Ressurreição, mas não ambos.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Thyatis são proibidos de matar criaturas inteligentes (Int –3 ou maior). Podem atacar e causar dano, mas jamais levar à morte. Por esse motivo, devotos de Thyatis preferem armas e ataques que apenas incapacitam seus oponentes ou causam dano não letal.",
        imagens: ["./img/divindades/display/Thyatis.png", "./img/divindades/simbolos/Thyatis.png"]
    },
    {
        nome: "Valkaria",
        descricao: "A Deusa da Ambição sempre foi a mais ousada entre os seus. Ajudaria a criar os lefeu, a própria Tormenta. Criaria os seres humanos, povo mais impetuoso e beligerante de todos. Acabaria condenada ao cativeiro, até ser resgatada por seus próprios protegidos, elevando ainda mais sua glória (ou teria assim planejado desde o início?). Mas, quando Mestre Arsenal derrotou Keenn para tomar seu lugar como Deus da Guerra, o maior objetivo de Valkaria foi enfim alcançado: um humano superou um deus. Esse evento, e também a morte do antigo líder Tauron, levou os deuses a reconhecerem Valkaria como a nova liderança do Panteão.",
        crencas: "praticam o otimismo, a evolução, a rebeldia. Desafiam limites, almejam o impossível. Combatem o mal, a opressão e a tirania. Protegem a liberdade. Aceitam desafios.",
        simbolo: "Uma estrela de cinco pontas.",
        energia: enumEnergia.Qualquer,
        arma: "Espada Longa.",
        devotos: ["Aggelus, cavaleiros, guerreiros, inventores, lutadores, paladinos."],
        poderes: [
            {
                nome: "Almejar o Impossível",
                descricao: "Quando faz um teste de perícia, um resultado de 19 ou mais no dado sempre é um sucesso, não importando o valor a ser alcançado.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Coragem Total",
                descricao: "Você é imune a efeitos de medo, mágicos ou não. Este poder não elimina fobias raciais (como o medo de altura dos minotauros).",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Armas da ambição",
                descricao: "Você recebe +1 em testes de ataque e na margem de ameaça com armas nas quais é proficiente.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Liberdade Divina",
                descricao: "Você pode gastar 2 PM para receber imunidade a efeitos de movimento por uma rodada.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            }
        ],
        obrigacoes: "Devotos de Valkaria não podem recusar um desafio. Você é proibido de recusar um duelo, uma aposta ou qualquer outra forma de desafio. Além disso, o devoto deve sempre buscar superar seus próprios limites, seja por meio de treinamento, magia ou itens mágicos.",
        imagens: ["./img/divindades/display/Valkaria.png", "./img/divindades/simbolos/Valkaria.png"]
    },
    {
        nome: "Wynna",
        descricao: "Depois de abandonados por Glórienn, a antiga Deusa dos Elfos, muitos membros desta raça estão oferecendo sua devoção à bondosa Wynna. Ela é a exuberante Deusa da Magia, louvada por fadas, qareen, gênios e todos aqueles que empregam poder arcano. Generosa e liberal além dos limites, Wynna concede mágica a todos que pedem, não importando se usada para o bem ou para o mal — pois a magia é mais importante que a vida e nunca deve ser negada a ninguém. Talvez por esse motivo Arton seja um mundo tão intenso em energias mágicas e tão povoado por arcanistas.",
        crencas: "reverenciam a magia arcana e seus praticantes. Promovem o ensino da magia. Usam a magia para proteger os necessitados e trazer felicidade ao mundo.",
        simbolo: "Um anel metálico.",
        energia: enumEnergia.Qualquer,
        arma: "Adaga.",
        devotos: ["Elfos, golens, qareen, sílfides, arcanistas, bardos."],
        poderes: [
            {
                nome: "Bênção do Mana",
                descricao: "Você recebe +1 PM a cada nível ímpar.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Centelha Mágica",
                descricao: "Escolha uma magia arcana ou divina de 1o círculo. Você aprende e pode lançar essa magia.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Escudo Mágico",
                descricao: "Quando lança uma magia, você recebe um bônus na Defesa igual ao círculo da magia lançada até o início do seu próximo turno.",
                tipo: TipoPoder.concedidos,
                requisitos: [],
                requisitos_descricao: []
            },
            {
                nome: "Teurgista Místico",
                descricao: "Até uma magia de cada círculo que você aprender poderá ser escolhida entre magias divinas (se você for um conjurador arcano) ou entre magias arcanas (se for um conjurador divino). Pré-requisito: habilidade de classe Magias.",
                tipo: TipoPoder.concedidos,
                requisitos: [RequisitoPoder.magia],
                requisitos_descricao: ["Habilidade de soltar magia"]
            }
        ],
        obrigacoes: "Devotos de Wynna devem praticar a bondade e a generosidade de sua deusa, jamais recusando um pedido de ajuda de alguém inocente. Além disso, devotos de Wynna são proibidos de matar seres mágicos (elfos, qareen, sílfides e outros a critério do mestre) e conjuradores arcanos.",
        imagens: ["./img/divindades/display/Wynna.png", "./img/divindades/simbolos/Wynna.png"]
    }

]

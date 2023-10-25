import { Origem } from "../Construtores/Origem";
import { TipoPoder } from "../Construtores/Poder";

/*
  | 'Acólito'
  | 'Amigo dos Animais'
  | 'Amnésico'
  | 'Aristocrata'
  | 'Artesão'
  | 'Artista'
  | 'Assistente de Laboratório'
  | 'Batedor'
  | 'Capanga'
  | 'Charlatão'
  | 'Circense'
  | 'Criminoso'
  | 'Curandeiro'
  | 'Eremita'
  | 'Escravo'
  | 'Estudioso'
  | 'Fazendeiro'
  | 'Forasteiro'
  | 'Gladiador'
  | 'Guarda'
  | 'Herdeiro'
  | 'Herói Camponês'
  | 'Marujo'
  | 'Mateiro'
  | 'Membro de Guilda'
  | 'Mercador'
  | 'Minerador'
  | 'Nômade'
  | 'Pivete'
  | 'Refugiado'
  | 'Seguidor'
  | 'Selvagem'
  | 'Soldado'
  | 'Taverneiro'
  | 'Trabalhador'
*/

  export const TabelaOrigens: Origem[] = [
    {
      nome: 'Acólito',
      descricao: 'Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.',
      itens: ['Símbolo sagrado', 'traje de sacerdote'],
      beneficios: {
        pericias: ['Cura', 'Religião', 'Vontade'],
        poderes: ['Medicina', 'Membro da Igreja', 'Vontade de Ferro']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Membro da Igreja',
        descricao: 'Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    },
    {
      nome: 'Amigo dos Animais',
      descricao: 'Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.',
      itens: ['Cão de guarda', 'Cavalo', 'Pônei'],
      beneficios: {
        pericias: ['Cavalgar', 'Adestramento'],
        poderes: ['Animal de Estimação', 'Aptidão Animal', 'Ligação Animal']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Amigo Especial',
        descricao: 'Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    },
    {
      nome: 'Amnésico',
      descricao: 'Você perdeu a maior parte da memória. Sabe apenas o próprio nome ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de um ente querido ou apenas coisas que pegou de viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Talvez viajando com eles você descubra algo sobre seu passado.',
      itens: ['Um ou mais itens (somando até T$ 500), aprovados pelo mestre, que podem ser uma pista misteriosa do seu passado.'],
      beneficios: {
        pericias: ['Em vez de dois benefícios de uma lista, você recebe uma perícia e um poder escolhidos pelo mestre'],
        poderes: ['o poder Lembranças Graduais.']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Lembranças Graduais',
        descricao: 'Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    },
    {
      nome: 'Aristocrata',
      descricao: 'Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?',
      itens: ['Joia de família no valor de T$ 300', 'traje da corte'],
      beneficios: {
        pericias: ['Diplomacia', 'Enganação', 'Nobreza'],
        poderes: ['Comandar', 'Sangue Azul']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Sangue Azul',
        descricao: 'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Artesão',
      descricao: 'Do alfaiate habilidoso em costurar as vestes da nobreza ao armeiro que forja armas letais, você foi treinado por um parente, mestre ou guilda para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas se mostraram úteis durante as aventuras.',
      itens: ['Instrumentos de ofício (qualquer)' ,"um item que você possa fabricar de até T$ 50."],
      beneficios: {
        pericias: ['Ofício', "Vontade"],
        poderes: ['Frutos do Trabalho' ,"Sortudo"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Frutos do Trabalho',
        descricao: 'No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar aventureiro, T$ 300 no heroico e T$ 500 no lenda.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Artista',
      descricao: 'Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens “mundanos”, o artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.',
      itens: ['Estojo de disfarces ou um instrumento musical a sua escolha.'],
      beneficios: {
        pericias: ['Atuação', "Enganação"],
        poderes: ['Atraente', "Dom Artístico", "Sortudo", "Torcida"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Dom artístico',
        descricao: 'Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Assistente de Laboratório',
      descricao: 'Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu da jaula... enfim, não 87 Capítulo Um era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).',
      itens: ['Instrumentos de Ofício (alquimista).'],
      beneficios: {
        pericias: ['Ofício (alquimista)' ,"Misticismo"],
        poderes: ['Esse Cheiro...' ,"Venefício", "um poder da Tormenta a sua escolha"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Esse Cheiro...',
        descricao: 'Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Batedor',
      descricao: 'Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.',
      itens: ['Barraca', 'equipamento de viagem', 'uma arma simples ou marcial de ataque à distância'],
      beneficios: {
        pericias: ['Furtividade', 'Percepção', 'Sobrevivência'],
        poderes: ['À Prova de Tudo', 'Estilo de Disparo', 'Sentidos Aguçados']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'À Prova de Tudo',
        descricao: 'Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Capanga',
      descricao: 'Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando, quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas de Ahlen, mas sabia erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa época para trás — pelo menos até que alguém precise ser “convencido” a colaborar.',
      itens: ['Tatuagem ou outro adereço de sua gangue (+1 em Intimidação)', "uma arma simples corpo a corpo"],
      beneficios: {
        pericias: ['Luta',"Intimidação"],
        poderes: ['Confissão', "um poder de combate a sua escolha"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Confissão',
        descricao: 'Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Charlatão',
      descricao: 'Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos tão facilmente quanto espadas e magias. Ou melhor.',
      itens: ['Estojo de disfarces',"joia falsificada (valor aparente de T$ 100, sem valor real)"],
      beneficios: {
        pericias: ['Enganação',"Jogatina"],
        poderes: ['Alpinista Social',"Aparência Inofensiva","Sortudo"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Alpinista Social',
        descricao: 'Você pode substituir testes de Diplomacia por testes de Enganação.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Circense',
      descricao: 'Você treinou acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender seus truques para sobreviver nas ruas. De qualquer forma, são aptidões que podem ser úteis em suas aventuras.',
      itens: ['Três bolas coloridas para malabarismo (+1 em Atuação).'],
      beneficios: {
        pericias: ['Acrobacia',"Atuação","Reflexos"],
        poderes: ['Acrobático',"Torcida","Truque de Mágica"]
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Truque de Mágica',
        descricao: 'Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Criminoso',
      descricao: 'Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!',
      itens: ['Estojo de disfarces ou gazua'],
      beneficios: {
        pericias: ['Enganação', 'Furtividade', 'Ladinagem'],
        poderes: ['Punguista', 'Venefício']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Punguista',
        descricao: 'Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre).',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Curandeiro',
      descricao: 'Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos em Salistick. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil, mesmo quando há um clérigo por perto.',
      itens: ['Bálsamo restaurador x2', 'maleta de medicamentos'],
      beneficios: {
        pericias: ['Cura', 'Vontade'],
        poderes: ['Medicina','Médico de Campo', 'Venefício']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Médico de Campo',
        descricao: 'Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Eremita',
      descricao: 'Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.',
      itens: ['Barraca', 'equipamento de viagem'],
      beneficios: {
        pericias: ['Misticismo', 'Religião', 'Sobrevivência'],
        poderes: ['Busca Interior', 'Lobo Solitário']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Busca Interior',
        descricao: 'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Escravo',
      descricao: 'De minotauros odiosos no Império de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu escravo, fez parte de um povo derrotado na guerra ou foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu algoz? Foi resgatado por aventureiros que agora se tornaram sua nova família?',
      itens: ['Algemas', 'uma ferramenta pesada (mesmas estatísticas de uma maça)'],
      beneficios: {
        pericias: ['Atletismo', 'Fortitude', 'Furtividade'],
        poderes: ['Desejo de Liberdade', 'Vitalidade']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Desejo de Liberdade',
        descricao: 'Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Estudioso',
      descricao: 'Não importa se você já nasceu apaixonado por certo assunto, testemunhou um evento incrível que atiçou sua curiosidade ou se viu forçado a estudar por imposição familiar. Longos anos de sua vida foram gastos em meio a livros e pergaminhos. Da engenharia dos anões à geopolítica do Reinado, das táticas militares puristas aos sistemas de conjuração da Academia Arcana, da anatomia dos dragões aos enigmas cósmicos da Tormenta... em Arton não faltam campos a conquistar, segredos a desvendar. Agora, como aventureiro, você tem a chance de vivenciar aquilo que aprendeu e também auxiliar o grupo com o fruto de seus estudos.',
      itens: ['Coleção de livros (+1 em Conhecimento, Guerra, Misticismo ou Nobreza, a sua escolha)'],
      beneficios: {
        pericias: ['Conhecimento', 'Guerra', 'Misticismo'],
        poderes: ['Aparência Inofensiva', 'Palpite Fundamentado']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: 'Palpite Fundamentado',
        descricao: 'Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: 'Fazendeiro',
      descricao: 'Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins? Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?',
      itens: ['Carroça','uma ferramenta agrícola (mesmas estatísticas de uma lança)','10 rações de viagem','um animal não combativo (como uma galinha, porco ou ovelha)'],
      beneficios: {
        pericias: ['Adestramento', 'Cavalgar', 'Ofício', 'Sobrevivência'],
        poderes: ['Água no Feijão', 'Ginete']
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: '',
        descricao: '',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
    {
      nome: '',
      descricao: '',
      itens: [],
      beneficios: {
        pericias: [],
        poderes: []
      },
      imagem: "./img/templates/Origem.png",
      poder: {
        nome: '',
        descricao: '',
        tipo: TipoPoder.origem,
        requisitos: []
      }
    } ,
]
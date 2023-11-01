import { Arma } from "../Construtores/Arma";
import { Item } from "../Construtores/Item";

export const TabelasArmasSimles: Arma[] = [
  // Corpo a Corpo — Leves
  {
    categoria: "Arma",
    nome: "Adaga",
    preco: 2,
    dano: "1d4",
    crit: "19/x2",
    alcance: "Curto",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Simples-Leve",
    descricao:
      "Esta faca afiada é usada por muitos habitantes adultos do Reinado, embora seja favorita de ladrões e assassinos, por ser facilmente escondida (fornece +5 em testes de Ladinagem para ocultá-la). Quando ataca com uma adaga, você pode usar sua Destreza em vez de Força nos testes de ataque. Uma adaga pode ser arremessada.",
  },
  {
    categoria: "Arma",
    nome: "Espada curta",
    preco: 10,
    dano: "1d6",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Simples-Leve",
    descricao:
      "O tipo mais comum de espada, usada por guardas ou como arma secundária de guerreiros mais capazes. Mede entre 40 e 50cm.",
  },
  {
    categoria: "Arma",
    nome: "Foice",
    preco: 4,
    dano: "1d6",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Simples-Leve",
    descricao:
      "Originalmente um instrumento agrícola, consiste de uma lâmina curva presa a um cabo de madeira. Uma arma tradicional de druidas.",
  },
  // Corpo a Corpo — Uma Mão
  {
    categoria: "Arma",
    nome: "Clava",
    preco: 1,
    dano: "1d6",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Impacto",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Um pedaço de madeira empunhado como arma, geralmente usado por bárbaros ou criaturas brutais — ou como arma improvisada, como um galho de árvore ou pedaço de mobília. Sendo fácil de conseguir, seu preço é zero.",
  },
  {
    categoria: "Arma",
    nome: "Lança",
    preco: 2,
    dano: "1d6",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Qualquer arma feita com uma haste de madeira e uma ponta afiada, natural ou metálica. Por sua facilidade de fabricação, é muito comum entre orcs, kobolds, trogloditas e outras raças menos civilizadas. Uma lança pode ser arremessada.",
  },
  {
    categoria: "Arma",
    nome: "Maça",
    preco: 12,
    dano: "1d8",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Impacto",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Bastão com um peso cheio de protuberâncias na ponta, a maça é usada por clérigos que fazem votos de não derramar sangue. De fato, um golpe de maça nem sempre derrama sangue, mas esmaga ossos.",
  },
  // Corpo a Corpo — Duas Mãos
  {
    categoria: "Arma",
    nome: "Bordão",
    preco: 0,
    dano: "1d6/1d6",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Impacto",
    espacos: 2,
    proficiencia: "Simples-Duas Mãos",
    descricao:
      "Um cajado apreciado por viajantes e camponeses por sua praticidade e fácil acesso (seu preço é zero). O bordão é uma arma dupla.",
  },
  {
    categoria: "Arma",
    nome: "Pique",
    preco: 2,
    dano: "1d8",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Simples-Duas Mãos",
    descricao:
      "Essencialmente uma lança muito longa. O pique é uma arma alongada.",
  },
  {
    categoria: "Arma",
    nome: "Tacape",
    preco: 12,
    dano: "1d10",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Impacto",
    espacos: 2,
    proficiencia: "Simples-Duas Mãos",
    descricao:
      "Versão maior e/ou com pregos de uma clava. Usado por bárbaros e humanoides bestiais, não é uma arma elegante, mas faz o serviço.",
  },
  // Ataque à Distância — Uma Mão
  {
    categoria: "Arma",
    nome: "Azagaia",
    preco: 1,
    dano: "1d6",
    crit: "20/x2",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Uma lança leve e flexível, própria para arremesso. Pode ser usada como arma corpo a corpo, mas você sofre uma penalidade de –5 no teste de ataque.",
  },
  {
    categoria: "Arma",
    nome: "Besta leve",
    preco: 35,
    dano: "1d8",
    crit: "19/x2",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Um arco montado sobre uma coronha de madeira com um gatilho, a besta leve é uma arma que dispara virotes com grande potência. Recarregar uma besta leve é uma ação de movimento.",
  },
  {
    categoria: "Arma",
    nome: "Funda",
    preco: 0,
    dano: "1d4",
    crit: "20/x2",
    alcance: "Médio",
    tipo: "Impacto",
    espacos: 1,
    proficiencia: "Simples-Uma Mão",
    descricao:
      "Uma simples tira de couro usada para arremessar pedras polidas. Na falta de munição adequada, pode disparar pedras comuns, mas o dano é reduzido em um passo. Recarregar uma funda é uma ação de movimento. Ao contrário de outras armas de disparo, você aplica sua Força a rolagens de dano com uma funda.",
  },
  // Ataque à Distância — Duas Mãos
  {
    categoria: "Arma",
    nome: "Arco curto",
    preco: 30,
    dano: "1d6",
    crit: "20/x3",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Simples-Duas Mãos",
    descricao:
      "Uma arma antiga e comum, este arco é usado primariamente como ferramenta de caça, embora seja usado como arma de guerra por milícias, bandidos e exércitos menos equipados. Pode ser usado montado.",
  },
]

export const tabelaArmas: Arma[] = [
  // Armas Simples
  // Armas Marciais
  // Corpo a Corpo — Leves
  {
    categoria: "Arma",
    nome: "Machadinha",
    preco: 6,
    dano: "1d6",
    crit: "20/x3",
    alcance: "Curto",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Marcial-Leve",
    descricao:
      "Ferramenta útil para cortar madeira e também inimigos. Uma machadinha pode ser arremessada.",
  },
  // Corpo a Corpo — Uma Mão
  {
    categoria: "Arma",
    nome: "Cimitarra",
    preco: 15,
    dano: "1d6",
    crit: "18/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Espada com a lâmina curva e muito afiada. A cimitarra é uma arma ágil.",
  },
  {
    categoria: "Arma",
    nome: "Espada longa",
    preco: 15,
    dano: "1d8",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Arma típica de soldados e guerreiros, esta espada de dois gumes tem lâmina reta medindo entre 80cm e 1m.",
  },
  {
    categoria: "Arma",
    nome: "Florete",
    preco: 20,
    dano: "1d6",
    crit: "18/x2",
    alcance: "Pessoal",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "A lâmina leve e fina desta espada torna a arma muito precisa. O florete é uma arma ágil.",
  },
  {
    categoria: "Arma",
    nome: "Machado de batalha",
    preco: 10,
    dano: "1d8",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Adaptado do machado de lenhador, este não é um instrumento para corte de árvores, mas sim uma arma capaz de causar ferimentos terríveis.",
  },
  {
    categoria: "Arma",
    nome: "Mangual",
    preco: 8,
    dano: "1d8",
    crit: "20/x2",
    alcance: "Pessoal",
    tipo: "Impacto",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Uma haste metálica ligada a uma corrente com uma esfera de aço na ponta, que pode se enroscar na arma do adversário. O mangual é uma arma versátil, fornecendo +2 em testes para desarmar.",
  },
  {
    categoria: "Arma",
    nome: "Martelo de guerra",
    preco: 12,
    dano: "1d8",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Impacto",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Outra ferramenta adaptada para combate, esta é a arma favorita de quase todos os anões que não usam machados.",
  },
  {
    categoria: "Arma",
    nome: "Picareta",
    preco: 8,
    dano: "1d6",
    crit: "20/x4",
    alcance: "Pessoal",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Usada por mineradores, esta ferramenta quebra pedras com facilidade. Imagine o que pode fazer com carne e osso!",
  },
  {
    categoria: "Arma",
    nome: "Tridente",
    preco: 15,
    dano: "1d8",
    crit: "20/x2",
    alcance: "Curto",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Marcial-Uma Mão",
    descricao:
      "Uma lança com três pontas, favorita de povos marinhos e gladiadores e própria para prender as pernas do oponente. O tridente é uma arma versátil, fornecendo +2 em testes para derrubar. Um tridente pode ser arremessado.",
  },
  // Corpo a Corpo — Duas Mãos
  {
    categoria: "Arma",
    nome: "Alabarda",
    preco: 10,
    dano: "1d10",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte/Perfuração",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Uma haste de madeira com 2m de comprimento e uma lâmina de machado na ponta. A alabarda é uma arma alongada.",
  },
  {
    categoria: "Arma",
    nome: "Alfange",
    preco: 75,
    dano: "2d4",
    crit: "18/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Uma versão maior da cimitarra, esta espada de lâmina larga e curva é bastante usada por guerreiros do Deserto da Perdição.",
  },
  {
    categoria: "Arma",
    nome: "Gadanho",
    preco: 18,
    dano: "2d4",
    crit: "20/x4",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Outra ferramenta agrícola, o gadanho é uma versão maior da foice, para uso com as duas mãos. Foi criada para ceifar cereais, mas também pode ceifar vidas.",
  },
  {
    categoria: "Arma",
    nome: "Lança montada",
    preco: 10,
    dano: "1d8",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "A lança montada é uma arma alongada. Se você estiver montado, pode usá-la com apenas uma mão. Além disso, quando usada numa investida montada, causa +2d8 pontos de dano (note que dados extras não são multiplicados em caso de acerto crítico).",
  },
  {
    categoria: "Arma",
    nome: "Machado de guerra",
    preco: 20,
    dano: "1d12",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Este imenso machado de lâmina dupla é uma arma extremamente perigosa.",
  },
  {
    categoria: "Arma",
    nome: "Marreta",
    preco: 20,
    dano: "3d4",
    crit: "20/x2",
    alcance: "Pessoal",
    tipo: "Impacto",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Uma haste de madeira resistente com uma pesada cabeça de metal ou pedra.",
  },
  {
    categoria: "Arma",
    nome: "Montante",
    preco: 50,
    dano: "2d6",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Enorme e pesada, esta espada de 1,5m de comprimento é uma arma poderosa.",
  },
  // Ataque à Distância — Duas Mãos
  {
    categoria: "Arma",
    nome: "Arco longo",
    preco: 100,
    dano: "1d8",
    crit: "20/x3",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Este arco reforçado tem a altura de uma pessoa. Ao contrário da versão curta, é primariamente uma arma de guerra. Por ter uma puxada pesada, permite que você aplique sua Força às rolagens de dano (ao contrário de outras armas de disparo). Porém, um arco longo não pode ser usado se você estiver montado.",
  },
  {
    categoria: "Arma",
    nome: "Besta pesada",
    preco: 50,
    dano: "1d12",
    crit: "19/x2",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Marcial-Duas Mãos",
    descricao:
      "Versão maior e mais potente da besta leve. Recarregar uma besta pesada é uma ação padrão.",
  },
  // Armas Exóticas
  {
    categoria: "Arma",
    nome: "Chicote",
    preco: 2,
    dano: "1d3",
    crit: "20/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Exótica-Uma Mão",
    descricao:
      "Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. O chicote é uma arma ágil e versátil, fornecendo +2 em testes para derrubar ou desarmar.",
  },
  {
    categoria: "Arma",
    nome: "Espada bastarda",
    preco: 35,
    dano: "1d10/1d12",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Exótica-Uma Mão",
    descricao:
      "Maior e mais pesada que a espada longa, esta arma é tradicionalmente usada pelos cavaleiros de Bielefeld. A espada bastarda é uma arma adaptável. É muito grande para ser usada com uma só mão sem treinamento especial; por isso é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.",
  },
  {
    categoria: "Arma",
    nome: "Katana",
    preco: 100,
    dano: "1d8/1d10",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Exótica-Uma Mão",
    descricao:
      "A espada tradicional do samurai tem lâmina levemente curva e apenas um gume. A katana é uma arma adaptável e ágil. É muito grande para ser empunhada com uma só mão sem treinamento especial; por isso, é uma arma exótica. Ela pode ser usada como uma arma marcial de duas mãos.",
  },
  {
    categoria: "Arma",
    nome: "Machado anão",
    preco: 30,
    dano: "1d10",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 1,
    proficiencia: "Exótica-Uma Mão",
    descricao:
      "A arma preferida de onze entre dez guerreiros anões. Um machado anão é muito grande para ser usado com uma só mão sem treinamento especial; por isso é uma arma exótica. Ele pode ser usado como uma arma marcial de duas mãos.",
  },
  // Corpo a Corpo — Duas Mãos
  {
    categoria: "Arma",
    nome: "Corrente de espinhos",
    preco: 25,
    dano: "2d4/2d4",
    crit: "19/x2",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Exótica-Duas Mãos",
    descricao:
      "Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. A corrente de espinhos é uma arma ágil, dupla e versátil, fornecendo +2 em testes para derrubar ou desarmar.",
  },
  {
    categoria: "Arma",
    nome: "Machado táurico",
    preco: 50,
    dano: "2d8",
    crit: "20/x3",
    alcance: "Pessoal",
    tipo: "Corte",
    espacos: 2,
    proficiencia: "Exótica-Duas Mãos",
    descricao:
      "Uma haste comprida com uma lâmina extremamente grossa na ponta, esta é a arma favorita dos minotauros. O machado táurico é uma arma poderosa.",
  },
  // Ataque à Distância — Uma Mão
  {
    categoria: "Arma",
    nome: "Rede",
    preco: 20,
    dano: "",
    crit: "",
    alcance: "Curto",
    tipo: "",
    espacos: 1,
    proficiencia: "Exótica-Uma Mão",
    descricao:
      "Esta arma pode ser usada para atacar inimigos a até 4,5m e pode se enroscar nas mãos, pernas ou armas de seus adversários. A rede é uma arma ágil, dupla e versátil, fornecendo +2 em testes para derrubar ou desarmar.",
  },
  // Armas de Fogo
  {
    categoria: "Arma",
    nome: "Pistola",
    preco: 250,
    dano: "2d6",
    crit: "19/x3",
    alcance: "Curto",
    tipo: "Perfuração",
    espacos: 1,
    proficiencia: "Armas de Fogo",
    descricao: "Arma de fogo de cano curto, a pistola é uma arma de disparo.",
  },
  {
    categoria: "Arma",
    nome: "Mosquete",
    preco: 500,
    dano: "2d8",
    crit: "19/x3",
    alcance: "Médio",
    tipo: "Perfuração",
    espacos: 2,
    proficiencia: "Armas de Fogo",
    descricao: "Arma de fogo de cano longo, o mosquete é uma arma de disparo.",
  },
];

export const tabelaItens: Item[] = [
  // Equipamento de Aventura
  {
    nome: "Água benta",
    preco: 10,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Produzida com a magia Abençoar Alimentos, esta água sagrada é um poderoso recurso na luta contra o mal. Para usar a água benta, você gasta uma ação padrão e escolhe um morto-vivo, demônio ou diabo em alcance curto (a água benta é inofensiva contra outras criaturas). O alvo sofre 2d10 pontos de dano de luz (Reflexos CD Sab reduz à metade).",
  },
  {
    nome: "Algemas",
    preco: 15,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um par de algemas para criaturas Médias. Prender uma criatura que não esteja indefesa exige empunhar a algema, agarrar o alvo (veja “Manobras de Combate”, no Capítulo 5) e vencer um novo teste de agarrar contra ela. Você pode prender os dois pulsos da pessoa (–5 em testes que exijam o uso das mãos, impede conjuração) ou um dos pulsos dela em um objeto imóvel adjacente, caso haja, para impedir que ela se mova. Escapar das algemas exige uma ação completa e um teste de Acrobacia contra CD 30 ou de Força contra CD 25 — ou ter as chaves...",
  },
  {
    nome: "Arpéu",
    preco: 5,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um gancho de aço amarrado na ponta de uma corda para se fixar em muros, janelas, parapeitos de prédios... Prender um arpéu exige um teste de Pontaria (CD 15). Subir um muro com a ajuda de uma corda fornece +5 no teste de Atletismo.",
  },
  {
    nome: "Bandoleira de poções",
    preco: 20,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um cinto de couro com bolsos que comportam pequenos frascos. Se você estiver vestindo uma bandoleira, pode sacar itens alquímicos e poções como uma ação livre.",
  },
  {
    nome: "Barraca",
    preco: 10,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Esta barraca de lona conta como um saco de dormir para duas pessoas e fornece +2 em testes de Sobrevivência para acampar.",
  },
  {
    nome: "Corda",
    preco: 1,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um rolo com 10 metros de corda de cânhamo, o mesmo tipo usado em navios. Possui diversas utilidades: pode ajudar a descer um buraco ou muro (+5 em testes de Atletismo nessas situações), amarrar pessoas etc. Dar um nó firme ou especial (por exemplo, capaz de deslizar, se desfazer com um puxão etc.) exige um teste de Destreza (CD 15). Arrebentar a corda exige 2 pontos de dano de corte ou uma ação padrão e um teste de Força (CD 20).",
  },
  {
    nome: "Espelho",
    preco: 10,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Este pequeno espelho possui diversas utilidades: observar cantos, fazer sinais de luz e, claro, garantir que você esteja apresentável.",
  },
  {
    nome: "Lampião",
    preco: 7,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um cilindro com uma alça e duas portinholas. Uma chama alimentada por óleo é acesa dentro do cilindro e uma das portinholas aberta deixa a luz sair. Acender um lampião é uma ação padrão e sua luz ilumina um raio com 15m. Carregar um lampião com óleo é uma ação padrão e ele dura uma cena.",
  },
  {
    nome: "Mochila",
    preco: 2,
    espacos: 0,
    categoria: "Equipamento de Aventura",
    descricao:
      "Uma bolsa de lona com tiras para ser carregada nas costas. Não conta como item vestido.",
  },
  {
    nome: "Mochila de aventureiro",
    preco: 50,
    espacos: -2,
    categoria: "Equipamento de Aventura",
    descricao:
      "Feita de couro resistente, esta mochila é repleta de bolsos para prender equipamento. Vestir uma mochila de aventureiro aumenta sua capacidade de carga em 2 espaços (ela própria não gasta um espaço).",
  },
  {
    nome: "Óleo",
    preco: 0.1,
    espacos: 0.5,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um frasco com óleo inflamável para lampião. Você pode atirar o frasco em uma criatura em alcance curto com uma ação padrão. Se ela sofrer dano de fogo até o fim do seu próximo turno, sofre 1d6 pontos de dano extra e fica em chamas.",
  },
  {
    nome: "Organizador de pergaminhos",
    preco: 25,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um estojo de madeira ou couro rígido. Se você estiver vestindo um organizador de pergaminhos, pode sacar pergaminhos como uma ação livre.",
  },
  {
    nome: "Pé de cabra",
    preco: 2,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Esta barra de ferro fornece +5 em testes de Força para abrir portas, janelas e baús fechados. Um pé de cabra pode ser usado como arma, com as estatísticas de uma clava.",
  },
  {
    nome: "Saco de dormir",
    preco: 1,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um colchão com uma coberta fina o bastante para ser enrolada e amarrada, é especialmente útil para aventureiros, que nunca sabem onde vão passar a noite. Dormir ao relento sem um acampamento e um saco de dormir diminui sua recuperação de PV e PM (veja a página 106).",
  },
  {
    nome: "Símbolo sagrado",
    preco: 5,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um medalhão de madeira ou metal com o símbolo de uma divindade. Se você estiver vestindo (normalmente com uma corrente ao redor do pescoço) ou empunhando o símbolo sagrado de um deus do qual é devoto, recebe +1 em testes de resistência.",
  },
  {
    nome: "Tocha",
    preco: 0.1,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Um bastão de madeira com algum combustível na ponta (geralmente trapos embebidos em parafina). Acender uma tocha é uma ação padrão. Ela ilumina um raio de 9m e dura uma cena. Pode ser usada como uma arma simples leve (dano 1d4 de impacto mais 1 de fogo, crítico x2).",
  },
  {
    nome: "Vara de madeira",
    preco: 0.2,
    espacos: 1,
    categoria: "Equipamento de Aventura",
    descricao:
      "Uma haste com 3m de comprimento. Útil para alcançar pontos distantes, mas frágil demais para servir como arma.",
  },
  // Ferramentas
  {
    nome: "Alaúde élfico",
    preco: 300,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Feito com madeira de alta qualidade e manufatura delicada, este alaúde gera notas vívidas e emocionantes. Enquanto empunha este item, você pode usar a habilidade Inspiração como uma ação de movimento. Conta como um instrumento musical.",
  },
  {
    nome: "Coleção de livros",
    preco: 75,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Uma pequena coleção de tomos e tratados sobre um assunto. Fornece +1 em Conhecimento, Guerra, Misticismo, Nobreza ou Religião (definido quando o item é comprado ou fabricado).",
  },
  {
    nome: "Equipamento de viagem",
    preco: 10,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Um saco de lona contendo instrumentos úteis para sobreviver nos ermos, como pederneira (pedra para fazer fogo), panelas e talheres para cozinhar, anzól e linha para pescar e uma pequena pá. Um personagem sem este item sofre –5 em testes de Sobrevivência para fazer um acampamento. Não inclui saco de dormir ou barraca.",
  },
  {
    nome: "Estojo de disfarces",
    preco: 50,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Um conjunto de cosméticos, tintas para cabelo e algumas próteses simples (como bigodes e narizes falsos). Um personagem sem este item sofre –5 em testes de Enganação para disfarce.",
  },
  {
    nome: "Flauta mística",
    preco: 150,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Um instrumento delicado, repleto de runas e pequenas gemas místicas. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1. Conta como um instrumento musical.",
  },
  {
    nome: "Gazua",
    preco: 5,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Uma barra fina de ferro, com a ponta torta ou em forma de gancho. Um personagem sem este item sofre –5 em testes de Ladinagem para abrir fechaduras.",
  },
  {
    nome: "Instrumentos de Ofício",
    preco: 30,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Existe uma versão deste item para cada perícia de Ofício. Por exemplo, martelo, pregos e serrote para Ofício (carpinteiro), pergaminhos em branco, tinta e pena para Ofício (escriba) e assim por diante. Um personagem sem os instrumentos de seu Ofício sofre –5 nessa perícia.",
  },
  {
    nome: "Instrumento musical",
    preco: 35,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Um instrumento típico, como um bandolim, flauta ou lira. Veja o quadro acima para as regras deste item.",
  },
  {
    nome: "Luneta",
    preco: 100,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Este instrumento valioso consiste de um cilindro metálico com duas lentes. Fornece +5 em testes de Percepção para observar coisas em alcance longo ou além.",
  },
  {
    nome: "Maleta de medicamentos",
    preco: 50,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Caixa de madeira com ervas, unguentos, bandagens e outros materiais úteis. Um personagem sem este item sofre –5 em Cura.",
  },
  {
    nome: "Sela",
    preco: 20,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Uma peça de couro e pelego colocada sobre o lombo da montaria, sobre a qual o cavaleiro se senta. Inclui arreios para conduzir o animal. Um ersonagem montado em uma montaria  sem sela sofre –5 em testes de Cavalgar. Usada no animal, a sela não ocupa espaço de carga do personagem.",
  },
  {
    nome: "Tambor das profundezas",
    preco: 80,
    espacos: 1,
    categoria: "Ferramentas",
    descricao:
      "Um tambor de madeira com pele de animal esticada. Um bardo que empunhe este item aumenta a CD para resistir às magias lançadas por ele em +1. Conta como um instrumento musical.",
  },
  //Vestuario
  {
    nome: "Andrajos de aldeão",
    preco: 1,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Roupas típicas de camponês. Consiste de camisa larga e calças soltas ou blusa e saia e não inclui botas — os mais pobres andam descalços. Fornece +2 em testes de Investigação para interrogar (ninguém se importa com o que um aldeão escuta) e, se você possuir o poder Aparência Inofensiva, a CD para resistir a ele aumenta em +2. Porém, impõe –2 em perícias baseadas em Carisma contra pessoas que se importam com classe social.",
  },
  {
    nome: "Bandana",
    preco: 5,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Um lenço tipicamente usado por bandidos e piratas. Fornece +1 em Intimidação.",
  },
  {
    nome: "Botas reforçadas",
    preco: 20,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Grossas e resistentes, estas botas de cano alto protegem contra perigos do terreno. Aumentam seu deslocamento em +1,5m se ele for reduzido por terreno difícil (após a redução).",
  },
  {
    nome: "Camisa bufante",
    preco: 25,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Blusa colorida, com mangas e golas longas e encrespadas. Fornece +1 em Atuação.",
  },
  {
    nome: "Capa esvoaçante",
    preco: 25,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Favorita entre heróis ousados, esta capa de seda produz movimentos amplos e chamativos, que fornecem +1 em Enganação.",
  },
  {
    nome: "Capa pesada",
    preco: 15,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Uma capa de couro grossa e resistente. Protege e aquece o corpo, fornecendo +1 em Fortitude.",
  },
  {
    nome: "Casaco longo",
    preco: 20,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Feito de peles ou couro grosso forrado com lã, e impermeabilizado com óleo, este casaco é quente e pesado. Fornece +5 em testes de Fortitude para resistir a efeitos de frio, mas impõe penalidade de armadura de –2.",
  },
  {
    nome: "Chapéu arcano",
    preco: 50,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Com pinturas e bordados de símbolos místicos, este chapéu pontudo ajuda a canalizar energias mágicas. Ele fornece +1 ponto de mana, mas apenas se você possuir a habilidade de classe Caminho do Arcanista.",
  },
  {
    nome: "Enfeite de elmo",
    preco: 15,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Um adorno chamativo, como crina de cavalo, plumas, asas ou um totem de animal. Fornece resistência a medo +2.",
  },
  {
    nome: "Farrapos de ermitão",
    preco: 1,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Trapos “adornados” com plantas e raízes. Uma pessoa vestindo farrapos de ermitão não parece muito civilizada, e sofre –2 em Diplomacia e em testes de Investigação para interrogar. Entretanto, recebe +2 em Adestramento.",
  },
  {
    nome: "Gorro de ervas",
    preco: 75,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Formado por duas camadas de tecido, este chapéu é preenchido com ervas preparadas para auxiliar a concentração do usuário. Fornece +1 em Vontade.",
  },
  {
    nome: "Luva de pelica",
    preco: 5,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Estas luvas delicadas preservam o tato e impedem que o suor deixe os dedos escorregadios. Fornecem +1 em Ladinagem.",
  },
  {
    nome: "Manopla",
    preco: 10,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Luva metálica que permite socos mais perigosos — o dano de seus ataques desarmados torna-se letal. Uma manopla conta como uma arma para receber melhorias e encantos para usá-los em seus ataques desarmados.",
  },
  {
    nome: "Manto camuflado",
    preco: 12,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Um manto camuflado é feito para um tipo de terreno específico (veja a habilidade Explorador, na página 51). Por exemplo, um manto camuflado para floresta pode ser verde e marrom e coberto de folhas, enquanto um manto urbano pode ser cinza ou negro. Usar um manto camuflado no terreno correto fornece +2 em Furtividade.",
  },
  {
    nome: "Manto eclesiástico",
    preco: 20,
    espacos: 1,
    categoria: "Vestuario",
    descricao: "Um manto típico de igrejas e templos. Fornece +1 em Religião.",
  },
  {
    nome: "Robe Místico",
    preco: 50,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Um manto longo, adornado com temas arcanos. Fornece +1 em Misticismo.",
  },
  {
    nome: "Sapatos de Camurça",
    preco: 8,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Leves e resistentes, aprimoram o equilíbrio e a firmeza dos pés, fornecendo +1 em Acrobacia.",
  },
  {
    nome: "Tabardo",
    preco: 10,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Uma peça de tecido usada como um colete, cobrindo o peito e as costas. Geralmente ostenta a heráldica de um reino, igreja, casa nobre ou ordem de cavaleiros. Fornece +1 em Diplomacia.",
  },
  {
    nome: "Traje da corte",
    preco: 100,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Roupas de luxo, feitas sob medida e adequadas à nobreza e realeza. Inclui algumas joias, como anéis e colares. Em certos ambientes (um baile, um salão de palácio), um personagem que não esteja vestindo este item sofre –5 em perícias baseadas em Carisma.",
  },
  {
    nome: "Traje de viajante",
    preco: 10,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Inclui botas, calças ou saias, cinto, camisa de linho e capa com capuz. A roupa padrão de aventureiros.",
  },
  {
    nome: "Veste de seda",
    preco: 25,
    espacos: 1,
    categoria: "Vestuario",
    descricao:
      "Esta roupa leve e elegante deixa seus movimentos os mais livres possíveis. Fornece +1 em Reflexos.",
  },
  // Itens Esotéricos
];

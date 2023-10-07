import { Raca } from "./Raca";

export const TabelaRacas: Raca[] = [
  {
    nome: "Humano",
    descricao:
      "Os humanos em Arton são a maioria e são vistos como os escolhidos dos deuses, governando o mundo. Eles são diversos, adaptáveis e estão presentes em todo o continente, desde os vales férteis do Reinado até o árido Deserto da Perdição. São conhecidos por sua ambição e espírito explorador.",
    atributos: ["+1 em três atributos diferentes"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Versátil",
        descricao:
          " Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Anão",
    descricao:
      "Os anões são um povo resiliente e trabalhador, conhecido por suas habilidades em mineração, metalurgia e devoção à família e tradição. Valorizam muito suas longas e orgulhosas barbas, além de apreciarem forja e cerveja.",
    atributos: ["Constituição +2", "Sabedoria +1", "Destreza -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Conhecimento das Rochas.",
        descricao:
          "Você recebe visão no escuro e +2 em testes de Percepção e Sobrevivência realizados no subterrâneo.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Devagar e Sempre.",
        descricao:
          "Seu deslocamento é 6m (em vez de 9m). Porém, seu deslocamento não é reduzido por uso de armadura ou excesso de carga.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Duro como Pedra.",
        descricao:
          "Você recebe +3 pontos de vida no 1º nível e +1 por nível seguinte.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Tradição de Heredrimm.",
        descricao:
          "Você é perito nas armas tradicionais anãs, seja por ter treinado com elas, seja por usá-las como ferramentas de ofício. Para você, todos os machados, martelos, marretas e picaretas são armas simples. Você recebe +2 em ataques com essas armas.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Dahllan",
    descricao:
      "Parte humanas, parte fadas, as dahllan são uma raça de mulheres com a seiva de árvores correndo nas veias. Falam com os animais, controlam as plantas mas também são ferozes em batalha, retorcendo madeira para formar armaduras.",
    atributos: ["Sabedoria +2", "Destreza +1", "Inteligência -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Amiga das Plantas.",
        descricao:
          "Você pode lançar a magia Controlar Plantas (atributo-chave Sabedoria). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Armadura de Allihanna.",
        descricao:
          "Você pode gastar uma ação de movimento e 1 PM para transformar sua pele em casca de árvore, recebendo +2 na Defesa até o fim da cena.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Empatia Selvagem.",
        descricao:
          "Você pode se comunicar com animais por meio de linguagem corporal e vocalizações. Você pode usar Adestramento para mudar atitude e persuasão com animais (veja Diplomacia, na página 118). Caso receba esta habilidade novamente, recebe +2 em Adestramento.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Elfo",
    descricao:
      "Os elfos são habilidosos em magia e combate, possuindo beleza e elegância. Tinham potencial para dominar Arton, mas a arrogância herdada de sua deusa impediu isso. Com a queda de Glórienn, os elfos se tornaram independentes, vendo a falta de uma divindade como liberdade, embora seja vista de maneiras distintas por seu povo.",
    atributos: ["Inteligência +2", "Destreza +1", "Constituição -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Graça de Glórienn.",
        descricao: "Seu deslocamento é 12m (em vez de 9m).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Sangue Mágico.",
        descricao: "Você recebe +1 ponto de mana por nível.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Sentidos Élficos.",
        descricao:
          "Você recebe visão na penumbra e +2 em Misticismo e Percepção.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Goblin",
    descricao:
      "Os goblins encontraram seu espaço no Reinado, presentes em grandes cidades, vivendo em diferentes condições e assumindo carreiras improváveis como espiões, aeronautas e engenheiros. Sua falta de vergonha, orgulho e bom senso os torna capazes de soluções únicas, superando situações onde anões e elfos falham.",
    atributos: ["Destreza +2", "Inteligência +1", "Carisma -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Engenhoso.",
        descricao:
          "Você não sofre penalidades em testes de perícia por não usar ferramentas. Se usar a ferramenta necessária, recebe +2 no teste de perícia.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Espelunqueiro.",
        descricao:
          "Você recebe visão no escuro e deslocamento de escalada igual ao seu deslocamento terrestre.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Peste Esguia.",
        descricao:
          "Seu tamanho é Pequeno (veja a página 106), mas seu deslocamento se mantém 9m. Apesar de pequenos, goblins são rápidos.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Rato das Ruas.",
        descricao:
          "Você recebe +2 em Fortitude e sua recuperação de PV e PM nunca é inferior ao seu nível.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Lefou",
    descricao:
      "Os lefou são meio-demônios grotescos, nascidos em famílias de diferentes raças devido à influência maligna da Tormenta. Geralmente são sacrificados ou expulsos, mas alguns que escapam manifestam poderes aberrantes e escolhem entre seguir o caminho do mal ou lutar contra ele.",
    atributos: [
      "+1 em Três Atributos Diferentes (exceto Carisma)",
      "Carisma -1",
    ],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Cria da Tormenta.",
        descricao:
          "Você é uma criatura do tipo monstro e recebe +5 em testes de resistência contra efeitos causados por lefeu e pela Tormenta.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Deformidade.",
        descricao:
          "Todo lefou possui defeitos físicos que, embora desagradáveis, conferem certas vantagens. Você recebe +2 em duas perícias a sua escolha. Cada um desses bônus conta como um poder da Tormenta (exceto para perda de Crisma). Você pode trocar um desses bônus por um poder da Tormenta a sua escolha (ele também não conta para perda de Carisma).",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Minotauro",
    descricao: "Povo guerreiro, orgulhoso e poderoso, criadores de uma civilização avançada, com a missão sagrada de proteger e governar os fracos ou assim se enxergavam. Em seus tempos áureos, tomaram grande parte de Arton. Hoje, após a morte de sua divindade e a decadência de seu Império, os minotauros lutam para recuperar a glória perdida ou encontrar um novo papel no mundo.",
    atributos: ["Força +2", "Constituição +1", "Sabedoria -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Chifres.",
        descricao:
          "Você possui uma arma natural de chifres (dano 1d6, crítico x2, perfuração). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com os chifres.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Couro Rígido.",
        descricao:
          "Sua pele é dura como a de um touro. Você recebe +1 na Defesa.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Faro.",
        descricao:
          "Você tem olfato apurado. Contra inimigos em alcance curto que não possa ver, você não fica desprevenido e camuflagem total lhe causa apenas 20% de chance de falha.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Medo de Altura.",
        descricao:
          "Se estiver adjacente a uma queda de 3m ou mais de altura (como um buraco ou penhasco), você fica abalado.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Qareen",
    descricao: "Descendentes de poderosos gênios, os qareen são otimistas, generosos e prestativos, sempre ansiosos por ajudar. Consideram-se abençoados pela Deusa da Magia, exibindo como evidência a marca de Wynna em seus corpos. Sua magia é mais poderosa quando usada para realizar desejos de outros.",
    atributos: ["Carisma +2", "Inteligência +1", "Sabedoria –1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Desejos.",
        descricao:
          "Se lançar uma magia que alguém tenha pedido desde seu último turno, o custo da magia diminui em –1 PM. Fazer um desejo ao qareen é uma ação livre.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Resistência Elemental.",
        descricao:
          "Conforme sua ascendência, você recebe redução 10 a um tipo de dano. Escolha uma: frio (qareen da água), eletricidade (do ar), fogo (do fogo), ácido (da terra), luz (da luz) ou trevas (qareen das trevas).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Tatuagem Mística.",
        descricao:
          "Você pode lançar uma magia de 1º círculo a sua escolha (atributo-chave Carisma). Caso aprenda novamente essa magia, seu custo diminui em –1 PM.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Golem",
    descricao: "Os seres mencionados são construtos criados por mortais, animados por espíritos elementais aprisionados em corpos de pedra e metal através de magia. Alguns se limitam a papéis de trabalhadores e soldados, mas outros mostram inteligência e personalidade, podendo conjurar magias. A dúvida persiste se possuem alma e se encontrarão os deuses após a morte.",
    atributos: ["Força +2", "Constituição +1", "Carisma –1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Chassi.",
        descricao: "Seu corpo artificial é resistente, mas rígido. Seu deslocamento é 6m, mas não é reduzido por uso de armadura ou excesso de carga. Você recebe +2 na Defesa, mas possui penalidade de armadura –2. Você leva um dia para vestir ou remover uma armadura (pois precisa acoplar as peças dela a seu chassi). Por ser acoplada, sua armadura não conta no limite de itens que você pode usar (mas você continua só podendo usar uma armadura).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Criatura Artificial.",
        descricao: "Você é uma criatura do tipo construto. Recebe visão no escuro e imunidade a efeitos de cansaço, metabólicos e de veneno. Além disso, não precisa respirar, alimentar-se ou dormir, mas não se beneficia de cura mundana e de itens da categoria alimentação. Você precisa ficar inerte por oito horas por dia para recarregar sua fonte de energia. Se fizer isso, recupera PV e PM por descanso em condições normais (golens não são afetados por condições boas ou ruins de descanso). Por fim, a perícia Cura não funciona em você, mas Ofício (artesão) pode ser usada no lugar dela.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Propósito de Criação.",
        descricao: "Você foi construído “pronto” para um propósito específico e não teve uma infância. Você não tem direito a escolher uma origem, mas recebe um poder geral a sua escolha.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Fonte Elemental.",
        descricao: "Você possui um espírito elemental preso em seu corpo. Escolha entre água (frio), ar (eletricidade), fogo (fogo) e terra (ácido). Você é imune a dano desse tipo. Se fosse sofrer dano mágico desse tipo, em vez disso cura PV em quantidade igual à metade do dano. Por exemplo, se um golem com espírito elemental do fogo é atingido por uma Bola de Fogo que causa 30 pontos de dano, em vez de sofrer esse dano, ele recupera 15 PV.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Hynne",
    descricao: "Os hynne, também chamados de halflings ou 'pequeninos', preferem conforto e boa comida. Quando aventuram-se, usam charme e agilidade para enganar inimigos. Agora vivem nas Repúblicas Livres de Sambúrdia, dedicando-se à agricultura e ao comércio, muitos alcançando posições de destaque.",
    atributos: ["Destreza +2", "Carisma +1", "Força –1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Arremessador.",
        descricao: "Quando faz um ataque à distância com uma funda ou uma arma de arremesso, seu dano aumenta em um passo.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Pequeno e Rechonchudo.",
        descricao: "Seu tamanho é Pequeno (veja a página 106) e seu deslocamento é 6m. Você recebe +2 em Enganação e pode usar Destreza como atributo-chave de Atletismo (em vez de Força).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Sorte Salvadora.",
        descricao: "Quando faz um teste de resistência, você pode gastar 1 PM para rolar este teste novamente.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Kliren",
    descricao: "Os kliren são uma mistura de humanos e gnomos, combinando inteligência e curiosidade. São engenhosos e criativos com dispositivos mecânicos, mas sua impulsividade pode impedir seu pleno potencial. A existência dos gnomos em Arton está relacionada ao envolvimento criminoso de seu deus Tilliann na criação da Tormenta.",
    atributos: ["Inteligência +2", "Carisma +1", "Força –1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Híbrido.",
        descricao: "Sua natureza multifacetada fez com que você aprendesse conhecimentos variados. Você se torna treinado em uma perícia a sua escolha (não precisa ser da sua classe).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Engenhosidade.",
        descricao: "Quando faz um teste de perícia, você pode gastar 2 PM para somar sua Inteligência no teste. Você não pode usar esta habilidade em testes de ataque. Caso receba esta habilidade novamente, seu custo é reduzido em –1 PM.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Ossos Frágeis.",
        descricao: "Você sofre 1 ponto de dano adicional por dado de dano de impacto. Por exemplo, se for atingido por uma clava (dano 1d6), sofre 1d6+1 pontos de dano. Se cair de 3m de altura (dano 2d6), sofre 2d6+2 pontos de dano.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Vanguardista.",
        descricao: "Você recebe proficiência em armas de fogo e +2 em Ofício (um qualquer, a sua escolha).",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Medusa",
    descricao: "Desc.",
    atributos: ["Destreza +2", "Carisma +1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "Cria de Megalokk.",
        descricao: "Você é uma criatura do tipo monstro e recebe visão no escuro.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Natureza Venenosa.",
        descricao: "Você recebe resistência a veneno +5 e pode gastar uma ação de movimento e 1 PM para envenenar uma arma que esteja usando. A arma causa perda de 1d12 pontos de vida. O veneno dura até você acertar um ataque ou até o fim da cena (o que acontecer primeiro).",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "Olhar Atordoante.",
        descricao: "Você pode gastar uma ação de movimento e 1 PM para forçar uma criatura em alcance curto a fazer um teste de Fortitude (CD Car). Se a criatura falhar, fica atordoada por uma rodada (apenas uma vez por cena).",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Osteon",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Sereia/Tritão",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Sílfide",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Suraggel (Aggelus)",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Suraggel (Sulfure)",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
  {
    nome: "Trog",
    descricao: "Desc.",
    atributos: ["Atributo1 +2", "Atributo2 +1", "Atributo3 -1"],
    imagem: "./img/personagem.png",
    poderes: [
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
      {
        nome: "NomePoder.",
        descricao: "DescPoder.",
        fonte: "Raça",
        pre_requisito: "",
      },
    ],
  },
];

/*

*/

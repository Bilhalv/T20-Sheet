import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";
import { Classe } from "../Construtores/Classe";
import { TabelaPericiasEnum } from "../Tabelas/Pericias";
import { RequiredIndicator } from "@chakra-ui/react";

export const poderesCavaleiro: Poder[] = [
  {
    nome: "Armadura da Honra",
    descricao: "No início de cada cena, você recebe uma quantidade de pontos de vida temporários igual a seu nível + seu Carisma. Os PV temporários duram até o final da cena.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Aumento de Atributo",
    descricao: "Você recebe +1 em um atributo. Você pode escolher este poder várias vezes, mas apenas uma vez por patamar para um mesmo atributo.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Desprezar os Covardes",
    descricao: "Você recebe redução de dano 5 se estiver caído, desprevenido ou flanqueado.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Escudeiro",
    descricao: "Você recebe os serviços de um escudeiro, um parceiro especial que cuida de seu equipamento. Suas armas fornecem +1 em rolagens de dano e sua armadura concede +1 na Defesa. Além disso, você pode pagar 1 PM para receber ajuda do escudeiro em combate. Você recebe uma ação de movimento que pode usar para se levantar, sacar um item ou trazer sua montaria. O escudeiro não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com um mês de trabalho.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Etiqueta",
    descricao: "Você recebe +2 Diplomacia ou Nobreza e pode gastar 1 PM para rolar novamente um teste recém realizado de uma dessas perícias.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Investida Destruidora",
    descricao: "Quando faz a ação investida, você pode gastar 2 PM. Se fizer isso, causa +2d8 pontos de dano. Você deve usar esta habilidade antes de rolar o ataque.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Montaria Corajosa",
    descricao: "Sua montaria concede +1d6 em rolagens de dano corpo a corpo (cumulativo com qualquer bônus que ela já forneça como parceiro).",
    tipo: TipoPoder.classe,
    requisitos: [RequisitoPoder.pericia],
  },
  {
    nome: "Pajem",
    descricao: "Você recebe os serviços de um pajem, um parceiro que o auxilia em pequenos afazeres. Você recebe +2 em Diplomacia, por estar sempre aprumado, e sua condição de descanso é uma categoria acima do padrão pela situação. O pajem pode executar pequenas tarefas, como entregar mensagens e comprar itens, e não conta em seu limite de parceiros. Caso ele morra, você pode treinar outro com uma semana de trabalho.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Aríete Implacável",
    descricao: "Ao assumir esta postura, você aumenta o bônus de ataque em investidas em +2. Para cada 2 PM adicionais que gastar quando assumir a postura, aumenta o bônus de ataque em +1. Além disso, se fizer uma investida contra um construto ou objeto, causa +2d8 de dano. Você precisa se deslocar todos os turnos para manter esta postura ativa.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Castigo de Ferro",
    descricao: "Sempre que um aliado adjacente sofrer um ataque corpo a corpo, você pode gastar 1 PM para fazer um ataque na criatura que o atacou.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Foco de Batalha",
    descricao: "Sempre que um inimigo atacá-lo, você recebe 1 PM temporário (cumulativos). Você pode ganhar um máximo de PM temporários por cena igual ao seu nível. Esses pontos temporários desaparecem no final da cena.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Muralha Intransponível",
    descricao: "Para assumir esta postura você precisa estar empunhando um escudo. Você recebe +1 na Defesa e em Reflexos. Além disso, quando sofre um efeito que permite um teste de Reflexos para reduzir o dano à metade, não sofre nenhum dano se passar. Para cada 2 PM adicionais que gastar quando assumir a postura, aumente esse bônus em +1. Por fim, enquanto mantiver esta postura, seu deslocamento é reduzido para 3m.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Provocação Petulante",
    descricao: "Enquanto esta postura estiver ativa, todos os inimigos que iniciarem seus turnos em alcance curto devem fazer um teste de Vontade (CD Car). Se falharem, qualquer ação hostil que realizarem deve ter você como alvo (mas suas outras ações não têm esta restrição). Ações hostis incluem ataques e outras ações que causem dano e/ou condições negativas. Mental.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Postura de Combate: Torre Inabalável",
    descricao: "Você assume uma postura defensiva que o torna imune a qualquer tentativa de tirá-lo do lugar, de forma mundana ou mágica. Enquanto mantiver a postura, você não pode se deslocar, mas soma sua Constituição na Defesa e pode substituir testes de Reflexos e Vontade por testes de Fortitude.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Solidez",
    descricao: "Se estiver usando um escudo, você soma o bônus na Defesa recebido pelo escudo em testes de resistência.",
    tipo: TipoPoder.classe,
    requisitos: [],
  },
  {
    nome: "Torre Armada",
    descricao: "Quando um inimigo erra um ataque contra você, você pode gastar 1 PM. Se fizer isso, recebe +5 em rolagens de dano contra esse inimigo até o fim de seu próximo turno.",
    tipo: TipoPoder.classe,
    requisitos: [],
  }
  
];

export const cavaleiro: Classe = {
  nome: "Cavaleiro",
  descricao:
    "Um combatente honrado, especializado em suportar dano e proteger os outros.",
  vidapnivel: 5,
  vidainicial: 20,
  manapnivel: 3,
  pericias: [TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Luta],
  periciasescolha: [
    TabelaPericiasEnum.Adestramento,
    TabelaPericiasEnum.Cavalgar,
    TabelaPericiasEnum.Diplomacia,
    TabelaPericiasEnum.Guerra,
    TabelaPericiasEnum.Iniciativa,
    TabelaPericiasEnum.Intimidação,
    TabelaPericiasEnum.Nobreza,
    TabelaPericiasEnum.Percepção,
    TabelaPericiasEnum.Vontade
  ],
  periciasescolhanum: 2,
  proficiencias: ['Armas marciais', 'armaduras pesadas', 'escudos'],
  habilidades: [
    {
      nome: "Código de Honra",
      descricao: "Cavaleiros distinguem-se de meros combatentes por seguir um código de conduta. Fazem isto para mostrar que estão acima dos mercenários e bandoleiros que infestam os campos de batalha. Você não pode atacar um oponente pelas costas (em termos de jogo, não pode se beneficiar do bônus de flanquear), caído, desprevenido ou incapaz de lutar. Se violar o código, você perde todos os seus PM e só pode recuperá-los a partir do próximo dia. Rebaixar-se ao nível dos covardes e desesperados abala a autoconfiança que eleva o cavaleiro. "
    },
    {
      nome: "Baluarte",
      descricao: "Quando sofre um ataque ou faz um teste de resistência, você pode gastar 1 PM para receber +2 na Defesa e nos testes de resistência até o início do seu próximo turno. A cada quatro níveis, pode gastar +1 PM para aumentar o bônus em +2. A partir do 7o nível, quando usa esta habilidade, você pode gastar 2 PM adicionais para fornecer o mesmo bônus a todos os aliados adjacentes. Por exemplo, pode gastar 4 PM ao todo para receber +4 na Defesa e nos testes de resistência e fornecer este mesmo bônus aos outros. A partir do 15o nível, você pode gastar 5 PM adicionais para fornecer o mesmo bônus a todos os aliados em alcance curto."
    },
    {
      nome: "Duelo",
      descricao: " A partir do 2o nível, você pode gastar 2 PM para escolher um oponente em alcance curto e receber +2 em testes de ataque e rolagens de dano contra ele até o fim da cena. Se atacar outro oponente, o bônus termina. A cada cinco níveis, você pode gastar +1 PM para aumentar o bônus em +1."
    },
    {
      nome: "Caminho do Cavaleiro.",
      descricao: "No 5o nível, escolha entre Bastião ou Montaria. • Bastião. Se estiver usando armadura pesada, você recebe redução de dano 5 (cumulativa com a RD fornecida por Especialização em Armadura). • Montaria. Você recebe um cavalo de guerra com o qual possui +5 em testes de Adestramento e Cavalgar. Ele fornece os benefícios de um parceiro veterano de seu tipo. No 11o nível, passa a fornecer os benefícios de um parceiro mestre. De acordo com o mestre, você pode receber outro tipo de montaria. Veja a lista de montarias na página 261. Caso a montaria morra, você pode comprar outra pelo preço normal e treiná-la para receber os benefícios desta habilidade com uma semana de trabalho."
    },
  ],
  poderesunicos: poderesCavaleiro,
  conjurador: false,
  imagem: "./img/classes/cavaleiro.png",
};

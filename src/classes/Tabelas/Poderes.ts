import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";

export const TabelaPoderes: Poder[] = [
    {
        nome: "Acuidade com Arma",
        descricao: "Quando usa uma arma corpo a corpo leve ou uma arma de arremesso, você pode usar sua Destreza em vez de Força nos testes de ataque e rolagens de dano.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
        ],
        requisitos_descricao: ["Destreza 1"]
    },
    {
        nome: "Arma Secundária grande",
        descricao: "Você pode empunhar duas armas de uma mão com o poder Estilo de Duas Armas.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder,
        ],
        requisitos_descricao: ["Estilo de Duas Armas"]
    },
    {
        nome: "Arremesso Potente",
        descricao: "Quando usa uma arma de arremesso, você pode usar sua Força em vez de Destreza nos testes de ataque. Se você possuir o poder Ataque Poderoso, poderá usá-lo com armas de arremesso.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo, RequisitoPoder.poder
        ],
        requisitos_descricao: ["Força 1", "Estilo de Arremesso"]
    },
    {
        nome: "Arremesso Múltiplo",
        descricao: "Uma vez por rodada, quando faz um ataque com uma arma de arremesso, você pode gastar 1 PM para fazer um ataque adicional contra o mesmo alvo, arremessando outra arma de arremesso.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo, RequisitoPoder.poder
        ],
        requisitos_descricao: ["Destreza 1", "Estilo de Arremesso"]
    },
    {
        nome: "Ataque com Escudo",
        descricao: "Uma vez por rodada, se estiver empunhando um escudo e fizer a ação agredir, você pode gastar 1 PM para fazer um ataque corpo a corpo extra com o escudo. Este ataque não faz você perder o bônus do escudo na Defesa.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder,
        ],
        requisitos_descricao: ["Estilo de Arma e Escudo"]
    },
    {
        nome: "Ataque Pesado",
        descricao: "Quando faz um ataque corpo a corpo com uma arma de duas mãos, você pode pagar 1 PM. Se fizer isso e acertar o ataque, além do dano você faz uma manobra derrubar ou empurrar contra o alvo como uma ação livre (use o resultado do ataque como o teste de manobra).",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder,
        ],
        requisitos_descricao: ["Estilo de Duas Mãos"]
    },
    {
        nome: "Ataque Poderoso",
        descricao: "Sempre que faz um ataque corpo a corpo, você pode sofrer -2 no teste de ataque para receber +5 na rolagem de dano.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
        ],
        requisitos_descricao: ["Força 1"]
    },
    {
        nome: "Ataque Preciso",
        descricao: "Se estiver empunhando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na margem de ameaça e +1 no multiplicador de crítico.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
        ],
        requisitos_descricao: ["Estilo de Uma Arma"]
    },
    {
        nome: "Bloqueio com Escudo",
        descricao: "Quando sofre dano, você pode gastar 1 PM para receber redução de dano igual ao bônus na Defesa que seu escudo fornece contra este dano. Você só pode usar este poder se estiver usando um escudo.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Estilo de Arma e Escudo"]
    },
    {
        nome: "Carga de Cavalaria",
        descricao: "Quando faz uma investida montada, você causa +2d8 pontos de dano. Além disso, pode continuar se movendo depois do ataque. Você deve se mover em linha reta e seu movimento máximo ainda é o dobro do seu deslocamento.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Ginete"]
    },
    {
        nome: "Combate Defensivo",
        descricao: "Quando usa a ação agredir, você pode usar este poder. Se fizer isso, até seu próximo turno, sofre -2 em todos os testes de ataque, mas recebe +5 na Defesa.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo
        ],
        requisitos_descricao: ["Inteligência 1"]
    },
    {
        nome: "Derrubar Aprimorado",
        descricao: "Você recebe +2 em testes de ataque para derrubar. Quando derruba uma criatura com essa manobra, pode gastar 1 PM para fazer um ataque extra contra ela.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Combate Defensivo"]
    },
    {
        nome: "Desarmar Aprimorado",
        descricao: "Você recebe +2 em testes de ataque para desarmar. Quando desarma uma criatura, pode gastar 1 PM para arremessar a arma dela para longe. Para definir onde a arma cai, role 1d8 para a direção e 1d6 para a distância.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Combate Defensivo"]
    },
    {
        nome: "Disparo Preciso",
        descricao: "Você pode fazer ataques à distância contra oponentes envolvidos em combate corpo a corpo sem sofrer a penalidade de -5 no teste de ataque.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Estilo de Disparo ou Estilo de Arreresso"]
    },
    {
        nome: "Disparo Rápido",
        descricao: "Se estiver empunhando uma arma de disparo que possa recarregar como ação livre e gastar uma ação completa para agredir, pode fazer um ataque adicional com ela. Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
            RequisitoPoder.poder
        ],
        requisitos_descricao: ["Destreza 1", "Estilo de Disparo"]
    },
    {
        nome: "Empunhadura Poderosa",
        descricao: "Ao usar uma arma feita para uma categoria de tamanho maior que a sua, a penalidade que você sofre nos testes de ataque diminui para -2 (normalmente, usar uma arma de uma categoria de tamanho maior impõe -5 nos testes de ataque).",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo
        ],
        requisitos_descricao: ["Força 3"]
    },
    {
        nome: "Encouraçado",
        descricao: "Se estiver usando uma armadura pesada, você recebe +2 na Defesa. Esse bônus aumenta em +2 para cada outro poder que você possua que tenha Encouraçado como pré-requisito.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.proficiencia
        ],
        requisitos_descricao: ["Proficiência em Armaduras Pesadas"]
    },
    {
        nome: "Esquiva",
        descricao: "Você recebe +2 na Defesa e Reflexos.",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo
        ],
        requisitos_descricao: ["Destreza 1"]
    },
    {
        nome: "Estilo de Arma e Escudo",
        descricao: "Se você estiver usando um escudo, o bônus na Defesa que ele fornece aumenta em +2.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia, RequisitoPoder.proficiencia],
        requisitos_descricao: ["Treinado em Luta", "Proficiência em Escudos"]
    },
    {
        nome: "Estilo de Arma Longa",
        descricao: "Você recebe +2 em testes de ataque com armas alongadas e pode atacar alvos adjacentes com essas armas.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
        requisitos_descricao: ["Força 1", "Treinado em Luta"]
    },
    {
        nome: "Estilo de Arremesso",
        descricao: "Você pode sacar armas de arremesso como uma ação livre e recebe +2 nas rolagens de dano com elas. Se também possuir o poder Saque Rápido, também recebe +2 nos testes de ataque com essas armas.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Pontaria"]
    },
    {
        nome: "Estilo de Disparo",
        descricao: "Se estiver usando uma arma de disparo, você soma sua Destreza nas rolagens de dano.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Pontaria"]
    },
    {
        nome: "Estilo de Duas Armas",
        descricao: "Se estiver empunhando duas armas (e pelo menos uma delas for leve) e fizer a ação agredir, você pode fazer dois ataques, um com cada arma. Se fizer isso, sofre -2 em todos os testes de ataque até o seu próximo turno. Se possuir Ambidestria, em vez disso não sofre penalidade para usá-lo.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
        requisitos_descricao: ["Destreza 2", "Treinado em Luta"]
    },
    {
        nome: "Ginete",
        descricao: "Você passa automaticamente em testes de Cavalgar para não cair da montaria quando sofre dano. Além disso, não sofre penalidades para atacar à distância ou lançar magias quando montado.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Cavalgar"]
    },
    {
        nome: "Mira Apurada",
        descricao: "Quando usa a ação mirar, você recebe +2 em testes de ataque e na margem de ameaça com ataques à distância até o fim do turno.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.poder],
        requisitos_descricao: ["Sabedoria 1", "Disparo Preciso"]
    },
    {
        nome: "Piqueiro",
        descricao: "Uma vez por rodada, se estiver empunhando uma arma alongada e um inimigo entrar voluntariamente em seu alcance corpo a corpo, você pode gastar 1 PM para fazer um ataque corpo a corpo contra este oponente com esta arma. Se o oponente tiver se aproximado fazendo uma investida, seu ataque causa dois dados de dano extra do mesmo tipo.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.poder],
        requisitos_descricao: ["Estilo de Arma Longa"]
    },
    {
        nome: "Presença Aterradora",
        descricao: "Você pode gastar uma ação padrão e 1 PM para assustar todas as criaturas a sua escolha em alcance curto. Veja a perícia Intimidação para as regras de assustar.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Intimidação"]
    },
    {
        nome: "Estilo de Duas Mãos",
        descricao: "Se estiver usando uma arma corpo a corpo com as duas mãos, você recebe +5 nas rolagens de dano. Este poder não pode ser usado com armas leves.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
        requisitos_descricao: ["Força 2", "Treinado em Luta"]
    },
    {
        nome: "Estilo de Uma Arma",
        descricao: "Se estiver usando uma arma corpo a corpo em uma das mãos e nada na outra, você recebe +2 na Defesa e nos testes de ataque com essa arma (exceto ataques desarmados).",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Luta"]
    },
    {
        nome: "Estilo Desarmado",
        descricao: "Seus ataques desarmados causam 1d6 pontos de dano e podem causar dano letal ou não letal (sem penalidades).",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Luta"]
    },
    {
        nome: "Finta Aprimorada",
        descricao: "Você recebe +2 em testes de Enganação para fintar e pode fintar como uma ação de movimento.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Enganação"]
    },
    {
        nome: "Foco em Arma",
        descricao: "Escolha uma arma. Você recebe +2 em testes de ataque com essa arma. Você pode escolher este poder outras vezes para armas diferentes.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.proficiencia],
        requisitos_descricao: ["Proficiência com a Arma"]
    },
    {
        nome: "Proficiência",
        descricao: "Escolha uma proficiência: armas marciais, armas de fogo, armaduras pesadas ou escudos (se for proficiente em armas marciais, você também pode escolher armas exóticas). Você recebe essa proficiência. Você pode escolher este poder outras vezes para proficiências diferentes.",
        tipo: TipoPoder.combate,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Quebrar Aprimorado",
        descricao: "Você recebe +2 em testes de ataque para quebrar. Quando reduz os PV de uma arma para 0 ou menos, você pode gastar 1 PM para realizar um ataque extra contra o usuário dela. O ataque adicional usa os mesmos valores de ataque e dano, mas os dados devem ser rolados novamente.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.poder],
        requisitos_descricao: ["Ataque Poderoso"]
    },
    {
        nome: "Reflexos de Combate",
        descricao: "Você ganha uma ação de movimento extra no seu primeiro turno de cada combate.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Destreza 1"]
    },
    {
        nome: "Saque Rápido",
        descricao: "Você recebe +2 em Iniciativa e pode sacar ou guardar itens como uma ação livre (em vez de ação de movimento). Além disso, a ação que você gasta para recarregar armas de disparo diminui em uma categoria (ação completa para padrão, padrão para movimento, movimento para livre).",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.proficiencia],
        requisitos_descricao: ["Treinado em Iniciativa"]
    },
    {
        nome: "Trespassar",
        descricao: "Quando você faz um ataque corpo a corpo e reduz os pontos de vida do alvo para 0 ou menos, pode gastar 1 PM para fazer um ataque adicional contra outra criatura dentro do seu alcance.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.poder],
        requisitos_descricao: ["Ataque Poderoso"]
    },
    {
        nome: "Vitalidade",
        descricao: "Você recebe +1 PV por nível de personagem e +2 em Fortitude.",
        tipo: TipoPoder.combate,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Constituição 1"]
    },
    {
        nome: "Acrobático",
        descricao: "Você pode usar sua Destreza em vez de Força em testes de Atletismo. Além disso, terreno difícil não reduz seu deslocamento nem o impede de realizar investidas.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Destreza 2"]
    },
    {
        nome: "Aparência Inofensiva",
        descricao: "A primeira criatura inteligente (Int -3 ou maior) que atacar você em uma cena deve fazer um teste de Vontade (CD Car). Se falhar, perderá sua ação. Este poder só funciona uma vez por cena; independentemente de a criatura falhar ou não no teste, poderá atacá-lo nas rodadas seguintes.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Carisma 1"]
    },
    {
        nome: "Atlético",
        descricao: "Você recebe +2 em Atletismo e +3m em seu deslocamento.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Força 2"]
    },
    {
        nome: "Atraente",
        descricao: "Você recebe +2 em testes de perícias baseadas em Carisma contra criaturas que possam se sentir fisicamente atraídas por você.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Carisma 1"]
    },
    {
        nome: "Comandar",
        descricao: "Você pode gastar uma ação de movimento e 1 PM para gritar ordens para seus aliados em alcance médio. Eles recebem +1 em testes de perícia até o fim da cena.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Carisma 1"]
    },
    {
        nome: "Costas Largas",
        descricao: "Seu limite de carga aumenta em 5 espaços e você pode se beneficiar de um item vestido adicional.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.atributo],
        requisitos_descricao: ["Força 1", "Constituição 1"]
    },
    {
        nome: "Foco em Perícia",
        descricao: "Escolha uma perícia. Quando faz um teste dessa perícia, você pode gastar 1 PM para rolar dois dados e usar o melhor resultado. Você pode escolher este poder outras vezes para perícias diferentes. Este poder não pode ser aplicado em Luta e Pontaria (mas veja Foco em Arma).",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado na Perícia escolhida"]
    },
    {
        nome: "Inventário Organizado",
        descricao: "Você soma sua Inteligência no limite de espaços que pode carregar. Para você, itens muito leves ou pequenos, que normalmente ocupam meio espaço, em vez disso ocupam 1/4 de espaço.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Inteligência 1"]
    },
    {
        nome: "Investigador",
        descricao: "Você recebe +2 em Investigação e soma sua Inteligência em Intuição.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Inteligência 1"]
    },
    {
        nome: "Lobo Solitário",
        descricao: "Você recebe +1 em testes de perícia e Defesa se estiver sem nenhum aliado em alcance curto. Você não sofre penalidade por usar Cura em si mesmo.",
        tipo: TipoPoder.destino,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Medicina",
        descricao: "Você pode gastar uma ação completa para fazer um teste de Cura (CD 15) em uma criatura. Se você passar, ela recupera 1d6 PV, mais 1d6 para cada 5 pontos pelos quais o resultado do teste exceder a CD (2d6 com um resultado 20, 3d6 com um resultado 25 e assim por diante). Você só pode usar este poder uma vez por dia numa mesma criatura.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
        requisitos_descricao: ["Sabedoria 1", "Treinado em Cura"]
    },
    {
        nome: "Parceiro",
        descricao: "Você possui um parceiro animal ou humanoide que o acompanha em aventuras. Escolha os detalhes dele, como nome, aparência e personalidade. Em termos de jogo, é um parceiro iniciante de um tipo a sua escolha (veja a página 260). O parceiro obedece às suas ordens e se arrisca para ajudá-lo, mas, se for maltratado, pode parar de segui-lo (de acordo com o mestre). Se perder seu parceiro, você recebe outro no início da próxima aventura.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.pericia, RequisitoPoder.nivel],
        requisitos_descricao: ["Treinado em Adestramento(parceiro animal) ou Diplomacia(parceiro humanoide)", "Nível 5"]
    },
    {
        nome: "Sentidos Aguçados",
        descricao: "Você recebe +2 em Percepção, não fica desprevenido contra inimigos que não possa ver e, sempre que erra um ataque devido a camuflagem, pode rolar mais uma vez o dado da chance de falha.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo, RequisitoPoder.pericia],
        requisitos_descricao: ["Sabedoria 1", "Treinado em Percepção"]
    },
    {
        nome: "Sortudo",
        descricao: "Você pode gastar 3 PM para rolar novamente um teste recém realizado (apenas uma vez por teste).",
        tipo: TipoPoder.destino,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Surto Heroico",
        descricao: "Uma vez por rodada, você pode gastar 5 PM para realizar uma ação padrão ou de movimento adicional.",
        tipo: TipoPoder.destino,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Torcida",
        descricao: "Você recebe +2 em testes de perícia e Defesa quando tem a torcida a seu favor. Entenda-se por 'torcida' qualquer número de criaturas inteligentes em alcance médio que não esteja realizando nenhuma ação além de torcer por você.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Carisma 1"]
    },
    {
        nome: "Treinamento em Perícia",
        descricao: "Você se torna treinado em uma perícia a sua escolha. Você pode escolher este poder outras vezes para perícias diferentes.",
        tipo: TipoPoder.destino,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Venefício",
        descricao: "Quando usa um veneno, você não corre risco de se envenenar acidentalmente. Além disso, a CD para resistir aos seus venenos aumenta em +2.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.pericia],
        requisitos_descricao: ["Treinado em Ofício (Alquimista)"]
    },
    {
        nome: "Vontade de Ferro",
        descricao: "Você recebe +1 PM para cada dois níveis de personagem e +2 em Vontade.",
        tipo: TipoPoder.destino,
        requisitos: [RequisitoPoder.atributo],
        requisitos_descricao: ["Sabedoria 1"]
    },
    {
        nome: "Anatomia Insana",
        descricao: "Você tem 25% de chance (resultado '1' em 1d4) de ignorar o dano adicional de um acerto crítico ou ataque furtivo. A chance aumenta em +25% para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Antenas",
        descricao: "Você recebe +1 em Iniciativa, Percepção e Vontade. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Armamento Aberrante",
        descricao: "Você pode gastar uma ação de movimento e 1 PM para produzir uma versão orgânica de qualquer arma corpo a corpo ou de arremesso com a qual seja proficiente. O dano da arma aumenta em um passo para cada dois outros poderes da Tormenta que você possui. A arma dura pela cena, então se desfaz numa poça de gosma.",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Outro poder da tormenta"]
    },
    {
        nome: "Articulações Flexíveis",
        descricao: "Você recebe +1 em Acrobacia, Furtividade e Reflexos. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Asas Insetoides",
        descricao: "Você pode gastar 1 PM para receber deslocamento de voo 9m até o fim do seu turno. O deslocamento aumenta em +1,5m para cada outro poder da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Quatro outros poderes da tormenta"]
    },
    {
        nome: "Carapaça",
        descricao: "Sua pele é recoberta por placas quitinosas. Você recebe +1 na Defesa. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Corpo Aberrante",
        descricao: "Crostas vermelhas em várias partes de seu corpo tornam seus ataques mais perigosos. Seu dano dearmado aumenta em um passo, mais um passo para cada quatro outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Outro poder da tormenta"]
    },
    {
        nome: "Cuspir Enxame",
        descricao: "Você pode gastar uma ação completa e 2 PM para criar um enxame de insetos rubros em um ponto a sua escolha em alcance curto e com duração sustentada. O enxame tem tamanho Médio e pode passar pelo espaço de outras criaturas. Uma vez por rodada, você pode gastar uma ação de movimento para mover o enxame 9m. No final do seu turno, o enxame causa 2d6 pontos de dano de ácido a qualquer criatura no espaço que ele estiver ocupando. Para cada dois outros poderes da Tormenta que possui, você pode gastar +1 PM quando usa este poder para aumentar o dano do enxame em +1d6.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Dentes Afiados",
        descricao: "Você recebe uma arma natural de mordida (dano 1d4, crítico x2, corte). Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 1 PM para fazer um ataque corpo a corpo extra com a mordida.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Desprezar a Realidade",
        descricao: "Você pode gastar 2 PM para ficar no limiar da realidade até o início de seu próximo turno. Nesse estado, você ignora terreno difícil e causa 20% de chance de falha em efeitos usados contra você (não apenas ataques). Para cada dois outros poderes de Tormenta que vocêpossuir, essa chance aumenta em 5% (máximo de 50%).",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Quatro outros poderes da tormenta"]
    },
    {
        nome: "Empunhadura Rubra",
        descricao: "Você pode gastar 1 PM para cobrir suas mãos com uma carapaça rubra. Até o final da cena, você recebe +1 em Luta. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Fome de Mana",
        descricao: "Quando passa em um teste de resistência para resistir a uma habilidade mágica, você recebe 1 PM temporário cumulativo. Você pode ganhar um máximo de PM temporários por cena desta forma igual ao número de poderes da Tormenta que possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Larva Explosiva",
        descricao: "Se uma criatura que tenha sofrido dano de sua mordida nesta cena for reduzida a 0 ou menos PV, ela explode em chuva cáustica, morrendo e causando 4d4 pontos de dano de ácido em criaturas adjacentes. Para cada dois outros poderes da Tormenta que você possui, o dano aumenta em +2d4. Você é imune a esse dano.",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Outro poder da tormenta"]
    },
    {
        nome: "Legião Aberrante",
        descricao: "Seu corpo se transforma em uma massa de insetos rubros. Você pode atravessar qualquer espaço por onde seja possível passar uma moeda (mas considera esses espaços como terreno difícil) e recebe +1 em testes contra manobras de combate e de resistência contra efeitos que tenham você como alvo (mas não efeitos de área). Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Quatro outros poderes da tormenta"]
    },
    {
        nome: "Mãos Membranosas",
        descricao: "Você recebe +1 em Atletismo, Fortitude e testes de agarrar. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Membros Estendidos",
        descricao: "Seus braços e armas naturais são grotescamente mais longos que o normal, o que aumenta seu alcance natural para ataques corpo a corpo em +1,5m. Para cada quatro outros poderes da Tormenta que você possui, esse alcance aumenta em +1,5m.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Membros extras",
        descricao: "Você possui duas armas naturais de patas insetoides que saem de suas costas, ombros ou flancos. Uma vez por rodada, quando usa a ação agredir para atacar com outra arma, pode gastar 2 PM para fazer um ataque corpo a corpo extra com cada uma (dano 1d4, crítico x2, corte). Se possuir Ambidestria ou Estilo de Duas Armas, pode empunhar armas leves em suas patas insetoides (mas ainda precisa pagar 2 PM para atacar com elas e sofre a penalidade de -2 em todos os ataques).",
        tipo: TipoPoder.tormenta,
        requisitos: [RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta, RequisitoPoder.poder_tormenta],
        requisitos_descricao: ["Quatro outros poderes da tormenta"]
    },
    {
        nome: "Mente Aberrante",
        descricao: "Você recebe resistência a efeitos mentais +1. Além disso, sempre que precisa fazer um teste de Vontade para resistir a uma habilidade, a criatura que usou essa habilidade sofre 1d6 pontos de dano psíquico. Para cada dois outros poderes da Tormenta que você possui o bônus em testes de resistência aumenta em +1 e o dano aumenta em +1d6.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Olhos Vermelhos",
        descricao: "Você recebe visão no escuro e +1 em Intimidação. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Pele Corrompida",
        descricao: "Sua carne foi mesclada à matéria vermelha. Você recebe redução de ácido, eletricidade, fogo, frio, luz e trevas 2. Esta RD aumenta em +2 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Sangue Ácido",
        descricao: "Quando você sofre dano por um ataque corpo a corpo, o atacante sofre 1 ponto de dano de ácido por poder da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: "Visco Rubro",
        descricao: "Você pode gastar 1 PM para expelir um líquido grosso e corrosivo. Até o final da cena, você recebe +1 nas rolagens de dano corpo a corpo. Este bônus aumenta em +1 para cada dois outros poderes da Tormenta que você possui.",
        tipo: TipoPoder.tormenta,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Membro da Igreja',
        descricao: 'Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Amigo Especial',
        descricao: 'Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Lembranças Graduais',
        descricao: 'Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Sangue Azul',
        descricao: 'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Frutos do Trabalho',
        descricao: 'No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar aventureiro, T$ 300 no heroico e T$ 500 no lenda.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Dom artístico',
        descricao: 'Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Esse Cheiro...',
        descricao: 'Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'À Prova de Tudo',
        descricao: 'Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Confissão',
        descricao: 'Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Alpinista Social',
        descricao: 'Você pode substituir testes de Diplomacia por testes de Enganação.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Truque de Mágica',
        descricao: 'Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Punguista',
        descricao: 'Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Médico de Campo',
        descricao: 'Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Busca Interior',
        descricao: 'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Desejo de Liberdade',
        descricao: 'Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Palpite Fundamentado',
        descricao: 'Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Água no Feijão',
        descricao: 'Você não sofre a penalidade de -5 e não gasta matéria prima adicional para fabricar pratos para cinco pessoas.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Cultura Exótica',
        descricao: 'Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Pão e Circo',
        descricao: 'Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de -5.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Detetive',
        descricao: 'Você pode gastar 1 PM para substituir testes de Percepção e Intuição por testes de Investigação até o fim da cena.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Herança',
        descricao: 'Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Coração Heroico',
        descricao: 'Você recebe +3 pontos de mana. Quando atinge um novo patamar (no 5º, 11º e 17º níveis), recebe +3 PM.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Passagem de Navio',
        descricao: 'Você consegue transporte marítimo para você e seus aliados, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Vendedor de Carcaças',
        descricao: 'Você pode extrair recursos de criaturas em um minuto, em vez de uma hora, e recebe +5 no teste',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Rede de Contatos',
        descricao: 'Graças à influência de sua guilda, você pode usar Diplomacia para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Negociação',
        descricao: 'Você pode vender itens 10% mais caro (não cumulativo com barganha).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Escavador',
        descricao: 'Você se torna proficiente em picaretas, causa +1 de dano com elas e não é afetado por terreno difícil em masmorras e subterrâneos.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Mochileiro',
        descricao: 'Seu limite de carga aumenta em 5 espaços.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Quebra-galho',
        descricao: 'Em cidades ou metrópoles, você pode comprar qualquer item mundano não superior por metade do preço normal. Esses itens não podem ser matérias-primas e não podem ser revendidos (são velhos, sujos, furtados...).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Estoico',
        descricao: 'Sua condição de descanso é uma categoria acima do padrão pela situação (normal em condições ruins, confortável em condições normais e luxuosa em condições confortáveis ou melhores). Veja as regras de recuperação na página 106.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Antigo Mestre',
        descricao: 'Você ainda mantém contato com o herói que costumava servir. Uma vez por aventura, ele surge para ajudá-lo por uma cena. Ele é um parceiro mestre de um tipo a sua escolha (definido ao obter este poder) que não conta em seu limite de aliados.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Vida Rústica',
        descricao: 'Você come coisas que fariam um avestruz vomitar (sendo imune a efeitos prejudiciais de itens ingeríveis) e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior a seu próprio nível).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Influência Militar',
        descricao: 'Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Gororoba',
        descricao: 'Você não sofre a penalidade de -5 para fabricar um prato especial adiconal.',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
    {
        nome: 'Esforçado',
        descricao: 'Você não teme trabalho duro, nem prazos apertados. Você recebe um bônus de +2 em todos os testes de perícias estendidos (incluindo perigos complexos).',
        tipo: TipoPoder.origem,
        requisitos: [],
        requisitos_descricao: []
    },
]

export enum TabelaPoderesEnum {
    AcuidadeComArma = "Acuidade com Arma",
    ArmaSecundariaGrande = "Arma Secundária grande",
    ArremessoPotente = "Arremesso Potente",
    ArremessoMultiplo = "Arremesso Múltiplo",
    AtaqueComEscudo = "Ataque com Escudo",
    AtaquePesado = "Ataque Pesado",
    AtaquePoderoso = "Ataque Poderoso",
    AtaquePreciso = "Ataque Preciso",
    BloqueioComEscudo = "Bloqueio com Escudo",
    CargaDeCavalaria = "Carga de Cavalaria",
    CombateDefensivo = "Combate Defensivo",
    DerrubarAprimorado = "Derrubar Aprimorado",
    DesarmarAprimorado = "Desarmar Aprimorado",
    DisparoPreciso = "Disparo Preciso",
    DisparoRapido = "Disparo Rápido",
    EmpunhaduraPoderosa = "Empunhadura Poderosa",
    Encouracado = "Encouraçado",
    Esquiva = "Esquiva",
    EstiloDeArmaEEscudo = "Estilo de Arma e Escudo",
    EstiloDeArmaLonga = "Estilo de Arma Longa",
    EstiloDeArremesso = "Estilo de Arremesso",
    EstiloDeDisparo = "Estilo de Disparo",
    EstiloDeDuasArmas = "Estilo de Duas Armas",
    Ginete = "Ginete",
    MiraApurada = "Mira Apurada",
    Piqueiro = "Piqueiro",
    PresencaAterradora = "Presença Aterradora",
    EstiloDeDuasMaos = "Estilo de Duas Mãos",
    EstiloDeUmaArma = "Estilo de Uma Arma",
    EstiloDesarmado = "Estilo Desarmado",
    FintaAprimorada = "Finta Aprimorada",
    FocoEmArma = "Foco em Arma",
    Proficiencia = "Proficiência",
    QuebrarAprimorado = "Quebrar Aprimorado",
    ReflexosDeCombate = "Reflexos de Combate",
    SaqueRapido = "Saque Rápido",
    Trespassar = "Trespassar",
    Vitalidade = "Vitalidade",
    Acrobatico = "Acrobático",
    AparênciaInofensiva = "Aparência Inofensiva",
    Atletico = "Atlético",
    Atraente = "Atraente",
    Comandar = "Comandar",
    CostasLargas = "Costas Largas",
    FocoEmPericia = "Foco em Perícia",
    InventarioOrganizado = "Inventário Organizado",
    Investigador = "Investigador",
    LoboSolitario = "Lobo Solitário",
    Medicina = "Medicina",
    Parceiro = "Parceiro",
    SentidosAguçados = "Sentidos Aguçados",
    Sortudo = "Sortudo",
    SurtoHeroico = "Surto Heroico",
    Torcida = "Torcida",
    TreinamentoEmPericia = "Treinamento em Perícia",
    Veneficio = "Venefício",
    VontadeDeFerro = "Vontade de Ferro",
    AnatomiaInsana = "Anatomia Insana",
    Antenas = "Antenas",
    ArmamentoAberrante = "Armamento Aberrante",
    ArticulacoesFlexiveis = "Articulações Flexíveis",
    AsasInsetoides = "Asas Insetoides",
    Carapaca = "Carapaça",
    CorpoAberrante = "Corpo Aberrante",
    CuspirEnxame = "Cuspir Enxame",
    DentesAfiados = "Dentes Afiados",
    DesprezarARealidade = "Desprezar a Realidade",
    EmpunhaduraRubra = "Empunhadura Rubra",
    FomeDeMana = "Fome de Mana",
    LarvaExplosiva = "Larva Explosiva",
    LegiaoAberrante = "Legião Aberrante",
    MaosMembranosas = "Mãos Membranosas",
    MembrosEstendidos = "Membros Estendidos",
    MembrosExtras = "Membros Extras",
    MenteAberrante = "Mente Aberrante",
    OlhosVermelhos = "Olhos Vermelhos",
    PeleCorrompida = "Pele Corrompida",
    SangueAcido = "Sangue Ácido",
    ViscoRubro = "Visco Rubro",
    MembroDaIgreja = "Membro da Igreja",
    AmigoEspecial = "Amigo Especial",
    LembrançasGraduais = "Lembranças Graduais",
    SangueAzul = "Sangue Azul",
    FrutosDoTrabalho = "Frutos do Trabalho",
    DomArtistico = "Dom artístico",
    EsseCheiro = "Esse Cheiro...",
    AProvaDeTudo = "À Prova de Tudo",
    Confissao = "Confissão",
    AlpinistaSocial = "Alpinista Social",
    TruqueDeMagica = "Truque de Mágica",
    Punguista = "Punguista",
    MedicoDeCampo = "Médico de Campo",
    BuscaInterior = "Busca Interior",
    DesejoDeLiberdade = "Desejo de Liberdade",
    PalpiteFundamentado = "Palpite Fundamentado",
    AguaNoFeijao = "Água no Feijão",
    CulturaExotica = "Cultura Exótica",
    PaoECirco = "Pão e Circo",
    Detetive = "Detetive",
    Heranca = "Herança",
    CoracaoHeroico = "Coração Heroico",
    PassagemDeNavio = "Passagem de Navio",
    VendedorDeCarcacas = "Vendedor de Carcaças",
    RedeDeContatos = "Rede de Contatos",
    Negociacao = "Negociação",
    Escavador = "Escavador",
    Mochileiro = "Mochileiro",
    QuebraGalho = "Quebra-galho",
    Estoico = "Estoico",
    AntigoMestre = "Antigo Mestre",
    VidaRustica = "Vida Rústica",
    InfluenciaMilitar = "Influência Militar",
    Gororoba = "Gororoba",
    Esforcado = "Esforçado",
}
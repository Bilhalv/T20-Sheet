import { Poder, RequisitoPoder, TipoPoder } from "../Construtores/Poder";

export const TabelaPoderesCombate: Poder[] = [
    {
        nome: "Ataque template",
        descricao: "Ataque template",
        tipo: TipoPoder.combate,
        requisitos: [
            RequisitoPoder.atributo,
        ]
    }
]

export const TabelaPoderesOrigem: Poder[] = [
    {
        nome: 'Membro da Igreja',
        descricao: 'Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Amigo Especial',
        descricao: 'Você recebe +5 em testes de Adestramento com animais. Além disso, possui um animal de estimação que o auxilia e o acompanha em suas aventuras. Em termos de jogo, é um parceiro que fornece +2 em uma perícia a sua escolha (exceto Luta ou Pontaria e aprovada pelo mestre) e não conta em seu limite de parceiros.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Lembranças Graduais',
        descricao: 'Durante suas aventuras, em determinados momentos a critério do mestre, você pode fazer um teste de Sabedoria (CD 10) para reconhecer pessoas, criaturas ou lugares que tenha encontrado antes de perder a memória.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Sangue Azul',
        descricao: 'Você tem alguma influência política, suficiente para ser tratado com mais leniência pela guarda, conseguir uma audiência com o nobre local etc.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Frutos do Trabalho',
        descricao: 'No início de cada aventura, você recebe até 5 itens gerais que possa fabricar num valor total de até T$ 50. Esse valor aumenta para T$ 100 no patamar aventureiro, T$ 300 no heroico e T$ 500 no lenda.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Dom artístico',
        descricao: 'Você recebe +2 em testes de Atuação, e recebe o dobro de tibares em apresentações.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Esse Cheiro...',
        descricao: 'Você recebe +2 em Fortitude e detecta automaticamente a presença (mas não a localização ou natureza) de itens alquímicos em alcance curto.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'À Prova de Tudo',
        descricao: 'Você não sofre penalidade em deslocamento e Sobrevivência por clima ruim e por terreno difícil natural.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Confissão',
        descricao: 'Você pode usar Intimidação para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Alpinista Social',
        descricao: 'Você pode substituir testes de Diplomacia por testes de Enganação.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Truque de Mágica',
        descricao: 'Você pode lançar Explosão de Chamas, Hipnotismo e Queda Suave, mas apenas com o aprimoramento Truque. Esta não é uma habilidade mágica — os efeitos provêm de prestidigitação.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Punguista',
        descricao: 'Você pode fazer testes de Ladinagem para sustento (como a perícia Ofício), mas em apenas um dia. Se passar, recebe o dobro do dinheiro, mas, se falhar, pode ter problemas com a lei (a critério do mestre).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Médico de Campo',
        descricao: 'Você soma sua Sabedoria aos PV restaurados por suas habilidades e itens mundanos de cura.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Busca Interior',
        descricao: 'Quando você e seus companheiros estão diante de um mistério, incapazes de prosseguir, você pode gastar 1 PM para meditar sozinho durante algum tempo e receber uma dica do mestre.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Desejo de Liberdade',
        descricao: 'Ninguém voltará a torná-lo um escravo! Você recebe +5 em testes contra a manobra agarrar e efeitos de movimento.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Palpite Fundamentado',
        descricao: 'Você pode gastar 2 PM para substituir um teste de qualquer perícia originalmente baseada em Inteligência ou Sabedoria por um teste de Conhecimento.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Água no Feijão',
        descricao: 'Você não sofre a penalidade de -5 e não gasta matéria prima adicional para fabricar pratos para cinco pessoas.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Cultura Exótica',
        descricao: 'Por sua diferente visão de mundo, você encontra soluções inesperadas. Você pode gastar 1 PM para fazer um teste de perícia somente treinada, mesmo sem ser treinado na perícia.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Pão e Circo',
        descricao: 'Por seu treino em combates de exibição, você sabe “bater sem machucar”. Pode escolher causar dano não letal sem sofrer a penalidade de -5.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Detetive',
        descricao: 'Você pode gastar 1 PM para substituir testes de Percepção e Intuição por testes de Investigação até o fim da cena.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Herança',
        descricao: 'Você herdou um item de preço de até T$ 1.000. Você pode escolher este poder duas vezes, para um item de até T$ 2.000.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Coração Heroico',
        descricao: 'Você recebe +3 pontos de mana. Quando atinge um novo patamar (no 5º, 11º e 17º níveis), recebe +3 PM.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Passagem de Navio',
        descricao: 'Você consegue transporte marítimo para você e seus aliados, sem custos, desde que todos paguem com trabalho (passar em pelo menos um teste de perícia adequado durante a viagem).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Vendedor de Carcaças',
        descricao: 'Você pode extrair recursos de criaturas em um minuto, em vez de uma hora, e recebe +5 no teste',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Rede de Contatos',
        descricao: 'Graças à influência de sua guilda, você pode usar Diplomacia para interrogar sem custo e em uma hora (veja Investigação).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Negociação',
        descricao: 'Você pode vender itens 10% mais caro (não cumulativo com barganha).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Escavador',
        descricao: 'Você se torna proficiente em picaretas, causa +1 de dano com elas e não é afetado por terreno difícil em masmorras e subterrâneos.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Mochileiro',
        descricao: 'Seu limite de carga aumenta em 5 espaços.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Quebra-galho',
        descricao: 'Em cidades ou metrópoles, você pode comprar qualquer item mundano não superior por metade do preço normal. Esses itens não podem ser matérias-primas e não podem ser revendidos (são velhos, sujos, furtados...).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Estoico',
        descricao: 'Sua condição de descanso é uma categoria acima do padrão pela situação (normal em condições ruins, confortável em condições normais e luxuosa em condições confortáveis ou melhores). Veja as regras de recuperação na página 106.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Antigo Mestre',
        descricao: 'Você ainda mantém contato com o herói que costumava servir. Uma vez por aventura, ele surge para ajudá-lo por uma cena. Ele é um parceiro mestre de um tipo a sua escolha (definido ao obter este poder) que não conta em seu limite de aliados.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Vida Rústica',
        descricao: 'Você come coisas que fariam um avestruz vomitar (sendo imune a efeitos prejudiciais de itens ingeríveis) e também consegue descansar nos lugares mais desconfortáveis (mesmo dormindo ao relento, sua recuperação de PV e PM nunca é inferior a seu próprio nível).',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Influência Militar',
        descricao: 'Você fez amigos nas forças armadas. Onde houver acampamentos ou bases militares, você pode conseguir hospedagem e informações para você e seus aliados.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Gororoba',
        descricao: 'Você não sofre a penalidade de –5 para fabricar um prato especial adiconal.',
        tipo: TipoPoder.origem,
        requisitos: []
    },
    {
        nome: 'Esforçado',
        descricao: 'Você não teme trabalho duro, nem prazos apertados. Você recebe um bônus de +2 em todos os testes de perícias estendidos (incluindo perigos complexos).',
        tipo: TipoPoder.origem,
        requisitos: []
    }
]

export enum TabelaPoderesOrigemEnum {
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
import { Atributo } from "../Construtores/Atributo";
import { Pericia } from "../Construtores/Pericia";

const TabelaPericias: Pericia[] = [
    {
        nome: "Acrobacia",
        descricao: "Você consegue fazer proezas acrobáticas.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: true
    },
    {
        nome: "Adestramento",
        descricao: "Você sabe lidar com animais.",
        atributo: Atributo.carisma,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Atletismo",
        descricao: "Você pode realizar façanhas atléticas.",
        atributo: Atributo.forca,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Atuação",
        descricao: "Você sabe fazer apresentações artísticas, incluindo música, dança e dramaturgia.",
        atributo: Atributo.carisma,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Cavalgar",
        descricao: "Você sabe conduzir animais de montaria, como cavalos, trobos e grifos. Ações simples não exigem testes — você pode encilhar, montar, cavalgar em terreno plano e desmontar automaticamente. Ações perigosas, entretanto, exigem testes da perícia.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Conhecimento",
        descricao: "Você estudou diversos campos do saber, como aritmética, astronomia, dialética, geografia, história...",
        atributo: Atributo.inteligencia,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Cura",
        descricao: "Você sabe tratar ferimentos, doenças e venenos.",
        atributo: Atributo.sabedoria,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Diplomacia",
        descricao: "Você convence pessoas com lábia e argumentação. Usos de Diplomacia são efeitos mentais.",
        atributo: Atributo.carisma,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Enganação",
        descricao: "Você manipula pessoas com blefes e trapaças.",
        atributo: Atributo.carisma,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Fortitude",
        descricao: "Você usa esta perícia para resistir a efeitos que exigem vitalidade, como doenças e venenos.",
        atributo: Atributo.constituicao,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Furtividade",
        descricao: "Você sabe ser discreto e sorrateiro.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: true
    },
    {
        nome: "Guerra",
        descricao: "Você foi educado em tática, estratégia e logística.",
        atributo: Atributo.inteligencia,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Iniciativa",
        descricao: "Esta perícia determina sua velocidade de reação em situações de perigo.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Intimidação",
        descricao: "Você pode assustar ou coagir outras pessoas. Usos de Intimidação são efeitos de medo.",
        atributo: Atributo.carisma,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Intuição",
        descricao: "Esta perícia mede sua empatia e “sexto sentido”.",
        atributo: Atributo.sabedoria,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Investigação",
        descricao: "Você sabe encontrar pistas e informações.",
        atributo: Atributo.inteligencia,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Jogatina",
        descricao: "Você sabe jogar jogos de azar.",
        atributo: Atributo.carisma,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Ladinagem",
        descricao: "Você sabe exercer atividades ilícitas.",
        atributo: Atributo.destreza,
        somentetreinada: true,
        penalidadearmadura: true
    },
    {
        nome: "Luta",
        descricao: "Você usa Luta para fazer ataques corpo a corpo.",
        atributo: Atributo.forca,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Misticismo",
        descricao: "Esta perícia envolve o conhecimento de magias, itens mágicos e fenômenos sobrenaturais.",
        atributo: Atributo.inteligencia,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Nobreza",
        descricao: "Você recebeu a educação de um nobre.",
        atributo: Atributo.inteligencia,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Ofício",
        descricao: "Ofício na verdade são várias perícias diferentes. Cada uma permite fabricar itens de certas categorias",
        atributo: Atributo.inteligencia,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Percepção",
        descricao: "Você nota coisas usando seus sentidos.",
        atributo: Atributo.sabedoria,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Pilotagem",
        descricao: "Você sabe operar veículos como carroças, barcos e balões.",
        atributo: Atributo.destreza,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Pontaria",
        descricao: "Você usa Pontaria para fazer ataques à distância.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Reflexos",
        descricao: "Você usa esta perícia para resistir a efeitos que exigem reação rápida, como armadilhas e explosões.",
        atributo: Atributo.destreza,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Religião",
        descricao: "Você possui conhecimento sobre os deuses e as religiões de Arton.",
        atributo: Atributo.sabedoria,
        somentetreinada: true,
        penalidadearmadura: false
    },
    {
        nome: "Sobrevivência",
        descricao: "Você está em casa nos ermos.",
        atributo: Atributo.sabedoria,
        somentetreinada: false,
        penalidadearmadura: false
    },
    {
        nome: "Vontade",
        descricao: "Você usa esta perícia para resistir a efeitos que exigem determinação, como intimidação e encantamentos.",
        atributo: Atributo.sabedoria,
        somentetreinada: false,
        penalidadearmadura: false
    },
]


export enum TabelaPericiasEnum {
    Acrobacia = "Acrobacia",
    Adestramento = "Adestramento",
    Atletismo = "Atletismo",
    Atuação = "Atuação",
    Cavalgar = "Cavalgar",
    Conhecimento = "Conhecimento",
    Cura = "Cura",
    Diplomacia = "Diplomacia",
    Enganação = "Enganação",
    Fortitude = "Fortitude",
    Furtividade = "Furtividade",
    Guerra = "Guerra",
    Iniciativa = "Iniciativa",
    Intimidação = "Intimidação",
    Intuição = "Intuição",
    Investigação = "Investigação",
    Jogatina = "Jogatina",
    Ladinagem = "Ladinagem",
    Luta = "Luta",
    Misticismo = "Misticismo",
    Nobreza = "Nobreza",
    Ofício = "Ofício",
    Percepção = "Percepção",
    Pilotagem = "Pilotagem",
    Pontaria = "Pontaria",
    Reflexos = "Reflexos",
    Religião = "Religião",
    Sobrevivência = "Sobrevivência",
    Vontade = "Vontade"
}
  
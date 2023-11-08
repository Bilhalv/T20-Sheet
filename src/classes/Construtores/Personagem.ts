import { TabelaPericiasEnum } from "../Tabelas/Pericias";

enum EnumClasse {
  Arcanista = "Arcanista",
  Barbaro = "Bárbaro",
  Bardo = "Bardo",
  Bucaneiro = "Bucaneiro",
  Cacador = "Caçador",
  Cavaleiro = "Cavaleiro",
  Clerigo = "Clérigo",
  Druida = "Druida",
  Guerreiro = "Guerreiro",
  Inventor = "Inventor",
  Ladino = "Ladino",
  Lutador = "Lutador",
  Nobre = "Nobre",
  Paladino = "Paladino",
}

export class Personagem {
  constructor(
    public nome: string,
    public manaMax: number,
    public manaAtual: number,
    public vidaMax: number,
    public vidaAtual: number,
    public level: number,
    public defesaAtual: number,
    public espacos: number,
    public magias: [string],
    public classe: EnumClasse,
    public alt: string,
    public atributos: {
      forca: number;
      destreza: number;
      constituicao: number;
      inteligencia: number;
      sabedoria: number;
      carisma: number;
    },
    public pericias: [TabelaPericiasEnum],
    public ataques: [string],
    public itens: [string],
    public origem: string,
    public divindade: string,
    public tamanho: string,
    public tibares: string
  ) {}
}

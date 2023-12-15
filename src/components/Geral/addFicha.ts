import Ficha, {
  Ataque,
  Mochila,
  PericiasFicha,
} from "../../classes/Construtores/Ficha";
import { Magia } from "../../classes/Construtores/Magia";
import { Poder } from "../../classes/Construtores/Poder";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { TabelaOrigens } from "../../classes/Tabelas/Origens";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";

const LOCAL_STORAGE_KEYS = {
  nome: "nome",
  raca: "raca",
  classe: "classe",
  lvl: "lvl",
  divindade: "divindade",
  origem: "origem",
  atributosFinais: "atributosFinais",
  pericias: "pericias",
  poderes: "poderes",
  magias: "magias",
  equipamentos: "equipamentos",
  especificasRaca: "especificasRaca",
  alt: "alt",
  fichas: "fichas",
  fichaSelecionada: "fichaSelecionada",
};

const handleQareen = (
  especificasRaca: string[]
): {
  magias: string[];
  especifico: { nome: string; atributo: string } | undefined;
} => {
  const tipoQareen = [
    { nome: "Frio", atributo: "agua" },
    { nome: "Eletricidade", atributo: "ar" },
    { nome: "Fogo", atributo: "fogo" },
    { nome: "Ácido", atributo: "terra" },
    { nome: "Luz", atributo: "luz" },
    { nome: "Trevas", atributo: "trevas" },
  ];
  let especifico;

  const magias: string[] = [];
  especificasRaca.forEach((especifica: string) => {
    tipoQareen.forEach((tipo) => {
      if (especifica === tipo.atributo) {
        especifico = tipo;
        especificasRaca.splice(especificasRaca.indexOf(especifica), 1);
      }
    });
  });
  const resultado = {
    magias: magias,
    especifico: especifico,
  };

  return resultado;
};

const handleGolem = (
  especificasRaca: string[]
): { golem: string } | undefined => {
  let tipoGolem = [
    { nome: "Frio", atributo: "agua" },
    { nome: "Eletricidade", atributo: "ar" },
    { nome: "Fogo", atributo: "fogo" },
    { nome: "Ácido", atributo: "terra" },
  ];

  let especifico;
  especificasRaca.forEach((especifica: string) => {
    tipoGolem.forEach((tipo) => {
      if (especifica === tipo.atributo) {
        especifico = { golem: tipo.nome };
        especificasRaca.splice(especificasRaca.indexOf(especifica), 1);
      }
    });
  });

  return especifico;
};

const handleSereiaTritaoSilfide = (especificasRaca: string[]): string[] => {
  return [...handleMagiasDuplicadas(especificasRaca)];
};

const handleMagiasDuplicadas = (especificas: string[]): string[] => {
  const magias: string[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.magias) || "[]"
  );
  if (magias.some((magia) => especificas.includes(magia))) {
    magias.forEach((magia: string) => {
      if (especificas.includes(magia)) {
        magia += " (-1 PM)";
      }
    });
  } else {
    magias.push(...especificas);
  }
  return magias;
};

export default function addFichaToLocalStorage() {
  const nome = localStorage.getItem(LOCAL_STORAGE_KEYS.nome) || "";
  const raca = localStorage.getItem(LOCAL_STORAGE_KEYS.raca) || "";
  const classe =
    TabelaClasses.find(
      (e) => e.nome === (localStorage.getItem(LOCAL_STORAGE_KEYS.classe) || "")
    ) || TabelaClasses[0];
  const lvl = Number(localStorage.getItem(LOCAL_STORAGE_KEYS.lvl) || "");
  const divindade = localStorage.getItem(LOCAL_STORAGE_KEYS.divindade) || "";
  const origem = localStorage.getItem(LOCAL_STORAGE_KEYS.origem) || "";
  const atributosFinais = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.atributosFinais) || "[]"
  );
  const pericias: PericiasFicha[] = TabelaPericias.map((pericia) => {
    if (pericia) {
      const isTreinada = JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.pericias) || "[]"
      )?.includes(pericia.nome);
      return {
        nome: pericia.nome,
        treinada: isTreinada ? 5 : 0,
        bonus: 0,
      };
    }
  }) as PericiasFicha[];
  const poderes: string[] = JSON.parse(
    localStorage.getItem("poderes") || "[]"
  ).map((poder: Poder) => poder.nome);
  var magias = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.magias) || "[]"
  );
  const equipamentos = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.equipamentos) || "[]"
  );
  const alt = localStorage.getItem(LOCAL_STORAGE_KEYS.alt) || "";

  const fichasArray: Ficha[] = JSON.parse(
    localStorage.getItem(LOCAL_STORAGE_KEYS.fichas) || "[]"
  );

  var atributoConjurador = 0;
  const ataques: Ataque[] = [];

  if (classe.conjurador) {
    switch (classe.nome) {
      case "Arcanista":
        switch (alt) {
          case "bruxo":
          case "mago":
            atributoConjurador = atributosFinais[3].valor;
            break;
          case "feiticeiro":
          case "bardo":
            atributoConjurador = atributosFinais[5].valor;
            break;
          default:
            break;
        }
        break;
      case "Bardo":
        atributoConjurador = atributosFinais[5].valor;
        break;
      case "Clérigo":
      case "Druida":
        atributoConjurador = atributosFinais[4].valor;
        break;
      default:
        break;
    }
  }

  if (classe.nome === "Paladino") {
    atributoConjurador = atributosFinais[5].valor;
  }

  const pvInicial =
    classe.vidainicial +
    atributosFinais[2].valor +
    (classe.vidapnivel + atributosFinais[2].valor) * (lvl - 1);

  const pmInicial = (classe.manapnivel + atributoConjurador) * lvl;

  if (raca === "Osteon" || raca === "Lefou" || raca === "Humano") {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    pericias.forEach((pericia) => {
      if (pericia && especificasRaca.includes(pericia.nome)) {
        pericia.treinada = 5;
        especificasRaca.splice(especificasRaca.indexOf(pericia.nome), 1);
      }
    });
    poderes.push(...especificasRaca);
  }

  var especifico = undefined;

  if (raca === "Golem") {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    especifico = handleGolem(especificasRaca);
    poderes.push(...especificasRaca);
  }

  if (raca === "Qareen") {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    let quaren = handleQareen(especificasRaca);
    especifico = quaren.especifico;
    magias = [...handleMagiasDuplicadas(quaren.magias)];
  }

  if (raca === "Sereia/Tritão" || raca === "Sílfide") {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    magias = handleSereiaTritaoSilfide(especificasRaca);
  }

  const ficha: Ficha = {
    id: fichasArray.length,
    origem,
    nome,
    raca,
    classe,
    nivel: lvl,
    divindade,
    pv: pvInicial,
    pvMax: pvInicial,
    pmMax: pmInicial,
    pm: pmInicial,
    ataques: [...ataques],
    atributos: atributosFinais.map((atributo: any) => ({
      atributo: atributo.nome,
      valor: atributo.valor,
    })),
    pericias,
    magias,
    poderes: poderes.map((poder: any) => poder.nome),
    mochila: equipamentos as Mochila,
    especifico,
  };

  fichasArray.push(ficha);
  localStorage.clear();
  localStorage.setItem(LOCAL_STORAGE_KEYS.fichas, JSON.stringify(fichasArray));
  localStorage.setItem(
    LOCAL_STORAGE_KEYS.fichaSelecionada,
    JSON.stringify(ficha)
  );
}

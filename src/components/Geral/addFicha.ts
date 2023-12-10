import Ficha, { Ataque, Mochila } from "../../classes/Construtores/Ficha";
import { Poder } from "../../classes/Construtores/Poder";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";

export default function addFichaToLocalStorage() {
  const fichasArray = JSON.parse(localStorage.getItem("fichas") || "[]");
  const classe =
    TabelaClasses.find(
      (e) => e.nome === (localStorage.getItem("classe") || "")
    ) || TabelaClasses[0];
  const atributosLocais: {
    atributo: string;
    valor: number;
  }[] = JSON.parse(localStorage.getItem("atributosFinais") || "[]");
  var atributoConjurador = 0;
  const equipamentos: Mochila = JSON.parse(
    localStorage.getItem("equipamentos") || "[]"
  );
  const ataques: Ataque[] = [];
  const magias: string[] = JSON.parse(localStorage.getItem("magias") || "[]");

  const pericias = TabelaPericias
    ? TabelaPericias.map((pericia) => {
        const isTreinada = JSON.parse(
          localStorage.getItem("pericias") || "[]"
        )?.includes(pericia.nome);
        return {
          nome: pericia.nome,
          treinada: isTreinada ? 5 : 0,
          bonus: 0,
        };
      })
    : [];
  if (classe.conjurador) {
    if (classe.nome === "Arcanista") {
      if (
        localStorage.getItem("alt") === "bruxo" ||
        localStorage.getItem("alt") === "mago"
      ) {
        atributoConjurador = atributosLocais[3].valor;
      } else if (
        localStorage.getItem("alt") === "feiticeiro" ||
        localStorage.getItem("alt") === "bardo"
      ) {
        atributoConjurador = atributosLocais[5].valor;
      }
    }
    if (classe.nome === "Bardo") {
      atributoConjurador = atributosLocais[5].valor;
    }
    if (classe.nome === "Clérigo" || classe.nome === "Druida") {
      atributoConjurador = atributosLocais[4].valor;
    }
  }
  if (classe.nome === "Paladino") {
    atributoConjurador = atributosLocais[5].valor;
  }
  const pvInicial =
    classe.vidainicial +
    atributosLocais[2].valor +
    (classe.vidapnivel + atributosLocais[2].valor) *
      ((Number(localStorage.getItem("lvl")) || 1) - 1);
  const pmInicial =
    (classe.manapnivel + atributoConjurador) *
    (Number(localStorage.getItem("lvl")) || 1);
  const poderes: string[] = JSON.parse(
    localStorage.getItem("poderes") || "[]"
  ).map((poder: Poder) => poder.nome);
  if (
    localStorage.getItem("raca") === "Osteon" ||
    localStorage.getItem("raca") === "Lefou" ||
    localStorage.getItem("raca") === "Humano"
  ) {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    pericias.forEach((pericia) => {
      if (especificasRaca.includes(pericia.nome)) {
        pericia.treinada = 5;
        especificasRaca.splice(especificasRaca.indexOf(pericia.nome), 1);
      }
    });
    poderes.push(...especificasRaca);
  }
  var especifico = undefined;
  if (localStorage.getItem("raca") === "Golem") {
    let tipoGolem = [
      {
        nome: "Frio",
        atributo: "agua",
      },
      {
        nome: "Eletricidade",
        atributo: "ar",
      },
      {
        nome: "Fogo",
        atributo: "fogo",
      },
      {
        nome: "Ácido",
        atributo: "terra",
      },
    ];
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    especificasRaca.forEach((especifica: string) => {
      tipoGolem.forEach((tipo) => {
        if (especifica === tipo.atributo) {
          especifico = { golem: tipo.nome };
          especificasRaca.splice(especificasRaca.indexOf(especifica), 1);
        }
      });
    });
    poderes.push(...especificasRaca);
  }
  if (localStorage.getItem("raca") === "Qareen") {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    const tipoQareen = [
      {
        nome: "Frio",
        atributo: "agua",
      },
      {
        nome: "Eletricidade",
        atributo: "ar",
      },
      {
        nome: "Fogo",
        atributo: "fogo",
      },
      {
        nome: "Ácido",
        atributo: "terra",
      },
      {
        nome: "Luz",
        atributo: "luz",
      },
      {
        nome: "Trevas",
        atributo: "trevas",
      },
    ];
    especificasRaca.forEach((especifica: string) => {
      tipoQareen.forEach((tipo) => {
        if (especifica === tipo.atributo) {
          especifico = { qareen: tipo.nome };
          especificasRaca.splice(especificasRaca.indexOf(especifica), 1);
        }
      });
    });
    if (magias.includes(especificasRaca[0])) {
      magias[magias.indexOf(especificasRaca[0])] += " (-1 PM)";
    } else {
      magias.push(...especificasRaca);
    }
  }
  if (
    localStorage.getItem("raca") === "Sereia/Tritão" ||
    localStorage.getItem("raca") === "Sílfide"
  ) {
    const especificasRaca = JSON.parse(
      localStorage.getItem("especificasRaca") || "[]"
    );
    if (magias.some(especificasRaca)) {
      magias.forEach((magia: string) => {
        if (especificasRaca.includes(magia)) {
          magia += " (-1 PM)";
        }
      });
    } else {
      magias.push(...especificasRaca);
    }
  }
  const ficha: Ficha = {
    id: fichasArray.length,
    origem: localStorage.getItem("origem") || "",
    nome: localStorage.getItem("nome") || "",
    raca: localStorage.getItem("raca") || "",
    classe: classe,
    nivel: Number(localStorage.getItem("lvl")) || 0,
    divindade: localStorage.getItem("divindade") || "",
    pv: pvInicial,
    pvMax: pvInicial,
    pmMax: pmInicial,
    pm: pmInicial,
    ataques: [...ataques],
    atributos: atributosLocais.map((atributo: any) => ({
      atributo: atributo.nome,
      valor: atributo.valor,
    })),
    pericias: pericias,
    magias: magias,
    poderes: poderes.map((poder: any) => poder.nome),
    mochila: equipamentos,
    especifico: especifico,
  };
  fichasArray.push(ficha);
  localStorage.clear();
  localStorage.setItem("fichas", JSON.stringify(fichasArray));
  localStorage.setItem("fichaSelecionada", JSON.stringify(ficha));
}

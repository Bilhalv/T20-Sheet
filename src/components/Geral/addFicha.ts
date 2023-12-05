import { Arma } from "../../classes/Construtores/Arma";
import Ficha, { Ataque, Mochila, armaFicha } from "../../classes/Construtores/Ficha";
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
  const equipamentos: Mochila = JSON.parse(localStorage.getItem("equipamentos") || "[]");
  const ataques: Ataque[] = [];

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
  const pvInicial =
    classe.vidainicial +
    atributosLocais[2].valor +
    (classe.vidapnivel + atributosLocais[2].valor) *
      ((Number(localStorage.getItem("lvl")) || 1) - 1);
  const pmInicial =
    (classe.manapnivel + atributoConjurador) *
    (Number(localStorage.getItem("lvl")) || 1);
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
    magias: JSON.parse(localStorage.getItem("magias") || "[]"),
    poderes: JSON.parse(localStorage.getItem("poderes") || "[]"),
    mochila: equipamentos,
  };
  fichasArray.push(ficha);
  localStorage.clear();
  localStorage.setItem("fichas", JSON.stringify(fichasArray));
  localStorage.setItem("fichaSelecionada", JSON.stringify(ficha));
}

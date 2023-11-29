import { Poder, RequisitoPoder } from "../../classes/Construtores/Poder";

export function PreRequisitos(totalPoderes: Poder[]) {
  const Indisponiveis = totalPoderes.filter((poder) => {
    return poder.requisitos_descricao.some((requisito) => {
      //filtro de atributo
      if (poder.requisitos.includes(RequisitoPoder.atributo)) {
        const [atributo, valor] = requisito.split(" ");
        const atributoslocal = JSON.parse(
          localStorage.getItem("atributosFinais") || "[]"
        );
        const atributolocalvalor =
          atributoslocal.find((atributoL: any) => atributoL.nome === atributo)
            ?.valor || 0;
        if (atributolocalvalor < Number(valor)) {
          return true;
        }
      }

      //filtro de nivel
      if (poder.requisitos.includes(RequisitoPoder.nivel)) {
        const nivelfim = Number(requisito.split(" ")[1]);
        if (Number(localStorage.getItem("lvl")) < nivelfim) {
          return true;
        }
      }

      //filtro de pericia
      if (poder.requisitos.includes(RequisitoPoder.pericia)) {
        const desc = requisito.split("reinado em ")[1];
        const pericias = JSON.parse(localStorage.getItem("pericias") || "[]");
        if (!pericias.some((pericia: any) => pericia.nome === desc)) {
          return true;
        }
      }

      //filtro de poder
      if (poder.requisitos.includes(RequisitoPoder.poder)) {
        const poderesSelecionados = JSON.parse(
          localStorage.getItem("poderes") || "[]"
        );
        return !poder.requisitos_descricao.some((requisito) =>
          poderesSelecionados.some((poder: any) => requisito.includes(poder))
        );
      }

      //filtro tipo_arcanista
      if (poder.requisitos.includes(RequisitoPoder.tipo_arcanista)) {
        const tipo = poder.requisitos_descricao;
        const arcanista = JSON.parse(localStorage.getItem("alt") || "[]");
        if (tipo.includes(arcanista)) {
          return true;
        }
      }

      //filtro de magia
      if (poder.requisitos.includes(RequisitoPoder.magia)) {
        const desc = poder.requisitos_descricao;
        const classe = localStorage.getItem("classe");
        if (
          desc.some((requisito) => requisito.includes("magias")) &&
          classe !== "Arcanista" &&
          classe !== "Clérigo" &&
          classe !== "Bardo" &&
          classe !== "Druida"
        ) {
          return true;
        } else if (poder.requisitos.includes(RequisitoPoder.circulo)) {
          let pertence = false;
          const niveis = [1, 5, 9, 13, 17];
          const nivel = Number(localStorage.getItem("lvl"));
          desc.forEach((requisito) => {
            if (requisito.includes("círculo")) {
              const circulo = Number(
                requisito.split("Lançar magias de ")[0].split("º ")[0]
              );
              if (nivel >= niveis[circulo + 1]) {
                pertence = true;
              }
            }
          });
          return !pertence;
        }
      }
      return false;
    });
  });
  return Indisponiveis;
}

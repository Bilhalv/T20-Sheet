import { Poder, RequisitoPoder } from "../../classes/Construtores/Poder";

export function PreRequisitos(totalPoderes: Poder[]) {
  const poderesIndisponiveis = totalPoderes.filter((poder) => {
    return poder.requisitos_descricao.some((requisito) => {
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

      if (poder.requisitos.includes(RequisitoPoder.nivel)) {
        const nivelfim = Number(requisito.split(" ")[1]);
        if (Number(localStorage.getItem("lvl")) < nivelfim) {
          return true;
        }
      }

      if (poder.requisitos.includes(RequisitoPoder.pericia)) {
        const desc = requisito.split("reinado em ")[1];
        const pericias = JSON.parse(localStorage.getItem("pericias") || "[]");
        if (!pericias.includes(desc)) {
          return true;
        }
      }

      return false;
    });
  });
  return poderesIndisponiveis;
}

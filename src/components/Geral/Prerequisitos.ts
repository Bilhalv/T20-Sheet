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
        const periciasorigem = JSON.parse(
          localStorage.getItem("beneficios") || "[]"
        ).filter((beneficio: any) => beneficio.tipo === "Perícias");
        pericias.push(...periciasorigem[0].beneficio);
        console.log(pericias);
        if (!pericias.includes(desc)) {
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
        const arcanista = localStorage.getItem("alt");
      }

      return false;
    });
  });
  return Indisponiveis;
}

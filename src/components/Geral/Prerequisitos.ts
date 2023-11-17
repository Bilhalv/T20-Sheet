import { Poder, RequisitoPoder } from "../../classes/Construtores/Poder";

export function PreRequisitos(totalPoderes: Poder[]) {
  const pericias = JSON.parse(localStorage.getItem("pericias") || "[]");
  const beneficios = JSON.parse(localStorage.getItem("beneficios") || "[]");
  const periciasorigem = beneficios.find((beneficio: any) => beneficio.tipo === "Perícias")?.beneficio || [];

  pericias.push(...periciasorigem);

  return totalPoderes.filter((poder) =>
    poder.requisitos_descricao.some((requisito) => {
      const checkAtributo = () => {
        const [atributo, valor] = requisito.split(" ");
        const atributoslocal = JSON.parse(localStorage.getItem("atributosFinais") || "[]");
        const atributolocalvalor = atributoslocal.find((atributoL: any) => atributoL.nome === atributo)?.valor || 0;
        return atributolocalvalor < Number(valor);
      };

      const checkNivel = () => {
        const nivelfim = Number(requisito.split(" ")[1]);
        return Number(localStorage.getItem("lvl")) < nivelfim;
      };

      const checkPericia = () => {
        const desc = requisito.split("reinado em ")[1];
        return pericias.includes(desc);
      };

      const checkPoder = () => {
        const poderesSelecionados = JSON.parse(localStorage.getItem("poderes") || "[]");
        return !poder.requisitos_descricao.some((requisito) =>
          poderesSelecionados.some((poder: any) => requisito.includes(poder))
        );
      };

      const checkTipoArcanista = () => {
        const tipo = poder.requisitos_descricao;
        const arcanista = JSON.parse(localStorage.getItem("alt") || "[]");
        return tipo.includes(arcanista);
      };

      const checkMagia = () => {
        const magias = JSON.parse(localStorage.getItem("magias") || "[]");
        const desc = poder.requisitos_descricao;
        return desc.some((requisito) => !magias.includes(requisito));
      };

      return (
        (poder.requisitos.includes(RequisitoPoder.atributo) && checkAtributo()) ||
        (poder.requisitos.includes(RequisitoPoder.nivel) && checkNivel()) ||
        (poder.requisitos.includes(RequisitoPoder.pericia) && checkPericia()) ||
        (poder.requisitos.includes(RequisitoPoder.poder) && checkPoder()) ||
        (poder.requisitos.includes(RequisitoPoder.tipo_arcanista) && checkTipoArcanista()) ||
        (poder.requisitos.includes(RequisitoPoder.magia) && checkMagia())
      );
    })
  );
}

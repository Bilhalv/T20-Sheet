interface RolarDadoProps {
  lados: number;
  qtd?: number;
  mod?: number;
  descarte?: number;
  rerola?: "adv" | "des";
  ameaca?: number;
}

export function RolarDado({
  qtd,
  lados,
  mod,
  descarte,
  rerola,
  ameaca,
}: RolarDadoProps) {
  qtd = Math.max(qtd || 1, 1);
  lados = Math.max(lados, 1);
  descarte = descarte !== undefined && descarte > qtd ? qtd : descarte;
  let dadosNormais: number[] = [];
  let dadosDescarte: number[] = [];
  let Reroll: number[] = [];
  let total = mod || 0;
  let totalReroll = 0;
  for (let i = 0; i < qtd; i++) {
    let dado = Math.floor(Math.random() * lados) + 1;
    dadosNormais.push(dado);
    total += dado;
    let dadoReroll = Math.floor(Math.random() * lados) + 1;
    Reroll.push(dadoReroll);
    totalReroll += dadoReroll;
  }
  if (
    rerola &&
    ((rerola === "adv" && totalReroll > total) ||
      (rerola === "des" && totalReroll < total))
  ) {
    total = totalReroll;
    [dadosNormais, Reroll] = [Reroll, dadosNormais];
  }
  if (descarte) {
    dadosNormais.sort((a, b) => b - a);
    dadosDescarte = dadosNormais.slice(0, descarte);
  }
  return {
    dados: dadosNormais,
    descarte: dadosDescarte,
    reroll: Reroll,
    total: total,
    critou: dadosNormais[0] >= (ameaca || lados),
  };
}

export function RolarDado(
  qtd: number,
  lados: number,
  mod: number,
  kh?: number,
  rerola?: "adv" | "des"
) {
  qtd = Math.max(qtd, 1);
  lados = Math.max(lados, 1);
  kh = kh !== undefined && kh > qtd ? qtd : kh;
  let dadosNormais = [];
  let dadosKh = [];
  let Reroll = [];
  let total = mod;
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
  if (kh) {
    dadosNormais.sort((a, b) => b - a);
    dadosKh = dadosNormais.slice(0, kh);
  }
}

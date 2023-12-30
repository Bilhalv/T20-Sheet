import Acao from "../Construtores/Acao";
export const TabelaAcoes: Acao[] = [
  {
    nome: "Agarrar",
    descricao: (
      <>
        Você segura uma criatura (por seu braço, sua roupa etc.). Uma criatura
        agarrada fica desprevenida e imóvel, sofre –2 nos testes de ataque e só
        pode atacar com armas leves. Ela pode se soltar com uma ação padrão,
        vencendo um teste de mano- bra oposto. Você só pode agarrar com um
        ataque desarmado ou arma natural e, enquanto agarra, fica com essa mão
        ou arma natural ocupada. Além disso, move-se metade do deslocamento
        normal, mas arrasta a criatura que estiver agarrando. Você pode soltá-la
        com uma ação livre. Você pode atacar uma criatura agarrada com sua mão
        livre. Se preferir, pode substituir um ataque por um teste de agarrar
        contra a criatura. Se vencer, causa dano de impacto igual a um ataque
        desarmado ou arma natural. Isso significa que você está esmagando ou
        sufocando o inimigo. Um personagem fazendo um ataque à distância contra
        um alvo envolvido na manobra agarrar tem 50% de chance de mirar no alvo
        errado!
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Derrubar",
    descricao: (
      <>
        Você deixa o alvo caído. Esta queda normalmente não causa dano. Se você
        vencer o teste oposto por 5 pontos ou mais, derruba o oponente com tanta
        força que também o empurra um quadrado em uma direção a sua escolha. Se
        isso o jogar além de um parapeito ou precipício, ele pode fazer um teste
        de Reflexos (CD 20) para se agarrar numa beirada.
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Desarmar",
    descricao: (
      <>
        Você derruba um item que a criatura esteja segurando. Normalmente o item
        cai no mesmo lugar em que o alvo está (a menos que o alvo esteja voando,
        sobre uma ponte etc.). Se você vencer o teste oposto por 5 pontos ou
        mais, derruba o item com tanta força que também o empurra um quadrado em
        uma direção a sua escolha.
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Empurrar",
    descricao: (
      <>
        Você empurra a criatura 1,5m. Para cada 5 pontos de diferença entre os
        testes, você empurra o alvo mais 1,5m. Você pode gastar uma ação de
        movimento para avançar junto com a criatura (até o limite do seu
        deslocamento).
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Quebrar",
    descricao: (
      <>
        Você atinge um item que a criatura esteja segurando. Veja adiante em
        “Quebrando Objetos”.
      </>
    ),
    tipo: "manobra",
  },
];

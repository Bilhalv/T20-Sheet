import Acao from "../../Construtores/Acao";
export const TabelaAcoes: Acao[] = [
  {
    nome: "Agarrar",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você segura uma criatura (por seu braço, sua roupa
          etc.). Uma criatura agarrada fica desprevenida e imóvel, sofre –2 nos
          testes de ataque e só pode atacar com armas leves. Ela pode se soltar
          com uma ação padrão, vencendo um teste de mano- bra oposto. Você só
          pode agarrar com um ataque desarmado ou arma natural e, enquanto
          agarra, fica com essa mão ou arma natural ocupada. Além disso, move-se
          metade do deslocamento normal, mas arrasta a criatura que estiver
          agarrando. Você pode soltá-la com uma ação livre. Você pode atacar uma
          criatura agarrada com sua mão livre. Se preferir, pode substituir um
          ataque por um teste de agarrar contra a criatura. Se vencer, causa
          dano de impacto igual a um ataque desarmado ou arma natural. Isso
          significa que você está esmagando ou sufocando o inimigo.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Um personagem fazendo um ataque à distância contra
          um alvo envolvido na manobra agarrar tem 50% de chance de mirar no
          alvo errado!
        </p>
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Derrubar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você deixa o alvo caído. Esta queda normalmente não
        causa dano. Se você vencer o teste oposto por 5 pontos ou mais, derruba
        o oponente com tanta força que também o empurra um quadrado em uma
        direção a sua escolha. Se isso o jogar além de um parapeito ou
        precipício, ele pode fazer um teste de Reflexos (CD 20) para se agarrar
        numa beirada.
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Desarmar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você derruba um item que a criatura esteja segurando.
        Normalmente o item cai no mesmo lugar em que o alvo está (a menos que o
        alvo esteja voando, sobre uma ponte etc.). Se você vencer o teste oposto
        por 5 pontos ou mais, derruba o item com tanta força que também o
        empurra um quadrado em uma direção a sua escolha.
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Empurrar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você empurra a criatura 1,5m. Para cada 5 pontos de
        diferença entre os testes, você empurra o alvo mais 1,5m. Você pode
        gastar uma ação de movimento para avançar junto com a criatura (até o
        limite do seu deslocamento).
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Quebrar",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você atinge um item que a criatura esteja segurando.
        Veja adiante em “Quebrando Objetos”.
      </>
    ),
    tipo: "manobra",
  },
  {
    nome: "Agredir",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você faz um ataque com uma arma corpo a corpo ou à
          distância.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Com uma arma corpo a corpo, você pode atacar
          qualquer inimigo dentro de seu alcance natural (1,5m para criaturas
          Pequenas e Médias ou um inimigo adjacente no mapa). Personagens
          maiores, ou usando certas armas, podem atacar mais longe. Você pode
          substituir um ataque corpo a corpo por uma manobra de combate (veja a
          seguir).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Com uma arma de ataque à distância, você pode atacar
          qualquer inimigo que consiga ver e que esteja no alcance da arma (ou
          até o dobro do alcance, sofrendo uma penalidade de –5).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;<i>Atirando em Combate Corpo a Corpo. </i>
          Quando faz um ataque à distância contra uma criatura em combate corpo
          a corpo, você sofre –5 no teste de ataque. Uma criatura está em
          combate corpo a corpo se estiver dentro do alcance natural de qualquer
          inimigo (incluindo você).
        </p>
      </>
    ),
    tipo: "padrao",
  },
  {
    nome: "Atropelar",
    tipo: "padrao",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você usa uma ação padrão durante um movimento para
        avançar pelo espaço ocupado por uma criatura (normalmente, você não pode
        fazer uma ação padrão durante um movimento; isto é uma exceção). A
        criatura pode lhe dar passagem ou resistir. Se der passagem, você avança
        pelo espaço dela; nenhum teste é necessário. Se resistir, faça um teste
        de manobra oposto; se você vencer, deixa a criatura caída e continua seu
        avanço. Se o alvo vencer, continua de pé e detém seu avanço. Atropelar é
        uma ação livre se tentada durante uma investida.
      </>
    ),
  },
  {
    nome: "Fintar",
    tipo: "padrao",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Faça um teste de Enganação oposto ao teste de Reflexos
        de uma criatura em alcance curto. Se você passar, ela fica desprevenida
        contra seu próximo ataque, mas apenas até o fim de seu próximo turno.
      </>
    ),
  },
  {
    nome: "Lançar uma Magia",
    tipo: "padrao",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;A maioria das magias exige uma ação padrão para ser
        executada.
      </>
    ),
  },
  {
    nome: "Preparar",
    tipo: "padrao",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Você prepara uma ação (padrão, de movimento ou
          livre) para realizar mais tarde, após seu turno, mas antes de seu
          turno na próxima rodada. Diga a ação que vai fazer e em quais
          circunstâncias (por exemplo, “disparar minha besta na primeira
          criatura que passar pela porta”). A qualquer momento antes de seu
          próximo turno, você pode fazer a ação preparada como uma reação a
          essas circunstâncias.
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Se, no seu próximo turno, você ainda não tiver
          realizado sua ação preparada, não pode mais realizá-la (embora possa
          preparar a mesma ação de novo).
        </p>
        <p>
          &nbsp;&nbsp;&nbsp;Pelo resto do combate, sua Iniciativa fica
          imediatamente acima da qual você fez a ação preparada.
        </p>
      </>
    ),
  },
  {
    nome: "Usar uma Habilidade ou Item Mágico",
    tipo: "padrao",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Algumas habilidades e itens mágicos, como poções,
        exigem uma ação padrão para serem usadas.
      </>
    ),
  },
  {
    nome: "Levantar-se",
    tipo: "movimento",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você se levanta de uma posição caída. Isso não provoca
        ataques de oportunidade.
      </>
    ),
  },
  {
    nome: "Manipular Item",
    tipo: "movimento",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Muitas vezes, manipular um item exige uma ação de
        movimento. Pegar um objeto em uma mochila, abrir ou fechar uma porta e
        atirar uma corda para alguém são ações de movimento.
      </>
    ),
  },
  {
    nome: "Mirar",
    tipo: "movimento",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você mira em um alvo que possa ver, dentro do alcance
        de sua arma. Isso anula a penalidade de –5 em testes de Pontaria
        realizados neste turno contra aquele alvo caso ele esteja engajado em
        combate corpo a corpo.
      </>
    ),
  },
  {
    nome: "Movimentar-se",
    tipo: "movimento",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você pode percorrer uma distância igual a seu
        deslocamento (tipicamente 9m para raças de tamanho Médio). Outros tipos
        de movimento, como nadar, escalar ou cavalgar, também usam esta ação.
      </>
    ),
  },
  {
    nome: "Sacar ou Guardar Item",
    tipo: "movimento",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Sacar ou guardar um item exige uma ação de movimento.
      </>
    ),
  },
  {
    nome: "Corrida",
    tipo: "completa",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você corre mais rapidamente que seu deslocamento
        normal. Veja a perícia Atletismo.
      </>
    ),
  },
  {
    nome: "Golpe de Misericórdia",
    tipo: "completa",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você desfere um golpe letal em um oponente adjacente e
        indefeso. Um golpe de misericórdia é um acerto crítico automático. Além
        de sofrer dano, a vítima tem uma chance de morrer instantaneamente. Esta
        chance é de 25% (1 em 1d4) para personagens e NPCs importantes e de 75%
        (1 a 3 em 1d4) para NPCs secundários.
      </>
    ),
  },
  {
    nome: "Investida",
    tipo: "completa",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Você avança até o dobro de seu deslocamento (e no
        mínimo 3m) em linha reta e, no fim do movimento, faz um ataque corpo a
        corpo. Você recebe +2 no teste de ataque, mas sofre –2 na Defesa até o
        seu próximo turno, porque sua guarda fica aberta. Você não pode fazer
        uma investida em terreno difícil. Durante uma investida, você pode fazer
        a manobra atropelar como uma ação livre (mas não pode atropelar e atacar
        o mesmo alvo).
      </>
    ),
  },
  {
    nome: "Lançar uma Magia",
    tipo: "completa",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Ao lançar magias com execução maior do que uma ação
        completa, você gasta uma ação completa a cada rodada.
      </>
    ),
  },
  {
    nome: "Atrasar",
    tipo: "livre",
    descricao: (
      <>
        <p>
          &nbsp;&nbsp;&nbsp;Escolhendo atrasar sua ação, você age mais tarde na
          ordem de Iniciativa, em relação à Iniciativa que rolou. Isto é o mesmo
          que reduzir sua Iniciativa voluntariamente pelo resto do combate.
          Quando sua nova Iniciativa chegar, você age normalmente. Você pode
          especificar este novo valor de Iniciativa ou apenas esperar até algum
          momento e então agir, fixando sua nova Iniciativa neste ponto. Atrasar
          é útil para ver o que seus amigos ou inimigos farão, antes de decidir
          o que você mesmo fará.
        </p>
        <ul>
          <li>
            &nbsp;&nbsp;&nbsp;<i>Limites para atrasar.</i> Você pode atrasar sua
            Iniciativa até –10 menos seu bônus de Iniciativa. Quando a contagem
            de Iniciativa chega a esse ponto, você deve agir ou abrir mão de
            qualquer ação na rodada. Por exemplo, um personagem com um bônus de
            Iniciativa +3 pode esperar até a contagem de Iniciativa chegar a
            –13. Nesse ponto, deve agir ou desistir de seu turno. Isso importa
            quando vários personagens atrasam suas ações.
          </li>
          <li>
            &nbsp;&nbsp;&nbsp;<i>Vários atrasos.</i> Se vários personagens estão
            atrasando suas ações, aquele com o maior bônus de Iniciativa (ou a
            maior Destreza, em caso de empate) tem a vantagem. Se dois ou mais
            personagens que estejam atrasando quiserem agir na mesma contagem de
            Iniciativa, aquele com o maior bônus age primeiro. Se dois ou mais
            personagens estão tentando agir um depois do outro, aquele com o
            maior bônus de Iniciativa tem o direito de agir depois.
          </li>
        </ul>
      </>
    ),
  },
  {
    nome: "Falar",
    tipo: "livre",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Em geral, falar é uma ação livre. Lançar magias ou
        usar habilidades de classe que dependem da voz não são ações livres. O
        mestre também pode limitar aquilo que você consegue falar durante uma
        rodada (vinte palavras são o limite padrão).
      </>
    ),
  },
  {
    nome: "Jogar-se no Chão",
    tipo: "livre",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Jogar-se no chão é uma ação livre. Você recebe os
        benefícios e penalidades normais por estar caído, mas normalmente não
        sofre dano ao se jogar no chão.
      </>
    ),
  },
  {
    nome: "Largar um Item",
    tipo: "livre",
    descricao: (
      <>
        &nbsp;&nbsp;&nbsp;Deixar cair um item que esteja segurando é uma ação
        livre. Mas deixar cair (ou jogar) um item com a intenção de acertar algo
        é uma ação padrão. E deixar cair (ou jogar) um item para que outra
        pessoa agarre é uma ação de movimento.
      </>
    ),
  },
];

import {
  Magia,
  aprimoramentos,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../Construtores/Magia";

export const TabelaMagias: Magia[] = [
  {
    nome: "Abençoar Alimentos",
    descricao:
      "Você purifica e abençoa uma porção de comida ou dose de bebida. Isso torna um alimento sujo, estragado ou envenenado próprio para consumo. Além disso, se for consumido até o final da duração, o alimento oferece 5 PV temporários ou 1 PM temporário (além de quaisquer bônus que já oferecesse). Bônus de alimentação duram um dia e cada personagem só pode receber um bônus de alimentação por dia.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Alimento para 1 criatura",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de alvos em +1",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para permanente, o alvo para 1 frasco com água e adiciona componente material (pó de prata no valor de T$ 5). Em vez do normal, cria um frasco de água benta.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Acalmar Animal",
    descricao:
      "O animal fica prestativo em relação a você. Ele não fica sob seu controle, mas percebe suas palavras e ações da maneira mais favorável possível. Você recebe +10 nos testes de Adestramento e Diplomacia que fizer contra o animal. Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e ele retorna à atitude que tinha antes (ou piorada, de acordo com o mestre). Se tratar bem o alvo, a atitude pode permanecer mesmo após o término da magia.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 animal",
    duracao: "Cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Muda o alcance para médio.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alvo para 1 monstro ou espírito com Inteligência 1 ou 2.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda o alvo para 1 monstro ou espírito. Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Adaga Mental",
    descricao:
      "Você manifesta e dispara uma adaga imaterial contra a mente do alvo, que sofre 2d6 pontos de dano psíquico e fica atordoado por uma rodada. Se passar no teste de resistência, sofre apenas metade do dano e evita a condição. Uma criatura só pode ficar atordoada por esta magia uma vez por cena.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Instantânea",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Você lança a magia sem gesticular ou pronunciar palavras (o que permite lançar esta magia de armadura) e a adaga se torna invisível. Se o alvo falhar no teste de resistência, não percebe que você lançou uma magia contra ele.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda a duração para um dia. Além do normal, você “finca” a adaga na mente do alvo. Enquanto a magia durar, você sabe a direção e localização do alvo, desde que ele esteja no mesmo mundo.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d6.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Alarme",
    descricao:
      "Você cria uma barreira protetora invisível que detecta qualquer criatura que tocar ou entrar na área protegida. Ao lançar a magia, você pode escolher quais criaturas podem entrar na área sem ativar seus efeitos. Alarme pode emitir um aviso telepático ou sonoro, decidido quando a magia é lançada. Um aviso telepático alerta apenas você, inclusive acordando-o se estiver dormindo, mas apenas se estiver a até 1km da área protegida. Um aviso sonoro alerta todas as criaturas em alcance longo.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Esfera com 9m de raio",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para pessoal. A área é emanada a partir de você.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Além do normal, você também percebe qualquer efeito de adivinhação que seja usado dentro da área ou atravesse a área. Você pode fazer um teste oposto de Misticismo contra quem usou o efeito; se passar, tem um vislumbre de seu rosto e uma ideia aproximada de sua localização (“três dias de viagem ao norte”, por exemplo).",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda a duração para um dia ou até ser descarregada e a resistência para Vontade anula. Quando um intruso entra na área, você pode descarregar a magia. Se o intruso falhar na resistência, ficará paralisado por 1d4 rodadas. Além disso, pelas próximas 24 horas você e as criaturas escolhidas ganham +10 em testes de Sobrevivência para rastrear o intruso.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Aliado Animal",
    descricao:
      "Você cria um vínculo mental com um animal prestativo em relação a você. O Aliado Animal obedece a você no melhor de suas capacidades, mesmo que isso arrisque a vida dele. Ele funciona como um parceiro veterano, de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, montaria ou perseguidor.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 animal prestativo",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alvo para 1 animal Minúsculo e a duração para 1 semana. Em vez do normal, o animal se desloca no melhor de suas capacidades até um local designado por você — em geral, para levar um item, carta ou similar. Quando o animal chega ao destino, fica esperando até o fim da magia, permitindo apenas que uma ou mais criaturas escolhidas por você se aproximem e peguem o que ele estiver carregando.",
      },
      {
        pm_a_mais: 7,
        descricao: "Muda o parceiro para mestre. Requer 3º círculo.",
      },
      {
        pm_a_mais: 12,
        descricao:
          "Muda o alvo para 2 animais prestativos. Cada animal funciona como um parceiro de um tipo diferente, e você pode receber a ajuda de ambos (mas ainda precisa seguir o limite de parceiros de acordo com o seu nível de personagem). Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Alterar Destino",
    descricao:
      "Sua mente visualiza todas as possibilidades de um evento, permitindo a você escolher o melhor curso de ação. Você pode rolar novamente um teste de resistência com um bônus de +10 ou um inimigo deve rolar novamente um ataque contra você com uma penalidade de –10.",
    execucao: enumExecucao.reacao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Instantânea",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Alterar Memória",
    descricao:
      "Você invade a mente do alvo e altera ou apaga suas memórias da última hora.",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Instantânea",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para pessoal e o alvo para área cone de 4,5m.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Você pode alterar ou apagar as memórias das últimas 24 horas.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Alterar Tamanho",
    descricao:
      "Esta magia aumenta ou diminui o tamanho de um item mundano em até três categorias (um objeto Enorme vira Pequeno, por exemplo). Você também pode mudar a consistência do item, deixando-o rígido como pedra ou flexível como seda (isso não altera sua RD ou PV, apenas suas propriedades físicas). Se lançar a magia num objeto de uma criatura involuntária, ela pode fazer um teste de Vontade para anulá-la.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 objeto",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo aumenta uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Força +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo diminui uma categoria de tamanho (seu equipamento se ajusta ao novo tamanho). O alvo também recebe Destreza +2. Um alvo involuntário pode fazer um teste de Fortitude para negar o efeito. Requer 3º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda o alcance para toque, o alvo para 1 criatura, a duração para permanente e a resistência para Fortitude anula. Em vez do normal, se falhar na resistência o alvo e seu equipamento têm seu tamanho mudado para Minúsculo. O alvo tem seu valor de Força reduzido a –5 e seus deslocamentos reduzidos a 3m. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Amarras Etéreas",
    descricao:
      "Três laços de energia surgem e se enroscam no alvo, deixando-o agarrado. A vítima pode tentar se livrar, gastando uma ação padrão para fazer um teste de Atletismo. Se passar, destrói um laço, mais um laço adicional para cada 5 pontos pelos quais superou a CD. Os laços também podem ser atacados e destruídos: cada um tem Defesa 10, 10 PV, RD 5 e imunidade a dano mágico. Se todos os laços forem destruídos, a magia é dissipada. Por serem feitos de energia, os laços afetam criaturas incorpóreas.",
    execucao: enumExecucao.padrao,
    alcance: "Médio",
    alvo: "1 criatura",
    duracao: "Cena",
    resistencia: "Reflexos anula",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o número de laços em um alvo a sua escolha em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Em vez do normal, cada laço é destruído automaticamente com um único ataque bem-sucedido; porém, cada laço destruído libera um choque de energia que causa 1d8+1 pontos de dano de essência na criatura amarrada. Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Amedrontar",
    descricao:
      "O alvo é envolvido por energias sombrias e assustadoras. Se falhar na resistência, fica apavorado por 1 rodada, depois abalado. Se passar, fica abalado por 1d4 rodadas.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 animal ou humanoide",
    duracao: "Cena",
    resistencia: "Vontade parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Alvos que falhem na resistência ficam apavorados por 1d4+1 rodadas, em vez de apenas 1.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o alvo para 1 criatura.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Afeta todos os alvos válidos a sua escolha dentro do alcance.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Âncora Dimensional",
    descricao:
      "O alvo é envolvido por um campo de força cor de esmeralda que impede qualquer movimento planar. Isso inclui magias de convocação (como Salto Dimensional e Teletransporte), viagens astrais e a habilidade incorpóreo.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 criatura ou objeto",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o efeito para criar um fio de energia cor de esmeralda que prende o alvo a um ponto no espaço dentro do alcance. O ponto precisa ser fixo, mas não precisa de nenhum apoio ou superfície (pode simplesmente flutuar no ar). O alvo não pode se afastar mais de 3m do ponto, nem fisicamente, nem com movimento planar. O fio possui 20 PV e redução de dano 20 (mas pode ser dissipado por efeitos que libertam criaturas, como o Julgamento Divino: Libertação do paladino).",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Como acima, mas em vez de um fio, cria uma corrente de energia, com 20 PV e redução de dano 40.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda o alvo para área de cubo de 9m, a duração para permanente e adiciona componente material (chave de esmeralda no valor de T$ 2.000). Em vez do normal, nenhum tipo de movimento planar pode ser feito para entrar ou sair da área.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda o alcance para médio, a área para esfera com 3m de raio e o alvo para criaturas escolhidas. Cria um fio de energia (veja acima) que prende todos os alvos ao centro da área.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Animar Objetos",
    descricao:
      "Você concede vida a objetos inanimados. Cada objeto se torna um parceiro sob seu controle. O tipo dele é escolhido da lista de tamanho e ele não conta em seu limite de parceiros. Com uma ação de movimento, você pode comandar mentalmente qualquer objeto animado dentro do alcance para que auxilie você ou outra criatura. Outros usos criativos para os objetos ficam a cargo do mestre. Objetos animados são construtos com valores de Força, Destreza e PV de acordo com seu tamanho. Todos os outros atributos são nulos, eles não têm valor de Defesa ou testes de resistência e falham automaticamente em qualquer teste oposto. Diferente de parceiros comuns, um objeto pode ser alvo de um ataque direto. Esta magia não afeta itens mágicos, nem objetos que estejam sendo carregados por outra criatura.",
    execucao: enumExecucao.padrao,
    alcance: "Médio",
    alvo: "Até 8 objetos Minúsculos ou Pequenos, 4 objetos Médios, 2 objetos Grandes ou 1 objeto Enorme",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao:
          "muda a duração para permanente e adiciona componente material (prataria no valor de T$ 1.000). Você pode ter um máximo de objetos animados igual à metade do seu nível. Estatísticas de objetos animados Minúsculo: For –3, Des 4, 5 PV; Assassino ou Combatente Iniciante. Pequeno: For –2, Des 2, 10 PV; Combatente ou Guardião Iniciante. Médio: For 0, Des 1, 20 PV; Combatente ou Guardião Veterano. Grande: For 2, Des 0, 40 PV; Fortão, Guardião ou Montaria (cavalo) Veterano. Enorme: For 4, Des –2, 60 PV; Fortão, Guardião ou Montaria (cavalo) Mestre. ",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Anular a Luz",
    descricao:
      "Esta magia cria uma onda de escuridão que causa diversos efeitos. Magias de até 3º círculo na área são dissipadas se você passar num teste de Religião contra a CD de cada uma. Seus aliados na área são protegidos por uma aura sombria e recebem +4 na Defesa até o fim da cena. Inimigos na área ficam enjoados por 1d4 rodadas (apenas uma vez por cena). Anular a Luz anula Dispersar as Trevas (este efeito tem duração instantânea).",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Área: esfera com 6m de raio",
    duracao: "Ver texto",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus na Defesa em +1.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda as magias dissipadas para até 4º círculo. Requer 4º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda as magias dissipadas para até 5º círculo. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Aparência Perfeita",
    descricao:
      "Esta magia lhe concede um rosto idealizado, porte físico garboso, voz melodiosa e olhar sedutor. Caso seu Carisma seja 5 ou mais, você recebe +2 neste atributo. Do contrário, ele se torna 5 (isso conta como um bônus). Além disso, você recebe +5 em Diplomacia e Enganação. Quando a magia acaba, quaisquer observadores percebem a mudança e tendem a suspeitar de você. Da mesma maneira, pessoas que o viram sob o efeito da magia sentirão que “algo está errado” ao vê-lo em condições normais. Quando a cena acabar, você pode gastar os PM da magia novamente como uma ação livre para mantê-la ativa. Este efeito não fornece PV ou PM adicionais.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Muda o alcance para toque e o alvo para 1 humanoide.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Aprisionamento",
    descricao:
      "Você cria uma prisão mágica para aprisionar uma criatura. Se falhar no teste de resistência, o alvo sofre o efeito da magia; se passar, fica imune a esta magia por uma semana. Enquanto estiver aprisionada, a criatura não precisa respirar e alimentar-se, e não envelhece. Magias de adivinhação não conseguem localizar ou perceber o alvo. Ao lançar a magia, você escolhe uma das seguintes formas de prisão. O componente material varia, mas todos custam T$ 1.000. Acorrentamento: o alvo é preso por correntes firmemente enraizadas no chão, que o mantém no lugar. O alvo fica paralisado e não pode se mover ou ser movido por qualquer meio. Componente Material: uma fina corrente de mitral. Contenção Mínima: o alvo diminui para 2 cm de altura e é preso dentro de uma pedra preciosa ou objeto semelhante. Luz passa através da pedra, permitindo que o alvo veja o lado de fora e seja visto, mas nada mais pode passar, nem por meio de teletransporte ou viagem planar. A pedra não pode ser quebrada enquanto o alvo estiver dentro. Componente Material: uma pedra preciosa, como um diamante ou rubi. Prisão Dimensional: o alvo é transportado para um semiplano protegido contra teletransporte e viagens planares. Pode ser um labirinto, uma gaiola, uma torre ou qualquer estrutura ou área confinada e pequena a sua escolha. Componente Material: uma representação em miniatura da prisão, feita de jade. Sepultamento: o alvo é sepultado nas profundezas da terra, em uma esfera mágica. Nada pode destruir ou atravessar a esfera, nem mesmo teletransporte ou viagens planares. Componente Material: um pequeno orbe de adamante. Sono Eterno: o alvo adormece e não pode ser acordado. Componente Material: fruta preparada com ervas soníferas raras. Quando a magia é lançada, você deve especificar uma condição que fará com que ela termine e solte o alvo. A condição pode ser tão específica ou elaborada quanto você quiser, mas deve ser possível de acontecer. As condições podem se basear no nome, identidade ou divindade padroeira de uma criatura, ou em ações ou qualidades observáveis, mas nunca em estatísticas intangíveis, como nível, classe ou pontos de vida. O mestre tem a palavra final sobre se uma condição é válida ou não.",
    execucao: enumExecucao.completa,
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Permanente",
    resistencia: "Vontade anula",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Área Escorregadia",
    descricao:
      "Esta magia recobre uma superfície com uma substância gordurosa e escorregadia. Criaturas na área devem passar na resistência para não cair. Nas rodadas seguintes, criaturas que tentem movimentar-se pela área devem fazer testes de Acrobacia para equilíbrio (CD 10). Área Escorregadia pode tornar um item escorregadio. Uma criatura segurando um objeto afetado deve passar na resistência para não deixar o item cair cada vez que usá-lo.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Área: quadrado de 3m ou 1 objeto",
    duracao: "Cena",
    resistencia: "Reflexos (veja texto)",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta a área em +1 quadrado de 1,5m.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a CD dos testes de Acrobacia para 15.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda a CD dos testes de Acrobacia para 20.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Arma Espiritual",
    descricao:
      "Você invoca a arma preferida de sua divindade (caso sua divindade possua uma), que surge flutuando a seu lado. Uma vez por rodada, quando você sofre um ataque corpo a corpo, pode usar uma reação para que a arma cause automaticamente 2d6 pontos de dano do tipo da arma — por exemplo, uma espada longa causa dano de corte — no oponente que fez o ataque. Esta magia se dissipa se você morrer.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, a arma o protege. Você recebe +1 na Defesa.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus na Defesa em +1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda a duração para sustentada. Além do normal, uma vez por rodada, você pode gastar uma ação livre para fazer a arma acertar automaticamente um alvo adjacente. Se a arma atacar, não poderá contra-atacar até seu próximo turno. Requer 2º círculo.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o tipo do dano para essência. Requer 2º círculo.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o dano causado pela arma em +1d6 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Invoca duas armas, permitindo que você contra-ataque (ou ataque, se usar o aprimoramento acima) duas vezes por rodada. Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Arma Mágica",
    descricao:
      "A arma é considerada mágica e fornece +1 nos testes de ataque e rolagens de dano (isso conta como um bônus de encanto). Caso você esteja empunhando a arma, pode usar seu atributo-chave de magias em vez do atributo original nos testes de ataque (não cumulativo com efeitos que somam este atributo).",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 arma empunhada",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
      {
        pm_a_mais: 2,
        descricao:
          "A arma causa +1d6 de dano de ácido, eletricidade, fogo ou frio, escolhido quando a magia é lançada. Este aprimoramento só pode ser usado uma vez.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda o bônus de dano do aprimoramento acima para +2d6.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 1,
  },
  {
    nome: "Armadura Arcana",
    descricao:
      "Esta magia cria uma película protetora invisível, mas tangível, fornecendo +5 na Defesa. Esse bônus é cumulativo com outras magias, mas não com bônus fornecido por armaduras.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para reação. Em vez do normal, você cria um escudo mágico que fornece +5 na Defesa contra o próximo ataque que sofrer (cumulativo com o bônus fornecido pelo efeito básico desta magia e armaduras).",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus na Defesa em +1.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a duração para um dia.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Armamento da Natureza",
    descricao:
      "Você fortalece uma arma mundana primitiva (sem custo em T$, como bordão, clava, funda ou tacape), uma arma natural ou um ataque desarmado. O dano da arma aumenta em um passo e ela é considerada mágica. Ao lançar a magia, você pode mudar o tipo de dano da arma (escolhendo entre corte, impacto ou perfuração).",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 arma (veja texto)",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Fornece +1 nos testes de ataque com a arma.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a execução para ação de movimento.",
      },
      {
        pm_a_mais: 3,
        descricao: "Aumenta o bônus nos testes de ataque em +1.",
      },
      {
        pm_a_mais: 5,
        descricao: "Aumenta o dano da arma em mais um passo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Assassino Fantasmagórico",
    descricao:
      "Usando os medos subconscientes do alvo, você cria uma imagem daquilo que ele mais teme. Apenas a própria vítima pode ver o Assassino Fantasmagórico com nitidez; outras criaturas presentes (incluindo o conjurador) enxergam apenas um espectro sombrio. Quando você lança a magia, o espectro surge adjacente a você e a vítima faz um teste de Vontade. Se ela passar, percebe que o espectro é uma ilusão e a magia é dissipada. Se falhar, acredita na existência do espectro, que então flutua 18m por rodada em direção à vítima, sempre no fim do seu turno. Ele é incorpóreo e imune a magias (exceto magias que dissipam outras). Se o espectro terminar seu turno adjacente à vítima, ela deve fazer um teste de Fortitude. Se passar, sofre 6d6 pontos de dano de trevas (este dano não pode reduzir o alvo a menos de 0 PV e não o deixa sangrando). Se falhar, sofre um colapso, ficando imediatamente com –1 PV e sangrando. O espectro persegue o alvo implacavelmente. Ele desaparece se o alvo ficar inconsciente ou se afastar além de alcance longo dele, ou se for dissipado.",
    execucao: enumExecucao.padrao,
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "Cena, até ser descarregada",
    resistencia: "Vontade anula, Fortitude parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Augúrio",
    descricao:
      "Esta magia diz se uma ação que você tomará em breve — no máximo uma hora no futuro — trará resultados bons ou ruins. O mestre rola 1d6 em segredo; com um resultado de 2 a 6, a magia funciona e você recebe uma das seguintes respostas: “felicidade” (a ação trará bons resultados); “miséria” (a ação trará maus resultados); “felicidade e miséria” (para ambos) ou “nada” (para ações que não trarão resultados bons ou ruins). Com um resultado 1, a magia falha e oferece o resultado “nada”. Não há como saber se esse resultado foi dado porque a magia falhou ou não. Lançar esta magia múltiplas vezes sobre o mesmo assunto gera sempre o primeiro resultado. Por exemplo, se o grupo está prestes a entrar em uma câmara, o augúrio dirá “felicidade” se a câmara contém um tesouro desprotegido, “miséria” se contém um monstro, “felicidade e miséria” se houver um tesouro e um monstro ou “nada” se a câmara estiver vazia.",
    execucao: enumExecucao.completa,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Instantânea",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao:
          "Muda a execução para 1 minuto. Em vez do normal, você pode consultar uma divindade, fazendo uma pergunta sobre um evento que acontecerá até um dia no futuro. O mestre rola a chance de falha; com um resultado de 2 a 6, você recebe uma resposta, desde uma simples frase até uma profecia ou enigma. Em geral, este uso sempre oferece pistas, indicando um caminho a tomar para descobrir a resposta que se procura. Numa falha você não recebe resposta alguma. Requer 3º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda a execução para 10 minutos e a duração para 1 minuto. Em vez do normal, você consulta uma divindade, podendo fazer uma pergunta por rodada, desde que ela possa ser respondida com “sim”, “não” ou “não sei” (embora poderosos, os deuses não são oniscientes). O mestre rola a chance de falha para cada pergunta. Em caso de falha, a resposta também é “não sei”. Requer 4º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao: "O mestre rola 1d12; a magia só falha em um resultado 1.",
      },
      {
        pm_a_mais: 12,
        descricao: "O mestre rola 1d20; a magia só falha em um resultado 1.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Aura Divina",
    descricao:
      "Você se torna um condutor da energia de sua divindade, emanando uma aura brilhante. Você e aliados devotos da mesma divindade ficam imunes a encantamento e recebem +10 na Defesa e em testes de resistência. Aliados não devotos da mesma divindade recebem +5 na Defesa e em testes de resistência. Inimigos que entrem na área devem fazer um teste de Vontade; em caso de falha, recebem uma condição a sua escolha entre esmorecido, debilitado ou lento até o fim da cena. O teste deve ser refeito cada vez que a criatura entrar novamente na área.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    resistencia: "Vontade parcial",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta os bônus na Defesa e em testes de resistência em +1.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Aviso",
    descricao:
      "Envia um aviso telepático para uma criatura, mesmo que não possa vê-la nem tenha linha de efeito. Escolha um: Alerta: o alvo recebe +5 em seu próximo teste de Iniciativa e de Percepção dentro da cena. Mensagem: o alvo recebe uma mensagem sua de até 25 palavras. Vocês devem ter um idioma em comum para o alvo poder entendê-lo. Localização: o alvo sabe onde você está naquele momento. Se você mudar de posição, ele não saberá.",
    execucao: enumExecucao.movimento,
    alcance: "Longo",
    alvo: "1 criatura",
    duracao: "Instantânea",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o alcance em um fator de 10.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Se escolher mensagem, o alvo pode enviar uma resposta de até 25 palavras para você até o fim de seu próximo turno.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Se escolher localização, muda a duração para cena. O alvo sabe onde você está mesmo que você mude de posição.",
      },
      {
        pm_a_mais: 3,
        descricao: "Aumenta o número de alvos em +1.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 1,
  },
  {
    nome: "Banimento",
    descricao:
      "Você expulsa uma criatura não nativa de Arton. Um alvo nativo de outro mundo (como muitos espíritos), é teletransportado de volta para um lugar aleatório de seu mundo de origem. Já um alvo morto-vivo tem sua conexão com as energias negativas rompidas, sendo reduzido a 0 PV. Se passar na resistência, em vez dos efeitos acima, o alvo fica enjoado por 1d4 rodadas. Se você tiver um ou mais itens que se oponham ao alvo de alguma maneira, a CD do teste de resistência aumenta em +2 por item. Por exemplo, se lançar a magia contra demônios do frio (vulneráveis a água benta e que odeiam luz e calor) enquanto segura um frasco de água benta e uma tocha acesa, a CD aumenta em +4. O mestre decide se determinado item é forte o bastante contra a criatura para isso.",
    execucao: enumExecucao.outra,
    alcance: "Curto",
    alvo: "1 criatura",
    duracao: "Instantânea",
    resistencia: "Vontade parcial",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao:
          "Muda a resistência para nenhum. Em vez do normal, devolve automaticamente uma criatura conjurada para seu plano de origem.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Barragem elemental de Vectorius",
    descricao:
      "Criada pelo arquimago Vectorius, esta magia produz quatro esferas, de ácido, eletricidade, fogo e frio, que voam até um ponto a sua escolha. Quando atingem o ponto escolhido, explodem causando 6d6 pontos de dano de seu respectivo tipo numa área com 12m de raio. Um teste de Reflexos reduz o dano à metade. Você pode mirar cada esfera em uma criatura ou ponto diferente. Uma criatura ao alcance da explosão de mais de uma esfera deve fazer um teste de resistência para cada uma. Além disso, as esferas causam os seguintes efeitos em criaturas que falharem em seus testes de resistência: • Ácido: vulnerável até o fim da cena. • Elétrica: atordoado por 1 rodada (apenas uma vez por cena). • Fogo: em chamas. • Frio: lento até o fim da cena",
    execucao: enumExecucao.padrao,
    alcance: "Longo",
    alvo: "Efeito",
    duracao: "Instantânea",
    resistencia: "Reflexos parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao: "Aumenta o dano de cada esfera em +2d6.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda o tipo de dano de todas as esferas para essência.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Bênção",
    descricao:
      "Abençoa seus aliados, que recebem +1 em testes de ataque e rolagens de dano. Bênção anula Perdição.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Aliados",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alvo para 1 cadáver e a duração para 1 semana. O cadáver não se decompõe nem pode ser transformado em morto-vivo.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Bola de Fogo",
    descricao:
      "Cria uma poderosa explosão que causa dano de fogo em uma área de 6m de raio. Um teste de Reflexos reduz o dano à metade.",
    execucao: enumExecucao.padrao,
    alcance: "Médio",
    alvo: "Área",
    duracao: "Instantânea",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +2d6.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "muda a área para efeito de esfera flamejante com tamanho Médio e a duração para cena. Em vez do normal, cria uma esfera flamejante com 1,5m de diâmetro que causa 3d6 pontos de dano a qualquer criatura no mesmo espaço. Você pode gastar uma ação de movimento para fazer a esfera voar 9m em qualquer direção. Ela é imune a dano, mas pode ser apagada com água. Uma criatura só pode sofrer dano da esfera uma vez por rodada.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "muda a duração para um dia ou até ser descarregada. Em vez do normal, você cria uma pequena pedra flamejante, que pode detonar como uma reação, descarregando a magia. A pedra pode ser usada como uma arma de arremesso com alcance curto. Uma vez detonada, causa o dano da magia numa área de esfera com 6m de raio.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Buraco Negro",
    descricao:
      "Esta magia cria um vácuo capaz de sugar tudo nas proximidades. Escolha um espaço desocupado para o buraco negro. No início de cada um de seus três turnos seguintes, todas as criaturas a até alcance longo do buraco negro, incluindo você, devem fazer um teste de Fortitude. Em caso de falha, ficam caídas e são puxadas 30m na direção do buraco. Objetos soltos também são puxados. Criaturas podem gastar uma ação de movimento para se segurar em algum objeto fixo, recebendo +2 em seus testes de resistência. Criaturas e objetos que iniciem seu turno no espaço do buraco negro devem gastar uma ação de movimento e fazer um teste de Fortitude. Se passarem, podem escapar se arrastando (deslocamento de 1,5m) para longe dele. Se falharem, perdem a ação (mas podem gastar outra para tentar novamente). Se terminarem seu turno no espaço do buraco negro, são sugadas, desaparecendo para sempre. Não se conhece o destino das coisas sugadas pelo buraco negro. Alguns estudiosos sugerem que são enviadas para outros mundos — provavelmente Sombria, reino da deusa Tenebra.",
    execucao: enumExecucao.completa,
    alcance: "Longo",
    alvo: "Buraco negro",
    duracao: "3 rodadas",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao: "Muda o efeito para que você não seja afetado.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 5,
  },
  {
    nome: "Caminhos da Natureza",
    descricao:
      "Invoca espíritos da natureza para abrir caminho. As criaturas afetadas recebem deslocamento +3m e ignoram penalidades por terreno difícil em terrenos naturais.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Criaturas escolhidas",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao:
          "Muda o alcance para pessoal e o alvo para você. Em vez do normal, você recebe +5 em testes de Sobrevivência para se orientar.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, a CD para rastrear os alvos em terreno natural aumenta em +10.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus de deslocamento em +3m.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Campo Antimagia",
    descricao:
      "Você é cercado por uma barreira invisível com 3m de raio que o acompanha. Qualquer habilidade mágica ou item mágico que entre na área da barreira é suprimida enquanto estiver lá. Criaturas convocadas que entrem em um Campo Antimagia desaparecem. Elas reaparecem na mesma posição quando a duração do Campo termina — supondo que a duração da magia que as convocou ainda não tenha terminado. Criaturas mágicas ou imbuídas com magia durante sua criação não são diretamente afetadas pelo Campo Antimagia. Entretanto, como qualquer criatura, não poderão usar magias ou habilidades mágicas dentro dele. Uma magia que dissipa outras não dissipa um Campo Antimagia, e dois Campos na mesma área não se neutralizam. Artefatos e deuses maiores não são afetados por um Campo Antimagia.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Sustentada",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Campo de Força",
    descricao:
      "Cria uma película protetora sobre você, concedendo 30 pontos de vida temporários.",
    execucao: enumExecucao.padrao,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para reação e a duração para instantânea. Em vez do normal, você recebe RD 30 contra o próximo dano que sofrer.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda os PV temporários ou a RD para 50. Requer 3º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao: "Muda os PV temporários ou a RD para 70. Requer 4º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda o alcance para curto, o alvo para outra criatura ou objeto Enorme ou menor e a duração para sustentada. Em vez do normal, cria uma esfera imóvel e tremeluzente ao redor do alvo. Nenhuma criatura, objeto ou efeito de dano pode passar pela esfera, embora criaturas possam respirar normalmente. Criaturas na área podem fazer um teste de Reflexos para evitar serem aprisionadas e sempre que você se concentrar. Requer 4º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Como o aprimoramento acima, mas tudo dentro da esfera fica praticamente sem peso. Uma vez por rodada, você pode gastar uma ação livre para flutuar a esfera e seu conteúdo 9m em uma direção. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Camuflagem ilusória",
    descricao:
      "O alvo fica com sua imagem nublada, como se vista através de um líquido, recebendo os efeitos de camuflagem leve.",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Cena",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao:
          "Muda a duração para sustentada. A imagem do alvo fica mais distorcida, aumentando a chance de falha da camuflagem leve para 50%.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Chuva de Meteoros",
    descricao:
      "Meteoros caem dos céus, devastando a área afetada. Criaturas na área sofrem 15d6 pontos de dano de impacto, 15d6 pontos de dano de fogo e ficam caídas e presas sob os escombros (agarradas). Uma criatura que passe no teste de resistência sofre metade do dano total e não fica caída e agarrada. Uma criatura agarrada pode escapar gastando uma ação padrão e passando em um teste de Atletismo. Toda a área afetada fica coberta de escombros, sendo considerada terreno difícil, e imersa numa nuvem de poeira (camuflagem leve). Esta magia só pode ser utilizada a céu aberto.",
    execucao: enumExecucao.completa,
    alcance: "Longo",
    alvo: "Quadrado com 18m de lado",
    duracao: "Instantânea",
    resistencia: "Reflexos parcial",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o número de meteoros que atingem a área, o que aumenta o dano em +2d6 de impacto e +2d6 de fogo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Círculo da Justiça",
    descricao:
      "Também conhecida como Lágrimas de Hyninn, esta magia é usada em tribunais e para proteger áreas sensíveis. Criaturas na área sofrem –10 em testes de Acrobacia, Enganação, Furtividade e Ladinagem e não podem mentir deliberadamente — mas podem tentar evitar perguntas que normalmente responderiam com uma mentira (sendo evasivas ou cometendo omissões, por exemplo). Uma criatura que passe na resistência tem as penalidades reduzidas para –5 e pode mentir.",
    execucao: enumExecucao.completa,
    alcance: "Curto",
    alvo: "Esfera com 9m de raio",
    duracao: "1 dia",
    resistencia: "Vontade parcial",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para ação padrão, o alcance para pessoal, o alvo para você, a duração para cena e a resistência para nenhuma. Em vez do normal, qualquer criatura ou objeto invisível em alcance curto se torna visível. Isso não dissipa o efeito mágico; se sair do seu alcance, a criatura ou objeto voltam a ficar invisíveis.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda a penalidade nas perícias para –10 (se passar na resistência) e –20 (se falhar). Requer 4º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda a duração para permanente e adiciona componente material (balança de prata no valor de T$ 5.000).",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Círculo da Restauração",
    descricao:
      "Você evoca um círculo de luz que emana uma energia poderosa. Qualquer criatura viva que termine o turno dentro do círculo recupera 3d8+3 PV e 1 PM. Mortos-vivos e criaturas que sofrem dano por luz perdem PV e PM na mesma quantidade. Uma criatura pode recuperar no máximo 5 PM por dia com esta magia.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "Esfera com 3m de raio",
    duracao: "5 rodadas",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta a regeneração de PV em 1d8+1.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Cólera de Azgher",
    descricao:
      "Você cria um fulgor dourado e intenso. Criaturas na área ficam cegas por 1d4 rodadas e em chamas, e sofrem 10d6 pontos de dano de fogo (mortos-vivos sofrem 10d8 pontos de dano). Uma criatura que passe no teste de resistência não fica cega nem em chamas e sofre metade do dano.",
    execucao: enumExecucao.padrao,
    alcance: "Médio",
    alvo: "Esfera com 6m de raio",
    duracao: "Instantânea",
    resistencia: "Reflexos parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +2d6 (+2d8 contra mortos-vivos).",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta a área em +6m de raio.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "A luz purificadora do Deus-Sol dissipa todas as magias de necromancia ativas na área. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Coluna de Chamas",
    descricao:
      "Um pilar de fogo sagrado desce dos céus, causando 6d6 pontos de dano de fogo mais 6d6 pontos de dano de luz nas criaturas e objetos livres na área.",
    execucao: enumExecucao.padrao,
    alcance: "Longo",
    alvo: "Cilindro com 3m de raio e 30m de altura",
    duracao: "Instantânea",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o dano de fogo em +1d6.",
      },
      {
        pm_a_mais: 1,
        descricao: "Aumenta o dano de luz em +1d6.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Comando",
    descricao:
      "Você dá uma ordem irresistível, que o alvo deve ser capaz de ouvir (mas não precisa entender). Se falhar na resistência, ele deve obedecer ao comando em seu próprio turno da melhor maneira possível. Escolha um dos efeitos: Fuja, Largue, Pare, Senta, Venha.",
    execucao: enumExecucao.padrao,
    alcance: "Curto",
    alvo: "1 humanoide",
    duracao: "1 rodada",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Muda o alvo para 1 criatura.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta a quantidade de alvos em +1.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Compreensão",
    descricao:
      "Essa magia lhe confere compreensão sobrenatural. Você pode tocar um texto e entender as palavras mesmo que não conheça o idioma. Se tocar numa criatura inteligente, pode se comunicar com ela mesmo que não tenham um idioma em comum. Se tocar uma criatura não inteligente, como um animal, pode perceber seus sentimentos. Você também pode gastar uma ação de movimento para ouvir os pensamentos de uma criatura tocada (você “ouve” o que o alvo está pensando), mas um alvo involuntário tem direito a um teste de Vontade para proteger seus pensamentos e evitar este efeito.",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 criatura ou texto",
    duracao: "Cena",
    resistencia: "Vontade anula (veja descrição)",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Muda o alcance para curto.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas. Você pode entender todas as criaturas afetadas, mas só pode ouvir os pensamentos de uma por vez.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alvo para 1 criatura. Em vez do normal, pode vasculhar os pensamentos do alvo para extrair informações. O alvo tem direito a um teste de Vontade para anular este efeito. O mestre decide se a criatura sabe ou não a informação que você procura. Requer 2º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para pessoal e o alvo para você. Em vez do normal, você pode falar, entender e escrever qualquer idioma. Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 1,
  },
  {
    nome: "Comunhão com a Natureza",
    descricao:
      "Após uma breve união com a natureza local, você obtém informações e intuições sobre a região em que está, numa distância equivalente a um dia de viagem. Você recebe 6d4 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia em áreas naturais, você pode gastar 2d4 (mais 2d4 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado rolado como bônus no teste. A magia termina se você ficar sem dados.",
    execucao: enumExecucao.completa,
    alcance: "Pessoal",
    alvo: "Você",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para 1 minuto e a duração para instantânea. Em vez do normal, você descobre 1d4+1 informações sobre os seguintes temas: terreno, animais, vegetais, minerais, cursos d’água e presença de criaturas antinaturais numa região natural em que você esteja. Você pode, por exemplo, descobrir a quantidade de cavernas (terreno), se uma planta rara existe (vegetais) e se há mortos-vivos (criaturas antinaturais) na região.",
      },
      {
        pm_a_mais: 3,
        descricao: "Aumenta o número de dados de auxílio em +2.",
      },
      {
        pm_a_mais: 4,
        descricao: "Muda o tipo dos dados de auxílio para d6.",
      },
      {
        pm_a_mais: 8,
        descricao: "Muda o tipo dos dados de auxílio para d8.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Conceder Milagre",
    descricao:
      "Você transfere um pouco de seu poder divino a outra criatura. Escolha uma magia de até 2º círculo que você conheça; o alvo pode lançar essa magia uma vez, sem pagar o custo dela em PM (aprimoramentos podem ser usados, mas o alvo deve gastar seus próprios PM). Você sofre uma penalidade de –3 PM até que o alvo lance a magia.",
    execucao: enumExecucao.padrao,
    alcance: "Toque",
    alvo: "1 criatura",
    duracao: "Permanente até ser descarregada",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao:
          "Muda o círculo da magia concedida para 3º e a penalidade de PM para –6.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Concentração de Combate",
    descricao:
      "Você amplia sua percepção, antecipando movimentos dos inimigos e achando brechas em sua defesa. Quando faz um teste de ataque, você rola dois dados e usa o melhor resultado.",
    execucao: enumExecucao.livre,
    alcance: "pessoal",
    alvo: "você",
    duracao: "1 rodada",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Muda a execução para padrão e a duração para cena. Requer 2º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Além do normal, ao atacar você, um inimigo deve rolar dois dados e usar o pior resultado. Requer 3º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda a execução para padrão, o alcance para curto, o alvo para criaturas escolhidas e a duração para cena. Requer 4º círculo.",
      },
      {
        pm_a_mais: 14,
        descricao:
          "Muda a execução para padrão e a duração para um dia. Além do normal, você recebe um sexto sentido que o avisa de qualquer perigo ou ameaça. Você fica imune às condições surpreendido e desprevenido e recebe +10 na Defesa e Reflexos. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Condição",
    descricao:
      "Pela duração da magia, você sabe a posição e status (PV atuais, se estão com uma condição ou sob efeito de magia...) dos alvos. Depois de lançada, a distância dos alvos não importa — a magia só deixa de detectar um alvo se ele morrer ou for para outro plano.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "até 5 criaturas",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 1,
        descricao: "Muda a duração para um dia.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Conjurar Elemental",
    descricao:
      "Esta magia transforma uma porção de um elemento inerte em uma criatura elemental Grande do tipo do elemento alvo. Por exemplo, lançar esta magia numa fogueira ou tocha cria um elemental do fogo. Você pode criar elementais do ar, água, fogo e terra com essa magia. O elemental obedece a todos os seus comandos e pode funcionar como um parceiro do tipo destruidor (cuja habilidade custa apenas 2 PM para ser usada) e mais um tipo entre os indicados na lista abaixo, ambos mestres. O elemental auxilia apenas você e não conta em seu limite de parceiros. Ar: assassino, perseguidor ou vigilante. Dano de eletricidade. Água: ajudante, guardião ou médico. Dano de frio. Fogo: atirador, combatente ou fortão. Dano de fogo. Terra: combatente, guardião ou montaria. Dano de impacto.",
    execucao: enumExecucao.completa,
    alcance: "médio",
    alvo: "parceiro elemental",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao:
          "O elemental muda para Enorme e recebe dois tipos de parceiro indicados no seu elemento.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Você convoca um elemental de cada tipo. Quando lança a magia, você pode escolher se cada elemental vai auxiliar você ou um aliado no alcance. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Conjurar Monstro",
    descricao:
      "Você conjura um monstro Pequeno que ataca seus inimigos. Você escolhe a aparência do monstro e o tipo de dano que ele pode causar, entre corte, impacto e perfuração. No entanto, ele não é uma criatura real, e sim um construto feito de energia. Se for destruído, ou quando a magia acaba, desaparece com um brilho, sem deixar nada para trás. Você só pode ter um monstro conjurado por esta magia por vez. O monstro surge em um espaço desocupado a sua escolha dentro do alcance e age no início de cada um de seus turnos, a partir da próxima rodada. O monstro tem deslocamento 9m e pode fazer uma ação de movimento por rodada. Você pode gastar uma ação padrão para dar uma das seguintes ordens a ele. Mover: o monstro se movimenta o dobro do deslocamento nessa rodada. Atacar: o monstro causa 2d4+2 pontos de dano a uma criatura adjacente. Lançar Magia: o monstro pode servir como ponto de origem para uma magia lançada por você com execução de uma ação padrão ou menor. Ele pode descarregar um Toque Chocante em um inimigo distante, ou mesmo “cuspir” uma Bola de Fogo! Você gasta PM normalmente para lançar a magia. Outros usos criativos para monstros conjurados ficam a critério do mestre. O monstro não age sem receber uma ordem. Para efeitos de jogo, o monstro conjurado tem For 2, Des 3 e todos os outros atributos nulos. Ele tem Defesa igual a sua, 20 pontos de vid e usa o seu bônus para teste de Reflexos. Ele é imune a efeitos que pedem um teste de Fortitude ou Vontade.",
    execucao: enumExecucao.completa,
    alcance: "curto",
    alvo: "1 criatura conjurada",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "O monstro ganha deslocamento de escalada ou natação igual ao seu deslocamento terrestre.",
      },
      {
        pm_a_mais: 1,
        descricao: "Aumenta o deslocamento do monstro em +3m.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o tipo de dano do ataque do monstro para ácido, fogo, frio ou eletricidade.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta os PV do monstro em +10 para cada categoria de tamanho a partir de Pequeno.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o tamanho do monstro para Médio. Ele tem For 4, Des 3, 45 PV, deslocamento 12m e seu ataque causa 2d6+6 pontos de dano.",
      },
      {
        pm_a_mais: 2,
        descricao: "O monstro ganha resistência 5 contra dois tipos de dano.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "o monstro ganha uma nova ordem: Arma de Sopro. Para dar essa ordem você gasta 1 PM, e faz o monstro causar o dobro de seu dano de ataque em um cone de 6m a partir de si (Reflexos reduz à metade).",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Aumenta o tamanho do monstro para Grande. Ele tem For 7, Des 2, 75 PV, deslocamento 12m e seu ataque causa 4d6+10 pontos de dano. Requer 2º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "O monstro ganha deslocamento de voo igual ao dobro do deslocamento.",
      },
      {
        pm_a_mais: 9,
        descricao: "O monstro ganha imunidade contra dois tipos de dano.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Aumenta o tamanho do monstro para Enorme. Ele tem For 11, Des 1, 110 PV, deslocamento 15m e seu ataque causa 4d8+15 pontos de dano. Requer 4º círculo.",
      },
      {
        pm_a_mais: 14,
        descricao:
          "Aumenta o tamanho do monstro para Colossal. Ele tem For 15, Des 0, 180 PV, deslocamento 15m e seu ataque causa 4d12+20 pontos de dano. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Conjurar Mortos-Vivos",
    descricao:
      "Você conjura seis esqueletos capangas de tamanho Médio feitos de energia negativa em espaços desocupados dentro do alcance. Você pode gastar uma ação de movimento para fazer os mortos-vivos andarem (eles têm deslocamento 9m) ou uma ação padrão para fazê-los causar dano a criaturas adjacentes (1d6+2 pontos de dano de trevas cada). Os esqueletos têm For 2, Des 2, Defesa 18 e todos os outros atributos nulos; eles têm 1 PV e falham automaticamente em qualquer teste de resistência ou oposto, mas são imunes a atordoamento, dano não letal, doença, encantamento, fadiga, frio, ilusão, paralisia, sono e veneno. Eles desaparecem quando são reduzidos a 0 PV ou no fim da cena. Os mortos-vivos não agem sem receber uma ordem. Usos criativos para capangas fora de combate ficam a critério do mestre.",
    execucao: enumExecucao.completa,
    alcance: "curto",
    alvo: "6 mortos-vivos",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de mortos-vivos conjurados em +1.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Em vez de esqueletos, conjura carnificina. Requer 3º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "em vez de esqueletos, conjura sombras. Requer 4º círculo. Carniçal: como esqueletos, mas têm For 3, Des 3, Defesa 27 e causam 1d8+3 pontos de dano de trevas mais perda de 1d8 PV por veneno. Além disso, criaturas atingidas por um carniçal devem passar num teste de Fortitude ou ficam paralisadas por 1 rodada. Uma criatura que passe no teste de resistência fica imune à paralisia dos carniçais por um dia. Sombra: como esqueletos, mas têm Des 4, Defesa 35, a habilidade incorpóreo e causam 2d10 pontos de dano de trevas. Além disso, criaturas vivas atingidas por uma sombra devem passar num teste de Fortitude ou perdem 1d4 PM. Sombras perdem a habilidade incorpóreo quando expostas à luz do sol.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 2,
  },
  {
    nome: "Consagrar",
    descricao:
      "Você enche a área com energia positiva. Pontos de vida curados por efeitos de luz são maximizados dentro da área. Isso também afeta dano causado em mortos-vivos por esses efeitos. Por exemplo, Curar Ferimentos cura automaticamente 18 PV. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Consagrar anula Profanar.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "esfera com 9m de raio",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, mortos-vivos na área sofrem –2 em testes e Defesa.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta as penalidades para mortos-vivos em –1.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Contato Extraplanar",
    descricao:
      "Sua mente viaja até outro plano de existência, onde entra em contato com seres extraplanares como gênios e demônios. Você firma um contrato com uma dessas entidades para que o auxilie durante o dia, em troca de se alimentar de seu mana. Quando a magia é lançada, você recebe 6d6 dados de auxílio. Enquanto a magia durar, sempre que for realizar um teste de perícia, você pode gastar 1d6 (mais 1d6 para cada círculo de magias acima do 3º que puder lançar) e adicionar o resultado como bônus no teste. No entanto, sempre que rolar um “6” num desses dados, a entidade “suga” 1 PM de você. A magia termina se você gastar todos os dados, ficar sem PM ou no fim do dia (o que acontecer primeiro).",
    execucao: enumExecucao.completa,
    alcance: "pessoal",
    alvo: "você",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de dados de auxílio em +1.",
      },
      {
        pm_a_mais: 8,
        descricao:
          "Muda os dados de auxílio para d12. Sempre que rolar um resultado 12 num desses dados, a entidade “suga” 2 PM de você. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Controlar a Gravidade",
    descricao:
      "Você controla os efeitos da gravidade dentro da área. Ao lançar a magia, escolha um dos efeitos abaixo. Enquanto a magia durar, você pode gastar uma ação padrão para mudar o efeito.\n\n- Aumentar: no início de seus turnos, cada criatura na área deve fazer um teste de Atletismo. Se passar, fica fatigada. Se falhar, fica fatigada e caída.\n\n- Inverter: inverte a gravidade da área, fazendo com que criaturas e objetos “caiam” para cima, atingindo o topo (12m) em uma rodada. Se um obstáculo (como um teto) impedir o movimento das criaturas, elas sofrem 1d6 pontos de dano de impacto para cada 1,5m de “queda”. Elas podem então se levantar e caminhar no obstáculo, de cabeça para baixo. Se não houver obstáculo, as criaturas e objetos ficam flutuando no topo da área afetada, sem poder sair do lugar. Criaturas voadoras podem se movimentar normalmente. Alguém adjacente a algo que possa agarrar tem direito a um teste de Reflexos para evitar a “queda”. A criatura deve permanecer presa pela duração da magia; caso contrário, “cairá”.\n\n- Reduzir: criaturas ou objetos livres Médios ou menores flutuam para cima e para baixo conforme sua vontade, com deslocamento de voo 6m. Criaturas na área recebem +20 em testes de Atletismo para escalar e saltar. Uma criatura levitando fica instável, sofrendo –2 em testes de ataque.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "cubo de 12m de lado",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Controlar Água",
    descricao:
      "Você controla os movimentos e comportamentos da água. Ao lançar a magia, escolha um dos efeitos abaixo.\n\n- Congelar: toda a água mundana na área é congelada. Criaturas nadando na área ficam imóveis; escapar exige gastar uma ação padrão e passar num teste de Atletismo ou Acrobacia.\n\n- Derreter: gelo mundano na área vira água e a magia termina. A critério do mestre, isso pode criar terreno difícil.\n\n- Enchente: eleva o nível da água mundana na área em até 4,5m. A sua escolha, muda área para alvo: uma embarcação. O alvo recebe +3m em seu deslocamento pela duração do efeito.\n\n- Evaporar: toda a água e gelo mundano na área evaporam instantaneamente e a magia termina. Elementais da água, plantas monstruosas e criaturas com imunidade a frio na área sofrem 10d8 pontos de dano de fogo; outras criaturas vivas recebem metade desse dano (Fortitude reduz à metade).\n\n- Partir: diminui o nível de toda água mundana na área em até 4,5m. Em um corpo d’água raso, isso abre um caminho seco, que pode ser atravessado a pé. Em um corpo d’água profundo, cria um redemoinho que pode prender barcos (um teste de Pilotagem permite ao piloto livrar a embarcação). Elementais da água na área ficam lentos.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "esfera com 30m de raio",
    duracao: "cena",
    resistencia: "veja texto",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +2d8.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Controlar Fogo",
    descricao:
      "Você pode criar, moldar, mover ou extinguir chamas e emanações de calor. Ao lançar a magia, escolha um dos efeitos.\n\n- Chamejar: o alvo é armas escolhidas. Elas causam +1d6 de dano de fogo. Também afeta armas naturais e ataques desarmados.\n\n- Esquentar: o alvo é 1 objeto, que começa a esquentar. Ele sofre 1d6 pontos de dano de fogo por rodada e causa o mesmo dano a qualquer criatura que o esteja segurando ou vestindo. A critério do mestre, o objeto ou a criatura vestindo-o também podem ficar em chamas. Uma criatura pode gastar uma ação completa para resfriar o objeto (jogando areia ou se jogando numa fonte de água próxima, por exemplo) e cancelar o efeito da magia.\n\n- Extinguir: o alvo é 1 chama de tamanho Grande ou menor, que é apagada. Isso cria uma nuvem de fumaça que ocupa uma esfera com 3m de raio centrada onde estava a chama. Dentro da fumaça, criaturas têm camuflagem leve.\n\n- Modelar: o alvo é 1 chama de tamanho Grande ou menor. A cada rodada, você pode gastar uma ação livre para movimentá-la 9m em qualquer direção. Se atravessar o espaço ocupado por uma criatura, causa 2d6 pontos de dano de fogo. Uma criatura só pode receber dano dessa maneira uma vez por rodada.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "veja texto",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para sustentada e a resistência para Reflexos reduz à metade. Em vez do normal, você deve escolher o seguinte efeito.\n\n- Labaredas: a cada rodada, você pode gastar uma ação de movimento para projetar uma labareda, acertando um alvo em alcance curto a partir da chama. O alvo sofre 4d6 pontos de dano de fogo (Reflexos reduz à metade).",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d6 (exceto do efeito chamejar).",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda o alvo para 1 criatura composta principalmente por fogo, lava ou magma (como um elemental do fogo) e a resistência para Fortitude parcial. Em vez do normal, se a criatura falhar no teste de resistência, é reduzida a 0 PV. Se passar, sofre 5d6 pontos de dano.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Controlar Madeira",
    descricao:
      "Você molda, retorce, altera ou repele madeira. Se lançar esta magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Ao lançar a magia, escolha.\n\n- Fortalecer: deixa o alvo mais resistente. Armas têm seu dano aumentado em um passo. Escudos têm seu bônus de Defesa aumentado em +2 (isso é uma melhoria no item, portanto é cumulativa com outras magias). Esses e outros itens de madeira recebem +5 na RD e dobram seus PV.\n\n- Modelar: muda a forma do alvo. Pode transformar um galho em espada, criar uma porta onde antes havia apenas uma parede, transformar um tronco em uma caixa... Mas não pode criar mecanismos complexos (como uma besta) ou itens consumíveis.\n\n- Repelir: o alvo é repelido por você. Se for uma arma, ataques feitos com ela contra você falham automaticamente. Se for uma porta ou outro objeto que possa ser aberto, ele vai se abrir quando você se aproximar, mesmo que esteja trancado. Um objeto que vá atingi-lo, como uma carroça, tronco ou barril, vai desviar ou parar adjacente a você, sem lhe causar dano. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.\n\n- Retorcer: estraga o alvo. Uma porta retorcida emperra (exigindo um teste de Força contra CD 25 para ser aberta). Armas e itens retorcidos impõem –5 em testes de perícia. Escudos retorcidos deixam de oferecer bônus (mas ainda impõem penalidades). Um barco retorcido começa a afundar e naufraga ao final da cena. Os efeitos de regras em outros objetos de madeira ficam a cargo do mestre.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 objeto de madeira Grande ou menor",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alcance para pessoal, o alvo para você e a duração para um dia. Você e seu equipamento se transformam em uma árvore de tamanho Grande. Nessa forma, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Se for atacado nessa forma, a magia é dissipada. Um teste de Sobrevivência (CD 30) revela que você não é uma árvore verdadeira.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda o alvo para área de quadrado com 9m de lado e a duração para cena. Em vez do normal, qualquer vegetação na área fica rígida e afiada. A área é considerada terreno difícil e criaturas que andem nela sofrem 1d6 pontos de dano de corte para cada 1,5m que avancem.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda o tamanho do alvo para Enorme ou menor. Requer 3º círculo.",
      },
      {
        pm_a_mais: 12,
        descricao:
          "Muda o tamanho do alvo para Colossal ou menor. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Controlar o Clima",
    descricao:
      "Você muda o clima da área onde se encontra, podendo criar qualquer condição climática: chuva, neve, ventos, névoas... Veja o Capítulo 6: O Mestre para os efeitos do clima.",
    execucao: enumExecucao.completa,
    alcance: "2km",
    alvo: "esfera com 2km de raio",
    duracao: "4d12 horas",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "(Apenas Druidas) Muda o raio da área para 3km e duração para 1d4 dias.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Controlar o Tempo",
    descricao:
      "Aquele que controla o tempo controla o mundo. Escolha um dos efeitos a seguir.\n\n- Congelar o tempo: você gera uma bolha do seu tamanho na qual o tempo passa mais lentamente. Para outras criaturas, a bolha surge e desaparece instantaneamente, mas, para você, ela dura 3 rodadas, durante as quais você pode agir e não é afetado por efeitos contínuos (como chamas). Porém, durante essas 3 rodadas, você e quaisquer efeitos que você gerar não podem sair da área que você ocupava quando lançou esta magia. Efeitos de área com duração maior que a da bolha voltam a agir normalmente quando ela termina.\n\n- Saltar no tempo: você e até 5 criaturas voluntárias são transportadas de 1 a 24 horas para o futuro, desaparecendo com um brilho. Vocês ressurgem no mesmo lugar, com a mesma velocidade e orientação; do seu ponto de vista, nenhum tempo se passou. Se um objeto sólido agora ocupa o espaço de uma criatura, ela ressurge na área vazia mais próxima.\n\n- Voltar no tempo: você revive os últimos segundos. Todas as ações da rodada anterior são desfeitas (incluindo perda de PV e PM — exceto os gastos nesta magia). Tudo retorna à posição em que estava no início do seu turno na última rodada e você é o único que sabe o que acontecerá. Outros personagens devem repetir as mesmas ações — exceto se você fizer algo a respeito (como avisar seus aliados sobre o que vai acontecer). Você só pode reviver uma mesma rodada uma vez.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "veja texto",
    duracao: "veja texto",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Controlar Plantas",
    descricao:
      "Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "quadrado com 9m de lado",
    duracao: "cena",
    resistencia: "Reflexos anula",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao:
          "Muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para instantânea. Em vez do normal, as plantas na área diminuem, como se tivessem sido podadas. Terreno difícil muda para terreno normal e não fornece camuflagem. Esse efeito dissipa o uso normal de Controlar Plantas.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, criaturas que falhem na resistência também ficam imóveis.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para pessoal, a área para alvo (você) e a resistência para nenhuma. Em vez do normal, você consegue se comunicar com plantas, que começam com atitude prestativa em relação a você. Além disso, você pode fazer testes de Diplomacia com plantas. Em geral, plantas têm uma percepção limitada de seus arredores e normalmente fornecem respostas simplórias.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Controlar Terra",
    descricao:
      "Você manipula a densidade e a forma de toda terra, pedra, lama, argila ou areia na área. Ao lançar a magia, escolha.\n\n- Amolecer: se afetar o teto, uma coluna ou suporte, provoca um desabamento que causa 10d6 pontos de dano de impacto às criaturas na área (Reflexos reduz à metade). Se afetar um piso de terra ou pedra, cria terreno difícil de areia ou argila, respectivamente.\n\n- Modelar: pode usar pedra ou argila para criar um ou mais objetos simples de tamanho Enorme ou menor (sem mecanismos ou partes móveis). Por exemplo, pode transformar um tijolo em uma maça, criar uma passagem onde antes havia apenas uma parede ou levantar uma ou mais paredes que oferecem cobertura total (RD 8 e 50 PV para cada 3m).\n\n- Solidificar: transforma lama ou areia em terra ou pedra. Criaturas com os pés na superfície ficam agarradas. Elas podem se soltar com uma ação padrão e um teste de Acrobacia ou Atletismo.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "9 cubos com 1,5m de lado",
    duracao: "instantânea",
    resistencia: "veja texto",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de cubos de 1,5m em +2.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alcance para pessoal, o alvo para você e a duração para um dia. Você e seu equipamento fundem-se a uma superfície ou objeto adjacente feito de pedra, terra, argila ou areia que possa acomodá-lo. Você pode voltar ao espaço adjacente como uma ação livre, dissipando a magia. Enquanto mesclado, você não pode falar ou fazer ações físicas, mas consegue perceber seus arredores normalmente. Pequenos danos não o afetam, mas se o objeto (ou o trecho onde você está imerso) for destruído, a magia é dissipada, você volta a um espaço livre adjacente e sofre 10d6 pontos de dano de impacto.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Convocação Instantânea",
    descricao:
      "Você invoca um objeto de qualquer lugar para sua mão. O item deve ter sido previamente preparado com uma runa pessoal sua (ao custo de T$ 5).\nA magia não funciona se o objeto estiver com outra criatura, mas você saberá onde ele está e quem o está carregando (ou sua descrição física, caso não conheça a criatura).",
    execucao: enumExecucao.padrao,
    alcance: "ilimitado",
    alvo: "1 objeto de até 2 espaços",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, até 1 hora após ter lançado a magia, você pode gastar uma ação de movimento para enviar o objeto de volta para o local em que ele estava antes.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alvo para um baú Médio, a duração para permanente e adiciona sacrifício de 1 PM. Em vez do normal, você esconde o baú no Éter Entre Mundos, com até 20 espaços de equipamento. A magia faz com que qualquer objeto caiba no baú, independentemente do seu tamanho. Uma vez escondido, você pode convocar o baú para um espaço livre adjacente, ou de volta para o Éter, com uma ação padrão. Componente material: baú construído com matéria-prima da melhor qualidade (T$ 1.000). Você deve ter em mãos uma miniatura do baú, no valor de T$ 100, para invocar o baú verdadeiro.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alvo para 1 objeto de até 10 espaços. Um objeto muito grande ou pesado para aparecer em suas mãos surge em um espaço adjacente a sua escolha.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Crânio Voador de Vladislav",
    descricao:
      "Esta magia cria um crânio envolto em energia negativa. Quando atinge o alvo, ele causa 4d8+4 pontos de dano de trevas e se desfaz emitindo um som horrendo, deixando abalado o alvo e todos os inimigos num raio de 3m dele (criaturas já abaladas ficam apavoradas por 1d4 rodadas). Passar no teste de resistência diminui o dano à metade e evita a condição (as demais criaturas na área também têm direito ao teste de resistência, para evitar a condição).",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d8+1.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Criar Elementos",
    descricao:
      "Você cria uma pequena porção de um elemento, a sua escolha. Os elementos criados são reais, não mágicos. Elementos físicos devem surgir em uma superfície. Em vez de um cubo, pode-se criar objetos simples (sem partes móveis) feitos de gelo, terra ou pedra.\n\n- Água: enche um recipiente de tamanho Minúsculo (como um odre) com água potável ou cria um cubo de gelo de tamanho Minúsculo.\n- Ar: cria um vento fraco em um quadrado de 1,5m. Isso purifica a área de qualquer gás ou fumaça, ou remove névoa por uma rodada.\n- Fogo: cria uma chama que ilumina como uma tocha. Você pode segurá-la na palma de sua mão sem se queimar, ou fazê-la surgir em um quadrado de 1,5m. Se uma criatura ou objeto estiver no quadrado, sofre 1d6 pontos de dano de fogo; se falhar num teste de Reflexos, fica em chamas.\n- Terra: cria um cubo de tamanho Minúsculo feito de terra, argila ou pedra.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "elemento escolhido",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Aumenta a quantidade do elemento em um passo (uma categoria de tamanho para água ou terra, +1 quadrado de 1,5m para ar e fogo).",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o efeito para alvo 1 criatura ou objeto e a resistência para Reflexos reduz à metade. Se escolher água ou terra, você arremessa o cubo ou objeto criado no alvo, causando 2d4 pontos de dano de impacto. Para cada categoria de tamanho acima de Minúsculo, o dano aumenta em um passo. O cubo se desfaz em seguida.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Se escolheu fogo, aumenta o dano inicial de cada chama em +1d6.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Criar Ilusão",
    descricao:
      "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "até 4 cubos de 1,5m",
    duracao: "cena",
    resistencia: "Vontade desacredita",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao:
          "Muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.",
      },
      {
        pm_a_mais: 1,
        descricao: "Aumenta o efeito da ilusão em +1 cubo de 1,5m.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alvo para objeto mundano Médio. Além do normal, o alvo tem as mesmas características de um construto.",
      },
      {
        pm_a_mais: 2,
        descricao: "Também pode criar ilusões de imagem e sons combinados.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para longo e o efeito para esfera com 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito. Com uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para pessoal e a área para esfera com 6m de raio. Todas as criaturas e objetos mundanos na área são afetados.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m. Requer 2º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Cúpula de Repulsão",
    descricao:
      "Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efeitos à distância. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "Vontade anula",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "A cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas).",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Curar Ferimentos",
    descricao:
      "Você canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao: "muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade)."
      },
      {
        pm_a_mais: 1,
        descricao: "Aumenta a cura em +1d8+1.",
      },
      {
        pm_a_mais: 2,
        descricao: "Também remove uma condição de fadiga do alvo.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o alcance para curto.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Deflagração de Mana",
    descricao:
      "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.",
    execucao: enumExecucao.completa,
    alcance: "pessoal",
    alvo: "esfera com 15m de raio",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o dano em 10.",
      },
      {
        pm_a_mais: 5,
        descricao: "Afeta apenas criaturas a sua escolha.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Deflagração de Mana",
    descricao:
      "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.",
    execucao: enumExecucao.completa,
    alcance: "pessoal",
    alvo: "esfera com 15m de raio",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o dano em 10.",
      },
      {
        pm_a_mais: 5,
        descricao: "Afeta apenas criaturas a sua escolha.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Desejo",
    descricao:
      "Esta é a mais poderosa das magias arcanas, permitindo alterar a realidade a seu bel-prazer. Você pode:\n• Dissipar os efeitos de qualquer magia de 4º círculo ou menor.\n• Transportar até 10 criaturas voluntárias em alcance longo para qualquer outro local, em qualquer plano.\n• Desfazer um acontecimento recente. A magia permite que um teste realizado por uma criatura em alcance longo na última rodada seja realizado novamente. Por exemplo, se um aliado morreu na última rodada devido ao ataque de um inimigo, você pode obrigar o inimigo a refazer esse ataque.\nVocê pode desejar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:\n• Criar um item mundano de até T$ 30.000.\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n• Aumentar um atributo de uma criatura em +1. Cada atributo só pode ser aumentado uma vez com Desejo.\nDesejo pode gerar efeitos ainda mais poderosos, mas cuidado! Desejar a fortuna de um rei pode transportá-lo para a sala de tesouro real, onde você poderá ser preso ou morto; desejar ser imortal pode transformá-lo em morto-vivo, e assim por diante. Qualquer efeito que não se encaixe na lista acima deve ser decidido pelo mestre.",
    execucao: enumExecucao.completa,
    alcance: "veja texto",
    alvo: "veja texto",
    duracao: "veja texto",
    resistencia: "veja texto",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Criar um item mundano de até T$ 30.000.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Aumentar um atributo de uma criatura em +1. Cada atributo só pode ser aumentado uma vez com Desejo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Desespero Esmagador",
    descricao:
      "Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem essas condições por uma rodada.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "cone de 6m",
    duracao: "cena",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Em vez do normal, as condições adquiridas são debilitado e esmorecido.",
      },
      {
        pm_a_mais: 3,
        descricao: "Em vez do normal, afeta qualquer tipo de criatura.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Além do normal, criaturas que falhem na resistência ficam aos prantos (pasmos) por 1 rodada (apenas uma vez por cena). Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Desintegrar",
    descricao:
      "Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura ou objeto",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "Aumenta o dano total em +2d12 e o dano mínimo em +1d12.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Despedaçar",
    descricao:
      "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura ou objeto mundano Pequeno",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d8+2.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o alvo para objeto mundano Médio. Requer 2º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda o alvo para objeto mundano Grande. Requer 3º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao: "Muda o alvo para objeto mundano Enorme. Requer 4º círculo.",
      },
      {
        pm_a_mais: 14,
        descricao:
          "Muda o alvo para objeto mundano Colossal. Requer 5º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para pessoal e a área para esfera com 6m de raio. Todas as criaturas e objetos mundanos na área são afetados.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Despertar Consciência",
    descricao:
      "Você desperta a consciência de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico, perseguidor ou vigilante. Se usar esta magia em um parceiro que já possua, o nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se já for um parceiro mestre, recebe o bônus de outro tipo de parceiro iniciante (entre as escolhas acima).\nO alvo se torna uma criatura racional, com Inteligência –1, e pode falar.",
    execucao: enumExecucao.completa,
    alcance: "toque",
    alvo: "1 animal ou planta",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao:
          "Muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda a duração para permanente e adiciona penalidade de –3 PM.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Detectar Ameaças",
    descricao:
      "Você recebe uma intuição aguçada sobre perigos ao seu redor. Quando uma criatura hostil ou armadilha entra na área do efeito, você faz um teste de Percepção (CD determinada pelo mestre de acordo com a situação). Se passar, sabe a origem (criatura ou armadilha), direção e distância do perigo. Se falhar, sabe apenas que o perigo existe.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "esfera com 18m de raio",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Você descobre também a raça ou espécie e o poder da criatura detectada (determinado pela aura dela). Criaturas de 1º a 6º nível ou ND geram aura tênue, criaturas de 7º a 12º nível ou ND geram aura moderada e criaturas de 13º ao 20º nível ou ND geram aura poderosa. Criaturas acima do 20º nível ou ND geram aura avassaladora.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, você não fica surpreso desprevenido contra perigos detectados com sucesso e recebe +5 em testes de resistência contra armadilhas. Requer 2º círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Dificultar Detecção",
    descricao:
      "Esta magia oculta a presença do alvo contra qualquer meio mágico de detecção, inclusive detectar magia. Um conjurador que lance uma magia de adivinhação para detectar a presença ou localização do alvo deve fazer um teste de Vontade. Se falhar, a magia não funciona, mas os PM são gastos mesmo assim. Se for lançada sobre uma criatura, Dificultar Detecção protege tanto a criatura quanto seu equipamento.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura ou objeto",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao:
          "Muda o alvo para área de cubo de 9m. Qualquer criatura ou objeto na área recebe o efeito da magia enquanto estiver dentro dela.",
      },
      {
        pm_a_mais: 4,
        descricao: "Muda a duração para 1 semana.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Disfarce Ilusório",
    descricao:
      "Você muda a aparência do alvo, incluindo seu equipamento. Isso inclui altura, peso, tom de pele, cor de cabelo, timbre de voz etc. O alvo recebe +10 em testes de Enganação para disfarce. O alvo não recebe novas habilidades (você pode ficar parecido com outra raça, mas não ganhará as habilidades dela), nem modifica o equipamento (uma espada longa disfarçada de bordão continua funcionando e causando dano como uma espada).",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "cena",
    resistencia: "Vontade desacredita",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao:
          "Muda o alcance para toque, o alvo para 1 criatura e a duração para 1 semana. Em vez do normal, você faz uma pequena alteração na aparência do alvo, como deixar o nariz vermelho ou fazer brotar um gerânio no alto da cabeça. A mudança é inofensiva, mas persistente — se a flor for arrancada, por exemplo, outra nascerá no local.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alcance para curto e o alvo para 1 objeto. Você pode, por exemplo, transformar pedaços de ferro em moedas de ouro. Você recebe +10 em testes de Enganação para falsificação.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alcance para curto e o alvo para 1 criatura. Uma criatura involuntária pode anular o efeito com um teste de Vontade.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "A ilusão inclui odores e sensações. Isso muda o bônus em testes de Enganação para disfarce para +20.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas. Cada criatura pode ter uma aparência diferente. Criaturas involuntárias podem anular o efeito com um teste de Vontade. Requer 2o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Dispersar as Trevas",
    descricao:
      "Esta magia cria um forte brilho (multicolorido ou de uma cor que remeta a sua divindade) que causa diversos efeitos. Todas as magias de 3o círculo ou menor ativas na área são dissipadas se você passar num teste de Religião contra a CD de cada magia. Seus aliados na área recebem +4 em testes de resistência e redução de trevas 10 até o fim da cena, protegidos por uma aura sutil da mesma cor. Inimigos na área ficam cegos por 1d4 rodadas (apenas uma vez por cena). Dispersar as Trevas anula Anular a Luz (este efeito tem duração instantânea).",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "esfera com 6m de raio",
    duracao: "veja texto",
    resistencia: "Vontade desacredita",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus nas resistências em +1.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda o círculo máximo de magias dissipadas para 4o. Requer 4o círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda o círculo máximo de magias dissipadas para 5o. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Dissipar Magia",
    descricao:
      "Você dissipa outras magias que estejam ativas, como se sua duração tivesse acabado. Note que efeitos de magias instantâneas não podem ser dissipados (não se pode dissipar uma Bola de Fogo ou Relâmpago depois que já causaram dano...). Se lançar essa magia em uma criatura ou área, faça um teste de Misti-cismo; você dissipa as magias com CD igual ou menor que o resultado do teste. Se lançada contra um item mágico, o transforma em um item mundano por 1d6 rodadas (Vontade anula).",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura ou 1 objeto mágico ou esfera com 3m de raio",
    duracao: "instantânea",
    resistencia: "Vontade anula",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 12,
        descricao:
          "Muda a área para esfera com 9m de raio. Em vez do normal, cria um efeito de disjunção. Todas as magias na área são automaticamente dissipadas e todos os itens mágicos na área, exceto aqueles que você estiver carregando, viram itens mundanos por uma cena (com direito a um teste de Vontade para evitar esse efeito). Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Duplicata Ilusória",
    descricao:
      "Você cria uma cópia ilusória semirreal de... você mesmo! Ela é idêntica em aparência, som e cheiro, mas é intangível. A cada turno, você escolhe se verá e ouvirá através da duplicata ou de seu corpo original. A cópia reproduz todas as suas ações, incluindo fala. Qualquer magia com alcance de toque ou maior que você lançar pode se originar da duplicata, em vez do seu corpo original. As magias afetam outros alvos normalmente, com a única diferença de se originarem da cópia, em vez de você. Se quiser que a duplicata faça algo diferente de você, você deve gastar uma ação de movimento. Qualquer criatura que interagir com a cópia tem direito a um teste de Vontade para perceber que é uma ilusão. As magias que se originam dela, no entanto, são reais. A cópia desaparece se sair do alcance.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "você",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "Cria uma cópia adicional.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Enfeitiçar",
    descricao:
      "O alvo fica enfeitiçado (veja a página 394). Um alvo hostil ou que esteja envolvido em um combate recebe +5 em seu teste de resistência. Se você ou seus aliados tomarem qualquer ação hostil contra o alvo, a magia é dissipada e o alvo retorna à atitude que tinha antes (ou piorada, de acordo com o mestre).",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 humanoide",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Em vez do normal, você sugere uma ação para o alvo e ele obedece. A sugestão deve ser feita de modo que pareça aceitável, a critério do mestre. Pedir ao alvo que pule de um precipício, por exemplo, dissipa a magia. Já sugerir a um guarda que descanse um pouco, de modo que você e seus aliados passem por ele, é aceitável. Quando o alvo executa a ação, a magia termina. Você pode determinar uma condição específica para a sugestão: por exemplo, que um rico mercador doe suas moedas para o primeiro mendigo que encontrar.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda o alvo para 1 espírito ou monstro. Requer 3o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "Afeta todos os alvos dentro do alcance.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Engenho de Mana",
    descricao:
      "Você cria um disco de energia que lembra uma roda de engenho e flutua no ponto em que foi conjurado. O disco é imune a dano, não pode ser movido e faz uma contramágica automática contra qualquer magia lançada em alcance médio dele (exceto as suas), usando seu teste de Misticismo. Caso vença o teste, o engenho não só anula a magia como absorve os PM usados para lançá-la, acumulando PM temporários. No seu turno, se estiver ao alcance do disco, você pode gastar PM nele para lançar magias.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "disco com 1,5m de diâmetro",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Em vez de flutuar no ponto em que foi conjurado, o disco flutua atrás de você, mantendo-se sempre adjacente.",
      },
      {
        pm_a_mais: 4,
        descricao: "Muda a duração para um dia.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Enxame de Pestes",
    descricao:
      "Você conjura um enxame de criaturas a sua escolha, como besouros, gafanhotos, ratos, morcegos ou serpentes. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de seus turnos, o enxame causa 2d12 pontos de dano de corte a qualquer criatura em seu espaço (Fortitude reduz à metade). Você pode gastar uma ação de movimento para mover o enxame 12m.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 enxame Médio (quadrado de 1,5m)",
    duracao: "sustentada",
    resistencia: "Fortitude reduz à metade",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d12.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda a resistência para Reflexos reduz à metade e o enxame para criaturas maiores, como gatos, guaxinins, compsognatos ou kobolds. Ele causa 3d12 pontos de dano (a sua escolha entre corte, impacto ou perfuração). O resto da magia segue normal.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Aumenta o número de enxames em +1. Eles não podem ocupar o mesmo espaço. Requer 3o círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda a resistência para Reflexos reduz à metade e o enxame para criaturas elementais. Ele causa 5d12 pontos do dano (a sua escolha entre ácido, eletricidade, fogo ou frio). O resto da magia segue normal. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Enxame Rubro de Ichabod",
    descricao:
      "Você conjura um enxame de pequenas criaturas da Tormenta. O enxame pode passar pelo espaço de outras criaturas e não impede que outras criaturas entrem no espaço dele. No final de cada um de seus turnos, o enxame causa 4d12 pontos de dano de ácido a qualquer criatura em seu espaço (Reflexos reduz à metade). Você pode gastar uma ação de movimento para mover o enxame com deslocamento de 12m.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 enxame Grande (quadrado de 3m)",
    duracao: "sustentada",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, uma criatura que falhe no teste de Reflexos fica agarrada (o enxame escala e cobre o corpo dela). A criatura pode gastar uma ação padrão e fazer um teste de Acrobacia ou Atletismo para escapar. Se você mover o enxame, a criatura fica livre.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d12.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o dano para trevas.",
      },
      {
        pm_a_mais: 3,
        descricao: "O enxame vira Enorme (quadrado de 6m de lado).",
      },
      {
        pm_a_mais: 3,
        descricao:
          "O enxame ganha deslocamento de voo 18m e passa a ocupar um cubo ao invés de um quadrado. Requer 3o círculo.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "o enxame inclui parasitas que explodem e criam novos enxames. No início de cada um de seus turnos, role 1d6. Em um resultado 5 ou 6, um novo enxame surge adjacente a um já existente à sua escolha. Você pode mover todos os enxames com uma única ação de movimento, mas eles não podem ocupar o mesmo espaço. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Erupção Glacial",
    descricao:
      "Estacas de gelo irrompem do chão, causando 3d8 pontos de dano de frio a todas as criaturas em uma área de 3m de raio (Fortitude reduz à metade). A área se torna terreno difícil até o fim da cena. Se a magia for lançada sobre uma superfície aquática, cria uma plataforma de gelo com 3m de raio que pode ser usada como terreno normal. A plataforma dura uma cena.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "esfera com 3m de raio",
    duracao: "instantânea",
    resistencia: "Fortitude reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "Aumenta o dano de frio em +2d6 e o dano de corte em +2d6.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda a área para cilindro com 6m de raio e 6m de altura e a duração para sustentada. Em vez do normal, a magia cria uma tempestade de granizo que causa 3d6 pontos de dano de impacto e 3d6 pontos de dano de frio em todas as criaturas na área (sem teste de resistência). A tempestade fornece camuflagem leve às criaturas dentro dela e deixa o piso escorregadio. Piso escorregadio conta como terreno difícil e obriga criaturas na área a fazer testes de Acrobacia para equilíbrio (veja o Capítulo 2). Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Escudo da Fé",
    descricao:
      "Um escudo místico se manifesta momentaneamente para bloquear um golpe. O alvo recebe +2 na Defesa",
    execucao: enumExecucao.reacao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para ação padrão, o alcance para toque e a duração para cena.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Também fornece ao alvo camuflagem leve contra ataques à distância.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o bônus na Defesa em +1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda a execução para ação padrão, o alcance para toque e a duração para cena. A magia cria uma conexão mística entre você e o alvo. Além do efeito normal, o alvo sofre metade do dano por ataques e efeitos; a outra metade do dano é transferida a você. Se o alvo sair de alcance curto de você, a magia é dissipada. Requer 2o círculo.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda a duração para um dia. Requer 2o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Esculpir Sons",
    descricao:
      "Esta magia altera os sons emitidos pelo alvo. Ela não é capaz de criar sons, mas pode omiti-los (como fazer uma carroça ficar silenciosa) ou transformá-los (como fazer uma pessoa ficar com voz de passarinho). Você não pode criar sons que não conhece (não pode fazer uma criatura falar num idioma que não conheça). Uma vez que escolha a alteração, ela não pode ser mudada. Um conjurador que tenha a voz modificada drasticamente não poderá lançar magias.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura ou objeto",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o número de alvos em +1. Todas as criaturas e objetos devem ser afetadas da mesma forma.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Escuridão",
    descricao:
      "O alvo emana sombras em uma área com 6m de raio. Criaturas dentro da área recebem camuflagem leve por escuridão leve. As sombras não podem ser iluminadas por nenhuma fonte de luz natural. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a escuridão, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Escuridão anula Luz.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 objeto",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta a área em +1,5m de raio.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o efeito para fornecer camuflagem total por escuridão total. As sombras bloqueiam a visão na área e através dela.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda o alvo para 1 criatura e a resistência para Fortitude parcial. Você lança a magia nos olhos do alvo, que fica cego pela cena. Se passar na resistência, fica cego por 1 rodada. Requer 2o círculo.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda a duração para um dia.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para pessoal e o alvo para você. Em vez do normal, você é coberto por sombras, recebendo +10 em testes de Furtividade e camuflagem leve. Requer 2o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Explosão Caleidoscópica",
    descricao:
      "Esta magia cria uma forte explosão de luzes estroboscópicas e sons cacofônicos que desorientam as criaturas atingidas. O efeito que cada criatura sofre depende do nível ou ND dela.\nNível ou ND 4 ou menor: se falhar no teste de resistência, fica inconsciente. Se passar, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena.\nNível ou ND entre 5 e 9: se falhar no teste de resistência, fica atordoada por 1d4 rodadas e enjoada pelo resto da cena. Se passar, fica atordoada por 1 rodada e enjoada por 1d4 rodadas.\nNível ou ND 10 ou maior: se falhar no teste de resistência, fica atordoada por 1 rodada e enjoada por 1d4 rodadas. Se passar, fica desprevenida e enjoada por 1 rodada.\nUma criatura só pode ser atordoada por esta magia uma vez por cena.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "esfera com 6m de raio",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.ilusao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Explosão de Chamas",
    descricao:
      "Uma explosão de chamas irrompe de suas mãos, causando 2d6 pontos de dano de fogo às criaturas na área. Explosão de Chamas ignora a RD de objetos. Você pode usar uma ação de movimento para mover a área de efeito 6m.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "cone com 6m de comprimento",
    duracao: "instantânea",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao: "Truque: muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.",
      },
      {
        pm_a_mais: 1,
        descricao: "Aumenta o dano em +1d6.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda o alcance para curto, a área para alvo de 1 objeto e a resistência para Reflexos anula. Você gera uma pequena explosão que não causa dano mas pode acender uma vela, tocha ou fogueira. Também pode fazer um objeto inflamável com RD 0 (como uma corda ou pergaminho) ficar em chamas. Uma criatura em posse de um objeto pode evitar esse efeito se passar no teste de resistência.",
      },
      {
        pm_a_mais: 1,
        descricao:
          "Muda a resistência para Reflexos parcial. Se passar, a criatura reduz o dano à metade; se falhar, fica em chamas (veja Condições, na página 394).",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Ferver Sangue",
    descricao:
      "O sangue do alvo aquece até entrar em ebulição. Quando a magia é lançada, e no início de cada um de seus turnos, o alvo sofre 4d8 pontos de dano de fogo e fica enjoado por uma rodada (Fortitude reduz o dano à metade e evita a condição). Se o alvo passar em dois testes de Fortitude seguidos, dissipa a magia. Se o alvo for reduzido a 0 PV pelo dano desta magia, seu corpo explode, matando-o e causando 6d6 pontos de dano de fogo em todas as criaturas a até 3m (Reflexos reduz à metade). Essa magia não afeta criaturas sem sangue, como construtos ou mortos-vivos.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "sustentada",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d8.",
      },
      {
        pm_a_mais: 9,
        descricao: "Muda alvo para criaturas escolhidas. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Físico Divino",
    descricao:
      "Você fortalece o corpo do alvo. Ele recebe +2 em Força, Destreza ou Constituição, a sua escolha. Esse aumento não oferece PV ou PM adicionais.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Em vez do normal, o alvo recebe +2 nos três atributos físicos. Requer 3o círculo.",
      },
      {
        pm_a_mais: 7,
        descricao: "Em vez do normal, o alvo recebe +4 no atributo escolhido.",
      },
      {
        pm_a_mais: 12,
        descricao:
          "Em vez do normal, o alvo recebe +4 nos três atributos físicos. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Flecha Ácida",
    descricao:
      "Você dispara um projétil que causa 4d6 pontos de dano de ácido. Se falhar no teste de resistência, o alvo fica coberto por um muco corrosivo, sofrendo mais 2d6 de dano de ácido no início de seus dois próximos turnos. Se lançada contra um objeto que não esteja em posse de uma criatura a magia causa dano dobrado e ignora a RD do objeto.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura ou objeto",
    duracao: "instantânea",
    resistencia: "Reflexos parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, se o alvo coberto pelo muco ácido estiver usando armadura ou escudo, o item é corroído. Isso reduz o bônus na Defesa do item em 1 ponto permanentemente. O item pode ser consertado, restaurando seu bônus (veja Ofício, na página 121).",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta a redução na Defesa em +1.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano inicial e o dano por rodada em +1d6.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Forma Etérea",
    descricao:
      "Você e todo o equipamento que está com você são transportados para o plano etéreo, que existe paralelamente ao plano material (o mundo físico). Na prática, é como ser transformado em um fantasma (mas você ainda é considerado uma criatura viva). Uma criatura etérea é invisível (pode alterar entre visível e invisível como ação livre), incorpórea e capaz de se mover em qualquer direção, inclusive para cima e para baixo. Ela enxerga o plano material, mas tudo parece cinza e insubstancial, reduzindo o alcance da visão e audição para 18m. Magias de abjuração e essência afetam criaturas etéreas, mas outras magias, não. Da mesma forma, uma criatura etérea não pode atacar nem lançar magias contra criaturas no plano material. Duas criaturas etéreas podem se afetar normalmente. Uma criatura afetada pode se materializar como uma ação de movimento, encerrando a magia. Uma criatura etérea que se materialize em um espaço ocupado é jogada para o espaço não ocupado mais próximo e sofre 1d6 pontos de dano de impacto para cada 1,5m de deslocamento.",
    execucao: enumExecucao.completa,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para toque e o alvo para até 5 criaturas voluntárias que estejam de mãos dadas. Depois que a magia é lançada, as criaturas podem soltar as mãos. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Fúria do Panteão",
    descricao:
      "Você cria uma nuvem de tempestade violenta. Os ventos tornam ataques à distância impossíveis e fazem a área contar como condição terrível para lançar magia. Além disso, inimigos na área têm a visibilidade reduzida (como a magia Névoa). Uma vez por turno, você pode gastar uma ação de movimento para gerar um dos efeitos a seguir.\nNevasca. Inimigos na área sofrem 10d6 pontos de dano de frio (Fortitude reduz à metade). A área fica coberta de neve, virando terreno difícil até o fim da cena ou até você usar siroco.\nRaios. Até 6 inimigos a sua escolha na área sofrem 10d8 pontos de dano de eletricidade (Reflexos reduz à metade).\nSiroco. Transforma a chuva em uma tempestade de areia escaldante. Inimigos na área sofrem 10d6 pontos de dano (metade corte, metade fogo) e ficam sangrando (Fortitude reduz o dano à metade e evita a condição).\nTrovões. Inimigos sofrem 10d6 pontos de dano de impacto e ficam desprevenidos por uma rodada (Fortitude reduz o dano à metade e evita a condição).",
    execucao: enumExecucao.completa,
    alcance: "longo",
    alvo: "cubo de 90m",
    duracao: "sustentada",
    resistencia: "veja texto",
    escola: enumEscolas.evocacao,
    aprimoramentos: [],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Globo da Verdade de Gwen",
    descricao:
      "Cria um globo flutuante e intangível, com 50cm de diâmetro. O globo mostra uma cena vista até uma semana atrás por você ou por uma criatura que você toque ao lançar a magia (mediante uma pergunta; a criatura pode fazer um teste de Vontade para anular o efeito), permitindo que outras pessoas a vejam.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "1 globo",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "O globo mostra uma cena vista até um mês atrás.",
      },
      {
        pm_a_mais: 2,
        descricao: "Como acima, até um ano atrás.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Ao lançar a magia, você pode tocar um cadáver. O globo mostra a última cena vista por essa criatura.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda o alcance para longo e o efeito para 10 globos. Todos mostram a mesma cena.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Globo de Invulnerabilidade",
    descricao:
      "Você é envolto por uma esfera mágica brilhante com 3m de raio, que detém qualquer magia de 2º círculo ou menor. Nenhuma magia pode ser lançada contra um alvo dentro do globo e magias de área não o penetram. No entanto, magias ainda podem ser lançadas de dentro para fora. Uma magia que dissipe outras magias só dissipa o globo se for usada diretamente sobre você, não o afetando se usada em área. Efeitos mágicos não são dissipados quando entram na esfera, apenas suprimidos (voltam a funcionar fora do globo, caso sua duração não tenha acabado). O globo é imóvel e não tem efeito sobre criaturas ou objetos. Após lançá-lo, você pode entrar ou sair livremente.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao:
          "Muda o efeito para afetar magias de até 3º círculo. Requer 4º círculo.",
      },
      {
        pm_a_mais: 9,
        descricao:
          "Muda o efeito para afetar magias de até 4º círculo. Requer 5º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Guardião Divino",
    descricao:
      "A magia invoca um elemental Pequeno, com a forma de um orbe feito de luz divina. A criatura é incorpórea, imune a dano e ilumina como uma tocha. O elemental tem 100 pontos de luz. Uma vez por rodada, durante o seu turno, o elemental pode se movimentar (deslocamento de voo 18m) e gastar quantos pontos de luz quiser para curar dano ou condições de criaturas em alcance curto, à taxa de 1 PV por 1 ponto de luz ou uma condição por 3 pontos de luz (entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, ofuscado, pasmo, sangrando, surdo ou vulnerável). A magia é encerrada quando o elemental fica sem pontos de luz.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Heroísmo",
    descricao:
      "Esta magia imbui uma criatura com coragem e valentia. O alvo fica imune a medo e recebe 40 PV temporários e +4 em testes de ataque e rolagens de dano contra o inimigo de maior ND na cena.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Muda o bônus para +6.",
      }
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Hipnotismo",
    descricao:
      "Suas palavras e movimentos ritmados deixam o alvo fascinado. Esta magia só afeta criaturas que possam perceber você. Se usar esta magia em combate, o alvo recebe +5 em seu teste de resistência. Se a criatura passar, fica imune a este efeito por um dia.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 animal ou humanoide",
    duracao: "instantânea",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a duração para 1 rodada. Em vez de fascinado, o alvo fica pasmo (apenas uma vez por cena).",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda o alvo para animais ou humanoides escolhidos.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a duração para sustentada.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Também afeta espíritos e monstros na área. Requer 2º círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Ilusão Lacerante",
    descricao:
      "Você cria uma ilusão de algum perigo mortal. Quando a magia é lançada, criaturas na área devem fazer um teste de Vontade; uma falha significa que a criatura acredita que a ilusão é real e sofre 3d6 pontos de dano psíquico não letal. Sempre que uma criatura iniciar seu turno dentro da área, deve repetir o teste de Vontade. Se falhar, sofre o dano novamente. Somente criaturas que falham veem a ilusão, e racionalizam o efeito sempre que falham no teste (por exemplo, acredita que o mesmo teto pode cair sobre ela várias vezes).",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "cubo de 9m",
    duracao: "sustentada",
    resistencia: "Vontade anula",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "Aumenta o dano em +2d6.",
      },
      {
        pm_a_mais: 4,
        descricao: "Muda a área para um cubo de 90m. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Imagem Espelhada",
    descricao:
      "Três cópias ilusórias suas aparecem. As duplicatas ficam ao seu redor e imitam suas ações, tornando difícil para um inimigo saber quem atacar. Você recebe +6 na Defesa. Cada vez que um ataque contra você erra, uma das imagens desaparece e o bônus na Defesa diminui em 2. Um oponente deve ver as cópias para ser confundido. Se você estiver invisível, ou o atacante fechar os olhos, você não recebe o bônus (mas o atacante ainda sofre penalidades normais por não enxergar).",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Aumenta o número de cópias em +1 (e o bônus na Defesa em +2).",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, toda vez que uma cópia é destruída, emite um clarão de luz. A criatura que destruiu a cópia fica ofuscada por uma rodada. Requer 2º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Imobilizar",
    descricao:
      "O alvo fica paralisado; se passar na resistência, em vez disso fica lento. A cada rodada, pode gastar uma ação completa para fazer um novo teste de Vontade. Se passar, se liberta do efeito.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 humanoide ou animal",
    duracao: "cena",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Muda o alvo para 1 espírito.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda o alvo para 1 criatura. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Infligir Ferimentos",
    descricao:
      "Você canaliza energia negativa contra um alvo, causando 2d8+2 pontos de dano de trevas (ou curando 2d8+2 PV, se for um morto-vivo). Infligir Ferimentos anula Curar Ferimentos.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "Fortitude reduz à metade",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Além do normal, se falhar na resistência, o alvo fica fraco pela cena.",
      },
      {
        pm_a_mais: 2,
        descricao: "Aumenta o dano em +1d8+1.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Muda a resistência para nenhum. Como parte da execução da magia, você pode fazer um ataque corpo a corpo contra o alvo. Se acertar, causa o dano do ataque e o efeito da magia.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para curto e o alvo para criaturas escolhidas.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Intervenção Divina",
    descricao:
      "Você pede a sua divindade para interceder diretamente. Você pode:\n• Curar todos os PV e condições de até 10 criaturas em alcance longo (este efeito cura mortos-vivos, em vez de causar dano).\n• Dissipar os efeitos de qualquer magia de 4º círculo ou menor.\nVocê pode implorar por algo ainda mais poderoso. Nesse caso, a magia requer o sacrifício de 2 PM e pode fazer coisas como:\n• Criar um item mundano de até T$ 30.000.\n• Duplicar os efeitos de qualquer magia de até 4º círculo. Caso a magia precise de um componente material para ser lançada, ainda é necessário providenciar o componente.\n• Proteger uma cidade de um desastre, como uma erupção vulcânica, enchente ou terremoto.\n• Ressuscitar uma criatura em alcance longo que tenha morrido há até uma rodada. A criatura acorda com 1 PV.\n• Qualquer outra coisa que o mestre autorize, conforme os desejos e objetivos da divindade do conjurador.",
    execucao: enumExecucao.completa,
    alcance: "veja texto",
    alvo: "veja texto",
    duracao: "veja texto",
    resistencia: "veja texto",
    escola: enumEscolas.convocacao,
    aprimoramentos: [],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Invisibilidade",
    descricao:
      "O alvo fica invisível (incluindo seu equipamento). Um personagem invisível recebe camuflagem total, +10 em testes de Furtividade contra ouvir e criaturas que não possam vê-lo ficam desprevenidas contra seus ataques. A magia termina se o alvo faz uma ação hostil contra uma criatura. Ações contra objetos livres não dissipam a Invisibilidade (você pode tocar ou apanhar objetos que não estejam sendo segurados por outras criaturas). Causar dano indiretamente — por exemplo, acendendo o pavio de um barril de pólvora que vai detonar mais tarde — não é considerado um ataque.",
    execucao: enumExecucao.livre,
    alcance: "pessoal",
    alvo: "você",
    duracao: "1 rodada",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao:
          "Muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura ou 1 objeto Grande ou menor.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda a duração para cena.",
      },
      {
        pm_a_mais: 3,
        descricao:
          "Muda a duração para sustentada. Em vez do normal, o alvo gera uma esfera de invisibilidade. Não pode ser usado em conjunto com outros aprimoramentos. O alvo e todas as criaturas a até 3m dele se tornam invisíveis, como no efeito normal da magia (ainda ficam visíveis caso façam uma ação hostial). A esfera se move juntamente com o alvo; qualquer coisa que saia da esfera fica visível. Requer 3º círculo.",
      },
      {
        pm_a_mais: 7,
        descricao:
          "Muda a execução para ação padrão, o alcance para toque e o alvo para 1 criatura. A magia não é dissipada caso o alvo faça uma ação hostil. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Invulnerabilidade",
    descricao:
      "Esta magia cria uma barreira mágica impenetrável que protege você contra efeitos nocivos mentais ou físicos, a sua escolha.\nProteção mental: você fica imune às condições abalado, alquebrado, apavorado, atordoado, confuso, esmorecido, fascinado, frustrado e pasmo, além de efeitos de encantamento e ilusão.\nProteção física: você fica imune às condições atordoado, cego, debilitado, enjoado, envenenado, exausto, fatigado, fraco, lento, ofuscado e paralisado, além de acertos críticos, ataques furtivos e doenças.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para curto e o alvo para 1 criatura. A magia não protege contra ataques furtivos.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Lágrimas de Wynna",
    descricao:
      "Se falhar no teste de resistência, o alvo perde a habilidade de lançar magias arcanas até o fim da cena. Se passar, perde a habilidade por uma rodada.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "Vontade parcial",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Muda a área para esfera com 6m de raio e o alvo para criaturas escolhidas.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda a execução para um dia e adiciona custo adicional (sacrifício de 1 PM). O alvo da magia precisa ser mantido em alcance curto do conjurador durante toda a execução. Ao término, faz um teste de Vontade. Se falhar, perde a habilidade de lançar magias arcanas permanentemente. Se passar, resiste, mas ainda pode ser alvo da magia no dia seguinte. Nenhum poder mortal é capaz de reverter essa perda. Os clérigos de Wynna dizem que a deusa chora cada vez que este ritual é realizado.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Lança Ígnea de Aleph",
    descricao:
      "Esta magia foi desenvolvida pelo mago imortal Aleph Olhos Vermelhos, um entusiasta dos estudos vulcânicos. Ela dispara um projétil de magma contra o alvo, que sofre 4d6 pontos de dano de fogo e 4d6 pontos de dano de perfuração e fica em chamas. As chamas causam 2d6 pontos de dano por rodada, em vez do dano normal. Se passar no teste de resistência, o alvo sofre metade do dano e não fica em chamas. Respingos de rocha incandescente se espalham com a explosão, atingindo todas as criaturas adjacentes ao alvo, que devem fazer um teste de Reflexos. Se falharem, ficam em chamas, como descrito acima.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "Reflexos parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "Aumenta o dano inicial em +2d6 e o dano do efeito em chamas em +1d6.",
      },
      {
        pm_a_mais: 4,
        descricao:
          "Muda a duração para cena ou até ser descarregada. Em vez do efeito normal, a magia cria quatro dardos de lava que flutuam ao lado do conjurador. Uma vez por rodada, como uma ação livre, você pode disparar um dos dardos em uma criatura, causando o efeito normal da magia. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Legião",
    descricao:
      "Você domina a mente dos alvos. Os alvos obedecem cegamente a seus comandos, exceto ordens claramente suicidas. Um alvo tem direito a um teste no final de cada um de seus turnos para se livrar do efeito. Alvos que passarem no teste ficam abalados por 1 rodada enquanto recuperam a consciência.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "até 10 criaturas na área",
    duracao: "sustentada",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta o número de alvos em +1.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Lendas e Histórias",
    descricao:
      "Você descobre informações sobre uma criatura, objeto ou local que esteja tocando. O que exatamente você descobre depende do mestre: talvez você não descubra tudo que há para saber, mas ganhe pistas para continuar a investigação. A cada rodada que mantiver a magia, você descobre:\n• Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\n• Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, talentos e assim por diante.\n• Todas as informações sobre o alvo, como se tivesse passado em todos os testes de Conhecimento para tal.\n• Todas as habilidades do alvo. Se for uma criatura, você sabe suas estatísticas de jogo como raça, classe, nível, atributos, magias, talentos e assim por diante.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura, objeto ou local",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao:
          "Muda a execução para um dia, o alcance para ilimitado e adiciona componente material (cuba de ouro cheia d’água e ingredientes mágicos, no valor de T$ 1.000). Você ainda precisa ter alguma informação sobre o alvo, como um nome, descrição ou localização.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 3,
  },
  {
    nome: "Leque Cromático",
    descricao:
      "Um cone de luzes brilhantes surge das suas mãos, deixando os animais e humanoides na área atordoados por 1 rodada (apenas uma vez por cena, Vontade anula) e ofuscados pela cena.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "cone de 4,5m",
    duracao: "instantânea",
    resistencia: "Vontade parcial",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, as criaturas afetadas ficam vulneráveis pela cena.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Também afeta espíritos e monstros na área. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Também afeta construtos, espíritos, monstros e mortos-vivos na área. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Libertação",
    descricao:
      "O alvo fica imune a efeitos de movimento e ignora qualquer efeito que impeça ou restrinja seu deslocamento. Por fim, pode usar habilidades que exigem liberdade de movimentos mesmo se estiver usando armadura ou escudo.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, o alvo pode caminhar sobre a água ou outros líquidos com seu deslocamento normal. Entretanto, isso não protege contra qualquer efeito que o líquido possa causar (o alvo pode andar sobre lava, mas ainda vai sofrer dano).",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, o alvo pode escolher 20 em todos os testes de Atletismo.",
      },
      {
        pm_a_mais: 2,
        descricao:
          "Além do normal, o alvo pode escolher 20 em todos os testes de Acrobacia e pode fazer todas as manobras desta perícia mesmo sem treinamento.",
      },
      {
        pm_a_mais: 5,
        descricao: "Muda o alcance para curto e o alvo para até 5 criaturas.",
      },
      {
        pm_a_mais: 5,
        descricao:
          "Muda o alcance para curto e o alvo para até 5 criaturas. Requer 4º círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 4,
  },
  {
    nome: "Ligação Sombria",
    descricao:
      "Cria uma conexão entre seu corpo e o da criatura alvo, deixando uma marca idêntica na pele de ambos. Enquanto a magia durar, sempre que você sofrer qualquer dano ou condição, o alvo desta magia deve fazer um teste de Fortitude; se falhar, sofre o mesmo dano que você ou adquire a mesma condição. A magia termina se o alvo chegar a 0 pontos de vida.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "1 criatura",
    duracao: "1 dia",
    resistencia: "Fortitude anula",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao:
          "A magia não termina se o alvo chegar a 0 PV (o que significa que dano causado por essa magia pode matá-lo).",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Ligação Telepática",
    descricao:
      "Você cria um elo mental entre duas criaturas com Inteligência 3 ou maior (você pode ser uma delas). As criaturas podem se comunicar independentemente de idioma ou distância, mas não em mundos diferentes.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "2 criaturas voluntárias",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Aumenta o número de alvos em +1.",
      },
      {
        pm_a_mais: 3,
        descricao: "Muda o alvo para 1 criatura. Em vez do normal, você cria um elo mental que permite que você veja e ouça pelos sentidos da criatura, se gastar uma ação de movimento. Uma criatura involuntária pode fazer um teste de Vontade para suprimir a magia por uma hora. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Localização",
    descricao:
      "Esta magia pode encontrar uma criatura ou objeto a sua escolha. Você pode pensar em termos gerais (“um elfo”, “algo de metal”) ou específicos (“Gwen, a elfa”, “uma espada longa”). A magia indica a direção e distância da criatura ou objeto mais próximo desse tipo, caso esteja ao alcance. Você pode movimentar-se para continuar procurando. Procurar algo muito específico (“a espada longa encantada do Barão Rulyn”) exige que você tenha em mente uma imagem precisa do objeto; caso a imagem não seja muito próxima da verdade, a magia falha, mas você gasta os PM mesmo assim. Esta magia pode ser bloqueada por uma fina camada de chumbo.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao: "muda a área para alvo você. Em vez do normal, você sabe onde fica o norte e recebe +5 em testes de Sobrevivência para se orientar.",
      },
      {
        pm_a_mais: 5,
        descricao: "Aumenta a área em um fator de 10 (90m para 900m, 900m para 9km e assim por diante).",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 2,
  },
  {
    nome: "Luz",
    descricao:
      "O alvo emite luz (mas não produz calor) em uma área com 6m de raio. O objeto pode ser guardado (em um bolso, por exemplo) para interromper a luz, que voltará a funcionar caso o objeto seja revelado. Se lançar a magia num objeto de uma criatura involuntária, ela tem direito a um teste de Vontade para anulá-la. Luz anula Escuridão.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 objeto",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "Aumenta a área iluminada em +3m de raio.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a duração para um dia.",
      },
      {
        pm_a_mais: 2,
        descricao: "Muda a duração para permanente e adiciona componente material (pó de rubi no valor de T$ 50). Não pode ser usado em conjunto com outros aprimoramentos. Requer 2o círculo.",
      },
      {
        pm_a_mais: 0,
        descricao: "(Apenas Arcanos) muda o alvo para 1 criatura. Você lança a magia nos olhos do alvo, que fica ofuscado pela cena. Não afeta criaturas cegas",
      },
      {
        pm_a_mais: 2,
        descricao: "(Apenas Arcanos) muda o alcance para longo e o efeito para cria 4 pequenos globos de luz. Você pode posicionar os globos onde quiser dentro do alcance. Você pode enviar um à frente, outra para trás, outra para cima e manter um perto de você, por exemplo. Uma vez por rodada, você pode mover os globos com uma ação livre. Cada um ilumina como uma tocha, mas não produz calor. Se um globo ocupar o espaço de uma criatura, ela fica ofuscada e sua silhueta pode ser vista claramente (ela não recebe camuflagem por escuridão ou invisibilidade). Requer 2o círculo.",
      },
      {
        pm_a_mais: 2,
        descricao: "(Apenas Divinos) a luz é cálida como a do sol. Criaturas que sofrem penalidades e dano pela luz solar sofrem seus efeitos como se estivessem expostos à luz solar real. Seus aliados na área estabilizam automaticamente e ficam imunes à condição sangrando, e seus inimigos ficam ofuscados. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "(Apenas Divinos) muda o alcance para toque e o alvo para 1 criatura. Em vez do normal, o alvo é envolto por um halo de luz, recebendo +10 em testes de Diplomacia e redução de trevas 10. Requer 2o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 1,
  },
  {
    nome: "Manto de Sombras",
    descricao:
      "Você fica coberto por um manto de energia sombria. Nesta forma, torna-se incorpóreo (inclui seu equipamento): só pode ser afetado por armas e habilidades mágicas, ou por outras criaturas incorpóreas, e pode atravessar objetos sólidos, mas não manipulá-los. Também não pode atacar criaturas normais (mas ainda pode lançar magias nelas). Além disso, se torna vulnerável à luz direta: se exposto a uma fonte de luz, sofre 1 ponto de dano por rodada. Você pode gastar uma ação de movimento e 1 PM para “entrar” em uma sombra do seu tamanho ou maior e se teletransportar para outra sombra, também do seu tamanho ou maior, em alcance médio.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "Muda o alcance para toque e o alvo para 1 criatura. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 3,
  },
  {
    nome: "Manto do Cruzado",
    descricao:
      "Você invoca o poder de sua divindade na forma de um manto de energia que reveste seu corpo. Esta magia tem duas versões. Você escolhe qual versão pode lançar quando aprende a magia. Ela não pode ser mudada. \nManto de Luz: um manto dourado e luminoso. No início de cada um de seus turnos, você e todos os seus aliados em alcance curto recuperam 2d8 PV. Você recebe imunidade a dano de trevas e seus ataques corpo a corpo causam +2d8 pontos de dano de luz.\nManto de Trevas: um manto negro como a noite. No início de cada um de seus turnos, todos os inimigos em alcance curto sofrem 4d8 pontos de dano de trevas. Você cura metade de todo o dano causado pela magia.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Mão Poderosa de Talude",
    descricao:
      "Esta magia cria uma mão flutuante Grande que sempre se posiciona entre você e um oponente a sua escolha. A mão fornece cobertura leve (+5 na Defesa) contra esse oponente. Nada é capaz de enganar a mão — coisas como escuridão, invisibilidade, metamorfose e disfarces mundanos não a impedem de protegê-lo. A mão tem Defesa 20 e PV e resistências iguais aos seus. Com uma ação de movimento, você pode comandar a mão para que o proteja de outro oponente ou para que realize uma das ações a seguir.\nAgarrar: a mão usa uma manobra agarrar contra o oponente, usando o seu Misticismo com um bônus adicional de +10. A mão mantém o oponente agarrado, mas não causa dano.\nEsmagar: a mão esmaga um oponente agarrado, causando 2d6+10 pontos de dano de impacto.\nEmpurrar: a mão afasta o oponente (manobra empurrar usando o seu Misticismo com um bônus adicional de +10). A mão acompanha o oponente para empurrá-lo o máximo que conseguir, dentro do alcance da magia.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano em +1d6+5."
      },
      {
        pm_a_mais: 5,
        descricao: "muda o bônus adicional em Misticismo para +20. Requer 5o círculo."
      }
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Mapear",
    descricao:
      "Uma fagulha percorre a superfície afetada, queimando-a enquanto esboça um mapa da região onde o conjurador está. Se você conhece o lugar, o mapa será completo. Caso contrário, apresentará apenas um esboço geral, além de um ponto de referência (para possibilitar localização) e um lugar de interesse, ambos definidos pelo mestre. A região representada no mapa tem tamanho máximo de um quadrado de 10km de lado. Caso você esteja dentro de uma construção, o mapa mostrará o andar no qual você se encontra.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "superfície ou objeto plano, como uma mesa ou papel",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "muda o alvo para 1 criatura e a duração para 1 hora. Em vez do normal, a criatura tocada descobre o caminho mais direto para entrar ou sair de um lugar. Assim, a magia pode ser usada para descobrir a rota até o relicário de uma catedral ou a saída mais próxima de uma masmorra (mas não para encontrar a localização de uma criatura ou objeto; a magia funciona apenas em relação a lugares). Caso a criatura demore mais de uma hora para percorrer o caminho, o conhecimento se perde.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Marca da Obediência",
    descricao:
      "Você toca uma criatura, gravando uma marca mística no corpo dela enquanto profere uma ordem, como “não ataque a mim ou meus aliados”, “siga-me” ou “não saia desta sala”. A criatura deve seguir essa ordem, gastando todas as ações de seu turno para isso. A ordem não pode ser genérica demais (como “ajude-me”, por exemplo), nem forçar o alvo a atos suicidas. A cada rodada, o alvo pode fazer um teste de Vontade. Se passar, a magia é dissipada.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "muda a duração para um dia. Se não estiver em combate, a criatura só pode fazer o teste de Vontade a cada hora. Requer 3o círculo.",
      },
      {
        pm_a_mais: 3,
        descricao: "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano psíquico no alvo. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 2,
  },
  {
    nome: "Marionete",
    descricao:
      "Esta magia manipula o sistema nervoso do alvo. Ao sofrer a magia, e no início de cada um de seus turnos, o alvo deve fazer um teste de Fortitude. Se passar, a magia é anulada. Se falhar, todas as suas ações físicas naquele turno estarão sob controle do conjurador. A vítima ainda tem consciência de tudo que acontece à sua volta, podendo ver, ouvir e até falar com certo esforço (mas não para lançar magias). Contudo, seu corpo realiza apenas os movimentos que o conjurador deseja. A vítima pode ser manipulada para se movimentar, lutar, usar habilidades de combate... Enfim, qualquer coisa de que seja fisicamente capaz.\nVocê precisa de linha de efeito para controlar a vítima. Se perder o contato, não poderá controlá-la — mas ela estará paralisada até que o conjurador recupere o controle ou a magia termine.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura",
    duracao: "sustentada",
    resistencia: "Fortitude anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Mata-Dragão",
    descricao:
      "Esta é uma das mais poderosas magias de destruição existentes. Após entoar longos cânticos, o conjurador dispara uma carga de energia que varre uma enorme área à sua frente, causando 20d12 pontos de dano de essência em todas as criaturas, construções e objetos livres atingidos. Sempre que rolar um resultado 12 em um dado de dano, a magia causa +1d12 pontos de dano. Apesar de seu poder destrutivo, esta magia é lenta, tornando seu uso difícil em combate.",
    execucao: enumExecucao.outra,
    alcance: "pessoal",
    alvo: "cone de 30m",
    duracao: "instantânea",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "aumenta o dano em +1d12.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Mente Divina",
    descricao:
      "Você fortalece a mente do alvo. Ele recebe +2 em Inteligência, Sabedoria ou Carisma, a sua escolha. Esse aumento não oferece PV, PM ou perícias adicionais.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "muda o alcance para curto e o alvo para criaturas escolhidas.",
      },
      {
        pm_a_mais: 3,
        descricao: "em vez do normal, o alvo recebe +2 nos três atributos mentais. Requer 3o círculo.",
      },
      {
        pm_a_mais: 7,
        descricao: "em vez do normal, o alvo recebe +4 no atributo escolhido. Requer 4o círculo."
      },
      {
        pm_a_mais: 12,
        descricao: "em vez do normal, o alvo recebe +4 nos três atributos mentais. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Metamorfose",
    descricao:
      "Você muda sua aparência e forma — incluindo seu equipamento — para qualquer outra criatura, existente ou imaginada. Independentemente da forma escolhida, você recebe +20 em testes de Enganação para disfarce. Características não mencionadas não mudam.\nSe mudar para uma forma humanóide, pode mudar o tipo de dano (entre corte, impacto e perfuração) de suas armas (se usa uma maça e transformá-la em espada longa, ela pode causar dano de corte, por exemplo). Se quiser, pode assumir uma forma humanóide com uma categoria de tamanho acima ou abaixo da sua; nesse caso aplique os modificadores em Furtividade e testes de manobra.\nSe mudar para outras formas, você pode escolher uma Forma Selvagem do druida (veja no Capítulo 1). Nesse caso você não pode atacar com suas armas, falar ou lançar magias até voltar ao normal, mas recebe uma ou mais armas naturais e os bônus da forma selvagem escolhida.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "a forma escolhida recebe uma habilidade de sentidos entre faro, visão na penumbra e visão no escuro.",
      },
      {
        pm_a_mais: 3,
        descricao: "a forma escolhida recebe percepção às cegas. Requer 3o círculo.",
      },
      {
        pm_a_mais: 3,
        descricao: "muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, transforma o alvo em uma criatura ou objeto inofensivo (ovelha, sapo, galinha, pudim de ameixa etc.). A criatura não pode atacar, falar e lançar magias; seu deslocamento vira 3m e sua Defesa vira 10. Suas outras características não mudam. No início de seus turnos, o alvo pode fazer um teste de Vontade; se passar, retorna à sua forma normal e a magia termina. Requer 3o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "se mudar para formas não humanóides, pode escolher uma Forma Selvagem Aprimorada. Requer 3o círculo.",
      },
      {
        pm_a_mais: 9,
        descricao: "se mudar para formas não humanóides, pode escolher uma Forma Selvagem Superior. Requer 4o círculo.",
      },
      {
        pm_a_mais: 12,
        descricao: "além do normal, no início de seus turnos o alvo pode mudar de forma novamente, como uma ação livre, fazendo novas escolhas. Requer 5o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Miasma Mefítico",
    descricao:
      "A área é coberta por emanações letais. Criaturas na área sofrem 5d6 pontos de dano de ácido e ficam enjoadas por 1 rodada. Se passarem na resistência, sofrem metade do dano e não ficam enjoadas.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "nuvem com 6m de raio",
    duracao: "instantânea",
    resistencia: "Fortitude (veja texto)",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "Truque: muda o alcance para toque, a área para alvo (1 criatura com 0 PV ou menos), a duração para instantânea, a resistência para Fortitude anula e adiciona componente material (pó de ônix no valor de T$ 10). Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por um dia. Se passar, fica imune a este truque por um dia.",
      },
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano em +1d6.",
      },
      {
        pm_a_mais: 3,
        descricao: "muda o alcance para médio, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, você canaliza o Miasma contra uma vítima. Se falhar na resistência, ela morre e você recebe +2 na CD de suas magias por um dia. Se passar, fica imune a este truque por um dia.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Miragem",
    descricao:
      "Você faz um terreno parecer outro, incluindo sons e cheiros. Uma planície pode parecer um pântano, uma floresta pode parecer uma montanha etc. Esta magia pode ser usada para criar armadilhas: areia movediça pode parecer terra firme ou um precipício pode parecer um lago. Você pode alterar, incluir e esconder estruturas dentro da área, mas não criaturas (embora elas possam se esconder nas estruturas ilusórias).",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "cubo de até 90m de lado",
    duracao: "1 dia",
    resistencia: "Vontade desacredita",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "Além do normal, pode alterar a aparência de criaturas escolhidas na área, como se usando Disfarce Ilusório.",
      },
      {
        pm_a_mais: 9,
        descricao: "muda a duração para permanente e adiciona componente material (pó de diamante no valor de T$ 1.000). Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Missão Divina",
    descricao:
      "Esta magia obriga o alvo a cumprir uma tarefa a sua escolha. Ela dura uma semana ou até o alvo cumprir a tarefa, o que vier primeiro. O alvo pode recusar a missão — mas, no fim de cada dia em que não se esforçar para cumprir a tarefa, deve fazer um teste de Vontade; se falhar, sofre uma penalidade cumulativa de –2 em todos os testes e rolagens. A Missão Divina não pode forçar um ato suicida, nem uma missão impossível (como matar um ser que não existe).",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "1 semana ou até ser descarregada",
    resistencia: "Vontade anula (veja texto)",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "muda o alcance para toque, a duração para permanente e adiciona penalidade de –1 PM. Em vez do normal, você inscreve uma marca (como uma tatuagem) na pele do alvo e escolhe um tipo de ação que ativará a marca. Normalmente, será cometer um crime (roubar, matar...) ou outra coisa contrária às Obrigações & Restrições de sua divindade. Sempre que a marca é ativada, o alvo recebe uma penalidade cumulativa de –2 em todos os testes. Muitas vezes, portar essa marca é um estigma por si só, já que esta magia normalmente é lançada em criminosos ou traidores. Uma magia que dissipe outras suprime a marca e suas penalidades por um dia; elas só podem ser totalmente removidas pelo conjurador original ou pela magia Purificação.",
      },
      {
        pm_a_mais: 4,
        descricao: "aumenta a duração para 1 ano ou até ser descarregada.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Montaria Arcana",
    descricao: "Esta magia convoca um parceiro cavalo (ou pônei) de guerra veterano. Sua aparência é de um animal negro com crina e cauda cinzentas e cascos feitos de fumaça, mas você pode mudá-la se quiser. Além dos benefícios normais, a Montaria Arcana pode atravessar terreno difícil sem redução em seu deslocamento. Você pode usar Misticismo no lugar de Cavalgar para efeitos desta montaria (incluindo ser considerado treinado).",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "criatura conjurada",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "além do normal, criaturas do tipo animal em alcance curto da montaria devem fazer um teste de Vontade. Se passarem, ficam abaladas pela cena; se falharem, ficam apavoradas por 1d4 rodadas, depois abaladas pela cena.",
      },
      {
        pm_a_mais: 3,
        descricao: "muda a duração para permanente e adiciona penalidade de –3 PM."
      },
      {
        pm_a_mais: 3,
        descricao: "aumenta o tamanho da montaria em uma categoria. Isso também aumenta o número de criaturas que ela pode carregar — duas para uma criatura Enorme, seis para Colossal. Uma única criatura controla a montaria; as outras apenas são deslocadas."
      },
      {
        pm_a_mais: 3,
        descricao: "muda o nível do parceiro para mestre. Requer 3o círculo."
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Muralha de Ossos",
    descricao:
      "Uma parede de ossos se eleva da terra. A parede tem 15m de comprimento, 9m de altura e 1,5m de espessura. Ela pode ter qualquer forma — não precisa ser uma linha reta —, mas sua base precisa estar sempre tocando o solo. Quando a parede surge, criaturas na área ocupada ou adjacentes sofrem 4d8 pontos de dano de corte e precisam fazer um teste de Reflexos para não ficarem presas no emaranhado de ossos. Uma criatura presa dessa maneira fica agarrada, e pode gastar uma ação padrão para fazer um teste de Atletismo para se soltar. Se passar no teste, sai da muralha para um dos lados adjacentes. Se falhar, sofre 4d8 pontos de dano de corte.\nÉ possível destruir o muro para atravessá-lo ou libertar uma criatura agarrada. Cada trecho de 3m do muro tem Defesa 8, 40 PV e redução de corte, frio e perfuração 10. Também é possível escalar a parede. Isso exige um teste de Atletismo e causa 4d8 pontos de dano de corte para cada 3m escalados.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "muro de ossos",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "aumenta o comprimento em +15m e a altura em +3m.",
      },
      {
        pm_a_mais: 5,
        descricao: "o muro é feito de uma massa de esqueletos animados. Sempre que uma criatura iniciar seu turno adjacente ou escalando a muralha, deve fazer um teste de Reflexos. Se falhar fica agarrada, sofrendo os efeitos normais de estar agarrada pela magia.",
      }
    ],
    tipo: enumTipo.universal,
    circulo: 4,
  },
  {
    nome: "Muralha Elemental",
    descricao:
      "Uma muralha de um elemento a sua escolha se eleva da terra. Ela pode ser um muro de até 30m de comprimento e 3m de altura (ou o contrário) ou uma cúpula de 3m de raio. Os efeitos variam conforme o elemento escolhido.\nFogo. Faz surgir uma violenta cortina de chamas. Um lado da muralha (a sua escolha) emite ondas de calor, que causam 2d6 pontos de dano de fogo em criaturas a até 6m quando você lança a magia e no início de seus turnos. Atravessar a muralha causa 8d6 pontos de dano de fogo. Caso seja criada em uma área onde existem criaturas, elas sofrem dano como se estivessem atravessando a muralha, mas podem fazer um teste de Reflexos para reduzir o dano à metade e escapar para um lado (a criatura escolhe, mas se escapar para o lado quente sofrerá mais 2d6 pontos de dano).\nGelo. Evoca uma parede grossa de gelo denso com 15cm de espessura. Na forma de cúpula, pode prender uma ou mais criaturas, mas elas têm direito a um teste de Reflexos para escapar antes que a cúpula se forme. Cada trecho de 3m da muralha tem Defesa 8, 40 PV e redução de corte e frio 5. Um trecho da muralha que atinja 0 PV será rompido. Qualquer efeito de fogo causa dano dobrado à muralha. Uma criatura que atravessar um trecho rompido da muralha sofre 4d6 pontos de dano de frio.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "muralha de energia",
    duracao: "cena",
    resistencia: "veja texto",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano por atravessar a muralha em +2d6.",
      },
      {
        pm_a_mais: 2,
        descricao: "aumenta o comprimento em +15m e altura em +3m, até 60m de comprimento e 9m de altura.",
      },
      {
        pm_a_mais: 4,
        descricao: "muda a duração para sustentada e adiciona uma nova escolha, Essência. A muralha é invisível e indestrutível — imune a qualquer forma de dano e não afetada por nenhuma magia. Ela não pode ser atravessada nem mesmo por criaturas incorpóreas. No entanto, magias que teletransportam criaturas, como Salto Dimensional, podem atravessá-la. Magias e efeitos de dano, como Bola de Fogo e o sopro de um dragão, não vencem a muralha, mas magias lançadas diretamente sobre uma criatura ou área, como Sono, podem ser lançadas contra alvos que estejam no outro lado como se tivessem linha de efeito.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Névoa",
    descricao:
      "Uma névoa espessa eleva-se de um ponto a sua escolha, obscurecendo toda a visão — criaturas a até 1,5m têm camuflagem leve e criaturas a partir de 3m têm camuflagem total. Um vento forte dispersa a névoa em 4 rodadas e um vendaval a dispersa em 1 rodada. Esta magia não funciona sob a água.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "nuvem com 6m de raio e 6m de altura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "a magia também funciona sob a água, criando uma nuvem de tinta.",
      },
      {
        pm_a_mais: 2,
        descricao: "você pode escolher criaturas no alcance ao lançar a magia; elas enxergam através do efeito. Requer 2o círculo.",
      },
      {
        pm_a_mais: 2,
        descricao: "a nuvem tem um cheiro horrível. No início de seus turnos, qualquer criatura dentro dela, ou qualquer criatura com faro em alcance curto da nuvem, deve fazer um teste de Fortitude. Se falhar, fica enjoada por uma rodada.",
      },
      {
        pm_a_mais: 2,
        descricao: "a nuvem tem um tom esverdeado e se torna cáustica. No início de seus turnos, criaturas dentro dela sofrem 2d4 pontos de dano de ácido.",
      },
      {
        pm_a_mais: 3,
        descricao: "aumenta o dano de ácido em +2d4.",
      },
      {
        pm_a_mais: 5,
        descricao: "além do normal, a nuvem fica espessa, quase sólida. Qualquer criatura dentro dela tem seu deslocamento reduzido a 1,5m.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Oração",
    descricao:
      "Você e os seus aliados no alcance recebem +2 em testes de perícia e rolagens de dano, e todos os seus inimigos no alcance sofrem –2 em testes de perícia e rolagens de dano. Esse efeito é cumulativo com outras magias. Componente material: T$ 25 por PM gasto em incensos ou outras oferendas.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "todas as criaturas (veja texto)",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta os bônus em +1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
      {
        pm_a_mais: 2,
        descricao: "aumenta as penalidades em –1 (penalidade máxima limitada pelo círculo máximo de magia que você pode lançar).",
      },
      {
        pm_a_mais: 7,
        descricao: "muda o alcance para médio. Requer 3o círculo.",
      },
      {
        pm_a_mais: 12,
        descricao: "muda a duração para cena. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Orientação",
    descricao:
      "Em seu próximo teste de perícia, o alvo pode rolar dois dados e ficar com o melhor resultado.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "1 rodada",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "muda a duração para cena. Em vez do normal, escolha um atributo. Sempre que o alvo fizer um teste de perícia baseado no atributo escolhido, pode rolar dois dados e ficar com o melhor resultado. Não se aplica a testes de ataque ou resistência. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "como acima, mas, em vez de um atributo, escolha entre atributos físicos (Força, Destreza e Constituição) ou mentais (Inteligência, Sabedoria e Carisma). Requer 3o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda o alvo para criaturas escolhidas. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Palavra Primordial",
    descricao:
      "Você pronuncia uma palavra do idioma primordial da Criação, que causa um dos efeitos abaixo, a sua escolha.\nAtordoar: a criatura fica atordoada por 1d4+1 rodadas (apenas uma vez por cena). Se passar no teste de resistência, ou se já foi atordoada por esta magia, fica desprevenida por 1d4 rodadas.\nCegar: a criatura fica cega. Se passar no teste de resistência, fica ofuscada por 1d4 rodadas.\nMatar: a criatura morre. Além do teste de Vontade, a criatura tem direito a um teste de Fortitude se tiver mais da metade de seus PV. Se passar em qualquer um deles, em vez de morrer perde 10d8 pontos de vida e fica sangrando.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura com menos níveis que você",
    duracao: "instantânea ou veja texto",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "sempre que o alvo fizer o teste de Vontade e falhar, a marca causa 3d6 pontos de dano psíquico no alvo. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 5,
  },
  {
    nome: "Perdição",
    descricao:
      "Amaldiçoa os alvos, que recebem –1 em testes de ataque e rolagens de dano. Perdição anula Bênção.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "criaturas escolhidas",
    duracao: "cena",
    resistencia: "nenhuma",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta as penalidades em –1 (bônus máximo limitado pelo círculo máximo de magia que você pode lançar).",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Poeira da Podridão",
    descricao:
      "Você manifesta uma nuvem de poeira carregada de energia negativa, que apodrece lentamente as criaturas na área. Ao lançar a magia, e no início de seus turnos, criaturas na área sofrem 2d8+8 pontos de dano de trevas (Fortitude reduz à metade). Alvos que falharem no teste não podem recuperar PV por uma rodada.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "nuvem com 6m de raio",
    duracao: "cena",
    resistencia: "Fortitude (veja texto)",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano em 1d8+4.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Possessão",
    descricao:
      "Você projeta sua consciência no corpo do alvo. Enquanto possuir uma criatura, você assume o controle total do corpo dela. O seu próprio corpo fica inconsciente e a consciência do alvo fica inerte. Em termos de jogo, você continua usando a sua ficha, mas com os atributos físicos e deslocamento da criatura. Se o alvo passar no teste de resistência, sabe que você tentou possuí-lo e fica imune a esta magia por um dia. Caso o corpo da criatura morra enquanto você a possui, a criatura morre e você deve fazer um teste de Vontade contra a CD da sua própria magia. Se passar, sua consciência retorna para o seu corpo (contanto que esteja dentro do alcance). Do contrário, você também morre. Retornar para o seu corpo voluntariamente é uma ação livre.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "1 criatura",
    duracao: "1 dia",
    resistencia: "Vontade anula",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao: "você ganha acesso às habilidades de raça e classe da criatura.",
      },
      {
        pm_a_mais: 5,
        descricao: "enquanto a magia durar e você estiver dentro do alcance do seu corpo original, pode “saltar” de uma criatura possuída para outra. O novo alvo tem direito a um teste de Vontade. Se falhar, você assume o controle do corpo dele e o alvo anterior recobra a consciência.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda a duração para permanente, mas destrói seu corpo original no processo. Uma criatura possuída pode fazer um teste de Vontade no começo do dia para retomar seu corpo. Se passar, recobra a consciência (e a sua própria consciência fica inerte). O teste se repete no início de cada dia. Se o corpo de uma criatura possuída morrer e houver outra criatura em alcance curto, você pode tentar possuí-la. Enquanto houver novos corpos para possuir, você é imortal!",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Potência Divina",
    descricao:
      "Você canaliza o poder de sua divindade. Você aumenta uma categoria de tamanho (seu equipamento muda de acordo) e recebe Força +4 e RD 10. Você não pode lançar magias enquanto estiver sob efeito de Potência Divina.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o bônus de Força em +1.",
      },
      {
        pm_a_mais: 5,
        descricao: "aumenta a RD em +5.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alcance para toque e o alvo para 1 criatura. A magia falha se você e o alvo não forem devotos da mesma divindade.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Premonição",
    descricao:
      "Vislumbres do futuro permitem que você reavalie suas ações. Uma vez por rodada, você pode rolar novamente um teste recém realizado, mas deve aceitar o resultado da nova rolagem.",
    execucao: enumExecucao.padrao,
    alcance: "pessoal",
    alvo: "você",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "muda a execução para reação, o alcance para curto, o alvo para 1 criatura e a resistência para Vontade anula. Em vez do normal, você pode rolar novamente um teste de resistência recém realizado por uma criatura. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 4,
  },
  {
    nome: "Primor Atlético",
    descricao:
      "Você modifica os limites físicos do alvo, que recebe deslocamento +9m e +10 em testes de Atletismo.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "além do normal, o alvo recebe um bônus adicional de +20 em testes de Atletismo para saltar (para um bônus total de +30).",
      },
      {
        pm_a_mais: 1,
        descricao: "além do normal, o alvo pode escalar paredes e tetos sem precisar fazer testes de Atletismo. Para isso, precisa estar com as mãos livres, mas pode usar uma única mão se ficar parado no lugar. O alvo não fica desprevenido enquanto escala.",
      },
      {
        pm_a_mais: 1,
        descricao: "muda a execução para ação de movimento, o alcance para pessoal, o alvo para você e a duração para instantânea. Você salta muito alto e pousa em alcance corpo a corpo de uma criatura em alcance curto. Se fizer um ataque corpo a corpo contra essa criatura neste turno, recebe os benefícios e penalidades de uma investida e sua arma causa um dado extra de dano do mesmo tipo durante este ataque.",
      },
      {
        pm_a_mais: 3,
        descricao: "além do normal, ao fazer testes de perícias baseadas em Força, Destreza ou Constituição, o alvo pode rolar dois dados e escolher o melhor. Não afeta testes de ataque ou resistência. Requer 2o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Profanar",
    descricao:
      "Você enche a área com energia negativa. Dano causado por efeitos de trevas é maximizado dentro da área. Isso também afeta PV curados em mortos-vivos por esses efeitos. Esta magia não pode ser lançada em uma área contendo um símbolo visível dedicado a uma divindade que não a sua. Profanar anula Consagrar.",
    execucao: enumExecucao.padrao,
    alcance: "longo",
    alvo: "esfera com 9m de raio",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "além do normal, mortos-vivos na área recebem +2 na Defesa e +2 em todos os testes.",
      },
      {
        pm_a_mais: 2,
        descricao: "aumenta os bônus para mortos-vivos em +1.",
      },
      {
        pm_a_mais: 9,
        descricao: "muda a execução para 1 hora, a duração para permanente e adiciona componente material (incenso e óleos no valor de T$ 1.000). Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Projetar Consciência",
    descricao:
      "Esta magia faz com que sua consciência deixe seu corpo e se transporte instantaneamente para um local ou para perto de uma criatura alvo. Se escolher um local, ele precisa ser conhecido por você. Se escolher uma criatura, você transporta sua consciência até onde a criatura estiver, contanto que estejam no mesmo plano.\nVocê adquire uma forma fantasmagórica invisível, mas pode se mostrar usando uma ação de movimento. Pode se mover em qualquer direção com deslocamento igual ao seu deslocamento normal. Você pode atravessar objetos sólidos, mas não pode terminar seu turno dentro de um objeto sólido. Seu deslocamento não precisa ser em linha reta. Você pode abrir portas e gavetas, acender velas, falar, ouvir, cheirar e sentir o gosto de comidas e bebidas. Você não pode atacar ou lançar magias, mas pode usar magias que já estejam ativas. Você não pode interagir com criaturas ou objetos físicos de nenhuma outra forma.\nVocê pode terminar a magia voluntariamente como uma ação livre.",
    execucao: enumExecucao.padrao,
    alcance: "ilimitado (veja texto)",
    alvo: "local ou criatura conhecidos",
    duracao: "sustentada",
    resistencia: "",
    escola: enumEscolas.adivinhacao,
    aprimoramentos: [
      {
        pm_a_mais: 10,
        descricao: "além do normal, sua projeção é capaz de lançar magias que não precisem de componentes materiais e tenham duração diferente de sustentada. Sua forma fantasmagórica funciona como na magia Forma Etérea, sendo afetada por magias de abjuração e essência, mas as magias que ela lança podem afetar criaturas corpóreas.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 5,
  },
  {
    nome: "Proteção contra Magia",
    descricao:
      "Você protege o alvo contra efeitos mágicos nocivos. O alvo recebe +5 em testes de resistência contra magias.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "muda o bônus para +10. Requer 4o círculo.",
      },
      {
        pm_a_mais: 4,
        descricao: "em vez do normal, o alvo fica imune a uma escola de magia a sua escolha. Requer 4o Círculo.",
      },
      {
        pm_a_mais: 9,
        descricao: "em vez do normal, o alvo fica imune a duas escolas de magia a sua escolha. Requer 5o Círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Proteção Divina",
    descricao:
      "Esta magia cria uma barreira mística invisível que fornece ao alvo +2 em testes de resistência.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o bônus concedido em +1.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda a execução para reação, o alcance para curto e a duração para 1 rodada. Em vez do normal, o alvo recebe +5 no próximo teste de resistência que fizer (cumulativo com o efeito básico desta magia).",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alvo para área de esfera com 3m de raio. Todos os aliados dentro do círculo recebem o bônus da magia. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "torna o alvo imune a efeitos mentais e de medo. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Purificação",
    descricao:
      "Você purifica a criatura tocada, removendo uma condição dela entre abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "também recupera todos os PV perdidos por veneno.",
      },
      {
        pm_a_mais: 2,
        descricao: "em vez de uma, remove todas as condições listadas.",
      },
      {
        pm_a_mais: 3,
        descricao: "também permite que o alvo solte qualquer item amaldiçoado que esteja segurando (mas não remove a maldição do item em si).",
      },
      {
        pm_a_mais: 7,
        descricao: "também dissipa magias e efeitos mágicos que causem uma das condições listadas.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Queda Suave",
    descricao:
      "O alvo cai lentamente. A velocidade da queda é reduzida para 18m por rodada — o suficiente para não causar dano. Como lançar esta magia é uma reação, você pode lançá-la rápido o bastante para salvar a si ou um aliado de quedas inesperadas. Lançada sobre um projétil, a magia faz com que ele caia lentamente, mas não afeta seu dano.",
    execucao: enumExecucao.reacao,
    alcance: "curto",
    alvo: "1 criatura ou objeto Grande ou menor",
    duracao: "até chegar ao solo ou cena, o que vier primeiro",
    resistencia: "",
    escola: enumEscolas.transmutacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "muda o alvo para 1 criatura ou objeto de tamanho Enorme ou menor.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alvo para 1 criatura ou objeto de tamanho Colossal ou menor.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alvo para 1 criatura ou objeto de tamanho Gigantesco ou menor.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Raio de Enfraquecimento",
    descricao:
      "Um raio de energia negativa enfraquece o alvo. Ele recebe –2 em testes de ataque e rolagens de dano. Um alvo que falhar no teste de resistência também fica fatigado. Um alvo que já esteja fatigado fica exausto. Um alvo que já esteja exausto fica inconsciente. Esta magia não pode ser usada para causar dano.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao: "Muda o alcance para toque e a resistência para Fortitude anula. Em vez do normal, sua mão emana um brilho púrpura e, ao tocar o alvo, ele fica fatigado.",
      },
      {
        pm_a_mais: 2,
        descricao: "em vez do normal, se falhar na resistência o alvo fica exausto. Se passar, fica fatigado. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "como acima, mas muda o alvo para criaturas escolhidas. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 1,
  },
  {
    nome: "Raio Polar",
    descricao:
      "Você dispara um raio azul esbranquiçado de gelo e ar congelante. O alvo sofre 10d8 pontos de dano de frio e fica preso em um bloco de gelo (paralisado). Se passar no teste de resistência, sofre metade do dano e, em vez de paralisado, fica lento por uma rodada.\nÉ possível quebrar o gelo para libertar uma criatura presa: o bloco tem 20 PV, RD 10 e é vulnerável a fogo. Uma criatura presa pode gastar uma ação completa para fazer um teste de Atletismo e se libertar do gelo; cada vez que passar no teste causa 10 pontos de dano ao bloco, ignorando a RD.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "Fortitude parcial",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "aumenta o dano em +2d8.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda o alvo para área de esfera com 6m de raio. Em vez de um raio, você dispara uma bola de gelo que explode, causando o efeito da magia em todas as criaturas na área.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Raio Solar",
    descricao:
      "Você canaliza uma poderosa rajada de energia positiva que ilumina o campo de batalha. Criaturas na área sofrem 4d8 pontos de dano de luz (ou 4d12, se forem mortos-vivos) e ficam ofuscadas por uma rodada. Se passarem na resistência, sofrem metade do dano e não ficam ofuscadas.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "linha",
    duracao: "instantânea",
    resistencia: "Reflexos (veja texto)",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 0,
        descricao: "muda a duração para cena e a resistência para nenhuma. Em vez do normal, cria um facho de luz que ilumina a área da magia. Uma vez por rodada, você pode mudar a direção do facho como uma ação livre.",
      },
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano ou cura em +1d8 (ou +1d12 em mortos-vivos).",
      },
      {
        pm_a_mais: 3,
        descricao: "em vez do normal, criaturas vivas a sua escolha na área curam 4d8 pontos de vida; o restante sofre o dano normalmente.",
      },
      {
        pm_a_mais: 3,
        descricao: "criaturas que falhem na resistência ficam cegas por 1d4 rodadas.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Reanimação Impura",
    descricao:
      "Você reanima uma criatura morta recentemente (dentro da mesma cena), trazendo sua alma de volta ao corpo de forma forçada. O tipo da criatura muda para morto-vivo, mas ela retém suas memórias e habilidades de quando estava viva, podendo inclusive lançar magias. A criatura pode pensar e falar livremente, mas obedece cegamente a você. Ela não é afetada por magias que afetem apenas mortos-vivos, mas é afetada por magias que afetem apenas criaturas vivas.\nA criatura reanimada tem 1d6 pontos de vida temporários por nível de magia que você gastou para lançar esta magia. Quando esses pontos de vida temporários acabarem, a criatura morre de novo. Você pode reanimar uma criatura morta apenas uma vez. Se ela morrer de novo, não pode ser reanimada novamente.",
    execucao: enumExecucao.completa,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Refúgio",
    descricao:
      "Esta magia cria um domo imóvel e quase opaco por fora, mas transparente pelo lado de dentro. Ele protege contra calor, frio e forças pequenas, mas não contra qualquer coisa capaz de causar dano. Assim, o domo protege contra neve e vento comuns, mas não contra uma flecha ou Bola de Fogo.\nPorém, como o domo é quase opaco, qualquer criatura dentro dele tem camuflagem total contra ataques vindos de fora. Criaturas podem entrar e sair do domo livremente. Descansar dentro do Refúgio concede recuperação normal de PV e PM.",
    execucao: enumExecucao.completa,
    alcance: "curto",
    alvo: "esfera com 6m de raio",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "além do normal, os limites do domo são envoltos por uma fumaça escura e espessa, que impede criaturas do lado de fora de enxergar ou ouvir o que está dentro. Criaturas do lado de dentro enxergam e ouvem normalmente o que está do lado de fora. A fumaça também bloqueia magias de adivinhação.",
      },
      {
        pm_a_mais: 3,
        descricao: "em vez do normal, cria uma cabana que comporta até 10 criaturas Médias. Descansar nesse espaço concede recuperação confortável (recupera PV e PM igual ao dobro do nível). Para todos os efeitos é uma cabana normal, com paredes de madeira, telhado, uma porta, duas janelas e alguma mobília (camas, uma mesa com bancos e uma lareira). A porta e as janelas têm 15 PV, RD 5 e são protegidas por um efeito idêntico à magia Tranca Arcana. As paredes têm 200 PV e RD 5.",
      },
      {
        pm_a_mais: 3,
        descricao: "em vez do normal, cria um espaço extradimensional, similar a uma caverna vazia e escura, que comporta até 10 criaturas Médias. A entrada para o espaço precisa estar desenhada em um objeto fixo como uma grande pedra ou árvore. Qualquer criatura que atravesse a entrada consegue entrar no espaço. Nenhum efeito a partir do mundo real afeta o espaço e vice-versa, mas aqueles que estiverem dentro podem observar o mundo real como se uma janela de 1m estivesse centrada na entrada. Qualquer coisa que esteja no espaço extradimensional surge no mundo real na área vazia mais próxima da entrada quando a duração da magia acaba. Requer 3o círculo.",
      },
      {
        pm_a_mais: 9,
        descricao: "em vez do normal, cria uma mansão extradimensional que comporta até 100 criaturas Médias, com quartos luxuosos, comida e bebida e dez servos fantasmagóricos (como na magia Servos Invisíveis). Descansar na mansão concede recuperação luxuosa (recupera PV e PM igual ao triplo do nível). A mansão tem uma única entrada, uma porta feita de luz. Você pode deixá-la visível ou invisível como uma ação livre e apenas criaturas escolhidas por você podem passar. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Relâmpago",
    descricao:
      "Você dispara um raio de eletricidade que causa 1d8 pontos de dano elétrico por nível de magia (máximo 10d8).",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "linha",
    duracao: "instantânea",
    resistencia: "Reflexos (veja texto)",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano em +1d8.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alvo para área de esfera com 6m de raio. Em vez de um raio, você dispara uma bola de eletricidade que explode, causando o efeito da magia em todas as criaturas na área.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 3,
  },
  {
    nome: "Relâmpago flamejante de Reynard",
    descricao:
      "Esta é uma magia poderosa, desenvolvida pelo metódico e impassível arquimago Reynard. Você invoca as energias elementais do fogo e do relâmpago, fazendo com que uma de suas mãos fique em chamas e a outra mão eletrificada. Pela duração da magia, você pode gastar uma ação de movimento para disparar uma bola de fogo (10d6 pontos de dano de fogo numa esfera com 6m de raio) ou um relâmpago (10d6 pontos de dano de eletricidade numa linha). Você também pode, como uma ação padrão, usar as duas mãos num ataque de energia mista (20d12 pontos de dano, metade de fogo e metade de eletricidade, numa esfera com 9m de raio). Você precisa estar com as duas mãos livres para invocar o efeito misto e isso consome toda a energia da magia, terminando-a imediatamente. Por se tratar de um ritual complexo, o tempo de execução dessa magia não pode ser reduzido.",
    execucao: enumExecucao.outra,
    alcance: "médio",
    alvo: "bolas de fogo e relâmpagos",
    duracao: "sustentada",
    resistencia: "Reflexos reduz à metade",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta o dano das rajadas em +1d6 e o dano da rajada mista em +2d12.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 4,
  },
  {
    nome: "Réquiem",
    descricao:
      "Esta magia cria uma ilusão particular para cada uma das criaturas que atingir. Enquanto a magia durar, no início de cada um de seus turnos, cada criatura afetada deve fazer um teste de Vontade; se falhar, acha que não tomou as ações que realmente fez no turno anterior e é obrigada a repetir as mesmas ações neste turno, com uma penalidade cumulativa de –5 em todos os testes para cada vez que se repetir (a penalidade não se aplica ao teste de Vontade contra esta magia). Por exemplo, se a criatura se aproximou de um alvo e o atacou, precisa se aproximar desse mesmo alvo e atacar novamente. A ação repetida consome PM e recursos normalmente e, caso exija um teste de resistência, qualquer alvo faz esse teste com um bônus igual ao da penalidade desta magia.",
    execucao: enumExecucao.completa,
    alcance: "curto",
    alvo: "criaturas escolhidas",
    duracao: "sustentada",
    resistencia: "Vontade anula",
    escola: enumEscolas.ilusao,
    aprimoramentos: [],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Resistência a Energia",
    descricao:
      "Ao lançar esta magia, escolha entre ácido, eletricidade, fogo, frio, luz ou trevas. O alvo recebe redução de dano 10 contra o tipo de dano escolhido.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "aumenta a redução de dano em +5.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda a duração para um dia. Requer 2o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda o alcance para curto e o alvo para criaturas escolhidas. Requer 3o círculo.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda o efeito para redução de dano contra todos os tipos listados na magia. Requer 3o círculo.",
      },
      {
        pm_a_mais: 9,
        descricao: "muda o efeito para imunidade a um tipo listado na magia. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 1,
  },
  {
    nome: "Rogar Maldição",
    descricao:
      "Você entoa cânticos maléficos que amaldiçoam uma vítima, criando efeitos variados. Ao lançar a magia, escolha entre os seguintes.\nDebilidade: o alvo fica esmorecido e não pode se comunicar ou lançar magias. Ainda reconhece seus aliados e pode segui-los e ajudá-los, mas sempre de maneira simplória.\nDoença: muda a duração para instantânea. O alvo contrai uma doença a sua escolha, que o afeta imediatamente (sem período de incubação).\nFraqueza: o alvo fica debilitado e lento.\nIsolamento: o alvo perde o uso de um de seus cinco sentidos a sua escolha. Se perder a visão, fica cego. Se perder a audição, fica surdo. Se perder o olfato ou paladar, não pode usar a habilidade faro. Se perder o tato, fica caído e não pode se levantar.\nVocê também pode inventar sua própria maldição, usando esses exemplos como sugestões, mas o mestre tem a palavra final sobre o efeito.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "sustentada",
    resistencia: "Fortitude anula",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "aumenta o número de efeitos que você pode escolher em +1. Requer 3o círculo.",
      },
      {
        pm_a_mais: 7,
        descricao: "muda a duração para permanente e resistência para Fortitude parcial. Se passar, a criatura ainda sofre os efeitos da maldição, mas por 1 rodada. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 2,
  },
  {
    nome: "Roubar a Alma",
    descricao:
      "Você rouba a alma da vítima, armazenando-a em um objeto. Se o alvo passar no teste de resistência, sente o impacto de sua alma ser puxada para fora do corpo e fica abalado por 1 rodada. Se falhar, seu corpo fica caído, inconsciente e inerte, enquanto sua alma é transportada para dentro do objeto. O corpo não envelhece nem se decompõe, permanecendo em estase. Ele pode ser atacado e destruído normalmente. O objeto escolhido deve custar T$ 1.000 por nível ou ND da criatura e não possuir uma alma presa ou se quebrará quando a magia for lançada (embora personagens não conheçam o conceito de “nível” dentro do mundo de jogo, podem ter noção do poder geral de uma criatura, estimando assim o valor do objeto). Se o objeto for destruído, a magia se esvai. Se o corpo ainda estiver disponível, a alma retorna para ele. Caso contrário, escapa para os Mundos dos Deuses.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "1 criatura",
    duracao: "permanente",
    resistencia: "Vontade parcial",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 5,
        descricao: "o objeto que abriga a alma detém os mesmos PM totais que o alvo. Se estiver empunhando o objeto, você pode usar esses PM para lançar magias no lugar dos seus. O objeto recupera PM por dia como se o personagem estivesse em descanso normal.",
      },
      {
        pm_a_mais: 10,
        descricao: "como uma reação ao lançar esta magia, você possui o corpo sem alma do alvo, como na magia Possessão (mesmo que não conheça a magia).",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 5,
  },
  {
    nome: "Runa de Proteção",
    descricao:
      "Você escreve uma runa pessoal em uma superfície fixa, como uma parede ou o chão, que protege uma pequena área ao redor. Quando uma criatura entra na área afetada a runa explode, causando 6d6 pontos de dano em todos os alvos a até 6m. A criatura que ativa a runa não tem direito a teste de resistência; outras criaturas na área têm direito a um teste de Reflexos para reduzir o dano à metade. Quando lança a magia, você escolhe o tipo de dano, entre ácido, eletricidade, fogo, frio, luz ou trevas.\nVocê pode determinar que a runa se ative apenas em condições específicas — por exemplo, apenas por goblins ou apenas por mortos-vivos. Você também pode criar uma palavra mágica que impeça a runa de se ativar.\nUm personagem pode encontrar a runa com um teste de Investigação e desarmá-la com um teste de Ladinagem.",
    execucao: enumExecucao.outra,
    alcance: "toque",
    alvo: "uma área de 6m de raio",
    duracao: "permanente até ser descarregada",
    resistencia: "varia (veja o texto)",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "aumenta o dano em +2d6.",
      },
      {
        pm_a_mais: 1,
        descricao: "muda o alvo para “você” e o alcance para “pessoal”. Ao invés do normal, escolha uma magia de 1o círculo que você conhece e pode lançar, com tempo de execução de uma ação padrão ou menor. Você escreve a runa em seu corpo e especifica uma condição de ativação como, por exemplo, “quando eu for alvo de um ataque” ou “quando for alvo de uma magia”. Quando a condição for cumprida, você pode ativar a runa e lançar a magia escolhida como uma reação. Você só pode escrever uma runa em seu corpo ao mesmo tempo.",
      },
      {
        pm_a_mais: 3,
        descricao: "como o aprimoramento anterior, mas você pode escolher magias de 2o círculo. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 2,
  },
  {
    nome: "Salto Dimensional",
    descricao:
      "Esta magia transporta você para outro lugar dentro do alcance. Você não precisa perceber nem ter linha de efeito ao seu destino, podendo simplesmente imaginá-lo. Por exemplo, pode se transportar 3m adiante para ultrapassar uma porta fechada. Uma vez transportadas, criaturas não podem agir até a rodada seguinte. Esta magia não permite que você apareça dentro de um corpo sólido; se o ponto de chegada não tem espaço livre, você ressurge na área vazia mais próxima.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "você",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "muda o alcance para médio.",
      },
      {
        pm_a_mais: 1,
        descricao: "muda o alvo para você e uma criatura voluntária. Você pode escolher este aprimoramento mais vezes para aumentar o número de alvos adicionais em +1, mas deve estar tocando todos os alvos.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda a execução para reação. Em vez do normal, você recebe +5 na Defesa e em testes de Reflexos contra um ataque ou efeito que esteja prestes a atingi-lo. Após a resolução do efeito, salta para um espaço adjacente (1,5m).",
      },
      {
        pm_a_mais: 3,
        descricao: "muda o alcance para longo.",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 2,
  },
  {
    nome: "Santuário",
    descricao:
      "Qualquer criatura que tente fazer uma ação hostil contra o alvo deve fazer um teste de Vontade. Se falhar, não consegue, perde a ação e não pode tentar novamente até o fim da cena. Santuário não protege o alvo de efeitos de área.\nAlém disso, o próprio alvo também não pode fazer ações hostis (incluindo forçar outras criaturas a atacá-lo), ou a magia é dissipada — mas pode usar habilidades e magias de cura e suporte, como Curar Ferimentos e Bênção.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "Vontade anula",
    escola: enumEscolas.abjuracao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "além do normal, escolha um tipo de criatura entre animal, construto ou morto-vivo. Você não pode ser percebido por criaturas não inteligentes (Int –4 ou menor) do tipo escolhido.",
      },
      {
        pm_a_mais: 9,
        descricao: "também protege o alvo contra efeitos de área. Uma criatura que tente atacar uma área que inclua o alvo deve fazer o teste de Vontade; se falhar, não consegue e perde a ação. Ela só pode tentar novamente se o alvo sair da área.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
  {
    nome: "Segunda Chance",
    descricao:
      "Um brilho de luz, na forma de asas de fênix, emana do alvo. Ele recupera 200 pontos de vida e se cura de qualquer das seguintes condições: abalado, apavorado, alquebrado, atordoado, cego, confuso, debilitado, enjoado, envenenado, esmorecido, exausto, fascinado, fatigado, fraco, frustrado, lento, ofuscado, paralisado, pasmo ou surdo.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
      {
        pm_a_mais: 1,
        descricao: "aumenta a cura em +20 PV.",
      },
      {
        pm_a_mais: 2,
        descricao: "muda o alcance para curto e o alvo para até 5 criaturas.",
      },
      {
        pm_a_mais: 5,
        descricao: "muda o alvo para uma criatura que tenha morrido há até uma rodada. Esta magia pode curá-la.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 5,
  },
  {
    nome: "Selo de Mana",
    descricao:
      "Seu toque manifesta um selo mágico na pele do alvo, que atrapalha o fluxo de mana. Pela duração da magia, sempre que o alvo realizar qualquer ação que gaste PM, deve fazer um teste de Vontade; se passar, faz a ação normalmente. Se falhar, a ação não tem efeito (mas os PM são gastos mesmo assim).",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "cena",
    resistencia: "Vontade parcial",
    escola: enumEscolas.encantamento,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "muda o alcance para curto e o alvo para criaturas escolhidas dentro do alcance. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 3,
  },
  {
    nome: "Semiplano",
    descricao:
      "Você cria uma dimensão particular. Você pode entrar no semiplano gastando uma ação padrão e 10 PM, desaparecendo do plano material como se tivesse se teletransportado. Você pode levar criaturas voluntárias que esteja tocando, ao custo de 1 PM por criatura extra. Você também pode levar objetos que esteja tocando, ao custo de 1 PM por objeto Médio ou menor, 2 PM por objeto Grande, 5 PM por Enorme e 10 PM por Colossal. Uma vez no semiplano, pode gastar uma ação completa para voltar ao plano material, no mesmo local onde estava. Caso conheça a magia Viagem Planar, pode lançá-la para voltar ao plano material em outro local.\nVocê escolhe a forma e a aparência do semiplano — uma caverna, um asteroide que singra o éter, um palacete de cristal etc. Ele contém ar, luz e calor, mas além disso é vazio. Entretanto, você pode levar itens (mobília, ferramentas etc.) a cada viagem.",
    execucao: enumExecucao.completa,
    alcance: "curto",
    alvo: "semiplano com 30m de lado",
    duracao: "1 dia",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 2,
        descricao: "adiciona alvo (1 criatura).",
      },
      {
        pm_a_mais: 5,
        descricao: "muda a duração para permanente e adiciona componente material (maquete do semiplano feita de materiais preciosos no valor de T$ 5.000).",
      },
    ],
    tipo: enumTipo.arcana,
    circulo: 5,
  },
  {
    nome: "Servo Divino",
    descricao:
      "Você pede a sua divindade que envie um espírito para ajudá-lo. Esse espírito realiza uma tarefa a sua escolha que possa ser cumprida em até uma hora — desde algo simples como “use suas asas para nos levar até o topo da montanha” até algo complexo como “escolte esses camponeses até o castelo”. A magia é descarregada quando a criatura cumpre a tarefa, retornando a seu plano natal. O tipo de criatura é escolhido pelo mestre, de acordo com as necessidades da tarefa.",
    execucao: enumExecucao.padrao,
    alcance: "curto",
    alvo: "Criatura conjurada",
    duracao: "cena ou até ser descarregada",
    resistencia: "",
    escola: enumEscolas.convocacao,
    aprimoramentos: [
      {
        pm_a_mais: 4,
        descricao: "muda a duração para um dia ou até ser descarregada. O espírito realiza uma tarefa a sua escolha que exija até um dia. O custo do pagamento aumenta para T$ 500. O resto segue normal.",
      },
      {
        pm_a_mais: 9,
        descricao: "muda a duração para 1 semana ou até ser descarregada. O espírito realiza uma tarefa que exija até uma semana. O custo do pagamento aumenta para T$ 1.000. O resto segue normal.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 3,
  },
  {
    nome: "Servo Morto-Vivo",
    descricao:
      "Esta magia transforma o cadáver de um humanoide, animal ou monstro em um esqueleto ou zumbi (conforme o estado de conservação do corpo). O morto-vivo então obedece a todos os seus comandos, mesmo suicidas. Se quiser que o morto-vivo o acompanhe, ele funciona como um parceiro iniciante, de um tipo a sua escolha entre ajudante, atirador, combatente, fortão, guardião ou montaria.\nUma vez por rodada, quando sofre dano, você pode sacrificar um servo morto-vivo e evitar esse dano. O servo é destruído no processo e não pode ser reanimado.",
    execucao: enumExecucao.completa,
    alcance: "toque",
    alvo: "1 cadáver",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.necromancia,
    aprimoramentos: [
      {
        pm_a_mais: 3,
        descricao: "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria um carniçal. Ele pode funcionar como um parceiro veterano, escolhido entre ajudante, atirador, combatente, fortão ou guardião. O resto segue normal.",
      },
      {
        pm_a_mais: 3,
        descricao: "muda o componente material para pó de ônix negro (T$ 500). Em vez de um zumbi ou esqueleto, cria uma sombra. Ela pode funcionar como um parceiro veterano, escolhido entre assassino, combatente ou perseguidor. O restante da magia segue normal.",
      },
      {
        pm_a_mais: 7,
        descricao: "muda o componente material para ferramentas de embalsamar (T$ 1.000). Em vez de um zumbi ou esqueleto, cria uma múmia. Ela pode funcionar como um parceiro mestre, escolhido entre ajudante, destruidor, guardião ou médico. O restante da magia segue normal. Requer 4o círculo.",
      },
    ],
    tipo: enumTipo.universal,
    circulo: 3,
  }
];

// Servos Invisíveis
// Arcana 2 (Convocação)
// Execução: padrão; Alcance: longo;

// Efeito: criaturas conjuradas; Dura-
// ção: 1 cena.

// Você cria até três servos invisíveis e

// silenciosos, capazes de realizar tare-
// fas simples como apanhar lenha, co-
// lher frutos, varrer o chão ou alimentar

// um cavalo. Os servos podem ser usa-
// dos para manter arrumada e organiza-
// da uma mansão ou pequena torre ou

// para preparar um acampamento nos
// ermos para você e seus aliados (veja a
// perícia Sobrevivência, na página 123).

// Eles também podem ajudá-lo em tare-
// fas mais complexas, como fazer uma

// pesquisa ou preparar uma poção, mas
// isso consome sua energia mágica. Você
// pode “gastar” um servo para receber
// um bônus não cumulativo de +2 em
// um teste de perícia (exceto testes de
// ataque e resistência). Os servos não
// são criaturas reais; não podem lutar,

// nem resistir a qualquer dano ou efei-
// to que exija um teste de resistência ou

// teste oposto — falharão automatica-
// mente no teste e serão destruídos.

// +2 PM: aumenta o número de servos
// conjurados em 1.
// +3 PM: você pode comandar os servos
// para realizar uma única tarefa no seu
// lugar. Em termos de jogo, eles passam

// automaticamente em um teste de perí-
// cia com CD máxima igual ao seu nível,

// +2 para cada servo conjurado. O tem-
// po necessário para realizar a tarefa é o

// tempo do uso da perícia em questão.
// Requer 3o círculo.
// Seta Infalível
// de Talude
// Arcana 1 (Evocação)
// Execução: padrão; Alcance: médio;
// Alvos: criaturas escolhidas; Duração:
// instantânea.
// Favorita entre arcanistas iniciantes,
// esta magia lança duas setas de energia

// que causam 1d4+1 pontos de dano de

// essência cada. Você pode lançar as se-
// tas em alvos diferentes ou concentrá-las

// num mesmo alvo. Caso você possua um
// bônus no dano de magias, como pelo
// poder Arcano de Batalha, ele é aplicado
// em apenas uma seta (o bônus vale para
// a magia, não cada alvo).
// +2 PM: muda as setas para lanças de
// energia que surgem e caem do céu.
// Cada lança causa 1d8+1 pontos de
// dano de essência. Requer 2o círculo.

// +2 PM: muda o número de setas/lan-
// ças para três.

// +4 PM: muda o número de setas/lan-
// ças para cinco. Requer 2o círculo.

// +9 PM: muda o número de setas/lan-
// ças para dez. Requer 4o círculo.

// Silêncio
// Divina 2 (Ilusão)
// Execução: padrão; Alcance: médio;

// Área: esfera com 6m de raio; Dura-
// ção: sustentada.

// Um silêncio sepulcral recai sobre a
// área e nenhum som é produzido nela.
// Enquanto estiverem na área, todas as
// criaturas ficam surdas. Além disso,

// como lançar magias exige palavras má-
// gicas, normalmente nenhuma magia

// pode ser lançada dentro da área.

// +1 PM: muda a área para alvo de 1 ob-
// jeto. Em vez do normal, o alvo emana

// uma área de silêncio com 3m de raio.
// Se lançar a magia num objeto de uma
// criatura involuntária, ela tem direito a
// um teste de Vontade para anulá-la.
// +2 PM: muda a duração para cena. Em

// vez do normal, nenhum som pode dei-
// xar a área, mas criaturas dentro da área

// podem falar, ouvir e lançar magias com
// palavras mágicas normalmente.
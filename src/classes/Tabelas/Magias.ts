import {
  Magia,
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
      "Esta magia só pode ser lançada em uma área com vegetação. As plantas se enroscam nas criaturas da área. Aquelas que falharem na resistência ficam enredadas. Uma vítima pode se libertar com uma ação padrão e um teste de Acrobacia ou Atletismo. Além disso, a área é considerada terreno difícil. No início de seus turnos, a vegetação tenta enredar novamente qualquer criatura na área, exigindo um novo teste de Reflexos.\nTruque: muda a área para alvo de 1 planta e a resistência para nenhuma. Em vez do normal, você pode fazer a planta se mover como se fosse animada. Ela não pode causar dano ou atrapalhar a concentração de um conjurador.",
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
      "Esta magia cria uma ilusão visual (uma criatura, uma parede...) ou sonora (um grito de socorro, um uivo assustador...). A magia cria apenas imagens ou sons simples, com volume equivalente ao tom de voz normal para cada cubo de 1,5m no efeito. Não é possível criar cheiros, texturas ou temperaturas, nem sons complexos, como uma música ou diálogo. Criaturas e objetos atravessam uma ilusão sem sofrer dano, mas a magia pode, por exemplo, esconder uma armadilha ou inimigo. A magia é dissipada se você sair do alcance.\nTruque: muda a duração para sustentada. A cada rodada você pode gastar uma ação livre para mover a imagem ou alterar levemente o som, como aumentar o volume ou fazer com que pareça se afastar ou se aproximar, ainda dentro dos limites do efeito. Você pode, por exemplo, criar a ilusão de um fantasma que anda pela sala, controlando seus movimentos. Quando você para de sustentar a magia, a imagem ou som persistem por mais uma rodada antes de a magia se dissipar.\n+1 PM: aumenta o efeito da ilusão em +1 cubo de 1,5m.\n+1 PM: também pode criar ilusões de imagem e sons combinados.\n+1 PM: também pode criar sons complexos com volume máximo equivalente ao que cinco pessoas podem produzir para cada cubo de 1,5m no efeito.\nCom uma ação livre, você pode alterar o volume do som ou fazê-lo se aproximar ou se afastar dentro do alcance.\n+2 PM: também pode criar odores e sensações térmicas, que são percebidos a uma distância igual ao dobro do tamanho máximo do efeito. Por exemplo, uma miragem de uma fogueira com 4 cubos de 1,5m poderia emanar calor e cheiro de queimado a até 12m.\n+2 PM: muda o alcance para longo e o efeito para esfera com 30m de raio. Em vez do normal, você cria um som muito alto, equivalente a uma multidão. Criaturas na área lançam magias como se estivessem em uma condição ruim e a CD de testes de Percepção para ouvir aumenta em +10. Requer 2º círculo.\n+2 PM: também criar sensações táteis, como texturas; criaturas que não saibam que é uma ilusão não conseguem atravessá-la sem passar em um teste de Vontade (objetos ainda a atravessam). A ilusão ainda é incapaz de causar ou sofrer dano. Requer 2º círculo.\n+5 PM: muda a duração para sustentada. Além do normal, você pode gastar uma ação livre para modificar livremente a ilusão (mas não pode acrescentar novos aprimoramentos após lançá-la). Requer 3º círculo.",
    execucao: enumExecucao.padrao,
    alcance: "médio",
    alvo: "até 4 cubos de 1,5m",
    duracao: "cena",
    resistencia: "Vontade desacredita",
    escola: enumEscolas.ilusao,
    aprimoramentos: [
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
      "Uma cúpula de energia invisível o cerca, impedindo a aproximação de certas criaturas. Escolha um tipo de criatura (animais, espíritos, monstros...) ou uma raça de humanoides (elfos, goblins, minotauros..). Criaturas do grupo escolhido que tentem se aproximar a menos de 3m de você (ou seja, que tentem ficar adjacentes a você) devem fazer um teste de Vontade. Se falharem, não conseguem, gastam a ação e só podem tentar novamente na rodada seguinte. Isso impede ataques corpo a corpo, mas não ataques ou outros efeitos à distância. Se você tentar se aproximar além do limite de 3m, rompe a cúpula e a magia é dissipada.\n+2 PM: a cúpula impede criaturas de se aproximarem a menos de 4,5m de você (ou seja, deve haver dois quadrados entre você e as criaturas).\n+5 PM: além do normal, criaturas afetadas também precisam fazer o teste de resistência se fizerem um ataque ou efeito à distância você. Se falharem, o efeito é desviado pela cúpula. Requer 5º círculo.",
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
      "Você canaliza luz que recupera 2d8+2 pontos de vida na criatura tocada.\nTruque: muda o alvo para 1 morto-vivo. Em vez do normal, causa 1d8 pontos de dano de luz (Vontade reduz à metade).\n+1 PM: aumenta a cura em +1d8+1.\n+2 PM: também remove uma condição de fadiga do alvo.\n+2 PM: muda o alcance para curto.\n+5 PM: muda o alcance para curto e o alvo para criaturas escolhidas.",
    execucao: enumExecucao.padrao,
    alcance: "toque",
    alvo: "1 criatura",
    duracao: "instantânea",
    resistencia: "",
    escola: enumEscolas.evocacao,
    aprimoramentos: [
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
      "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.\n+1 PM: aumenta o dano em 10.\n+5 PM: afeta apenas criaturas a sua escolha.",
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
      "Após concentrar seu mana, você emana energia, como uma estrela em plena terra. Todas as criaturas na área sofrem 150 pontos de dano de essência e todos os itens mágicos (exceto artefatos) tornam-se mundanos. Você não é afetado pela magia. Alvos que passem no teste de Fortitude sofrem metade do dano e seus itens mágicos voltam a funcionar após um dia.\n+1 PM: aumenta o dano em 10.\n+5 PM: afeta apenas criaturas a sua escolha.",
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
      "Humanoides na área são acometidos de grande tristeza, adquirindo as condições fraco e frustrado. Se passarem na resistência, adquirem essas condições por uma rodada.\n+2 PM: em vez do normal, as condições adquiridas são debilitado e esmorecido.\n+3 PM: em vez do normal, afeta qualquer tipo de criatura.\n+3 PM: além do normal, criaturas que falhem na resistência ficam aos prantos (pasmos) por 1 rodada (apenas uma vez por cena). Requer 3º círculo.",
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
      "Você dispara um raio fino e esverdeado que causa 10d12 pontos de dano de essência. Se o alvo passar no teste de resistência, em vez disso sofre 2d12 pontos de dano. Independentemente do resultado do teste de Fortitude, se os PV do alvo forem reduzidos a 0 ou menos, ele será completamente desintegrado, restando apenas pó.\n+4 PM: aumenta o dano total em +2d12 e o dano mínimo em +1d12.",
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
      "Esta magia emite um som alto e agudo. O alvo sofre 1d8+2 pontos de dano de impacto (ou o dobro disso e ignora RD se for um construto ou objeto mundano) e fica atordoado por uma rodada (apenas uma vez por cena). Um teste de Fortitude reduz o dano à metade e evita o atordoamento.\n+2 PM: aumenta o dano em +1d8+2.\n+2 PM: muda o alvo para objeto mundano Médio. Requer 2º círculo.\n+5 PM: muda o alvo para objeto mundano Grande. Requer 3º círculo.\n+9 PM: muda o alvo para objeto mundano Enorme. Requer 4º círculo.\n+14 PM: muda o alvo para objeto mundano Colossal. Requer 5º círculo.\n+5 PM: muda o alcance para pessoal e a área para esfera com 6m de raio. Todas as criaturas e objetos mundanos na área são afetados.",
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
      "Você desperta a consciência de um animal ou planta. O alvo se torna um parceiro veterano de um tipo a sua escolha entre ajudante, combatente, fortão, guardião, médico, perseguidor ou vigilante. Se usar esta magia em um parceiro que já possua, o nível de poder de um de seus tipos aumenta em um passo (iniciante para veterano, veterano para mestre). Se já for um parceiro mestre, recebe o bônus de outro tipo de parceiro iniciante (entre as escolhas acima).\nO alvo se torna uma criatura racional, com Inteligência –1, e pode falar.\n+4 PM: muda o alvo para 1 escultura mundana inanimada. Além do normal, o alvo tem as mesmas características de um construto.\n+4 PM: muda a duração para permanente e adiciona penalidade de –3 PM.",
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
  //cansei muito feitiço bixo vo me mata
];

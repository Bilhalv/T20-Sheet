import {
  Magia,
  enumEscolas,
  enumExecucao,
  enumTipo,
} from "../Construtores/Magia";
/*Acalmar Animal
Divina 1 (Encantamento)
Execução: padrão; Alcance: curto;

Alvo: 1 animal; Duração: cena; Resis-
tência: Vontade anula.

O animal fica prestativo em relação a
você. Ele não fica sob seu controle, mas

percebe suas palavras e ações da manei-
ra mais favorável possível. Você recebe

+10 nos testes de Adestramento e Di-
plomacia que fizer contra o animal.

Um alvo hostil ou que esteja envolvido
em um combate recebe +5 em seu teste
de resistência. Se você ou seus aliados
tomarem qualquer ação hostil contra o
alvo, a magia é dissipada e ele retorna à
atitude que tinha antes (ou piorada, de
acordo com o mestre). Se tratar bem o
alvo, a atitude pode permanecer mesmo
após o término da magia.
+1 PM: muda o alcance para médio.
+1 PM: muda o alvo para 1 monstro ou
espírito com Inteligência 1 ou 2.

Descrição das magias

+2 PM: aumenta o número de alvos
em +1.
+5 PM: muda o alvo para 1 monstro
ou espírito. Requer 3o círculo.
Adaga Mental
Arcana 1 (Encantamento)
Execução: padrão; Alcance: curto;

Alvo: 1 criatura; Duração: instantâ-
nea; Resistência: Vontade parcial.

Você manifesta e dispara uma adaga
imaterial contra a mente do alvo, que
sofre 2d6 pontos de dano psíquico e

fica atordoado por uma rodada. Se pas-
sar no teste de resistência, sofre ape-
nas metade do dano e evita a condição.

Uma criatura só pode ficar atordoada
por esta magia uma vez por cena.

+1 PM: você lança a magia sem gesticu-
lar ou pronunciar palavras (o que per-
mite lançar esta magia de armadura) e

a adaga se torna invisível. Se o alvo fa-
lhar no teste de resistência, não percebe

que você lançou uma magia contra ele.
+2 PM: muda a duração para um dia.
Além do normal, você “finca” a adaga
na mente do alvo. Enquanto a magia
durar, você sabe a direção e localização

do alvo, desde que ele esteja no mes-
mo mundo.

+2 PM: aumenta o dano em +1d6.
Alarme
Arcana 1 (Abjuração)
Execução: padrão; Alcance: curto;

Área: esfera com 9m de raio; Dura-
ção: 1 dia.

Você cria uma barreira protetora in-
visível que detecta qualquer criatura

que tocar ou entrar na área protegida.
Ao lançar a magia, você pode escolher
quais criaturas podem entrar na área
sem ativar seus efeitos. Alarme pode

emitir um aviso telepático ou sono-
ro, decidido quando a magia é lança-
da. Um aviso telepático alerta apenas

você, inclusive acordando-o se estiver
dormindo, mas apenas se estiver a até

1km da área protegida. Um aviso so-
noro alerta todas as criaturas em al-
cance longo.

+2 PM: muda o alcance para pessoal.
A área é emanada a partir de você.

+5 PM: além do normal, você também
percebe qualquer efeito de adivinhação

que seja usado dentro da área ou atra-
vesse a área. Você pode fazer um tes-
te oposto de Misticismo contra quem

usou o efeito; se passar, tem um vis-
lumbre de seu rosto e uma ideia apro-
ximada de sua localização (“três dias

de viagem ao norte”, por exemplo).
+9 PM: muda a duração para um dia
ou até ser descarregada e a resistência

para Vontade anula. Quando um intru-
so entra na área, você pode descarregar

a magia. Se o intruso falhar na resis-
tência, ficará paralisado por 1d4 ro-
dadas. Além disso, pelas próximas 24

horas você e as criaturas escolhidas ga-
nham +10 em testes de Sobrevivência

para rastrear o intruso.
Aliado Animal
Divina 2 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 animal prestativo; Duração:
1 dia.
Você cria um vínculo mental com um
animal prestativo em relação a você.
O Aliado Animal obedece a você no
melhor de suas capacidades, mesmo

que isso arrisque a vida dele. Ele fun-
ciona como um parceiro veterano, de

um tipo a sua escolha entre ajudante,

combatente, fortão, guardião, monta-
ria ou perseguidor.

+1 PM: muda o alvo para 1 animal Mi-
núsculo e a duração para 1 semana. Em

vez do normal, o animal se desloca no

melhor de suas capacidades até um lo-
cal designado por você — em geral, para

levar um item, carta ou similar. Quando

o animal chega ao destino, fica esperan-
do até o fim da magia, permitindo ape-
nas que uma ou mais criaturas escolhi-
das por você se aproximem e peguem o

que ele estiver carregando.
+7 PM: muda o parceiro para mestre.
Requer 3o círculo.
+12 PM: muda o alvo para 2 animais
prestativos. Cada animal funciona

como um parceiro de um tipo diferen-
te, e você pode receber a ajuda de am-
bos (mas ainda precisa seguir o limite

de parceiros de acordo com o seu ní-
vel de personagem). Requer 4o círculo.

178
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Alterar Destino
Arcana 5 (Adivinhação)
Execução: reação; Alcance: pessoal;
Alvo: você; Duração: instantânea.

Sua mente visualiza todas as possi-
bilidades de um evento, permitindo

a você escolher o melhor curso de
ação. Você pode rolar novamente um
teste de resistência com um bônus

de +10 ou um inimigo deve rolar no-
vamente um ataque contra você com

uma penalidade de –10.
Alterar Memória
Arcana 4 (Encantamento)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: instantânea;
Resistência: Vontade anula.
Você invade a mente do alvo e altera ou
apaga suas memórias da última hora.
+2 PM: muda o alcance para pessoal e
o alvo para área cone de 4,5m.
+5 PM: você pode alterar ou apagar as
memórias das últimas 24 horas.
Alterar Tamanho
Arcana 2 (Transmutação)
Execução: padrão; Alcance: curto;
Alvo: 1 objeto; Duração: 1 dia.
Esta magia aumenta ou diminui o
tamanho de um item mundano em

até três categorias (um objeto Enor-
me vira Pequeno, por exemplo). Você

também pode mudar a consistência

do item, deixando-o rígido como pe-
dra ou flexível como seda (isso não al-
tera sua RD ou PV, apenas suas pro-
priedades físicas). Se lançar a magia

num objeto de uma criatura involun-
tária, ela pode fazer um teste de Von-
tade para anulá-la.

+1 PM: aumenta o número de alvos
em +1.
+2 PM: muda o alcance para toque e

o alvo para 1 criatura. Em vez do nor-
mal, o alvo aumenta uma categoria de

tamanho (seu equipamento se ajusta

ao novo tamanho). O alvo também re-
cebe Força +2. Um alvo involuntário

pode fazer um teste de Fortitude para
negar o efeito.
+3 PM: muda o alcance para toque e

o alvo para 1 criatura. Em vez do nor-
mal, o alvo diminui uma categoria de

tamanho (seu equipamento se ajus-
ta ao novo tamanho). O alvo também

recebe Destreza +2. Um alvo involun-
tário pode fazer um teste de Fortitude

para negar o efeito. Requer 3o círculo.

+7 PM: muda o alcance para toque, o

alvo para 1 criatura, a duração para per-
manente e a resistência para Fortitude

anula. Em vez do normal, se falhar na
resistência o alvo e seu equipamento

têm seu tamanho mudado para Minús-
culo. O alvo tem seu valor de Força re-
duzido a –5 e seus deslocamentos redu-
zidos a 3m. Requer 4o círculo.

Amarras Etéreas
Arcana 2 (Convocação)
Execução: padrão; Alcance: médio;

Alvo: 1 criatura; Duração: cena; Re-
sistência: Reflexos anula.

Três laços de energia surgem e se en-
roscam no alvo, deixando-o agarra-
do. A vítima pode tentar se livrar, gas-
tando uma ação padrão para fazer um

teste de Atletismo. Se passar, destrói
um laço, mais um laço adicional para
cada 5 pontos pelos quais superou a

CD. Os laços também podem ser ata-
cados e destruídos: cada um tem De-
fesa 10, 10 PV, RD 5 e imunidade a

dano mágico. Se todos os laços forem
destruídos, a magia é dissipada. Por

serem feitos de energia, os laços afe-
tam criaturas incorpóreas.

+2 PM: aumenta o número de alvos
em +1.
+2 PM: aumenta o número de laços em
um alvo a sua escolha em +1 (bônus
máximo limitado pelo círculo máximo
de magia que você pode lançar).
+3 PM: em vez do normal, cada laço
é destruído automaticamente com um
único ataque bem-sucedido; porém,
cada laço destruído libera um choque
de energia que causa 1d8+1 pontos de
dano de essência na criatura amarrada.
Requer 3o círculo.
Amedrontar
Arcana 1 (Necromancia)
Execução: padrão; Alcance: curto;

Alvo: 1 animal ou humanoide; Du-
ração: cena; Resistência: Vontade

parcial.

O alvo é envolvido por energias som-
brias e assustadoras. Se falhar na re-
sistência, fica apavorado por 1 rodada,

depois abalado. Se passar, fica abalado
por 1d4 rodadas.

+2 PM: alvos que falhem na resis-
tência ficam apavorados por 1d4+1

rodadas, em vez de apenas 1.
+2 PM: muda o alvo para 1 criatura.
+5 PM: afeta todos os alvos válidos a
sua escolha dentro do alcance.

Âncora Dimensional
Arcana 3 (Abjuração)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura ou objeto; Duração:
cena.
O alvo é envolvido por um campo de
força cor de esmeralda que impede

qualquer movimento planar. Isso in-
clui magias de convocação (como Sal-
to Dimensional e Teletransporte), viagens

astrais e a habilidade incorpóreo.
+2 PM: muda o alcance para médio,
a área para esfera com 3m de raio e o
alvo para criaturas escolhidas.
+2 PM: muda o efeito para criar um
fio de energia cor de esmeralda que
prende o alvo a um ponto no espaço
dentro do alcance. O ponto precisa ser
fixo, mas não precisa de nenhum apoio

ou superfície (pode simplesmente flu-
tuar no ar). O alvo não pode se afas-
tar mais de 3m do ponto, nem fisica-
mente, nem com movimento planar.

O fio possui 20 PV e redução de dano

20 (mas pode ser dissipado por efei-
tos que libertam criaturas, como o Jul-
gamento Divino: Libertação do paladino).

+4 PM: como acima, mas em vez de
um fio, cria uma corrente de energia,
com 20 PV e redução de dano 40.
+4 PM: muda o alvo para área de cubo
de 9m, a duração para permanente e
adiciona componente material (chave
de esmeralda no valor de T$ 2.000).
Em vez do normal, nenhum tipo de
movimento planar pode ser feito para
entrar ou sair da área.
+9 PM: muda o alcance para médio,
a área para esfera com 3m de raio e o
alvo para criaturas escolhidas. Cria um
fio de energia (veja acima) que prende
todos os alvos ao centro da área.
Animar Objetos
Arcana 4 (Transmutação)
Execução: padrão; Alcance: médio;

Alvo: até 8 objetos Minúsculos ou Pe-
quenos, 4 objetos Médios, 2 objetos

Grandes ou 1 objeto Enorme; Dura-
ção: cena.

Você concede vida a objetos inanima-
dos. Cada objeto se torna um parceiro

sob seu controle. O tipo dele é escolhi-
do da lista de tamanho e ele não conta

em seu limite de parceiros. Com uma

ação de movimento, você pode coman-
dar mentalmente qualquer objeto ani-
mado dentro do alcance para que au-
xilie você ou outra criatura. Outros

usos criativos para os objetos ficam
a cargo do mestre. Objetos animados

179

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
são construtos com valores de Força,

Destreza e PV de acordo com seu ta-
manho. Todos os outros atributos são

nulos, eles não têm valor de Defesa ou

testes de resistência e falham automati-
camente em qualquer teste oposto. Di-
ferente de parceiros comuns, um obje-
to pode ser alvo de um ataque direto.

Esta magia não afeta itens mágicos,

nem objetos que estejam sendo carre-
gados por outra criatura.

+5 PM: muda a duração para perma-
nente e adiciona componente material

(prataria no valor de T$ 1.000). Você

pode ter um máximo de objetos ani-
mados igual à metade do seu nível.

Estatísticas de objetos animados

Minúsculo: For –3, Des 4, 5 PV; Assas-
sino ou Combatente Iniciante.

Pequeno: For –2, Des 2, 10 PV; Comba-
tente ou Guardião Iniciante.

Médio: For 0, Des 1, 20 PV; Combaten-
te ou Guardião Veterano.

Grande: For 2, Des 0, 40 PV; Fortão,
Guardião ou Montaria (cavalo) Veterano.
Enorme: For 4, Des –2, 60 PV; Fortão,
Guardião ou Montaria (cavalo) Mestre.
Anular a Luz
Divina 3 (Necromancia)
Execução: padrão; Alcance: pessoal;

Área: esfera com 6m de raio; Dura-
ção: ver texto.

Esta magia cria uma onda de escuridão
que causa diversos efeitos. Magias de
até 3o círculo na área são dissipadas se
você passar num teste de Religião contra
a CD de cada uma. Seus aliados na área
são protegidos por uma aura sombria e
recebem +4 na Defesa até o fim da cena.
Inimigos na área ficam enjoados por
1d4 rodadas (apenas uma vez por cena).
Anular a Luz anula Dispersar as Trevas (este
efeito tem duração instantânea).
+2 PM: aumenta o bônus na Defesa
em +1.
+4 PM: muda as magias dissipadas
para até 4o círculo. Requer 4o círculo.
+9 PM: muda as magias dissipadas
para até 5o círculo. Requer 5o círculo.
Aparência Perfeita
Arcana 2 (Ilusão)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.

Esta magia lhe concede um rosto idea-
lizado, porte físico garboso, voz me-
lodiosa e olhar sedutor. Caso seu Ca-
risma seja 5 ou mais, você recebe +2

neste atributo. Do contrário, ele se tor-
na 5 (isso conta como um bônus). Além

disso, você recebe +5 em Diploma-
cia e Enganação. Quando a magia aca-
ba, quaisquer observadores percebem a

mudança e tendem a suspeitar de você.

Da mesma maneira, pessoas que o vi-
ram sob o efeito da magia sentirão que

“algo está errado” ao vê-lo em condi-
ções normais. Quando a cena acabar,

você pode gastar os PM da magia nova-
mente como uma ação livre para man-
tê-la ativa. Este efeito não fornece PV

ou PM adicionais.
+1 PM: muda o alcance para toque e o
alvo para 1 humanoide.
Aprisionamento
Arcana 5 (Abjuração)
Execução: completa; Alcance: curto;
Alvo: 1 criatura; Duração: permanente;
Resistência: Vontade anula.

Você cria uma prisão mágica para apri-
sionar uma criatura. Se falhar no teste

de resistência, o alvo sofre o efeito da

magia; se passar, fica imune a esta ma-
gia por uma semana. Enquanto estiver

aprisionada, a criatura não precisa res-
pirar e alimentar-se, e não envelhece.

Magias de adivinhação não conseguem
localizar ou perceber o alvo. Ao lançar a
magia, você escolhe uma das seguintes

formas de prisão. O componente mate-
rial varia, mas todos custam T$ 1.000.

Acorrentamento: o alvo é preso por cor-
rentes firmemente enraizadas no chão,

que o mantém no lugar. O alvo fica pa-
ralisado e não pode se mover ou ser

movido por qualquer meio. Componente
Material: uma fina corrente de mitral.
Contenção Mínima: o alvo diminui para
2 cm de altura e é preso dentro de uma
pedra preciosa ou objeto semelhante.

Luz passa através da pedra, permitin-
do que o alvo veja o lado de fora e seja

visto, mas nada mais pode passar, nem
por meio de teletransporte ou viagem
planar. A pedra não pode ser quebrada

enquanto o alvo estiver dentro. Com-
ponente Material: uma pedra preciosa,

como um diamante ou rubi.

Prisão Dimensional: o alvo é transporta-
do para um semiplano protegido contra

teletransporte e viagens planares. Pode
ser um labirinto, uma gaiola, uma torre

ou qualquer estrutura ou área confina-
da e pequena a sua escolha. Componente

Material: uma representação em minia-
tura da prisão, feita de jade.

Sepultamento: o alvo é sepultado nas
profundezas da terra, em uma esfera

mágica. Nada pode destruir ou atraves-
sar a esfera, nem mesmo teletranspor-
te ou viagens planares. Componente Ma-
terial: um pequeno orbe de adamante.

Sono Eterno: o alvo adormece e não pode
ser acordado. Componente Material: fruta
preparada com ervas soníferas raras.
Quando a magia é lançada, você deve
especificar uma condição que fará com

que ela termine e solte o alvo. A con-
dição pode ser tão específica ou ela-
borada quanto você quiser, mas deve

ser possível de acontecer. As condições
podem se basear no nome, identidade

ou divindade padroeira de uma criatu-
ra, ou em ações ou qualidades observá-
veis, mas nunca em estatísticas intan-
gíveis, como nível, classe ou pontos de

vida. O mestre tem a palavra final so-
bre se uma condição é válida ou não.

Área Escorregadia
Arcana 1 (Convocação)
Execução: padrão; Alcance: curto;
Alvo ou Área: quadrado de 3m ou 1
objeto; Duração: cena; Resistência:
Reflexos (veja texto).
Esta magia recobre uma superfície com

uma substância gordurosa e escorrega-
dia. Criaturas na área devem passar na

resistência para não cair. Nas rodadas

seguintes, criaturas que tentem movi-
mentar-se pela área devem fazer testes

de Acrobacia para equilíbrio (CD 10).
Área Escorregadia pode tornar um item

escorregadio. Uma criatura seguran-
do um objeto afetado deve passar na

resistência para não deixar o item cair
cada vez que usá-lo.

+1 PM: aumenta a área em +1 quadra-
do de 1,5m.

+2 PM: muda a CD dos testes de
Acrobacia para 15.

+5 PM: muda a CD dos testes de Acro-
bacia para 20.

Arma Espiritual
Divina 1 (Convocação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Você invoca a arma preferida de sua
divindade (caso sua divindade possua
uma), que surge flutuando a seu lado.

Uma vez por rodada, quando você so-
fre um ataque corpo a corpo, pode

usar uma reação para que a arma cau-
se automaticamente 2d6 pontos de

dano do tipo da arma — por exemplo,
uma espada longa causa dano de corte
— no oponente que fez o ataque. Esta
magia se dissipa se você morrer.

+1 PM: além do normal, a arma o pro-
tege. Você recebe +1 na Defesa.

180
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

+2 PM: aumenta o bônus na Defesa
em +1.

+2 PM: muda a duração para susten-
tada. Além do normal, uma vez por ro-
dada, você pode gastar uma ação livre

para fazer a arma acertar automatica-
mente um alvo adjacente. Se a arma

atacar, não poderá contra-atacar até
seu próximo turno. Requer 2o círculo.

+2 PM: muda o tipo do dano para es-
sência. Requer 2o círculo.

+2 PM: aumenta o dano causado pela

arma em +1d6 (bônus máximo limita-
do pelo círculo máximo de magia que

você pode lançar).

+5 PM: invoca duas armas, permitin-
do que você contra-ataque (ou ataque,

se usar o aprimoramento acima) duas
vezes por rodada. Requer 3o círculo.
Arma Mágica
Universal 1 (Transmutação)
Execução: padrão; Alcance: toque; Alvo:
1 arma empunhada; Duração: cena.
A arma é considerada mágica e fornece
+1 nos testes de ataque e rolagens de

dano (isso conta como um bônus de en-
canto). Caso você esteja empunhando a

arma, pode usar seu atributo-chave de
magias em vez do atributo original nos
testes de ataque (não cumulativo com
efeitos que somam este atributo).
+2 PM: aumenta o bônus em +1
(bônus máximo limitado pelo círculo
máximo de magia que você pode lançar).
+2 PM: a arma causa +1d6 de dano de

ácido, eletricidade, fogo ou frio, escolhi-
do quando a magia é lançada. Este apri-
moramento só pode ser usado uma vez.

+3 PM: muda o bônus de dano do
aprimoramento acima para +2d6.
Armadura Arcana
Arcana 1 (Abjuração)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.

Esta magia cria uma película proteto-
ra invisível, mas tangível, fornecendo

+5 na Defesa. Esse bônus é cumula-
tivo com outras magias, mas não com

bônus fornecido por armaduras.
+1 PM: muda a execução para reação.
Em vez do normal, você cria um escudo

mágico que fornece +5 na Defesa con-
tra o próximo ataque que sofrer (cumu-
lativo com o bônus fornecido pelo efei-
to básico desta magia e armaduras).

+2 PM: aumenta o bônus na Defesa
em +1.
+2 PM: muda a duração para um dia.

Armamento
da Natureza
Divina 1 (Transmutação)
Execução: padrão; Alcance: toque;
Alvo: 1 arma (veja texto); Duração:
cena.

Você fortalece uma arma mundana pri-
mitiva (sem custo em T$, como bor-
dão, clava, funda ou tacape), uma arma

natural ou um ataque desarmado. O
dano da arma aumenta em um passo
e ela é considerada mágica. Ao lançar a
magia, você pode mudar o tipo de dano

da arma (escolhendo entre corte, im-
pacto ou perfuração).

+1 PM: fornece +1 nos testes de ata-
que com a arma.

+2 PM: muda a execução para ação de
movimento.
+3 PM: aumenta o bônus nos testes de
ataque em +1.
+5 PM: aumenta o dano da arma em
mais um passo.
Assassino
Fantasmagórico
Arcana 4 (Necromancia)
Execução: padrão; Alcance: longo;
Alvo: 1 criatura; Duração: cena, até

ser descarregada; Resistência: Vonta-
de anula, Fortitude parcial.

Usando os medos subconscientes do
alvo, você cria uma imagem daquilo
que ele mais teme. Apenas a própria

vítima pode ver o Assassino Fantasmagó-
rico com nitidez; outras criaturas pre-
sentes (incluindo o conjurador) enxer-
gam apenas um espectro sombrio.

Quando você lança a magia, o espec-
tro surge adjacente a você e a vítima

faz um teste de Vontade. Se ela passar,
percebe que o espectro é uma ilusão e

a magia é dissipada. Se falhar, acredi-
ta na existência do espectro, que então

flutua 18m por rodada em direção à ví-
tima, sempre no fim do seu turno. Ele

é incorpóreo e imune a magias (exceto
magias que dissipam outras).

Se o espectro terminar seu turno adja-
cente à vítima, ela deve fazer um teste

de Fortitude. Se passar, sofre 6d6 pon-
tos de dano de trevas (este dano não

pode reduzir o alvo a menos de 0 PV e

não o deixa sangrando). Se falhar, so-
fre um colapso, ficando imediatamente

com –1 PV e sangrando.

O espectro persegue o alvo implacavel-
mente. Ele desaparece se o alvo ficar

inconsciente ou se afastar além de al-
cance longo dele, ou se for dissipado.

Augúrio
Divina 2 (Adivinhação)
Execução: completa; Alcance: pessoal;
Alvo: você; Duração: instantânea.
Esta magia diz se uma ação que você
tomará em breve — no máximo uma
hora no futuro — trará resultados bons

ou ruins. O mestre rola 1d6 em segre-
do; com um resultado de 2 a 6, a ma-
gia funciona e você recebe uma das se-
guintes respostas: “felicidade” (a ação

trará bons resultados); “miséria” (a

ação trará maus resultados); “felicida-
de e miséria” (para ambos) ou “nada”

(para ações que não trarão resultados
bons ou ruins).
Com um resultado 1, a magia falha
e oferece o resultado “nada”. Não há
como saber se esse resultado foi dado

porque a magia falhou ou não. Lan-
çar esta magia múltiplas vezes sobre

o mesmo assunto gera sempre o pri-
meiro resultado.

Por exemplo, se o grupo está prestes
a entrar em uma câmara, o augúrio
dirá “felicidade” se a câmara contém
um tesouro desprotegido, “miséria”
se contém um monstro, “felicidade e
miséria” se houver um tesouro e um

monstro ou “nada” se a câmara esti-
ver vazia.

+3 PM: muda a execução para 1 minu-
to. Em vez do normal, você pode con-
sultar uma divindade, fazendo uma

pergunta sobre um evento que acon-
tecerá até um dia no futuro. O mestre

rola a chance de falha; com um resul-
tado de 2 a 6, você recebe uma respos-
ta, desde uma simples frase até uma

profecia ou enigma. Em geral, este
uso sempre oferece pistas, indicando
um caminho a tomar para descobrir a
resposta que se procura. Numa falha

você não recebe resposta alguma. Re-
quer 3o círculo.

+7 PM: muda a execução para 10 mi-
nutos e a duração para 1 minuto. Em

vez do normal, você consulta uma di-
vindade, podendo fazer uma pergun-
ta por rodada, desde que ela possa ser

respondida com “sim”, “não” ou “não
sei” (embora poderosos, os deuses
não são oniscientes). O mestre rola
a chance de falha para cada pergunta.
Em caso de falha, a resposta também
é “não sei”. Requer 4o círculo.
+7 PM: o mestre rola 1d12; a magia só
falha em um resultado 1.
+12 PM: o mestre rola 1d20; a magia
só falha em um resultado 1.

181

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Aura Divina
Divina 5 (Abjuração)
Execução: padrão; Alcance: pessoal;
Área: esfera com 9m de raio; Duração:
cena; Resistência: Vontade parcial.
Você se torna um conduíte da energia
de sua divindade, emanando uma aura
brilhante. Você e aliados devotos da

mesma divindade ficam imunes a en-
cantamento e recebem +10 na Defesa

e em testes de resistência. Aliados não
devotos da mesma divindade recebem

+5 na Defesa e em testes de resistên-
cia. Além disso, inimigos que entrem

na área devem fazer um teste de Vonta-
de; em caso de falha, recebem uma con-
dição a sua escolha entre esmorecido,

debilitado ou lento até o fim da cena.
O teste deve ser refeito cada vez que a
criatura entrar novamente na área.
+2 PM: aumenta os bônus na Defesa e
em testes de resistência em +1.
Aviso
Universal 1 (Adivinhação)
Execução: movimento; Alcance: longo;
Alvo: 1 criatura; Duração: instantânea.
Envia um aviso telepático para uma
criatura, mesmo que não possa vê-la
nem tenha linha de efeito. Escolha um:

Alerta: o alvo recebe +5 em seu próxi-
mo teste de Iniciativa e de Percepção

dentro da cena.

Mensagem: o alvo recebe uma mensa-
gem sua de até 25 palavras. Vocês de-
vem ter um idioma em comum para o

alvo poder entendê-lo.
Localização: o alvo sabe onde você está
naquele momento. Se você mudar de
posição, ele não saberá.

+1 PM: aumenta o alcance em um fa-
tor de 10 (90m para 900m, 900m para

9km e assim por diante).
+1 PM: se escolher mensagem, o alvo

pode enviar uma resposta de até 25 pa-
lavras para você até o fim de seu pró-
ximo turno.

+2 PM: se escolher localização, muda
a duração para cena. O alvo sabe onde
você está mesmo que você mude de
posição.
+3 PM: aumenta o número de alvos
em +1.
Banimento
Divina 3 (Abjuração)
Execução: 1d3+1 rodadas; Alcance:

curto; Alvo: 1 criatura; Duração: ins-
tantânea; Resistência: Vontade parcial.

Você expulsa uma criatura não nati-
va de Arton. Um alvo nativo de outro

mundo (como muitos espíritos), é te-
letransportado de volta para um lugar

aleatório de seu mundo de origem. Já
um alvo morto-vivo tem sua conexão
com as energias negativas rompidas,

sendo reduzido a 0 PV. Se passar na re-
sistência, em vez dos efeitos acima, o

alvo fica enjoado por 1d4 rodadas.
Se você tiver um ou mais itens que se
oponham ao alvo de alguma maneira, a
CD do teste de resistência aumenta em
+2 por item. Por exemplo, se lançar a

magia contra demônios do frio (vul-
neráveis a água benta e que odeiam

luz e calor) enquanto segura um fras-
co de água benta e uma tocha acesa, a

CD aumenta em +4. O mestre decide
se determinado item é forte o bastante
contra a criatura para isso.

+0 PM: muda a resistência para ne-
nhum. Em vez do normal, devolve au-
tomaticamente uma criatura conjurada

(como por uma magia de convocação)
para seu plano de origem.
Barragem elemental
de Vectorius
Arcana 5 (Evocação)
Execução: padrão; Alcance: longo;

Efeito: 4 esferas elementais; Dura-
ção: instantânea; Resistência: Refle-
xos parcial.

Criada pelo arquimago Vectorius, esta

magia produz quatro esferas, de áci-
do, eletricidade, fogo e frio, que voam

até um ponto a sua escolha. Quando
atingem o ponto escolhido, explodem
causando 6d6 pontos de dano de seu
respectivo tipo numa área com 12m
de raio. Um teste de Reflexos reduz o
dano à metade. Você pode mirar cada

esfera em uma criatura ou ponto dife-
rente. Uma criatura ao alcance da ex-
plosão de mais de uma esfera deve fa-
zer um teste de resistência para cada

uma. Além disso, as esferas causam os

seguintes efeitos em criaturas que fa-
lharem em seus testes de resistência:

• Ácido: vulnerável até o fim da cena.
• Elétrica: atordoado por 1 rodada
(apenas uma vez por cena).
• Fogo: em chamas.
• Frio: lento até o fim da cena.

+5 PM: aumenta o dano de cada esfe-
ra em +2d6.

+5 PM: muda o tipo de dano de todas

as esferas para essência (mas elas ain-
da causam os outros efeitos como se

seu tipo de dano não mudasse).

Bênção
Divina 1 (Encantamento)
Execução: padrão; Alcance: curto;
Alvos: aliados; Duração: cena.
Abençoa seus aliados, que recebem
+1 em testes de ataque e rolagens de
dano. Bênção anula Perdição.
+1 PM: muda o alvo para 1 cadáver e a
duração para 1 semana. O cadáver não

se decompõe nem pode ser transfor-
mado em morto-vivo.

+2 PM: aumenta os bônus em +1
(bônus máximo limitado pelo círculo
máximo de magia que você pode lançar).
Bola de Fogo
Arcana 2 (Evocação)
Execução: padrão; Alcance: médio;

Área: esfera com 6m de raio; Dura-
ção: instantânea; Resistência: Refle-
xos reduz à metade.

Esta famosa magia de ataque cria uma

poderosa explosão, causando 6d6 pon-
tos de dano de fogo em todas as criatu-
ras e objetos livres na área.

+2 PM: aumenta o dano em +2d6.

+2 PM: muda a área para efeito de es-
fera flamejante com tamanho Médio e

a duração para cena. Em vez do nor-
mal, cria uma esfera flamejante com

1,5m de diâmetro que causa 3d6 pon-
tos de dano a qualquer criatura no

mesmo espaço. Você pode gastar uma

ação de movimento para fazer a esfe-
ra voar 9m em qualquer direção. Ela é

imune a dano, mas pode ser apagada
com água. Uma criatura só pode sofrer
dano da esfera uma vez por rodada.
+3 PM: muda a duração para um dia
ou até ser descarregada. Em vez do
normal, você cria uma pequena pedra
flamejante, que pode detonar como
uma reação, descarregando a magia. A
pedra pode ser usada como uma arma
de arremesso com alcance curto. Uma
vez detonada, causa o dano da magia
numa área de esfera com 6m de raio.
Buraco Negro
Universal 5 (Convocação)
Execução: completa; Alcance: longo;

Efeito: buraco negro; Duração: 3 ro-
dadas; Resistência: Fortitude parcial.

Esta magia cria um vácuo capaz de su-
gar tudo nas proximidades. Escolha

um espaço desocupado para o buraco
negro. No início de cada um de seus

três turnos seguintes, todas as criatu-
ras a até alcance longo do buraco ne-
gro, incluindo você, devem fazer um

182
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

teste de Fortitude. Em caso de falha,

ficam caídas e são puxadas 30m na di-
reção do buraco. Objetos soltos tam-
bém são puxados. Criaturas podem

gastar uma ação de movimento para se

segurar em algum objeto fixo, receben-
do +2 em seus testes de resistência.

Criaturas e objetos que iniciem seu

turno no espaço do buraco negro de-
vem gastar uma ação de movimento

e fazer um teste de Fortitude. Se pas-
sarem, podem escapar se arrastando

(deslocamento de 1,5m) para longe
dele. Se falharem, perdem a ação (mas

podem gastar outra para tentar nova-
mente). Se terminarem seu turno no

espaço do buraco negro, são sugadas,
desaparecendo para sempre.
Não se conhece o destino das coisas

sugadas pelo buraco negro. Alguns es-
tudiosos sugerem que são enviadas

para outros mundos — provavelmente
Sombria, reino da deusa Tenebra.
+5 PM: muda o efeito para que você
não seja afetado.
Caminhos
da Natureza
Divina 1 (Convocação)
Execução: padrão; Alcance: curto; Área:
criaturas escolhidas; Duração: 1 dia.

Você invoca espíritos da natureza, pe-
dindo que eles abram seu caminho. As

criaturas afetadas recebem deslocamen-
to +3m e ignoram penalidades por ter-
reno difícil em terrenos naturais.

Truque: muda o alcance para pessoal
e o alvo para você. Em vez do normal,

você recebe +5 em testes de Sobrevi-
vência para se orientar.

+1 PM: além do normal, a CD para
rastrear os alvos em terreno natural
aumenta em +10.

+2 PM: aumenta o bônus de desloca-
mento em +3m.

Campo Antimagia
Arcana 4 (Abjuração)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.

Você é cercado por uma barreira invisí-
vel com 3m de raio que o acompanha.

Qualquer habilidade mágica ou item
mágico que entre na área da barreira é
suprimida enquanto estiver lá.
Criaturas convocadas que entrem em
um Campo Antimagia desaparecem. Elas
reaparecem na mesma posição quando

a duração do Campo termina — supon-
do que a duração da magia que as con-
vocou ainda não tenha terminado.

Criaturas mágicas ou imbuídas com

magia durante sua criação não são di-
retamente afetadas pelo Campo An-
timagia. Entretanto, como qualquer

criatura, não poderão usar magias ou
habilidades mágicas dentro dele.

Uma magia que dissipa outras não dis-
sipa um Campo Antimagia, e dois Cam-
pos na mesma área não se neutralizam.

Artefatos e deuses maiores não são
afetados por um Campo Antimagia.
Campo de Força
Arcana 2 (Abjuração)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Esta magia cria uma película protetora
sobre você. Você recebe 30 pontos de
vida temporários.
+1 PM: muda a execução para reação
e a duração para instantânea. Em vez
do normal, você recebe RD 30 contra o
próximo dano que sofrer.
+3 PM: muda os PV temporários ou a
RD para 50. Requer 3o círculo.
+7 PM: muda os PV temporários ou a
RD para 70. Requer 4o círculo.
+7 PM: muda o alcance para curto, o

alvo para outra criatura ou objeto Enor-
me ou menor e a duração para susten-
tada. Em vez do normal, cria uma es-
fera imóvel e tremeluzente ao redor

do alvo. Nenhuma criatura, objeto ou
efeito de dano pode passar pela esfera,

embora criaturas possam respirar nor-
malmente. Criaturas na área podem fa-
zer um teste de Reflexos para evitar se-
rem aprisionadas e sempre que você se

concentrar. Requer 4o círculo.

+9 PM: como o aprimoramento aci-
ma, mas tudo dentro da esfera fica pra-
ticamente sem peso. Uma vez por ro-
dada, você pode gastar uma ação livre

para flutuar a esfera e seu conteúdo
9m em uma direção. Requer 4o círculo.
Camuflagem ilusória
Arcana 2 (Ilusão)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.
O alvo fica com sua imagem nublada,

como se vista através de um líquido, re-
cebendo os efeitos de camuflagem leve.

+3 PM: muda a duração para sustenta-
da. A imagem do alvo fica mais distor-
cida, aumentando a chance de falha da

camuflagem leve para 50%.
+7 PM: muda o alcance para curto e o
alvo para criaturas escolhidas. Requer
4o círculo.

Chuva de Meteoros
Arcana 5 (Convocação)
Execução: completa; Alcance: longo;

Área: quadrado com 18m de lado; Du-
ração: instantânea; Resistência: Re-
flexos parcial.

Meteoros caem dos céus, devastando

a área afetada. Criaturas na área so-
frem 15d6 pontos de dano de impac-
to, 15d6 pontos de dano de fogo e fi-
cam caídas e presas sob os escombros

(agarradas). Uma criatura que passe
no teste de resistência sofre metade

do dano total e não fica caída e agarra-
da. Uma criatura agarrada pode esca-
par gastando uma ação padrão e pas-
sando em um teste de Atletismo. Toda

a área afetada fica coberta de escom-
bros, sendo considerada terreno di-
fícil, e imersa numa nuvem de poei-
ra (camuflagem leve). Esta magia só

pode ser utilizada a céu aberto.

+2 PM: aumenta o número de meteo-
ros que atingem a área, o que aumen-
ta o dano em +2d6 de impacto e +2d6

de fogo.
Círculo da Justiça
Divina 2 (Abjuração)
Execução: completa; Alcance: curto;
Área: esfera com 9m de raio; Duração:
1 dia; Resistência: Vontade parcial.
Também conhecida como Lágrimas de

Hyninn, esta magia é usada em tribu-
nais e para proteger áreas sensíveis.

Criaturas na área sofrem –10 em tes-
tes de Acrobacia, Enganação, Furtivi-
dade e Ladinagem e não podem mentir

deliberadamente — mas podem tentar

evitar perguntas que normalmente res-
ponderiam com uma mentira (sendo

evasivas ou cometendo omissões, por
exemplo). Uma criatura que passe na

resistência tem as penalidades reduzi-
das para –5 e pode mentir.

+1 PM: muda a execução para ação
padrão, o alcance para pessoal, o alvo

para você, a duração para cena e a re-
sistência para nenhuma. Em vez do

normal, qualquer criatura ou objeto

invisível em alcance curto se torna vi-
sível. Isso não dissipa o efeito mágico;

se sair do seu alcance, a criatura ou ob-
jeto voltam a ficar invisíveis.

+3 PM: muda a penalidade nas perí-
cias para –10 (se passar na resistência)

e –20 (se falhar). Requer 4o círculo.

+7 PM: muda a duração para perma-
nente e adiciona componente mate-
rial (balança de prata no valor de T$

5.000).

183

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Círculo da
Restauração
Divina 4 (Evocação)
Execução: padrão; Alcance: curto;

Área: esfera com 3m de raio; Dura-
ção: 5 rodadas.

Você evoca um círculo de luz que

emana uma energia poderosa. Qual-
quer criatura viva que termine o tur-
no dentro do círculo recupera 3d8+3

PV e 1 PM. Mortos-vivos e criaturas
que sofrem dano por luz perdem PV e

PM na mesma quantidade. Uma cria-
tura pode recuperar no máximo 5 PM

por dia com esta magia.
+2 PM: aumenta a regeneração de PV
em 1d8+1.
cólera de azgher
Divina 4 (evocação)
Execução: padrão; Alcance: médio;
Área: esfera com 6m de raio; Duração:

instantânea. Resistência: Reflexos par-
cial.

Você cria um fulgor dourado e intenso.
Criaturas na área ficam cegas por 1d4
rodadas e em chamas, e sofrem 10d6
pontos de dano de fogo (mortos-vivos
sofrem 10d8 pontos de dano). Uma

criatura que passe no teste de resistên-
cia não fica cega nem em chamas e so-
fre metade do dano.

+2 PM: aumenta o dano em +2d6
(+2d8 contra mortos-vivos).
+2 PM: aumenta a área em +6m de raio.
+5 PM: a luz purificadora do Deus-Sol

dissipa todas as magias de necroman-
cia ativas na área. Requer 5o círculo.

Coluna de Chamas
Divina 3 (Evocação)
Execução: padrão; Alcance: longo;
Área: cilindro com 3m de raio e 30m

de altura; Duração: instantânea; Re-
sistência: Reflexos reduz à metade.

Um pilar de fogo sagrado desce dos
céus, causando 6d6 pontos de dano de
fogo mais 6d6 pontos de dano de luz
nas criaturas e objetos livres na área.
+1 PM: aumenta o dano de fogo em +1d6.
+1 PM: aumenta o dano de luz em +1d6.
Comando
Divina 1 (Encantamento)
Execução: padrão; Alcance: curto;

Alvo: 1 humanoide; Duração: 1 roda-
da; Resistência: Vontade anula.

Você dá uma ordem irresistível, que o
alvo deve ser capaz de ouvir (mas não

precisa entender). Se falhar na resis-
tência, ele deve obedecer ao comando

em seu próprio turno da melhor ma-
neira possível. Escolha um dos efeitos.

Fuja: o alvo gasta seu turno se afastando
de você (usando todas as suas ações).
Largue: o alvo solta quaisquer itens que
esteja segurando e não pode pegá-los
novamente até o início de seu próximo
turno. Como esta é uma ação livre, ele

ainda pode executar outras ações (ex-
ceto pegar aquilo que largou).

Pare: o alvo fica pasmo (apenas uma
vez por cena).
Senta: com uma ação livre, o alvo senta

no chão (se estava pendurado ou voan-
do, desce até o chão). Ele pode fazer

outras ações, mas não se levantar até o
início de seu próximo turno.

Venha: o alvo gasta seu turno se apro-
ximando de você (usando todas as

suas ações).
+1 PM: muda o alvo para 1 criatura.
+2 PM: aumenta a quantidade de alvos
em +1.
Compreensão
Universal 1 (Adivinhação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura ou texto; Duração:
cena; Resistência: Vontade anula (veja
descrição).
Essa magia lhe confere compreensão

sobrenatural. Você pode tocar um tex-
to e entender as palavras mesmo que

não conheça o idioma. Se tocar numa
criatura inteligente, pode se comunicar
com ela mesmo que não tenham um

idioma em comum. Se tocar uma cria-
tura não inteligente, como um animal,

pode perceber seus sentimentos.
Você também pode gastar uma ação de
movimento para ouvir os pensamentos
de uma criatura tocada (você “ouve”
o que o alvo está pensando), mas um

alvo involuntário tem direito a um tes-
te de Vontade para proteger seus pen-
samentos e evitar este efeito.

+1 PM: muda o alcance para curto.
+2 PM: muda o alcance para curto e
o alvo para criaturas escolhidas. Você

pode entender todas as criaturas afeta-
das, mas só pode ouvir os pensamen-
tos de uma por vez.

+2 PM: muda o alvo para 1 criatura.
Em vez do normal, pode vasculhar os

pensamentos do alvo para extrair in-
formações. O alvo tem direito a um

teste de Vontade para anular este efei-
to. O mestre decide se a criatura sabe

ou não a informação que você procura.
Requer 2o círculo.
+5 PM: muda o alcance para pessoal
e o alvo para você. Em vez do normal,
você pode falar, entender e escrever
qualquer idioma. Requer 3o círculo.
Comunhão
com a Natureza
Divina 3 (Adivinhação)

Execução: completa; Alcance: pes-
soal; Alvo: você; Duração: 1 dia.

Após uma breve união com a natureza

local, você obtém informações e intui-
ções sobre a região em que está, numa

distância equivalente a um dia de via-
gem. Você recebe 6d4 dados de auxílio.

Enquanto a magia durar, sempre que for

realizar um teste de perícia em áreas na-
turais, você pode gastar 2d4 (mais 2d4

para cada círculo de magias acima do 3o

que puder lançar) e adicionar o resulta-
do rolado como bônus no teste. A magia

termina se você ficar sem dados.

+1 PM: muda a execução para 1 minu-
to e a duração para instantânea. Em vez

do normal, você descobre 1d4+1 infor-
mações sobre os seguintes temas: terre-
no, animais, vegetais, minerais, cursos

d’água e presença de criaturas antina-
turais numa região natural em que você

esteja. Você pode, por exemplo, desco-
brir a quantidade de cavernas (terreno),

se uma planta rara existe (vegetais) e

se há mortos-vivos (criaturas antinatu-
rais) na região.

+3 PM: aumenta o número de dados
de auxílio em +2.
+4 PM: muda o tipo dos dados de
auxílio para d6.
+8 PM: muda o tipo dos dados de
auxílio para d8.
Conceder Milagre
Divina 4 (Encantamento)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: permanen-
te até ser descarregada.

Você transfere um pouco de seu poder
divino a outra criatura. Escolha uma

magia de até 2o círculo que você co-
nheça; o alvo pode lançar essa magia

uma vez, sem pagar o custo dela em

PM (aprimoramentos podem ser usa-
dos, mas o alvo deve gastar seus pró-
prios PM). Você sofre uma penalidade

de –3 PM até que o alvo lance a magia.

+4 PM: muda o círculo da magia con-
cedida para 3o e a penalidade de PM

para –6.

184
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Concentração
de Combate
Arcana 1 (Adivinhação)
Execução: livre; Alcance: pessoal;
Alvo: você; Duração: 1 rodada.

Você amplia sua percepção, antecipan-
do movimentos dos inimigos e achan-
do brechas em sua defesa. Quando faz

um teste de ataque, você rola dois da-
dos e usa o melhor resultado.

+2 PM: muda a execução para padrão e
a duração para cena. Requer 2o círculo.
+5 PM: além do normal, ao atacar

você, um inimigo deve rolar dois da-
dos e usar o pior resultado. Requer 3o

círculo.

+9 PM: muda a execução para pa-
drão, o alcance para curto, o alvo para

criaturas escolhidas e a duração para
cena. Requer 4o círculo.

+14 PM: muda a execução para pa-
drão e a duração para um dia. Além

do normal, você recebe um sexto sen-
tido que o avisa de qualquer perigo ou

ameaça. Você fica imune às condições
surpreendido e desprevenido e recebe
+10 na Defesa e Reflexos. Requer 5o
círculo.
Condição
Divina 2 (Adivinhação)
Execução: padrão; Alcance: curto;
Alvo: até 5 criaturas; Duração: cena.

Pela duração da magia, você sabe a po-
sição e status (PV atuais, se estão com

uma condição ou sob efeito de ma-
gia...) dos alvos. Depois de lançada, a

distância dos alvos não importa — a
magia só deixa de detectar um alvo se
ele morrer ou for para outro plano.
+1 PM: aumenta o número de alvos
em +1.
+1 PM: muda a duração para um dia.
Conjurar
Elemental
Arcana 4 (Convocação)
Execução: completa; Alcance: médio;
Efeito: parceiro elemental; Duração:
sustentada.
Esta magia transforma uma porção de
um elemento inerte em uma criatura

elemental Grande do tipo do elemen-
to alvo. Por exemplo, lançar esta ma-
gia numa fogueira ou tocha cria um

elemental do fogo. Você pode criar ele-
mentais do ar, água, fogo e terra com

essa magia. O elemental obedece a to-
dos os seus comandos e pode funcio-
nar como um parceiro do tipo destrui-
dor (cuja habilidade custa apenas 2 PM

para ser usada) e mais um tipo entre os

indicados na lista abaixo, ambos mes-
tres. O elemental auxilia apenas você e

não conta em seu limite de parceiros.
Ar: assassino, perseguidor ou vigilante.
Dano de eletricidade.
Água: ajudante, guardião ou médico.
Dano de frio.
Fogo: atirador, combatente ou fortão.
Dano de fogo.
Terra: combatente, guardião ou montaria.
Dano de impacto.

+5 PM: o elemental muda para Enor-
me e recebe dois tipos de parceiro indi-
cados no seu elemento.

+5 PM: você convoca um elemental
de cada tipo. Quando lança a magia,
você pode escolher se cada elemental

vai auxiliar você ou um aliado no al-
cance. Requer 5o círculo.

Conjurar
Monstro
Arcana 1 (Convocação)
Execução: completa; Alcance: curto;
Efeito: 1 criatura conjurada; Duração:
sustentada.
Você conjura um monstro Pequeno

que ataca seus inimigos. Você esco-
lhe a aparência do monstro e o tipo de

dano que ele pode causar, entre cor-
te, impacto e perfuração. No entan-
to, ele não é uma criatura real, e sim

um construto feito de energia. Se for
destruído, ou quando a magia acaba,

desaparece com um brilho, sem dei-
xar nada para trás. Você só pode ter

um monstro conjurado por esta ma-
gia por vez.

O monstro surge em um espaço de-
socupado a sua escolha dentro do al-
cance e age no início de cada um de

seus turnos, a partir da próxima roda-
da. O monstro tem deslocamento 9m

e pode fazer uma ação de movimen-
to por rodada. Você pode gastar uma

ação padrão para dar uma das seguin-
tes ordens a ele.

Mover: o monstro se movimenta o do-
bro do deslocamento nessa rodada.

Atacar: o monstro causa 2d4+2 pontos
de dano a uma criatura adjacente.
Lançar Magia: o monstro pode servir

como ponto de origem para uma ma-
gia lançada por você com execução de

uma ação padrão ou menor. Ele pode
descarregar um Toque Chocante em um
inimigo distante, ou mesmo “cuspir”

uma Bola de Fogo! Você gasta PM nor-
malmente para lançar a magia.

Outros usos criativos para monstros
conjurados ficam a critério do mestre.
O monstro não age sem receber uma
ordem.

Para efeitos de jogo, o monstro conju-
rado tem For 2, Des 3 e todos os ou-
tros atributos nulos. Ele tem Defesa

igual a sua, 20 pontos de vid e usa o
seu bônus para teste de Reflexos. Ele
é imune a efeitos que pedem um teste
de Fortitude ou Vontade.

+1 PM: o monstro ganha deslocamen-
to de escalada ou natação igual ao seu

deslocamento terrestre.
+1 PM: aumenta o deslocamento do
monstro em +3m.

+1 PM: muda o tipo de dano do ata-
que do monstro para ácido, fogo, frio

ou eletricidade.
+2 PM: aumenta os PV do monstro

em +10 para cada categoria de tama-
nho a partir de Pequeno (+10 PV para

Pequeno, +20 PV para Médio etc.).

+2 PM: aumenta o tamanho do mons-
tro para Médio. Ele tem For 4, Des 3,

45 PV, deslocamento 12m e seu ataque
causa 2d6+6 pontos de dano.
+2 PM: o monstro ganha resistência 5

contra dois tipos de dano (por exem-
plo, corte e frio).

+4 PM: o monstro ganha uma nova

ordem: Arma de Sopro. Para dar essa or-
dem você gasta 1 PM, e faz o monstro

causar o dobro de seu dano de ataque

em um cone de 6m a partir de si (Re-
flexos reduz à metade).

+5 PM: aumenta o tamanho do mons-
tro para Grande. Ele tem For 7, Des 2,

75 PV, deslocamento 12m e seu ata-
que causa 4d6+10 pontos de dano

com 3m de alcance. Requer 2o círculo.

+9 PM: o monstro ganha desloca-
mento de voo igual ao dobro do des-
locamento.

+9 PM: o monstro ganha imunidade
contra dois tipos de dano.
+9 PM: aumenta o tamanho do
monstro para Enorme. Ele tem For
11, Des 1, 110 PV, deslocamento 15m
e seu ataque causa 4d8+15 pontos de
dano com 4,5m de alcance. Requer 4o
círculo.
+14 PM: aumenta o tamanho do
monstro para Colossal. Ele tem For
15, Des 0, 180 PV, deslocamento 15m
e seu ataque causa 4d12+20 pontos
de dano com 9m de alcance. Requer
5o círculo.

185

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Conjurar
Mortos-Vivos
Universal 2 (Necromancia)

Execução: completa; Alcance: cur-
to; Efeito: 6 mortos-vivos; Duração:

sustentada.
Você conjura seis esqueletos capangas
de tamanho Médio feitos de energia

negativa em espaços desocupados den-
tro do alcance. Você pode gastar uma

ação de movimento para fazer os mor-
tos-vivos andarem (eles têm desloca-
mento 9m) ou uma ação padrão para

fazê-los causar dano a criaturas adja-
centes (1d6+2 pontos de dano de tre-
vas cada). Os esqueletos têm For 2,

Des 2, Defesa 18 e todos os outros

atributos nulos; eles têm 1 PV e fa-
lham automaticamente em qualquer

teste de resistência ou oposto, mas são

imunes a atordoamento, dano não le-
tal, doença, encantamento, fadiga, frio,

ilusão, paralisia, sono e veneno. Eles
desaparecem quando são reduzidos a
0 PV ou no fim da cena. Os mortos-

-vivos não agem sem receber uma or-
dem. Usos criativos para capangas fora

de combate ficam a critério do mestre.
+2 PM: aumenta o número de mortos-
-vivos conjurados em +1.
+3 PM: em vez de esqueletos, conjura
carniçais. Requer 3o círculo.
+7 PM: em vez de esqueletos, conjura
sombras. Requer 4o círculo.
Carniçal: como esqueletos, mas têm
For 3, Des 3, Defesa 27 e causam
1d8+3 pontos de dano de trevas mais
perda de 1d8 PV por veneno. Além

disso, criaturas atingidas por um car-
niçal devem passar num teste de For-
titude ou ficam paralisadas por 1 ro-
dada. Uma criatura que passe no teste

de resistência fica imune à paralisia
dos carniçais por um dia.
Sombra: como esqueletos, mas têm

Des 4, Defesa 35, a habilidade in-
corpóreo e causam 2d10 pontos de

dano de trevas. Além disso, criatu-
ras vivas atingidas por uma sombra

devem passar num teste de Fortitu-
de ou perdem 1d4 PM. Sombras per-
dem a habilidade incorpóreo quando

expostas à luz do sol.
Consagrar
Divina 1 (Evocação)
Execução: padrão; Alcance: longo;

Área: esfera com 9m de raio; Dura-
ção: 1 dia.

Você enche a área com energia posi-
tiva. Pontos de vida curados por efei-
tos de luz são maximizados dentro da

área. Isso também afeta dano causa-
do em mortos-vivos por esses efeitos.

Por exemplo, Curar Ferimentos cura au-
tomaticamente 18 PV. Esta magia não

pode ser lançada em uma área con-
tendo um símbolo visível dedicado a

uma divindade que não a sua. Consa-
grar anula Profanar.

+1 PM: além do normal, mortos-vivos
na área sofrem –2 em testes e Defesa.
+2 PM: aumenta as penalidades para
mortos-vivos em –1.
+9 PM: muda a execução para 1
hora, a duração para permanente e

adiciona componente material (in-
censo e óleos no valor de T$ 1.000).

Requer 4o círculo.
Contato
Extraplanar
Arcana 3 (Adivinhação)

Execução: completa; Alcance: pes-
soal; Alvo: você; Duração: 1 dia.

Sua mente viaja até outro plano de
existência, onde entra em contato com

seres extraplanares como gênios e de-
mônios. Você firma um contrato com

uma dessas entidades para que o au-
xilie durante o dia, em troca de se ali-
mentar de seu mana. Quando a magia

é lançada, você recebe 6d6 dados de

auxílio. Enquanto a magia durar, sem-
pre que for realizar um teste de perí-
cia, você pode gastar 1d6 (mais 1d6

para cada círculo de magias acima do

3o que puder lançar) e adicionar o re-
sultado como bônus no teste. No en-
tanto, sempre que rolar um “6” num

desses dados, a entidade “suga” 1 PM

de você. A magia termina se você gas-
tar todos os dados, ficar sem PM ou no

fim do dia (o que acontecer primeiro).
+2 PM: aumenta o número de dados
de auxílio em +1.
+8 PM: Muda os dados de auxílio para
d12. Sempre que rolar um resultado 12
num desses dados, a entidade “suga” 2
PM de você. Requer 4o círculo.
Controlar
a Gravidade
Arcana 4 (Transmutação)
Execução: padrão; Alcance: médio;
Área: cubo de 12m de lado; Duração:
sustentada.
Você controla os efeitos da gravidade

dentro da área. Ao lançar a magia, es-
colha um dos efeitos abaixo. Enquan-
to a magia durar, você pode gastar uma

ação padrão para mudar o efeito.

Aumentar: no início de seus turnos,
cada criatura na área deve fazer um

teste de Atletismo. Se passar, fica fa-
tigada. Se falhar, fica fatigada e caída.

Inverter: inverte a gravidade da área,
fazendo com que criaturas e objetos
“caiam” para cima, atingindo o topo

(12m) em uma rodada. Se um obstá-
culo (como um teto) impedir o movi-
mento das criaturas, elas sofrem 1d6

pontos de dano de impacto para cada
1,5m de “queda”. Elas podem então se
levantar e caminhar no obstáculo, de

cabeça para baixo. Se não houver obs-
táculo, as criaturas e objetos ficam flu-
tuando no topo da área afetada, sem

poder sair do lugar. Criaturas voado-
ras podem se movimentar normalmen-
te. Alguém adjacente a algo que possa

agarrar tem direito a um teste de Refle-
xos para evitar a “queda”. A criatura

deve permanecer presa pela duração da
magia; caso contrário “cairá”.

Reduzir: criaturas ou objetos livres Mé-
dios ou menores flutuam para cima e

para baixo conforme sua vontade, com
deslocamento de voo 6m. Criaturas na

área recebem +20 em testes de Atle-
tismo para escalar e saltar. Uma criatu-
ra levitando fica instável, sofrendo –2

em testes de ataque.
Controlar Água
Divina 3 (Transmutação)
Execução: padrão; Alcance: longo;

Área: esfera com 30m de raio; Dura-
ção: cena; Resistência: veja texto.

Você controlar os movimentos e com-
portamentos da água. Ao lançar a ma-
gia, escolha um dos efeitos abaixo.

Congelar: toda a água mundana na área
é congelada. Criaturas nadando na

área ficam imóveis; escapar exige gas-
tar uma ação padrão e passar num tes-
te de Atletismo ou Acrobacia.

Derreter: gelo mundano na área vira
água e a magia termina. A critério do
mestre, isso pode criar terreno difícil.

Enchente: eleva o nível da água munda-
na na área em até 4,5m. A sua escolha,

muda área para alvo: uma embarcação.

O alvo recebe +3m em seu desloca-
mento pela duração do efeito.

Evaporar: toda a água e gelo mundano
na área evaporam instantaneamente e
a magia termina. Elementais da água,
plantas monstruosas e criaturas com
imunidade a frio na área sofrem 10d8

pontos de dano de fogo; outras criatu-
ras vivas recebem metade desse dano

(Fortitude reduz à metade).

186
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Partir: diminui o nível de toda água
mundana na área em até 4,5m. Em um

corpo d’água raso, isso abre um cami-
nho seco, que pode ser atravessado a

pé. Em um corpo d’água profundo, cria

um redemoinho que pode prender bar-
cos (um teste de Pilotagem permite ao

piloto livrar a embarcação). Elemen-
tais da água na área ficam lentos.

+2 PM: aumenta o dano em +2d8.
Controlar Fogo
Divina 2 (Evocação)
Execução: padrão; Alcance: curto;
Alvo: veja texto; Duração: cena.

Você pode criar, moldar, mover ou extin-
guir chamas e emanações de calor. Ao

lançar a magia, escolha um dos efeitos.
Chamejar: o alvo é armas escolhidas.
Elas causam +1d6 de dano de fogo.

Também afeta armas naturais e ata-
ques desarmados.

Esquentar: o alvo é 1 objeto, que come-
ça a esquentar. Ele sofre 1d6 pontos de

dano de fogo por rodada e causa o mes-
mo dano a qualquer criatura que o es-
teja segurando ou vestindo. A critério

do mestre, o objeto ou a criatura ves-
tindo-o também podem ficar em cha-
mas. Uma criatura pode gastar uma

ação completa para resfriar o obje-
to (jogando areia ou se jogando numa

fonte de água próxima, por exemplo) e
cancelar o efeito da magia.
Extinguir: o alvo é 1 chama de tamanho
Grande ou menor, que é apagada. Isso

cria uma nuvem de fumaça que ocu-
pa uma esfera com 3m de raio centra-
da onde estava a chama. Dentro da fu-
maça, criaturas têm camuflagem leve.

Modelar: o alvo é 1 chama de tama-
nho Grande ou menor. A cada roda-
da, você pode gastar uma ação livre

para movimentá-la 9m em qualquer

direção. Se atravessar o espaço ocupa-
do por uma criatura, causa 2d6 pon-
tos de dano de fogo. Uma criatura só

pode receber dano dessa maneira uma
vez por rodada.

+1 PM: muda a duração para susten-
tada e a resistência para Reflexos re-
duz à metade. Em vez do normal, você

deve escolher o seguinte efeito. Laba-
redas: a cada rodada, você pode gastar

uma ação de movimento para proje-
tar uma labareda, acertando um alvo

em alcance curto a partir da chama. O
alvo sofre 4d6 pontos de dano de fogo
(Reflexos reduz à metade).
+2 PM: aumenta o dano em +1d6
(exceto do efeito chamejar).

+3 PM: muda o alvo para 1 criatu-
ra composta principalmente por fogo,

lava ou magma (como um elemen-
tal do fogo) e a resistência para For-
titude parcial. Em vez do normal, se a

criatura falhar no teste de resistência,
é reduzida a 0 PV. Se passar, sofre 5d6
pontos de dano.
Controlar Madeira
Divina 2 (Transmutação)
Execução: padrão; Alcance: médio;
Alvo: 1 objeto de madeira Grande ou
menor; Duração: cena.
Você molda, retorce, altera ou repele

madeira. Se lançar esta magia num ob-
jeto de uma criatura involuntária, ela

tem direito a um teste de Vontade para
anulá-la. Ao lançar a magia, escolha.
Fortalecer: deixa o alvo mais resistente.
Armas têm seu dano aumentado em
um passo. Escudos têm seu bônus de
Defesa aumentado em +2 (isso é uma

melhoria no item, portanto é cumula-
tiva com outras magias). Esses e ou-
tros itens de madeira recebem +5 na

RD e dobram seus PV.
Modelar: muda a forma do alvo. Pode
transformar um galho em espada,

criar uma porta onde antes havia ape-
nas uma parede, transformar um tron-
co em uma caixa... Mas não pode criar

mecanismos complexos (como uma
besta) ou itens consumíveis.
Repelir: o alvo é repelido por você. Se
for uma arma, ataques feitos com ela
contra você falham automaticamente.
Se for uma porta ou outro objeto que

possa ser aberto, ele vai se abrir quan-
do você se aproximar, mesmo que es-
teja trancado. Um objeto que vá atin-
gi-lo, como uma carroça, tronco ou

barril, vai desviar ou parar adjacente a
você, sem lhe causar dano. Os efeitos

de regras em outros objetos de madei-
ra ficam a cargo do mestre.

Retorcer: estraga o alvo. Uma porta re-
torcida emperra (exigindo um teste

de Força contra CD 25 para ser aber-
ta). Armas e itens retorcidos impõem

–5 em testes de perícia. Escudos retor-
cidos deixam de oferecer bônus (mas

ainda impõem penalidades). Um barco
retorcido começa a afundar e naufraga
ao final da cena. Os efeitos de regras
em outros objetos de madeira ficam a
cargo do mestre.
+1 PM: muda o alcance para pessoal,
o alvo para você e a duração para um

dia. Você e seu equipamento se trans-
formam em uma árvore de tamanho

Grande. Nessa forma, você não pode

falar ou fazer ações físicas, mas con-
segue perceber seus arredores normal-
mente. Se for atacado nessa forma, a

magia é dissipada. Um teste de Sobre-
vivência (CD 30) revela que você não é

uma árvore verdadeira.

+3 PM: muda o alvo para área de qua-
drado com 9m de lado e a duração para

cena. Em vez do normal, qualquer

vegetação na área fica rígida e afia-
da. A área é considerada terreno difí-
cil e criaturas que andem nela sofrem

1d6 pontos de dano de corte para cada
1,5m que avancem.
+7 PM: muda o tamanho do alvo para
Enorme ou menor. Requer 3o círculo.
+12 PM: muda o tamanho do alvo para
Colossal ou menor. Requer 4o círculo.
Controlar o Clima
Divina 4 (Transmutação)
Execução: completa; Alcance: 2km;

Área: esfera com 2km de raio; Dura-
ção: 4d12 horas.

Você muda o clima da área onde se
encontra, podendo criar qualquer

condição climática: chuva, neve, ven-
tos, névoas... Veja o Capítulo 6: O

Mestre para os efeitos do clima.
+1 PM (Apenas Druidas): muda o
raio da área para 3km e duração para
1d4 dias.
Controlar o Tempo
Arcana 5 (Transmutação)
Execução: padrão; Alcance: curto;
Alvo: veja texto; Duração: veja texto.

Aquele que controla o tempo contro-
la o mundo. Escolha um dos efeitos

a seguir.
Congelar o tempo: você gera uma bolha

do seu tamanho na qual o tempo pas-
sa mais lentamente. Para outras criatu-
ras, a bolha surge e desaparece instan-
taneamente, mas, para você, ela dura

3 rodadas, durante as quais você pode

agir e não é afetado por efeitos contí-
nuos (como chamas). Porém, durante

essas 3 rodadas, você e quaisquer efei-
tos que você gerar não podem sair da

área que você ocupava quando lançou

esta magia. Efeitos de área com dura-
ção maior que a da bolha voltam a agir

normalmente quando ela termina.
Saltar no tempo: você e até 5 criaturas
voluntárias são transportadas de 1 a

24 horas para o futuro, desaparecen-
do com um brilho. Vocês ressurgem

no mesmo lugar, com a mesma velo-
cidade e orientação; do seu ponto de

vista, nenhum tempo se passou. Se

187

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro

um objeto sólido agora ocupa o es-
paço de uma criatura, ela ressurge na

área vazia mais próxima.

Voltar no tempo: você revive os últi-
mos segundos. Todas as ações da ro-
dada anterior são desfeitas (incluindo

perda de PV e PM — exceto os gastos
nesta magia). Tudo retorna à posição
em que estava no início do seu turno
na última rodada e você é o único que

sabe o que acontecerá. Outros per-
sonagens devem repetir as mesmas

ações — exceto se você fizer algo a

respeito (como avisar seus aliados so-
bre o que vai acontecer). Você só pode

reviver uma mesma rodada uma vez.
Controlar Plantas
Divina 1 (Transmutação)
Execução: padrão; Alcance: curto;

Área: quadrado com 9m de lado; Du-
ração: cena; Resistência: Reflexos

anula.
Esta magia só pode ser lançada em
uma área com vegetação. As plantas
se enroscam nas criaturas da área.
Aquelas que falharem na resistência
ficam enredadas. Uma vítima pode
se libertar com uma ação padrão e
um teste de Acrobacia ou Atletismo.

Além disso, a área é considerada ter-
reno difícil. No início de seus turnos,

a vegetação tenta enredar novamen-
te qualquer criatura na área, exigindo

um novo teste de Reflexos.
Truque: muda a área para alvo de 1
planta e a resistência para nenhuma.
Em vez do normal, você pode fazer a
planta se mover como se fosse animada.
Ela não pode causar dano ou atrapalhar
a concentração de um conjurador.

+1 PM: muda a duração para instantâ-
nea. Em vez do normal, as plantas na

área diminuem, como se tivessem sido

podadas. Terreno difícil muda para ter-
reno normal e não fornece camufla-
gem. Esse efeito dissipa o uso normal

de Controlar Plantas.
+1 PM: além do normal, criaturas que
falhem na resistência também ficam
imóveis.
+2 PM: muda o alcance para pessoal, a
área para alvo (você) e a resistência para

nenhuma. Em vez do normal, você con-
segue se comunicar com plantas, que

começam com atitude prestativa em re-
lação a você. Além disso, você pode fa-
zer testes de Diplomacia com plantas.

Em geral, plantas têm uma percepção

limitada de seus arredores e normal-
mente fornecem respostas simplórias.

Controlar Terra
Divina 3 (Transmutação)
Execução: padrão; Alcance: longo;
Área: 9 cubos com 1,5m de lado;
Duração: instantânea; Resistência:
veja texto.
Você manipula a densidade e a forma de
toda terra, pedra, lama, argila ou areia
na área. Ao lançar a magia, escolha.
Amolecer: se afetar o teto, uma coluna

ou suporte, provoca um desabamen-
to que causa 10d6 pontos de dano de

impacto às criaturas na área (Reflexos
reduz à metade). Se afetar um piso de
terra ou pedra, cria terreno difícil de
areia ou argila, respectivamente.
Modelar: pode usar pedra ou argila para

criar um ou mais objetos simples de ta-
manho Enorme ou menor (sem meca-
nismos ou partes móveis). Por exem-
plo, pode transformar um tijolo em

uma maça, criar uma passagem onde

antes havia apenas uma parede ou le-
vantar uma ou mais paredes que ofe-
recem cobertura total (RD 8 e 50 PV

para cada 3m).
Solidificar: transforma lama ou areia em
terra ou pedra. Criaturas com os pés

na superfície ficam agarradas. Elas po-
dem se soltar com uma ação padrão e

um teste de Acrobacia ou Atletismo.
+1 PM: aumenta o número de cubos
de 1,5m em +2.
+1 PM: muda o alcance para pessoal, o
alvo para você e a duração para um dia.
Você e seu equipamento fundem-se a

uma superfície ou objeto adjacente fei-
to de pedra, terra, argila ou areia que

possa acomodá-lo. Você pode voltar ao
espaço adjacente como uma ação livre,

dissipando a magia. Enquanto mescla-
do, você não pode falar ou fazer ações

físicas, mas consegue perceber seus ar-
redores normalmente. Pequenos danos

não o afetam, mas se o objeto (ou o

trecho onde você está imerso) for des-
truído, a magia é dissipada, você vol-
ta a um espaço livre adjacente e sofre

10d6 pontos de dano de impacto.
Convocação Instantânea
Arcana 3 (Convocação)
Execução: padrão; Alcance: ilimitado;

Alvo: 1 objeto de até 2 espaços; Dura-
ção: instantânea.

Você invoca um objeto de qualquer lu-
gar para sua mão. O item deve ter sido

previamente preparado com uma runa
pessoal sua (ao custo de T$ 5).

A magia não funciona se o objeto es-
tiver com outra criatura, mas você sa-
berá onde ele está e quem o está car-
regando (ou sua descrição física, caso

não conheça a criatura).
+1 PM: além do normal, até 1 hora
após ter lançado a magia, você pode
gastar uma ação de movimento para
enviar o objeto de volta para o local em
que ele estava antes.

+1 PM: muda o alvo para um baú Mé-
dio, a duração para permanente e adi-
ciona sacrifício de 1 PM. Em vez do nor-
mal, você esconde o baú no Éter Entre

Mundos, com até 20 espaços de equipa-
mento. A magia faz com que qualquer

objeto caiba no baú, independentemen-
te do seu tamanho. Uma vez escondido,

você pode convocar o baú para um es-
paço livre adjacente, ou de volta para o

Éter, com uma ação padrão. Componen-
te material: baú construído com matéria-

-prima da melhor qualidade (T$ 1.000).
Você deve ter em mãos uma miniatura

do baú, no valor de T$ 100, para invo-
car o baú verdadeiro.

+2 PM: aumenta o número de alvos
em +1.
+2 PM: muda o alvo para 1 objeto de

até 10 espaços. Um objeto muito gran-
de ou pesado para aparecer em suas

mãos surge em um espaço adjacente a
sua escolha.
Crânio Voador
de Vladislav
Arcana 2 (Necromancia)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura; Duração: instantânea;
Resistência: Fortitude parcial.
Esta magia cria um crânio envolto em
energia negativa. Quando atinge o
alvo, ele causa 4d8+4 pontos de dano
de trevas e se desfaz emitindo um som
horrendo, deixando abalado o alvo e
todos os inimigos num raio de 3m dele
(criaturas já abaladas ficam apavoradas
por 1d4 rodadas). Passar no teste de
resistência diminui o dano à metade e
evita a condição (as demais criaturas
na área também tem direito ao teste
de resistência, para evitar a condição).
+2 PM: aumenta o dano em +1d8+1.
+2 PM: aumenta o número de alvos
em +1.
Criar Elementos
Divina 1 (Convocação)
Execução: padrão; Alcance: curto;
Efeito: elemento escolhido; Duração:
instantânea.

188
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Você cria uma pequena porção de um

elemento, a sua escolha. Os elemen-
tos criados são reais, não mágicos. Ele-
mentos físicos devem surgir em uma

superfície. Em vez de um cubo, pode-
-se criar objetos simples (sem partes
móveis) feitos de gelo, terra ou pedra.
Água: enche um recipiente de tamanho
Minúsculo (como um odre) com água

potável ou cria um cubo de gelo de ta-
manho Minúsculo.

Ar: cria um vento fraco em um qua-
drado de 1,5m. Isso purifica a área de

qualquer gás ou fumaça, ou remove
névoa por uma rodada.
Fogo: cria uma chama que ilumina
como uma tocha. Você pode segurá-la
na palma de sua mão sem se queimar,
ou fazê-la surgir em um quadrado de

1,5m. Se uma criatura ou objeto esti-
ver no quadrado, sofre 1d6 pontos de

dano de fogo; se falhar num teste de
Reflexos, fica em chamas.

Terra: cria um cubo de tamanho Minús-
culo feito de terra, argila ou pedra.

+1 PM: aumenta a quantidade do ele-
mento em um passo (uma categoria de

tamanho para água ou terra, +1 qua-
drado de 1,5m para ar e fogo).

+1 PM: muda o efeito para alvo 1 cria-
tura ou objeto e a resistência para Re-
flexos reduz à metade. Se escolher

água ou terra, você arremessa o cubo
ou objeto criado no alvo, causando 2d4
pontos de dano de impacto. Para cada

categoria de tamanho acima de Minús-
culo, o dano aumenta em um passo. O

cubo se desfaz em seguida.
+1 PM: se escolheu fogo, aumenta o
dano inicial de cada chama em +1d6.
Criar Ilusão
Arcana 1 (Ilusão)
Execução: padrão; Alcance: médio;
Efeito: ilusão que se estende a até 4

cubos de 1,5m; Duração: cena; Resis-
tência: Vontade desacredita.

Esta magia cria uma ilusão visual (uma
criatura, uma parede...) ou sonora (um
grito de socorro, um uivo assustador...).
A magia cria apenas imagens ou sons
simples, com volume equivalente ao
tom de voz normal para cada cubo de
1,5m no efeito. Não é possível criar
cheiros, texturas ou temperaturas, nem
sons complexos, como uma música ou
diálogo. Criaturas e objetos atravessam

uma ilusão sem sofrer dano, mas a ma-
gia pode, por exemplo, esconder uma

armadilha ou inimigo. A magia é dissi-
pada se você sair do alcance.

+1 PM: muda a duração para susten-
tada. A cada rodada você pode gastar

uma ação livre para mover a imagem

ou alterar levemente o som, como au-
mentar o volume ou fazer com que pa-
reça se afastar ou se aproximar, ain-
da dentro dos limites do efeito. Você

pode, por exemplo, criar a ilusão de

um fantasma que anda pela sala, con-
trolando seus movimentos. Quando

você para de sustentar a magia, a ima-
gem ou som persistem por mais uma

rodada antes de a magia se dissipar.
+1 PM: aumenta o efeito da ilusão em
+1 cubo de 1,5m.
+1 PM: também pode criar ilusões de
imagem e sons combinados.

+1 PM: também pode criar sons com-
plexos com volume máximo equivalen-
te ao que cinco pessoas podem produ-
zir para cada cubo de 1,5m no efeito.

Com uma ação livre, você pode alterar

o volume do som ou fazê-lo se apro-
ximar ou se afastar dentro do alcance.

+2 PM: também pode criar odores e

sensações térmicas, que são percebi-
dos a uma distância igual ao dobro do

tamanho máximo do efeito. Por exem-
plo, uma miragem de uma fogueira

com 4 cubos de 1,5m poderia emanar
calor e cheiro de queimado a até 12m.
+2 PM: muda o alcance para longo e o
efeito para esfera com 30m de raio. Em

vez do normal, você cria um som mui-
to alto, equivalente a uma multidão.

Criaturas na área lançam magias como
se estivessem em uma condição ruim e
a CD de testes de Percepção para ouvir
aumenta em +10. Requer 2o círculo.
+2 PM: também criar sensações táteis,

como texturas; criaturas que não sai-
bam que é uma ilusão não conseguem

atravessá-la sem passar em um teste de
Vontade (objetos ainda a atravessam).
A ilusão ainda é incapaz de causar ou
sofrer dano. Requer 2o círculo.

+5 PM: muda a duração para sus-
tentada. Além do normal, você pode

gastar uma ação livre para modifi-
car livremente a ilusão (mas não pode

acrescentar novos aprimoramentos
após lançá-la). Requer 3o círculo.
Cúpula de Repulsão
Divina 4 (Abjuração)
Execução: padrão; Alcance: pessoal;

Alvo: você; Duração: sustentada; Re-
sistência: Vontade anula.

Uma cúpula de energia invisível o cer-
ca, impedindo a aproximação de cer-
tas criaturas. Escolha um tipo de cria-
tura (animais, espíritos, monstros...)

ou uma raça de humanoides (elfos, go-
blins, minotauros..). Criaturas do gru-
po escolhido que tentem se aproximar

a menos de 3m de você (ou seja, que
tentem ficar adjacentes a você) devem

fazer um teste de Vontade. Se falha-
rem, não conseguem, gastam a ação e

só podem tentar novamente na rodada
seguinte. Isso impede ataques corpo a

corpo, mas não ataques ou outros efei-
tos à distância. Se você tentar se apro-
ximar além do limite de 3m, rompe a

cúpula e a magia é dissipada.
+2 PM: a cúpula impede criaturas de
se aproximarem a menos de 4,5m de

você (ou seja, deve haver dois quadra-
dos entre você e as criaturas).

+5 PM: além do normal, criaturas afe-
tadas também precisam fazer o teste

de resistência se fizerem um ataque

ou efeito à distância você. Se falha-
rem, o efeito é desviado pela cúpula.

Requer 5o círculo.
Curar Ferimentos
Divina 1 (Evocação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: instantânea.
Você canaliza luz que recupera
2d8+2 pontos de vida na criatura
tocada.
Truque: muda o alvo para 1 morto-
-vivo. Em vez do normal, causa 1d8
pontos de dano de luz (Vontade reduz
à metade).
+1 PM: aumenta a cura em +1d8+1.

+2 PM: também remove uma condi-
ção de fadiga do alvo.

+2 PM: muda o alcance para curto.
+5 PM: muda o alcance para curto e o
alvo para criaturas escolhidas.
Deflagração
de Mana
Arcana 5 (Evocação)

Execução: completa; Alcance: pes-
soal; Área: esfera com 15m de raio;

Duração: instantânea; Resistência:
Fortitude parcial.

Após concentrar seu mana, você ema-
na energia, como uma estrela em ple-
na terra. Todas as criaturas na área so-
frem 150 pontos de dano de essência e

todos os itens mágicos (exceto artefa-
tos) tornam-se mundanos. Você não é

afetado pela magia. Alvos que passem
no teste de Fortitude sofrem metade
do dano e seus itens mágicos voltam a
funcionar após um dia.

189

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
+1 PM: aumenta o dano em 10.
+5 PM: afeta apenas criaturas a sua
escolha.
Desejo
Arcana 5 (Transmutação)
Execução: completa; Alcance: veja
texto; Alvo: veja texto; Duração: veja
texto; Resistência: veja texto.

Esta é a mais poderosa das magias ar-
canas, permitindo alterar a realidade a

seu bel-prazer. Você pode:

• Dissipar os efeitos de qualquer ma-
gia de 4o círculo ou menor.

• Transportar até 10 criaturas volun-
tárias em alcance longo para qualquer

outro local, em qualquer plano.

• Desfazer um acontecimento recen-
te. A magia permite que um teste re-
alizado por uma criatura em alcance

longo na última rodada seja realizado

novamente. Por exemplo, se um alia-
do morreu na última rodada devido ao

ataque de um inimigo, você pode obri-
gar o inimigo a refazer esse ataque.

Você pode desejar por algo ainda mais
poderoso. Nesse caso, a magia requer

o sacrifício de 2 PM e pode fazer coi-
sas como:

• Criar um item mundano de até T$
30.000.

• Duplicar os efeitos de qualquer ma-
gia de até 4o círculo. Caso a magia pre-
cise de um componente material para

ser lançada, ainda é necessário provi-
denciar o componente.

• Aumentar um atributo de uma cria-
tura em +1. Cada atributo só pode ser

aumentado uma vez com Desejo.
Desejo pode gerar efeitos ainda mais

poderosos, mas cuidado! Desejar a for-
tuna de um rei pode transportá-lo para

a sala de tesouro real, onde você po-
derá ser preso ou morto; desejar ser

imortal pode transformá-lo em mor-
to-vivo, e assim por diante. Qualquer

efeito que não se encaixe na lista acima
deve ser decidido pelo mestre.
Desespero
Esmagador
Arcana 2 (Encantamento)
Execução: padrão; Alcance: pessoal;
Área: cone de 6m; Duração: cena;
Resistência: Vontade parcial.
Humanoides na área são acometidos

de grande tristeza, adquirindo as con-
dições fraco e frustrado. Se passarem

na resistência, adquirem essas condi-
ções por uma rodada.

+2 PM: em vez do normal, as condi-
ções adquiridas são debilitado e es-
morecido.

+3 PM: em vez do normal, afeta qual-
quer tipo de criatura.

+3 PM: além do normal, criaturas que

falhem na resistência ficam aos pran-
tos (pasmos) por 1 rodada (apenas

uma vez por cena). Requer 3o círculo.
Desintegrar
Arcana 4 (Transmutação)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura ou objeto; Duração:
instantânea; Resistência: Fortitude
parcial.
Você dispara um raio fino e esverdeado
que causa 10d12 pontos de dano de
essência. Se o alvo passar no teste de
resistência, em vez disso sofre 2d12
pontos de dano.
Independentemente do resultado do

teste de Fortitude, se os PV do alvo fo-
rem reduzidos a 0 ou menos, ele será

completamente desintegrado, restando
apenas pó.
+4 PM: aumenta o dano total em
+2d12 e o dano mínimo em +1d12.
Despedaçar
Divina 1 (Evocação)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura ou objeto mundano

Pequeno; Duração: instantânea; Re-
sistência: Fortitude parcial.

Esta magia emite um som alto e agu-
do. O alvo sofre 1d8+2 pontos de dano

de impacto (ou o dobro disso e igno-
ra RD se for um construto ou objeto

mundano) e fica atordoado por uma
rodada (apenas uma vez por cena). Um

teste de Fortitude reduz o dano à me-
tade e evita o atordoamento.

+2 PM: aumenta o dano em +1d8+2.

+2 PM: muda o alvo para objeto mun-
dano Médio. Requer 2o círculo.

+5 PM: muda o alvo para objeto mun-
dano Grande. Requer 3o círculo.

+9 PM: muda o alvo para objeto mun-
dano Enorme. Requer 4o círculo.

+14 PM: muda o alvo para objeto
mundano Colossal. Requer 5o círculo.
+5 PM: muda o alcance para pessoal e

a área para esfera com 6m de raio. To-
das as criaturas e objetos mundanos na

área são afetados.

Despertar Consciência
Divina 3 (Encantamento)
Execução: completa; Alcance: toque;
Alvo: 1 animal ou planta; Duração:
1 dia.

Você desperta a consciência de um ani-
mal ou planta. O alvo se torna um par-
ceiro veterano de um tipo a sua esco-
lha entre ajudante, combatente, fortão,

guardião, médico, perseguidor ou vigi-
lante. Se usar esta magia em um par-
ceiro que já possua, o nível de poder de

um de seus tipos aumenta em um passo
(iniciante para veterano, veterano para
mestre). Se já for um parceiro mestre,

recebe o bônus de outro tipo de parcei-
ro iniciante (entre as escolhas acima).

O alvo se torna uma criatura racional,
com Inteligência –1, e pode falar.
+4 PM: muda o alvo para 1 escultura
mundana inanimada. Além do normal,
o alvo tem as mesmas características de
um construto.

+4 PM: muda a duração para perma-
nente e adiciona penalidade de –3 PM.

Detectar Ameaças
Divina 1 (Adivinhação)
Execução: padrão; Alcance: pessoal;

Área: esfera com 18m de raio; Dura-
ção: cena, até ser descarregada.

Você recebe uma intuição aguçada so-
bre perigos ao seu redor. Quando uma

criatura hostil ou armadilha entra na
área do efeito, você faz um teste de

Percepção (CD determinada pelo mes-
tre de acordo com a situação). Se pas-
sar, sabe a origem (criatura ou armadi-
lha), direção e distância do perigo. Se

falhar, sabe apenas que o perigo existe.
+1 PM: você descobre também a raça

ou espécie e o poder da criatura de-
tectada (determinado pela aura dela).

Criaturas de 1o a 6o nível ou ND geram
aura tênue, criaturas de 7o a 12o nível

ou ND geram aura moderada e criatu-
ras de 13o ao 20o nível ou ND geram

aura poderosa. Criaturas acima do 20o
nível ou ND geram aura avassaladora.
+2 PM: além do normal, você não fica
surpreso desprevenido contra perigos
detectados com sucesso e recebe +5

em testes de resistência contra arma-
dilhas. Requer 2o círculo.

Dificultar Detecção
Arcana 3 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura ou objeto; Duração:
1 dia.

190
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Esta magia oculta a presença do alvo

contra qualquer meio mágico de detec-
ção, inclusive detectar magia. Um con-
jurador que lance uma magia de adi-
vinhação para detectar a presença ou

localização do alvo deve fazer um teste

de Vontade. Se falhar, a magia não fun-
ciona, mas os PM são gastos mesmo

assim. Se for lançada sobre uma cria-
tura, Dificultar Detecção protege tanto a

criatura quanto seu equipamento.
+4 PM: muda o alvo para área de cubo
de 9m. Qualquer criatura ou objeto na
área recebe o efeito da magia enquanto
estiver dentro dela.
+4 PM: muda a duração para 1 semana.
Disfarce Ilusório
Arcana 1 (Ilusão)
Execução: padrão; Alcance: pessoal;

Alvo: você; Duração: cena; Resistên-
cia: Vontade desacredita.

Você muda a aparência do alvo, in-
cluindo seu equipamento. Isso inclui

altura, peso, tom de pele, cor de ca-
belo, timbre de voz etc. O alvo rece-
be +10 em testes de Enganação para

disfarce. O alvo não recebe novas habi-
lidades (você pode ficar parecido com

outra raça, mas não ganhará as habi-
lidades dela), nem modifica o equipa-
mento (uma espada longa disfarçada

de bordão continua funcionando e cau-
sando dano como uma espada).

Truque: muda o alcance para toque,
o alvo para 1 criatura e a duração para
1 semana. Em vez do normal, você faz
uma pequena alteração na aparência
do alvo, como deixar o nariz vermelho
ou fazer brotar um gerânio no alto da
cabeça. A mudança é inofensiva, mas
persistente — se a flor for arrancada,
por exemplo, outra nascerá no local.
+1 PM: muda o alcance para curto e o

alvo para 1 objeto. Você pode, por exem-
plo, transformar pedaços de ferro em

moedas de ouro. Você recebe +10 em
testes de Enganação para falsificação.
+2 PM: muda o alcance para curto e o

alvo para 1 criatura. Uma criatura in-
voluntária pode anular o efeito com

um teste de Vontade.

+2 PM: a ilusão inclui odores e sensa-
ções. Isso muda o bônus em testes de

Enganação para disfarce para +20.
+3 PM: muda o alcance para curto e
o alvo para criaturas escolhidas. Cada

criatura pode ter uma aparência dife-
rente. Criaturas involuntárias podem

anular o efeito com um teste de Von-
tade. Requer 2o círculo.

Dispersar as Trevas
Divina 3 (Evocação)
Execução: padrão; Alcance: pessoal;

Área: esfera com 6m de raio; Dura-
ção: veja texto.

Esta magia cria um forte brilho (mul-
ticolorido ou de uma cor que remeta a

sua divindade) que causa diversos efei-
tos. Todas as magias de 3o círculo ou

menor ativas na área são dissipadas se

você passar num teste de Religião con-
tra a CD de cada magia. Seus aliados

na área recebem +4 em testes de re-
sistência e redução de trevas 10 até o

fim da cena, protegidos por uma aura
sutil da mesma cor. Inimigos na área
ficam cegos por 1d4 rodadas (apenas
uma vez por cena). Dispersar as Trevas

anula Anular a Luz (este efeito tem du-
ração instantânea).

+2 PM: aumenta o bônus nas resistên-
cias em +1.

+4 PM: muda o alcance para curto, a
área para alvo 1 criatura e a duração
para cena. O alvo fica imune a efeitos
de trevas.
+4 PM: muda o círculo máximo de
magias dissipadas para 4o. Requer 4o
círculo.
+9 PM: muda o círculo máximo de
magias dissipadas para 5o. Requer 5o
círculo.
Dissipar Magia
Universal 2 (Abjuração)
Execução: padrão; Alcance: médio;

Alvo ou Área: 1 criatura ou 1 obje-
to mágico ou esfera com 3m de raio;

Duração: instantânea.

Você dissipa outras magias que este-
jam ativas, como se sua duração tives-
se acabado. Note que efeitos de magias

instantâneas não podem ser dissipados
(não se pode dissipar uma Bola de Fogo
ou Relâmpago depois que já causaram
dano...). Se lançar essa magia em uma

criatura ou área, faça um teste de Misti-
cismo; você dissipa as magias com CD

igual ou menor que o resultado do tes-
te. Se lançada contra um item mágico, o

transforma em um item mundano por
1d6 rodadas (Vontade anula).
+12 PM: muda a área para esfera com
9m de raio. Em vez do normal, cria um
efeito de disjunção. Todas as magias na
área são automaticamente dissipadas e

todos os itens mágicos na área, exce-
to aqueles que você estiver carregando,

viram itens mundanos por uma cena
(com direito a um teste de Vontade para
evitar esse efeito). Requer 5o círculo.

Duplicata Ilusória
Arcana 4 (Ilusão)
Execução: padrão; Alcance: médio;
Efeito: cópia ilusória; Duração: cena.

Você cria uma cópia ilusória semir-
real de... você mesmo! Ela é idêntica

em aparência, som e cheiro, mas é in-
tangível. A cada turno, você escolhe se

verá e ouvirá através da duplicata ou

de seu corpo original. A cópia repro-
duz todas as suas ações, incluindo fala.

Qualquer magia com alcance de toque

ou maior que você lançar pode se origi-
nar da duplicata, em vez do seu corpo

original. As magias afetam outros al-
vos normalmente, com a única diferen-
ça de se originarem da cópia, em vez

de você. Se quiser que a duplicata faça

algo diferente de você, você deve gas-
tar uma ação de movimento. Qualquer

criatura que interagir com a cópia tem

direito a um teste de Vontade para per-
ceber que é uma ilusão. As magias que

se originam dela, no entanto, são reais.
A cópia desaparece se sair do alcance.
+3 PM: cria uma cópia adicional.
Enfeitiçar
Arcana 1 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 humanoide; Duração: cena;
Resistência: Vontade anula.

O alvo fica enfeitiçado (veja a pági-
na 394). Um alvo hostil ou que esteja

envolvido em um combate recebe +5
em seu teste de resistência. Se você ou
seus aliados tomarem qualquer ação

hostil contra o alvo, a magia é dissi-
pada e o alvo retorna à atitude que ti-
nha antes (ou piorada, de acordo com

o mestre).

+2 PM: em vez do normal, você suge-
re uma ação para o alvo e ele obede-
ce. A sugestão deve ser feita de modo

que pareça aceitável, a critério do mes-
tre. Pedir ao alvo que pule de um pre-
cipício, por exemplo, dissipa a magia.

Já sugerir a um guarda que descanse
um pouco, de modo que você e seus
aliados passem por ele, é aceitável.

Quando o alvo executa a ação, a ma-
gia termina. Você pode determinar

uma condição específica para a suges-
tão: por exemplo, que um rico merca-
dor doe suas moedas para o primeiro

mendigo que encontrar.
+5 PM: muda o alvo para 1 espírito ou
monstro. Requer 3o círculo.
+5 PM: afeta todos os alvos dentro do
alcance.

191

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Engenho de Mana
Arcana 5 (Abjuração)
Execução: padrão; Alcance: médio;
Efeito: disco de energia com 1,5m de
diâmetro; Duração: sustentada.

Você cria um disco de energia que lem-
bra uma roda de engenho e flutua no

ponto em que foi conjurado. O disco é
imune a dano, não pode ser movido e

faz uma contramágica automática con-
tra qualquer magia lançada em alcan-
ce médio dele (exceto as suas), usan-
do seu teste de Misticismo. Caso vença

o teste, o engenho não só anula a ma-
gia como absorve os PM usados para

lançá-la, acumulando PM temporários.
No seu turno, se estiver ao alcance do
disco, você pode gastar PM nele para
lançar magias.
+1 PM: em vez de flutuar no ponto em
que foi conjurado, o disco flutua atrás de
você, mantendo-se sempre adjacente.
+4 PM: muda a duração para um dia.
Enxame de Pestes
Divina 2 (Convocação)
Execução: completa; Alcance: médio;
Efeito: 1 enxame Médio (quadrado de

1,5m); Duração: sustentada. Resis-
tência: Fortitude reduz à metade.

Você conjura um enxame de criaturas

a sua escolha, como besouros, gafa-
nhotos, ratos, morcegos ou serpentes.

O enxame pode passar pelo espaço de

outras criaturas e não impede que ou-
tras criaturas entrem no espaço dele.

No final de seus turnos, o enxame
causa 2d12 pontos de dano de corte a

qualquer criatura em seu espaço (For-
titude reduz à metade). Você pode gas-
tar uma ação de movimento para mo-
ver o enxame 12m.

+2 PM: aumenta o dano em +1d12.

+3 PM: muda a resistência para Refle-
xos reduz à metade e o enxame para

criaturas maiores, como gatos, guaxi-
nins, compsognatos ou kobolds. Ele

causa 3d12 pontos de dano (a sua es-
colha entre corte, impacto ou perfura-
ção). O resto da magia segue normal.

+5 PM: aumenta o número de enxa-
mes em +1. Eles não podem ocupar o

mesmo espaço. Requer 3o círculo.

+7 PM: muda a resistência para Refle-
xos reduz à metade e o enxame para

criaturas elementais. Ele causa 5d12
pontos do dano (a sua escolha entre
ácido, eletricidade, fogo ou frio). O
resto da magia segue normal. Requer
4o círculo.

Enxame Rubro
de Ichabod
Arcana 3 (Convocação)
Execução: padrão; Alcance: médio;
Efeito: 1 enxame Grande (quadrado

de 3m); Duração: sustentada; Resis-
tência: Reflexos reduz à metade.

Você conjura um enxame de pequenas
criaturas da Tormenta. O enxame pode
passar pelo espaço de outras criaturas

e não impede que outras criaturas en-
trem no espaço dele. No final de cada

um de seus turnos, o enxame causa

4d12 pontos de dano de ácido a qual-
quer criatura em seu espaço (Refle-
xos reduz à metade). Você pode gastar

uma ação de movimento para mover o
enxame com deslocamento de 12m.
+1 PM: além do normal, uma criatura

que falhe no teste de Reflexos fica agar-
rada (o enxame escala e cobre o corpo

dela). A criatura pode gastar uma ação
padrão e fazer um teste de Acrobacia

ou Atletismo para escapar. Se você mo-
ver o enxame, a criatura fica livre.

+2 PM: aumenta o dano em +1d12.
+2 PM: muda o dano para trevas.

+3 PM: o enxame vira Enorme (qua-
drado de 6m de lado).

+3 PM: o enxame ganha deslocamento
de voo 18m e passa a ocupar um cubo
ao invés de um quadrado.
+4 PM: o enxame inclui parasitas que
explodem e criam novos enxames. No
início de cada um de seus turnos, role
1d6. Em um resultado 5 ou 6, um novo

enxame surge adjacente a um já exis-
tente à sua escolha. Você pode mo-
ver todos os enxames com uma única

ação de movimento, mas eles não po-
dem ocupar o mesmo espaço. Requer

4o círculo.
Erupção Glacial
Arcana 3 (Evocação)
Execução: padrão; Alcance: médio;

Área: quadrado de 6m de lado; Dura-
ção: instantânea; Resistência: Refle-
xos parcial.

Estacas de gelo irrompem do chão.
Criaturas na área sofrem 4d6 de dano
de corte, 4d6 de dano de frio e ficam

caídas. Passar no teste de Reflexos evi-
ta o dano de corte e a queda. As esta-
cas duram pela cena, o que torna a área

afetada terreno difícil, e concedem co-
bertura leve para criaturas dentro da

área ou atrás dela. As estacas são des-
truídas caso sofram qualquer quanti-
dade de dano por fogo mágico.

+3 PM: aumenta o dano de frio em
+2d6 e o dano de corte em +2d6.
+4 PM: muda a área para cilindro com
6m de raio e 6m de altura e a duração
para sustentada. Em vez do normal, a

magia cria uma tempestade de grani-
zo que causa 3d6 pontos de dano de

impacto e 3d6 pontos de dano de frio

em todas as criaturas na área (sem tes-
te de resistência). A tempestade forne-
ce camuflagem leve às criaturas dentro

dela e deixa o piso escorregadio. Piso
escorregadio conta como terreno difícil

e obriga criaturas na área a fazer tes-
tes de Acrobacia para equilíbrio (veja o

Capítulo 2). Requer 4o círculo.
Escudo da Fé
Divina 1 (Abjuração)
Execução: reação; Alcance: curto;
Alvo: 1 criatura; Duração: 1 turno.

Um escudo místico se manifesta mo-
mentaneamente para bloquear um gol-
pe. O alvo recebe +2 na Defesa.

+1 PM: muda a execução para ação pa-
drão, o alcance para toque e a duração

para cena.

+1 PM: também fornece ao alvo camu-
flagem leve contra ataques à distância.

+2 PM: aumenta o bônus na Defesa
em +1.

+2 PM: muda a execução para ação pa-
drão, o alcance para toque e a duração

para cena. A magia cria uma conexão
mística entre você e o alvo. Além do
efeito normal, o alvo sofre metade do

dano por ataques e efeitos; a outra me-
tade do dano é transferida a você. Se

o alvo sair de alcance curto de você, a
magia é dissipada. Requer 2o círculo.
+3 PM: muda a duração para um dia.
Requer 2o círculo.
Esculpir Sons
Arcana 2 (Ilusão)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura ou objeto; Duração:
cena; Resistência: Vontade anula.
Esta magia altera os sons emitidos
pelo alvo. Ela não é capaz de criar
sons, mas pode omiti-los (como fazer

uma carroça ficar silenciosa) ou trans-
formá-los (como fazer uma pessoa fi-
car com voz de passarinho). Você não

pode criar sons que não conhece (não

pode fazer uma criatura falar num idio-
ma que não conheça). Uma vez que es-
colha a alteração, ela não pode ser mu-
dada. Um conjurador que tenha a voz

modificada drasticamente não poderá
lançar magias.

192
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

+2 PM: aumenta o número de alvos

em +1. Todas as criaturas e objetos de-
vem ser afetadas da mesma forma.

Escuridão
Universal 1 (Necromancia)
Execução: padrão; Alcance: curto;

Alvo: 1 objeto; Duração: cena; Resis-
tência: Vontade anula (veja texto).

O alvo emana sombras em uma área
com 6m de raio. Criaturas dentro da

área recebem camuflagem leve por es-
curidão leve. As sombras não podem

ser iluminadas por nenhuma fonte de

luz natural. O objeto pode ser guarda-
do (em um bolso, por exemplo) para

interromper a escuridão, que voltará a
funcionar caso o objeto seja revelado.
Se lançar a magia num objeto de uma
criatura involuntária, ela tem direito a

um teste de Vontade para anulá-la. Es-
curidão anula Luz.

+1 PM: aumenta a área da escuridão
em +1,5m de raio.
+2 PM: muda o efeito para fornecer
camuflagem total por escuridão total.
As sombras bloqueiam a visão na área
e através dela.
+2 PM: muda o alvo para 1 criatura
e a resistência para Fortitude parcial.
Você lança a magia nos olhos do alvo,
que fica cego pela cena. Se passar na
resistência, fica cego por 1 rodada.
Requer 2o círculo.
+3 PM: muda a duração para um dia.
+5 PM: muda o alcance para pessoal
e o alvo para você. Em vez do normal,

você é coberto por sombras, receben-
do +10 em testes de Furtividade e ca-
muflagem leve. Requer 2o círculo.

Explosão
Caleidoscópica
Arcana 4 (Ilusão)
Execução: padrão; Alcance: curto; Área:

esfera com 6m de raio; Duração: instan-
tânea. Resistência: Fortitude parcial.

Esta magia cria uma forte explosão de

luzes estroboscópicas e sons cacofôni-
cos que desorientam as criaturas atin-
gidas. O efeito que cada criatura sofre

depende do nível ou ND dela.

Nível ou ND 4 ou menor: se falhar no tes-
te de resistência, fica inconsciente. Se

passar, fica atordoada por 1d4 rodadas
e enjoada pelo resto da cena.
Nível ou ND entre 5 e 9: se falhar no teste
de resistência, fica atordoada por 1d4
rodadas e enjoada pelo resto da cena.

Se passar, fica atordoada por 1 rodada
e enjoada por 1d4 rodadas.
Nível ou ND 10 ou maior: se falhar no
teste de resistência, fica atordoada por
1 rodada e enjoada por 1d4 rodadas.
Se passar, fica desprevenida e enjoada
por 1 rodada.
Uma criatura só pode ser atordoada
por esta magia uma vez por cena.
Explosão
de chamas
Arcana 1 (Evocação)
Execução: padrão; Alcance: pessoal;

Área: cone de 6m; Duração: instan-
tânea; Resistência: Reflexos reduz à

metade.
Um leque de chamas irrompe de suas
mãos, causando 2d6 pontos de dano de
fogo às criaturas na área.
Truque: muda o alcance para curto,

a área para alvo de 1 objeto e a resis-
tência para Reflexos anula. Você gera

uma pequena explosão que não causa

dano mas pode acender uma vela, to-
cha ou fogueira. Também pode fazer

um objeto inflamável com RD 0 (como
uma corda ou pergaminho) ficar em
chamas. Uma criatura em posse de um
objeto pode evitar esse efeito se passar
no teste de resistência.
+1 PM: aumenta o dano em +1d6.

+1 PM: muda a resistência para Refle-
xos parcial. Se passar, a criatura reduz

o dano à metade; se falhar, fica em cha-
mas (veja Condições, na página 394).

Ferver Sangue
Arcana 3 (Necromancia)
Execução: padrão; Alcance: curto;

Alvo: 1 criatura; Duração: sustenta-
da; Resistência: Fortitude parcial.

O sangue do alvo aquece até entrar em
ebulição. Quando a magia é lançada, e
no início de cada um de seus turnos, o
alvo sofre 4d8 pontos de dano de fogo

e fica enjoado por uma rodada (Fortitu-
de reduz o dano à metade e evita a con-
dição). Se o alvo passar em dois testes

de Fortitude seguidos, dissipa a magia.
Se o alvo for reduzido a 0 PV pelo dano

desta magia, seu corpo explode, matan-
do-o e causando 6d6 pontos de dano de

fogo em todas as criaturas a até 3m (Re-
flexos reduz à metade). Essa magia não

afeta criaturas sem sangue, como cons-
trutos ou mortos-vivos.

+2 PM: aumenta o dano em +1d8.

+9 PM: muda alvo para criaturas esco-
lhidas. Requer 5o círculo.

Físico Divino
Divina 2 (Transmutação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.

Você fortalece o corpo do alvo. Ele re-
cebe +2 em Força, Destreza ou Cons-
tituição, a sua escolha. Esse aumento

não oferece PV ou PM adicionais.
+3 PM: muda o alcance para curto e o
alvo para criaturas escolhidas.
+3 PM: em vez do normal, o alvo
recebe +2 nos três atributos físicos.
Requer 3o círculo.

+7 PM: em vez do normal, o alvo re-
cebe +4 no atributo escolhido. Requer

4o círculo.

+12 PM: em vez do normal, o alvo re-
cebe +4 nos três atributos físicos. Re-
quer 5o círculo.

Flecha Ácida
Arcana 2 (Evocação)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura ou objeto; Duração:
instantânea; Resistência: Reflexos
parcial.
Você dispara um projétil que causa 4d6
pontos de dano de ácido. Se falhar no
teste de resistência, o alvo fica coberto
por um muco corrosivo, sofrendo mais
2d6 de dano de ácido no início de seus

dois próximos turnos. Se lançada con-
tra um objeto que não esteja em pos-
se de uma criatura a magia causa dano

dobrado e ignora a RD do objeto.

+1 PM: além do normal, se o alvo co-
berto pelo muco ácido estiver usando

armadura ou escudo, o item é corroí-
do. Isso reduz o bônus na Defesa do

item em 1 ponto permanentemente. O
item pode ser consertado, restaurando
seu bônus (veja Ofício, na página 121).
+2 PM: aumenta a redução na Defesa
em +1.
+2 PM: aumenta o dano inicial e o
dano por rodada em +1d6.
Forma Etérea
Arcana 4 (Transmutação)
Execução: completa; Alcance: pessoal;
Alvo: você; Duração: sustentada.
Você e todo o equipamento que está

com você são transportados para o pla-
no etéreo, que existe paralelamente ao

plano material (o mundo físico). Na
prática, é como ser transformado em

um fantasma (mas você ainda é con-
siderado uma criatura viva). Uma cria-
tura etérea é invisível (pode alterar en-
193

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
tre visível e invisível como ação livre),
incorpórea e capaz de se mover em
qualquer direção, inclusive para cima

e para baixo. Ela enxerga o plano ma-
terial, mas tudo parece cinza e insubs-
tancial, reduzindo o alcance da visão

e audição para 18m. Magias de abju-
ração e essência afetam criaturas eté-
reas, mas outras magias, não. Da mes-
ma forma, uma criatura etérea não

pode atacar nem lançar magias contra

criaturas no plano material. Duas cria-
turas etéreas podem se afetar normal-
mente. Uma criatura afetada pode se

materializar como uma ação de movi-
mento, encerrando a magia. Uma cria-
tura etérea que se materialize em um

espaço ocupado é jogada para o espaço
não ocupado mais próximo e sofre 1d6
pontos de dano de impacto para cada
1,5m de deslocamento.
+5 PM: muda o alcance para toque e
o alvo para até 5 criaturas voluntárias
que estejam de mãos dadas. Depois

que a magia é lançada, as criaturas po-
dem soltar as mãos. Requer 5o círculo.

Fúria do Panteão
Divina 5 (Evocação)
Execução: completa; Alcance: longo;

Área: cubo de 90m; Duração: susten-
tada; Resistência: veja texto.

Você cria uma nuvem de tempesta-
de violenta. Os ventos tornam ata-
ques à distância impossíveis e fazem

a área contar como condição terrível

para lançar magia. Além disso, inimi-
gos na área têm a visibilidade reduzi-
da (como a magia Névoa). Uma vez por

turno, você pode gastar uma ação de
movimento para gerar um dos efeitos
a seguir.
Nevasca. Inimigos na área sofrem 10d6

pontos de dano de frio (Fortitude re-
duz à metade). A área fica coberta de

neve, virando terreno difícil até o fim
da cena ou até você usar siroco.
Raios. Até 6 inimigos a sua escolha na
área sofrem 10d8 pontos de dano de
eletricidade (Reflexos reduz à metade).
Siroco. Transforma a chuva em uma

tempestade de areia escaldante. Ini-
migos na área sofrem 10d6 pontos

de dano (metade corte, metade fogo)
e ficam sangrando (Fortitude reduz o
dano à metade e evita a condição).
Trovões. Inimigos sofrem 10d6 pontos

de dano de impacto e ficam despreve-
nidos por uma rodada (Fortitude reduz

o dano à metade e evita a condição).

Globo da verdade
de gwen
divina 2 (adivinhação)

Execução: padrão; Alcance: curto; Efei-
to: 1 globo; Duração: cena.

Cria um globo flutuante e intangível,
com 50cm de diâmetro. O globo mostra
uma cena vista até uma semana atrás
por você ou por uma criatura que você
toque ao lançar a magia (mediante uma
pergunta; a criatura pode fazer um teste

de Vontade para anular o efeito), permi-
tindo que outras pessoas a vejam.

+1 PM: o globo mostra uma cena vista
até um mês atrás.
+2 PM: como acima, até um ano atrás.
+2 PM: ao lançar a magia, você pode

tocar um cadáver. O globo mostra a úl-
tima cena vista por essa criatura.

+4 PM: muda o alcance para longo e o
efeito para 10 globos. Todos mostram
a mesma cena.
Globo de
Invulnerabilidade
Arcana 3 (Abjuração)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.
Você é envolto por uma esfera mágica
brilhante com 3m de raio, que detém

qualquer magia de 2o círculo ou me-
nor. Nenhuma magia pode ser lançada

contra um alvo dentro do globo e ma-
gias de área não o penetram. No en-
tanto, magias ainda podem ser lança-
das de dentro para fora.

Uma magia que dissipe outras magias

só dissipa o globo se for usada direta-
mente sobre você, não o afetando se

usada em área. Efeitos mágicos não

são dissipados quando entram na es-
fera, apenas suprimidos (voltam a fun-
cionar fora do globo, caso sua duração

não tenha acabado). O globo é imóvel

e não tem efeito sobre criaturas ou ob-
jetos. Após lançá-lo, você pode entrar

ou sair livremente.

+4 PM: muda o efeito para afetar ma-
gias de até 3o círculo. Requer 4o círculo.

+9 PM: muda o efeito para afetar ma-
gias de até 4o círculo. Requer 5o círculo.

Guardião Divino
Divina 4 (Convocação)

Execução: padrão; Alcance: curto; Efei-
to: elemental de luz invocado; Dura-
ção: cena ou até ser descarregado.

A magia invoca um elemental Pequeno,

com a forma de um orbe feito de luz di-
vina. A criatura é incorpórea, imune a

dano e ilumina como uma tocha. O ele-
mental tem 100 pontos de luz.

Uma vez por rodada, durante o seu

turno, o elemental pode se movimen-
tar (deslocamento de voo 18m) e gas-
tar quantos pontos de luz quiser para

curar dano ou condições de criaturas
em alcance curto, à taxa de 1 PV por
1 ponto de luz ou uma condição por 3

pontos de luz (entre abalado, apavora-
do, alquebrado, atordoado, cego, con-
fuso, debilitado, enjoado, esmoreci-
do, exausto, fascinado, fatigado, fraco,

frustrado, ofuscado, pasmo, sangran-
do, surdo ou vulnerável). A magia é

encerrada quando o elemental fica sem
pontos de luz.
Heroísmo
Divina 3 (Encantamento)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.
Esta magia imbui uma criatura com
coragem e valentia. O alvo fica imune a
medo e recebe 40 PV temporários e +4
em testes de ataque e rolagens de dano
contra o inimigo de maior ND na cena.
+2 PM: muda o bônus para +6.
Hipnotismo
arcana 1 (Encantamento)
Execução: padrão; Alcance: curto;

Alvos: 1 animal ou humanoide; Du-
ração: 1d4 rodadas; Resistência:

Vontade anula.
Suas palavras e movimentos ritmados
deixam o alvo fascinado. Esta magia só
afeta criaturas que possam perceber
você. Se usar esta magia em combate,

o alvo recebe +5 em seu teste de resis-
tência. Se a criatura passar, fica imune

a este efeito por um dia.

Truque: muda a duração para 1 ro-
dada. Em vez de fascinado, o alvo fica

pasmo (apenas uma vez por cena).
+1 PM: como o normal, mas alvos que
passem na resistência não sabem que
foram vítimas de uma magia.
+2 PM: muda o alvo para animais ou
humanoides escolhidos.

+2 PM: muda a duração para susten-
tada.

+2 PM: também afeta espíritos e
monstros na área. Requer 2o círculo.

+5 PM: também afeta construtos, es-
píritos, monstros e mortos-vivos na

área. Requer 3o círculo.

194
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Ilusão Lacerante
Arcana 3 (Ilusão)
Execução: padrão; Alcance: médio;

Área: cubo de 9m; Duração: sustenta-
da; Resistência: Vontade anula.

Você cria uma ilusão de algum peri-
go mortal. Quando a magia é lança-
da, criaturas na área devem fazer um

teste de Vontade; uma falha signifi-
ca que a criatura acredita que a ilusão

é real e sofre 3d6 pontos de dano psí-
quico não letal. Sempre que uma cria-
tura iniciar seu turno dentro da área,

deve repetir o teste de Vontade. Se fa-
lhar, sofre o dano novamente. Somen-
te criaturas que falham veem a ilusão,

e racionalizam o efeito sempre que fa-
lham no teste (por exemplo, acredita

que o mesmo teto pode cair sobre ela
várias vezes).
+3 PM: aumenta o dano em +2d6.
+4 PM: muda a área para um cubo de
90m. Requer 4o círculo.
Imagem Espelhada
Arcana 1 (Ilusão)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Três cópias ilusórias suas aparecem.

As duplicatas ficam ao seu redor e imi-
tam suas ações, tornando difícil para

um inimigo saber quem atacar. Você
recebe +6 na Defesa. Cada vez que um

ataque contra você erra, uma das ima-
gens desaparece e o bônus na Defe-
sa diminui em 2. Um oponente deve

ver as cópias para ser confundido. Se

você estiver invisível, ou o atacante fe-
char os olhos, você não recebe o bônus

(mas o atacante ainda sofre penalida-
des normais por não enxergar).

+2 PM: aumenta o número de cópias
em +1 (e o bônus na Defesa em +2).
+2 PM: além do normal, toda vez que

uma cópia é destruída, emite um cla-
rão de luz. A criatura que destruiu a

cópia fica ofuscada por uma rodada.
Requer 2o círculo.
Imobilizar
Universal 3 (Encantamento)
Execução: padrão; Alcance: curto;

Alvo: 1 humanoide ou animal; Dura-
ção: cena; Resistência: Vontade parcial.

O alvo fica paralisado; se passar na re-
sistência, em vez disso fica lento. A

cada rodada, pode gastar uma ação
completa para fazer um novo teste de
Vontade. Se passar, se liberta do efeito.
+1 PM: muda o alvo para 1 espírito.

+2 PM: aumenta o número de alvos
em +1.
+3 PM: muda o alvo para 1 criatura.
Requer 4o círculo.
Infligir Ferimentos
Divina 1 (Necromancia)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: instantânea;
Resistência: Fortitude reduz à metade.
Você canaliza energia negativa contra
um alvo, causando 2d8+2 pontos de
dano de trevas (ou curando 2d8+2 PV,

se for um morto-vivo). Infligir Ferimen-
tos anula Curar Ferimentos.

+1 PM: além do normal, se falhar na
resistência, o alvo fica fraco pela cena.
+2 PM: aumenta o dano em 1d8+1.

+2 PM: muda a resistência para ne-
nhum. Como parte da execução da ma-
gia, você pode fazer um ataque corpo a

corpo contra o alvo. Se acertar, causa o
dano do ataque e o efeito da magia.
+5 PM: muda o alcance para curto e o
alvo para criaturas escolhidas.
Intervenção Divina
Divina 5 (Convocação)
Execução: completa; Alcance: veja
texto; Alvo: veja texto; Duração: veja
texto; Resistência: veja texto.

Você pede a sua divindade para inter-
ceder diretamente. Você pode:

• Curar todos os PV e condições de
até 10 criaturas em alcance longo (este
efeito cura mortos-vivos, em vez de
causar dano).

• Dissipar os efeitos de qualquer ma-
gia de 4o círculo ou menor.

Você pode implorar por algo ainda

mais poderoso. Nesse caso, a magia re-
quer o sacrifício de 2 PM e pode fazer

coisas como:
• Criar um item mundano de até T$
30.000.

• Duplicar os efeitos de qualquer ma-
gia de até 4o círculo. Caso a magia pre-
cise de um componente material para

ser lançada, ainda é necessário provi-
denciar o componente.

• Proteger uma cidade de um desas-
tre, como uma erupção vulcânica, en-
chente ou terremoto.

• Ressuscitar uma criatura em alcance
longo que tenha morrido há até uma
rodada. A criatura acorda com 1 PV.
• Qualquer outra coisa que o mestre

autorize, conforme os desejos e objeti-
vos da divindade do conjurador.

Invisibilidade
Arcana 2 (Ilusão)
Execução: livre; Alcance: pessoal;
Alvo: você; Duração: 1 rodada.
O alvo fica invisível (incluindo seu

equipamento). Um personagem invisí-
vel recebe camuflagem total, +10 em

testes de Furtividade contra ouvir e
criaturas que não possam vê-lo ficam
desprevenidas contra seus ataques.
A magia termina se o alvo faz uma ação

hostil contra uma criatura. Ações con-
tra objetos livres não dissipam a Invi-
sibilidade (você pode tocar ou apanhar

objetos que não estejam sendo segura-
dos por outras criaturas). Causar dano

indiretamente — por exemplo, acen-
dendo o pavio de um barril de pólvo-
ra que vai detonar mais tarde — não é

considerado um ataque.
Objetos soltos pelo alvo voltam a ser

visíveis e objetos apanhados por ele fi-
cam invisíveis. Qualquer parte de um

item carregado que se estenda além de
seu alcance corpo a corpo natural se

torna visível. Uma luz nunca fica invi-
sível (mesmo que sua fonte seja).

+1 PM: muda a execução para ação pa-
drão, o alcance para toque e o alvo para

1 criatura ou 1 objeto Grande ou menor.
+3 PM: muda a duração para cena.
Requer 3o círculo.

+3 PM: muda a duração para sustenta-
da. Em vez do normal, o alvo gera uma

esfera de invisibilidade. Não pode ser

usado em conjunto com outros apri-
moramentos. O alvo e todas as criatu-
ras a até 3m dele se tornam invisíveis,

como no efeito normal da magia (ain-
da ficam visíveis caso façam uma ação

hostial). A esfera se move juntamen-
te com o alvo; qualquer coisa que saia

da esfera fica visível. Requer 3o círculo.
+7 PM: muda a execução para ação
padrão, o alcance para toque e o alvo

para 1 criatura. A magia não é dissi-
pada caso o alvo faça uma ação hostil.

Requer 4o círculo.
Invulnerabilidade
Universal 5 (Abjuração)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Esta magia cria uma barreira mágica
impenetrável que protege você contra
efeitos nocivos mentais ou físicos, a
sua escolha.

Proteção mental: você fica imune às con-
dições abalado, alquebrado, apavora-
do, atordoado, confuso, esmorecido,

195

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
fascinado, frustrado e pasmo, além de
efeitos de encantamento e ilusão.

Proteção física: você fica imune às con-
dições atordoado, cego, debilitado, en-
joado, envenenado, exausto, fatiga-
do, fraco, lento, ofuscado e paralisado,

além de acertos críticos, ataques furti-
vos e doenças.

+5 PM: muda o alcance para curto e o
alvo para 1 criatura.
Lágrimas de Wynna
Divina 5 (abjuração)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: instantânea;
Resistência: Vontade parcial.
Se falhar no teste de resistência, o alvo

perde a habilidade de lançar magias ar-
canas até o fim da cena. Se passar, per-
de a habilidade por uma rodada.

+2 PM: muda a área para esfera com

6m de raio e o alvo para criaturas es-
colhidas.

+5 PM: muda a execução para um

dia e adiciona custo adicional (sacri-
fício de 1 PM). O alvo da magia pre-
cisa ser mantido em alcance curto do

conjurador durante toda a execução.
Ao término, faz um teste de Vontade.

Se falhar, perde a habilidade de lan-
çar magias arcanas permanentemen-
te. Se passar, resiste, mas ainda pode

ser alvo da magia no dia seguinte. Ne-
nhum poder mortal é capaz de rever-
ter essa perda. Os clérigos de Wynna

dizem que a deusa chora cada vez que
este ritual é realizado.
Lança Ígnea
de Aleph
Arcana 3 (Evocação)
Execução: padrão; Alcance: médio;

Alvo: 1 criatura; Duração: instantâ-
nea; Resistência: Reflexos parcial.

Esta magia foi desenvolvida pelo mago
imortal Aleph Olhos Vermelhos, um
entusiasta dos estudos vulcânicos. Ela
dispara um projétil de magma contra o
alvo, que sofre 4d6 pontos de dano de

fogo e 4d6 pontos de dano de perfura-
ção e fica em chamas. As chamas cau-
sam 2d6 pontos de dano por rodada,

em vez do dano normal. Se passar no

teste de resistência, o alvo sofre meta-
de do dano e não fica em chamas.

Respingos de rocha incandescente se
espalham com a explosão, atingindo
todas as criaturas adjacentes ao alvo,
que devem fazer um teste de Reflexos.
Se falharem, ficam em chamas, como
descrito acima.

+3 PM: aumenta o dano inicial em
+2d6 e o dano do efeito em chamas
em +1d6.
+4 PM: muda a duração para cena ou
até ser descarregada. Em vez do efeito
normal, a magia cria quatro dardos de
lava que flutuam ao lado do conjurador.
Uma vez por rodada, como uma ação

livre, você pode disparar um dos dar-
dos em uma criatura, causando o efei-
to normal da magia. Requer 4o círculo.

Legião
Arcana 5 (Encantamento)
Execução: padrão; Alcance: médio;

Alvo: até 10 criaturas na área; Dura-
ção: sustentada. Resistência: Vonta-
de parcial.

Você domina a mente dos alvos. Os al-
vos obedecem cegamente a seus co-
mandos, exceto ordens claramente sui-
cidas. Um alvo tem direito a um teste

no final de cada um de seus turnos para
se livrar do efeito. Alvos que passarem
no teste ficam abalados por 1 rodada
enquanto recuperam a consciência.
+1 PM: aumenta o número de alvos
em +1.
Lendas e Histórias
Universal 3 (Adivinhação)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura, objeto ou local; Du-
ração: sustentada.

Você descobre informações sobre uma

criatura, objeto ou local que esteja to-
cando. O que exatamente você desco-
bre depende do mestre: talvez você não

descubra tudo que há para saber, mas

ganhe pistas para continuar a investi-
gação. A cada rodada que mantiver a

magia, você descobre:
• Todas as informações sobre o alvo,
como se tivesse passado em todos os
testes de Conhecimento para tal.
• Todas as habilidades do alvo. Se for

uma criatura, você sabe suas estatís-
ticas de jogo como raça, classe, nível,

atributos, magias, resistências e fra-
quezas. Se for um item mágico, apren-
de seu efeito e funcionamento.

• Se o alvo está sob influência de algu-
ma magia e todas as informações sobre

as magias ativas, se houver alguma.
+4 PM: muda a execução para um dia,

o alcance para ilimitado e adiciona com-
ponente material (cuba de ouro cheia

d’água e ingredientes mágicos, no va-
lor de T$ 1.000). Você ainda precisa ter

alguma informação sobre o alvo, como
um nome, descrição ou localização.

Leque Cromático
Arcana 1 (Ilusão)
Execução: padrão; Alcance: pessoal;

Área: cone de 4,5m; Duração: instan-
tânea. Resistência: Vontade parcial.

Um cone de luzes brilhantes surge
das suas mãos, deixando os animais
e humanoides na área atordoados por
1 rodada (apenas uma vez por cena,
Vontade anula) e ofuscados pela cena.
+2 PM: além do normal, as criaturas
afetadas ficam vulneráveis pela cena.
+2 PM: também afeta espíritos e
monstros na área. Requer 2o círculo.

+5 PM: também afeta construtos, es-
píritos, monstros e mortos-vivos na

área. Requer 3o círculo.
Libertação
Universal 4 (abjuração)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: cena.

O alvo fica imune a efeitos de movi-
mento e ignora qualquer efeito que

impeça ou restrinja seu deslocamen-
to. Por fim, pode usar habilidades

que exigem liberdade de movimen-
tos mesmo se estiver usando armadu-
ra ou escudo.

+2 PM: além do normal, o alvo pode

caminhar sobre a água ou outros lí-
quidos com seu deslocamento nor-
mal. Entretanto, isso não protege con-
tra qualquer efeito que o líquido possa

causar (o alvo pode andar sobre lava,
mas ainda vai sofrer dano).
+2 PM: além do normal, o alvo pode
escolher 20 em todos os testes de
Atletismo.
+2 PM: além do normal, o alvo pode

escolher 20 em todos os testes de Acro-
bacia e pode fazer todas as manobras

desta perícia mesmo sem treinamento.
+5 PM: muda o alcance para curto e o
alvo para até 5 criaturas.
+5 PM: pode dissipar Aprisionamento.
Ligação Sombria
Divina 4 (Necromancia)
Execução: padrão; Alcance: longo;

Alvo: 1 criatura; Duração: 1 dia; Re-
sistência: Fortitude anula.

Cria uma conexão entre seu corpo e o
da criatura alvo, deixando uma marca
idêntica na pele de ambos. Enquanto
a magia durar, sempre que você sofrer

qualquer dano ou condição, o alvo des-
ta magia deve fazer um teste de For-
titude; se falhar, sofre o mesmo dano

196
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

que você ou adquire a mesma condi-
ção. A magia termina se o alvo chegar

a 0 pontos de vida.
+5 PM: a magia não termina se o alvo
chegar a 0 PV (o que significa que dano
causado por essa magia pode matá-lo).
Ligação Telepática
Arcana 2 (Adivinhação)
Execução: padrão; Alcance: toque;

Alvo: 2 criaturas voluntárias; Dura-
ção: 1 dia.

Você cria um elo mental entre duas
criaturas com Inteligência 3 ou maior

(você pode ser uma delas). As criatu-
ras podem se comunicar independen-
te de idioma ou distância, mas não em

mundos diferentes.
+2 PM: aumenta o número de alvos
em +1.
+3 PM: muda o alvo para 1 criatura.
Em vez do normal, você cria um elo
mental que permite que você veja e

ouça pelos sentidos da criatura, se gas-
tar uma ação de movimento. Uma cria-
tura involuntária pode fazer um teste

de Vontade para suprimir a magia por
uma hora. Requer 3o círculo.
Localização
Arcana 2 (Adivinhação)
Execução: padrão; Alcance: pessoal;

Área: esfera com 90m de raio; Dura-
ção: cena.

Esta magia pode encontrar uma cria-
tura ou objeto a sua escolha. Você

pode pensar em termos gerais (“um
elfo”, “algo de metal”) ou específicos
(“Gwen, a elfa”, “uma espada longa”).

A magia indica a direção e distân-
cia da criatura ou objeto mais próxi-
mo desse tipo, caso esteja ao alcance.

Você pode movimentar-se para conti-
nuar procurando. Procurar algo mui-
to específico (“a espada longa encan-
tada do Barão Rulyn”) exige que você

tenha em mente uma imagem preci-
sa do objeto; caso a imagem não seja

muito próxima da verdade, a magia fa-
lha, mas você gasta os PM mesmo as-
sim. Esta magia pode ser bloqueada

por uma fina camada de chumbo.
Truque: muda a área para alvo você.
Em vez do normal, você sabe onde fica

o norte e recebe +5 em testes de So-
brevivência para se orientar.

+5 PM: aumenta a área em um fator
de 10 (90m para 900m, 900m para
9km e assim por diante).

Luz
Universal 1 (Evocação)
Execução: padrão; Alcance: curto;

Alvo: 1 objeto; Duração: cena; Resis-
tência: Vontade anula (veja texto).

O alvo emite luz (mas não produz ca-
lor) em uma área com 6m de raio. O

objeto pode ser guardado (em um bol-
so, por exemplo) para interromper a

luz, que voltará a funcionar caso o ob-
jeto seja revelado. Se lançar a magia

num objeto de uma criatura involuntá-
ria, ela tem direito a um teste de Von-
tade para anulá-la. Luz anula Escuridão.

+1 PM: aumenta a área iluminada em
+3m de raio.
+2 PM: muda a duração para um dia.

+2 PM: muda a duração para perma-
nente e adiciona componente mate-
rial (pó de rubi no valor de T$ 50). Não

pode ser usado em conjunto com outros
aprimoramentos. Requer 2o círculo.
+0 PM (Apenas Arcanos): muda

o alvo para 1 criatura. Você lança a ma-
gia nos olhos do alvo, que fica ofusca-
do pela cena. Não afeta criaturas cegas.

+2 PM (Apenas Arcanos): muda o
alcance para longo e o efeito para cria
4 pequenos globos flutuantes de pura
luz. Você pode posicionar os globos
onde quiser dentro do alcance. Você
pode enviar um à frente, outra para

trás, outra para cima e manter um per-
to de você, por exemplo. Uma vez por

rodada, você pode mover os globos

com uma ação livre. Cada um ilumi-
na como uma tocha, mas não produz

calor. Se um globo ocupar o espaço de

uma criatura, ela fica ofuscada e sua si-
lhueta pode ser vista claramente (ela

não recebe camuflagem por escuridão
ou invisibilidade). Requer 2o círculo.
+2 PM (Apenas Divinos): a luz é

cálida como a do sol. Criaturas que so-
frem penalidades e dano pela luz so-
lar sofrem seus efeitos como se esti-
vessem expostos à luz solar real. Seus

aliados na área estabilizam automa-
ticamente e ficam imunes à condição

sangrando, e seus inimigos ficam ofus-
cados. Requer 2o círculo.

+5 PM (Apenas Divinos): muda o

alcance para toque e o alvo para 1 cria-
tura. Em vez do normal, o alvo é envol-
to por um halo de luz, recebendo +10

em testes de Diplomacia e redução de
trevas 10. Requer 2o círculo.
Manto de Sombras
Universal 3 (Ilusão)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.

Você fica coberto por um manto de
energia sombria. Nesta forma, torna-se
incorpóreo (inclui seu equipamento):

só pode ser afetado por armas e habili-
dades mágicas, ou por outras criaturas

incorpóreas, e pode atravessar objetos

sólidos, mas não manipulá-los. Tam-
bém não pode atacar criaturas normais

(mas ainda pode lançar magias nelas).

Além disso, se torna vulnerável à luz di-
reta: se exposto a uma fonte de luz, so-
fre 1 ponto de dano por rodada.

Você pode gastar uma ação de movi-
mento e 1 PM para “entrar” em uma

sombra do seu tamanho ou maior e
se teletransportar para outra sombra,
também do seu tamanho ou maior, em
alcance médio.
+4 PM: muda o alcance para toque e o
alvo para 1 criatura. Requer 4o círculo.
Manto do Cruzado
Divina 4 (Evocação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.

Você invoca o poder de sua divinda-
de na forma de um manto de energia

que reveste seu corpo. Esta magia tem
duas versões. Você escolhe qual versão

pode lançar quando aprende esta ma-
gia. Ela não pode ser mudada.

Manto de Luz: um manto dourado e lu-
minoso. No início de cada um de seus

turnos, você e todos os seus aliados
em alcance curto recuperam 2d8 PV.

Você recebe imunidade a dano de tre-
vas e seus ataques corpo a corpo cau-
sam +2d8 pontos de dano de luz.

Manto de Trevas: um manto negro como
a noite. No início de cada um de seus

turnos, todos os inimigos em alcan-
ce curto sofrem 4d8 pontos de dano

de trevas. Você cura metade de todo o
dano causado pela magia.
Mão Poderosa
de Talude
Arcana 4 (Convocação)
Execução: padrão; Alcance: médio;

Efeito: mão gigante de energia; Dura-
ção: sustentada.

Esta magia cria uma mão flutuante
Grande que sempre se posiciona entre
você e um oponente a sua escolha. A

mão fornece cobertura leve (+5 na De-
fesa) contra esse oponente. Nada é ca-
paz de enganar a mão — coisas como

escuridão, invisibilidade, metamorfose
e disfarces mundanos não a impedem
de protegê-lo. A mão tem Defesa 20 e
PV e resistências iguais aos seus. Com

197

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
uma ação de movimento, você pode
comandar a mão para que o proteja
de outro oponente ou para que realize
uma das ações a seguir.

Agarrar: a mão usa uma manobra agar-
rar contra o oponente, usando o seu

Misticismo com um bônus adicional
de +10. A mão mantém o oponente
agarrado, mas não causa dano.
Esmagar: a mão esmaga um oponente
agarrado, causando 2d6+10 pontos de
dano de impacto.
Empurrar: a mão afasta o oponente

(manobra empurrar usando o seu Mis-
ticismo com um bônus adicional de

+10). A mão acompanha o oponente

para empurrá-lo o máximo que conse-
guir, dentro do alcance da magia.

+2 PM: aumenta o dano em +1d6+5.
+5 PM: muda o bônus adicional em
Misticismo para +20. Requer 5o círculo.
Mapear
Arcana 2 (Adivinhação)
Execução: padrão; Alcance: toque;
Alvo: superfície ou objeto plano, como
uma mesa ou papel; Duração: cena.

Uma fagulha percorre a superfície afe-
tada, queimando-a enquanto esboça

um mapa da região onde o conjurador
está. Se você conhece o lugar, o mapa

será completo. Caso contrário, apre-
sentará apenas um esboço geral, além

de um ponto de referência (para pos-
sibilitar localização) e um lugar de in-
teresse, ambos definidos pelo mestre.

A região representada no mapa tem ta-
manho máximo de um quadrado de

10km de lado. Caso você esteja dentro
de uma construção, o mapa mostrará o
andar no qual você se encontra.
+3 PM: muda o alvo para 1 criatura e

a duração para 1 hora. Em vez do nor-
mal, a criatura tocada descobre o cami-
nho mais direto para entrar ou sair de

um lugar. Assim, a magia pode ser usa-
da para descobrir a rota até o relicário

de uma catedral ou a saída mais próxi-
ma de uma masmorra (mas não para

encontrar a localização de uma criatura
ou objeto; a magia funciona apenas em

relação a lugares). Caso a criatura de-
more mais de uma hora para percorrer

o caminho, o conhecimento se perde.
Marca da Obediência
Universal 2 (Encantamento)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: cena; Re-
sistência: Vontade anula.

Você toca uma criatura, gravando uma
marca mística no corpo dela enquanto
profere uma ordem, como “não ataque
a mim ou meus aliados”, “siga-me” ou
“não saia desta sala”. A criatura deve
seguir essa ordem, gastando todas as
ações de seu turno para isso. A ordem
não pode ser genérica demais (como
“ajude-me”, por exemplo), nem forçar
o alvo a atos suicidas. A cada rodada,

o alvo pode fazer um teste de Vonta-
de. Se passar, a magia é dissipada.

+3 PM: muda a duração para um dia.
Se não estiver em combate, a criatura
só pode fazer o teste de Vontade a cada
hora. Requer 3o círculo.

+3 PM: sempre que o alvo fizer o tes-
te de Vontade e falhar, a marca causa

3d6 pontos de dano psíquico. Requer
3o círculo.
Marionete
Arcana 4 (Encantamento)
Execução: padrão; Alcance: médio;

Alvo: 1 criatura; Duração: sustenta-
da; Resistência: Fortitude anula.

Esta magia manipula o sistema ner-
voso do alvo. Ao sofrer a magia, e no

início de cada um de seus turnos, a
vítima faz um teste de Fortitude. Se
passar, a magia é anulada. Se falhar,
todas as suas ações físicas naquele

turno estarão sob controle do conju-
rador. A vítima ainda tem consciência

de tudo que acontece à sua volta, po-
dendo ver, ouvir e até falar com certo

esforço (mas não para lançar magias).
Contudo, seu corpo realiza apenas os

movimentos que o conjurador dese-
ja. A vítima pode ser manipulada para

se movimentar, lutar, usar habilidades
de combate... Enfim, qualquer coisa
de que seja fisicamente capaz.
Você precisa de linha de efeito para
controlar a vítima. Se perder o contato,

não poderá controlá-la — mas ela esta-
rá paralisada até que o conjurador re-
cupere o controle ou a magia termine.

Mata-Dragão
Arcana 5 (Evocação)
Execução: duas rodadas; Alcance:
pessoal; Área: cone de 30m; Duração:

instantânea; Resistência: Reflexos re-
duz à metade.

Esta é uma das mais poderosas ma-
gias de destruição existentes. Após

entoar longos cânticos, o conjurador

dispara uma carga de energia que var-
re uma enorme área à sua frente, cau-
sando 20d12 pontos de dano de essên-
cia em todas as criaturas, construções

e objetos livres atingidos. Sempre que
rola um resultado 12 em um dado de
dano, a magia causa +1d12 pontos de
dano. Apesar de seu poder destrutivo,
esta magia é lenta, tornando seu uso
difícil em combate.
+1 PM: aumenta o dano em 1d12.
Mente Divina
Divina 2 (Adivinhação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.

Você fortalece a mente do alvo. Ele re-
cebe +2 em Inteligência, Sabedoria

ou Carisma, a sua escolha. Esse au-
mento não oferece PV, PM ou perícias

adicionais.
+3 PM: muda o alcance para curto e o
alvo para criaturas escolhidas.

+3 PM: em vez do normal, o alvo re-
cebe +2 nos três atributos mentais.

Requer 3o círculo.

+7 PM: em vez do normal, o alvo re-
cebe +4 no atributo escolhido. Requer

4o círculo.

+12 PM: em vez do normal, o alvo re-
cebe +4 nos três atributos mentais.

Requer 5o círculo.
Metamorfose
Arcana 2 (Transmutação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.

Você muda sua aparência e forma — in-
cluindo seu equipamento — para qual-
quer outra criatura, existente ou ima-
ginada. Independentemente da forma

escolhida, você recebe +20 em testes

de Enganação para disfarce. Caracte-
rísticas não mencionadas não mudam.

Se mudar para uma forma humanoi-
de, pode mudar o tipo de dano (entre

corte, impacto e perfuração) de suas

armas (se usa uma maça e transfor-
má-la em espada longa, ela pode cau-
sar dano de corte, por exemplo). Se

quiser, pode assumir uma forma hu-
manoide com uma categoria de ta-
manho acima ou abaixo da sua; nes-
se caso aplique os modificadores em

Furtividade e testes de manobra.
Se mudar para outras formas, você
pode escolher uma Forma Selvagem do
druida (veja no Capítulo 1). Nesse

caso você não pode atacar com suas ar-
mas, falar ou lançar magias até voltar

ao normal, mas recebe uma ou mais ar-
mas naturais e os bônus da forma sel-
vagem escolhida.

198
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

+1 PM: a forma escolhida recebe uma
habilidade de sentidos entre faro, visão
na penumbra e visão no escuro.

+3 PM: a forma escolhida recebe per-
cepção às cegas. Requer 3o círculo.

+3 PM: muda o alcance para toque, o

alvo para 1 criatura e adiciona resistên-
cia (Vontade anula).

+3 PM: muda o alcance para médio,
o alvo para 1 criatura e a resistência

para Vontade anula. Em vez do nor-
mal, transforma o alvo em uma cria-
tura ou objeto inofensivo (ovelha,

sapo, galinha, pudim de ameixa etc.).

A criatura não pode atacar, falar e lan-
çar magias; seu deslocamento vira 3m

e sua Defesa vira 10. Suas outras ca-
racterísticas não mudam. No início de

seus turnos, o alvo pode fazer um tes-
te de Vontade; se passar, retorna à sua

forma normal e a magia termina. Re-
quer 3o círculo.

+5 PM: se mudar para formas não

humanoides, pode escolher uma For-
ma Selvagem Aprimorada. Requer 3o

círculo.

+9 PM: se mudar para formas não hu-
manoides, pode escolher uma Forma

Selvagem Superior. Requer 4o círculo.
+12 PM: além do normal, no início
de seus turnos o alvo pode mudar de

forma novamente, como uma ação li-
vre, fazendo novas escolhas. Requer

5o círculo.
Miasma Mefítico
Divina 2 (Necromancia)
Execução: padrão; Alcance: médio;

Área: nuvem com 6m de raio; Dura-
ção: instantânea; Resistência: Forti-
tude (veja texto).

A área é coberta por emanações letais.
Criaturas na área sofrem 5d6 pontos
de dano de ácido e ficam enjoadas por
1 rodada. Se passarem na resistência,
sofrem metade do dano e não ficam
enjoadas.
Truque: muda o alcance para toque,
a área para alvo (1 criatura com 0 PV

ou menos), a duração para instantâ-
nea, a resistência para Fortitude anu-
la e adiciona componente material (pó

de ônix no valor de T$ 10). Em vez do
normal, você canaliza o Miasma contra
uma vítima. Se falhar na resistência,
ela morre e você recebe +2 na CD de
suas magias por um dia. Se passar, fica
imune a este truque por um dia.
+2 PM: aumenta o dano em +1d6.
+3 PM: muda o tipo do dano para
trevas.

Miragem
Arcana 3 (Ilusão)
Execução: padrão; Alcance: longo;

Área: cubo de até 90m de lado; Du-
ração: 1 dia; Resistência: Vontade

desacredita.

Você faz um terreno parecer outro, in-
cluindo sons e cheiros. Uma planície

pode parecer um pântano, uma floresta
pode parecer uma montanha etc. Esta

magia pode ser usada para criar arma-
dilhas: areia movediça pode parecer

terra firme ou um precipício pode pare-
cer um lago. Você pode alterar, incluir

e esconder estruturas dentro da área,
mas não criaturas (embora elas possam
se esconder nas estruturas ilusórias).
+4 PM: além do normal, pode alterar
a aparência de criaturas escolhidas na
área, como se usando Disfarce Ilusório.

+9 PM: muda a duração para perma-
nente e adiciona componente material

(pó de diamante no valor de T$ 1.000).
Requer 4o círculo.
Missão Divina
Divina 3 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: 1 semana
ou até ser descarregada; Resistência:
Vontade anula (veja texto)
Esta magia obriga o alvo a cumprir uma

tarefa a sua escolha. Ela dura uma se-
mana ou até o alvo cumprir a tarefa, o

que vier primeiro. O alvo pode recusar
a missão — mas, no fim de cada dia em

que não se esforçar para cumprir a ta-
refa, deve fazer um teste de Vontade; se

falhar, sofre uma penalidade cumulati-
va de –2 em todos os testes e rolagens.

A Missão Divina não pode forçar um ato
suicida, nem uma missão impossível
(como matar um ser que não existe).
+2 PM: muda o alcance para toque, a
duração para permanente e adiciona

penalidade de –1 PM. Em vez do nor-
mal, você inscreve uma marca (como

uma tatuagem) na pele do alvo e esco-
lhe um tipo de ação que ativará a mar-
ca. Normalmente, será cometer um

crime (roubar, matar...) ou outra coisa
contrária às Obrigações & Restrições
de sua divindade. Sempre que a marca

é ativada, o alvo recebe uma penalida-
de cumulativa de –2 em todos os tes-
tes. Muitas vezes, portar essa marca é

um estigma por si só, já que esta magia
normalmente é lançada em criminosos
ou traidores. Uma magia que dissipe

outras suprime a marca e suas pena-
lidades por um dia; elas só podem ser

totalmente removidas pelo conjurador
original ou pela magia Purificação.
+4 PM: aumenta a duração para 1 ano
ou até ser descarregada.
Montaria Arcana
Arcana 2 (Convocação)

Execução: padrão; Alcance: curto; Efei-
to: criatura conjurada; Duração: 1 dia.

Esta magia convoca um parceiro cava-
lo (ou pônei) de guerra veterano. Sua

aparência é de um animal negro com
crina e cauda cinzentas e cascos feitos
de fumaça, mas você pode mudá-la se
quiser. Além dos benefícios normais, a

Montaria Arcana pode atravessar terre-
no difícil sem redução em seu deslo-
camento. Você pode usar Misticismo

no lugar de Cavalgar para efeitos des-
ta montaria (incluindo ser considera-
do treinado).

+1 PM: além do normal, criaturas do

tipo animal em alcance curto da mon-
taria devem fazer um teste de Vontade.

Se passarem, ficam abaladas pela cena;
se falharem, ficam apavoradas por 1d4
rodadas, depois abaladas pela cena.

+3 PM: muda a duração para perma-
nente e adiciona penalidade de –3 PM.

+3 PM: aumenta o tamanho da mon-
taria em uma categoria. Isso também

aumenta o número de criaturas que ela

pode carregar — duas para uma cria-
tura Enorme, seis para Colossal. Uma

única criatura controla a montaria; as
outras apenas são deslocadas.
+3 PM: muda o nível do parceiro para
mestre. Requer 3o círculo.
Muralha de Ossos
Universal 4 (Necromancia)
Execução: padrão; Alcance: médio;
Efeito: muro de ossos; Duração: cena.

Uma parede de ossos se eleva da ter-
ra. A parede tem 15m de comprimen-
to, 9m de altura e 1,5m de espessu-
ra. Ela pode ter qualquer forma — não

precisa ser uma linha reta —, mas sua
base precisa estar sempre tocando o

solo. Quando a parede surge, criatu-
ras na área ocupada ou adjacentes so-
frem 4d8 pontos de dano de corte e

precisam fazer um teste de Reflexos

para não ficarem presas no emaranha-
do de ossos. Uma criatura presa des-
sa maneira fica agarrada, e pode gastar

uma ação padrão para fazer um teste
de Atletismo para se soltar. Se passar
no teste, sai da muralha para um dos
lados adjacentes. Se falhar, sofre 4d8
pontos de dano de corte.

199

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro

É possível destruir o muro para atra-
vessá-lo ou libertar uma criatura agar-
rada. Cada trecho de 3m do muro tem

Defesa 8, 40 PV e redução de corte,

frio e perfuração 10. Também é possí-
vel escalar a parede. Isso exige um tes-
te de Atletismo e causa 4d8 pontos de

dano de corte para cada 3m escalados.
+3 PM: aumenta o comprimento em
+15m e a altura em +3m.
+5 PM: o muro é feito de uma massa
de esqueletos animados. Sempre que

uma criatura iniciar seu turno adja-
cente ou escalando a muralha, deve fa-
zer um teste de Reflexos. Se falhar fica

agarrada, sofrendo os efeitos normais
de estar agarrada pela magia.
Muralha Elemental
Arcana 3 (Evocação)
Execução: padrão; Alcance: médio;
Efeito: muralha de energia; Duração:
cena. Resistência: veja texto.
Uma muralha de um elemento a sua
escolha se eleva da terra. Ela pode ser
um muro de até 30m de comprimento
e 3m de altura (ou o contrário) ou uma

cúpula de 3m de raio. Os efeitos va-
riam conforme o elemento escolhido.

Fogo. Faz surgir uma violenta cortina de

chamas. Um lado da muralha (a sua es-
colha) emite ondas de calor, que cau-
sam 2d6 pontos de dano de fogo em

criaturas a até 6m quando você lança a

magia e no início de seus turnos. Atra-
vessar a muralha causa 8d6 pontos de

dano de fogo. Caso seja criada em uma
área onde existem criaturas, elas sofrem
dano como se estivessem atravessando
a muralha, mas podem fazer um teste

de Reflexos para reduzir o dano à meta-
de e escapar para um lado (a criatura es-
colhe, mas se escapar para o lado quente

sofrerá mais 2d6 pontos de dano).
Gelo. Evoca uma parede grossa de gelo

denso com 15cm de espessura. Na for-
ma de cúpula, pode prender uma ou

mais criaturas, mas elas têm direito a

um teste de Reflexos para escapar an-
tes que a cúpula se forme. Cada tre-
cho de 3m da muralha tem Defesa 8,

40 PV e RD 5. Um trecho da muralha

que atinja 0 PV será rompido. Qual-
quer efeito de fogo causa dano dobra-
do à muralha. Uma criatura que atra-
vesse um trecho rompido da muralha

sofre 4d6 pontos de dano de frio.
+2 PM: aumenta o dano por atravessar
a muralha em +2d6.
+2 PM: aumenta o comprimento em
+15m e altura em +3m, até 60m de
comprimento e 9m de altura.

+4 PM: muda a duração para susten-
tada e adiciona uma nova escolha, Es-
sência. A muralha é invisível e indes-
trutível — imune a qualquer forma de

dano e não afetada por nenhuma ma-
gia. Ela não pode ser atravessada nem

mesmo por criaturas incorpóreas. No
entanto, magias que teletransportam

criaturas, como Salto Dimensional, po-
dem atravessá-la. Magias e efeitos de

dano, como Bola de Fogo e o sopro de
um dragão, não vencem a muralha,

mas magias lançadas diretamente so-
bre uma criatura ou área, como Sono,

podem ser lançadas contra alvos que

estejam no outro lado como se tives-
sem linha de efeito. Requer 4o círculo.

Névoa
Universal 1 (Convocação)
Execução: padrão; Alcance: curto;
Efeito: nuvem com 6m de raio e 6m
de altura; Duração: cena.

Uma névoa espessa eleva-se de um pon-
to a sua escolha, obscurecendo toda a

visão — criaturas a até 1,5m têm camu-
flagem leve e criaturas a partir de 3m

têm camuflagem total. Um vento for-
te dispersa a névoa em 4 rodadas e um

vendaval a dispersa em 1 rodada. Esta
magia não funciona sob a água.
+1 PM: a magia também funciona sob
a água, criando uma nuvem de tinta.
+2 PM: você pode escolher criaturas

no alcance ao lançar a magia; elas en-
xergam através do efeito. Requer 2o

círculo.

+2 PM: a nuvem tem um cheiro horrí-
vel. No início de seus turnos, qualquer

criatura dentro dela, ou qualquer cria-
tura com faro em alcance curto da nu-
vem, deve fazer um teste de Fortitude.

Se falhar, fica enjoada por uma rodada.

+2 PM: a nuvem tem um tom esver-
deado e se torna cáustica. No início de

seus turnos, criaturas dentro dela so-
frem 2d4 pontos de dano de ácido.

+3 PM: aumenta o dano de ácido em
+2d4.
+5 PM: além do normal, a nuvem fica

espessa, quase sólida. Qualquer criatu-
ra dentro dela tem seu deslocamento

reduzido para 3m (independentemente
de seu deslocamento normal) e sofre –2
em testes de ataque e rolagens de dano.
Oração
Divina 2 (Encantamento)
Execução: padrão; Alcance: curto;
Alvos: todas as criaturas (veja texto);
Duração: sustentada.

Você e os seus aliados no alcance re-
cebem +2 em testes de perícia e rola-
gens de dano, e todos os seus inimigos

no alcance sofrem –2 em testes de pe-
rícia e rolagens de dano. Esse efeito é

cumulativo com outras magias. Compo-
nente material: T$ 25 por PM gasto em

incensos ou outras oferendas.
+2 PM: aumenta os bônus em +1
(bônus máximo limitado pelo círculo
máximo de magia que você pode lançar).
+2 PM: aumenta as penalidades em
–1 (penalidade máxima limitada pelo
círculo máximo de magia que você
pode lançar).
+7 PM: muda o alcance para médio.
Requer 3o círculo.
+12 PM: muda a duração para cena.
Requer 4o círculo.
Orientação
Divina 1 (Adivinhação)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: 1 rodada.
Em seu próximo teste de perícia, o
alvo pode rolar dois dados e ficar com
o melhor resultado.
+2 PM: muda a duração para cena.

Em vez do normal, escolha um atri-
buto. Sempre que o alvo fizer um tes-
te de perícia baseado no atributo es-
colhido, pode rolar dois dados e ficar

com o melhor resultado. Não se apli-
ca a testes de ataque ou resistência.

Requer 2o círculo.
+5 PM: como acima, mas, em vez de
um atributo, escolha entre atributos

físicos (Força, Destreza e Constitui-
ção) ou mentais (Inteligência, Sabe-
doria e Carisma). Requer 3o círculo.

+5 PM: muda o alvo para criaturas
escolhidas. Requer 3o círculo.
Palavra Primordial
Universal 5 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura com menos níveis que
você; Duração: instantânea ou veja
texto; Resistência: Vontade parcial.
Você pronuncia uma palavra do idioma
primordial da Criação, que causa um
dos efeitos abaixo, a sua escolha.
Atordoar: a criatura fica atordoada por
1d4+1 rodadas (apenas uma vez por

cena). Se passar no teste de resistên-
cia, ou se já foi atordoada por esta ma-
gia, fica desprevenida por 1d4 rodadas.

Cegar: a criatura fica cega. Se passar no
teste de resistência, fica ofuscada por
1d4 rodadas.

200
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Matar: a criatura morre. Além do tes-
te de Vontade, a criatura tem direito a

um teste de Fortitude se tiver mais da

metade de seus PV. Se passar em qual-
quer um deles, em vez de morrer perde

10d8 pontos de vida e fica sangrando.
Pele de Pedra
Universal 3 (Transmutação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Sua pele ganha aspecto e dureza de
rocha. Você recebe redução de dano 5.
+1 PM: muda o alcance para toque e o
alvo para 1 criatura.
+4 PM: muda a duração para um dia.

+4 PM: sua pele ganha aspecto e dure-
za de aço. Você recebe redução de dano

10. Requer 4o círculo.
+4 PM: muda o alcance para toque, o
alvo para 1 criatura, a duração para 1d4

rodadas e adiciona Resistência: Forti-
tude anula. Em vez do efeito normal,

a magia transforma o alvo e seu equi-
pamento em uma estátua inerte e sem

consciência. A estátua possui os mes-
mos PV da criatura e redução de dano

8; se for quebrada, a criatura morrerá.
Requer 4o círculo.
+9 PM: como acima, mas com duração
permanente. Requer 5o círculo.
Perdição
Divina 1 (Necromancia)
Execução: padrão; Alcance: curto;
Alvos: criaturas escolhidas; Duração:
cena; Resistência: nenhuma.
Amaldiçoa os alvos, que recebem –1
em testes de ataque e rolagens de
dano. Perdição anula Bênção.
+2 PM: aumenta as penalidades em –1
(bônus máximo limitado pelo círculo
máximo de magia que você pode lançar).
Poeira da Podridão
Divina 3 (Necromancia)
Execução: padrão; Alcance: médio;

Área: nuvem com 6m de raio; Dura-
ção: cena; Resistência: Fortitude (veja

texto).

Você manifesta uma nuvem de poei-
ra carregada de energia negativa, que

apodrece lentamente as criaturas na
área. Ao lançar a magia, e no início de
seus turnos, criaturas na área sofrem

2d8+8 pontos de dano de trevas (For-
titude reduz à metade). Alvos que fa-
lharem no teste não podem recuperar

PV por uma rodada.
+2 PM: aumenta o dano em 1d8+4.

Possessão
Arcana 5 (Encantamento)
Execução: padrão; Alcance: longo;

Alvo: 1 criatura; Duração: 1 dia; Re-
sistência: Vontade anula.

Você projeta sua consciência no corpo

do alvo. Enquanto possuir uma criatu-
ra, você assume o controle total do cor-
po dela. O seu próprio corpo fica in-
consciente e a consciência do alvo fica

inerte. Em termos de jogo, você con-
tinua usando a sua ficha, mas com os

atributos físicos e deslocamento da
criatura. Se o alvo passar no teste de

resistência, sabe que você tentou pos-
suí-lo e fica imune a esta magia por um

dia. Caso o corpo da criatura morra en-
quanto você a possui, a criatura morre

e você deve fazer um teste de Vontade
contra a CD da sua própria magia. Se
passar, sua consciência retorna para o
seu corpo (contanto que esteja dentro

do alcance). Do contrário, você tam-
bém morre. Retornar para o seu cor-
po voluntariamente é uma ação livre.

+5 PM: você ganha acesso às habilida-
des de raça e classe da criatura.

+5 PM: enquanto a magia durar e você
estiver dentro do alcance do seu corpo
original, pode “saltar” de uma criatura
possuída para outra. O novo alvo tem
direito a um teste de Vontade. Se falhar,
você assume o controle do corpo dele
e o alvo anterior recobra a consciência.

+5 PM: muda a duração para perma-
nente, mas destrói seu corpo original

no processo. Uma criatura possuída

pode fazer um teste de Vontade no co-
meço do dia para retomar seu corpo.

Se passar, recobra a consciência (e a
sua própria consciência fica inerte). O
teste se repete no início de cada dia. Se

o corpo de uma criatura possuída mor-
rer e houver outra criatura em alcance

curto, você pode tentar possuí-la. En-
quanto houver novos corpos para pos-
suir, você é imortal!

Potência Divina
Divina 3 (Transmutação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.

Você canaliza o poder de sua divinda-
de. Você aumenta uma categoria de ta-
manho (seu equipamento muda de

acordo) e recebe Força +4 e RD 10.

Você não pode lançar magias enquan-
to estiver sob efeito de Potência Divina.

+2 PM: aumenta o bônus de Força
em +1.
+5 PM: aumenta a RD em +5.

+2 PM: muda o alcance para toque e
o alvo para 1 criatura. A magia falha
se você e o alvo não forem devotos da
mesma divindade.
Premonição
Divina 4 (Adivinhação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Vislumbres do futuro permitem que
você reavalie suas ações. Uma vez por
rodada, você pode rolar novamente um
teste recém realizado, mas deve aceitar
o resultado da nova rolagem.
+3 PM: muda a execução para reação,

o alcance para curto, o alvo para 1 cria-
tura e a duração para instantânea. Esta

magia só pode ser usada em uma criatu-
ra que tenha acabado de fazer um teste.

Obriga a criatura a fazer uma nova rola-
gem de dados e aceitar o novo resulta-
do, seja ele um sucesso ou falha. Cria-
turas involuntárias têm direito a um

teste de Vontade para negar o efeito.
+10 PM: muda a duração para um dia.
Primor Atlético
Arcana 1 (Transmutação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.
Você modifica os limites físicos do
alvo, que recebe deslocamento +9m e
+10 em testes de Atletismo.

+1 PM: além do normal, o alvo rece-
be um bônus adicional de +20 em tes-
tes de Atletismo para saltar (para um

bônus total de +30).
+1 PM: além do normal, o alvo pode
escalar paredes e tetos sem precisar
fazer testes de Atletismo. Para isso,
precisa estar com as mãos livres, mas

pode usar uma única mão se ficar para-
do no lugar. O alvo não fica despreve-
nido enquanto escala.

+1 PM: muda a execução para ação de
movimento, o alcance para pessoal, o

alvo para você e a duração para instan-
tânea. Você salta muito alto e pousa

em alcance corpo a corpo de uma cria-
tura em alcance curto. Se fizer um ata-
que corpo a corpo contra essa criatura

neste turno, recebe os benefícios e pe-
nalidades de uma investida e sua arma

causa um dado extra de dano do mes-
mo tipo durante este ataque.

+3 PM: além do normal, ao fazer tes-
tes de perícias baseadas em Força,

Destreza ou Constituição, o alvo pode
rolar dois dados e escolher o melhor.

Não afeta testes de ataque ou resistên-
cia. Requer 2o círculo.

201

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Profanar
Divina 1 (Necromancia)
Execução: padrão; Alcance: longo;

Área: esfera com 9m de raio; Dura-
ção: 1 dia.

Você enche a área com energia nega-
tiva. Dano causado por efeitos de tre-
vas é maximizado dentro da área. Isso

também afeta PV curados em mor-
tos-vivos por esses efeitos. Esta ma-
gia não pode ser lançada em uma área

contendo um símbolo visível dedicado

a uma divindade que não a sua. Profa-
nar anula Consagrar.

+1 PM: além do normal, mortos-vivos
na área recebem +2 na Defesa e +2 em
todos os testes.

+2 PM: aumenta os bônus para mor-
tos-vivos em +1.

+9 PM: muda a execução para 1 hora,
a duração para permanente e adiciona
componente material (incenso e óleos
no valor de T$ 1.000). Requer 4o círculo.
Projetar Consciência
Universal 5 (Adivinhação)
Execução: padrão; Alcance: ilimitado

(veja texto); Alvo: local ou criatura co-
nhecidos; Duração: sustentada.

Esta magia faz com que sua consciên-
cia deixe seu corpo e se transporte ins-
tantaneamente para um local ou para

perto de uma criatura alvo. Se escolher
um local, ele precisa ser conhecido por
você. Se escolher uma criatura, você
transporta sua consciência até onde a
criatura estiver, contanto que estejam
no mesmo plano.
Você adquire uma forma fantasmagórica
invisível, mas pode se mostrar usando
uma ação de movimento. Pode se mover

em qualquer direção com deslocamen-
to de voo 18m e, por ser incorpóreo, é

capaz de atravessar objetos sólidos, mas

fica limitado a se mover dentro dos li-
mites do local, ou dentro de alcance cur-
to da criatura alvo. Você pode ver e ou-
vir como se estivesse presente no local

e pode falar mentalmente com qualquer

criatura que possa ver, contanto que te-
nham um idioma em comum.

+10 PM: além do normal, sua proje-
ção é capaz de lançar magias que não

precisem de componentes materiais e

tenham duração diferente de sustenta-
da. Sua forma fantasmagórica funciona

como na magia Forma Etérea, sendo afe-
tada por magias de abjuração e essên-
cia, mas as magias que ela lança podem

afetar criaturas corpóreas.

Proteção
contra Magia
Divina 3 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.

Você protege o alvo contra efeitos má-
gicos nocivos. O alvo recebe +5 em

testes de resistência contra magias.

+4 PM: muda o bônus para +10. Re-
quer 4o círculo.

+4 PM: em vez do normal, o alvo fica

imune a uma escola de magia a sua es-
colha. Requer 4o Círculo.

+9 PM: em vez do normal, o alvo fica
imune a duas escolas de magia a sua
escolha. Requer 5o Círculo.
Proteção Divina
Divina 1 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.
Esta magia cria uma barreira mística
invisível que fornece ao alvo +2 em
testes de resistência.
+2 PM: aumenta o bônus concedido
em +1.
+2 PM: muda a execução para reação,
o alcance para curto e a duração para 1

rodada. Em vez do normal, o alvo rece-
be +5 no próximo teste de resistência

que fizer (cumulativo com o efeito bá-
sico desta magia).

+2 PM: muda o alvo para área de es-
fera com 3m de raio. Todos os aliados

dentro do círculo recebem o bônus da
magia. Requer 2o círculo.
+5 PM: torna o alvo imune a efeitos
mentais e de medo. Requer 3o círculo.
Purificação
Divina 2 (evocação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: instantânea.

Você purifica a criatura tocada, remo-
vendo uma condição dela entre abala-
do, apavorado, alquebrado, atordoado,

cego, confuso, debilitado, enjoado, en-
venenado, esmorecido, exausto, fasci-
nado, fatigado, fraco, frustrado, lento,

ofuscado, paralisado, pasmo ou surdo.
+2 PM: também recupera todos os PV
perdidos por veneno.
+2 PM: em vez de uma, remove todas
as condições listadas.
+3 PM: também permite que o alvo
solte qualquer item amaldiçoado que
esteja segurando (mas não remove a
maldição do item em si).

+7 PM: também dissipa magias e efei-
tos prejudiciais de encantamento, ne-
cromancia e transmutação afetando o

alvo. Requer 3o círculo.
Queda Suave
Arcana 1 (Transmutação)

Execução: reação; Alcance: curto; Al-
vos: 1 criatura ou objeto Grande ou

menor; Duração: até chegar ao solo
ou cena, o que vier primeiro.
O alvo cai lentamente. A velocidade da
queda é reduzida para 18m por rodada
— o suficiente para não causar dano.
Como lançar esta magia é uma reação,
você pode lançá-la rápido o bastante
para salvar a si ou um aliado de quedas
inesperadas. Lançada sobre um projétil

— como uma flecha ou uma rocha lar-
gada do alto de um penhasco —, a ma-
gia faz com que ele cause metade do

dano normal, devido à lentidão.
Queda Suave só funciona em criaturas e
objetos em queda livre; a magia não vai

frear um golpe de espada ou o mergu-
lho rasante de um atacante voador.

Truque: muda o alvo para objeto
Minúsculo. Em vez do normal, você
pode gastar uma ação de movimento

para levitar o alvo até 4,5m em qual-
quer direção.

+2 PM: muda o alvo para até 10 cria-
turas ou objetos adequados.

+2 PM: aumenta a categoria de tama-
nho do alvo em uma.

Raio do
Enfraquecimento
Arcana 1 (Necromancia)
Execução: padrão; Alcance: curto;

Alvo: 1 criatura; Duração: cena; Re-
sistência: Fortitude parcial.

Você dispara um raio púrpura que dre-
na as forças do alvo. Se falhar na resis-
tência, o alvo fica fatigado. Se passar,

fica vulnerável. Note que, como efeitos
de magia não acumulam, lançar esta
magia duas vezes contra o mesmo alvo
não irá deixá-lo exausto.
Truque: muda o alcance para toque e
a resistência para Fortitude anula. Em

vez do normal, sua mão emana um bri-
lho púrpura e, ao tocar o alvo, ele fica

fatigado.
+2 PM: em vez do normal, se falhar na

resistência o alvo fica exausto. Se pas-
sar, fica fatigado. Requer 2o círculo.

+5 PM: como acima, mas muda o alvo
para criaturas escolhidas. Requer 3o
círculo.

202
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Raio Polar
Arcana 4 (Evocação)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura; Duração: instantânea.
Resistência: Fortitude parcial.

Você dispara um raio azul esbranqui-
çado de gelo e ar congelante. O alvo

sofre 10d8 pontos de dano de frio e

fica preso em um bloco de gelo (para-
lisado). Se passar no teste de resistên-
cia, sofre metade do dano e, em vez de

paralisado, fica lento por uma rodada.
É possível quebrar o gelo para libertar
uma criatura presa: o bloco tem 20 PV,

RD 10 e é vulnerável a fogo. Uma cria-
tura presa pode gastar uma ação com-
pleta para fazer um teste de Atletismo

e se libertar do gelo; cada vez que pas-
sar no teste causa 10 pontos de dano

ao bloco, ignorando a RD.
+3 PM: aumenta o dano em +2d8.

+5 PM: muda o alvo para área de esfe-
ra com 6m de raio. Em vez de um raio,

você dispara uma bola de gelo que ex-
plode, causando o efeito da magia em

todas as criaturas na área.
Raio Solar
Divina 2 (Evocação)
Execução: padrão; Alcance: médio;
Área: linha; Duração: instantânea;
Resistência: Reflexos (veja texto).
Você canaliza uma poderosa rajada de
energia positiva que ilumina o campo
de batalha. Criaturas na área sofrem
4d8 pontos de dano de luz (ou 4d12,

se forem mortos-vivos) e ficam ofus-
cadas por uma rodada. Se passarem na

resistência, sofrem metade do dano e
não ficam ofuscadas.
Truque: muda a duração para cena e
a resistência para nenhuma. Em vez do

normal, cria um facho de luz que ilu-
mina a área da magia. Uma vez por ro-
dada, você pode mudar a direção do fa-
cho como uma ação livre.

+2 PM: aumenta o dano ou cura em
+1d8 (ou +1d12 em mortos-vivos).
+3 PM: em vez do normal, criaturas
vivas a sua escolha na área curam 4d8
pontos de vida; o restante sofre o dano
normalmente.

+3 PM: criaturas que falhem na resis-
tência ficam cegas por 1d4 rodadas.

Reanimação Impura
Divina 5 (Necromancia)
Execução: completa; Alcance: toque;
Alvo: 1 criatura; Duração: cena.

Você reanima uma criatura morta re-
centemente (dentro da mesma cena),

trazendo sua alma de volta ao cor-
po de forma forçada. O tipo da criatu-
ra muda para morto-vivo, mas ela re-
tém suas memórias e habilidades de

quando estava viva, podendo inclusi-
ve lançar magias. A criatura pode pen-
sar e falar livremente, mas obedece ce-
gamente a seus comandos. Quando a

cena termina, a criatura volta a ficar
morta, mas muitos clérigos malignos
usam meios para guardar e preservar

o corpo de criaturas poderosas para se-
rem reanimadas dessa forma quando

necessário. Se for destruída, a criatu-
ra não pode ser reanimada novamente

com esta magia.
Refúgio
Arcana 2 (Abjuração)
Execução: completa; Alcance: curto;

Efeito: domo com 6m de raio; Dura-
ção: 1 dia.

Esta magia cria um domo imóvel e

quase opaco por fora, mas transpa-
rente pelo lado de dentro. Ele prote-
ge contra calor, frio e forças pequenas,

mas não contra qualquer coisa capaz

de causar dano. Assim, o domo pro-
tege contra neve e vento comuns, mas

não contra uma flecha ou Bola de Fogo.
Porém, como o domo é quase opaco,

qualquer criatura dentro dele tem ca-
muflagem total contra ataques vindos

de fora. Criaturas podem entrar e sair
do domo livremente. Descansar dentro
do Refúgio concede recuperação normal
de PV e PM.
+1 PM: além do normal, os limites do

domo são envoltos por uma fumaça es-
cura e espessa, que impede criaturas do

lado de fora de enxergar ou ouvir o que
está dentro. Criaturas do lado de dentro
enxergam e ouvem normalmente o que
está do lado de fora. A fumaça também
bloqueia magias de adivinhação.
+3 PM: em vez do normal, cria uma
cabana que comporta até 10 criaturas

Médias. Descansar nesse espaço con-
cede recuperação confortável (recupe-
ra PV e PM igual ao dobro do nível).

Para todos os efeitos é uma cabana

normal, com paredes de madeira, te-
lhado, uma porta, duas janelas e al-
guma mobília (camas, uma mesa com

bancos e uma lareira). A porta e as ja-
nelas têm 15 PV, RD 5 e são protegidas

por um efeito idêntico à magia Tranca
Arcana. As paredes têm 200 PV e RD 5.

+3 PM: em vez do normal, cria um es-
paço extradimensional, similar a uma

caverna vazia e escura, que compor-
ta até 10 criaturas Médias. A entrada

para o espaço precisa estar desenhada
em um objeto fixo como uma grande
pedra ou árvore. Qualquer criatura que
atravesse a entrada consegue entrar
no espaço. Nenhum efeito a partir do

mundo real afeta o espaço e vice-ver-
sa, mas aqueles que estiverem dentro

podem observar o mundo real como

se uma janela de 1m estivesse centra-
da na entrada. Qualquer coisa que es-
teja no espaço extradimensional surge

no mundo real na área vazia mais pró-
xima da entrada quando a duração da

magia acaba. Requer 3o círculo.
+9 PM: em vez do normal, cria uma

mansão extradimensional que com-
porta até 100 criaturas Médias, com

quartos luxuosos, comida e bebida e
dez servos fantasmagóricos (como na
magia Servos Invisíveis). Descansar na

mansão concede recuperação luxuo-
sa (recupera PV e PM igual ao triplo

do nível). A mansão tem uma úni-
ca entrada, uma porta feita de luz.

Você pode deixá-la visível ou invisível

como uma ação livre e apenas criatu-
ras escolhidas por você podem passar.

Requer 4o círculo.
Relâmpago
Arcana 2 (Evocação)
Execução: padrão; Alcance: médio;
Área: linha; Duração: instantânea;
Resistência: Reflexos reduz à metade.
Você dispara um poderoso raio que

causa 6d6 pontos de dano de eletrici-
dade em todas as criaturas e objetos li-
vres na área.

+2 PM: aumenta o dano em +2d6.

+3 PM: muda a área para alvo (cria-
turas escolhidas). Em vez do normal,

você dispara vários relâmpagos, um
para cada alvo escolhido, causando 6d6
pontos de dano de eletricidade. Requer
3o círculo.
Relâmpago
Flamejante
de Reynard
Arcana 4 (Evocação)
Execução: duas rodadas; Alcance:

médio; Efeito: bolas de fogo e relâm-
pagos; Duração: sustentada; Resis-
tência: Reflexos reduz à metade.

Esta é uma magia poderosa, desenvol-
vida pelo metódico e impassível arqui-
mago Reynard. Você invoca as energias

elementais do fogo e do relâmpago, fa-
zendo com que uma de suas mãos fi-
203

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro

que em chamas e a outra mão eletrifi-
cada. Pela duração da magia, você pode

gastar uma ação de movimento para

disparar uma bola de fogo (10d6 pon-
tos de dano de fogo numa esfera com

6m de raio) ou um relâmpago (10d6
pontos de dano de eletricidade numa
linha). Você também pode, como uma
ação padrão, usar as duas mãos num

ataque de energia mista (20d12 pon-
tos de dano, metade de fogo e meta-
de de eletricidade, numa esfera com

9m de raio). Você precisa estar com as
duas mãos livres para invocar o efeito
misto e isso consome toda a energia

da magia, terminando-a imediatamen-
te. Por se tratar de um ritual comple-
xo, o tempo de execução dessa magia

não pode ser reduzido.
+2 PM: aumenta o dano das rajadas
em +1d6 e o dano da rajada mista em
+2d12.
Réquiem
Arcana 5 (Ilusão)
Execução: completa; Alcance: curto;
Alvo: criaturas escolhidas; Duração:
sustentada; Resistência: Vontade anula.
Esta magia cria uma ilusão particular

para cada uma das criaturas que atin-
gir. Enquanto a magia durar, no início

de cada um de seus turnos, cada criatu-
ra afetada deve fazer um teste de Von-
tade; se falhar, acha que não tomou as

ações que realmente fez no turno ante-
rior e é obrigada a repetir as mesmas

ações neste turno, com uma penalida-
de cumulativa de –5 em todos os testes

para cada vez que se repetir (a pena-
lidade não se aplica ao teste de Von-
tade contra esta magia). Por exemplo,

se a criatura se aproximou de um alvo

e o atacou, precisa se aproximar des-
se mesmo alvo e atacar novamente. A

ação repetida consome PM e recursos
normalmente e, caso exija um teste de

resistência, qualquer alvo faz esse tes-
te com um bônus igual ao da penalida-
de desta magia.

Resistência
a Energia
Universal 1 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: cena.
Ao lançar esta magia, escolha entre
ácido, eletricidade, fogo, frio, luz ou
trevas. O alvo recebe redução de dano
10 contra o tipo de dano escolhido.
+2 PM: aumenta a redução de dano
em +5.

+2 PM: muda a duração para um dia.
Requer 2o círculo.
+5 PM: muda o alcance para curto e o
alvo para criaturas escolhidas. Requer
3o círculo.
+5 PM: muda o efeito para redução de
dano contra todos os tipos listados na
magia. Requer 3o círculo.

+9 PM: muda o efeito para imunida-
de a um tipo listado na magia. Requer

4o círculo.
Rogar Maldição
Divina 2 (Necromancia)
Execução: padrão; Alcance: curto;

Alvo: 1 criatura; Duração: sustenta-
da; Resistência: Fortitude anula.

Você entoa cânticos maléficos que

amaldiçoam uma vítima, criando efei-
tos variados. Ao lançar a magia, escolha

entre os seguintes.
Debilidade: o alvo fica esmorecido e não
pode se comunicar ou lançar magias.
Ainda reconhece seus aliados e pode
segui-los e ajudá-los, mas sempre de
maneira simplória.

Doença: muda a duração para instantâ-
nea. O alvo contrai uma doença a sua

escolha, que o afeta imediatamente
(sem período de incubação).
Fraqueza: o alvo fica debilitado e lento.
Isolamento: o alvo perde o uso de um
de seus cinco sentidos a sua escolha.
Se perder a visão, fica cego. Se perder a
audição, fica surdo. Se perder o olfato
ou paladar, não pode usar a habilidade
faro. Se perder o tato, fica caído e não
pode se levantar.

Você também pode inventar sua pró-
pria maldição, usando esses exemplos

como sugestões, mas o mestre tem a
palavra final sobre o efeito.
+3 PM: aumenta o número de efeitos
que você pode escolher em +1. Requer
3o círculo.

+7 PM: muda a duração para perma-
nente e resistência para Fortitude par-
cial. Se passar, a criatura ainda sofre os

efeitos da maldição, mas por 1 rodada.
Requer 4o círculo.
Roubar a Alma
Universal 5 (Necromancia)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: permanente;
Resistência: Vontade parcial.

Você rouba a alma da vítima, arma-
zenando-a em um objeto. Se o alvo

passar no teste de resistência, sente o

impacto de sua alma ser puxada para

fora do corpo e fica abalado por 1 ro-
dada. Se falhar, seu corpo fica caído,

inconsciente e inerte, enquanto sua
alma é transportada para dentro do
objeto. O corpo não envelhece nem

se decompõe, permanecendo em es-
tase. Ele pode ser atacado e destruí-
do normalmente. O objeto escolhido

deve custar T$ 1.000 por nível ou ND
da criatura e não possuir uma alma

presa ou se quebrará quando a ma-
gia for lançada (embora personagens

não conheçam o conceito de “nível”
dentro do mundo de jogo, podem ter

noção do poder geral de uma criatu-
ra, estimando assim o valor do obje-
to). Se o objeto for destruído, a ma-
gia se esvai. Se o corpo ainda estiver

disponível, a alma retorna para ele.

Caso contrário, escapa para os Mun-
dos dos Deuses.

Custo adicional: sacrifício de 1 PM.

+5 PM: o objeto que abriga a alma de-
tém os mesmos PM totais que o alvo.

Se estiver empunhando o objeto, você
pode usar esses PM para lançar magias
no lugar dos seus. O objeto recupera

PM por dia como se o personagem es-
tivesse em descanso normal.

+10 PM: como uma reação ao lançar
esta magia, você possui o corpo sem
alma do alvo, como na magia Possessão
(mesmo que não conheça a magia).
Runa de Proteção
Universal 2 (Abjuração)
Execução: 1 hora; Alcance: toque;

Alvo: uma área de 6m de raio; Dura-
ção: permanente até ser descarregada.

Resistência: varia (veja o texto).
Você escreve uma runa pessoal em
uma superfície fixa, como uma parede
ou o chão, que protege uma pequena
área ao redor. Quando uma criatura
entra na área afetada a runa explode,

causando 6d6 pontos de dano em to-
dos os alvos a até 6m. A criatura que

ativa a runa não tem direito a teste de
resistência; outras criaturas na área
têm direito a um teste de Reflexos
para reduzir o dano à metade. Quando
lança a magia, você escolhe o tipo de
dano, entre ácido, eletricidade, fogo,
frio, luz ou trevas.
Você pode determinar que a runa se
ative apenas em condições específicas
— por exemplo, apenas por goblins ou

apenas por mortos-vivos. Você tam-
bém pode criar uma palavra mágica

que impeça a runa de se ativar.

204
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Um personagem pode encontrar a runa

com um teste de Investigação e desar-
má-la com um teste de Ladinagem.

Componente material: pó de diamante no

valor de T$ 200, com o qual o conjura-
dor desenha a runa, que brilha por al-
guns instantes e depois se torna prati-
camente invisível.

+1 PM: aumenta o dano em +2d6.
+1 PM: muda o alvo para “você” e o
alcance para “pessoal”. Ao invés do

normal, escolha uma magia de 1o cír-
culo que você conhece e pode lan-
çar, com tempo de execução de uma

ação padrão ou menor. Você escre-
ve a runa em seu corpo e especifica

uma condição de ativação como, por
exemplo, “quando eu for alvo de um
ataque” ou “quando for alvo de uma

magia”. Quando a condição for cum-
prida, você pode ativar a runa e lançar

a magia escolhida como uma reação.
Você só pode escrever uma runa em
seu corpo ao mesmo tempo.

+3 PM: como o aprimoramento ante-
rior, mas você pode escolher magias de

2o círculo. Requer 3o círculo.
Salto
Dimensional
Arcana 2 (Convocação)
Execução: padrão; Alcance: curto;
Alvo: você; Duração: instantânea.
Esta magia transporta você para outro

lugar dentro do alcance. Você não pre-
cisa perceber nem ter linha de efeito

ao seu destino, podendo simplesmen-
te imaginá-lo. Por exemplo, pode se

transportar 3m adiante para ultrapas-
sar uma porta fechada. Uma vez trans-
portadas, criaturas não podem agir até

a rodada seguinte. Esta magia não per-
mite que você apareça dentro de um

corpo sólido; se o ponto de chegada
não tem espaço livre, você ressurge na
área vazia mais próxima.
+1 PM: muda o alcance para médio.
+1 PM: muda o alvo para você e uma

criatura voluntária. Você pode esco-
lher este aprimoramento mais vezes

para aumentar o número de alvos adi-
cionais em +1, mas deve estar tocando

todos os alvos.
+2 PM: muda a execução para reação.
Em vez do normal, você recebe +5 na
Defesa e em testes de Reflexos contra
um ataque ou efeito que esteja prestes
a atingi-lo. Após a resolução do efeito,
salta para um espaço adjacente (1,5m).
+3 PM: muda o alcance para longo.

Santuário
Divina 1 (Abjuração)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: cena; Re-
sistência: Vontade anula.

Qualquer criatura que tente fazer uma
ação hostil contra o alvo deve fazer um

teste de Vontade. Se falhar, não conse-
gue, perde a ação e não pode tentar no-
vamente até o fim da cena. Santuário

não protege o alvo de efeitos de área.
Além disso, o próprio alvo também
não pode fazer ações hostis (incluindo
forçar outras criaturas a atacá-lo), ou
a magia é dissipada — mas pode usar
habilidades e magias de cura e suporte,
como Curar Ferimentos e Bênção.
+1 PM: além do normal, escolha um

tipo de criatura entre animal, constru-
to ou morto-vivo. Você não pode ser

percebido por criaturas não inteligen-
tes (Int –4 ou menor) do tipo escolhido.

+9 PM: também protege o alvo contra
efeitos de área. Uma criatura que tente
atacar uma área que inclua o alvo deve
fazer o teste de Vontade; se falhar, não
consegue e perde a ação. Ela só pode
tentar novamente se o alvo sair da área.
Segunda Chance
Divina 5 (Evocação)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: instantânea.
Um brilho de luz, na forma de asas de
fênix, emana do alvo. Ele recupera 200
pontos de vida e se cura de qualquer

das seguintes condições: abalado, apa-
vorado, alquebrado, atordoado, cego,

confuso, debilitado, enjoado, envene-
nado, esmorecido, exausto, fascinado,

fatigado, fraco, frustrado, lento, ofus-
cado, paralisado, pasmo ou surdo.

+1 PM: aumenta a cura em +20 PV.
+2 PM: muda o alcance para curto e o
alvo para até 5 criaturas.
+5 PM: muda o alvo para uma criatura
que tenha morrido há até uma rodada.
Esta magia pode curá-la.
Selo de Mana
Universal 3 (Encantamento)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: cena; Resis-
tência: Vontade parcial.

Seu toque manifesta um selo mágico
na pele do alvo, que atrapalha o fluxo

de mana. Pela duração da magia, sem-
pre que o alvo realizar qualquer ação

que gaste PM, deve fazer um teste de

Vontade; se passar, faz a ação normal-
mente. Se falhar, a ação não tem efeito

(mas os PM são gastos mesmo assim).
+4 PM: muda o alcance para curto e
o alvo para criaturas escolhidas dentro
do alcance. Requer 4o círculo.
Semiplano
Arcana 5 (Convocação)
Execução: completa; Alcance: curto;
Efeito: semiplano com 30m de lado;
Duração: 1 dia.
Você cria uma dimensão particular.

Você pode entrar no semiplano gastan-
do uma ação padrão e 10 PM, desapa-
recendo do plano material como se ti-
vesse se teletransportado. Você pode

levar criaturas voluntárias que esteja

tocando, ao custo de 1 PM por criatu-
ra extra. Você também pode levar ob-
jetos que esteja tocando, ao custo de 1

PM por objeto Médio ou menor, 2 PM
por objeto Grande, 5 PM por Enorme e

10 PM por Colossal. Uma vez no semi-
plano, pode gastar uma ação completa

para voltar ao plano material, no mes-
mo local onde estava. Caso conheça a

magia Viagem Planar, pode lançá-la para
voltar ao plano material em outro local.
Você escolhe a forma e a aparência do

semiplano — uma caverna, um aste-
roide que singra o éter, um palacete

de cristal etc. Ele contém ar, luz e ca-
lor, mas além disso é vazio. Entretan-
to, você pode levar itens (mobília, fer-
ramentas etc.) a cada viagem.

+2 PM: adiciona alvo (1 criatura).
Você cria uma semiplano labiríntico

e expulsa o alvo para ele. A cada ro-
dada, a vítima tem direito a um teste

de Investigação ou Sobrevivência, com

bônus cumulativo de +1 para cada tes-
te já realizado, para escapar do labi-
rinto. Quando o alvo escapa, a magia

termina e o alvo reaparece no plano

material no mesmo local onde esta-
va quando a magia foi lançada. Magias

como Salto Dimensional e Teletransporte
não ajudam a escapar do labirinto, mas
Viagem Planar, sim.

+5 PM: muda a duração para perma-
nente e adiciona componente material

(maquete do semiplano feita de mate-
riais preciosos no valor de T$ 5.000).

Você pode lançar a magia diversas ve-
zes para aumentar as dimensões do se-
miplano em +30m de lado a cada vez.

Servo Divino
Divina 3 (Convocação)
Execução: padrão; Alcance: curto;
Efeito: criatura conjurada; Duração:
cena ou até ser descarregada.

205

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Você pede a sua divindade que envie

um espírito para ajudá-lo. Esse espíri-
to realiza uma tarefa a sua escolha que

possa ser cumprida em até uma hora
— desde algo simples como “use suas

asas para nos levar até o topo da mon-
tanha” até algo complexo como “es-
colte esses camponeses até o castelo”.

A magia é descarregada quando a cria-
tura cumpre a tarefa, retornando a seu

plano natal. O tipo de criatura é esco-
lhido pelo mestre, de acordo com as

necessidades da tarefa.
Componente material: um pagamento de

T$ 100 ao espírito. A forma de paga-
mento varia — doações a um templo,

um item mágico ou mesmo dinheiro.
+4 PM: muda a duração para um dia

ou até ser descarregada. O espírito reali-
za uma tarefa a sua escolha que exija até

um dia. O custo do pagamento aumen-
ta para T$ 500. O resto segue normal.

+9 PM: muda a duração para 1 sema-
na ou até ser descarregada. O espírito

realiza uma tarefa que exija até uma se-
mana. O custo do pagamento aumen-
ta para T$ 1.000. O resto segue normal.

Servo Morto-Vivo
Universal 3 (Necromancia)
Execução: completa; Alcance: toque;
Alvo: 1 cadáver; Duração: instantânea.
Esta magia transforma o cadáver de
um humanoide, animal ou monstro
em um esqueleto ou zumbi (conforme
o estado de conservação do corpo). O
morto-vivo então obedece a todos os
seus comandos, mesmo suicidas. Se
quiser que o morto-vivo o acompanhe,

ele funciona como um parceiro inician-
te, de um tipo a sua escolha entre aju-
dante, atirador, combatente, fortão,

guardião ou montaria.
Uma vez por rodada, quando sofre
dano, você pode sacrificar um servo

morto-vivo e evitar esse dano. O ser-
vo é destruído no processo e não pode

ser reanimado
Componente material: um ônix negro
(T$ 100), inserido na boca ou olho
do cadáver.
+3 PM: muda o componente material
para pó de ônix negro (T$ 500). Em
vez de um zumbi ou esqueleto, cria um
carniçal. Ele pode funcionar como um

parceiro veterano, escolhido entre aju-
dante, atirador, combatente, fortão ou

guardião. O resto segue normal.
+3 PM: muda o componente material
para pó de ônix negro (T$ 500). Em
vez de um zumbi ou esqueleto, cria

uma sombra. Ela pode funcionar como
um parceiro veterano, escolhido entre
assassino, combatente ou perseguidor.
O restante da magia segue normal.
+7 PM: muda o componente material
para ferramentas de embalsamar (T$

1.000). Em vez de um zumbi ou esque-
leto, cria uma múmia. Ela pode funcio-
nar como um parceiro mestre, escolhi-
do entre ajudante, destruidor, guardião

ou médico. O restante da magia segue
normal. Requer 4o círculo.
Servos Invisíveis
Arcana 2 (Convocação)
Execução: padrão; Alcance: longo;

Efeito: criaturas conjuradas; Dura-
ção: 1 cena.

Você cria até três servos invisíveis e

silenciosos, capazes de realizar tare-
fas simples como apanhar lenha, co-
lher frutos, varrer o chão ou alimentar

um cavalo. Os servos podem ser usa-
dos para manter arrumada e organiza-
da uma mansão ou pequena torre ou

para preparar um acampamento nos
ermos para você e seus aliados (veja a
perícia Sobrevivência, na página 123).

Eles também podem ajudá-lo em tare-
fas mais complexas, como fazer uma

pesquisa ou preparar uma poção, mas
isso consome sua energia mágica. Você
pode “gastar” um servo para receber
um bônus não cumulativo de +2 em
um teste de perícia (exceto testes de
ataque e resistência). Os servos não
são criaturas reais; não podem lutar,

nem resistir a qualquer dano ou efei-
to que exija um teste de resistência ou

teste oposto — falharão automatica-
mente no teste e serão destruídos.

+2 PM: aumenta o número de servos
conjurados em 1.
+3 PM: você pode comandar os servos
para realizar uma única tarefa no seu
lugar. Em termos de jogo, eles passam

automaticamente em um teste de perí-
cia com CD máxima igual ao seu nível,

+2 para cada servo conjurado. O tem-
po necessário para realizar a tarefa é o

tempo do uso da perícia em questão.
Requer 3o círculo.
Seta Infalível
de Talude
Arcana 1 (Evocação)
Execução: padrão; Alcance: médio;
Alvos: criaturas escolhidas; Duração:
instantânea.
Favorita entre arcanistas iniciantes,
esta magia lança duas setas de energia

que causam 1d4+1 pontos de dano de

essência cada. Você pode lançar as se-
tas em alvos diferentes ou concentrá-las

num mesmo alvo. Caso você possua um
bônus no dano de magias, como pelo
poder Arcano de Batalha, ele é aplicado
em apenas uma seta (o bônus vale para
a magia, não cada alvo).
+2 PM: muda as setas para lanças de
energia que surgem e caem do céu.
Cada lança causa 1d8+1 pontos de
dano de essência. Requer 2o círculo.

+2 PM: muda o número de setas/lan-
ças para três.

+4 PM: muda o número de setas/lan-
ças para cinco. Requer 2o círculo.

+9 PM: muda o número de setas/lan-
ças para dez. Requer 4o círculo.

Silêncio
Divina 2 (Ilusão)
Execução: padrão; Alcance: médio;

Área: esfera com 6m de raio; Dura-
ção: sustentada.

Um silêncio sepulcral recai sobre a
área e nenhum som é produzido nela.
Enquanto estiverem na área, todas as
criaturas ficam surdas. Além disso,

como lançar magias exige palavras má-
gicas, normalmente nenhuma magia

pode ser lançada dentro da área.

+1 PM: muda a área para alvo de 1 ob-
jeto. Em vez do normal, o alvo emana

uma área de silêncio com 3m de raio.
Se lançar a magia num objeto de uma
criatura involuntária, ela tem direito a
um teste de Vontade para anulá-la.
+2 PM: muda a duração para cena. Em

vez do normal, nenhum som pode dei-
xar a área, mas criaturas dentro da área

podem falar, ouvir e lançar magias com
palavras mágicas normalmente.
Soco de Arsenal
Divina 2 (Convocação)
Execução: padrão; Alcance: médio;
Alvo: 1 criatura; Duração: instantânea;
Resistência: Fortitude parcial.
Ninguém sabe se Mestre Arsenal foi
realmente o criador desta magia —
mas ele foi o primeiro a utilizá-la.
Você fecha o punho e gesticula como

se estivesse golpeando o alvo, causan-
do dano de impacto igual a 4d6 + sua

Força. A vítima é empurrada 3m na
direção oposta à sua. Passar no teste
de resistência reduz o dano à metade
e evita o empurrão.
+1 PM: muda o alcance para pessoal,
o alvo para você, a duração para cena

206
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

e a resistência para nenhuma. Em vez
do normal, seus ataques corpo a corpo
passam a acertar inimigos distantes.
Seu alcance natural aumenta em 3m;

uma criatura Média pode atacar adver-
sários a até 4,5m, por exemplo.

+2 PM: aumenta o dano em +1d6.
+4 PM: aumenta o empurrão em +3m.

+5 PM: muda o tipo do dano para es-
sência.

Sombra Assassina
Arcana 5 (Ilusão)
Execução: padrão; Alcance: curto;

Alvo: 1 criatura; Duração: cena; Re-
sistência: Vontade parcial.

Esta magia cria uma duplicata ilusória

do alvo na forma de uma silhueta, li-
gada a ele como se fosse uma manifes-
tação sólida de sua própria sombra. A

duplicata de sombras segue automati-
camente o alvo. Sempre que o alvo faz

uma ação hostil — fazer um ataque,

usar uma habilidade, lançar uma ma-
gia — a sombra imediatamente realiza

a mesma ação contra o alvo, usando as

mesmas estatísticas e rolagens. A som-
bra pode ser atacada, tem as mesmas

estatísticas do alvo e é destruída quan-
do chega a 0 PV. Se o alvo passar no

teste de resistência, a sombra desapa-
rece no final do turno do alvo, depois

de copiar sua ação dessa rodada.
+10 PM: muda o alvo para criaturas
escolhidas na área.
Sonho
Arcana 4 (Adivinhação)

Execução: 10 minutos; Alcance: ili-
mitado; Alvo: 1 criatura viva; Dura-
ção: veja texto.

Você entra nos sonhos de uma criatu-
ra. Uma vez lá, pode conversar com

ela até que ela acorde. Se o alvo não
estiver dormindo quando você lançar
a magia, você pode permanecer em

transe até que ele adormeça. Duran-
te o transe, você fica indefeso e sem

consciência dos arredores. Você pode
sair do transe quando quiser, mas a
magia termina.
+2 PM: transforma o sonho do alvo
em um pesadelo. A vítima deve fazer
um teste de Vontade. Se falhar, não
recupera PV ou PM pela noite, sofre

1d10 pontos de dano de trevas e acor-
da fatigada. A vítima recebe bônus ou

penalidades em seu teste de resistên-
cia, dependendo do conhecimento que

você tiver dela. Use os mesmos modi-
ficadores da magia Vidência.

+1 PM: aumenta o número de alvos
em +1. Todos os alvos compartilham
um mesmo sonho (ou pesadelo) entre
si e com você.
Sono
Arcana 1 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 humanoide; Duração: cena;
Resistência: Vontade parcial.
Um cansaço místico recai sobre o alvo.

Se falhar na resistência, ele fica incons-
ciente e caído ou, se estiver envolvido

em combate ou outra situação perigo-
sa, fica exausto por 1 rodada, depois fa-
tigado. Em ambos os casos, se passar,

o alvo fica fatigado por 1d4 rodadas.

+2 PM: alvos que falhem na resistên-
cia ficam exaustos por 1d4+1 rodadas,

em vez de apenas 1.
+2 PM: muda o alvo para criatura.
+5 PM: afeta todos os alvos válidos a
sua escolha dentro do alcance.
Sopro da Salvação
Divina 3 (Evocação)
Execução: padrão; Alcance: pessoal;

Área: cone de 9m; Duração: instan-
tânea.

Você enche seus pulmões de luz e
energia positiva e sopra um cone de
poeira reluzente. O sopro afeta apenas
seus aliados na área, curando 2d8+4
pontos de vida e removendo uma das
seguintes condições de todos os alvos:

abalado, atordoado, apavorado, alque-
brado, cego, confuso, debilitado, enfei-
tiçado, enjoado, esmorecido, exausto,

fascinado, fatigado, fraco, frustrado,
lento, paralisado, pasmo e surdo.
+2 PM: aumenta a cura em +1d8+2.
+4 PM: além do normal, se um aliado
estiver com PV negativos, seus PV são
levados a 0 e então a cura é aplicada.

+4 PM: remove todas as condições lis-
tadas, em vez de apenas uma.

Sopro
das Uivantes
Arcana 2 (Evocação)
Execução: padrão; Alcance: pessoal;

Área: cone de 9m; Duração: instan-
tânea; Resistência: Fortitude parcial.

Você sopra ar gélido que causa 4d6

pontos de dano de frio (Fortitude re-
duz à metade). Criaturas de tamanho

Médio ou menor que falhem na resis-
tência ficam caídas e são empurradas

6m na direção oposta. Se houver uma
parede ou outro objeto sólido (mas

não uma criatura) no caminho, a cria-
tura para de se mover, mas sofre +2d6

pontos de dano de impacto.
+2 PM: aumenta o dano de frio em
+2d6.
+3 PM: aumenta o tamanho máximo
das criaturas afetadas em uma categoria.
Requer 3o círculo.
Suporte Ambiental
Divina 1 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 criatura; Duração: 1 dia.
Esta magia facilita a sobrevivência em
ambientes hostis. O alvo fica imune
aos efeitos de calor e frio extremos,
pode respirar na água se respirar ar

(ou vice-versa) e não sufoca em fuma-
ça densa.

+5 PM: muda o alcance para curto e o
alvo para criaturas escolhidas.
Sussurros Insanos
Arcana 2 (Encantamento)
Execução: padrão; Alcance: curto;
Alvo: 1 humanoide; Duração: cena;
Resistência: Vontade anula.
Você murmura palavras desconexas
que afetam a mente do alvo. O alvo
fica confuso.
+2 PM: aumenta o número de alvos
em +1.
+3 PM: muda o alvo para 1 criatura.
+12 PM: muda o alvo para criaturas
escolhidas. Requer 5o círculo.
Talho Invisível
de Edauros
Arcana 4 (Evocação)
Execução: padrão; Alcance: pessoal;

Área: cone de 9m; Duração: instan-
tânea; Resistência: Fortitude parcial.

Esta magia cruel foi desenvolvida pelo
mago de combate Edauros, quando

ainda era um bípede. Você faz um ges-
to rápido e dispara uma lâmina de ar

em alta velocidade. Criaturas na área
sofrem 10d8 pontos de dano de corte e
ficam sangrando. Alvos que passem no
teste de resistência sofrem metade do
dano e não ficam sangrando.
+2 PM: aumenta o dano em +2d8.

+2 PM: muda o alvo para você, a dura-
ção para sustentada e o efeito para uma

vez por rodada, como uma ação de mo-
vimento, você pode disparar uma lâ-
mina de ar contra um alvo em alcance

médio, causando 6d8 pontos de dano
de corte (Fortitude reduz à metade).

207

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro
Teia
Arcana 1 (Convocação)
Execução: padrão; Alcance: curto;
Área: cubo com 6m de lado; Duração:
cena; Resistência: Reflexos anula.

Teia cria várias camadas de fibras entre-
laçadas e pegajosas na área. Qualquer

criatura na área que falhar na resistên-
cia fica enredada. Uma vítima pode se

libertar com uma ação padrão e um
teste de Acrobacia ou Atletismo. A
área ocupada por Teia é terreno difícil.
A Teia é inflamável. Qualquer ataque
que cause dano de fogo destrói as teias
por onde passar, libertando as criaturas
enredadas mas deixando-as em chamas.
+1 PM: além do normal, criaturas que
falhem na resistência também ficam
imóveis.
+2 PM: além do normal, no início de

seus turnos a magia afeta novamen-
te qualquer criatura na área, exigindo

um novo teste de Reflexos. Requer 2o
círculo.
+2 PM: aumenta a área em +1 cubo
de 1,5m.
Telecinesia
Arcana 3 (Transmutação)
Execução: padrão; Alcance: médio;
Alvo: veja texto; Duração: sustentada
ou instantânea (veja texto).

Você move objetos ou criaturas se con-
centrando. Ao lançar a magia, escolha

uma das opções a seguir.

Força Contínua: você move uma criatu-
ra Média ou menor, ou objeto de até

10 espaços, a até 6m por rodada. Uma
criatura pode anular o efeito sobre ela,

ou sobre um objeto que possua, pas-
sando num teste de Vontade. O alvo

pode ser movido em qualquer direção
dentro do alcance. Ele cai no chão se
sair do alcance ou a magia terminar.
Duração: sustentada.

Empurrão Violento: nesta versão a ener-
gia mágica é expelida de uma única vez

e arremessa até 10 objetos (no máximo
10 espaços). Os objetos devem estar a

até 3m uns dos outros e podem ser ar-
remessados até o alcance da magia.

Objetos arremessados podem atingir
criaturas em seu caminho, causando

de 1 ponto de dano de impacto por es-
paço (objetos macios, sem pontas ou

sem fio) até 1d6 pontos de dano por
espaço (objetos duros, pontudos ou

afiados). Criaturas atingidas têm direi-
to a um teste de Reflexos para reduzir

o dano à metade.

Criaturas Médias ou menores podem
ser arremessadas, mas têm direito a

um teste de Vontade para evitar o efei-
to (em si mesmas ou em objetos que

estejam segurando). Uma criatura ar-
remessada contra uma superfície só-
lida sofre 1d6 pontos de dano de im-
pacto para cada 3m que “voou” no

deslocamento (incluindo outras cria-
turas; nesse caso, ambas sofrem o

dano). Duração: instantânea.
+3 PM: aumenta o tamanho máximo
da criatura em uma categoria (para
Grande, Enorme e Colossal) ou dobra
a quantidade de espaços do objeto.
Teletransporte
Arcana 3 (Convocação)
Execução: padrão; Alcance: toque;

Alvo: até 5 criaturas voluntárias; Du-
ração: instantânea.

Esta magia transporta os alvos para um
lugar a sua escolha a até 1.000km. Você
precisa fazer um teste de Misticismo,
com dificuldade que depende de seu
conhecimento sobre o local de destino.
CD 20. Um lugar familiar, que você
visita com frequência.
CD 30. Um lugar conhecido, que você
já visitou pelo menos uma vez.

CD 40. Um lugar que você nunca visi-
tou e só conhece a partir da descrição

de outra pessoa que esteve lá.
Você não pode se teletransportar para

um lugar que nunca visitou sem a des-
crição de alguém. Ou seja, não pode

se transportar para a “sala de tesouro
do rei” se nunca esteve nela nem falou
com alguém que esteve.
Se passar no teste, os alvos chegam ao

lugar desejado. Se falhar, os alvos sur-
gem 1d10 x 10km afastados em qual-
quer direção (se o destino é uma ci-
dade costeira, você pode surgir em

alto-mar). Se falhar por 5 ou mais,
você chega em um lugar parecido, mas
errado. E se você rolar 1 natural no
teste a magia falha (mas você gasta os
PM) e fica atordoado por 1d4 rodadas.
+2 PM: aumenta o número de alvos
em +5.

+2 PM: em vez do normal, a magia te-
letransporta os alvos para seu santuá-
rio — um local familiar e previamen-
te preparado. A magia pode ser usada

sem limite de distância ou necessidade

de testes, mas apenas dentro do mes-
mo plano. Preparar um local como seu

santuário exige um ritual de um dia e
o gasto de T$ 1.000. Você só pode ter
um santuário por vez.

+9 PM: muda a execução para ação

completa, a duração para cena e adi-
ciona sacrifício de 1 PM. Em vez do

normal, você cria um círculo de 1,5m

de diâmetro no chão, que transpor-
ta qualquer criatura que pisar nele. O

destino é escolhido quando a magia
é lançada e pode ser qualquer lugar,

em qualquer mundo, sem a necessida-
de de testes, desde que seja conheci-
do por você. O círculo é tênue e prati-
camente invisível. Você pode marcá-lo

de alguma forma (por exemplo, lan-
çando-o sobre uma plataforma eleva-
da). Se não fizer isso, alguém pode pi-
sar nele por acidente. Junte isso a um

destino hostil e você terá uma armadi-
lha bastante eficaz! Requer 5o círculo.

Tempestade Divina
Divina 2 (Evocação)
Execução: completa; Alcance: longo;
Área: cilindro com 15m de raio e 15m
de altura; Duração: sustentada.

Esta magia só pode ser usada em am-
bientes abertos. A área fica sujeita a

um vendaval — ataques à distância
sofrem penalidade de –5, chamas são
apagadas e névoas são dissipadas. Você

também pode gerar chuva (–5 em tes-
tes de Percepção), neve (como chuva, e

a área se torna terreno difícil) ou grani-
zo (como chuva, mais 1 ponto de dano

de impacto por rodada, no início de
seus turnos).
+1 PM: além do normal, uma vez por

rodada você pode gastar uma ação pa-
drão para fazer um raio cair sobre um

alvo na área, causando 3d8 pontos de
dano de eletricidade (Reflexos reduz
à metade).
+2 PM: aumenta o dano de raios (veja
acima) em +1d8.
+3 PM: se escolheu causar chuva, ela

se torna mais grossa, revelando a si-
lhueta de criaturas invisíveis na área.

Criaturas Médias ou menores ficam
lentas e criaturas voadoras precisam

passar num teste de Atletismo por ro-
dada ou caem ao solo (mas podem fa-
zer testes de Acrobacia para reduzir o

dano de queda, como o normal).
+3 PM: se escolheu causar granizo,
muda o dano para 2d6 por rodada.

+3 PM: se escolheu causar neve, cria-
turas na área sofrem 2d6 pontos de

dano de frio no início de seus turnos.
+3 PM: muda a área para cilindro com
90m de raio e 90m de altura.

208
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

Tentáculos
de Trevas
Arcana 3 (Necromancia)
Execução: padrão; Alcance: médio;

Área: esfera com 6m de raio; Dura-
ção: cena.

Um círculo de energias sombrias se

abre no chão, de onde surgem tentácu-
los feitos de treva viscosa. Ao lançar a

magia e no início de cada um de seus
turnos, você faz um teste da manobra

agarrar (usando seu bônus de Misti-
cismo) contra cada criatura na área. Se

você passar, a criatura é agarrada; se a
vítima já está agarrada, é esmagada,

sofrendo 4d6 pontos de dano de tre-
vas. A área conta como terreno difícil.

Os tentáculos são imunes a dano.
+2 PM: aumenta o raio da área em
+3m.

+2 PM: aumenta o dano dos tentácu-
los em +2d6.

Terremoto
Divina 4 (Evocação)
Execução: padrão; Alcance: longo;

Área: esfera com 30m de raio; Dura-
ção: 1 rodada; Resistência: veja texto.

Esta magia cria um tremor de terra que

rasga o solo. O terremoto dura uma ro-
dada, durante a qual criaturas sobre o

solo ficam atordoadas (apenas uma vez

por cena). Barreiras físicas não inter-
rompem a área de Terremoto.

O efeito exato depende do terreno.

Caverna ou subterrâneo: a magia derru-
ba o teto, causando 12d6 pontos de

dano de impacto e agarrando todas as

criaturas na área. Um teste de Refle-
xos reduz o dano à metade e evita a

condição.
Construção: todas as estruturas na área

sofrem 200 pontos de dano de impac-
to, o suficiente para derrubar constru-
ções de madeira ou alvenaria simples,

mas não de alvenaria reforçada. Cria-
turas em uma construção que desmo-
rone sofrem o mesmo efeito de criatu-
ras em uma caverna (veja acima).

Espaço aberto: fendas se abrem no

chão. Cada criatura na área precisa ro-
lar um dado; em um resultado ímpar,

uma fenda se abre sob ela e ela precisa
fazer um teste de Reflexos; se falhar,
cai na fenda. A criatura pode escapar

gastando uma ação completa e pas-
sando em um teste de Atletismo. No

início do seu próximo turno as fendas

se fecham, matando todos que este-
jam dentro delas.

Penhasco: o penhasco racha, criando um
desmoronamento que percorre uma
distância horizontal igual à distância da
queda. Por exemplo, um penhasco com
30m de altura desmorona em uma área
de 30m de comprimento além da base.
Qualquer criatura no caminho sofre
12d6 pontos de dano de impacto e fica
agarrada. Um teste de Reflexos reduz o
dano à metade e evita ficar agarrado.
Rio, lago ou pântano: fissuras se abrem
sob a água, drenando-a e formando um

lamaçal. Criaturas na área precisam fa-
zer um teste de Reflexos para não afun-
darem na lama e ficarem agarradas. No

início do seu próximo turno as fissuras
se fecham, possivelmente afogando as
criaturas que ficaram agarradas.
Criaturas agarradas (efeito possível de
caverna, construção, penhasco e rio,
lago ou pântano) sofrem 1d6 pontos de
dano por rodada até serem libertadas,
o que exige uma ação completa e um
teste de Atletismo (por parte da própria
criatura ou de um aliado adjacente).
Toque
Chocante
Arcana 1 (Evocação)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: instantâ-
nea; Resistência: Fortitude reduz à

metade.
Arcos elétricos envolvem sua mão,
causando 2d8+2 pontos de dano de
eletricidade. Se o alvo usa armadura de

metal (ou carrega muito metal, a crité-
rio do mestre), sofre uma penalidade

de –5 no teste de resistência.
+1 PM: aumenta o dano em 1d8+1.

+2 PM: muda a resistências para ne-
nhum. Como parte da execução da ma-
gia, você faz um ataque corpo a corpo

contra o alvo. Se acertar, causa o dano
do ataque e da magia.
+2 PM: muda o alcance para pessoal
e o alvo para área: esfera com 6m de
raio. Você dispara raios pelas pontas

dos dedos que afetam todas as criatu-
ras na área.

Toque da Morte
Universal 5 (Necromancia)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: instantâ-
nea; Resistência: veja texto.

Sua mão exala energias letais. A cria-
tura sofre 10d8+10 pontos de dano de

trevas. Se estiver com menos da meta-
de de seus PV, em vez disso deve fazer

um teste de Fortitude. Se passar, sofre

o dano normal. Se falhar, seus PV são
reduzidos a –10.
+2 PM: muda o alcance para curto.
Em vez de tocar no alvo, você dispara
um raio púrpura da ponta de seu dedo
indicador.
+10 PM: muda o alcance para curto
e o alvo para inimigos no alcance. Em
vez de tocar no alvo, você dispara raios
púrpuras da ponta de seus dedos.
Toque Vampírico
Arcana 2 (Necromancia)
Execução: padrão; Alcance: toque;

Alvo: 1 criatura; Duração: instantâ-
nea; Resistência: Fortitude reduz à

metade.
Sua mão brilha com energia sombria,

causando 6d6 pontos de dano de tre-
vas. Você recupera pontos de vida

iguais à metade do dano causado (se
causou algum dano).

+2 PM: muda a resistências para ne-
nhum como parte da execução da ma-
gia, você pode fazer um ataque corpo

a corpo contra o alvo. Se acertar, cau-
sa o dano do ataque e da magia, e recu-
pera pontos de vida iguais à metade do

dano da magia.
+2 PM: aumenta o dano em +2d6.
+2 PM: muda o alcance para pessoal,
o alvo para você e a duração para cena.
Em vez do normal, a cada rodada você

pode gastar uma ação padrão para to-
car 1 criatura e causar 3d6 pontos de

dano. Você recupera pontos de vida

iguais à metade do dano causado. Re-
quer 3o círculo.

Tranca Arcana
Arcana 1 (Abjuração)
Execução: padrão; Alcance: toque;

Alvo: 1 objeto Grande ou menor; Du-
ração: permanente.

Esta magia tranca uma porta ou outro
item que possa ser aberto ou fechado

(como um baú, caixa etc.), aumentan-
do a CD de testes de Força ou Ladina-
gem para abri-lo em +10. Você pode

abrir livremente sua própria tranca
sem problemas.
Componente material: chave de bronze
no valor de T$ 25.
Truque: muda o alcance para curto.

Em vez do normal, pode abrir ou fe-
char um objeto de tamanho Médio ou

menor, como uma porta ou baú. Não
afeta objetos trancados.
+1 PM: muda o alcance para curto e a
duração para instantânea. Em vez do

209

Pedro Bilhalva pedrokabilhalva@hotmail.com

Capítulo Quatro

normal, a magia abre portas, baús e ja-
nelas trancadas, presas, barradas ou

protegidas por Tranca Arcana (o efeito é
dissipado) a sua escolha. Ela também
afrouxa grilhões e solta correntes.
+5 PM: aumenta a CD para abrir o
alvo em +5.
+5 PM: muda o alvo para 1 objeto de
qualquer tamanho, podendo afetar até

mesmo os portões de um castelo. Re-
quer 3o círculo.

Tranquilidade
Divina 1 (Encantamento)
Execução: padrão; Alcance: curto;

Alvo: 1 animal ou humanoide; Dura-
ção: cena; Resistência: Vontade parcial.

Você emana ondas de serenidade. Se
falhar na resistência, o alvo tem sua
atitude mudada para indiferente (veja

a página 259) e não pode atacar ou rea-
lizar qualquer ação agressiva. Se pas-
sar, sofre –2 em testes de ataque. Qual-
quer ação hostil contra o alvo ou seus

aliados dissipa a magia e faz ele retor-
nar à atitude que tinha antes (ou pior,

de acordo com o mestre).
+1 PM: muda o alvo para 1 criatura.
+1 PM: aumenta o número de alvos
em +1.
+5 PM: muda o alcance para médio e o
alvo para criaturas escolhidas. Requer
3o círculo.
Transformação
de Guerra
Arcana 3 (Transmutação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: sustentada.

Você se torna uma máquina de comba-
te, ficando mais forte, rápido e resis-
tente. Você recebe +6 na Defesa, tes-
tes de ataque e rolagens de dano corpo

a corpo, e 30 PV temporários. Durante
a Transformação de Guerra você não pode
lançar magias, mas se torna proficiente
em todas as armas.

+2 PM: aumenta os bônus na Defe-
sa, testes de ataque e rolagens de dano

corpo a corpo em +1, e os PV tempo-
rários em +10.

+2 PM: adiciona componente mate-
rial (barra de adamante no valor de

T$ 100). Sua forma de combate ganha
um aspecto metálico e sem expressões.
Além do normal, você recebe redução

de dano 10 e imunidade a atordoamen-
to e efeitos de cansaço, encantamento,

metabolismo, trevas e veneno, e não
precisa respirar.

Transmutar
Objetos
Arcana 1 (Transmutação)
Execução: padrão; Alcance: toque;
Alvo: matéria-prima, como madeira,
rochas, ossos; Duração: cena.

A magia transforma matéria bru-
ta para moldar um novo objeto. Você

pode usar matéria-prima mundana

para criar um objeto de tamanho Pe-
queno ou menor e preço máximo de

T$ 25, como um balde ou uma espa-
da. O objeto reverte à matéria-prima

no final da cena, ou se for tocado por

um objeto feito de chumbo. Esta ma-
gia não pode ser usada para criar ob-
jetos consumíveis, como alimentos

ou itens alquímicos, nem objetos com
mecanismos complexos, como bestas
ou armas de fogo. Transmutar Objetos
anula Despedaçar.
Truque: muda o alvo para 1 objeto
mundano Mínusculo (ou material em
quantidade equivalente) e a duração
para instantânea. Em vez do normal,

você pode alterar as propriedades físi-
cas do alvo, como colorir, limpar ou su-
jar itens pequenos (incluindo peças de

roupa), aquecer, esfriar e/ou temperar
(mas não produzir) ou curar 1 PV do
objeto, consertando pequenas falhas

como colar um frasco de cerâmica que-
brado, unir os elos de uma corrente ou

costurar uma roupa rasgada. Um obje-
to só pode ser afetado por este truque

uma vez por dia.
+1 PM: muda o alcance para toque, o
alvo para 1 construto e a duração para
instantânea. Em vez do normal, cura
2d8 PV do alvo. Você pode gastar 2 PM
adicionais para aumentar a cura em
+1d8.
+2 PM: aumenta o limite de tamanho
do objeto em uma categoria.
+3 PM: aumenta o preço máximo do
objeto criado em um fator de x10 (+3
PM por T$ 250 de preço, +6 PM por
T$ 2.500 de preço e assim por diante).
+5 PM: muda o alvo para 1 objeto

mundano e a duração para instantâ-
nea. Em vez do normal, você cura to-
dos os PV do alvo, restaurando o ob-
jeto totalmente. Este aprimoramento

está sujeito aos limites de tamanho e

preço do objeto conforme a magia ori-
ginal e não funciona se o objeto tiver

sido completamente destruído (quei-
mado até virar cinzas ou desintegrado,

por exemplo). Requer 3o círculo.

+9 PM: como o aprimoramento ante-
rior, mas passa a afetar itens mágicos.

Velocidade
Arcana 2 (Transmutação)
Execução: padrão; Alcance: curto;
Alvo: 1 criatura; Duração: sustentada.
O alvo pode realizar uma ação padrão
ou de movimento adicional por turno.

Esta ação não pode ser usada para lan-
çar magias e ativar engenhocas.

+0 PM: muda a duração para cena.
A ação adicional que você pode fazer

é apenas de movimento. Uma criatu-
ra só pode receber uma ação adicional

por turno como efeito de Velocidade.

+7 PM: muda o alvo para criaturas es-
colhidas no alcance. Requer 4o círculo.

+7 PM: muda o alcance para pessoal
e o alvo para você. Você acelera sua

mente, além de seu corpo. A ação adi-
cional pode ser usada para lançar ma-
gias e ativar engenhocas. Requer 4o

círculo.
Vestimenta da Fé
Divina 2 (Abjuração)
Execução: padrão; Alcance: toque;
Alvo: 1 armadura, escudo ou vestuário;
Duração: 1 dia.
Você fortalece um item, aumentando o
bônus de Defesa de uma armadura ou

escudo em +2. No caso de um vestuá-
rio, ele passa a oferecer +2 na Defe-
sa (não cumulativo com armadura). Os

efeitos desta magia contam como um
bônus de encanto.
+3 PM: o objeto oferece o mesmo
bônus em testes de resistência. Requer
3o círculo.
+4 PM: aumenta o bônus em +1.

+7 PM: o objeto também oferece re-
dução de dano 5. Requer 4o círculo.

Viagem Arbórea
Divina 3 (Convocação)

Execução: completa; Alcance: pes-
soal; Alvo: você; Duração: cena.

Como parte da execução, você en-
tra em uma árvore adjacente que seja

maior do que você. Você pode perma-
necer dentro da árvore, percebendo os

arredores de forma normal (mas sem
poder fazer ações). Você pode gastar

uma ação de movimento para sair des-
sa árvore, ou de qualquer outra dentro

de 1km. Se estiver dentro de uma ár-
vore que seja destruída, a magia termi-
na e você sofre 10d6 pontos de dano de

impacto. Enquanto a magia durar você
pode gastar uma ação de movimento
e 1 PM para entrar em outras árvores.

210
Pedro Bilhalva pedrokabilhalva@hotmail.com

Magia

+2 PM: muda o alcance para toque,

o alvo para até cinco criaturas e a du-
ração para instantânea. Os alvos en-
tram em uma planta (de tamanho Mé-
dio ou maior) e saem em outra planta

do mesmo tamanho a até 100km de
distância, especificada em direção e
distância aproximadas (como “50km
ao norte”).
Viagem Planar
Universal 4 (Convocação)
Execução: completa; Alcance: toque;
Alvo: pessoal; Duração: instantânea.
Você viaja instantaneamente para outro
plano da Criação. Lá, você chega de 10
a 1.000km do destino pretendido (role
1d100 e multiplique por 10km).

Componente material: um bastão de me-
tal precioso em forma de forquilha (no

valor de T$ 1.000). O tipo de metal de-
termina para qual plano de existência

você será enviado. Os metais que le-
vam a dimensões específicas podem

ser difíceis de encontrar, de acordo
com o mestre.
+2 PM: muda o alvo para até cinco
criaturas voluntárias que você esteja
tocando.
Vidência
Universal 3 (Adivinhação)

Execução: completa; Alcance: ilimita-
do; Alvo: 1 criatura; Duração: susten-
tada; Resistência: Vontade anula.

Através de uma superfície reflexi-
va (bacia de água benta para clérigos,

lago para druidas, bola de cristal para
magos, espelho para feiticeiros etc.)

você pode ver e ouvir uma criatura es-
colhida e seus arredores (cerca de 6m

em qualquer direção), mesmo que ela
se mova. O alvo pode estar a qualquer
distância, mas se passar em um teste

de Vontade, a magia falha. A vítima re-
cebe bônus ou penalidades em seu tes-
te de resistência, dependendo do co-
nhecimento que você tiver dela.

• Não conhece o alvo: +10.
• Ouviu falar do alvo: +5.
• O alvo está em outro plano ou
mundo: +5.
• Já encontrou o alvo pessoalmente: +0.
• Tem uma pintura, escultura ou outra
representação do alvo: –2.
• Conhece bem o alvo: –5.
• Tem um pertence pessoal ou peça de
roupa do alvo: –5.
• Tem uma parte do corpo do alvo
(unhas, cabelos...): –10.

Visão da Verdade
Universal 4 (Adivinhação)

Execução: movimento; Alcance: pes-
soal; Alvo: você; Duração: cena.

Você enxerga a forma real das coisas.
Você pode ver através de camuflagem e
escuridão (normais e mágicas), assim
como efeitos de ilusão e transmutação
(enxergando a verdade como formas
translúcidas ou sobrepostas).
+1 PM: muda o alcance para toque e o
alvo para 1 criatura.
+1 PM: além do normal, o alvo fica
com sentidos apurados; ele recebe +10
em todos os testes de Percepção.
+2 PM: além do normal, o alvo escuta
falsidades; ele recebe +10 em todos os
testes de Intuição.

+4 PM: além do normal, o alvo enxer-
ga através de paredes e barreiras com

30cm de espessura ou menos (as pare-
des e barreiras parecem translúcidas).

Visão Mística
Universal 1 (Adivinhação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Seus olhos brilham com uma luz azul e
passam a enxergar auras mágicas. Este
efeito é similar ao uso de Misticismo
para detectar magia, mas você detecta

todas as auras mágicas em alcance mé-
dio e recebe todas as informações so-
bre elas sem gastar ações. Além disso,

você pode gastar uma ação de movi-
mento para descobrir se uma criatura

que possa perceber em alcance médio
é capaz de lançar magias e qual a aura
gerada pelas magias de círculo mais
alto que ela pode lançar.
+1 PM: recebe visão no escuro.
+2 PM: muda a duração para um dia.

+2 PM: também pode enxergar obje-
tos e criaturas invisíveis. Eles apare-
cem como formas translúcidas.

Vitalidade Fantasma
Arcana 1 (Necromancia)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: instantânea.

Você suga energia vital da terra, rece-
bendo 2d10 pontos de vida temporá-
rios. Os PV temporários desaparecem

ao final da cena.
+2 PM: aumenta os PV temporários
recebidos em +1d10. Caso a magia
cause dano, em vez disso aumenta o
dano causado em +1d10.

+5 PM: muda o alvo para área: esfe-
ra com 6m de raio centrada em você

e a resistência para Fortitude reduz
à metade. Em vez do normal, você
suga energia das criaturas vivas na
área, causando 1d10 pontos de dano
de trevas e recebendo PV temporários
iguais ao dano total causado. Os PV
temporários desaparecem ao final da
cena. Requer 2o círculo.
Voo
Arcana 3 (Transmutação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Você recebe deslocamento de voo 12m.
Voar por meio desta magia é simples

como andar — você pode atacar e lan-
çar magias normalmente enquanto

voa. Quando a magia termina, você
desce lentamente até o chão, como se
estivesse sob efeito de Queda Suave.
+1 PM: muda o alcance para toque e o
alvo para 1 criatura.
+4 PM: muda a duração para um dia.
Requer 4o círculo.
+4 PM: muda o alcance para curto e
o alvo para até 10 criaturas. Requer 4°
círculo.
Voz Divina
Divina 2 (Adivinhação)
Execução: padrão; Alcance: pessoal;
Alvo: você; Duração: cena.
Você pode conversar com criaturas de

qualquer raça e tipo: animal, constru-
to, espírito, humanoide, monstro ou

morto-vivo. Pode fazer perguntas e en-
tende suas respostas, mesmo sem um

idioma em comum ou se a criatura não
for capaz de falar, mas respeitando os
limites da Inteligência dela. A atitude
dessas criaturas não é alterada, mas
você pode usar a perícia Diplomacia
para tentar mudar sua atitude.
+1 PM: você concede um pouco de
vida a um cadáver, suficiente para
que ele responda a suas perguntas.

O conhecimento do corpo é limita-
do ao que ele tinha enquanto vivo e

suas respostas são curtas e enigmáti-
cas. Um corpo só pode ser alvo desta

magia uma vez. Ela também não fun-
ciona em um corpo cuja cabeça tenha

sido destruída.
+1 PM: você pode falar com plantas
(normais ou monstruosas) e rochas.

Plantas e rochas têm percepção limi-
tada de seus arredores e normalmente

fornecem respostas simplórias.*/
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
        descricao: "Muda o alvo para 1 monstro ou espírito. Requer 3o círculo.",
      },
    ],
    tipo: enumTipo.divina,
    circulo: 1,
  },
];

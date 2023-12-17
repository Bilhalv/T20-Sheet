import { Origem } from "../Construtores/Origem";
import { TipoPoder } from "../Construtores/Poder";
import { TabelaPericiasEnum } from "./Pericias";
import { TabelaPoderesEnum } from "./Poderes";

  export const TabelaOrigens: Origem[] = [
    {
      nome: 'Acólito',
      descricao: 'Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa — o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos.',
      itens: ['Símbolo sagrado', 'traje de sacerdote'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Cura, TabelaPericiasEnum.Religião, TabelaPericiasEnum.Vontade],
        poderes: [TabelaPoderesEnum.Medicina, TabelaPoderesEnum.MembroDaIgreja, TabelaPoderesEnum.VontadeDeFerro]
      },
      imagem: "./img/origens/acolito.png",
    },
    {
      nome: 'Amigo dos Animais',
      descricao: 'Você pode ter sido cavalariço no estábulo de um castelo, criador de gado em uma fazenda, ginete de Namalkah ou mesmo tratador em um zoológico ou circo — em Arton, existem espetáculos circenses com animais em jaulas, que talvez você tenha desejado libertar. Ou então nada disso: desde criança você tem facilidade em lidar com animais, sempre conversou com eles, sentiu ser capaz de compreendê-los. Em certos lugares ou tribos, alguma montaria especial seria destinada a você.',
      itens: ['Cão de guarda', 'Cavalo', 'Pônei'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Cavalgar, TabelaPericiasEnum.Adestramento],
        poderes: [TabelaPoderesEnum.AmigoEspecial]
      },
      imagem: "./img/origens/amigo.png",
    },
    {
      nome: 'Amnésico',
      descricao: 'Você perdeu a maior parte da memória. Sabe apenas o próprio nome ou nem isso. Talvez tenha alguns itens pessoais, mas nenhuma ideia de como os conseguiu — podem ser relíquias de família, presentes de um ente querido ou apenas coisas que pegou de viajantes mortos lá atrás. Você não sabe como recebeu seu treinamento; apenas tem uma intuição sobre aquilo que consegue fazer. Seus atuais companheiros são a única família que conhece. Talvez viajando com eles você descubra algo sobre seu passado.',
      itens: ['Um ou mais itens (somando até T$ 500), aprovados pelo mestre, que podem ser uma pista misteriosa do seu passado.'],
      beneficios: {
        pericias: [],
        poderes: [TabelaPoderesEnum.LembrançasGraduais]
      },
      imagem: "./img/origens/amnesico.png",
    },
    {
      nome: 'Aristocrata',
      descricao: 'Você nasceu na nobreza. Recebeu educação sofisticada em assuntos acadêmicos, política mercantil, torneios de cavalaria ou mesmo conjuração arcana, dependendo das tradições em sua linhagem e desejos de seus pais. Você ainda procura cumprir seus compromissos como nobre? Luta para conciliar as expectativas da família com a vida de aventuras? Ou cortou totalmente seus laços com o passado, mantendo apenas alguns pertences valiosos e contatos úteis?',
      itens: ['Joia de família no valor de T$ 300', 'traje da corte'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Diplomacia, TabelaPericiasEnum.Enganação, TabelaPericiasEnum.Nobreza],
        poderes: [TabelaPoderesEnum.Comandar, TabelaPoderesEnum.SangueAzul]
      },
      imagem: "./img/origens/aristocrata.png",
    } ,
    {
      nome: 'Artesão',
      descricao: 'Do alfaiate habilidoso em costurar as vestes da nobreza ao armeiro que forja armas letais, você foi treinado por um parente, mestre ou guilda para fabricar itens importantes no mundo civilizado. Suas habilidades podem ter sido aprendidas para o trabalho, mas se mostraram úteis durante as aventuras.',
      itens: ['Instrumentos de ofício (qualquer)' ,"um item que você possa fabricar de até T$ 50."],
      beneficios: {
        pericias: [TabelaPericiasEnum.Ofício, TabelaPericiasEnum.Vontade],
        poderes: [TabelaPoderesEnum.FrutosDoTrabalho ,TabelaPoderesEnum.Sortudo]
      },
      imagem: "./img/origens/artesao.png",
    } ,
    {
      nome: 'Artista',
      descricao: 'Você possui talento, nasceu com um “dom” — pelo menos é o que outras pessoas gostam de pensar. Será verdade? Ou será que você apenas sentiu atração por certa forma de arte e treinou muito, muito mesmo? Enquanto o artesão fabrica itens “mundanos”, o artista produz entretenimento, alimento para o coração e a alma. Talvez você apenas saiba entoar belas canções, aprendidas na infância com pais amorosos, ou ouvindo fadas na floresta. Ou talvez seja um ator ou dançarino formado em alguma escola de artes prestigiada.',
      itens: ['Estojo de disfarces ou um instrumento musical a sua escolha.'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atuação, TabelaPericiasEnum.Enganação],
        poderes: [TabelaPoderesEnum.Atraente, TabelaPoderesEnum.DomArtistico,TabelaPoderesEnum.Sortudo, TabelaPoderesEnum.Torcida]
      },
      imagem: "./img/origens/artista.png",
    } ,
    {
      nome: 'Assistente de Laboratório',
      descricao: 'Você atuou como ajudante para um alquimista, inventor ou mago. Costumava tomar notas, limpar o laboratório, arrumar as ferramentas, vasculhar mercados em busca de ingredientes exóticos, recapturar a aberração antinatural que fugiu da jaula... enfim, não era o trabalho mais fácil, limpo ou seguro do mundo. Exposição prolongada a substâncias e experimentos perigosos talvez tenham prejudicado sua saúde (ou despertado suas habilidades de classe...).',
      itens: ['Instrumentos de Ofício (alquimista).'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Ofício ,TabelaPericiasEnum.Misticismo],
        poderes: [TabelaPoderesEnum.EsseCheiro ,TabelaPoderesEnum.Veneficio,]
        //  "um poder da Tormenta a sua escolha"
      },
      imagem: "./img/origens/assistente.png",
    } ,
    {
      nome: 'Batedor',
      descricao: 'Seja conduzindo caravanas através dos reinos, rastreando inimigos nos campos de batalha ou guiando exploradores nas vastidões selvagens, você aprendeu a achar caminhos e dirigir outros com segurança. Batedores podem surgir nas tribos mais primitivas, acompanhando grupos de caça, como profissionais sofisticados nas grandes cidades e forças militares ou ainda na perigosa atividade de caça-recompensas. Pouco importando a carreira que adotou mais tarde, como aventureiro, seu antigo treino acaba se revelando útil em numerosas ocasiões.',
      itens: ['Barraca', 'equipamento de viagem', 'uma arma simples ou marcial de ataque à distância'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Furtividade, TabelaPericiasEnum.Percepção, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.AProvaDeTudo, TabelaPoderesEnum.EstiloDeDisparo, TabelaPoderesEnum.SentidosAguçados]
      },
      imagem: "./img/origens/batedor.png",
    } ,
    {
      nome: 'Capanga',
      descricao: 'Agilidade e esperteza são importantes no mundo do crime, mas não são tudo; às vezes é preciso esmurrar alguém. Por ser grande, forte ou mal-encarado, você acabou trabalhando como músculos para algum bandido, ou integrando um bando, quadrilha ou guilda de ladrões. Talvez você não fosse muito bom em bater carteiras nas ruas de Ahlen, mas sabia erguer alguém pelo tornozelo e sacudir até as moedas caírem. Hoje, como aventureiro, você provavelmente deixou essa época para trás — pelo menos até que alguém precise ser “convencido” a colaborar.',
      itens: ['Tatuagem ou outro adereço de sua gangue (+1 em Intimidação)', "uma arma simples corpo a corpo"],
      beneficios: {
        pericias: [TabelaPericiasEnum.Luta, TabelaPericiasEnum.Intimidação],
        poderes: [TabelaPoderesEnum.Confissao,]
        // "um poder de combate a sua escolha"
      },
      imagem: "./img/origens/capanga.png",
    } ,
    {
      nome: 'Charlatão',
      descricao: 'Você sempre teve talento para resolver problemas com conversa, sincera ou nem tanto. Talvez tenha aprendido andando com más companhias. Por ser pequeno e fraco em meio a guerreiros truculentos, talvez fosse pura questão de sobrevivência. Ou foi tocado por Hyninn, Sszzaas ou outra entidade traiçoeira. Seja como for, após um pouco de diálogo, você percebe o que as pessoas mais querem ou temem, usando palavras para vencer obstáculos tão facilmente quanto espadas e magias. Ou melhor.',
      itens: ['Estojo de disfarces',"joia falsificada (valor aparente de T$ 100, sem valor real)"],
      beneficios: {
        pericias: [TabelaPericiasEnum.Enganação,TabelaPericiasEnum.Jogatina],
        poderes: [TabelaPoderesEnum.AlpinistaSocial,TabelaPoderesEnum.AparênciaInofensiva,TabelaPoderesEnum.Sortudo]
      },
      imagem: "./img/origens/charlatao.png",
    } ,
    {
      nome: 'Circense',
      descricao: 'Você treinou acrobacia, malabarismo, mágica ou outra forma de arte circense. Talvez tenha aprendido sozinho, durante as brincadeiras de infância. Talvez tenha sido ensinado por um ente querido, tornando essa arte uma forte ligação com seu passado. Ou ainda, é possível que tenha sido forçado a aprender seus truques para sobreviver nas ruas. De qualquer forma, são aptidões que podem ser úteis em suas aventuras.',
      itens: ['Três bolas coloridas para malabarismo (+1 em Atuação).'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Acrobacia,TabelaPericiasEnum.Atuação,TabelaPericiasEnum.Reflexos],
        poderes: [TabelaPoderesEnum.Acrobatico,TabelaPoderesEnum.Torcida,TabelaPoderesEnum.TruqueDeMagica]
      },
      imagem: "./img/origens/circense.png",
    } ,
    {
      nome: 'Criminoso',
      descricao: 'Fazer o bem é bonito, mas não enche barriga — pelo menos, assim você foi ensinado. Por necessidade, ambição ou apenas sem conhecer outra vida, você foi um bandido durante boa parte da juventude. Furtava bolsas, trapaceava em jogos de taverna, emboscava viajantes nas estradas ou até aceitava contratos para matar. Agia sozinho, com seu próprio bando, pertencia a uma guilda de ladrões. Tornar-se aventureiro talvez seja uma forma de expiar por seus crimes, ou apenas o passo seguinte; em vez de mercadores, roubar tesouros de dragões!',
      itens: ['Estojo de disfarces ou gazua'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Enganação, TabelaPericiasEnum.Furtividade, TabelaPericiasEnum.Ladinagem],
        poderes: [TabelaPoderesEnum.Punguista, TabelaPoderesEnum.Veneficio]
      },
      imagem: "./img/origens/criminoso.png",
    } ,
    {
      nome: 'Curandeiro',
      descricao: 'Que bom seria se a cura milagrosa dos clérigos estivesse ao alcance de todos! Talvez você tenha sido ajudante do curandeiro da vila, testemunhando quando ele tratava doenças e lesões sem conjurar qualquer magia. Ou teve um estudo formal e sofisticado de medicina no Colégio Real de Médicos em Salistick. De qualquer modo, você é treinado em curar com remédios e tratamentos naturais — algo sempre útil, mesmo quando há um clérigo por perto.',
      itens: ['Bálsamo restaurador x2', 'maleta de medicamentos'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Cura, TabelaPericiasEnum.Vontade],
        poderes: [TabelaPoderesEnum.Medicina,TabelaPoderesEnum.MedicoDeCampo, TabelaPoderesEnum.Veneficio]
      },
      imagem: "./img/origens/curandeiro.png",
    } ,
    {
      nome: 'Eremita',
      descricao: 'Você passou parte da vida isolado, afastado da sociedade. Foi banido ainda criança, por nascer lefou ou com alguma deformidade da Tormenta. Ouviu um chamado dos deuses, buscando o isolamento para meditar sobre seu significado. Viveu enclausurado em um mosteiro, mantendo contato apenas com monges silenciosos. Ou foi praticante de artes arcanas proibidas, mantendo-se longe de olhares curiosos. A vida simples o tornou forte de corpo e espírito. Mas, em algum momento, você decidiu que bastava — ou teve sua tranquilidade interrompida.',
      itens: ['Barraca', 'equipamento de viagem'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Misticismo, TabelaPericiasEnum.Religião, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.BuscaInterior, TabelaPoderesEnum.LoboSolitario]
      },
      imagem: "./img/origens/eremita.png",
    } ,
    {
      nome: 'Escravo',
      descricao: 'De minotauros odiosos no Império de Tauron aos cruéis mestres subterrâneos de Trollkyrka, várias culturas praticam a escravidão. Você já nasceu escravo, fez parte de um povo derrotado na guerra ou foi capturado em alguma rua escura para depois despertar na jaula, em algum mercado clandestino? Encontrou uma chance de escapar, tornando-se agora um escravo foragido? Recebeu a liberdade como recompensa por realizar um grande favor a seu algoz? Foi resgatado por aventureiros que agora se tornaram sua nova família?',
      itens: ['Algemas', 'uma ferramenta pesada (mesmas estatísticas de uma maça)'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atletismo, TabelaPericiasEnum.Fortitude,TabelaPericiasEnum.Furtividade],
        poderes: [TabelaPoderesEnum.DesejoDeLiberdade, TabelaPoderesEnum.Vitalidade]
      },
      imagem: "./img/origens/escravo.png",
    } ,
    {
      nome: 'Estudioso',
      descricao: 'Não importa se você já nasceu apaixonado por certo assunto, testemunhou um evento incrível que atiçou sua curiosidade ou se viu forçado a estudar por imposição familiar. Longos anos de sua vida foram gastos em meio a livros e pergaminhos. Da engenharia dos anões à geopolítica do Reinado, das táticas militares puristas aos sistemas de conjuração da Academia Arcana, da anatomia dos dragões aos enigmas cósmicos da Tormenta... em Arton não faltam campos a conquistar, segredos a desvendar. Agora, como aventureiro, você tem a chance de vivenciar aquilo que aprendeu e também auxiliar o grupo com o fruto de seus estudos.',
      itens: ['Coleção de livros (+1 em Conhecimento, Guerra, Misticismo ou Nobreza, a sua escolha)'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Conhecimento, TabelaPericiasEnum.Guerra, TabelaPericiasEnum.Misticismo],
        poderes: [TabelaPoderesEnum.AparênciaInofensiva, TabelaPoderesEnum.PalpiteFundamentado]
      },
      imagem: "./img/origens/estudioso.png",
    } ,
    {
      nome: 'Fazendeiro',
      descricao: 'Boa parte da população de Arton jamais conheceu outro modo de viver. Em algum lugar na perigosa transição entre os ermos e as cidades, você trabalhou duro em campos e fazendas. Cultivando a terra ou criando animais, viveu longos anos em contato com a natureza, orando e trabalhando por boas colheitas ou gado saudável, só ocasionalmente visitando povoados para negociar sua produção. Por que essa vida tranquila acabou? Sua família foi assassinada por goblins? Sua fazenda foi devastada por um dragão? Ou você apenas foi atraído pelo chamado da aventura?',
      itens: ['Carroça','uma ferramenta agrícola (mesmas estatísticas de uma lança)','10 rações de viagem','um animal não combativo (como uma galinha, porco ou ovelha)'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Adestramento, TabelaPericiasEnum.Cavalgar, TabelaPericiasEnum.Ofício, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.AguaNoFeijao, TabelaPoderesEnum.Ginete]
      },
      imagem: "./img/origens/fazendeiro.png",
    } ,
    {
      nome: 'Forasteiro',
      descricao: 'Você veio de longe. Sua cultura nativa é quase ou totalmente desconhecida no Reinado, tornando-o uma figura exótica, de hábitos estranhos. Você pertence a uma tribo perdida nas Montanhas Sanguinárias? Nasceu em uma bela cidade de cúpulas douradas no Deserto da Perdição? Navegou em navios audazes desde os Reinos de Moreania? Talvez você até tenha chegado de outro mundo, através de algum portal mágico. Será que conseguiu ajustar-se a este Reinado, agora chamando-o de lar? Ou procura até hoje o caminho de volta para casa?',
      itens: ['Equipamento de viagem', 'instrumento musical exótico (+1 em uma perícia de Carisma aprovada pelo mestre)', 'traje estrangeiro'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Cavalgar, TabelaPericiasEnum.Pilotagem, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.CulturaExotica, TabelaPoderesEnum.LoboSolitario]
      },
      imagem: "./img/origens/forasteiro.png",
    } ,
    {
      nome: 'Gladiador',
      descricao: 'Combates de arena são um entretenimento popular em Arton — a ponto de atrair muitos jovens praticantes. Podem ser combates até a morte ou apenas encenações elaboradas ou ainda corridas de cavalo, arquearia e outros esportes menos sangrentos. Você se envolveu nesse mundo glamoroso por ser tradição em sua família, por admirar algum gladiador renomado ou apenas por sede de fama e fortuna. Um evento traumático, uma desilusão ou o puro tédio levou você a abandonar as arenas e aplausos, usando sua experiência em torneios para viver aventuras.',
      itens: ['Uma arma marcial ou exótica', 'um item sem valor recebido de um admirador'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atuação, TabelaPericiasEnum.Luta],
        poderes: [TabelaPoderesEnum.Atraente, TabelaPoderesEnum.PaoECirco,TabelaPoderesEnum.Torcida,]
        //  'um poder de combate a sua escolha'
      },
      imagem: "./img/origens/gladiador.png",
    } ,
    {
      nome: 'Guarda',
      descricao: 'Você atuou como agente da lei em uma vila ou cidade. Nem de longe uma profissão tão glamorosa ou emocionante quanto parece; boa parte de seu trabalho resumia-se a guardar um portão, fazer rondas tediosas ou recolher bêbados em tavernas. Pelo menos você recebeu algum treino em investigação e combate. Também tem consigo alguma boa arma, que “esqueceu” de devolver quando abandonou a milícia para se tornar aventureiro.',
      itens: ['Apito', 'insígnia da milícia', 'uma arma marcial'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Investigação, TabelaPericiasEnum.Luta, TabelaPericiasEnum.Percepção],
        poderes: [TabelaPoderesEnum.Detetive, TabelaPoderesEnum.Investigador,]
        //  'um poder de combate a sua escolha'
      },
      imagem: "./img/origens/guarda.png",
    } ,
    {
      nome: 'Herdeiro',
      descricao: 'Você pertence a uma linhagem de nobres, mercadores, conjuradores, acadêmicos, assassinos, ou outra atividade tradicional em sua família — tão tradicional que, de você, não se espera outra coisa. Pode ser uma longa e antiquíssima ascendência, traçada até antes da Grande Batalha, ou você apenas é filho de uma importante personalidade. Talvez tenha nascido em alguma ordem de cavalaria em Bielefeld, ou uma influente estirpe da nobreza de Deheon, ou como filho de um célebre arquimago com planos de enviá-lo à Academia Arcana, ou até cresceu em um culto familiar secreto a um deus maligno. Graças a essa herança, recebeu treino e equipamento adequados. Mas você pretende mesmo seguir esse caminho?',
      itens: ['Um símbolo de sua herança, como um anel de sinete ou manto cerimonial. Enquanto estiver com esse item, você pode ser reconhecido por sua descendência, o que pode ser bom... ou não!'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Misticismo, TabelaPericiasEnum.Nobreza, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.Comandar, TabelaPoderesEnum.Heranca]
      },
      imagem: "./img/origens/herdeiro.png",
    } ,
    {
      nome: 'Herói Camponês',
      descricao: 'Quando o povoado foi atacado por goblins, você empunhou o forcado para expulsá-los. Quando o estábulo pegou fogo, você se arriscou para salvar todos os animais. Quando todos temiam a mansão assombrada na colina, você encontrou a carta de amor perdida que trouxe descanso à alma torturada. Você era o campeão local, amado pelo povo, mas também destinado a feitos maiores. Houve comoção quando você partiu para uma vida de aventuras, mas ninguém deixou de orar por seu sucesso. Talvez você até tenha sido presenteado com alguma arma ou item há tempos guardado no povoado.',
      itens: ['Instrumentos de ofício ou uma arma simples','traje de plebeu'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Adestramento, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.CoracaoHeroico, TabelaPoderesEnum.Sortudo, TabelaPoderesEnum.SurtoHeroico,TabelaPoderesEnum.Torcida]
      },
      imagem: "./img/origens/heroi.png",
    } ,
    {
      nome: 'Marujo',
      descricao: "Você foi tripulante em uma embarcação — um barco pesqueiro, galé pirata, caravela exploradora, trirreme dos minotauros... — no Mar Negro, no Mar do Dragão Rei ou mesmo ao longo do imenso Rio dos Deuses. Você também pode ter trabalhado em um veículo exótico, como um dirigível goblin, ou mesmo em uma embarcação mágica, como as naves vivas gog'magogue que viajam entre mundos!",
      itens: ['T$ 2d6 (seu último salário)', 'corda'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atletismo, TabelaPericiasEnum.Jogatina, TabelaPericiasEnum.Pilotagem],
        poderes: [TabelaPoderesEnum.Acrobatico,TabelaPoderesEnum.PassagemDeNavio]
      },
      imagem: "./img/origens/marujo.png",
    } ,
    {
      nome: 'Mateiro',
      descricao: 'Nem todos em Arton vivem em cidades confortavelmente abastecidas por fazendeiros, mineiros ou pescadores — muitas comunidades ainda obtêm sustento através da caça. Você aprendeu cedo a abater animais selvagens para colocar comida na mesa, ou como esporte de gosto duvidoso. Se você caça com reverência a Allihanna ou apenas coleciona troféus com orgulho, a escolha é sua. De qualquer forma, para alguém habituado a flechar cervos e colocar armadilhas para coelhos, combater ogros, demônios e dragões seria apenas o passo seguinte.',
      itens: ['Arco curto', 'barraca', 'equipamento de viagem', '20 flechas'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atletismo, TabelaPericiasEnum.Furtividade, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.LoboSolitario, TabelaPoderesEnum.SentidosAguçados, TabelaPoderesEnum.VendedorDeCarcacas]
      },
      imagem: "./img/origens/mateiro.png",
    } ,
    {
      nome: 'Membro de Guilda',
      descricao: 'Você foi, ou ainda é, membro atuante em uma grande guilda — uma associação de artesãos, mercadores, magos, criminosos ou mesmo aventureiros. A guilda forneceu o treinamento e equipamento necessários para suas atividades, esperando que você seja útil em troca. Você se manteve fiel a seus patronos, cumprindo missões e colhendo os benefícios de pertencer a uma vasta organização? Ou deixou essa vida para trás, sendo agora desprezado ou até caçado por seus antigos mestres?',
      itens: ['Gazua ou instrumentos de ofício'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Diplomacia, TabelaPericiasEnum.Enganação, TabelaPericiasEnum.Misticismo, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.FocoEmPericia, TabelaPoderesEnum.RedeDeContatos]
      },
      imagem: "./img/origens/membro.png",
    } ,
    {
      nome: 'Mercador',
      descricao: 'Seguindo uma tradição de família, após herdar um estabelecimento ou apenas como um jovem empregado, você atuou como comerciante — pelo menos por algum tempo. Uma tenda modesta em algum grande mercado urbano? Uma caravana mercante cruzando o Reinado? Um belo bazar na prestigiada cidade voadora de Vectora? Após alguns anos de negociações e jornadas (nem tão tranquilas quanto outros imaginam), você talvez não tenha ficado rico, mas reuniu algum equipamento e dinheiro suficientes para começar carreira como aventureiro.',
      itens: ['Carroça', 'trobo', 'mercadorias para vender no valor de T$ 100.'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Diplomacia, TabelaPericiasEnum.Intuição, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.Negociacao, TabelaPoderesEnum.Proficiencia, TabelaPoderesEnum.Sortudo]
      },
      imagem: "./img/origens/mercador.png",
    } ,
    {
      nome: 'Minerador',
      descricao: 'Ser aventureiro é a profissão mais perigosa de todas; ser mineiro, talvez a segunda mais perigosa. Você mergulhou nas profundezas da terra atrás de metais necessários à civilização ou riquezas em gemas preciosas. Enquanto humanos e outras raças consideram essa vida um pesadelo, quase todos os anões acreditam ser a mais feliz das carreiras. A escuridão e o sufocamento dos subterrâneos talvez tenham sido assustadores, mas trouxeram a você bens materiais valiosos, bem como informação profunda (sem trocadilhos) sobre túneis e masmorras.',
      itens: ['Gemas preciosas no valor de T$ 100', 'picareta'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atletismo, TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.AtaquePoderoso,TabelaPoderesEnum.Escavador,TabelaPoderesEnum.SentidosAguçados]
      },
      imagem: "./img/origens/minerador.png",
    } ,
    {
      nome: 'Nômade',
      descricao: 'Até onde se lembra, você nunca pertenceu a um só lugar. Sua família viajava constantemente, como parte de alguma grande caravana comercial, peregrinação religiosa ou algum povo primitivo que nunca praticou agricultura. Ou talvez suas razões para viajar sejam bastante diferentes e pessoais — após a quase extinção de seu povo, muitos elfos temem criar raízes, enquanto a deusa Valkaria exige que seus devotos se mantenham sempre em viagem. Para você, habituado às estradas e sem laços com nenhuma terra, bastou um pequeno passo para se tornar aventureiro.',
      itens: ['Bordão', 'equipamento de viagem'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Cavalgar, TabelaPericiasEnum.Pilotagem, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.LoboSolitario,TabelaPoderesEnum.Mochileiro, TabelaPoderesEnum.SentidosAguçados]
      },
      imagem: "./img/origens/nomade.png",
    } ,
    {
      nome: 'Pivete',
      descricao: 'Você era uma criança de rua. Não conheceu seus pais, foi abandonado por eles ou fugiu para evitar maus tratos. Sem muitas escolhas na vida, aprendeu cedo a sobreviver em grandes cidades, pedindo esmolas, roubando bolsas ou cumprindo pequenas tarefas para bandidos. Tornar-se aventureiro não parecia apenas um jeito de ficar rico e famoso, mas também a única chance de uma vida melhor. Talvez você não tenha as armaduras e mantos chiques de seus companheiros, mas sabe se virar nas ruas melhor que ninguém.',
      itens: ['Gazua', 'traje de plebeu', 'um animal urbano(como um cão, gato, rato ou pombo)'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Furtividade, TabelaPericiasEnum.Iniciativa, TabelaPericiasEnum.Ladinagem],
        poderes: [TabelaPoderesEnum.Acrobatico,TabelaPoderesEnum.AparênciaInofensiva, TabelaPoderesEnum.QuebraGalho]
      },
      imagem: "./img/origens/pivete.png",
    } ,
    {
      nome: 'Refugiado',
      descricao: 'Neste mundo assolado por tantas guerras e tragédias, você acabou sobrevivendo a alguma delas. Sendo elfo, estava presente durante a sofrida queda de Lenórienn. Escapou à destruição de Tamu-ra. Teve sorte em sair do caminho de Mestre Arsenal, conseguiu esconder-se das forças puristas ou testemunhou a chegada da Flecha de Fogo e viveu para contar a história. Trauma e privações talvez tenham tornado você amargo, sombrio, embrutecido... mas também um sobrevivente tenaz, acostumado a uma vida perigosa.',
      itens: ['Um item estrangeiro de até T$ 100'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Reflexos, TabelaPericiasEnum.Vontade],
        poderes: [TabelaPoderesEnum.Estoico, TabelaPoderesEnum.VontadeDeFerro]
      },
      imagem: "./img/origens/refugiado.png",
    } ,
    {
      nome: 'Seguidor',
      descricao: 'Você não nasceu herói, mas viveu algum tempo na companhia de um. Pode ter sido escudeiro de um cavaleiro de Khalmyr, garoto de recados para um ladino, criado de um nobre... enfim, um ajudante para um aventureiro de verdade. Durante esse tempo adquiriu aprendizado valioso, testemunhou eventos incríveis, mas você não seria um seguidor para sempre. Como ocorreu a separação? Você apenas disse adeus e trilhou seu próprio caminho? Seu mestre desapareceu de forma misteriosa ou foi assassinado diante de seus olhos? Você ficou com parte de seus itens, como presente ou lembrança?',
      itens: ['Um item recebido de seu mestre de até T$ 100'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Adestramento, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.AntigoMestre, TabelaPoderesEnum.Proficiencia, TabelaPoderesEnum.SurtoHeroico]
      },
      imagem: "./img/origens/seguidor.png",
    } ,
    {
      nome: 'Selvagem',
      descricao: 'Você nasceu em uma tribo de bárbaros incultos ou tem uma origem bem mais exótica. Perdeu-se dos pais verdadeiros em alguma região remota, sobrevivendo graças aos cuidados de um eremita, ou criado por animais, ou por pura bondade dos deuses. Você pode nem mesmo ter nascido de pais humanoides — talvez seja cria de dragões, demônios ou deuses, com poderes a serem revelados no momento certo. Será que você ainda teme a civilização, assustando-se com uma simples fogueira? Ou já aprendeu algumas coisas, graças a seus novos companheiros?',
      itens: ['Uma arma simples', 'um pequeno animal de estimação como um pássaro ou esquilo'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Percepção, TabelaPericiasEnum.Reflexos, TabelaPericiasEnum.Sobrevivência],
        poderes: [TabelaPoderesEnum.LoboSolitario, TabelaPoderesEnum.VidaRustica, TabelaPoderesEnum.Vitalidade]
      },
      imagem: "./img/origens/selvagem.png",
    } ,
    {
      nome: 'Soldado',
      descricao: 'Deheon, Bielefeld, A Supremacia Purista, em Arton existem vastas forças militares. Ainda jovem, você se alistou (ou foi convocado) como soldado em um grande exército. Independentemente de sua função exata dentro da máquina de guerra — infantaria, cavalaria, arqueiro, cozinheiro... —, você recebeu treinamento em combate e equipamento decente. Mas em alguma ocasião você abandonou a vida militar para se tornar aventureiro. Foi dispensado com honras, após uma grande façanha? Sobreviveu a um conflito sangrento? Desertou antes de um massacre?',
      itens: ['Uma arma marcial', 'um uniforme militar', 'uma insígnia de seu exército'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Fortitude, TabelaPericiasEnum.Guerra, TabelaPericiasEnum.Luta, TabelaPericiasEnum.Pontaria],
        poderes: [TabelaPoderesEnum.InfluenciaMilitar,]
        // 'um poder de combate a sua escolha'
      },
      imagem: "./img/origens/soldado.png",
    } ,
    {
      nome: 'Taverneiro',
      descricao: 'Não é incomum que heróis aposentados se tornem donos de tavernas ou estalagens, mas o contrário também pode ocorrer. Você foi dono, filho do dono ou empregado em algum lugar frequentado por aventureiros — esses tipos sempre cheios de ouro e bravatas, atiçando sua ambição. Claro, eles nem sempre mencionam os horrores, amputações e mortes! Ainda assim, parece bem melhor que a vida atrás do balcão, limpando canecas sujas. Você ouviu todas as grandes histórias, trocou socos em algumas brigas e até ganhou uma lembrança ou outra de algum herói bêbado.',
      itens: ['Rolo de macarrão ou martelo de carne (mesmas estatísticas de uma clava)', 'uma panela', 'um avental', 'uma caneca e um pano sujo'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Diplomacia, TabelaPericiasEnum.Jogatina, TabelaPericiasEnum.Ofício],
        poderes: [TabelaPoderesEnum.Gororoba, TabelaPoderesEnum.Proficiencia, TabelaPoderesEnum.Vitalidade]
      },
      imagem: "./img/origens/taverneiro.png",
    } ,
    {
      nome: 'Trabalhador',
      descricao: 'Nenhum glamour aqui, apenas trabalho braçal pesado. De origem humilde, sem grandes chances na vida, você trabalhou duro desde muito jovem. Transportou pedras na construção de templos e castelos, carregou sacas de grãos em fazendas, empilhou cargas em portos, puxou arado feito um animal de tração. Talvez sua vida tenha sido um pouco melhor, como servo em um palácio. Ou muito pior, arrastando ou queimando corpos em campos de batalha. Não é surpresa que a carreira como aventureiro, mesmo perigosa, tenha parecido muito mais atraente.',
      itens: ['Uma ferramenta pesada (mesmas estatísticas de uma maça ou lança, a sua escolha)'],
      beneficios: {
        pericias: [TabelaPericiasEnum.Atletismo, TabelaPericiasEnum.Fortitude],
        poderes: [TabelaPoderesEnum.Atletico, TabelaPoderesEnum.Esforcado]
      },
      imagem: "./img/origens/trabalhador.png",
    } ,
]
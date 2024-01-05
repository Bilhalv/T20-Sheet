// React imports
import { useState } from "react";
import FlipMove from "react-flip-move";

// Chakra UI imports
import { IconButton } from "@chakra-ui/react";

// Lucide React imports
import { Eraser } from "lucide-react";

// Component imports
import useCustomToast from "../components/Geral/Toasted";
import { RolarDado } from "../components/Geral/RolarDado";
import addHistorico from "../components/Geral/addHistorico";
import ShowNPC from "../components/Mestre/ShowNpc";
import Condicoes from "../components/Mestre/Condicoes";
import AddNpc from "../components/Mestre/AddNpc";
import Acoes from "../components/Mestre/Acoes";
import Players from "../components/Mestre/Players";
import TurnOrder from "../components/Mestre/TurnOrder";
import Pericias from "../components/Mestre/Pericias";

// Class imports
import NPC from "../classes/Construtores/Mestre/NPC";
import { Dado } from "../classes/Construtores/Dado";
import Player from "../classes/Construtores/Mestre/Player";
import { TesouroTabela } from "../classes/Tabelas/Mestre/Tesouro";
import { TabelaPlayer } from "../classes/Tabelas/Mestre/Players";

export class NPCShown extends NPC {
  id: number = 0;
  pvAtual?: number = 0;
  pmAtual?: number = 0;
  tesouroFinal: string[] = [];
}

export default function Mestre() {
  const { showCustomToast } = useCustomToast();

  const trash = (id: number) => {
    if (!willDelete.will && willDelete.id !== id) {
      setWillDelete({ will: true, id: id });
      return;
    }
    const npcAtual = Npcs.find((e) => e.id === id);
    const npcsFiltrados = Npcs.filter((e) => e.id !== id);
    setNpcs(npcsFiltrados);
    localStorage.setItem("npcs", JSON.stringify(npcsFiltrados));
    showCustomToast({
      title: `NPC removido!`,
      desc: `${npcAtual?.nome} foi removido da lista de NPCs!`,
      duration: 5000,
    });
  };

  const rolar = (
    e: number,
    nome: string,
    tipo: "Atributo" | "Pericia" | "Ataque"
  ) => {
    const dado = RolarDado({
      lados: 20,
      qtd: 1,
      mod: e,
    });
    const rolagem: Dado = {
      tipo: tipo,
      nome: nome,
      dados: dado.dados,
      bonus: e,
      resultado: dado.total,
      date: new Date(),
    };
    showCustomToast({
      title: `Rolando...`,
      desc: `${nome} = ${e}`,
      status: "loading",
      onCloseComplete() {
        addHistorico({
          dado: rolagem,
        });
        showCustomToast({
          title: `Rolado!`,
          desc: `${nome}: ${dado.total} (${dado.dados}+${e})`,
          duration: 5000,
        });
      },
    });
  };

  const ataqueRoll = (
    nome: string,
    mod: number,
    dado: string,
    modDano: number,
    crit: string
  ) => {
    let qtdDano = dado.split("d")[0];
    let ladosDano = dado.split("d")[1];
    let margemCrit = Number(crit.split("/")[0]);
    let multCrit = Number(crit.split("/")[1]);
    const acerto = RolarDado({
      lados: 20,
      qtd: 1,
      mod: mod,
    });
    const multiplicador = acerto.dados[0] >= margemCrit ? multCrit : 1;
    const dano = RolarDado({
      lados: Number(ladosDano),
      qtd: Number(qtdDano) * multiplicador,
      mod: modDano,
    });
    const rolagem: Dado = {
      tipo: "Ataque",
      nome: nome,
      dados: acerto.dados,
      bonus: mod,
      resultado: acerto.total,
      dano: dano.total,
      dadoDano: dado,
      dadosDano: dano.dados,
      date: new Date(),
    };
    showCustomToast({
      title: `Rolando...`,
      desc: `${nome} = ${mod}`,
      status: "loading",
      onCloseComplete() {
        addHistorico({
          dado: rolagem,
        });
        showCustomToast({
          title: `Rolado!`,
          desc: `${nome}: ${acerto.total} (${acerto.dados[0]}+${mod}) e ${
            dano.total
          } (${dano.dados.join("+")}+${modDano})`,
          duration: 5000,
        });
      },
    });
  };

  const [Npcs, setNpcs] = useState<NPCShown[]>(
    JSON.parse(localStorage.getItem("npcs") || "[]")
  );
  const [willDelete, setWillDelete] = useState({
    will: false,
    id: -1,
  });
  const reRollTesouro = (npc: NPCShown) => {
    let npcTemp = npc;
    const [roll1, roll2] = RolarDado({
      lados: 100,
      qtd: 2,
      mod: 0,
    }).dados;
    let itens =
      TesouroTabela.find((e) => e.nd === npc.nd)?.tabelaItem.find(
        (e) => e.min < roll1 && e.max > roll1
      )?.value || "Nenhum";
    let dinheiro =
      TesouroTabela.find((e) => e.nd === npc.nd)?.tabelaDinheiro.find(
        (e) => e.min < roll2 && e.max > roll2
      )?.value || "Nenhum";
    if (npc.tesouro === "Dobro") {
      const [roll3, roll4] = RolarDado({
        lados: 100,
        qtd: 2,
        mod: 0,
      }).dados;
      itens +=
        TesouroTabela.find((e) => e.nd === npc.nd)?.tabelaItem.find(
          (e) => e.min < roll3 && e.max > roll3
        )?.value || "Nenhum";
      dinheiro +=
        TesouroTabela.find((e) => e.nd === npc.nd)?.tabelaDinheiro.find(
          (e) => e.min < roll4 && e.max > roll4
        )?.value || "Nenhum";
    }
    showCustomToast({
      title: `Rolando...`,
      desc: `Rerolando tesouro de ${npc.nome}(${npc.id})`,
      status: "loading",
      onCloseComplete() {
        showCustomToast({
          title: `Rolado!`,
          desc: `Resultado: Itens: ${itens} e Dinheiro: ${dinheiro}`,
          duration: 5000,
        });
      },
    });
    npcTemp.tesouroFinal = [itens, dinheiro];
    const npcsLocal = JSON.parse(localStorage.getItem("npcs") || "[]");
    npcsLocal[npcsLocal.findIndex((e: NPCShown) => e.id === npc.id)] = npcTemp;
    localStorage.setItem("npcs", JSON.stringify(npcsLocal));
    setNpcs(npcsLocal);
  };

  const alterarStatus = (id: number, status: "PV" | "PM", toChange: string) => {
    const npcAtual = Npcs.find((e) => e.id === id) || Npcs[0];
    let numFinal = Number(toChange);
    if (status === "PV") {
      if (toChange.indexOf("+") > -1) {
        numFinal = (npcAtual.pvAtual || 0) + Number(toChange.replace("+", ""));
      } else if (toChange.indexOf("-") > -1) {
        numFinal = (npcAtual.pvAtual || 0) - Number(toChange.replace("-", ""));
      }
      npcAtual.pvAtual = numFinal;
    } else {
      if (toChange.indexOf("+") > -1) {
        numFinal = (npcAtual.pmAtual || 0) + Number(toChange.replace("+", ""));
      } else if (toChange.indexOf("-") > -1) {
        numFinal = (npcAtual.pmAtual || 0) - Number(toChange.replace("-", ""));
      }
      npcAtual.pmAtual = numFinal;
    }

    const npcsLocal = JSON.parse(localStorage.getItem("npcs") || "[]");
    npcsLocal[npcsLocal.findIndex((e: NPCShown) => e.id === npcAtual.id)] =
      npcAtual;
    localStorage.setItem("npcs", JSON.stringify(npcsLocal));
    setNpcs(npcsLocal);
  };

  const handleMove = (id: number, direction: "up" | "down") => {
    const npcAtual = Npcs.find((e) => e.id === id) || Npcs[0];
    const npcsLocal = JSON.parse(localStorage.getItem("npcs") || "[]");
    const index = npcsLocal.findIndex((e: NPCShown) => e.id === npcAtual.id);
    const indexToMove = direction === "up" ? index - 1 : index + 1;
    const npcToMove = npcsLocal[indexToMove];
    npcsLocal[indexToMove] = npcAtual;
    npcsLocal[index] = npcToMove;
    localStorage.setItem("npcs", JSON.stringify(npcsLocal));
    setNpcs(npcsLocal);
  };

  const resetar = () => {
    setWillDelete({ will: false, id: -1 });
  };

  if (localStorage.getItem("PlayersLista") === null)
    localStorage.setItem("PlayersLista", JSON.stringify(TabelaPlayer));
  const [PlayersLista, setPlayersLista] = useState<Player[]>(
    JSON.parse(localStorage.getItem("PlayersLista") || "[]")
  );
  return (
    <>
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full bg-cover p-4 flex flex-col gap-4">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 desktop:m-auto p-4 rounded-lg border-gray-500 shadow-lg mb-2">
          <div className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto font-tormenta flex desktop:justify-between justify-evenly items-center bg-white bg-opacity-25 sticky rounded-xl p-2 top-2 gap-2">
            <img
              className="h-8 w-fit hidden desktop:block"
              src="./img/bannerT20.png"
            />
            <h1 className="mx-auto desktop:block hidden">
              Gerenciador de fichas para os Players
            </h1>
            <div className="flex flex-col">
              <div>
                <TurnOrder />
              </div>
              <p className="text-center text-sm desktop:hidden">Turnos</p>
            </div>
            <div className="flex flex-col">
              <div>
                <Pericias />
              </div>
              <p className="text-center text-sm desktop:hidden">Perícias</p>
            </div>
            <div className="flex flex-col">
              <div>
                <IconButton
                  aria-label="Reset"
                  rounded={"full"}
                  bgColor={"red"}
                  color={"white"}
                  size="sm"
                  _hover={{
                    color: "red",
                    transform: "scale(1.1)",
                    zIndex: 1,
                    borderColor: "red",
                    bg: "transparent",
                    border: "2px solid",
                  }}
                  icon={<Eraser />}
                  onClick={() => {
                    const sure = window.confirm(
                      "Tem certeza que deseja resetar a lista de Players?"
                    );
                    if (!sure) {
                      showCustomToast({
                        status: "warning",
                        title: `Aviso!`,
                        desc: `A lista de Players não foi resetada!`,
                      });
                      return;
                    }
                    localStorage.setItem(
                      "PlayersLista",
                      JSON.stringify(TabelaPlayer)
                    );
                    setPlayersLista(TabelaPlayer);
                    showCustomToast({
                      status: "success",
                      title: `Sucesso!`,
                      desc: `Todos os Players foram resetados!`,
                    });
                  }}
                />
              </div>
              <p className="text-center text-sm desktop:hidden">Resetar</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3 justify-evenly mt-4">
            {PlayersLista.map((player) => (
              <Players player={player} setPlayersLista={setPlayersLista} />
            ))}
          </div>
        </article>
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 desktop:m-auto p-4 rounded-lg border-gray-500 shadow-lg">
          <div className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto font-tormenta flex justify-between items-center bg-white bg-opacity-25 sticky rounded-xl p-2 top-2 z-20">
            <div className="justify-between w-5/6 desktop:flex hidden">
              <img className="h-8 w-fit" src="./img/bannerT20.png" />
              <h1 className="mx-auto">Gerenciador de fichas para os npcs</h1>
            </div>
            <div className="flex desktop:hidden justify-evenly w-full">
              <div className="flex flex-col">
                <div>
                  <Condicoes />
                </div>
                <p className="text-center text-sm">Condições</p>
              </div>
              <div>
                <div>
                  <AddNpc
                    Npcs={Npcs}
                    setNpcs={setNpcs}
                    alterarStatus={alterarStatus}
                    handleMove={handleMove}
                    reRollTesouro={reRollTesouro}
                    ataqueRoll={ataqueRoll}
                    resetar={resetar}
                    rolar={rolar}
                  />
                </div>
                <p className="text-center text-sm">Adicionar</p>
              </div>
              <div>
                <div>
                  <Acoes />
                </div>
                <p className="text-center text-sm">Ações</p>
              </div>
              <div>
                <div>
                  <IconButton
                    aria-label="Clear"
                    rounded={"full"}
                    bgColor={"red"}
                    color={"white"}
                    size="sm"
                    _hover={{
                      color: "red",
                      transform: "scale(1.1)",
                      zIndex: 1,
                      borderColor: "red",
                      bg: "transparent",
                      border: "2px solid",
                    }}
                    icon={<Eraser />}
                    onClick={() => {
                      const sure = window.confirm(
                        "Tem certeza que deseja limpar a lista de NPCs?"
                      );
                      if (!sure) {
                        showCustomToast({
                          status: "warning",
                          title: `Lista de NPCs não limpa!`,
                          desc: `A lista de NPCs não foi limpa!`,
                        });
                        return;
                      }
                      localStorage.setItem("npcs", "[]");
                      setNpcs([]);
                      showCustomToast({
                        status: "success",
                        title: `Lista de NPCs limpa!`,
                        desc: `Todos os NPCs foram removidos da lista!`,
                      });
                    }}
                  />
                </div>
                <p className="text-center text-sm">Limpar</p>
              </div>
            </div>
            <div className="desktop:flex gap-2 hidden">
              <div className="flex gap-2 flex-col-reverse">
                <Condicoes />
                <AddNpc
                  Npcs={Npcs}
                  setNpcs={setNpcs}
                  alterarStatus={alterarStatus}
                  handleMove={handleMove}
                  reRollTesouro={reRollTesouro}
                  ataqueRoll={ataqueRoll}
                  resetar={resetar}
                  rolar={rolar}
                />
              </div>
              <div className="flex gap-2 flex-col-reverse">
                <Acoes />
                <IconButton
                  aria-label="Clear"
                  rounded={"full"}
                  bgColor={"red"}
                  color={"white"}
                  size="sm"
                  _hover={{
                    color: "red",
                    transform: "scale(1.1)",
                    zIndex: 1,
                    borderColor: "red",
                    bg: "transparent",
                    border: "2px solid",
                  }}
                  icon={<Eraser />}
                  onClick={() => {
                    const sure = window.confirm(
                      "Tem certeza que deseja limpar a lista de NPCs?"
                    );
                    if (!sure) {
                      showCustomToast({
                        status: "warning",
                        title: `Lista de NPCs não limpa!`,
                        desc: `A lista de NPCs não foi limpa!`,
                      });
                      return;
                    }
                    localStorage.setItem("npcs", "[]");
                    setNpcs([]);
                    showCustomToast({
                      status: "success",
                      title: `Lista de NPCs limpa!`,
                      desc: `Todos os NPCs foram removidos da lista!`,
                    });
                  }}
                />
              </div>
            </div>
          </div>
          {Npcs && (
            <FlipMove className="flex flex-wrap gap-3 justify-evenly mt-4">
              {Npcs.map((npc: NPCShown) => (
                <div key={npc.id}>
                  <ShowNPC
                    npc={npc}
                    rolar={rolar}
                    ataqueRoll={ataqueRoll}
                    trash={trash}
                    handleMove={handleMove}
                    setWillDelete={setWillDelete}
                    willDelete={willDelete}
                    isNotModal={true}
                    statusChange={alterarStatus}
                    teasureReroll={reRollTesouro}
                  />
                </div>
              ))}
            </FlipMove>
          )}
        </article>
      </body>
    </>
  );
}

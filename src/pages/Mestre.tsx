import Navbar from "../components/Geral/Navbar";
import { TabelaNPC } from "../classes/Tabelas/NPC";
import NPC, { ataque, poder } from "../classes/Construtores/NPC";
import { Magia } from "../classes/Construtores/Magia";
import useCustomToast from "../components/Geral/Toasted";
import addHistorico from "../components/Geral/addHistorico";
import { RolarDado } from "../components/Geral/RolarDado";
import { Dado } from "../classes/Construtores/Dado";
import { useState } from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  IconButton,
  Select,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverHeader,
  Input,
  Button,
} from "@chakra-ui/react";
import { FecharOnModal, ConfirmarOnModal } from "../components/Geral/Botoes";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  ChevronDown,
  ChevronUp,
  Eraser,
  MoveDownIcon,
  MoveUpIcon,
  Plus,
  Trash,
} from "lucide-react";
import { TesouroTabela } from "../classes/Tabelas/Tesouro";

class NPCShown extends NPC {
  id: number = 0;
  pvAtual?: number = 0;
  pmAtual?: number = 0;
  tesouroFinal: string[] = [];
}

function ShowNPC(
  npc: NPCShown,
  rolar: any,
  ataqueRoll: any,
  trash: any,
  trashHidden: boolean,
  teasureReroll: any,
  statusChange: any,
  handleMove: any,
  willDelete?: { will: boolean; id: number }
) {
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg w-[400px] h-fit">
      <div className="flex justify-between mb-[-40px] w-full">
        <IconButton
          isDisabled={
            JSON.parse(localStorage.getItem("npcs") || "[]").findIndex(
              (e: NPCShown) => {
                return e.id === npc.id;
              }
            ) === 0
          }
          aria-label="Up"
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
          icon={<ArrowLeft />}
          onClick={() => handleMove(npc.id, "up")}
        />
        <IconButton
          isDisabled={
            JSON.parse(localStorage.getItem("npcs") || "[]").findIndex(
              (e: NPCShown) => {
                return e.id === npc.id;
              }
            ) ===
            JSON.parse(localStorage.getItem("npcs") || "[]").length - 1
          }
          aria-label="Down"
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
          icon={<ArrowRight />}
          onClick={() => handleMove(npc.id, "down")}
        />
      </div>
      {npc.img && <img className="w-3/4 mx-auto" src={npc.img} />}
      <div className="flex flex-col gap-2">
        <Popover>
          <PopoverTrigger>
            <div className="bg-red-200 rounded-lg h-5 hover:transform hover:scale-95 hover:cursor-pointer transition-all">
              <div
                style={{
                  width: `${Math.floor(((npc.pvAtual || 0) * 100) / npc.pv)}%`,
                }}
                className={
                  "bg-red-600 h-5 rounded-lg transition-all text-center"
                }
              ></div>
              <p className="text-center mt-[-23px] text-white font-tormenta">
                {npc.pv} / {npc.pvAtual}
              </p>
            </div>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Alterando Vida atual</PopoverHeader>
            <PopoverBody>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const inputValue = (form.elements[0] as HTMLInputElement)
                    .value;
                  statusChange(npc.id, "PV", inputValue);
                }}
              >
                <Input
                  className="w-full"
                  defaultValue={npc.pvAtual}
                  autoFocus
                />
                <Button
                  className="w-full"
                  type="submit"
                  aria-label="Confirmar"
                  bgColor={"red"}
                  color={"white"}
                >
                  Confirmar
                </Button>
              </form>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {npc.pm > 0 && (
          <Popover>
            <PopoverTrigger>
              <div className="bg-blue-200 rounded-lg h-5 hover:transform hover:scale-95 hover:cursor-pointer transition-all">
                <div
                  style={{
                    width: `${Math.floor(
                      ((npc.pmAtual || 0) * 100) / npc.pm
                    )}%`,
                  }}
                  className={
                    "bg-blue-600 h-5 rounded-lg transition-all text-center"
                  }
                ></div>
                <p className="text-center mt-[-23px] text-white font-tormenta">
                  {npc.pm} / {npc.pmAtual}
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Alterando Mana atual</PopoverHeader>
              <PopoverBody>
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const inputValue = (form.elements[0] as HTMLInputElement)
                      .value;
                    statusChange(npc.id, "PM", inputValue);
                  }}
                >
                  <Input defaultValue={npc.pmAtual} autoFocus />
                  <Button type="submit" aria-label="Confirmar">
                    Confirmar
                  </Button>
                </form>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div className="flex justify-between font-bold text-red-700 font-tormenta text-2xl">
        <h2>{npc.nome}</h2>
        <h2>
          {trashHidden && (
            <IconButton
              aria-label="Trash"
              rounded={"full"}
              bgColor={"red"}
              color={"white"}
              size="sm"
              mr={2}
              _hover={{
                color: "red",
                transform: "scale(1.1)",
                zIndex: 1,
                borderColor: "red",
                bg: "transparent",
                border: "2px solid",
              }}
              icon={
                willDelete && willDelete.will && willDelete.id === npc.id ? (
                  <Check />
                ) : (
                  <Trash />
                )
              }
              onClick={() => {
                trash(npc.id);
              }}
            />
          )}
          ND {npc.nd}
        </h2>
      </div>
      <div className="italic text-sm w-full border-b-2 border-b-red-600 text-gray-600">
        <h1>
          {npc.raca} {npc.tamanho} ({npc.tipo})
        </h1>
      </div>
      <div className="text-sm">
        <div className="flex gap-3">
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.iniciativa, `Iniciativa`, "Pericia")}
          >
            <h1>
              <b className="text-red-600">Iniciativa </b>
              {npc.iniciativa > 0 && "+"}
              {npc.iniciativa}
            </h1>
          </a>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.percepcao, "Percepção", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Percepção </b>
              {npc.percepcao > 0 && "+"}
              {npc.percepcao}
            </h1>
          </a>
        </div>
        <div className="flex">
          <h1>
            <b className="text-red-600">Defesa</b> {npc.defesa}
          </h1>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.fort, "Fortitude", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Fort </b>
              {npc.fort > 0 && "+"}
              {npc.fort}
            </h1>
          </a>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.ref, "Reflexos", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Ref </b>
              {npc.ref > 0 && "+"}
              {npc.ref}
            </h1>
          </a>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.von, "Vontade", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Von </b>
              {npc.von > 0 && "+"}
              {npc.von}
            </h1>
          </a>
        </div>
        <h1>
          <b className="text-red-600">Resistências </b>
          {npc.resistencias?.join(", ") || "Nenhuma"}
        </h1>
        <h1 className="border-b-2 border-b-red-600">
          <b className="text-red-600">Deslocamento </b>
          {npc.deslocamento}m ({npc.deslocamento / 1.5}▢)
        </h1>
        {npc.corpoAcorpo && npc.corpoAcorpo?.length > 0 && (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <h1 className="text-red-600 font-bold">Corpo a Corpo </h1>
              {npc.corpoAcorpo?.map((arma: ataque) => (
                <div className="flex gap-2 ml-4">
                  <a
                    className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold"
                    onClick={() =>
                      ataqueRoll(
                        arma.nome,
                        arma.mod,
                        arma.dano,
                        arma.modDano,
                        arma.crit
                      )
                    }
                  >
                    {arma.nome}{" "}
                  </a>
                  <p>
                    {arma.mod > 0 && "+"}
                    {arma.mod}
                  </p>
                  <p>
                    ({arma.dano}+{arma.modDano})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.distancia && npc.distancia?.length > 0 && (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <h1 className="text-red-600 font-bold">Distância </h1>
              {npc.distancia?.map((arma: ataque) => (
                <div className="flex gap-2 ml-4">
                  <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold">
                    {arma.nome}{" "}
                  </a>
                  <p>
                    {arma.mod > 0 && "+"}
                    {arma.mod}
                  </p>
                  <p>
                    ({arma.dano}+{arma.modDano})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.magias && npc.magias?.length > 0 && (
          <div className="flex gap-2">
            <h1 className="text-red-600 font-bold">Magias </h1>
            <div>
              {npc.magias?.map((magia: Magia) => (
                <div className="flex gap-2">
                  <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold">
                    {magia.nome}{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.poderes && npc.poderes?.length > 0 && (
          <div>
            {npc.poderes?.map((poder: poder) => (
              <div className="flex gap-2">
                <p className="text-justify">
                  <b className="text-red-600">
                    {poder.nome}
                    &nbsp;{poder.execucao && `(${poder.execucao})`}
                  </b>
                  &nbsp;
                  {poder.descricao}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="border-y-2 border-y-red-600 flex justify-evenly">
          {[
            { nome: "Força", valor: npc.atributos.for },
            { nome: "Destreza", valor: npc.atributos.des },
            { nome: "Constituição", valor: npc.atributos.con },
            { nome: "Inteligência", valor: npc.atributos.int },
            { nome: "Sabedoria", valor: npc.atributos.sab },
            { nome: "Carisma", valor: npc.atributos.car },
          ].map((atributo) => (
            <a
              className="flex gap-2 items-center hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
              onClick={() => rolar(atributo.valor, atributo.nome, "Atributo")}
            >
              <h1 className="text-red-600 font-bold">
                {atributo.nome.substring(0, 3).toUpperCase()}
              </h1>
              <h1>
                {atributo.valor > 0 && "+"}
                {atributo.valor}
              </h1>
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-bold">Perícias </h1>
          <div className="flex flex-wrap gap-2">
            {npc.pericias?.map((pericia) => (
              <a
                className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
                onClick={() => rolar(pericia.mod, pericia.nome, "Pericia")}
              >
                <h1>
                  {pericia.nome}
                  {pericia.mod > 0 && "+"}
                  {pericia.mod}
                </h1>
              </a>
            ))}
          </div>
        </div>
        {npc.equipamentos && npc.equipamentos?.length > 0 && (
          <div className="flex gap-2">
            <h1 className="text-red-600 font-bold">Equipamentos </h1>
            <div className="flex flex-wrap gap-2">
              {npc.equipamentos?.map((equipamento) => (
                <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all">
                  <h1>{equipamento}</h1>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <p className="text-justify">
            {!npc.tesouroFinal.includes("") ? (
              <>
                <a
                  onClick={() => teasureReroll(npc)}
                  className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-600 font-bold mr-1"
                >
                  Tesouro
                </a>{" "}
                {!(
                  npc.tesouroFinal[0] === "Nenhum" &&
                  npc.tesouroFinal[1] === "Nenhum"
                ) ? (
                  <>
                    {npc.tesouroFinal[0] !== "Nenhum" && (
                      <>Itens: {npc.tesouroFinal[0]}</>
                    )}
                    {!npc.tesouroFinal.includes("Nenhum") && " | "}
                    {npc.tesouroFinal[1] !== "Nenhum" && (
                      <>Dinheiro: {npc.tesouroFinal[1]}</>
                    )}
                  </>
                ) : (
                  <>Nenhum</>
                )}
              </>
            ) : (
              <>
                <b className="text-red-600">Tesouro </b>
                {npc.tesouro}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
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
  const [isOpen, setIsOpen] = useState(false);
  const [npc, setNpc] = useState<NPCShown>();
  const [quantity, setQuantity] = useState<number>(1);
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

  return (
    <>
      <Navbar ficha={true} back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full bg-cover p-4">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 desktop:m-auto p-4 rounded-lg border-gray-500 shadow-lg">
          <div className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto font-tormenta flex justify-between align-middle">
            <IconButton
              icon={<Plus />}
              onClick={() => {
                setNpc(undefined);
                setQuantity(1);
                setWillDelete({ will: false, id: -1 });
                setIsOpen(true);
              }}
              aria-label="Add"
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
            />
            <h1>Gerenciador de fichas para os npcs</h1>
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
          {Npcs && (
            <div className="flex flex-wrap gap-3 justify-evenly mt-4">
              {Npcs.map((npc: NPCShown) =>
                ShowNPC(
                  npc,
                  rolar,
                  ataqueRoll,
                  trash,
                  true,
                  reRollTesouro,
                  alterarStatus,
                  handleMove,
                  willDelete
                )
              )}
            </div>
          )}
        </article>
      </body>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader>Adicionar NPC</ModalHeader>
          <ModalBody>
            <div className="flex">
              <Select
                w={"full"}
                onChange={(e) => {
                  const npcTemp =
                    TabelaNPC.find((y) => y.nome === e.target.value) ||
                    TabelaNPC[0];
                  let itens = "";
                  let dinheiro = "";
                  if (
                    npcTemp.tesouro === "Padrão" ||
                    npcTemp.tesouro === "Metade"
                  ) {
                    const [roll1, roll2] = RolarDado({
                      lados: 100,
                      qtd: 2,
                      mod: 0,
                    }).dados;
                    dinheiro =
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaDinheiro.find(
                        (e) => e.min < roll2 && e.max > roll2
                      )?.value || "Nenhum";
                    itens =
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaItem.find((e) => e.min < roll1 && e.max > roll1)
                        ?.value || "Nenhum";
                  } else if (npcTemp.tesouro === "Dobro") {
                    const [roll1, roll2, roll3, roll4] = RolarDado({
                      lados: 100,
                      qtd: 4,
                      mod: 0,
                    }).dados;
                    dinheiro =
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaDinheiro.find(
                        (e) => e.min < roll2 && e.max > roll2
                      )?.value || "Nenhum";
                    itens =
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaItem.find((e) => e.min < roll1 && e.max > roll1)
                        ?.value || "Nenhum";
                    itens += " e ";
                    dinheiro += " e ";
                    dinheiro +=
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaDinheiro.find(
                        (e) => e.min < roll4 && e.max > roll4
                      )?.value || "Nenhum";
                    itens +=
                      TesouroTabela.find(
                        (e) => e.nd === npcTemp.nd
                      )?.tabelaItem.find((e) => e.min < roll3 && e.max > roll3)
                        ?.value || "Nenhum";
                  }
                  setNpc({
                    ...npcTemp,
                    id: Npcs.length + 1,
                    pvAtual: npcTemp.pv,
                    pmAtual: npcTemp.pm,
                    tesouroFinal: [itens, dinheiro],
                  });
                }}
                placeholder="Selecione o NPC"
              >
                {TabelaNPC.map((npc) => (
                  <option key={npc.nome} value={npc.nome}>
                    {npc.nome}
                  </option>
                ))}
              </Select>
              <Select
                w={"25%"}
                onChange={(e) => setQuantity(Number(e.target.value))}
                placeholder="qtd"
              >
                {[...Array(10)].map((_, idx) => (
                  <option key={idx + 1} value={idx + 1}>
                    {idx + 1}
                  </option>
                ))}
              </Select>
            </div>
            {npc &&
              ShowNPC(
                npc,
                rolar,
                ataqueRoll,
                null,
                false,
                reRollTesouro,
                alterarStatus,
                handleMove
              )}
          </ModalBody>
          <ModalFooter>
            <FecharOnModal onClose={() => setIsOpen(false)} />
            <ConfirmarOnModal
              onSelect={() => {
                if (npc) {
                  const newNpcs = Array.from({ length: quantity }, (_, i) => ({
                    ...npc,
                    id: Npcs.length + 1 + i,
                  }));
                  setNpcs([...Npcs, ...newNpcs]);
                  setIsOpen(false);
                  localStorage.setItem(
                    "npcs",
                    JSON.stringify([...Npcs, ...newNpcs])
                  );
                }
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

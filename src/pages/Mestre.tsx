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
} from "@chakra-ui/react";
import { FecharOnModal, ConfirmarOnModal } from "../components/Geral/Botoes";
import { Plus, Trash } from "lucide-react";

class NPCShown extends NPC {
  id: number = 0;
  pvAtual?: number = 0;
  pmAtual?: number = 0;
}

function showNPC(
  npc: NPCShown,
  rolar: any,
  ataqueRoll: any,
  trash: any,
  trashHidden: boolean
) {
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg w-[400px]">
      {npc.img && <img className="w-3/4 mx-auto" src={npc.img} />}
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
              icon={<Trash />}
              onClick={() => trash(npc.id)}
            />
          )}
          ND {npc.nd}
        </h2>
      </div>
      <h1 className="italic text-sm w-full border-b-2 border-b-red-600 text-gray-600">
        {npc.raca} {npc.tamanho} ({npc.tipo})
      </h1>
      <div className="text-sm">
        <div className="flex gap-3">
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.iniciativa, `Iniciativa`, "Pericia")}
          >
            <h1>
              <b className="text-red-600">Iniciativa </b>
              {npc.iniciativa > 0 ? "+" : npc.iniciativa < 0 ? "-" : ""}
              {npc.iniciativa}
            </h1>
          </a>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.percepcao, "Percepção", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Percepção </b>
              {npc.percepcao > 0 ? "+" : npc.percepcao < 0 ? "-" : ""}
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
              {npc.fort > 0 ? "+" : npc.fort < 0 ? "-" : ""}
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
              {npc.ref > 0 ? "+" : npc.ref < 0 ? "-" : ""}
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
              {npc.von > 0 ? "+" : npc.von < 0 ? "-" : ""}
              {npc.von}
            </h1>
          </a>
        </div>
        <h1>
          <b className="text-red-600">Resistências </b>
          {npc.resistencias?.join(", ") || "Nenhuma"}
        </h1>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-bold">Pontos de vida</h1>
          <div className="flex gap-2">
            <h1>{npc.pv}</h1>
            <h1>/</h1>
            <input
              type="number"
              className="w-10"
              defaultValue={npc.pvAtual}
              onChange={(e) => {
                let npcTemp = npc;
                let npcsLocal = JSON.parse(
                  localStorage.getItem("npcs") || "[]"
                ) as NPCShown[];
                npcTemp.pvAtual = Number(e.target.value);
                npcsLocal[npcsLocal.findIndex((e) => e.id === npc.id)] =
                  npcTemp;
                localStorage.setItem("npcs", JSON.stringify(npcsLocal));
              }}
            />
          </div>
        </div>
        <h1 className="border-b-2 border-b-red-600">
          <b className="text-red-600">Deslocamento </b>
          {npc.deslocamento}m ({npc.deslocamento / 1.5}▢)
        </h1>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-bold">Pontos de Mana</h1>
          <div className="flex gap-2">
            <h1>{npc.pm}</h1>
            <h1>/</h1>
            <input
              type="number"
              className="w-10"
              defaultValue={npc.pmAtual}
              onChange={(e) => {
                let npcTemp = npc;
                let npcsLocal = JSON.parse(
                  localStorage.getItem("npcs") || "[]"
                ) as NPCShown[];
                npcTemp.pmAtual = Number(e.target.value);
                npcsLocal[npcsLocal.findIndex((e) => e.id === npc.id)] =
                  npcTemp;
                localStorage.setItem("npcs", JSON.stringify(npcsLocal));
              }}
            />
          </div>
        </div>
        {npc.corpoAcorpo && npc.corpoAcorpo?.length > 0 && (
          <div className="flex gap-2">
            <h1 className="text-red-600 font-bold">Corpo a Corpo </h1>
            <div>
              {npc.corpoAcorpo?.map((arma: ataque) => (
                <div className="flex gap-2">
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
                    {arma.mod > 0 ? "+" : arma.mod < 0 ? "-" : ""}
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
            <h1 className="text-red-600 font-bold">Distância </h1>
            <div>
              {npc.distancia?.map((arma: ataque) => (
                <div className="flex gap-2">
                  <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold">
                    {arma.nome}{" "}
                  </a>
                  <p>
                    {arma.mod > 0 ? "+" : arma.mod < 0 ? "-" : ""}
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
              <h1>{atributo.valor}</h1>
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-bold">Perícias </h1>
          <div className="flex flex-wrap gap-2">
            {npc.pericias?.map((pericia) => (
              <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
              onClick={
                () => rolar(pericia.mod, pericia.nome, "Pericia")
              }>
                <h1>
                  {pericia.nome}
                  {pericia.mod > 0 ? "+" : pericia.mod < 0 ? "-" : ""}
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
            <b className="text-red-600">Tesouro </b>
            {npc.tesouro}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Mestre() {
  const { showCustomToast } = useCustomToast();

  const trash = (id: number) => {
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
      duration: 1000,
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
      duration: 1000,
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
  return (
    <>
      <Navbar ficha={true} back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <div className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto mt-[-20px] font-tormenta mb-4">
            Gerenciador de fichas para os npcs
          </div>
          <IconButton
            icon={<Plus />}
            onClick={() => {
              setNpc(undefined);
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
          <div className="flex flex-wrap gap-3 justify-evenly">
            {Npcs &&
              Npcs.map((npc: NPCShown) =>
                showNPC(npc, rolar, ataqueRoll, trash, true)
              )}
          </div>
        </article>
      </body>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader>Adicionar NPC</ModalHeader>
          <ModalBody>
            <Select
              onChange={(e) => {
                const npcTemp =
                  TabelaNPC.find((y) => y.nome === e.target.value) ||
                  TabelaNPC[0];
                setNpc({
                  ...npcTemp,
                  id: Npcs.length + 1,
                  pvAtual: npcTemp.pv,
                  pmAtual: npcTemp.pm,
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
            {npc && showNPC(npc, rolar, ataqueRoll, null, false)}
          </ModalBody>
          <ModalFooter>
            <FecharOnModal onClose={() => setIsOpen(false)} />
            <ConfirmarOnModal
              onSelect={() => {
                if (npc) {
                  setNpcs([...Npcs, npc]);
                  setIsOpen(false);
                  localStorage.setItem("npcs", JSON.stringify([...Npcs, npc]));
                }
              }}
            />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

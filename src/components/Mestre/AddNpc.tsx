import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Select,
  ModalFooter,
} from "@chakra-ui/react";
import { Plus } from "lucide-react";
import { useState } from "react";
import { TabelaNPC } from "../../classes/Tabelas/NPC";
import { TesouroTabela } from "../../classes/Tabelas/Tesouro";
import { FecharOnModal, ConfirmarOnModal } from "../Geral/Botoes";
import { RolarDado } from "../Geral/RolarDado";
import ShowNPC from "./ShowNpc";
import { NPCShown } from "../../pages/Mestre";

interface Props {
  Npcs: any;
  setNpcs: (npcs: any) => void;
  alterarStatus: any;
  handleMove: any;
  reRollTesouro: any;
  ataqueRoll: any;
  resetar: () => void;
  rolar: any;
}

export default function AddNpc({
  resetar,
  rolar,
  ataqueRoll,
  reRollTesouro,
  alterarStatus,
  handleMove,
  setNpcs,
  Npcs,
}: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [npc, setNpc] = useState<NPCShown>();
  return (
    <>
      <IconButton
        icon={<Plus />}
        onClick={() => {
          resetar();
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
            {npc && (
              <ShowNPC
                npc={npc}
                rolar={rolar}
                ataqueRoll={ataqueRoll}
                teasureReroll={reRollTesouro}
                handleMove={handleMove}
                isNotModal={false}
                statusChange={alterarStatus}
              />
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

import {
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  Select,
  ModalFooter,
  Tooltip,
} from "@chakra-ui/react";
import { Users } from "lucide-react";
import { useState } from "react";
import { TabelaGrupos } from "../../classes/Tabelas/Mestre/NPC";
import { TesouroTabela } from "../../classes/Tabelas/Mestre/Tesouro";
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

export default function AddGrupo({
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
  const [grupo, setGrupo] = useState<NPCShown[]>();
  return (
    <>
      <Tooltip bgColor={"red.600"} label="Add Grupo" aria-label="Add Grupo">
        <IconButton
          icon={<Users />}
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
      </Tooltip>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader>Adicionar Grupo</ModalHeader>
          <ModalBody>
            <div className="flex">
              <Select
                w={"full"}
                onChange={(e) => {
                  const grupoTemp =
                    TabelaGrupos.find((y) => y.nome === e.target.value) ||
                    TabelaGrupos[0];
                  const dinheiroTotais: string[] = [];
                  const itensTotais: string[] = [];
                  grupoTemp.integrantes.forEach((npcTemp) => {
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
                        )?.tabelaItem.find(
                          (e) => e.min < roll1 && e.max > roll1
                        )?.value || "Nenhum";
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
                        )?.tabelaItem.find(
                          (e) => e.min < roll1 && e.max > roll1
                        )?.value || "Nenhum";
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
                        )?.tabelaItem.find(
                          (e) => e.min < roll3 && e.max > roll3
                        )?.value || "Nenhum";
                    }
                    dinheiroTotais.push(dinheiro);
                    itensTotais.push(itens);
                  });
                  setGrupo(
                    grupoTemp.integrantes.map((npcTemp, index) => {
                      return {
                        ...npcTemp,
                        dinheiro: dinheiroTotais[index],
                        itens: itensTotais[index],
                        id: index + Npcs.length,
                        tesouroFinal: [
                          itensTotais[index],
                          dinheiroTotais[index],
                        ],
                      };
                    })
                  );
                }}
                placeholder="Selecione o Grupo"
              >
                {TabelaGrupos.map((g) => (
                  <option key={g.nome} value={g.nome}>
                    {g.nome}
                  </option>
                ))}
              </Select>
            </div>
            {grupo &&
              grupo.map((npc) => (
                <ShowNPC
                  npc={npc}
                  rolar={rolar}
                  ataqueRoll={ataqueRoll}
                  teasureReroll={reRollTesouro}
                  handleMove={handleMove}
                  isNotModal={false}
                  statusChange={alterarStatus}
                />
              ))}
          </ModalBody>
          <ModalFooter>
            <FecharOnModal onClose={() => setIsOpen(false)} />
            <ConfirmarOnModal
              onSelect={() => {
                if (grupo) {
                  setNpcs([...Npcs, ...grupo]);
                  setIsOpen(false);
                  localStorage.setItem(
                    "npcs",
                    JSON.stringify([...Npcs, ...grupo])
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

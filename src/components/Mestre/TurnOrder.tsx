import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  Tooltip,
} from "@chakra-ui/react";
import { TabelaPlayer } from "../../classes/Tabelas/Mestre/Players";
import { useState } from "react";
import { ArrowDown10, Clock, TimerReset } from "lucide-react";
import FlipMove from "react-flip-move";
import useCustomToast from "../Geral/Toasted";

interface TurnOrderShown {
  nome: string;
  iniciativa: number;
}

export default function TurnOrder() {
  const { showCustomToast } = useCustomToast();
  const players: TurnOrderShown[] = TabelaPlayer.map((player) => {
    return {
      nome: player.nome,
      iniciativa: 0,
    };
  });
  if (!localStorage.getItem("turnOrder"))
    localStorage.setItem(
      "turnOrder",
      JSON.stringify([...players, { nome: "Monstro", iniciativa: 0 }])
    );
  const [turnOrder, setTurnOrder] = useState<TurnOrderShown[]>(
    JSON.parse(localStorage.getItem("turnOrder")!)
  );

  const [drawerIsOpen, setDrawerIsOpen] = useState<boolean>(false);
  return (
    <>
      
      <Tooltip bgColor={"red.600"} label="Turnos" aria-label="Turnos">
          <IconButton
            onClick={() => {
              setDrawerIsOpen(true);
            }}
            icon={<Clock />}
            aria-label="Ordem de iniciativa"
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
      <Drawer isOpen={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
        <DrawerOverlay />
        <DrawerContent className="font-tormenta">
          <DrawerCloseButton />
          <DrawerHeader>
            <div className="flex justify-around">
              <h3 className="text-red-600 font-bold">Iniciativa</h3>
              <IconButton
                onClick={() => {
                  showCustomToast({
                    title: "Iniciativa",
                    desc: "Iniciativa Alterada com sucesso",
                  });
                  const newTurnOrder = turnOrder.slice();
                  newTurnOrder.sort((a, b) => b.iniciativa - a.iniciativa);
                  setTurnOrder(newTurnOrder);
                  localStorage.setItem(
                    "turnOrder",
                    JSON.stringify(newTurnOrder)
                  );
                }}
                icon={<ArrowDown10 />}
                aria-label="Deixar em ordem"
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
              <IconButton
                onClick={() => {
                  const sure = window.confirm(
                    "Tem certeza que quer resetar a iniciativa?"
                  );
                  if (!sure) {
                    showCustomToast({
                      title: "Iniciativa",
                      desc: "Iniciativa não resetada",
                      status: "error",
                    });
                    return;
                  }
                  const newTurnOrder = turnOrder.slice();
                  newTurnOrder.map((item) => {
                    item.iniciativa = 0;
                  });
                  setTurnOrder(newTurnOrder);
                  localStorage.setItem(
                    "turnOrder",
                    JSON.stringify(newTurnOrder)
                  );
                }}
                icon={<TimerReset />}
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
              />
            </div>
          </DrawerHeader>
          <DrawerBody>
            <div className="flex flex-col">
              <FlipMove className="flex flex-col gap-2 transition-all">
                {turnOrder.map((item: TurnOrderShown) => {
                  return (
                    <div
                      className="flex justify-between text-sm border-2 border-red-600 rounded-md p-1 items-center"
                      key={item.nome}
                    >
                      <span className="text-red-600">{item.nome}</span>
                      <Input
                        w={"16"}
                        type={"number"}
                        textAlign={"center"}
                        p={1}
                        value={item.iniciativa}
                        onChange={(e) => {
                          const newTurnOrder = turnOrder.slice();
                          newTurnOrder[
                            newTurnOrder.findIndex((x) => x.nome === item.nome)
                          ].iniciativa = Number(e.target.value);
                          setTurnOrder(newTurnOrder);
                          localStorage.setItem(
                            "turnOrder",
                            JSON.stringify(newTurnOrder)
                          );
                        }}
                      />
                    </div>
                  );
                })}
              </FlipMove>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

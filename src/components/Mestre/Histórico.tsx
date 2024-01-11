import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  DrawerFooter,
  Button,
  useDisclosure,
  Tooltip,
} from "@chakra-ui/react";
import { History } from "lucide-react";
import { useEffect, useState } from "react";
import { Dado } from "../../classes/Construtores/Dado";
import useCustomToast from "../Geral/Toasted";
import moment from "moment";

export default function Historico() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [dados, setDados] = useState<Dado[]>(
    JSON.parse(localStorage.getItem("historico") || "[]")
  );
  const { showCustomToast } = useCustomToast();

  useEffect(() => {
    const dadosTemporarios: Dado[] = JSON.parse(
      localStorage.getItem("historico") || "[]"
    );
    setDados(dadosTemporarios);
  });
  const limparHistorico = () => {
    const certeza = window.confirm(
      "Tem certeza que deseja limpar o histórico de dados?"
    );
    if (certeza) {
      localStorage.removeItem("historico");
      setDados([]);
      showCustomToast({
        title: "Histórico limpo!",
        desc: "O histórico de dados foi limpo com sucesso!",
        status: "success",
      });
    } else {
      showCustomToast({
        title: "Histórico não limpo!",
        desc: "O histórico de dados não foi limpo!",
        status: "error",
      });
    }
  };
  return (
    <>
      <Tooltip bgColor={"red.600"} label="Histórico" aria-label="Histórico">
        <IconButton
          aria-label="Histórico"
          bgColor={"red"}
          size={"sm"}
          color={"white"}
          rounded={"full"}
          transition={"all 0.2s ease-in-out"}
          _hover={{
            bgColor: "transparent",
            color: "red",
            transform: "scale(1.1) rotate(-360deg)",
          }}
          onClick={onOpen}
          icon={<History />}
        />
      </Tooltip>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent className="font-tormenta">
          <DrawerCloseButton />
          <DrawerHeader>Histórico de dados</DrawerHeader>

          <DrawerBody>
            <div className="flex flex-col-reverse gap-5">
              {dados.map((dado: Dado) => {
                return (
                  <>
                    {["Atributo", "Ataque", "Pericia"].includes(dado.tipo) && (
                      <div className="bg-red-600 text-white p-3 rounded-xl">
                        <div className="flex justify-between">
                          <h1 className="text-lg">{dado.nome}</h1>
                          <h1 className="text-lg">{dado.resultado}</h1>
                        </div>
                        <div className="flex justify-between">
                          <h1 className="text-sm">Dado: ({dado.dados[0]})</h1>
                          <h1 className="text-sm">Bônus: {dado.bonus}</h1>
                        </div>
                        {dado.tipo === "Ataque" && (
                          <div className="flex justify-between">
                            <h1 className="text-sm">
                              {dado.dadoDano} (
                              {dado.dadosDano?.join(", ") || ""})
                            </h1>
                            <h1 className="text-sm">Dano: {dado.dano}</h1>
                          </div>
                        )}
                        <small className="text-xs">
                          {moment(dado.date).format("MMMM Do YYYY, h:mm a")}
                        </small>
                      </div>
                    )}
                  </>
                );
              })}
            </div>
          </DrawerBody>
          <DrawerFooter>
            <Button
              variant="outline"
              colorScheme="red"
              onClick={() => limparHistorico()}
            >
              Limpar
            </Button>
            <Button colorScheme="red" ml={3} onClick={onClose}>
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

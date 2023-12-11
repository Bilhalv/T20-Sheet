import {
  useDisclosure,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  IconButton,
} from "@chakra-ui/react";
import { History } from "lucide-react";
import { Link } from "react-router-dom";
import { Dado } from "../../classes/Construtores/Dado";
import { useEffect, useState } from "react";
import moment from "moment";
import useCustomToast from "./Toasted";

interface NavbarProps {
  back: any;
  ficha?: boolean;
}

export default function Navbar({ back, ficha }: NavbarProps) {
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
      <nav className="z-40 font-tormenta flex sticky top-0 justify-between bg-[#10000d] desktop:p-5 p-3 text-white shadow-lg">
        <div className="desktop:w-1/3 w-1/2">
          <Link to="/">
            <img className="h-8" src="./img/bannerT20.png" />
          </Link>
        </div>
        <h1 className="text-lg w-1/3 text-center hidden desktop:block">
          <span className="text-3xl">T20</span>Criador de personagem
        </h1>
        <div className="desktop:w-1/3 w-1/2 text-right">
          {ficha ? (
            <>
              <IconButton
                aria-label="Search database"
                bgColor={"transparent"}
                color={"white"}
                rounded={"full"}
                transition={"all 0.2s ease-in-out"}
                _hover={{
                  bgColor: "red",
                  transform: "scale(1.1) rotate(-360deg)",
                }}
                onClick={onOpen}
                icon={<History />}
              />
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
                            {["Atributo", "Ataque", "Pericia"].includes(
                              dado.tipo
                            ) && (
                              <div className="bg-red-600 text-white p-3 rounded-xl">
                                <div className="flex justify-between">
                                  <h1 className="text-lg">{dado.nome}</h1>
                                  <h1 className="text-lg">{dado.resultado}</h1>
                                </div>
                                <div className="flex justify-between">
                                  <h1 className="text-sm">
                                    Dado: ({dado.dados[0]})
                                  </h1>
                                  <h1 className="text-sm">
                                    Bônus: {dado.bonus}
                                  </h1>
                                </div>
                                {dado.tipo === "Ataque" && (
                                  <div className="flex justify-between">
                                    <h1 className="text-sm">
                                      {dado.dadoDano} (
                                      {dado.dadosDano?.join(", ") || ""})
                                    </h1>
                                    <h1 className="text-sm">
                                      Dano: {dado.dano}
                                    </h1>
                                  </div>
                                )}
                                <small className="text-xs">
                                  {moment(dado.date).format("HH:mm")}
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
          ) : (
            <Link to={back}>
              <button className="text-lg bg-[#09000d] px-2 rounded-lg transition-all ease-in-out hover:bg-[#05000d]">
                Voltar
              </button>
            </Link>
          )}
        </div>
      </nav>
    </>
  );
}

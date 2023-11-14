import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BookUser, Pencil } from "lucide-react";
import React from "react";

interface Props {
  setPagina: any;
  pagina: number;
}

export default function FichaModal({ setPagina, pagina }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const trocarPagina = (pagina: string) => {
    setPagina(pagina);
    onClose();
  };
  return (
    <>
      <Tooltip bg={"red.800"} label="Ficha">
        <IconButton
          zIndex={2}
          borderRadius={"full"}
          aria-label="Ficha"
          bg={"transparent"}
          onClick={onOpen}
          _hover={{ bg: "transparent", color: "gray.200", mouse: "pointer" }}
        >
          <BookUser size={32} />
        </IconButton>
      </Tooltip>
      <Modal
        size={"2xl"}
        finalFocusRef={finalRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">Personagem</ModalHeader>
          <ModalBody>
            <Tabs variant="enclosed">
              <TabList>
                <Tab>Primeira pagina</Tab>
                <Tab isDisabled={pagina==1}>Segunda pagina</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="flex flex-col flex-wrap h-[35rem] gap-5">
                    <div className="w-1/2">
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">Nome</h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Inicio")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center">
                        {localStorage.getItem("nome") ? "" :"Nenhum"}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">Nivel</h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Inicio")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center">
                        {localStorage.getItem("lvl") ? "" :"Nenhum"}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">Origem</h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Origens")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center">
                        {localStorage.getItem("origem") ? "" :"Nenhuma"}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">Raça</h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Racas")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center">
                        {localStorage.getItem("raca") ? "" :"Nenhuma"}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">Classe</h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Classes")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center">
                        {localStorage.getItem("classe") ? "" :"Nenhuma"}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          {pagina === 1
                            ? "Atributos de raça"
                            : "Atributos totais"}
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Racas")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center flex flex-col">
                        {localStorage.getItem("atributos")
                          ? JSON.parse(localStorage.getItem("atributos")!).map(
                              (atributo: any) => (
                                <span>
                                  {atributo.nome} {atributo.valor}{" "}
                                </span>
                              )
                            )
                          : ""}
                      </p>
                    </div>
                    <div className="w-1/2 my-auto">
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Beneficios Origem
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Origens")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center flex flex-col">
                        {localStorage.getItem("beneficios")
                          ? JSON.parse(localStorage.getItem("beneficios")!).map(
                              (beneficio: any, index: number) => (
                                <>
                                  <hr className="my-2 w-1/2 mx-auto" />
                                  <h1 className="font-bold my-auto text-lg">
                                    {beneficio.tipo}
                                  </h1>
                                  {beneficio.beneficio.map((item: any) => (
                                    <span>{item !== "" ? item: "Nenhum"}</span>
                                  ))}
                                </>
                              )
                            )
                          : ""}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Pericias da Classe
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          onClick={() => trocarPagina("Classes")}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center flex flex-col">
                        {localStorage.getItem("pericias")
                          ? JSON.parse(localStorage.getItem("pericias")!).join(", ")
                          : ""}
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mx={"auto"} onClick={onClose}>
              Entendi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

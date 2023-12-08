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
import React, { useEffect } from "react";
import { EntendiOnModal } from "./Botoes";
import { useNavigate } from "react-router-dom";

interface Props {
  handleChange: any;
  pagina: number;
  paginaAtual: string;
}

export default function FichaModal({
  handleChange,
  pagina,
  paginaAtual,
}: Props) {
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  var nome = localStorage.getItem("nome");
  var lvl = localStorage.getItem("lvl");
  var origem = localStorage.getItem("origem");
  var raca = localStorage.getItem("raca");
  var classe = localStorage.getItem("classe");
  if (pagina === 1) {
    var atributos = localStorage.getItem("atributos");
  } else {
    var atributos = localStorage.getItem("atributosFinais");
  }
  var beneficios = localStorage.getItem("beneficios");
  var pericias = localStorage.getItem("pericias");
  useEffect(() => {
    nome = localStorage.getItem("nome");
    lvl = localStorage.getItem("lvl");
    origem = localStorage.getItem("origem");
    raca = localStorage.getItem("raca");
    classe = localStorage.getItem("classe");
    if (pagina === 1) {
      atributos = localStorage.getItem("atributos");
    } else {
      atributos = localStorage.getItem("atributosFinais");
    }
    beneficios = localStorage.getItem("beneficios");
    pericias = localStorage.getItem("pericias");
  }, [nome, lvl, origem, raca, classe, atributos, beneficios, pericias]);

  const trocarPagina = (subpagina: string) => {
    handleChange(subpagina);
    if (pagina === 2) {
      navigate("/criarpt1");
    }
    onClose();
  };
  const paginas = [
    "Inicio",
    "Origens",
    "Racas",
    "Classes",
    "Atributos",
    "Divindades",
    "Equipamentos",
    "Magias",
    "Especificações",
    "Poderes",
  ];
  return (
    <>
      <Tooltip bg={"red.800"} label="Ficha">
        <IconButton
          zIndex={2}
          borderRadius={"full"}
          aria-label="Info"
          bg={"transparent"}
          onClick={onOpen}
          color={"white"}
          bgColor={"red.800"}
          _hover={{
            bg: "transparent",
            color: "red",
            transform: "scale(1.1)",
          }}
          icon={<BookUser size={32} />}
        />
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
                <Tab isDisabled>Segunda pagina</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <div className="flex flex-col flex-wrap h-[35rem] gap-5">
                    <div className="w-1/2 my-auto">
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Nome
                        </h1>
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
                        {nome === "" ? "Nenhum nome" : nome}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Nivel
                        </h1>
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
                        {lvl === "" ? "Nenhum" : lvl}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Origem
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          isDisabled={paginas.indexOf(paginaAtual || "") < 1}
                          onClick={() => {
                            trocarPagina("Origens");
                          }}
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
                        {origem === "" ? "Nenhuma" : origem}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Raça
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          isDisabled={paginas.indexOf(paginaAtual || "") < 2}
                          onClick={() => {
                            trocarPagina("Racas");
                          }}
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
                        {raca === "" ? "Nenhuma" : raca}
                      </p>
                      <hr className="my-2" />
                      <div className="flex justify-between">
                        <div className="w-[40px]"></div>
                        <h1 className="font-bold my-auto text-xl text-center">
                          Classe
                        </h1>
                        <IconButton
                          zIndex={2}
                          borderRadius={"full"}
                          aria-label="Ir até a pagina"
                          bg={"transparent"}
                          isDisabled={paginas.indexOf(paginaAtual || "") < 3}
                          onClick={() => {
                            trocarPagina("Classes");
                          }}
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
                        {classe === "" ? "Nenhuma" : classe}
                        {classe === "Arcanista"
                          ? ` - ${JSON.parse(
                              localStorage.getItem("alt") || ""
                            )}`
                          : ""}
                      </p>
                    </div>
                    <div className="w-1/2 my-auto">
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
                          isDisabled={paginas.indexOf(paginaAtual || "") < 2}
                          onClick={() => {
                            if (paginas.indexOf(paginaAtual || "") < 6) {
                              trocarPagina("Atributos");
                            } else {
                              trocarPagina("Racas");
                            }
                          }}
                          _hover={{
                            bg: "transparent",
                            color: "gray.200",
                            mouse: "pointer",
                          }}
                        >
                          <Pencil />
                        </IconButton>
                      </div>
                      <p className="text-center flex flex-col w-2/3 mx-auto px-3">
                        {atributos
                          ? JSON.parse(atributos!).map((atributo: any) => (
                              <div className="flex justify-between w-full">
                                <span>{atributo.nome}</span>
                                <p>{atributo.valor}</p>
                              </div>
                            ))
                          : "Atributos ainda não definidos"}
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
                          isDisabled={paginas.indexOf(paginaAtual || "") < 3}
                          onClick={() => {
                            trocarPagina("Classes");
                          }}
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
                        {pericias
                          ? JSON.parse(pericias!).join(", ")
                          : "pericias ainda não definidas"}
                      </p>
                    </div>
                  </div>
                </TabPanel>
                <TabPanel>
                  /*divindades, equipamentos, magias, Especificações e poderes
                  */
                  <div>
                    <div className="flex justify-between">
                      <div className="w-[40px]"></div>
                      <h1 className="font-bold my-auto text-xl text-center">
                        Divindades
                      </h1>
                      <IconButton
                        zIndex={2}
                        borderRadius={"full"}
                        aria-label="Ir até a pagina"
                        bg={"transparent"}
                        isDisabled={paginas.indexOf(paginaAtual || "") < 4}
                        onClick={() => {
                          trocarPagina("Divindades");
                        }}
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
                      {localStorage.getItem("divindade") === ""
                        ? "Nenhuma divindade"
                        : localStorage.getItem("divindade")}
                    </p>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                      <div className="w-[40px]"></div>
                      <h1 className="font-bold my-auto text-xl text-center">
                        Equipamentos
                      </h1>
                      <IconButton
                        zIndex={2}
                        borderRadius={"full"}
                        aria-label="Ir até a pagina"
                        bg={"transparent"}
                        isDisabled={paginas.indexOf(paginaAtual || "") < 5}
                        onClick={() => {
                          trocarPagina("Equipamentos");
                        }}
                        _hover={{
                          bg: "transparent",
                          color: "gray.200",
                          mouse: "pointer",
                        }}
                      >
                        <Pencil />
                      </IconButton>
                    </div>
                    <hr className="my-2" />
                    <div className="flex justify-between">
                      <div className="w-[40px]"></div>
                      <h1 className="font-bold my-auto text-xl text-center">
                        Magias
                      </h1>
                      <IconButton
                        zIndex={2}
                        borderRadius={"full"}
                        aria-label="Ir até a pagina"
                        bg={"transparent"}
                        isDisabled={paginas.indexOf(paginaAtual || "") < 6}
                        onClick={() => {
                          trocarPagina("Magias");
                        }}
                        _hover={{
                          bg: "transparent",
                          color: "gray.200",
                          mouse: "pointer",
                        }}
                      >
                        <Pencil />
                      </IconButton>
                    </div>
                  </div>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </ModalBody>
          <ModalFooter>
            <EntendiOnModal onClose={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

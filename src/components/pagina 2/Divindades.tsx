import { tabelaDivindades } from "../../classes/Tabelas/Divindades";
import SelectList from "../Geral/SelectList";
import React, { useState, useEffect } from "react";
import VerMais from "../Geral/VerMais";
import Confirmar from "../Geral/Confirmar";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Checkbox,
  CheckboxGroup,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

interface DivindadesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Divindades({ setPagina, next }: DivindadesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const mapear = (nome: string) => {
    const mapeado = tabelaDivindades.map((divindade) => {
      if (divindade.nome === nome) {
        return divindade;
      } else {
        return null;
      }
    });
    return mapeado.filter((item) => item !== null);
  };
  if (localStorage.getItem("divindade") === null) {
    localStorage.setItem("divindade", tabelaDivindades[0].nome);
  }
  const [selected, setSelected] = useState(
    localStorage.getItem("divindade") ?? tabelaDivindades[0].nome
  );

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
    localStorage.setItem("divindade", e.target.value);
  };

  const onChange = (e: any) => {
    setSelected(e.target.value);
    setContador(0);
    console.log(mapear(selected)[0]?.crencas);
  };

  const onSelect = () => {
    onOpen();
  };

  const [contador, setContador] = useState(0);
  const [bencao, setBencao] = useState([""]);
  const [limite, setLimite] = useState(1);
  const [alternativo, setAlternativo] = useState(false);
  const escolhas = [];
  useEffect(() => {
    if (
      localStorage.getItem("classe") === "Clérigo" ||
      localStorage.getItem("classe") === "Paladino"
    ) {
      setLimite(2);
    }
    if (localStorage.getItem("classe") === "Druida") {
      escolhas.push("Allihanna", "Megalokk", "Oceano");
    } else if (localStorage.getItem("classe") === "Paladino") {
      escolhas.push(
        "Azgher",
        "Khalmyr",
        "Lena",
        "Lin-Wu",
        "Marah",
        "Tanna-Toh",
        "Thyatis",
        "Valkaria"
      );
    }
  }, [localStorage.getItem("classe")]);
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">
        Escolha sua divindade
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] desktop:w-1/2 h-fit my-auto">
          <div>
            <div className="desktop:hidden block">
              <div className="flex justify-evenly">
                <Checkbox
                  isDisabled={
                    localStorage.getItem("classe") !== "Paladino" ||
                    localStorage.getItem("classe") !== "Clérigo"
                  }
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAlternativo(true);
                      setSelected("Todas");
                    }
                  }}
                >
                  Todas (Apenas para Clérigos e Paladinos)
                </Checkbox>
                <Checkbox
                  onChange={(e) => {
                    if (e.target.checked) {
                      setAlternativo(true);
                      setSelected("Todas");
                    }
                  }}
                >
                  Nenhuma
                </Checkbox>
              </div>
              <SelectList
                tabela={tabelaDivindades}
                onChange={onChange}
                selected={selected}
                placeholder={"Escolha sua divindade"}
              />
            </div>
            <h1 className="text-lg font-bold text-center desktop:block hidden">
              {selected}
            </h1>
            <img
              src={mapear(selected)[0]?.imagens[0]}
              className="mx-auto transition-all ease-in-out"
            />
            <p className="text-center mt-3 font-serif ">
              Os devotos de {selected} {mapear(selected)[0]?.crencas}
            </p>
            <div className="flex justify-center mt-3 gap-2">
              <VerMais
                titulo={`Informações da divindade ${selected}`}
                handleSelect={handleSelect}
                selected={selected}
                pagina="Divindade"
              />
              <Confirmar onSelect={onSelect} pagina="Divindade" />
            </div>
          </div>
        </section>
        <section className="desktop:block hidden w-1/2">
          <div className="flex justify-evenly">
            <Checkbox
              isDisabled={
                localStorage.getItem("classe") !== "Paladino" ||
                localStorage.getItem("classe") !== "Clérigo"
              }
              onChange={(e) => {
                if (e.target.checked) {
                  setAlternativo(true);
                  setSelected("Todas");
                }
              }}
            >
              Todas (Apenas para Clérigos e Paladinos)
            </Checkbox>
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setAlternativo(true);
                  setSelected("Todas");
                }
              }}
            >
              Nenhuma
            </Checkbox>
          </div>
          <div className="grid gap-5 grid-cols-4 place-items-center">
            {tabelaDivindades.map((divindade) => {
              return (
                <button
                  key={divindade.nome}
                  onClick={() => {
                    onChange({ target: { value: divindade.nome } });
                  }}
                  className={`${
                    selected === divindade.nome
                      ? "bg-red-950 text-red-200"
                      : "bg-gray-200 hover:bg-gray-300"
                  } p-2 rounded-lg shadow-lx my-2 cursor-pointer w-full hover:shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out hover:scale-105 bg-opacity-90`}
                >
                  <img src={divindade.imagens[1]} className="mx-auto w-1/2" />
                  <h1 className="text-center">{divindade.nome}</h1>
                </button>
              );
            })}
          </div>
        </section>
      </div>
      <Modal
        size={"xl"}
        finalFocusRef={finalRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">Escolha sua benção</ModalHeader>
          <ModalBody>
            <CheckboxGroup>
              <Accordion allowToggle>
                {mapear(selected)[0]?.poderes.map((poder) => (
                  <AccordionItem>
                    <h2>
                      <AccordionButton className="flex justify-between">
                        <p className="flex gap-2">
                          <Checkbox
                            disabled={
                              contador >= limite && !bencao.includes(poder.nome)
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setContador(contador + 1);
                                setBencao([...bencao, poder.nome]);
                              } else {
                                setContador(contador - 1);
                                setBencao(
                                  bencao.filter((item) => item !== poder.nome)
                                );
                              }
                            }}
                          />
                          {poder.nome}
                        </p>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      className="italic font-serif text-justify"
                      pb={4}
                    >
                      &nbsp;&nbsp;{poder.descricao}
                      <small>{poder.tipo}</small>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </CheckboxGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={onClose}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

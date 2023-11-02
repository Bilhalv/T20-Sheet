import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { stringify } from "querystring";
import React, { useEffect, useState } from "react";
import { TabelaOrigens } from "../../classes/Tabelas/Origens";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { TabelaRacas } from "../../classes/Tabelas/Racas";
import { TabelaClasses } from "../../classes/Tabelas/Classes";

interface Props {
  titulo: string;
  handleSelect: any;
  selected: string;
  pagina: string;
}

export default function VerMais({titulo, handleSelect, selected, pagina }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  var origem =
    TabelaOrigens.find((o) => o.nome === selected) ?? TabelaOrigens[0];
  var raca = TabelaRacas.find((r) => r.nome === selected) ?? TabelaRacas[0];
  var classe = TabelaClasses.find((c) => c.nome === selected) ?? TabelaClasses[0];
  return (
    <>
      <button
        onClick={onOpen}
        className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
      >
        Ver mais
      </button>
      <Modal size={"xl"} finalFocusRef={finalRef} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">{titulo}</ModalHeader>
          <ModalBody>
            {pagina === "Origem" ? (
              <>
                <ul className="text-justify mb-3">
                  <li>
                    <b>Itens.</b>
                    <i className="font-serif italic ">
                      &nbsp;{origem.itens.join(", ")}
                    </i>
                  </li>
                  <li>
                    <b>Benefícios.</b>
                    <i className="font-serif italic">
                      &nbsp;{origem.beneficios.pericias.join(", ")}
                      (perícias) e {origem.beneficios.poderes.join(", ")}{" "}
                      (poderes).
                    </i>
                  </li>
                </ul>
                <Accordion allowToggle>
                  {origem.beneficios.poderes.map((poder: any) => (
                    <AccordionItem key={poder}>
                      <h2>
                        <AccordionButton className="flex justify-between">
                          <b>
                            {TabelaPoderes.find((p) => p.nome === poder)?.nome}
                          </b>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel pb={4}>
                        <p className="text-justify font-serif italic">
                          &nbsp;&nbsp;
                          {
                            TabelaPoderes.find((p) => p.nome === poder)
                              ?.descricao
                          }
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </>
            ) : pagina === "Raca" ? (
              <>
                <h3 className="mt-2 font-bold">Atributos</h3>
                <p>{raca.atributos.join(", ")}</p>
                <h3 className="mt-2 font-bold">Poderes</h3>
                <ul>
                  <Accordion
                    allowToggle
                    className="border border-gray-200 px-2 rounded-lg"
                  >
                    {raca.poderes.map((power, index) => (
                      <li key={index} className="text-sm my-2">
                        <i>
                          <AccordionItem>
                            <h2>
                              <AccordionButton className="flex justify-between">
                                <b className="font-bold">{power.nome}</b>
                                <AccordionIcon />
                              </AccordionButton>
                            </h2>
                            <AccordionPanel
                              className="font-serif text-justify"
                              pb={4}
                            >
                              <p>&nbsp;&nbsp;{power.descricao}</p>
                            </AccordionPanel>
                          </AccordionItem>
                        </i>
                      </li>
                    ))}
                  </Accordion>
                </ul>
              </>
            ) : pagina === "Classe" ? (
              <>
                <h1 className="text-center font-bold">Pontos de Vida</h1>
                <div className="flex flex-col italic font-serif items-center justify-between">
                  <p>
                    <b>Inicial:</b> {classe.vidainicial} + constituição
                  </p>
                  <p>
                    <b>Por Nivel:</b> {classe.vidapnivel} + constituição
                  </p>
                </div>
                <hr className="my-3 border-gray-400 w-5/6 mx-auto" />
                <h1 className="text-center font-bold">Pontos de Mana</h1>
                <div className="flex italic justify-center font-serif ">
                  <p>
                    <b>Por Nivel:</b> {classe.manapnivel}PM
                  </p>
                </div>
                <hr className="my-3 border-gray-400 w-5/6 mx-auto" />
                <h1 className="text-center font-bold">Proficiências</h1>
                <div className="flex italic font-serif justify-center">
                  <p>
                    {classe?.proficiencias.map(
                      (a: string, index: number) => {
                        if (index === 0) {
                          return (
                            <ul className="flex ">
                              {classe.proficiencias.map(
                                (a: string, index: number) => {
                                  if (index === 0) {
                                    return <li key={index}>{a}</li>;
                                  } else if (
                                    index ===
                                    classe.proficiencias.length - 1
                                  ) {
                                    return <li key={index}>&nbsp;e {a}</li>;
                                  } else {
                                    return <li key={index}>, {a}</li>;
                                  }
                                }
                              )}
                            </ul>
                          );
                        }
                      }
                    )}
                  </p>
                </div>
                <hr className="my-3 border-gray-400 w-5/6 mx-auto" />
                <h1 className="text-center font-bold">Perícias</h1>
                <div>
                  <p className="italic font-serif text-justify">
                    &nbsp;&nbsp;{classe.pericias.join(", ")} e{" "}
                    <b>escolha&nbsp;{classe.periciasescolhanum} entre</b>
                    &nbsp;
                    {classe.periciasescolha.join(", ")}
                  </p>
                </div>
                <hr className="my-3 border-gray-400 w-5/6 mx-auto" />
                <div>
                  <Accordion
                    allowToggle
                    className="border border-gray-200 rounded-2xl px-5 py-2"
                  >
                    <h1 className="text-center font-bold">Habilidades</h1>
                    {classe.habilidades.map((habilidade) => (
                      <AccordionItem>
                        <h2>
                          <AccordionButton>
                            <Box
                              as="span"
                              flex="1"
                              textAlign="left"
                              _firstLetter={{ textTransform: "uppercase" }}
                            >
                              {habilidade.nome}
                            </Box>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          className="italic font-serif text-justify"
                          pb={4}
                        >
                          &nbsp;&nbsp;{habilidade.descricao}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </>
            ) : (
              <></>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={handleSelect}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
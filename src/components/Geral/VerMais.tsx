import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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

interface Props {
  titulo: string;
  handleSelect: any;
}

export default function VerMais({ titulo, handleSelect }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [pagina, setPagina] = useState<string>(
    localStorage.getItem("pagina") ?? "Origens"
  );
  const [selecionado, setSelecionado] = useState<string>(
    localStorage.getItem("selecionado") ?? ""
  );

  useEffect(() => {
    setPagina(localStorage.getItem("pagina") ?? "Origens");
    setSelecionado(localStorage.getItem("selecionado") ?? "");
  }, []);
  var origemselecionada =
    TabelaOrigens.find((o) => o.nome === selecionado) ?? TabelaOrigens[0];
  var origem =
    TabelaOrigens.find((o) => o.nome === selecionado) ?? TabelaOrigens[0];
  return (
    <>
      <button
        onClick={onOpen}
        className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
      >
        Ver mais
      </button>
      <Modal finalFocusRef={finalRef} onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>
            {pagina === "Origens" ? (`Informações da Origem ${origem.nome}`): (null)}
          </ModalHeader>
          <ModalBody>
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
                  (perícias) e {origem.beneficios.poderes.join(", ")} (poderes).
                </i>
              </li>
            </ul>
            <Accordion allowToggle>
              {origemselecionada.beneficios.poderes.map((poder: any) => (
                <AccordionItem key={poder}>
                  <h2>
                    <AccordionButton className="flex justify-between">
                      <b>{TabelaPoderes.find((p) => p.nome === poder)?.nome}</b>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <p className="text-justify font-serif italic">
                      &nbsp;&nbsp;
                      {TabelaPoderes.find((p) => p.nome === poder)?.descricao}
                    </p>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
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

import React, { useState } from "react";
import { TabelaOrigens } from "../classes/Tabelas/Origens";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

interface OrigensProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Origens: React.FC<OrigensProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const selectedOrigem = TabelaOrigens.find(
    (origem) => origem.nome === localStorage.getItem("origem")
  );
  const [origem, setOrigem] = useState(selectedOrigem ?? TabelaOrigens[0]);
  let descricao2 = origem.descricao.split(".");
  let descricao1 = descricao2.shift()+ ".";

  const handleOrigemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrigem = TabelaOrigens.find(
      (origem) => origem.nome === event.target.value
    );
    if (selectedOrigem) {
      setOrigem(selectedOrigem);
      descricao2 = selectedOrigem.descricao.split(".");
      descricao1 = descricao2.shift() + ".";
    }
  };

  const handleSelect = () => {
    console.log(`Origem Selecionada: ${origem.nome}`);
    localStorage.setItem("origem", origem.nome);
    setPagina(next);
  };
  return (
    <>
      <h1 className="text-xl text-center mb-4">Origem</h1>
      <main className="flex gap-5">
        <section className="bg-gray-300 laptop:w-1/2 p-3 rounded-lg bg-opacity-80 shadow- h-fit">
          <section className="flex flex-col gap-2">
            <div className="laptop:hidden">
              <Select
                placeholder="Escolha Sua Origem"
                onChange={handleOrigemChange}
              >
                {TabelaOrigens.map((origem) => (
                  <option key={origem.nome} value={origem.nome}>
                    {origem.nome}
                  </option>
                ))}
              </Select>
            </div>
            <div>
              <h1 className="text-center text-2xl mb-2">{origem.nome}</h1>
              <div className="flex desktop:flex-row gap-2 flex-col">
                <img
                  className="mx-auto w-1/4"
                  src={origem.imagem}
                  alt={origem.nome}
                />
                <p className="text-sm text-justify laptop:w-3/4">
                  &nbsp;&nbsp;{descricao1}
                </p>
              </div>
              <p className="text-sm my-auto text-justify">
                {" "}
                {descricao2.join(".")}{" "}
              </p>
            </div>
          </section>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <button
              onClick={onOpen}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Ver Mais
            </button>
            <button
              onClick={handleSelect}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Confirmar
            </button>
          </div>
        </section>
        <section className="hidden w-1/2 laptop:block p-3">
          <div className="grid grid-flow-row gap-1 grid-rows-7 grid-cols-5">
            {TabelaOrigens.map((origem) => (
              <button
                key={origem.nome}
                onClick={() =>
                  handleOrigemChange({
                    target: { value: origem.nome },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
                className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90 focus:bg-gray-600 focus:text-white mb-2"
              >
                {origem.nome}
              </button>
            ))}
          </div>
        </section>
      </main>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informações da Origem {origem.nome}</ModalHeader>
          <ModalBody>
            <ul>
              <li>
                <b>Itens.</b> {origem.itens.join(", ")}
              </li>
              <li>
                <b>Benefícios.</b> {origem.beneficios.pericias.join(", ")}
                (perícias) e {origem.beneficios.poderes.join(", ")} (poderes).
              </li>
            </ul>
            <h3 className="mt-2 font-bold">{origem.poder.nome}</h3>
            <p>{origem.poder.descricao}</p>
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
};

export default Origens;

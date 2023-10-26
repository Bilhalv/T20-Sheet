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
  Stack,
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
  const [origemselecionada, setOrigemselecionada] = useState(
    selectedOrigem ?? TabelaOrigens[0]
  );
  let descricao2 = origem.descricao.split(".");
  let descricao1 = descricao2.shift() + ".";

  const handleOrigemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrigem = TabelaOrigens.find(
      (origem) => origem.nome === event.target.value
    );
    if (selectedOrigem) {
      setOrigem(selectedOrigem);
      setOrigemselecionada(selectedOrigem);
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
                  <option
                    selected={origem.nome == (selectedOrigem?.nome ?? "")}
                    key={origem.nome}
                    value={origem.nome}
                  >
                    {origem.nome}
                  </option>
                ))}
              </Select>
            </div>
            <div className="text-center">
              <h1 className="text-2xl">{origem.nome}</h1>
              <div className="flex flex-col desktop:flex-row items-center">
                <img
                  className="mx-auto w-1/4 laptop:w-1/6 desktop:mx-0"
                  src={origem.imagem}
                  alt={origem.nome}
                  title={origem.nome}
                />
                <div className="ml-4 w-full laptop:w-5/6">
                  <p className="text-sm text-justify font-serif">
                    &nbsp;&nbsp;{descricao1}
                  </p>
                  <p className="text-sm text-justify font-serif laptop:hidden">
                    &nbsp;&nbsp;{descricao2.join(".")}{" "}
                  </p>
                </div>
              </div>
              <p className="text-sm text-justify font-serif laptop:block hidden">
                &nbsp;&nbsp;{descricao2.join(".")}{" "}
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
        <section className="hidden laptop:block p-3">
          <section className="order-2 grid-cols-5 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid">
            {TabelaOrigens.map((origem) => (
              <Button
                key={origem.nome}
                onClick={() =>
                  handleOrigemChange({
                    target: { value: origem.nome },
                  } as React.ChangeEvent<HTMLSelectElement>)
                }
                _active={{
                  color: "red.900",
                  bg: "gray.300",
                }}
                isActive={origem.nome === origemselecionada?.nome}
                width="auto"
                whiteSpace="normal"
                wordBreak="break-word"
                className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg opacity-80 mb-2"
              >
                {origem.nome}
              </Button>
            ))}
          </section>
        </section>
      </main>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Informações da Origem {origem.nome}</ModalHeader>
          <ModalBody>
            <ul className="text-justify">
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
            <h3 className="mt-2 font-bold">{origem.poder.nome}</h3>
            <p className="font-serif italic text-justify">
              &nbsp;&nbsp;{origem.poder.descricao}
            </p>
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

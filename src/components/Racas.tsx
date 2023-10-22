import React, { useState } from "react";
import { TabelaRacas } from "../classes/Tabelas/Racas";
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

interface RaceButtonProps {
  raceName: string;
  onClick: () => void;
}

const RaceButton: React.FC<RaceButtonProps> = ({ raceName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90 focus:bg-gray-600 focus:text-white"
    >
      {raceName}
    </button>
  );
};

interface RacasProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Racas: React.FC<RacasProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);

  const selectedRacas = TabelaRacas.find(
    (raca) => raca.nome === localStorage.getItem("raca")
  );
  const [race, setRace] = useState(selectedRacas ?? TabelaRacas[0]);

  const handleClick = (raceName: string) => {
    const selectedRace = TabelaRacas.find((race) => race.nome === raceName);
    if (selectedRace) {
      setRace(selectedRace);
    }
  };

  const handleSelect = () => {
    console.log(`Raça Selecionada: ${race.nome}`);
    localStorage.setItem("raca", race.nome);
    setPagina(next);
  };

  return (
    <>
      <h1 className="text-xl text-center mb-4">Raça</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-1/2 w-full">
          <div className="desktop:hidden">
            <Select
              placeholder="Escolha Sua Raça"
              onChange={(event) => handleClick(event.target.value)}
            >
              {TabelaRacas.map((raca) => (
                <option key={raca.nome} value={raca.nome}>
                  {raca.nome}
                </option>
              ))}
            </Select>
          </div>
          <h1 className="text-center text-2xl mb-2">{race.nome}</h1>
          <div className="flex">
            <img src={race.imagem} className="w-1/2 h-fit" alt="Personagem" />
            <p className="text-sm my-auto">{race.descricao}</p>
          </div>
          <h2 className="text-center text-xl my-2">
            {race.atributos.join(" | ")}
          </h2>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <button
              onClick={handleSelect}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Confirmar
            </button>
            <button
              onClick={onOpen}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Ver Mais
            </button>
          </div>
        </section>
        <section className="order-2 grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid">
          {TabelaRacas.map((raca) => (
            <RaceButton
              key={raca.nome}
              raceName={raca.nome}
              onClick={() => handleClick(raca.nome)}
            />
          ))}
        </section>
      </div>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Informações da raça {race.nome}</ModalHeader>
          <ModalBody>
            <h3 className="mt-2 font-bold">Atributos</h3>
            <p>{race.atributos.join(", ")}</p>
            <h3 className="mt-2 font-bold">Poderes</h3>
            <ul>
              <Accordion
                allowToggle
                className="border border-gray-200 px-2 rounded-lg"
              >
                {race.poderes.map((power, index) => (
                  <li key={index} className="text-sm my-2">
                    <i>
                      <AccordionItem>
                        <h2>
                          <AccordionButton className="flex justify-between">
                            <b className="font-bold">{power.nome}</b>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel pb={4}>
                          <p>{power.descricao}</p>
                        </AccordionPanel>
                      </AccordionItem>
                    </i>
                  </li>
                ))}
              </Accordion>
            </ul>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mx={"auto"} onClick={handleSelect}>
              Confirmar
            </Button>
            <Button colorScheme="red" mx={"auto"} onClick={onClose}>
              Fechar
            </Button>
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Racas;

import React, { useState } from "react";
import { TabelaRacas } from "../classes/Tabelas/Racas";
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
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useDisclosure,
} from "@chakra-ui/react";

interface RacasProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Racas: React.FC<RacasProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const [atributosSelecionados, setAtributosSelecionados] = useState([
    { nome: "Força", valor: 0 },
    { nome: "Destreza", valor: 0 },
    { nome: "Constituição", valor: 0 },
    { nome: "Inteligência", valor: 0 },
    { nome: "Sabedoria", valor: 0 },
    { nome: "Carisma", valor: 0 },
  ]);
  const finalRef2 = React.useRef(null);
  const finalRef = React.useRef(null);

  const selectedRacas = TabelaRacas.find(
    (raca) => raca.nome === localStorage.getItem("raca")
  );
  const [raceSelecionada, setRaceSelecionada] = useState(
    selectedRacas ?? TabelaRacas[0]
  );

  const handleRaceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedRace = TabelaRacas.find(
      (race) => race.nome === event.target.value
    );
    if (selectedRace) {
      setRaceSelecionada(selectedRace);
    }
  };

  const handleSelect = () => {
    setContador(0);
    if (raceSelecionada.escolhaAtributo == true) {
      for (let i = 0; i < atributosSelecionados.length; i++) {
        const x = atributosSelecionados[i];
        if (x.valor !== 0) {
          atributosSelecionados[i].valor = 0;
        }
      }
      if (raceSelecionada.atributos.length === 2) {
        const [atributoNome, atributoNum] = raceSelecionada.atributos[1].split(" ");
        const atributoIndex = atributosSelecionados.findIndex(
          (atributo) => atributo.nome === atributoNome
        );
        console.log(atributosSelecionados[atributoIndex]);
        atributosSelecionados[atributoIndex].valor = -1;
      }
      onOpen2();
      console.log("Escolha de atributos");
    } else {
      console.log(`Raça Selecionada: ${raceSelecionada.nome}`);
      for (let i = 0; i < raceSelecionada.atributos.length; i++) {
        const [atributoNome, atributoNum] = raceSelecionada.atributos[i].split(" ");
        const atributoIndex = atributosSelecionados.findIndex(
          (atributo) => atributo.nome === atributoNome
        );
        atributosSelecionados[atributoIndex].valor = parseInt(atributoNum);
      }
      localStorage.setItem("atributos", JSON.stringify(atributosSelecionados));
      localStorage.setItem("raca", raceSelecionada.nome);
      setPagina(next);
    }
  };

  const handleArtibutoChange = () => {
    if (contador === 3) {
    console.log(`Raça Selecionada: ${raceSelecionada.nome}`);
    console.log(atributosSelecionados);
    localStorage.setItem("atributos", JSON.stringify(atributosSelecionados));
    localStorage.setItem("raca", raceSelecionada.nome);
    setPagina(next);
    } else {
      alert("Você deve escolher 3 atributos");
    }
  };

  const [contador, setContador] = useState<number>(0);

  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">Escolha sua Raça</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-1/2 w-full">
          <div className="desktop:hidden">
            <Select
              placeholder="Escolha Sua Raça"
              onChange={handleRaceChange}
            >
              {TabelaRacas.map((raca) => (
                <option
                  selected={raca.nome == (raceSelecionada?.nome ?? "")}
                  key={raca.nome}
                  value={raca.nome}
                >
                  {raca.nome}
                </option>
              ))}
            </Select>
          </div>
          <h1 className="text-center text-2xl mb-2">{raceSelecionada.nome}</h1>
          <div className="flex desktop:flex-row flex-col">
            <img
              src={raceSelecionada.imagem}
              className="desktop:w-1/2  h-fit"
              alt={raceSelecionada.nome}
              title={raceSelecionada.nome}
            />
            <p className="text-sm my-auto text-justify font-serif">
              &nbsp;&nbsp;{raceSelecionada.descricao}
            </p>
          </div>
          <h2 className="text-center text-xl my-2">
            {raceSelecionada.atributos.join(" | ")}
          </h2>
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
        <section className="order-2 grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid">
          {TabelaRacas.map((race) => (
            <Button
              key={race.nome}
              onClick={() =>
                handleRaceChange({
                  target: { value: race.nome },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
              _active={{
                color: "red.900",
                bg: "gray.300",
              }}
              isActive={race.nome === raceSelecionada.nome}
              width="auto"
              whiteSpace="normal"
              wordBreak="break-word"
              className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg opacity-80 mb-2"
            >
              {race.nome}
            </Button>
          ))}
        </section>
      </div>
      <Modal finalFocusRef={finalRef2} isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent className="font-tormanta">
          <ModalHeader>Escolha seus atributos</ModalHeader>
          <ModalBody>
            <h3 className="mt-2 font-bold">{raceSelecionada.atributos}</h3>
            <div>
              <div className="flex flex-col gap-2">
                {atributosSelecionados.map((atributo, index) => (
                  <div key={index}>
                    <Checkbox isDisabled={atributo.valor < 0 || (contador >= 3 && !(atributosSelecionados[index].valor == 1))} onChange={
                      (event) => {
                        const newAtributos = [...atributosSelecionados];
                        const atributoIndex = newAtributos.findIndex(
                          (atributo) => atributo.nome === event.target.name
                        );
                        newAtributos[atributoIndex].valor = event.target.checked ? 1 : 0;
                        setAtributosSelecionados(newAtributos);
                        const newContador = event.target.checked ? contador + 1 : contador - 1;
                        setContador(newContador);
                      }
                    } name={atributo.nome}
                    >
                      {atributo.nome}
                    </Checkbox>
                  </div>
                ))}
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button
              ref={finalRef2}
              colorScheme="blue"
              mx={"auto"}
              onClick={handleArtibutoChange}
            >
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
        <ModalCloseButton />
      </Modal>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Informações da raça {raceSelecionada.nome}</ModalHeader>
          <ModalBody>
            <h3 className="mt-2 font-bold">Atributos</h3>
            <p>{raceSelecionada.atributos.join(", ")}</p>
            <h3 className="mt-2 font-bold">Poderes</h3>
            <ul>
              <Accordion
                allowToggle
                className="border border-gray-200 px-2 rounded-lg"
              >
                {raceSelecionada.poderes.map((power, index) => (
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
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={handleSelect}>
              Confirmar
            </Button>
          </ModalFooter>
          <ModalCloseButton />
        </ModalContent>
      </Modal>
    </>
  );
};

export default Racas;

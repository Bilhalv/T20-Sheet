import React, { useState } from "react";
import { TabelaClasses } from "../classes/Tabelas/Classes";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Accordion,
  AccordionItem,
  AccordionButton,
  Box,
  AccordionIcon,
  AccordionPanel,
  Select,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";

interface ClassButtonProps {
  className: string;
  onClick: () => void;
}

const RaceButton: React.FC<ClassButtonProps> = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90 focus:bg-gray-600 focus:text-white w-40"
    >
      {className}
    </button>
  );
};

interface ClassesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Classes: React.FC<ClassesProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [alt, setAlt] = useState(localStorage.getItem("alt") ?? "");
  const selecteClass = TabelaClasses.find(
    (classe) => classe.nome === localStorage.getItem("classe")
  );
  const selectedAlt = localStorage.getItem("alt");
  const [selectedClass, setSelectedClass] = useState(
    selecteClass ?? TabelaClasses[0]
  );
  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedClass = TabelaClasses.find(
      (classe) => classe.nome === event.target.value
    );
    if (selectedClass) {
      setSelectedClass(selectedClass);
    }
  };

  const handleSelect = () => {
    console.log(`Classe Selecionada: ${selectedClass.nome}`);
    localStorage.setItem("classe", selectedClass.nome);
    localStorage.setItem("alt", alt);
    setPagina(next);
  };

  const handleClickAlt = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlt = event.target.value;
    setAlt(selectedAlt);
  };

  return (
    <>
      <h1 className="text-xl text-center mb-4">Classes</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full">
          <div className="flex flex-row-reverse">
            {selectedClass.nome === "Arcanista" && (
              <Select
                placeholder="Escolha seu caminho"
                onChange={handleClickAlt}
                required={true}
              >
                <option
                  selected={"feiticeiro" == selectedAlt}
                  value="feiticeiro"
                >
                  Feiticeiro
                </option>
                <option selected={"mago" == selectedAlt} value="mago">
                  Mago
                </option>
                <option selected={"bruxo" == selectedAlt} value="bruxo">
                  Bruxo
                </option>
              </Select>
            )}
            {selectedClass.nome === "Inventor" && (
              <Select
                placeholder="Escolha seu protótipo"
                onChange={handleClickAlt}
                required={true}
              >
                <option selected={"alquimicos" == selectedAlt} value="alquimicos">
                  10 itens alquimicos
                </option>
                <option selected={"superior" == selectedAlt} value="superior">
                  Um item superior
                </option>
              </Select>
            )}
            <div className="desktop:hidden w-full">
              <Select placeholder="Escolha sua Classe" onChange={handleClick}>
                {TabelaClasses.map((classe) => (
                  <option
                    selected={classe.nome == selectedClass.nome}
                    key={classe.nome}
                    value={classe.nome}
                  >
                    {classe.nome}
                  </option>
                ))}
              </Select>
            </div>
          </div>
          <h1 className="text-center text-2xl">{selectedClass.nome}</h1>
          <img
            src={selectedClass.imagem}
            alt={selectedClass.nome}
            title={selectedClass.nome}
            className="w-[50%] h-fit mx-auto"
          />
          <p className="text-center text-lg w-[75%] mx-auto font-serif">
            {selectedClass.descricao}
          </p>
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
        <section className="order-2 grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out w-2/5 hidden desktop:flex flex-wrap justify-center ">
          {TabelaClasses.map((classe) => (
            <RaceButton
              key={classe.nome}
              className={classe.nome}
              onClick={() =>
                handleClick({
                  target: { value: classe.nome },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
            />
          ))}
        </section>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent className="font-tormenta">
            <ModalHeader>
              Informações da classe {selectedClass.nome}
            </ModalHeader>
            <ModalBody>
              <h1 className="text-center font-bold">Pontos de Vida</h1>
              <div className="flex italic font-serif justify-between">
                <p>
                  <b>Inicial:</b> {selectedClass.vidainicial} + constituição
                </p>
                <p className="text-right">
                  <b>Por Nivel:</b> {selectedClass.vidapnivel} + constituição
                </p>
              </div>
              <h1 className="text-center font-bold">Pontos de Mana</h1>
              <div className="flex italic font-serif ">
                <p>
                  <b>Por Nivel:</b> {selectedClass.manapnivel}PM
                </p>
              </div>
              <h1 className="text-center font-bold">Perícias</h1>
              <div>
                <p className="italic font-serif text-justify">
                  &nbsp;&nbsp;{selectedClass.pericias.join(", ")} e{" "}
                  <b>escolha&nbsp;{selectedClass.periciasescolhanum} entre</b>
                  &nbsp;
                  {selectedClass.periciasescolha.join(", ")}
                </p>
              </div>
              <h1 className="text-center font-bold">Habilidades</h1>
              <div>
                <Accordion allowToggle>
                  {selectedClass.habilidades.map((habilidade) => (
                    <AccordionItem>
                      <h2>
                        <AccordionButton>
                          <Box
                            as="span"
                            flex="1"
                            textAlign="left"
                            _firstLetter={{ textTransform: "uppercase" }}
                          >
                            {habilidade}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel
                        className="italic font-serif text-justify"
                        pb={4}
                      >
                        &nbsp;&nbsp;{habilidade}
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
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
      </div>
    </>
  );
};

export default Classes;

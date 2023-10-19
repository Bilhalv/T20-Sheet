import React, { useState } from "react";
import { TabelaClasses } from "../classes/Tabelas/Classes";
import { next } from "../classes/Util/next";
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
} from "@chakra-ui/react";

interface ClassButtonProps {
  className: string;
  onClick: () => void;
}

const RaceButton: React.FC<ClassButtonProps> = ({ className, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90 focus:bg-gray-600 focus:text-white"
    >
      {className}
    </button>
  );
};

const Classes: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const [selectedClass, setSelectedClass] = useState(TabelaClasses[0]);

  const handleClick = (className: string) => {
    const selectedClass = TabelaClasses.find(
      (classe) => classe.nome === className
    );
    if (selectedClass) {
      setSelectedClass(selectedClass);
    }
  };

  const handleSelect = () => {
    console.log(`Classe Selecionada: ${selectedClass.nome}`);
    localStorage.setItem("classe", selectedClass.nome);
    next("Classes");
  };

  return (
    <>
      <h1 className="text-xl text-center mb-4">Classes</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full">
          <h1 className="text-center text-2xl">{selectedClass.nome}</h1>
          <img src={selectedClass.imagem} className="w-[50%] h-fit mx-auto" />
          <p className="text-center text-lg w-[75%] mx-auto">
            {selectedClass.descricao}
          </p>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <button
              onClick={handleSelect}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-[25%] transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Confirmar
            </button>
            <button
              onClick={onOpen}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-[25%] transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Ver Mais
            </button>
          </div>
        </section>
        <section className="grid order-2 grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out">
          {TabelaClasses.map((classe) => (
            <RaceButton
              key={classe.nome}
              className={classe.nome}
              onClick={() => handleClick(classe.nome)}
            />
          ))}
        </section>
        <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>
              Informações da classe {selectedClass.nome}
            </ModalHeader>
            <ModalBody>
              <h1 className="text-center font-bold">Pontos de Vida</h1>
              <div className="flex justify-between">
                <p>Inicial: {selectedClass.vidainicial} + constituição</p>
                <p>Por Nivel: {selectedClass.vidapnivel} + constituição</p>
              </div>
              <h1 className="text-center font-bold">Pontos de Mana</h1>
              <div className="flex">
                <p>Por Nivel: {selectedClass.manapnivel}PM</p>
              </div>
              <h1 className="text-center font-bold">Perícias</h1>
              <div>
                <p className="italic">
                  {selectedClass.pericias.join(", ")} e escolha{" "}
                  {selectedClass.periciasescolhanum} entre{" "}
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
                          <Box as="span" flex="1" textAlign="left" _firstLetter={{ textTransform: "uppercase" }}>
                            {habilidade}
                          </Box>
                          <AccordionIcon />
                        </AccordionButton>
                      </h2>
                      <AccordionPanel className="italic" pb={4}>
                        {habilidade} é uma habilidade da classe {selectedClass.nome}
                      </AccordionPanel>
                    </AccordionItem>
                  ))  
                  }
                </Accordion>
              </div>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="red" mx={"auto"} onClick={onClose}>
                Fechar
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

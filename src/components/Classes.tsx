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

interface ClassesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Classes: React.FC<ClassesProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const finalRef2 = React.useRef(null);
  const [alt, setAlt] = useState<string[]>(["a"]);
  const selecteClass = TabelaClasses.find(
    (classe) => classe.nome === localStorage.getItem("classe")
  );
  const selectedAlt = localStorage.getItem("alt");
  const [selectedClass, setSelectedClass] = useState(
    selecteClass ?? TabelaClasses[0]
  );
  const handleClick = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAlt(["a"]);
    setContador(0);
    const selectedClass = TabelaClasses.find(
      (classe) => classe.nome === event.target.value
    );
    if (selectedClass) {
      setSelectedClass(selectedClass);
    }
  };
  
  const [contador, setContador] = useState(0);
  const handleSelect = () => {
    if ((selectedClass.nome === "Arcanista" || selectedClass.nome === "Inventor" || selectedClass.nome === "Bardo" || selectedClass.nome === "Druida")) {
      if (alt[0] === "a"){
        alert("Escolha uma alternativa");
      } else {
          if (contador < 3 && selectedClass.nome === "Bardo" || contador < 3 && selectedClass.nome === "Druida"){
            alert("Escolha mais "+(3-contador)+" escola"+(contador === 2 ? "" : "s"));
            return;
          }
          console.log(`Classe Selecionada: ${selectedClass.nome}`);
          localStorage.setItem("classe", selectedClass.nome);
          localStorage.setItem("alt", JSON.stringify(alt));
          setPagina(next);
          onClose2();
        
      }
    } else{
      console.log(`Classe Selecionada: ${selectedClass.nome}`);
      localStorage.setItem("classe", selectedClass.nome);
      setPagina(next);
    }
  };

  const handleClickAlt = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedAlt = event.target.value;
    setAlt([selectedAlt]);
  };

  const escolas = [
    { nome: "Abjuração", valor: "abjur" },
    { nome: "Adivinhação", valor: "adiv" },
    { nome: "Convocação", valor: "conv" },
    { nome: "Encantamento", valor: "encan" },
    { nome: "Evocação", valor: "evoc" },
    { nome: "Ilusão", valor: "ilusao" },
    { nome: "Necromancia", valor: "necro" },
    { nome: "Transmutação", valor: "trans" },
  ];

  return (
    <>
      <h1 className="text-xl text-center mb-4">Classes</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full ">
          <div className="flex desktop:flex-row-reverse flex-col-reverse gap-1">
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
            {(selectedClass.nome === "Bardo" || selectedClass.nome === "Druida") && (
              <Button
                onClick={onOpen2}
                variant={"outline"}
                className="w-full"
                _hover={{ bg: "transparent", borderColor: "gray.300" }}
              >
                Selecionar escolas
              </Button>
            )}
            {selectedClass.nome === "Inventor" && (
              <Select
                placeholder="Escolha seu protótipo"
                onChange={handleClickAlt}
                required={true}
              >
                <option
                  selected={"alquimicos" == selectedAlt}
                  value="alquimicos"
                >
                  10 itens alquimicos
                </option>
                <option selected={"superior" == selectedAlt} value="superior">
                  Um item superior
                </option>
              </Select>
            )}
            <div className="desktop:hidden w-full transition-all ease-in-out rounded-md">
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
        <section className="order-2 grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid w-1/2">
          {TabelaClasses.map((classe) => (
            <Button
              key={classe.nome}
              onClick={() =>
                handleClick({
                  target: { value: classe.nome },
                } as React.ChangeEvent<HTMLSelectElement>)
              }
              isActive={classe.nome === selectedClass?.nome}
              _active={{
                color: "red.900",
                bg: "gray.300",
              }}
              width="auto"
              whiteSpace="normal"
              wordBreak="break-word"
              className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg opacity-80 mb-2"
            >
              {classe.nome}
            </Button>
          ))}
        </section>
        <Modal finalFocusRef={finalRef2} isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent className="font-tormenta">
            <ModalHeader>Escolha suas escolas</ModalHeader>
            <ModalBody>
              <CheckboxGroup colorScheme="red" value={alt}>
                <div className="grid grid-cols-2 gap-2 mx-auto h-fit">
                {escolas.map((escola) => (
                  <Checkbox
                    onChange={(event) => {
                      let newAlt = [...alt];
                      let newContador = contador;
                      if (
                        event &&
                        event.target &&
                        event.target.checked &&
                        !alt.includes(escola.valor)
                      ) {
                        if (alt.includes("a")) {
                          newAlt.splice(newAlt.indexOf("a"), 1);
                        }
                        newAlt.push(event.target.value);
                        newContador = newContador + 1;
                      } else if (!event.target.checked) {
                        newAlt.splice(newAlt.indexOf(event.target.value), 1);
                        newContador = newContador - 1;
                      }
                      if (newAlt.length === 0) {
                        newAlt.push("a");
                      }
                      setContador(newContador);
                      setAlt(newAlt);
                    }}
                    value={escola.valor}
                    isDisabled={contador >= 3 && !alt.includes(escola.valor)}
                  >
                    {escola.nome}
                  </Checkbox>
                ))}
                </div>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mx={"auto"} onClick={onClose2}>
                Fechar
              </Button>
              <Button colorScheme="blue" mx={"auto"} onClick={handleSelect}>
                Confirmar
              </Button>
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
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

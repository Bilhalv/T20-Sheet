import React, { useState } from "react";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
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
  Select,
  CheckboxGroup,
  Checkbox,
} from "@chakra-ui/react";
import { TabelaPericiasEnum } from "../../classes/Tabelas/Pericias";
import VerMais from "../Geral/VerMais";

interface ClassesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Classes: React.FC<ClassesProps> = ({ setPagina, next }) => {
  const {
    isOpen: isOpen2,
    onOpen: onOpen2,
    onClose: onClose2,
  } = useDisclosure();
  const finalRef2 = React.useRef(null);
  const {
    isOpen: isOpen3,
    onOpen: onOpen3,
    onClose: onClose3,
  } = useDisclosure();
  const finalRef3 = React.useRef(null);
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
    reset();
    setPericias([]);
    const selectedClass = TabelaClasses.find(
      (classe) => classe.nome === event.target.value
    );
    if (selectedClass) {
      setSelectedClass(selectedClass);
    }
  };

  const [contador, setContador] = useState(0);
  const [pericias, setPericias] = useState<string[]>([]);

  const handleSelect = () => {
    if (
      selectedClass.nome === "Arcanista" ||
      selectedClass.nome === "Inventor" ||
      selectedClass.nome === "Bardo" ||
      selectedClass.nome === "Druida"
    ) {
      if (isOpen2 !== true) {
        setAlt(["a"]);
        onOpen2();
        return;
      }
      if (alt[0] === "a") {
        alert("Escolha uma alternativa");
        return;
      } else {
        if (
          (contador < 3 && selectedClass.nome === "Bardo") ||
          (contador < 3 && selectedClass.nome === "Druida")
        ) {
          alert(
            "Escolha mais " +
              (3 - contador) +
              " escola" +
              (contador === 2 ? "" : "s")
          );
          return;
        }
        onClose2();
      }
    }
    if (setPericias.length > 1) {
      reset();
    }
    onOpen3();
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

  const handlePericias = () => {
    if (contador >= selectedClass.periciasescolhanum) {
      console.log(`Classe Selecionada: ${selectedClass.nome}`);
      localStorage.setItem("classe", selectedClass.nome);
      localStorage.setItem("alt", JSON.stringify(alt));
      let updatedPericias = [...pericias];
      selectedClass.pericias.forEach((pericia) => {
        updatedPericias.push(pericia);
      });
      if (
        selectedClass.nome === "Bucaneiro" ||
        selectedClass.nome === "Caçador"
      ) {
        updatedPericias.map((pericia) => {
          if (pericia === "Luta" || pericia === "Pontaria") {
            updatedPericias.splice(updatedPericias.indexOf(pericia), 1);
          }
        });
        updatedPericias.push(periciasExtras);
      }
      setPericias(updatedPericias);
      localStorage.setItem("pericias", JSON.stringify(updatedPericias));
      onClose3();
      localStorage.setItem("pagina", next);
      setPagina(next);
    } else {
      alert(
        "Escolha mais " +
          (selectedClass.periciasescolhanum - contador) +
          " pericia" +
          (+contador <= 2 ? "s" : "")
      );
    }
  };

  const reset = () => {
    setContador(0);
  };
  const [periciasExtras, setPericiasExtras] = useState("");
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">Escolha sua Classe</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full ">
          <div className="flex desktop:flex-row-reverse flex-col-reverse gap-1">
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
            <VerMais
              handleSelect={handleSelect}
              selected={selectedClass.nome}
              pagina="Classe"
            />
            <button
              onClick={handleSelect}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Confirmar
            </button>
          </div>
        </section>
        <section className="order-2 grid-cols-3 gap-5 w-1/2 mx-auto h-full transition-all ease-in-out hidden desktop:grid">
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
              className="bg-gray-300 p-2 w-full rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg opacity-80"
            >
              {classe.nome}
            </Button>
          ))}
        </section>
        <Modal finalFocusRef={finalRef3} isOpen={isOpen3} onClose={onClose3}>
          <ModalOverlay />
          <ModalContent className="font-tormenta">
            <ModalHeader>Escolha suas pericias</ModalHeader>
            <ModalBody>
              {selectedClass.nome === "Bucaneiro" ||
              selectedClass.nome === "Caçador" ? (
                <Select
                  className="mb-2"
                  placeholder="Escolha sua pericia"
                  onChange={(event) => {
                    setPericiasExtras(event.target.value);
                  }}
                >
                  <option value={TabelaPericiasEnum.Luta}>Luta</option>
                  <option value={TabelaPericiasEnum.Pontaria}>Pontaria</option>
                </Select>
              ) : null}
              <CheckboxGroup colorScheme="red" value={pericias}>
                <div className="grid grid-cols-2 gap-2 mx-auto h-fit">
                  {selectedClass.periciasescolha.map((pericia) => (
                    <Checkbox
                      onChange={(pericia) => {
                        let newPericias = [...pericias];
                        let newContador = contador;
                        if (
                          pericia.target.checked &&
                          !pericias.includes(pericia.target.value)
                        ) {
                          newPericias.push(pericia.target.value);
                          newContador = newContador + 1;
                        } else if (!pericia.target.checked) {
                          newPericias.splice(
                            newPericias.indexOf(pericia.target.value),
                            1
                          );
                          newContador = newContador - 1;
                        }
                        setContador(newContador);
                        setPericias(newPericias);
                      }}
                      value={pericia}
                      isDisabled={
                        contador >= selectedClass.periciasescolhanum &&
                        !pericias.includes(pericia)
                      }
                    >
                      {pericia}
                    </Checkbox>
                  ))}
                </div>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red" mx={"auto"} onClick={onClose3}>
                Fechar
              </Button>
              <Button colorScheme="blue" mx={"auto"} onClick={handlePericias}>
                Confirmar
              </Button>
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
        <Modal finalFocusRef={finalRef2} isOpen={isOpen2} onClose={onClose2}>
          <ModalOverlay />
          <ModalContent className="font-tormenta">
            <ModalHeader>
              {selectedClass.nome === "Bardo" || selectedClass.nome === "Druida"
                ? "Escolha suas escolas"
                : selectedClass.nome === "Arcanista"
                ? "Escolha seu caminho"
                : "Escolha seu protótipo"}
            </ModalHeader>
            <ModalBody>
              {selectedClass.nome === "Bardo" ||
              selectedClass.nome === "Druida" ? (
                <CheckboxGroup colorScheme="red">
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
                            newAlt.splice(
                              newAlt.indexOf(event.target.value),
                              1
                            );
                            newContador = newContador - 1;
                          }
                          if (newAlt.length === 0) {
                            newAlt.push("a");
                          }
                          setContador(newContador);
                          setAlt(newAlt);
                        }}
                        value={escola.valor}
                        isDisabled={
                          contador >= 3 && !alt.includes(escola.valor)
                        }
                      >
                        {escola.nome}
                      </Checkbox>
                    ))}
                  </div>
                </CheckboxGroup>
              ) : selectedClass.nome === "Arcanista" ? (
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
              ) : (
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
      </div>
    </>
  );
};

export default Classes;

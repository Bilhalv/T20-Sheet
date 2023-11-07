import React, { useReducer, useState } from "react";
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
import SelectList from "../Geral/SelectList";
import Botoes from "../Geral/Botoes";
import useCustomToast from "../Geral/Toasted";

interface ClassesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Classes: React.FC<ClassesProps> = ({ setPagina, next }) => {
  const { showCustomToast } = useCustomToast();

  const initialState = {
    isOpen2: false,
    isOpen3: false,
  };

  function reducer(state: any, action: any) {
    switch (action.type) {
      case "toggleAlt":
        return { ...state, isOpen2: !state.isOpen2 };
      case "togglePericias":
        return { ...state, isOpen3: !state.isOpen3 };
      default:
        throw new Error();
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const finalRef2 = React.useRef(null);
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
      if (state.isOpen2 !== true) {
        setAlt(["a"]);
        dispatch({ type: "toggleAlt" });
        return;
      }
      if (alt[0] === "a") {
        showCustomToast({
          title: "Atenção",
          desc: "Escolha uma alternativa",
          status: "warning",
        });
        return;
      } else {
        if (
          (contador < 3 && selectedClass.nome === "Bardo") ||
          (contador < 3 && selectedClass.nome === "Druida")
        ) {
          showCustomToast({
            title: "Atenção",
            desc: `Escolha mais ${3 - contador} escola${
              contador === 2 ? "" : "s"
            }`,
            status: "warning",
          });
          return;
        }
        dispatch({ type: "toggleAlt" });
      }
    }
    if (setPericias.length > 1) {
      reset();
    }
    dispatch({ type: "togglePericias" });
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
      showCustomToast({
        title: "Classe selecionada com sucesso",
        desc: `Classe selecionada: ${selectedClass.nome}`,
      });
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
      dispatch({ type: "togglePericias" });
      localStorage.setItem("pagina", next);
      setPagina(next);
    } else {
      showCustomToast({
        title: "Atenção",
        desc: `Escolha mais ${
          selectedClass.periciasescolhanum - contador
        } pericia${contador === 2 ? "" : "s"}`,
        status: "warning",
      });
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
              <SelectList
                onChange={handleClick}
                tabela={TabelaClasses}
                selected={selectedClass.nome}
                placeholder="Escolha sua classe"
              />
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
              titulo={`Informações da classe ${selectedClass.nome}`}
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
        <section className="order-2 grid-cols-3 gap-3 w-1/2 mx-auto h-full transition-all ease-in-out hidden desktop:grid">
          <Botoes
            onChange={handleClick}
            tabela={TabelaClasses}
            selected={selectedClass.nome}
          />
        </section>
        <Modal
          finalFocusRef={finalRef3}
          isOpen={state.isOpen3}
          onClose={() => dispatch({ type: "togglePericias" })}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
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
              <Button
                colorScheme="red"
                mx={"auto"}
                onClick={() => dispatch({ type: "togglePericias" })}
              >
                Fechar
              </Button>
              <Button colorScheme="blue" mx={"auto"} onClick={handlePericias}>
                Confirmar
              </Button>
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
        <Modal
          finalFocusRef={finalRef2}
          isOpen={state.isOpen2}
          onClose={() => dispatch({ type: "toggleAlt" })}
        >
          <ModalOverlay backdropFilter="blur(5px)" />
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
              <Button
                colorScheme="red"
                mx={"auto"}
                onClick={() => dispatch({ type: "toggleAlt" })}
              >
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

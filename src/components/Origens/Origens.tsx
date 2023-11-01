import React, { useState } from "react";
import { TabelaOrigens } from "../../classes/Tabelas/Origens";
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
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { tab } from "@testing-library/user-event/dist/tab";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";
import VerMais from "../Geral/VerMais";

interface OrigensProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Origens: React.FC<OrigensProps> = ({ setPagina, next }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
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
  const selectedOrigem = TabelaOrigens.find(
    (origem) => origem.nome === localStorage.getItem("origem")
  );
  const [origem, setOrigem] = useState(selectedOrigem ?? TabelaOrigens[0]);
  const [origemselecionada, setOrigemselecionada] = useState(
    selectedOrigem ?? TabelaOrigens[0]
  );
  let descricao2 = origem.descricao.split(".");
  let descricao1 = descricao2.shift() + ".";
  const [beneficiosSelecionados, setBeneficiosSelecionados] = useState([
    { tipo: "Perícias", beneficio: [""] },
    { tipo: "Poderes", beneficio: [""] },
  ]);

  const handleOrigemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setBeneficiosSelecionados([
      { tipo: "Perícias", beneficio: [""] },
      { tipo: "Poderes", beneficio: [""] },
    ]);
    setContador(0);
    const selectedOrigem = TabelaOrigens.find(
      (origem) => origem.nome === event.target.value
    );
    if (selectedOrigem) {
      setOrigem(selectedOrigem);
      setOrigemselecionada(selectedOrigem);
      localStorage.setItem("selecionado", selectedOrigem.nome)
      descricao2 = selectedOrigem.descricao.split(".");
      descricao1 = descricao2.shift() + ".";
    }
  };

  const handleSelect = () => {
    onOpen2();
  };

  const [contador, setContador] = useState(0);
  const [tipoPoder, setTipoPoder] = useState("combate");

  const [selectedPoder, setSelectedPoder] = useState(TabelaPoderes[0]);

  const handleBeneficio = () => {
    if (contador < 2) {
      alert("Escolha 2 benefícios");
      return;
    } else {
      if (beneficiosSelecionados[1].beneficio.includes("Combate")) {
        const tipoPoderRemover = beneficiosSelecionados[1].beneficio.find(
          (poder) => poder === "Combate"
        );
        setBeneficiosSelecionados((beneficios) => {
          const newBeneficios = [...beneficios];
          newBeneficios[1].beneficio =
            newBeneficios[1].beneficio.filter(
              (beneficio) => beneficio !== tipoPoderRemover
            );
          return newBeneficios;
        });
        setTipoPoder("combate");
        onOpen3();
      } else if (beneficiosSelecionados[1].beneficio.includes("Tormenta")) {
        const tipoPoderRemover = beneficiosSelecionados[1].beneficio.find(
          (poder) => poder === "Tormenta"
        );
        setBeneficiosSelecionados((beneficios) => {
          const newBeneficios = [...beneficios];
          newBeneficios[1].beneficio =
            newBeneficios[1].beneficio.filter(
              (beneficio) => beneficio !== tipoPoderRemover
            );
          return newBeneficios;
        });
        setTipoPoder("tormenta");
        onOpen3();
      } else {
        onClose3();
        console.log(`Origem Selecionada: ${origem.nome}`);
        localStorage.setItem("origem", origem.nome);
        let removerEspacoPericia = "";
        let removerEspacoPoder = "";
        if (beneficiosSelecionados[0].beneficio.length > 1) {
          removerEspacoPericia = beneficiosSelecionados[0].beneficio.shift()!;
        }
        if (beneficiosSelecionados[1].beneficio.length > 1) {
          removerEspacoPoder = beneficiosSelecionados[1].beneficio.shift()!;
        }
        setBeneficiosSelecionados([
          { tipo: "Perícias", beneficio: [removerEspacoPericia] },
          { tipo: "Poderes", beneficio: [removerEspacoPoder] },
        ]);
        localStorage.setItem(
          "beneficios",
          JSON.stringify(beneficiosSelecionados)
        );
        localStorage.setItem("pagina", next);
        setPagina(next);
      }
    }
  };
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">Escolha sua Origem</h1>
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
            <VerMais titulo="Informações" handleSelect={handleSelect}/>
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
                isActive={origem.nome === origemselecionada?.nome}
                _active={{
                  color: "red.900",
                  bg: "gray.300",
                }}
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
      {/* <Modal finalFocusRef={finalRef3} isOpen={isOpen3} onClose={onClose3}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Escolha de poder {tipoPoder}</ModalHeader>
          <ModalBody>
            <Select
              placeholder="Escolha um poder"
              onChange={(e) => {
                setBeneficiosSelecionados((beneficios) => {
                  const newBeneficios = [...beneficios];
                  newBeneficios[1].beneficio =
                    newBeneficios[1].beneficio.filter(
                      (beneficio) => beneficio !== selectedPoder.nome
                    );
                  if (!newBeneficios[1].beneficio.includes(e.target.value)) {
                    newBeneficios[1].beneficio.push(e.target.value);
                  }
                  return newBeneficios;
                });
                setSelectedPoder(
                  TabelaPoderes.find(
                    (poder) => poder.nome === e.target.value
                  ) ??
                    TabelaPoderes.filter((poder) => poder.tipo === tipoPoder)[0]
                );
              }}
            >
              {TabelaPoderes.filter((poder) => poder.tipo === tipoPoder).map(
                (poder) => (
                  <option key={poder.nome} value={poder.nome}>
                    {poder.nome}
                  </option>
                )
              )}
            </Select>
            <h1>{selectedPoder.nome}</h1>
            <p className="text-justify font-serif italic">
              &nbsp;&nbsp;
              {selectedPoder.descricao}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose3}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={handleBeneficio}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal> */}
      <Modal finalFocusRef={finalRef2} isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Benefícios da Origem {origem.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {origem.nome !== "Amnésico" ? (
              <CheckboxGroup>
                <h1 className="font-bold text-center">Perícias</h1>
                <div className="flex flex-row justify-evenly">
                  {origem.beneficios.pericias.map((pericia: any) => (
                    <Checkbox
                      key={pericia}
                      isChecked={beneficiosSelecionados[0].beneficio.includes(
                        pericia
                      )}
                      isDisabled={
                        contador >= 2 &&
                        !beneficiosSelecionados[0].beneficio.includes(pericia)
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setContador(contador + 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            if (!newBeneficios[0].beneficio.includes(pericia)) {
                              newBeneficios[0].beneficio.push(pericia);
                            }
                            return newBeneficios;
                          });
                        } else {
                          setContador(contador - 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            newBeneficios[0].beneficio =
                              newBeneficios[0].beneficio.filter(
                                (beneficio) => beneficio !== pericia
                              );
                            return newBeneficios;
                          });
                        }
                      }}
                    >
                      {pericia}
                    </Checkbox>
                  ))}
                </div>
                <h1 className="font-bold text-center mt-3">Poderes</h1>
                <div className="flex flex-row justify-evenly">
                  {origem.beneficios.poderes.map((poder) => (
                    <Checkbox
                      key={poder}
                      isChecked={beneficiosSelecionados[1].beneficio.includes(
                        poder
                      )}
                      isDisabled={
                        contador >= 2 &&
                        !beneficiosSelecionados[1].beneficio.includes(poder)
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setContador(contador + 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            if (!newBeneficios[1].beneficio.includes(poder)) {
                              newBeneficios[1].beneficio.push(poder);
                            }
                            return newBeneficios;
                          });
                        } else {
                          setContador(contador - 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            newBeneficios[1].beneficio =
                              newBeneficios[1].beneficio.filter(
                                (beneficio) => beneficio !== poder
                              );
                            return newBeneficios;
                          });
                        }
                      }}
                    >
                      {poder}
                    </Checkbox>
                  ))}
                  {origem.nome == "Capanga" ||
                  origem.nome == "Gladiador" ||
                  origem.nome == "Guarda" ||
                  origem.nome == "Soldado" ? (
                    <Checkbox
                      isChecked={beneficiosSelecionados[1].beneficio.includes(
                        "Combate"
                      )}
                      isDisabled={
                        contador >= 2 &&
                        !beneficiosSelecionados[1].beneficio.includes("Combate")
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setContador(contador + 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            if (
                              !newBeneficios[1].beneficio.includes("Combate")
                            ) {
                              newBeneficios[1].beneficio.push("Combate");
                            }
                            return newBeneficios;
                          });
                        } else {
                          setContador(contador - 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            newBeneficios[1].beneficio =
                              newBeneficios[1].beneficio.filter(
                                (beneficio) => beneficio !== "Combate"
                              );
                            return newBeneficios;
                          });
                        }
                      }}
                    >
                      Poder de Combate
                    </Checkbox>
                  ) : origem.nome == "Assistente de Laboratório" ? (
                    <Checkbox
                      isChecked={beneficiosSelecionados[1].beneficio.includes(
                        "Tormenta"
                      )}
                      isDisabled={
                        contador >= 2 &&
                        !beneficiosSelecionados[1].beneficio.includes(
                          "Tormenta"
                        )
                      }
                      onChange={(e) => {
                        if (e.target.checked) {
                          setContador(contador + 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            if (
                              !newBeneficios[1].beneficio.includes("Tormenta")
                            ) {
                              newBeneficios[1].beneficio.push("Tormenta");
                            }
                            return newBeneficios;
                          });
                        } else {
                          setContador(contador - 1);
                          setBeneficiosSelecionados((beneficios) => {
                            const newBeneficios = [...beneficios];
                            newBeneficios[1].beneficio =
                              newBeneficios[1].beneficio.filter(
                                (beneficio) => beneficio !== "Tormenta"
                              );
                            return newBeneficios;
                          });
                        }
                      }}
                    >
                      Poder da Tormenta
                    </Checkbox>
                  ) : null}
                </div>
              </CheckboxGroup>
            ) : (
              <p className="text-justify font-serif italic">
                <Select placeholder="Escolha uma perícia(escolha do mestre)">
                  {TabelaPericias.map((pericia) => (
                    <option key={pericia.nome} value={pericia.nome}>
                      {pericia.nome}
                    </option>
                  ))}
                </Select>
                <Select placeholder="Escolha um poder(escolha do mestre)">
                  {TabelaPoderes.map((poder) => (
                    <option key={poder.nome} value={poder.nome}>
                      {poder.nome}
                    </option>
                  ))}
                </Select>
              </p>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose2}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={handleBeneficio}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Informações da Origem {origem.nome}</ModalHeader>
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
};

export default Origens;

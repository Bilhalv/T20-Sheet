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
  useDisclosure,
} from "@chakra-ui/react";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";
import VerMais from "../Geral/VerMais";
import SelectList from "../Geral/SelectList";
import Botoes, { ConfirmarOnModal, FecharOnModal } from "../Geral/Botoes";
import useCustomToast from "../Geral/Toasted";
import Confirmar from "../Geral/Confirmar";

interface OrigensProps {
  setPagina: (pagina: string) => void;
  next: string;
}

const Origens: React.FC<OrigensProps> = ({ setPagina, next }) => {
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
      descricao2 = selectedOrigem.descricao.split(".");
      descricao1 = descricao2.shift() + ".";
    }
  };

  const handleSelect = () => {
    onOpen2();
  };

  const { showCustomToast } = useCustomToast();
  const [contador, setContador] = useState(0);
  const [tipoPoder, setTipoPoder] = useState("combate");

  const handleBeneficio = () => {
    if (contador < 2) {
      showCustomToast({
        title: "Benefícios incompletos!",
        desc: `Escolha 2 benefícios`,
        status: "warning",
      });
      return;
    } else {
      onClose3();
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
      showCustomToast({
        title: "Origem escolhida com sucesso!",
        desc: `Você escolheu a origem ${origem.nome}`,
      });
      setPagina(next);
    }
  };
  return (
    <>
      <main className="flex gap-5">
        <section className="bg-gray-300 laptop:w-1/2 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] h-fit">
          <section className="flex flex-col gap-2">
            <div className="laptop:hidden">
              <h1 className="text-center text-xl font-bold mb-3">
                Escolha sua Origem
              </h1>
              <SelectList
                onChange={handleOrigemChange}
                tabela={TabelaOrigens}
                selected={origemselecionada.nome}
                placeholder="Escolha sua origem"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl">{origem.nome}</h1>
              <div className="flex flex-col desktop:flex-row items-center">
                <img
                  className="mx-auto w-1/4 laptop:w-1/6 desktop:mx-0 mb-3"
                  src={origem.imagem}
                  alt={origem.nome}
                  title={origem.nome}
                />
                <div className="desktop:ml-4 w-full laptop:w-5/6">
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
            <VerMais
              titulo={`Informações da origem ${origemselecionada.nome}`}
              handleSelect={handleSelect}
              selected={origemselecionada.nome}
              pagina={"Origem"}
            />
            <Confirmar onSelect={handleSelect} pagina="Origem" />
          </div>
        </section>
        <section className="hidden laptop:block p-3">
          <h1 className="text-center text-xl font-bold mb-3">
            Escolha sua Origem
          </h1>
          <section className="order-2 grid-cols-5 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid">
            <Botoes
              onChange={handleOrigemChange}
              tabela={TabelaOrigens}
              selected={origemselecionada.nome}
            />
          </section>
        </section>
      </main>
      <Modal finalFocusRef={finalRef2} isOpen={isOpen2} onClose={onClose2}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader>Benefícios da Origem {origem.nome}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {origem.nome !== "Amnésico" ? (
              <CheckboxGroup>
                <h1 className="font-bold text-center">Perícias</h1>
                <div className="flex flex-row justify-evenly">
                  <Accordion className="w-full" allowToggle>
                    {origem.beneficios.pericias.map((pericia: any) => (
                      <AccordionItem>
                        <AccordionButton className="flex justify-between">
                          <div className="flex gap-2">
                            <Checkbox
                              key={pericia}
                              isChecked={beneficiosSelecionados[0].beneficio.includes(
                                pericia
                              )}
                              isDisabled={
                                contador >= 2 &&
                                !beneficiosSelecionados[0].beneficio.includes(
                                  pericia
                                )
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setContador(contador + 1);
                                  setBeneficiosSelecionados((beneficios) => {
                                    const newBeneficios = [...beneficios];
                                    if (
                                      !newBeneficios[0].beneficio.includes(
                                        pericia
                                      )
                                    ) {
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
                            />
                            {pericia}
                          </div>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <p className="text-justify font-serif italic">
                            &nbsp;&nbsp;&nbsp;
                            {
                              TabelaPericias.find(
                                (periciaTabela) =>
                                  periciaTabela.nome === pericia
                              )?.descricao
                            }
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                <h1 className="font-bold text-center mt-3">Poderes</h1>
                <div className="flex flex-row justify-evenly">
                  <Accordion className="w-full" allowToggle>
                    {origem.beneficios.poderes.map((poder) => (
                      <AccordionItem>
                        <AccordionButton className="flex justify-between">
                          <div className="flex gap-2">
                            <Checkbox
                              key={poder}
                              isChecked={beneficiosSelecionados[1].beneficio.includes(
                                poder
                              )}
                              isDisabled={
                                contador >= 2 &&
                                !beneficiosSelecionados[1].beneficio.includes(
                                  poder
                                )
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setContador(contador + 1);
                                  setBeneficiosSelecionados((beneficios) => {
                                    const newBeneficios = [...beneficios];
                                    if (
                                      !newBeneficios[1].beneficio.includes(
                                        poder
                                      )
                                    ) {
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
                            />
                            {poder}
                          </div>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <p className="text-justify font-serif italic">
                            &nbsp;&nbsp;&nbsp;
                            {
                              TabelaPoderes.find(
                                (poderTabela) => poderTabela.nome === poder
                              )?.descricao
                            }
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                    {origem.nome == "Capanga" ||
                    origem.nome == "Gladiador" ||
                    origem.nome == "Guarda" ||
                    origem.nome == "Soldado" ? (
                      <AccordionItem>
                        <AccordionButton className="flex justify-between">
                          <div className="flex gap-2">
                            <Checkbox
                              isChecked={beneficiosSelecionados[1].beneficio.includes(
                                "Combate"
                              )}
                              isDisabled={
                                contador >= 2 &&
                                !beneficiosSelecionados[1].beneficio.includes(
                                  "Combate"
                                )
                              }
                              onChange={(e) => {
                                if (e.target.checked) {
                                  setContador(contador + 1);
                                  setBeneficiosSelecionados((beneficios) => {
                                    const newBeneficios = [...beneficios];
                                    if (
                                      !newBeneficios[1].beneficio.includes(
                                        "Combate"
                                      )
                                    ) {
                                      newBeneficios[1].beneficio.push(
                                        "Combate"
                                      );
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
                            />
                            Poder de Combate
                          </div>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <p className="text-justify font-serif italic">
                            &nbsp;&nbsp;&nbsp;Um poder de combate da sua escolha
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    ) : origem.nome == "Assistente de Laboratório" ? (
                      <AccordionItem>
                        <AccordionButton className="flex justify-between">
                          <div className="flex gap-2">
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
                                      !newBeneficios[1].beneficio.includes(
                                        "Tormenta"
                                      )
                                    ) {
                                      newBeneficios[1].beneficio.push(
                                        "Tormenta"
                                      );
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
                            />
                            Poder da Tormenta
                          </div>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <p className="text-justify font-serif italic">
                            &nbsp;&nbsp;&nbsp;Um poder da tormenta da sua
                            escolha
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    ) : null}
                  </Accordion>
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
            <FecharOnModal onClose={onClose2} />
            <ConfirmarOnModal onSelect={handleBeneficio} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Origens;

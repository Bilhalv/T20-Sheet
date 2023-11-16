import { tabelaDivindades } from "../../classes/Tabelas/Divindades";
import SelectList from "../Geral/SelectList";
import React, { useState, useEffect } from "react";
import VerMais from "../Geral/VerMais";
import Confirmar from "../Geral/Confirmar";
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
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import useCustomToast from "../Geral/Toasted";

interface DivindadesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Divindades({ setPagina, next }: DivindadesProps) {
  const { showCustomToast } = useCustomToast();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  const mapear = (nome: string) => {
    const mapeado = tabelaDivindades.map((divindade) => {
      if (divindade.nome === nome) {
        return divindade;
      } else {
        return null;
      }
    });
    return mapeado.filter((item) => item !== null);
  };
  const [selected, setSelected] = useState(
    localStorage.getItem("divindade") ?? tabelaDivindades[0].nome
  );

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
    localStorage.setItem("divindade", e.target.value);
  };

  const onChange = (e: any) => {
    setSelected(e.target.value);
    setContador(0);
    console.log(mapear(selected)[0]?.crencas);
  };

  const onSelect = () => {
    if (selected !== "Nenhuma" && selected !== "Todas") {
      onOpen();
      setContador(0);
      setBencao([]);
    } else {
      escolher();
    }
  };

  const [contador, setContador] = useState(0);
  const [bencao, setBencao] = useState([""]);
  const [limite, setLimite] = useState(1);
  const [alternativo, setAlternativo] = useState(false);
  const [classe, setClasse] = useState(localStorage.getItem("classe"));
  const [escolhas, setEscolhas] = useState<string[]>([]);

  useEffect(() => {
    setClasse(localStorage.getItem("classe"));
    if (!escolhas.includes(selected) && escolhas.length > 0) {
      if (selected !== "Nenhuma" && selected !== "Todas") {
        setSelected(escolhas[0]);
      }
    }
  }, [escolhas]);

  useEffect(() => {
    if (["Clérigo", "Paladino", "Druida"].includes(classe || "")) {
      setLimite(2);
    }
    if (classe === "Druida") {
      setEscolhas(["Allihanna", "Megalokk", "Oceano"]);
    } else if (classe === "Paladino") {
      setEscolhas([
        "Azgher",
        "Khalmyr",
        "Lena",
        "Lin-Wu",
        "Marah",
        "Tanna-Toh",
        "Thyatis",
        "Valkaria",
      ]);
    } else {
      setEscolhas(tabelaDivindades.map((divindade) => divindade.nome));
    }
  }, [classe, escolhas]);

  const escolher = () => {
    if (selected === "Todas") {
      if (classe === "Paladino") {
        localStorage.setItem("divindade", "Paladino do bem");
        showCustomToast({
          title: "Religiosidade Escolhida!",
          desc: `Paladino do bem`,
          status: "success",
        });
      } else {
        localStorage.setItem("divindade", "Clérigo do Panteão");
        showCustomToast({
          title: "Religiosidade Escolhida!",
          desc: `Clérigo do Panteão`,
          status: "success",
        });
      }
    } else {
      localStorage.setItem("divindade", selected);
      showCustomToast({
        title: "Divindade escolhida!",
        desc: `Divindade: ${selected}`,
        status: "success",
      });
    }
    if (selected !== "Nenhuma") {
      setBencao(bencao.filter((item) => item !== ""));
      localStorage.setItem("bencao", bencao.toString());
    }
    setPagina(next);
  };
  return (
    <>
      <div className="flex flex-row-reverse justify-between">
        <div className="w-1/4"></div>
        <h1 className="w-2/4 text-center text-3xl font-bold mb-4 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
          Escolha sua divindade
        </h1>
        <div className="w-1/4">
          {classe !== "Clérigo" && classe !== "Paladino" ? (
            classe !== "Druida" ?? (
              <Checkbox
                onChange={(e) => {
                  if (e.target.checked) {
                    setAlternativo(true);
                    setSelected("Nenhuma");
                  } else {
                    setAlternativo(false);
                    setSelected(escolhas[0]);
                  }
                }}
              >
                Nenhuma
              </Checkbox>
            )
          ) : classe === "Paladino" ? (
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setAlternativo(true);
                  setSelected("Todas");
                } else {
                  setAlternativo(false);
                  setSelected(escolhas[0]);
                }
              }}
            >
              Paladino do bem
            </Checkbox>
          ) : (
            <Checkbox
              onChange={(e) => {
                if (e.target.checked) {
                  setAlternativo(true);
                  setSelected("Todas");
                } else {
                  setAlternativo(false);
                  setSelected(escolhas[0]);
                }
              }}
            >
              Clérigo do Panteão
            </Checkbox>
          )}
        </div>
      </div>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] desktop:w-1/2 h-fit my-auto w-full">
          <div>
            <div className="desktop:hidden block">
              <SelectList
                filter={escolhas}
                isDisabled={alternativo}
                tabela={tabelaDivindades}
                onChange={onChange}
                selected={selected}
                placeholder={"Escolha sua divindade"}
              />
            </div>
            <h1 className="text-lg font-bold text-center desktop:block hidden">
              {selected}
            </h1>
            <img
              src={mapear(selected)[0]?.imagens[0]}
              className="mx-auto transition-all ease-in-out"
            />
            <p className="text-center mt-3 font-serif ">
              {alternativo ? (
                <>
                  {selected === "Todas" ? (
                    classe === "Paladino" ? (
                      <>
                        Como paladino do bem, lute pela bondade e justiça sem
                        Poder Concedido, seguindo apenas o Código do Herói.
                        Cultuar o bem é sua devoção.
                      </>
                    ) : (
                      <>
                        Como seguidor do Panteão, evite armas cortantes ou
                        perfurantes, usando uma maça. Escolha entre canalizar
                        energia positiva ou negativa, mas essa escolha é
                        permanente. Cultuar o Panteão é sua devoção.
                      </>
                    )
                  ) : (
                    <>Você não segue nenhum Deus(Não significa que não acredita na existência deles, pois seria o equivalente a terraplanismo em Arton)</>
                  )}
                </>
              ) : (
                <>
                  Os devotos de {selected} {mapear(selected)[0]?.crencas}
                </>
              )}
            </p>
            <div className="flex justify-center mt-3 gap-2">
              <VerMais
                titulo={`Informações da divindade ${selected}`}
                handleSelect={handleSelect}
                selected={selected}
                pagina="Divindade"
                isDisabled={alternativo}
              />
              <Confirmar onSelect={onSelect} pagina="Divindade" />
            </div>
          </div>
        </section>
        <section className="desktop:block hidden w-1/2">
          <div className="flex justify-evenly"></div>
          <div className="grid gap-5 grid-cols-4 place-items-center">
            {tabelaDivindades.map((divindade) => {
              return (
                <button
                  key={divindade.nome}
                  disabled={alternativo || !escolhas.includes(divindade.nome)}
                  onClick={() => {
                    onChange({ target: { value: divindade.nome } });
                  }}
                  className={`${
                    selected === divindade.nome
                      ? "bg-red-950 text-red-200"
                      : "bg-gray-200 hover:bg-gray-300"
                  } p-2 rounded-lg shadow-lx my-2 cursor-pointer w-full hover:shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out hover:scale-105 bg-opacity-90 disabled:opacity-70 disabled:cursor-not-allowed`}
                >
                  <img src={divindade.imagens[1]} className="mx-auto w-1/2" />
                  <h1 className="text-center">{divindade.nome}</h1>
                </button>
              );
            })}
          </div>
        </section>
      </div>
      <Modal
        size={"xl"}
        finalFocusRef={finalRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">Escolha sua benção</ModalHeader>
          <ModalBody>
            <CheckboxGroup>
              <Accordion allowToggle>
                {mapear(selected)[0]?.poderes.map((poder) => (
                  <AccordionItem>
                    <h2>
                      <AccordionButton className="flex justify-between">
                        <p className="flex gap-2">
                          <Checkbox
                            checked={bencao.includes(poder.nome)}
                            disabled={
                              contador >= limite && !bencao.includes(poder.nome)
                            }
                            onChange={(e) => {
                              if (e.target.checked) {
                                setContador(contador + 1);
                                setBencao([...bencao, poder.nome]);
                              } else {
                                setContador(contador - 1);
                                setBencao(
                                  bencao.filter((item) => item !== poder.nome)
                                );
                              }
                            }}
                          />
                          {poder.nome}
                        </p>
                        <AccordionIcon />
                      </AccordionButton>
                    </h2>
                    <AccordionPanel
                      className="italic font-serif text-justify"
                      pb={4}
                    >
                      &nbsp;&nbsp;{poder.descricao}
                      <small>{poder.tipo}</small>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </CheckboxGroup>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mx={"auto"} onClick={onClose}>
              Fechar
            </Button>
            <Button colorScheme="blue" mx={"auto"} onClick={escolher}>
              Confirmar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

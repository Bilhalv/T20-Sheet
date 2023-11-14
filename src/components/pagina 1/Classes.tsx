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
  Select,
  CheckboxGroup,
  Checkbox,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  TabelaPericias,
  TabelaPericiasEnum,
} from "../../classes/Tabelas/Pericias";
import VerMais from "../Geral/VerMais";
import SelectList from "../Geral/SelectList";
import Botoes, { FecharOnModal, ConfirmarOnModal } from "../Geral/Botoes";
import useCustomToast from "../Geral/Toasted";
import Confirmar from "../Geral/Confirmar";

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
  const [alt, setAlt] = useState<string[]>([]);
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
    setContador(0);
    setAlt([]);
    if (
      selectedClass.nome === "Arcanista" ||
      selectedClass.nome === "Inventor" ||
      selectedClass.nome === "Bardo" ||
      selectedClass.nome === "Druida"
    ) {
      if (state.isOpen2 !== true) {
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
    {
      nome: "Abjuração",
      valor: "abjur",
      desc: "Magias de proteção, que anulam outras magias ou expulsam criaturas invocadas de volta a seus planos de existência nativos",
    },
    {
      nome: "Adivinhação",
      valor: "adiv",
      desc: "Magias de detecção ou que vasculham passado e futuro.",
    },
    {
      nome: "Convocação",
      valor: "conv",
      desc: "Magias que transportam matéria. Esse transporte é realizado através do Éter Entre Mundos; por isso, qualquer efeito que bloqueia viagens etéreas também impede convocações. Criaturas convocadas surgem em uma superfície desocupada e, quando destruídas, desaparecem e são devolvidas a seus mundos nativos.",
    },
    {
      nome: "Encantamento",
      valor: "encan",
      desc: "Magias que afetam a mente. Todas as magias de encantamento são efeitos mentais.",
    },
    {
      nome: "Evocação",
      valor: "evoc",
      desc: "Magias que manipulam ou geram energia pura. Ácido, eletricidade, fogo e frio são as energias geradas pelos quatro elementos, respectivamente terra, ar, fogo e água. Magias de fogo funcionam sob a água, mas criam vapor quente em vez de chamas abertas. Luz é energia positiva, cuja manifestação é capaz de iluminar, curar e causar dano de luz. Por fim, essência é energia mágica pura.",
    },
    {
      nome: "Ilusão",
      valor: "ilusao",
      desc: "Essas magias fazem outros perceberem algo que não existe ou ignorarem algo real. Todas as magias de ilusão são efeitos mentais.",
    },
    {
      nome: "Necromancia",
      valor: "necro",
      desc: "Magias que canalizam energia negativa, criando escuridão, drenando a força vital de criaturas vivas e criando mortos-vivos. Magias de necromancia são efeitos de trevas.",
    },
    {
      nome: "Transmutação",
      valor: "trans",
      desc: " Magias que alteram as propriedades físicas de uma criatura ou objeto.",
    },
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
  const caminhosArcanista = [
    {
      nome: "Feiticeiro",
      valor: "feiticeiro",
      desc: "Você lança magias através de um poder inato que corre em seu sangue. Escolha uma linhagem como origem de seus poderes (veja a página 39). Você recebe a herança básica da linhagem escolhida. Você não depende de nenhum item ou estudo, mas sua capacidade de aprender magias é limitada — você aprende uma magia nova a cada nível ímpar (3º, 5º, 7º etc.), em vez de a cada nível. Seu atributo-chave para magias é Carisma.",
    },
    {
      nome: "Mago",
      valor: "mago",
      desc: "Você lança magias através de estudo e memorização de fórmulas arcanas. Você só pode lançar magias memorizadas; suas outras magias não podem ser lançadas, mesmo que você tenha pontos de mana para tal. Para memorizar magias, você precisa estudar seu grimório por uma hora. Quando faz isso, escolhe metade das magias que conhece (por exemplo, se conhece 7 magias, escolhe 3). Essas serão suas magias memorizadas. Você pode memorizar magias uma vez por dia. Caso não possa estudar (por não ter tempo, por ter perdido o grimório...), não poderá trocar suas magias memorizadas. Um grimório tem as mesmas estatísticas de um foco (veja acima) e pode ser recuperado da mesma forma. Você começa com uma magia adicional (para um total de 4) e, sempre que ganha acesso a um novo círculo de magias, aprende uma magia adicional daquele círculo. Seu atributo-chave para magias é Inteligência.",
    },
    {
      nome: "Bruxo",
      valor: "bruxo",
      desc: "Você lança magias através de um foco — uma varinha, cajado, chapéu... Para lançar uma magia, você precisa empunhar o foco com uma mão (e gesticular com a outra) ou fazer um teste de Misticismo (CD 20 + o custo em PM da magia; se falhar, a magia não funciona, mas você gasta os PM mesmo assim). O foco tem RD 10 e PV iguais à metade dos seus, independentemente de seu material ou forma. Se for danificado, é totalmente restaurado na próxima vez que você recuperar seus PM. Se for destruído (reduzido a 0 PV), você fica atordoado por uma rodada. Você pode recuperar um foco destruído ou perdido com uma semana de trabalho e T$ 100. Seu atributo-chave para magias é Inteligência.",
    },
  ];
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4">Escolha sua Classe</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 desktop:order-1 order-3 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] h-fit desktop:w-[50%] w-full ">
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
            <Confirmar onSelect={handleSelect} pagina="Classe" />
          </div>
        </section>
        <div className="order-2 w-1/2 mx-auto h-full hidden desktop:block">
          <section className="grid-cols-3 gap-3 transition-all ease-in-out grid">
            <Botoes
              onChange={handleClick}
              tabela={TabelaClasses}
              selected={selectedClass.nome}
            />
          </section>
        </div>
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
                <Accordion allowToggle>
                  {selectedClass.periciasescolha.map((pericia, index) => (
                    <AccordionItem>
                      <AccordionButton className="flex justify-between">
                        <div className="flex gap-2">
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
                          />
                          {pericia}
                        </div>
                        <AccordionIcon />
                      </AccordionButton>
                      <AccordionPanel>
                        <p className="text-justify font-serif">
                          &nbsp;&nbsp;&nbsp;
                          {
                            TabelaPericias.find((per) => per.nome === pericia)
                              ?.descricao
                          }
                        </p>
                      </AccordionPanel>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CheckboxGroup>
            </ModalBody>
            <ModalFooter>
              <FecharOnModal
                onClose={() => dispatch({ type: "togglePericias" })}
              />
              <ConfirmarOnModal onSelect={handlePericias} />
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
        <Modal
          size={"xl"}
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
                  <Accordion>
                    {escolas.map((escola) => (
                      <AccordionItem>
                        <AccordionButton className="flex justify-between">
                          <div className="flex gap-2">
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
                            />
                            {escola.nome}
                          </div>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel>
                          <p className="text-justify font-serif">
                            &nbsp;&nbsp;&nbsp;{escola.desc}
                          </p>
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CheckboxGroup>
              ) : selectedClass.nome === "Arcanista" ? (
                <CheckboxGroup colorScheme="red">
                  <Accordion allowToggle>
                    {caminhosArcanista.map((caminho) => (
                      <AccordionItem>
                        <h2>
                          <AccordionButton className="flex justify-between">
                            <p className="flex gap-2">
                              <Checkbox
                                disabled={
                                  alt.length == 1 &&
                                  !alt.includes(caminho.valor)
                                }
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setAlt([...alt, caminho.valor]);
                                  } else {
                                    setAlt([]);
                                  }
                                }}
                              />
                              {caminho.nome}
                            </p>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel
                          className="italic font-serif text-justify"
                          pb={4}
                        >
                          &nbsp;&nbsp;{caminho.desc}
                        </AccordionPanel>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CheckboxGroup>
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
              <FecharOnModal onClose={() => dispatch({ type: "toggleAlt" })} />
              <ConfirmarOnModal onSelect={handleSelect} />
            </ModalFooter>
            <ModalCloseButton />
          </ModalContent>
        </Modal>
      </div>
    </>
  );
};

export default Classes;

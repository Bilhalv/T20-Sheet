import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  CheckboxGroup,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Switch,
} from "@chakra-ui/react";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { TabelaOrigens } from "../../classes/Tabelas/Origens";
import { TabelaRacas } from "../../classes/Tabelas/Racas";
import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";
import { Poder, TipoPoder } from "../../classes/Construtores/Poder";
import { PreRequisitos } from "../Geral/Prerequisitos";

interface AltProps {
  handleChange: (pagina: string) => void;
  next: string;
}
interface botaoListaProps {
  nome: string;
  handleMudar: (beneficio: string, isChecked: boolean) => void;
  descricao: string;
  isDisabled?: boolean;
}
function BotaoLista({
  nome,
  handleMudar,
  descricao,
  isDisabled,
}: botaoListaProps) {
  return (
    <div className="flex justify-between py-2 border-b">
      <div className="flex gap-3 items-center">
        <Popover>
          <PopoverTrigger>
            <IconButton
              icon={<Eye />}
              aria-label={nome + "-VerMais"}
              rounded={"full"}
              colorScheme="red"
              className="transition-all hover:transform hover:scale-110 border-[2px] border-white ml-3"
              _hover={{
                bg: "transparent",
                border: "2px",
                borderColor: "red.500",
                color: "red.500",
              }}
            />
          </PopoverTrigger>
          <PopoverContent color="red.900">
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader textAlign={"center"}>{nome}</PopoverHeader>
            <PopoverBody className="font-serif text-justify">
              <p>
                &nbsp;&nbsp;&nbsp;
                {descricao}
              </p>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        <p>{nome}</p>
      </div>
      <Checkbox
        colorScheme="red"
        onChange={(e) => handleMudar(nome, e.target.checked)}
        className="mr-2 mt-1"
        size={"lg"}
        isDisabled={isDisabled}
      />
    </div>
  );
}

export default function Alt({ handleChange, next }: AltProps) {
  /*## Raças
- [ ]  Escolha do poder Resistencia elemental e Tatuagem mística do Qareen
- [ ]  Escolha do poder Propósito de criação e Fonte elemental do Golem
- [ ]  Escolha do poder Híbrido e Vanguardista de kliren
- [ ]  Escolha do poder Memória póstuma do osteon
- [ ]  Escolha do poder Canção das marés da sereia
- [ ]  Escolha do poder Magia das fadas da silfide

## Classes
- [ ]  Caminho do cavalheiro
- [ ]  Fabricar item superior do inventor
- [ ]  Especialista do Ladino
- [ ]  Espólio de Nobre
- [ ]  Benção da justiça do Paladino*/
  const [especificasOrigem, setEspecificasOrigem] = useState<string[]>([]);
  const [especificasRaca, setEspecificasRaca] = useState<string[]>([]);
  const [especificasClasse, setEspecificasClasse] = useState<string[]>([]);
  const origem =
    TabelaOrigens.find(
      (origem) => origem.nome === localStorage.getItem("origem")
    ) ?? TabelaOrigens[0];
  const raca =
    TabelaRacas.find((raca) => raca.nome === localStorage.getItem("raca")) ??
    TabelaRacas[0];
  const classe =
    TabelaClasses.find(
      (classe) => classe.nome === localStorage.getItem("classe")
    ) ?? TabelaClasses[0];
  const handleOrigens = (beneficio: string, isChecked: boolean) => {
    const novoEspecificas = isChecked
      ? [...especificasOrigem, beneficio]
      : especificasOrigem.filter((escolha) => escolha !== beneficio);
    setEspecificasOrigem(novoEspecificas);
  };
  const handleRacas = (beneficio: string, isChecked: boolean) => {
    const novoEspecificas = isChecked
      ? [...especificasRaca, beneficio]
      : especificasRaca.filter((escolha) => escolha !== beneficio);
    setEspecificasRaca(novoEspecificas);
  };
  const [versatil, setVersatil] = useState(false);
  const [indisponiveis, setIndisponiveis] = useState<Poder[]>([]);
  useEffect(() => {
    const novoIndisponiveis = PreRequisitos(TabelaPoderes);
    setIndisponiveis(novoIndisponiveis);
  }, [especificasOrigem, especificasRaca]);
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha suas Especificações
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <p>{origem.nome}</p>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel className="bg-white bg-opacity-75">
                <CheckboxGroup>
                  <div>
                    {especificasOrigem.join(", ")}
                    <p className="font-bold text-center text-lg">Poderes</p>
                    <div className="flex flex-col">
                      {origem.beneficios.poderes.map((beneficio) => (
                        <BotaoLista
                          isDisabled={
                            (especificasOrigem.length >= 2 &&
                              !especificasOrigem.includes(beneficio)) ||
                            indisponiveis.some((e) => e.nome === beneficio)
                          }
                          nome={beneficio}
                          handleMudar={handleOrigens}
                          descricao={
                            TabelaPoderes.find(
                              (poder) => poder.nome === beneficio
                            )?.descricao ?? ""
                          }
                        />
                      ))}
                    </div>
                  </div>
                  <div>
                    <p className="font-bold text-center text-lg">Pericias</p>
                    <div className="flex flex-col">
                      {origem.beneficios.pericias
                        .filter(
                          (e) =>
                            !JSON.parse(
                              localStorage.getItem("pericias") || ""
                            ).includes(e)
                        )
                        .map((beneficio) => (
                          <BotaoLista
                            isDisabled={
                              especificasOrigem.length >= 2 &&
                              !especificasOrigem.includes(beneficio)
                            }
                            nome={beneficio}
                            handleMudar={handleOrigens}
                            descricao={
                              TabelaPericias.find(
                                (pericia) => pericia.nome === beneficio
                              )?.descricao ?? ""
                            }
                          />
                        ))}
                    </div>
                  </div>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
            {raca.nome === "Humano" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Versátil</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-75">
                  <CheckboxGroup>
                    <div className="flex gap-2 items-center justify-center">
                      <p>2 Perícias</p>
                      <Switch
                        colorScheme="red"
                        onChange={(e) =>
                          setVersatil(e.target.checked ? true : false)
                        }
                        className="mr-2 mt-1"
                        size={"lg"}
                      />
                      <p>Uma pericia e um Poder</p>
                    </div>
                    <div>
                      <p className="font-bold text-center text-lg">Pericias</p>
                      <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                        {TabelaPericias.filter(
                          (e) =>
                            !JSON.parse(
                              localStorage.getItem("pericias") || ""
                            ).includes(e.nome)
                        ).map((pericia) => (
                          <BotaoLista
                            isDisabled={
                              especificasRaca.length >= 2 &&
                              !especificasRaca.includes(pericia.nome)
                            }
                            nome={pericia.nome}
                            handleMudar={handleRacas}
                            descricao={pericia.descricao}
                          />
                        ))}
                      </div>
                      {versatil && (
                        <>
                          <p className="font-bold text-center text-lg">
                            Poderes
                          </p>
                          <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                            {TabelaPoderes.filter(
                              (e) =>
                                e.tipo === TipoPoder.magia ||
                                e.tipo === TipoPoder.combate ||
                                e.tipo === TipoPoder.tormenta ||
                                e.tipo === TipoPoder.destino
                            ).map((poder) => (
                              <BotaoLista
                                isDisabled={
                                  (especificasRaca.length >= 2 &&
                                    !especificasRaca.includes(poder.nome)) ||
                                  indisponiveis.some((e) => e === poder)
                                }
                                nome={poder.nome}
                                handleMudar={handleRacas}
                                descricao={poder.descricao}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Lefou" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Deformidade</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-75">
                  <CheckboxGroup>
                    <div className="flex gap-2 items-center justify-center">
                      <p>2 Perícias</p>
                      <Switch
                        colorScheme="red"
                        onChange={(e) =>
                          setVersatil(e.target.checked ? true : false)
                        }
                        className="mr-2 mt-1"
                        size={"lg"}
                      />
                      <p>Uma pericia e um Poder</p>
                    </div>
                    <div>
                      <p className="font-bold text-center text-lg">Pericias</p>
                      <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                        {TabelaPericias.filter((e) =>
                          JSON.parse(
                            localStorage.getItem("pericias") || ""
                          ).includes(e.nome)
                        ).map((pericia) => (
                          <BotaoLista
                            isDisabled={
                              especificasRaca.length >= 2 &&
                              !especificasRaca.includes(pericia.nome)
                            }
                            nome={pericia.nome}
                            handleMudar={handleRacas}
                            descricao={pericia.descricao}
                          />
                        ))}
                      </div>
                      {versatil && (
                        <>
                          <p className="font-bold text-center text-lg">
                            Poderes
                          </p>
                          <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                            {TabelaPoderes.filter(
                              (e) => e.tipo === TipoPoder.tormenta
                            ).map((poder) => (
                              <BotaoLista
                                isDisabled={
                                  especificasRaca.length >= 2 &&
                                  !especificasRaca.includes(poder.nome)
                                }
                                nome={poder.nome}
                                handleMudar={handleRacas}
                                descricao={poder.descricao}
                              />
                            ))}
                          </div>
                        </>
                      )}
                    </div>
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            )}
          </Accordion>
        </section>
      </div>
    </>
  );
}

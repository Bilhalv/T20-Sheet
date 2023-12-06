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
  Radio,
  RadioGroup,
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
import Confirmar from "../Geral/Confirmar";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import useCustomToast from "../Geral/Toasted";

interface AltProps {
  handleChange: (pagina: string) => void;
  next: string;
}
interface botaoListaProps {
  nome: string;
  handleMudar: (beneficio: string, isChecked: boolean) => void;
  descricao: any;
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
  /*## Classes
- [ ]  Fabricar item superior do inventor
- [ ]  Espólio de Nobre*/
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
  const [memoria, setMemoria] = useState("");
  const [indisponiveis, setIndisponiveis] = useState<Poder[]>([]);
  const { showCustomToast } = useCustomToast();
  const onSelect = () => {
    let contador = 1;
    if (
      origem.beneficios.pericias.filter(
        (e) => !JSON.parse(localStorage.getItem("pericias") || "").includes(e)
      ).length > 0
    ){
      console.log(1)
      contador++;
    }
      if (
        raca.nome === "Humano" ||
        raca.nome === "Lefou" ||
        raca.nome === "Qareen" ||
        raca.nome === "Golem" ||
        raca.nome === "Kliren" ||
        raca.nome === "Sereia/Tritão" ||
        raca.nome === "Sílfide"
      ) {
        contador += 2;
      } else if (raca.nome === "Osteon") {
        contador++;
      }
    if (
      (classe.nome === "Cavaleiro" || classe.nome === "Paladino") &&
      Number(localStorage.getItem("lvl")) >= 5
    ) {
      contador++;
    }
    if (classe.nome === "Ladino") {
      contador +=
        (atributoslocal.find(
          (atributoL: any) => atributoL.nome === "Inteligência"
        )?.valor || 0) < 0
          ? 1
          : 0;
    }
    const versusContador =
      especificasOrigem.length +
      especificasRaca.length +
      especificasClasse.length;
    if (versusContador < contador) {
      showCustomToast({
        title: "Você não escolheu todas as especificações",
        desc: `Você precisa escolher mais ${
          contador - versusContador
        } especificações`,
        status: "error",
      });
      return;
    } else {
      localStorage.setItem(
        "especificasOrigem",
        JSON.stringify(especificasOrigem)
      );
      localStorage.setItem("especificasRaca", JSON.stringify(especificasRaca));
      localStorage.setItem(
        "especificasClasse",
        JSON.stringify(especificasClasse)
      );
      handleChange(next);
      showCustomToast({
        title: "Especificação escolhidas com sucesso",
        desc: `Você escolheu todas as especificações`,
        status: "success",
      });
    }
  };
  useEffect(() => {
    const novoIndisponiveis = PreRequisitos(TabelaPoderes);
    setIndisponiveis(novoIndisponiveis);
  }, [especificasOrigem, especificasRaca]);
  const atributoslocal = JSON.parse(
    localStorage.getItem("atributosFinais") || "[]"
  );
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
              <AccordionPanel className="bg-white bg-opacity-20">
                <CheckboxGroup>
                  <div>
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
                      {origem.nome === "Amnésico" && (
                        <div className="overflow-y-scroll max-h-[200px]">
                          {TabelaPoderes.filter(
                            (poder: Poder) =>
                              !indisponiveis.some((e) => e === poder)
                          ).map((poder) => (
                            <BotaoLista
                              isDisabled={
                                (especificasOrigem.length >= 3 &&
                                  !especificasOrigem.includes(poder.nome)) ||
                                indisponiveis.some((e) => e === poder)
                              }
                              nome={poder.nome}
                              handleMudar={handleOrigens}
                              descricao={poder.descricao}
                            />
                          ))}
                        </div>
                      )}
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
                      {origem.nome === "Amnésico" && (
                        <div className="overflow-y-scroll max-h-[200px]">
                          {TabelaPericias.filter(
                            (pericia) =>
                              !JSON.parse(
                                localStorage.getItem("pericias") || ""
                              ).includes(pericia.nome)
                          ).map((pericia) => (
                            <BotaoLista
                              isDisabled={
                                especificasOrigem.length >= 3 &&
                                !especificasOrigem.includes(pericia.nome)
                              }
                              nome={pericia.nome}
                              handleMudar={handleOrigens}
                              descricao={pericia.descricao}
                            />
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </CheckboxGroup>
              </AccordionPanel>
            </AccordionItem>
            {raca.nome === "Humano" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Humano</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <CheckboxGroup>
                    <h1 className="text-center font-bold"> Versátil</h1>
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
                <AccordionPanel className="bg-white bg-opacity-20">
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
            {raca.nome === "Qareen" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Qareen</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <CheckboxGroup>
                    <div>
                      <h1 className="font-bold text-center text-lg">
                        Resistência Elemental
                      </h1>
                      <p>
                        Conforme sua ascendência, você recebe redução 10 a um
                        tipo de dano.
                      </p>
                      <RadioGroup
                        className="flex flex-col w-full"
                        onChange={(e) => setEspecificasRaca([e])}
                        value={especificasRaca[0]}
                      >
                        <Radio value="agua">Frio (Qareen de água)</Radio>
                        <Radio value="ar">Eletricidade (Qareen de ar)</Radio>
                        <Radio value="fogo">Fogo (Qareen de fogo)</Radio>
                        <Radio value="terra">Ácido (Qareen de terra)</Radio>
                        <Radio value="luz">Luz (Qareen de luz)</Radio>
                        <Radio value="trevas">Trevas (Qareen de trevas)</Radio>
                      </RadioGroup>
                    </div>
                    {especificasRaca.length > 0 && (
                      <div>
                        <h1 className="font-bold text-center text-lg">
                          Tatuagem Mística
                        </h1>
                        <p>
                          Você pode lançar uma magia de 1º círculo a sua escolha
                          (atributo-chave Carisma). Caso aprenda novamente essa
                          magia, seu custo diminui em –1 PM.
                        </p>
                        <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                          {TabelaMagias.map((magia) => (
                            <BotaoLista
                              isDisabled={
                                especificasRaca.length >= 2 &&
                                !especificasRaca.includes(magia.nome)
                              }
                              nome={magia.nome}
                              handleMudar={handleRacas}
                              descricao={
                                <>
                                  <p>
                                    <b>Escola:</b> {magia.escola}
                                  </p>
                                  <p>
                                    <b>Tempo de Execução:</b> {magia.execucao}
                                  </p>
                                  <p>
                                    <b>Alcance:</b> {magia.alcance}
                                  </p>
                                  <p>
                                    <b>Alvo:</b> {magia.alvo}
                                  </p>
                                  <p>
                                    <b>Duração:</b> {magia.duracao}
                                  </p>
                                  <p>
                                    <b>Resistência:</b> {magia.resistencia}
                                  </p>
                                  <p>
                                    <b>Descrição:</b> {magia.descricao}
                                  </p>
                                </>
                              }
                            />
                          ))}
                        </div>
                      </div>
                    )}
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Golem" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Golem</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <CheckboxGroup>
                    <div>
                      <h1 className="font-bold text-center text-lg">
                        Fonte Elemental
                      </h1>
                      <p>
                        Você possui um espírito elemental preso em seu corpo.
                        Você é imune a dano do mesmo tipo do espírito. Se fosse
                        sofrer dano mágico desse tipo, em vez disso cura PV em
                        quantidade igual à metade do dano. Por exemplo, se um
                        golem com espírito elemental do fogo é atingido por uma
                        Bola de Fogo que causa 30 pontos de dano, em vez de
                        sofrer esse dano, ele recupera 15 PV.
                      </p>
                      <RadioGroup
                        className="flex flex-col w-full"
                        onChange={(e) => setEspecificasRaca([e])}
                        value={especificasRaca[0]}
                      >
                        <Radio value="agua">Frio (Espirito de água)</Radio>
                        <Radio value="ar">Eletricidade (Espirito de ar)</Radio>
                        <Radio value="fogo">Fogo (Espirito de fogo)</Radio>
                        <Radio value="terra">Ácido (Espirito de terra)</Radio>
                      </RadioGroup>
                    </div>
                    {especificasRaca.length > 0 && (
                      <div>
                        <h1 className="font-bold text-center text-lg">
                          Propósito de Criação
                        </h1>
                        <p>
                          Você foi construído “pronto” para um propósito
                          específico e não teve uma infância. Você não tem
                          direito a escolher uma origem, mas recebe um poder
                          geral a sua escolha. (Isso significa que sua origem
                          não será contabilizada.)
                        </p>
                        <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                          {TabelaPoderes.filter(
                            (e) =>
                              e.tipo === TipoPoder.combate ||
                              e.tipo === TipoPoder.magia ||
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
                      </div>
                    )}
                  </CheckboxGroup>
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Kliren" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Kliren</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <div>
                    <h1 className="font-bold text-center text-lg">
                      Vanguardista
                    </h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;Você recebe proficiência em armas de
                      fogo e +2 em Ofício (um qualquer, a sua escolha).
                    </p>
                    <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                      <RadioGroup
                        className="flex flex-col w-full"
                        onChange={(e) => setEspecificasRaca([e])}
                        value={especificasRaca[0]}
                      >
                        <Radio value="armeiro">Armeiro</Radio>
                        <Radio value="artesao">Artesão</Radio>
                        <Radio value="alquimista">Alquimista</Radio>
                        <Radio value="cozinheiro">Cozinheiro</Radio>
                        <Radio value="alfaiate">Alfaiate</Radio>
                        <Radio value="minerador">Minerador</Radio>
                        <Radio value="escrivao">Escrivão</Radio>
                      </RadioGroup>
                    </div>
                  </div>

                  {especificasRaca.length > 0 && (
                    <div>
                      <h1 className="font-bold text-center text-lg">Híbrido</h1>
                      <p className="text-justify">
                        &nbsp;&nbsp;&nbsp;Sua natureza multifacetada fez com que
                        você aprendesse conhecimentos variados. Você se torna
                        treinado em uma perícia a sua escolha (não precisa ser
                        da sua classe).
                      </p>
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
                    </div>
                  )}
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Osteon" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Osteon</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <div>
                    <h1 className="font-bold text-center text-lg">
                      Memória Póstuma
                    </h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;Você se torna treinado em uma perícia
                      (não precisa ser da sua classe) ou recebe um poder geral a
                      sua escolha. Como alternativa, você pode ser um osteon de
                      outra raça humanoide que não humano. Neste caso, você
                      ganha uma habilidade dessa raça a sua escolha. Se a raça
                      era de tamanho diferente de Médio, você também possui sua
                      categoria de tamanho.
                    </p>
                    <RadioGroup
                      className="flex flex-col w-full"
                      onChange={(e) => setMemoria(e)}
                      value={memoria}
                    >
                      <Radio value="pericia">Pericia</Radio>
                      <Radio value="poder">Poder</Radio>
                      <Radio value="outra">Outra Raça</Radio>
                    </RadioGroup>
                    {memoria === "pericia" && (
                      <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                        {TabelaPericias.filter(
                          (e) =>
                            !JSON.parse(
                              localStorage.getItem("pericias") || ""
                            ).includes(e.nome)
                        ).map((pericia) => (
                          <BotaoLista
                            isDisabled={
                              especificasRaca.length >= 1 &&
                              !especificasRaca.includes(pericia.nome)
                            }
                            nome={pericia.nome}
                            handleMudar={handleRacas}
                            descricao={pericia.descricao}
                          />
                        ))}
                      </div>
                    )}
                    {memoria === "poder" && (
                      <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                        {TabelaPoderes.filter(
                          (e) =>
                            e.tipo === TipoPoder.combate ||
                            e.tipo === TipoPoder.magia ||
                            e.tipo === TipoPoder.tormenta ||
                            e.tipo === TipoPoder.destino
                        ).map((poder) => (
                          <BotaoLista
                            isDisabled={
                              (especificasRaca.length >= 1 &&
                                !especificasRaca.includes(poder.nome)) ||
                              indisponiveis.some((e) => e === poder)
                            }
                            nome={poder.nome}
                            handleMudar={handleRacas}
                            descricao={poder.descricao}
                          />
                        ))}
                      </div>
                    )}
                    {memoria === "outra" && (
                      <>
                        <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                          {TabelaRacas.filter((e) => e.nome !== "Osteon").map(
                            (raca) => (
                              <BotaoLista
                                isDisabled={
                                  especificasRaca.length >= 1 &&
                                  !especificasRaca.includes(raca.nome)
                                }
                                nome={raca.nome}
                                handleMudar={handleRacas}
                                descricao={
                                  <Accordion allowToggle>
                                    <h1 className="text-center font-bold">
                                      Poderes da raça
                                    </h1>
                                    {raca.poderes.map((poder) => (
                                      <>
                                        <AccordionItem>
                                          <AccordionButton className="flex justify-between">
                                            <p>{poder.nome}</p>
                                            <AccordionIcon />
                                          </AccordionButton>
                                          <AccordionPanel className="bg-white bg-opacity-20">
                                            <p>{poder.descricao}</p>
                                          </AccordionPanel>
                                        </AccordionItem>
                                      </>
                                    ))}
                                  </Accordion>
                                }
                              />
                            )
                          )}
                        </div>
                        {especificasRaca.length > 0 && (
                          <>
                            <h1 className="text-center font-bold">
                              Poderes de {especificasRaca[0]}
                            </h1>
                            <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                              {TabelaRacas.find(
                                (raca) => raca.nome === especificasRaca[0]
                              )?.poderes.map((poder) => (
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
                      </>
                    )}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Sereia/Tritão" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Sereia/Tritão</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <div>
                    <h1 className="font-bold text-center text-lg">
                      Canção dos Mares
                    </h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;Você pode lançar duas das magias a
                      seguir: Amedrontar, Comando, Despedaçar, Enfeitiçar,
                      Hipnotismo ou Sono (atributo-chave Carisma). Caso aprenda
                      novamente uma dessas magias, seu custo diminui em –1 PM.
                    </p>
                    <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                      {TabelaMagias.filter((e) => {
                        const magias = [
                          "Amedrontar",
                          "Comando",
                          "Despedaçar",
                          "Enfeitiçar",
                          "Hipnotismo",
                          "Sono",
                        ];
                        return magias.includes(e.nome);
                      }).map((magia) => (
                        <BotaoLista
                          isDisabled={
                            especificasRaca.length >= 2 &&
                            !especificasRaca.includes(magia.nome)
                          }
                          nome={magia.nome}
                          handleMudar={handleRacas}
                          descricao={
                            <>
                              <p>
                                <b>Escola:</b> {magia.escola}
                              </p>
                              <p>
                                <b>Tempo de Execução:</b> {magia.execucao}
                              </p>
                              <p>
                                <b>Alcance:</b> {magia.alcance}
                              </p>
                              <p>
                                <b>Alvo:</b> {magia.alvo}
                              </p>
                              <p>
                                <b>Duração:</b> {magia.duracao}
                              </p>
                              <p>
                                <b>Resistência:</b> {magia.resistencia}
                              </p>
                              <p>
                                <b>Descrição:</b> {magia.descricao}
                              </p>
                            </>
                          }
                        />
                      ))}
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            )}
            {raca.nome === "Sílfide" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Silfide</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <div>
                    <h1 className="font-bold text-center text-lg">
                      Magia das Fadas
                    </h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;Você pode lançar duas das magias a
                      seguir: Criar Ilusão, Enfeitiçar, Luz (como uma magia
                      arcana) e Sono (atributo-chave Carisma). Caso aprenda
                      novamente uma dessas magias, seu custo diminui em –1 PM.
                    </p>
                    <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                      {TabelaMagias.filter((e) => {
                        const magias = [
                          "Criar Ilusão",
                          "Enfeitiçar",
                          "Luz",
                          "Sono",
                        ];
                        return magias.includes(e.nome);
                      }).map((magia) => (
                        <BotaoLista
                          isDisabled={
                            especificasRaca.length >= 2 &&
                            !especificasRaca.includes(magia.nome)
                          }
                          nome={magia.nome}
                          handleMudar={handleRacas}
                          descricao={
                            <>
                              <p>
                                <b>Escola:</b> {magia.escola}
                              </p>
                              <p>
                                <b>Tempo de Execução:</b> {magia.execucao}
                              </p>
                              <p>
                                <b>Alcance:</b> {magia.alcance}
                              </p>
                              <p>
                                <b>Alvo:</b> {magia.alvo}
                              </p>
                              <p>
                                <b>Duração:</b> {magia.duracao}
                              </p>
                              <p>
                                <b>Resistência:</b> {magia.resistencia}
                              </p>
                              <p>
                                <b>Descrição:</b> {magia.descricao}
                              </p>
                            </>
                          }
                        />
                      ))}
                    </div>
                  </div>
                </AccordionPanel>
              </AccordionItem>
            )}
            {classe.nome === "Cavaleiro" &&
              Number(localStorage.getItem("lvl")) >= 5 && (
                <AccordionItem>
                  <AccordionButton className="flex justify-between">
                    <p>Cavalheiro</p>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel className="bg-white bg-opacity-20">
                    <h1 className="text-center font-bold">
                      Caminho do Cavalheiro
                    </h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;No 5o nível, escolha entre Bastião ou
                      Montaria.
                    </p>
                    <BotaoLista
                      isDisabled={
                        especificasClasse.length >= 1 &&
                        !especificasClasse.includes("Bastião")
                      }
                      nome="Bastião"
                      handleMudar={(beneficio: string, isChecked: boolean) =>
                        setEspecificasClasse(
                          (prevEspecificasClasse: string[]) => {
                            if (isChecked) {
                              return [...prevEspecificasClasse, beneficio];
                            } else {
                              return prevEspecificasClasse.filter(
                                (item) => item !== beneficio
                              );
                            }
                          }
                        )
                      }
                      descricao={
                        <>
                          <p>
                            Se estiver usando armadura pesada, você recebe
                            redução de dano 5 (cumulativa com a RD fornecida por
                            Especialização em Armadura).
                          </p>
                        </>
                      }
                    />
                    <BotaoLista
                      nome="Montaria"
                      isDisabled={
                        especificasClasse.length >= 1 &&
                        !especificasClasse.includes("Montaria")
                      }
                      handleMudar={(beneficio: string, isChecked: boolean) =>
                        setEspecificasClasse(
                          (prevEspecificasClasse: string[]) => {
                            if (isChecked) {
                              return [...prevEspecificasClasse, beneficio];
                            } else {
                              return prevEspecificasClasse.filter(
                                (item) => item !== beneficio
                              );
                            }
                          }
                        )
                      }
                      descricao={
                        <>
                          <p>
                            Você recebe um cavalo de guerra com o qual possui +5
                            em testes de Adestramento e Cavalgar. Ele fornece os
                            benefícios de um parceiro veterano de seu tipo. No
                            11o nível, passa a fornecer os benefícios de um
                            parceiro mestre. De acordo com o mestre, você pode
                            receber outro tipo de montaria. Veja a lista de
                            montarias na página 261. Caso a montaria morra, você
                            pode comprar outra pelo preço normal e treiná-la
                            para receber os benefícios desta habilidade com uma
                            semana de trabalho.
                          </p>
                        </>
                      }
                    />
                  </AccordionPanel>
                </AccordionItem>
              )}
            {classe.nome === "Ladino" && (
              <AccordionItem>
                <AccordionButton className="flex justify-between">
                  <p>Ladino</p>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel className="bg-white bg-opacity-20">
                  <h1 className="text-center font-bold">Especialista</h1>
                  <p className="text-justify">
                    &nbsp;&nbsp;&nbsp;Escolha um número de perícias treinadas
                    igual a sua Inteligência, exceto bônus temporários (mínimo
                    1). Ao fazer um teste de uma dessas perícias, você pode
                    gastar 1 PM para dobrar seu bônus de treinamento. Você não
                    pode usar esta habilidade em testes de ataque.
                  </p>
                  <div className="max-h-[200px] w-full overflow-y-scroll rounded-lg p-2">
                    {TabelaPericias.filter(
                      (e) =>
                        !JSON.parse(
                          localStorage.getItem("pericias") || ""
                        ).includes(e.nome)
                    ).map((pericia) => (
                      <BotaoLista
                        isDisabled={
                          especificasClasse.length >=
                            ((atributoslocal.find(
                              (atributoL: any) =>
                                atributoL.nome === "Inteligência"
                            )?.valor || 0) < 0
                              ? 1
                              : 0) && !especificasClasse.includes(pericia.nome)
                        }
                        nome={pericia.nome}
                        handleMudar={(beneficio: string, isChecked: boolean) =>
                          setEspecificasClasse(
                            (prevEspecificasClasse: string[]) => {
                              if (isChecked) {
                                return [...prevEspecificasClasse, beneficio];
                              } else {
                                return prevEspecificasClasse.filter(
                                  (item) => item !== beneficio
                                );
                              }
                            }
                          )
                        }
                        descricao={pericia.descricao}
                      />
                    ))}
                  </div>
                </AccordionPanel>
              </AccordionItem>
            )}
            {classe.nome === "Paladino" &&
              Number(localStorage.getItem("lvl")) >= 5 && (
                <AccordionItem>
                  <AccordionButton className="flex justify-between">
                    <p>Paladino</p>
                    <AccordionIcon />
                  </AccordionButton>
                  <AccordionPanel className="bg-white bg-opacity-20">
                    <h1 className="text-center font-bold">Bênção da Justiça</h1>
                    <p className="text-justify">
                      &nbsp;&nbsp;&nbsp;No 5o nível, escolha entre égide sagrada
                      e montaria sagrada. Uma vez feita, esta escolha não pode
                      ser mudada.
                    </p>
                    <BotaoLista
                      isDisabled={
                        especificasClasse.length >= 1 &&
                        !especificasClasse.includes("Egide Sagrada")
                      }
                      nome="Egide Sagrada"
                      handleMudar={(beneficio: string, isChecked: boolean) =>
                        setEspecificasClasse(
                          (prevEspecificasClasse: string[]) => {
                            if (isChecked) {
                              return [...prevEspecificasClasse, beneficio];
                            } else {
                              return prevEspecificasClasse.filter(
                                (item) => item !== beneficio
                              );
                            }
                          }
                        )
                      }
                      descricao={
                        <>
                          <p>
                            Você pode gastar uma ação de movimento e 2 PM para
                            recobrir de energia seu escudo ou símbolo sagrado.
                            Até o fim da cena, você e todos os aliados
                            adjacentes recebem um bônus na Defesa igual ao seu
                            Carisma. A partir do 11o nível, você pode gastar 5
                            PM para rolar novamente um teste de resistência
                            contra uma magia recém lançada contra você. Se você
                            passar no teste de resistência e a magia tiver você
                            como único alvo, ela é revertida de volta ao
                            conjurador (que se torna o novo alvo da magia; todas
                            as demais características da magia, incluindo CD do
                            teste de resistência, se mantêm).
                          </p>
                        </>
                      }
                    />
                    <BotaoLista
                      nome="Montaria Sagrada"
                      isDisabled={
                        especificasClasse.length >= 1 &&
                        !especificasClasse.includes("Montaria Sagrada")
                      }
                      handleMudar={(beneficio: string, isChecked: boolean) =>
                        setEspecificasClasse(
                          (prevEspecificasClasse: string[]) => {
                            if (isChecked) {
                              return [...prevEspecificasClasse, beneficio];
                            } else {
                              return prevEspecificasClasse.filter(
                                (item) => item !== beneficio
                              );
                            }
                          }
                        )
                      }
                      descricao={
                        <>
                          <p>
                            Você pode gastar uma ação de movimento e 2 PM para
                            invocar uma montaria sagrada. Veja o quadro para
                            mais detalhes.
                          </p>
                        </>
                      }
                    />
                  </AccordionPanel>
                </AccordionItem>
              )}
          </Accordion>
          <Confirmar onSelect={onSelect} />
        </section>
      </div>
    </>
  );
}

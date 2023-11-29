import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import {
  TabelasArmasSimles,
  tabelaArmaduras,
  tabelaArmas,
  tabelaItens,
} from "../../classes/Tabelas/Itens";
import { Armadura } from "../../classes/Construtores/Armadura";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { useState } from "react";
import { Classe } from "../../classes/Construtores/Classe";
import { Arma } from "../../classes/Construtores/Arma";
import { RolarDado } from "../Geral/RolarDado";
import { Eye } from "lucide-react";
import Confirmar from "../Geral/Confirmar";
import useCustomToast from "../Geral/Toasted";

interface EquipamentosProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Equipamentos({
  handleChange,
  next,
}: EquipamentosProps) {
  if (localStorage.getItem("classe") === undefined) {
    localStorage.setItem("classe", "Arcanista");
  }
  if (localStorage.getItem("lvl") === undefined) {
    localStorage.setItem("lvl", "1");
  }
  const padrao = ["Mochila", "Saco de dormir", "Traje de viajante"];
  var classe = TabelaClasses.filter(
    (x: Classe) => x.nome === localStorage.getItem("classe")
  );

  let marciais = true;
  let armadurasFiltradas: Armadura[] = [];
  if (classe && classe.length > 0) {
    const filtroArmaduras = ["Couro batido", "Gibão de peles"];
    if (classe[0].proficiencias.includes("Armaduras pesadas")) {
      filtroArmaduras.push("Brunea");
    }
    armadurasFiltradas = tabelaArmaduras.filter((armadura: Armadura) =>
      filtroArmaduras.includes(armadura.nome)
    );
    if (classe[0].proficiencias.includes("Armas marciais")) {
      marciais = false;
    }
    if (
      classe[0].proficiencias.includes("escudos") ||
      classe[0].proficiencias.includes("Escudos")
    ) {
      padrao.push("Escudo leve");
    }
  }
  const [dados, setDados] = useState<number[]>([
    RolarDado({ qtd: 1, lados: 6 }).total,
    RolarDado({ qtd: 1, lados: 6 }).total,
    RolarDado({ qtd: 1, lados: 6 }).total,
    RolarDado({ qtd: 1, lados: 6 }).total,
  ]);
  const [armasSimples, setArmasSimples] = useState<string[]>([]);
  const [armasMarciais, setArmasMarciais] = useState<string[]>([]);
  const [armaduras, setArmaduras] = useState<string[]>([]);
  const [Itens, setItens] = useState(
    padrao.map((item) => {
      let itemTabela;
      if (item !== "Escudo leve") {
        itemTabela = tabelaItens.filter((x) => x.nome === item);
      } else {
        itemTabela = tabelaArmaduras.filter((x) => x.nome === item);
      }
      return itemTabela[0];
    })
  );
  const [tibares, setTibares] = useState<number>(() => {
    const nivel = Number(localStorage.getItem("lvl"));
    const tabela = [300, 600, 1000, 2000];
    if (nivel === 1) {
      return dados.reduce((a, b) => a + b, 0);
    } else {
      return tabela[nivel - 2];
    }
  });
  const { showCustomToast } = useCustomToast();

  const handleSelect = () => {
    if (armasSimples.length < 1) {
      showCustomToast({
        title: "Erro",
        desc: "Você precisa escolher uma arma simples",
        status: "error",
      });
      return;
    } else if (armasMarciais.length < 1 && !marciais) {
      showCustomToast({
        title: "Erro",
        desc: "Você precisa escolher uma arma marcial",
        status: "error",
      });
      return;
    } else if (
      armaduras.length < 1 &&
      classe &&
      classe[0].nome !== "Arcanista"
    ) {
      showCustomToast({
        title: "Erro",
        desc: "Você precisa escolher uma armadura",
        status: "error",
      });
      return;
    } else {
      const equipamentos = {
        armasSimples,
        armasMarciais,
        armaduras,
        Itens,
      };
      localStorage.setItem("equipamentos", JSON.stringify(equipamentos));
      handleChange(next);
      showCustomToast({
        title: "Sucesso",
        desc: "Equipamentos salvos com sucesso",
        status: "success",
      });
    }
  };
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha seus Equipamentos
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <Accordion allowToggle>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Equipamento Inicial</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 bg-gray-100 border rounded-xl mb-2"
              >
                <div className="flex justify-between border-b py-2">
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        icon={<Eye />}
                        aria-label={"Tibares-VerMais"}
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
                      <PopoverHeader className="text-center">
                        Tibares
                      </PopoverHeader>
                      <PopoverBody className="font-serif flex flex-col">
                        <p className="text-justify">
                          &nbsp;&nbsp;&nbsp;O Tibar (T$) é a moeda principal do
                          Reinado, uma peça de prata com o rosto de Tibar, Deus
                          do Comércio. Criada por Quindogar Tolliannor,
                          tornou-se popular a ponto de ele ser conhecido como
                          Deus Menor do Comércio. Acredita-se que traz boa
                          fortuna. Além do Tibar de prata, há variações como o
                          Tibar de cobre (TC) e Tibar de Ouro (TO), valendo um
                          décimo e dez vezes o T$, respectivamente. Em alguns
                          reinos, a escassez de prata leva ao uso do Tibar de
                          cobre, e flutuações de valor causam agitação entre
                          guildas e contrabandistas. Os preços são exibidos em
                          T$.
                        </p>
                        {Number(localStorage.getItem("lvl")) === 1 ? (
                          <p>
                            Seus dados foram: {"4d6 = " + dados.join(" + ")}
                          </p>
                        ) : null}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                  <p className="my-auto w-1/3">Tibares: T$ {tibares}</p>
                  <p className="w-fit my-auto flex flex-col items-center">
                    <p>Espaços</p>
                    <p>0</p>
                  </p>
                  <Checkbox
                    isDisabled
                    isChecked
                    colorScheme="red"
                    className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                  />
                </div>
                {Itens.map((item) => (
                  <>
                    <div className="flex justify-between border-b py-2">
                      <Popover>
                        <PopoverTrigger>
                          <IconButton
                            icon={<Eye />}
                            aria-label={item.nome + "-VerMais"}
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
                          <PopoverHeader className="text-center">
                            {item.nome}
                          </PopoverHeader>
                          <PopoverBody className="font-serif flex flex-col">
                            <p className="text-justify">
                              &nbsp;&nbsp;&nbsp;{item.descricao}
                            </p>
                            <div className="flex flex-col">
                              <p>
                                <b>Preço: </b>
                                T${item.preco}
                              </p>
                              <p>
                                <b>Espacos: </b>
                                {item.espacos}
                              </p>
                            </div>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                      <p className="my-auto w-1/3">{item.nome}</p>
                      <p className="w-fit my-auto flex flex-col items-center">
                        <p>Espaços</p>
                        <p>{item.espacos}</p>
                      </p>
                      <Checkbox
                        isDisabled
                        isChecked
                        colorScheme="red"
                        className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                      />
                    </div>
                  </>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Simples</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 bg-gray-100 border rounded-xl mb-2"
              >
                {TabelasArmasSimles.map((arma: Arma) => (
                  <div className="flex justify-between align-middle border-b-gray-300 border-b py-2">
                    <Popover>
                      <PopoverTrigger>
                        <IconButton
                          icon={<Eye />}
                          aria-label={arma.nome + "-VerMais"}
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
                        <PopoverHeader className="text-center">
                          {arma.nome}
                        </PopoverHeader>
                        <PopoverBody className="font-serif flex flex-col">
                          <p className="text-justify">
                            &nbsp;&nbsp;&nbsp;{arma.descricao}
                          </p>
                          <div className="flex flex-col">
                            <p>
                              <b>Preço: </b>
                              T${arma.preco}
                            </p>
                            <p>
                              <b>Dano: </b>
                              {arma.dano} de dano {arma.tipo}
                            </p>
                            <p>
                              <b>Crítico: </b>
                              {arma.crit}
                            </p>
                            <p>
                              <b>Alcance: </b>
                              {arma.alcance}
                            </p>
                          </div>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <p className="my-auto w-1/3">{arma.nome}</p>
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{arma.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armasSimples.length > 0 &&
                        !armasSimples.includes(arma.nome)
                      }
                      onChange={(e) => {
                        if (
                          e.target.checked &&
                          !armasSimples.includes(arma.nome)
                        ) {
                          setArmasSimples([...armasSimples, arma.nome]);
                        } else {
                          setArmasSimples(
                            armasSimples.filter((x) => x !== arma.nome)
                          );
                        }
                      }}
                      colorScheme="red"
                      className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem className={marciais ? "hidden" : "block"}>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Marcial</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 bg-gray-100 border rounded-xl mb-2"
              >
                {tabelaArmas.map((arma: Arma) => (
                  <div className="flex justify-between align-middle border-b-gray-300 border-b py-2">
                    <Popover>
                      <PopoverTrigger>
                        <IconButton
                          icon={<Eye />}
                          aria-label={arma.nome + "-VerMais"}
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
                        <PopoverHeader className="text-center">
                          {arma.nome}
                        </PopoverHeader>
                        <PopoverBody className="font-serif flex flex-col">
                          <p className="text-justify">
                            &nbsp;&nbsp;&nbsp;{arma.descricao}
                          </p>
                          <div className="flex flex-col">
                            <p>
                              <b>Preço: </b>
                              T${arma.preco}
                            </p>
                            <p>
                              <b>Dano: </b>
                              {arma.dano} de dano {arma.tipo}
                            </p>
                            <p>
                              <b>Crítico: </b>
                              {arma.crit}
                            </p>
                            <p>
                              <b>Alcance: </b>
                              {arma.alcance}
                            </p>
                          </div>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <p className="my-auto w-1/3">{arma.nome}</p>
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{arma.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armasMarciais.length > 0 &&
                        !armasMarciais.includes(arma.nome)
                      }
                      onChange={(e) => {
                        if (
                          e.target.checked &&
                          !armasMarciais.includes(arma.nome)
                        ) {
                          setArmasMarciais([...armasMarciais, arma.nome]);
                        } else {
                          setArmasMarciais(
                            armasMarciais.filter((x) => x !== arma.nome)
                          );
                        }
                      }}
                      colorScheme="red"
                      className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem
              className={
                classe && classe.length > 0
                  ? classe[0].nome === "Arcanista"
                    ? "hidden"
                    : "block"
                  : "block"
              }
            >
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Armadura</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 bg-gray-100 border rounded-xl mb-2"
              >
                {armadurasFiltradas.map((armadura: Armadura) => (
                  <div className="flex justify-between align-middle border-b-gray-300 border-b py-2">
                    <Popover>
                      <PopoverTrigger>
                        <IconButton
                          icon={<Eye />}
                          aria-label={armadura.nome + "-VerMais"}
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
                        <PopoverHeader className="text-center">
                          {armadura.nome}
                        </PopoverHeader>
                        <PopoverBody className="font-serif flex flex-col">
                          <p className="text-justify">
                            &nbsp;&nbsp;&nbsp;{armadura.descricao}
                          </p>
                          <div className="flex flex-col">
                            <p>
                              <b>Categoria: </b>
                              {armadura.tipo === "Armadura"
                                ? "Armadura "
                                : "Escudo "}
                              {armadura.categoria}
                            </p>
                            <p>
                              <b>Preço: </b>
                              T${armadura.preco}
                            </p>
                            <p>
                              <b>Defesa: </b>
                              {armadura.defesa}
                            </p>
                            <p>
                              <b>Penalidade de armadura: </b>
                              {armadura.penalidade}
                            </p>
                          </div>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <p className="my-auto w-1/3">{armadura.nome}</p>
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{armadura.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armaduras.length > 0 &&
                        !armaduras.includes(armadura.nome)
                      }
                      onChange={(e) => {
                        if (
                          e.target.checked &&
                          !armaduras.includes(armadura.nome)
                        ) {
                          setArmaduras([...armaduras, armadura.nome]);
                        } else {
                          setArmaduras(
                            armaduras.filter((x) => x !== armadura.nome)
                          );
                        }
                      }}
                      colorScheme="red"
                      className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
          <Confirmar onSelect={handleSelect} />
        </section>
      </div>
    </>
  );
}

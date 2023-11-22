import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
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
} from "../../classes/Tabelas/Itens";
import { Armadura } from "../../classes/Construtores/Armadura";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { useState } from "react";

interface EquipamentosProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Equipamentos({ setPagina, next }: EquipamentosProps) {
  const padrao = ["Mochila", "Saco de dormir", "Traje de viajante"];
  var classe = TabelaClasses.filter(
    (x: any) => x.nome === localStorage.getItem("classe")
  );
  if (classe === undefined) {
    classe = [TabelaClasses[0]];
  }
  const filtroArmaduras = ["Couro batido", "Gibão de peles"];
  if (
    classe !== undefined &&
    classe.length > 0 &&
    classe[0].proficiencias.includes("Armaduras pesadas")
  ) {
    filtroArmaduras.push("Brunea");
  }
  const Armaduras = tabelaArmaduras.filter((armadura: Armadura) =>
    filtroArmaduras.includes(armadura.nome)
  );
  let marciais = true;
  if (
    classe !== undefined &&
    classe.length > 0 &&
    classe[0].proficiencias.includes("Armas marciais")
  ) {
    marciais = false;
  }
  if (
    classe !== undefined &&
    classe.length > 0 &&
    (classe[0].proficiencias.includes("escudos") ||
      classe[0].proficiencias.includes("Escudos"))
  ) {
    padrao.push("Escudo Leve");
  }
  const [armasSimples, setArmasSimples] = useState<string[]>([]);
  const [armasMarciais, setArmasMarciais] = useState<string[]>([]);
  const [armaduras, setArmaduras] = useState<string[]>([]);
  const [Itens, setItens] = useState(padrao);
  const [tibares, setTibares] = useState<number>(() => {
    const nivel = Number(localStorage.getItem("lvl"));
    const tabela = [300, 600, 1000, 2000];
    if (nivel === 1) {
      let tibas = 0;
      for (let i = 0; i < 4; i++) {
        tibas += Math.floor(Math.random() * 6);
      }
      return tibas;
    } else {
      return tabela[nivel - 2];
    }
  });
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha seus Equipamentos
      </h1>
      <i>T$ {tibares}</i>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <Accordion allowToggle>
            <div className="flex justify-evenly">
              {padrao.map((item: string) => (
                <Checkbox isChecked isDisabled>
                  {item}
                </Checkbox>
              ))}
            </div>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Simples</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 border rounded-xl mb-2"
              >
                {TabelasArmasSimles.map((arma: any) => (
                  <div className="flex justify-evenly align-middle border-b-gray-300 border-b py-2">
                    <p className="my-auto w-1/3">{arma.nome}</p>
                    <Popover>
                      <PopoverTrigger>
                        <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500 w-1/3">
                          Ver descrição
                        </button>
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
                              {arma.preco}
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
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{arma.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armasSimples.length > 0 &&
                        !armasSimples.includes(arma.nome)
                      }
                      className="w-fit"
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
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem isDisabled={marciais}>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Marcial</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 border rounded-xl mb-2"
              >
                {tabelaArmas.map((arma: any) => (
                  <div className="flex justify-evenly align-middle border-b-gray-300 border-b py-2">
                    <p className="my-auto w-1/3">{arma.nome}</p>
                    <Popover>
                      <PopoverTrigger>
                        <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500 w-1/3">
                          Ver descrição
                        </button>
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
                              {arma.preco}
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
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{arma.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armasMarciais.length > 0 &&
                        !armasMarciais.includes(arma.nome)
                      }
                      className="w-fit"
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
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem isDisabled={classe[0].nome === "Arcanista"}>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Armadura</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel
                pb={4}
                className="flex flex-col border-gray-100 border rounded-xl mb-2"
              >
                {Armaduras.map((armadura: Armadura) => (
                  <div className="flex justify-evenly align-middle border-b-gray-300 border-b py-2">
                    <p className="my-auto w-1/3">{armadura.nome}</p>
                    <Popover>
                      <PopoverTrigger>
                        <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500 w-1/3">
                          Ver descrição
                        </button>
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
                              {armadura.preco}
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
                    <p className="w-fit my-auto flex flex-col items-center">
                      <p>Espaços</p>
                      <p>{armadura.espacos}</p>
                    </p>
                    <Checkbox
                      isDisabled={
                        armaduras.length > 0 &&
                        !armaduras.includes(armadura.nome)
                      }
                      className="w-fit"
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
                    />
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  );
}

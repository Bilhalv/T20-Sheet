import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import Equipamento from "../components/Ficha/Equipamento";
import Pericias from "../components/Ficha/Pericias";
import Atributos from "../components/Ficha/Atributos";
import Info from "../components/Ficha/Info";
import Ataques from "../components/Ficha/Ataques";
import { TabelasArmasSimles, tabelaArmas } from "../classes/Tabelas/Itens";
import { Arma } from "../classes/Construtores/Arma";
import Defesa from "../components/Ficha/Defesa";
import Status from "../components/Ficha/Status";
import { TabelaClasses } from "../classes/Tabelas/Classes";
import Tamanho from "../components/Ficha/Tamanho";
import Exp from "../components/Ficha/Exp-Deslocamento";

const Ficha: React.FC = () => {
  interface itemMochila {
    nome: string;
    quantidade: number;
    tipo: "arma" | "armadura" | "item";
    pericia?: string[];
  }
  const armas: itemMochila[] = [
    { nome: "Espada curta", quantidade: 1, tipo: "arma" },
    { nome: "Adaga", quantidade: 1, tipo: "arma" },
  ];
  const armaduras: itemMochila[] = [
    { nome: "Gibão de peles", quantidade: 1, tipo: "armadura" },
    { nome: "Escudo leve", quantidade: 1, tipo: "armadura" },
  ];
  const itens: itemMochila[] = [
    { nome: "Algemas", quantidade: 1, tipo: "item" },
    { nome: "Água benta", quantidade: 4, tipo: "item" },
  ];
  const todosataques = [...tabelaArmas, ...TabelasArmasSimles].map(
    (arma: Arma) => {
      return {
        nome: arma.nome,
        bonus: 0,
        dano: arma.dano,
        critico: arma.crit,
        tipo: arma.tipo,
        alcance: arma.alcance,
      };
    }
  );
  const ataques = todosataques.filter((ataque) =>
    armas.some((arma) => arma.nome === ataque.nome)
  );
  const [itensMochi, setItensMochi] = useState<itemMochila[]>([
    ...armas,
    ...armaduras,
    ...itens,
  ]);
  const [status, setStatus] = useState<any>({
    pv: 20,
    pvMax: 20,
    pm: 20,
    pmMax: 20,
  });
  const [personagem, setPersonagem] = useState<any>({
    nome: "Gladimir",
    raca: "Humano",
    origem: "Professor",
    classe: "Paladino",
    nivel: 5,
    divindade: "Arsenal",
    periciasTreinadas: ["Atletismo", "Intimidação", "Percepção", "Religião"],
    atributos: {
      forca: 1,
      destreza: -1,
      constituicao: 1,
      inteligencia: 3,
      sabedoria: 1,
      carisma: 4,
    },
    mochila: [...armas, ...armaduras, ...itens],
    ataques: ataques,
    status: status,
  });
  const classe = TabelaClasses.find(
    (classe) => classe.nome === personagem.classe
  );
  return (
    <>
      <Navbar back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 w-11/12 desktop:w-11/12 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
          <h1 className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            {personagem.nome}
          </h1>
          <div className="block desktop:hidden">
            <Atributos personagem={personagem} />
            <Tabs
              variant={"enclosed"}
              colorScheme="red"
              className="mt-4"
              isFitted
            >
              <TabList>
                <Tab
                  roundedTop={"3xl"}
                  bgColor={"red.600"}
                  border={"none"}
                  className="aria-selected:bg-black z-10 aria-selected:invert aria-selected:transition-none aria-selected:bg-opacity-60"
                >
                  <img
                    className="transform hover:scale-150 transition-all scale-125"
                    src="./img/tabsFicha/ficha.svg"
                  />
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  bgColor={"red.600"}
                  border={"none"}
                  className="aria-selected:bg-black z-10 aria-selected:invert aria-selected:transition-none aria-selected:bg-opacity-60"
                >
                  <img
                    className="transform hover:scale-150 transition-all scale-125"
                    src="./img/tabsFicha/combate.svg"
                  />
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  bgColor={"red.600"}
                  border={"none"}
                  className="aria-selected:bg-black z-10 aria-selected:invert aria-selected:transition-none aria-selected:bg-opacity-60"
                >
                  <img
                    className="transform hover:scale-150 transition-all scale-125"
                    src="./img/tabsFicha/pericia.svg"
                  />
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  bgColor={"red.600"}
                  border={"none"}
                  className="aria-selected:bg-black z-10 aria-selected:invert aria-selected:transition-none aria-selected:bg-opacity-60"
                >
                  <img
                    className="transform hover:scale-150 transition-all scale-125"
                    src="./img/tabsFicha/ficha.svg"
                  />
                </Tab>
              </TabList>
              <TabPanels className="bg-white bg-opacity-60">
                <TabPanel className="flex flex-col gap-4">
                  <Info personagem={personagem} />
                  <Status personagem={personagem} setStatus={setStatus} />
                  <Equipamento
                    personagem={personagem}
                    setItens={setItensMochi}
                  />
                </TabPanel>
                <TabPanel className="flex flex-col gap-11">
                  <Ataques personagem={personagem} />
                  <Defesa personagem={personagem} />
                </TabPanel>
                <TabPanel>
                  <Pericias personagem={personagem} />
                </TabPanel>
                <TabPanel>
                  <p>four!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <article className="flex-col justify-center mx-7 rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 px-5 desktop:px-12 hidden desktop:flex">
            <Info personagem={personagem} />
            <section className="flex gap-6">
              <div className="flex flex-col w-2/3 gap-2">
                <div className="flex gap-4">
                  <div className="flex flex-col items-start gap-4">
                    <div className="flex items-center justify-between w-full gap-4">
                      <Atributos personagem={personagem} />
                      <Tamanho personagem={personagem} />
                    </div>
                    <div className="flex items-center gap-2">
                      <Status personagem={personagem} setStatus={setStatus} />
                      <div className="w-1/3">
                        <Exp personagem={personagem} />
                      </div>
                    </div>
                  </div>
                  <div className=" bg-white px-2 py-2 rounded-xl border border-black">
                    <h1 className="text-center text-red-900 text-xs font-bold">
                      Proficiencias e outras categorias
                    </h1>
                    <ul className="list-disc pl-4">
                      {classe?.proficiencias.map((proficiencia) => {
                        return <li className="text-xs">{proficiencia}</li>;
                      })}
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col-reverse gap-6">
                  <Ataques personagem={personagem} />
                  <Defesa personagem={personagem} />
                </div>
                <div>
                  <Equipamento
                    personagem={personagem}
                    setItens={setItensMochi}
                  />
                </div>
              </div>
              <div className="w-1/3">
                <Pericias personagem={personagem} />
              </div>
            </section>
          </article>
        </article>
      </body>
    </>
  );
};

export default Ficha;

import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import { X, Edit, Plus } from "lucide-react";
import { TabelaPericias } from "../classes/Tabelas/Pericias";
import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tooltip,
} from "@chakra-ui/react";
import Equipamento from "../components/Ficha/Equipamento";
import Pericias from "../components/Ficha/Pericias";
import Atributos from "../components/Ficha/Atributos";
import Info from "../components/Ficha/Info";
import Ataques from "../components/Ficha/Ataques";
import {
  TabelasArmasSimles,
  tabelaArmaduras,
  tabelaArmas,
  tabelaItens,
} from "../classes/Tabelas/Itens";
import { Arma } from "../classes/Construtores/Arma";
import { Armadura } from "../classes/Construtores/Armadura";
import { Item } from "../classes/Construtores/Item";
import Defesa from "../components/Ficha/Defesa";
import Status from "../components/Ficha/Status";

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
  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen w-full font-tormenta">
        <Navbar back={"/"} />
        <article className="bg-gray-50 bg-opacity-30 w-3/4 desktop:w-11/12 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
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
                <div className="flex">
                  <div className="flex-col flex w-1/3">
                    <div className="flex">
                      <Atributos personagem={personagem} />
                      <div className="w-1/5">{/* tamanho */}</div>
                    </div>
                    <div className="flex">
                      <Status personagem={personagem} setStatus={setStatus} />
                      <div className="w-1/3">{/* pontos de xp e deslocamento */}</div>
                    </div>
                  </div>
                  <div className="w-1/3">{/* proficiencias e outras categorias */}</div>
                </div>
                <div className="flex gap-6">
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

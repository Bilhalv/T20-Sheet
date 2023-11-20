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

const Ficha: React.FC = () => {
  interface Item {
    nome: string;
    quantidade: number;
    espacos: number;
    desc: string;
    isArma?: boolean;
    isArmadura?: boolean;
    isEscudo?: boolean;
    bonusAtaque?: number;
    Dano?: string;
    crit?: string;
    alcance?: string;
    tipo?: string;
    defesa?: number;
  }
  const [itens, setItens] = useState<Item[]>([
    {
      nome: "Espada Longa",
      quantidade: 1,
      espacos: 2,
      desc: "Uma espada longa afiada e poderosa.",
      isArma: true,
      bonusAtaque: 0,
      Dano: "1d8",
      crit: "19/x2",
      alcance: "Pessoal",
      tipo: "Corte",
    },
    {
      nome: "Escudo",
      quantidade: 1,
      espacos: 1,
      desc: "Um escudo resistente para proteção.",
      isEscudo: true,
      defesa: 1,
    },
    {
      nome: "Armadura de Couro",
      quantidade: 1,
      espacos: 3,
      desc: "Uma armadura de couro leve e flexível.",
      isArmadura: true,
      defesa: 2,
    },
    {
      nome: "Poção de Cura",
      quantidade: 3,
      espacos: 1,
      desc: "Uma poção mágica que restaura pontos de vida.",
    },
    {
      nome: "Adaga",
      quantidade: 2,
      espacos: 1,
      desc: "Uma adaga afiada e fácil de manusear.",
      isArma: true,
      bonusAtaque: 0,
      Dano: "1d4",
      crit: "19/x2",
      alcance: "Curto",
      tipo: "Perfuração",
    },
    {
      nome: "Arco Longo",
      quantidade: 1,
      espacos: 2,
      desc: "Um arco longo para ataques à distância.",
      isArma: true,
      bonusAtaque: 3,
      Dano: "1d8",
      crit: "20/x3",
      alcance: "Curto",
      tipo: "Perfuração",
    },
  ]);
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
    itens: itens,
  });
  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen w-full font-tormenta">
        <Navbar back={"/"} />
        <article className="bg-gray-50 bg-opacity-30 w-3/4 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
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
                  _selected={{ color: "black", bg: "white" }}
                  color={"white"}
                  bgColor={"red.600"}
                >
                  <img src="./img/tabsFicha/ficha.svg" />
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  _selected={{ color: "black", bg: "white" }}
                  color={"white"}
                  bgColor={"red.600"}
                >
                  <img src="./img/tabsFicha/combate.svg" />
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  _selected={{ color: "black", bg: "white" }}
                  color={"white"}
                  bgColor={"red.600"}
                >
                  Three
                </Tab>
                <Tab
                  roundedTop={"3xl"}
                  _selected={{ color: "black", bg: "white" }}
                  color={"white"}
                  bgColor={"red.600"}
                >
                  Four
                </Tab>
              </TabList>
              <TabPanels className="bg-white">
                <TabPanel>
                  <Info personagem={personagem} />
                  <Equipamento personagem={personagem} setItens={setItens} />
                </TabPanel>
                <TabPanel>
                  <p>two!</p>
                </TabPanel>
                <TabPanel>
                  <p>three!</p>
                </TabPanel>
                <TabPanel>
                  <p>four!</p>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <article className="flex-col flex justify-center mx-7 rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 px-5 desktop:px-12"></article>
        </article>
      </body>
    </>
  );
};

export default Ficha;

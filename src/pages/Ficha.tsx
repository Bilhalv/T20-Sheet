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
import { TabelasArmasSimles, tabelaArmaduras, tabelaArmas, tabelaItens } from "../classes/Tabelas/Itens";
import { Arma } from "../classes/Construtores/Arma";
import { Armadura } from "../classes/Construtores/Armadura";
import { Item } from "../classes/Construtores/Item";

const Ficha: React.FC = () => {
  interface itemMochila{
    nome: string,
    quantidade: number,
    tipo: "arma" | "armadura" | "item"
  }
  const armas: itemMochila[] = [
    {nome: "Espada curta", quantidade: 1, tipo: "arma"},
    {nome: "Adaga", quantidade: 1, tipo: "arma"},
  ]
  const armaduras: itemMochila[] = [
    {nome: "Gibão de peles", quantidade: 1, tipo: "armadura"},
    {nome: "Escudo", quantidade: 1, tipo: "armadura"},
  ]
  const itens: itemMochila[] = [
    {nome: "Algemas", quantidade: 1, tipo: "item"},
    {nome: "Água benta", quantidade: 4, tipo: "item"},
  ]
  const [itensMochi, setItensMochi] = useState<itemMochila[]>([...armas, ...armaduras, ...itens]);
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
                <TabPanel className="flex flex-col gap-2">
                  <Info personagem={personagem} />
                  <Equipamento personagem={personagem} setItens={setItensMochi} />
                </TabPanel>
                <TabPanel>
                  <Ataques personagem={personagem} />
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
          <article className="flex-col justify-center mx-7 rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 px-5 desktop:px-12 hidden desktop:flex"></article>
        </article>
      </body>
    </>
  );
};

export default Ficha;

import React, { useEffect, useRef, useState } from "react";
import Navbar from "../components/Geral/Navbar";
import {
  Button,
  IconButton,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import Equipamento from "../components/Ficha/Equipamento";
import Pericias from "../components/Ficha/Pericias";
import Atributos from "../components/Ficha/Atributos";
import Info from "../components/Ficha/Info";
import Ataques from "../components/Ficha/Ataques";
import Defesa from "../components/Ficha/Defesa";
import Status from "../components/Ficha/Status";
import Tamanho from "../components/Ficha/Tamanho";
import Exp from "../components/Ficha/Exp-Deslocamento";
import FichaConstructor, {
  Mochila,
  armaFicha,
  armaduraFicha,
  itemFicha,
} from "../classes/Construtores/Ficha";
import useCustomToast from "../components/Geral/Toasted";
import Magias from "../components/Ficha/Magias";
import Poderes from "../components/Ficha/Poderes";
import FichaPDF from "../components/Ficha/FichaPDF";

const Ficha: React.FC = () => {
  const fichaSelecionada: FichaConstructor = JSON.parse(
    localStorage.getItem("fichaSelecionada") || "[]"
  );
  const [ficha, setFicha] = useState<FichaConstructor>(fichaSelecionada);
  const mochila: Mochila = ficha?.mochila;
  const armas: armaFicha[] = mochila?.armas || [];
  const { showCustomToast } = useCustomToast();
  const armaduras: armaduraFicha[] = mochila.armaduras;
  const itens: itemFicha[] = mochila.itens;
  const tibares = mochila.tibares;

  const [personagem, setPersonagem] = useState<FichaConstructor>({
    ...ficha,
    mochila: {
      armas: armas,
      armaduras: armaduras,
      itens: itens,
      tibares: tibares,
    },
  });
  const classe = personagem.classe;
  const handlePersonagem = (personagem: FichaConstructor) => {
    setPersonagem(personagem);
    localStorage.setItem("fichaSelecionada", JSON.stringify(personagem));
    const fichasTemporarias: FichaConstructor[] = JSON.parse(
      localStorage.getItem("fichas") || "[]"
    );
    localStorage.setItem(
      "fichas",
      JSON.stringify(
        fichasTemporarias.map((fichaTemporaria) => {
          if (fichaTemporaria.id === personagem.id) {
            return personagem;
          } else {
            return fichaTemporaria;
          }
        })
      )
    );
  };
  return (
    <>
      <Navbar back={"/"} ficha={true} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 w-11/12 desktop:w-11/12 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
          <FichaPDF personagem={personagem} />
          <div className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)] my-auto mt-[-20px]">
            <h1>{personagem.nome}</h1>
          </div>
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
                    src="./img/tabsFicha/magia.svg"
                  />
                </Tab>
              </TabList>
              <TabPanels className="bg-white bg-opacity-60">
                <TabPanel className="flex flex-col gap-4">
                  <Info personagem={personagem} />
                  <Status
                    personagem={personagem}
                    setPersonagem={handlePersonagem}
                  />
                  <Equipamento
                    personagem={personagem}
                    setPersonagem={handlePersonagem}
                  />
                </TabPanel>
                <TabPanel className="flex flex-col gap-11">
                  <Ataques
                    personagem={personagem}
                    setPersonagem={handlePersonagem}
                  />
                  <Defesa personagem={personagem} />
                </TabPanel>
                <TabPanel>
                  <Pericias personagem={personagem} />
                </TabPanel>
                <TabPanel className="flex flex-col gap-6">
                  <Poderes personagem={personagem} />
                  <Magias personagem={personagem} setPersonagem={handlePersonagem} />
                </TabPanel>
              </TabPanels>
            </Tabs>
          </div>
          <article className="bg-gray-50 bg-opacity-30 w-11/12 desktop:w-11/12 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5 hidden desktop:block">
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
                      <Status
                        personagem={personagem}
                        setPersonagem={handlePersonagem}
                      />
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
                <div className="flex flex-col gap-6">
                  <Defesa personagem={personagem} />
                  <Ataques
                    personagem={personagem}
                    setPersonagem={handlePersonagem}
                  />
                  <Equipamento
                    personagem={personagem}
                    setPersonagem={handlePersonagem}
                  />
                </div>
              </div>
              <div className="w-1/3 flex flex-col gap-6">
                <h1></h1>
                <Pericias personagem={personagem} />
                <Poderes personagem={personagem} />
                <Magias personagem={personagem} setPersonagem={handlePersonagem} />
              </div>
            </section>
          </article>
        </article>
      </body>
    </>
  );
};

export default Ficha;

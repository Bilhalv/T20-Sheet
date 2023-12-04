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
import FichaConstructor, {
  Ataque,
  Mochila,
  armaFicha,
  armaduraFicha,
  itemFicha,
} from "../classes/Construtores/Ficha";
import { RolarDado } from "../components/Geral/RolarDado";

const fichaSelecionada = JSON.parse(
  localStorage.getItem("fichaSelecionada") || "[]"
);
const Ficha: React.FC = () => {
  const [ficha, setFicha] = useState<FichaConstructor>(fichaSelecionada);
  const mochila: Mochila = ficha.mochila;
  const armas: armaFicha[] = mochila.armas;
  const armaduras: armaduraFicha[] = mochila.armaduras;
  const itens: itemFicha[] = mochila.itens;
  const tibares = mochila.tibares;
  const ataques: Ataque[] = armas.map((arma: armaFicha) => {
    const tabela = [...TabelasArmasSimles, ...tabelaArmas].find((tabela) => {
      return tabela.nome === arma.nome;
    });

    if (!tabela) {
      throw new Error(`No table found for weapon ${arma.nome}`);
    }

    const ataque: Ataque = {
      nome: arma.nome,
      bonus: 0,
      dano: tabela.dano,
      critico: tabela.crit,
      tipo: tabela.tipo,
      alcance: tabela.alcance,
      observacao: tabela.descricao,
      ataque() {
        const dano = tabela.dano.split("d");
        const vantagemdesvantagem = prompt(
          "Você tem vantagem ou desvantagem? (v/d)"
        );
        const bonus = Number(prompt("Qual o bônus?"));
        let total = 0;
        let acerto = 0;
        let dados;
        if (vantagemdesvantagem === "v") {
          const rolagem = RolarDado({
            qtd: 1,
            lados: 20,
            rerola: "adv",
            mod: bonus,
          });
          total = rolagem.total;
          dados = rolagem.reroll;
        } else if (vantagemdesvantagem === "d") {
          const rolagem = RolarDado({
            qtd: 1,
            lados: 20,
            rerola: "des",
            mod: bonus,
          });
          total = rolagem.total;
          dados = rolagem.reroll;
        } else {
          const rolagem = RolarDado({
            qtd: 1,
            lados: 20,
            mod: bonus,
          });
          total = rolagem.total;
          dados = rolagem.reroll;
        }
        const danoRolado = RolarDado({
          qtd: parseInt(dano[0]),
          lados: parseInt(dano[1]),
          mod: bonus,
        });
        const danoRoladoTotal = danoRolado.total;
        const danoRoladoDados = danoRolado.reroll;
        alert(
          `Você rolou ${total}(${dados.join(", ")}) no dado de ataque e ${danoRoladoTotal}(${tabela.dano+" = "+danoRoladoDados.join(", ")}) no dado de dano`
        );
        return danoRoladoTotal;
      },
    };
    return ataque;
  });
  const [personagem, setPersonagem] = useState<FichaConstructor>({
    ...ficha,
    ataques: ataques,
    mochila: {
      armas: armas,
      armaduras: armaduras,
      itens: itens,
      tibares: tibares,
    },
  });
  const classe = personagem.classe;
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
                  <Status
                    personagem={personagem}
                    setPersonagem={setPersonagem}
                  />
                  <Equipamento
                    personagem={personagem}
                    setPersonagem={setPersonagem}
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
                      <Status
                        personagem={personagem}
                        setPersonagem={setPersonagem}
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
                <div className="flex flex-col-reverse gap-6">
                  <Ataques personagem={personagem} />
                  <Defesa personagem={personagem} />
                </div>
                <div>
                  <Equipamento
                    personagem={personagem}
                    setPersonagem={setPersonagem}
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

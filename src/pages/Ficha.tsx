import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import { X, Edit, Plus } from "lucide-react";
import { TabelaPericias } from "../classes/Tabelas/Pericias";
import { Tooltip } from "@chakra-ui/react";

const Ficha: React.FC = () => {
  interface Item {
    nome: string;
    quantidade: number;
    espacos: number;
    desc: string;
  }
  const [itens, setItens] = useState<Item[]>([
    {
      nome: "Espada Longa",
      quantidade: 1,
      espacos: 2,
      desc: "Uma espada longa afiada e poderosa.",
    },
    {
      nome: "Escudo",
      quantidade: 1,
      espacos: 1,
      desc: "Um escudo resistente para proteção.",
    },
    {
      nome: "Armadura de Couro",
      quantidade: 1,
      espacos: 3,
      desc: "Uma armadura de couro leve e flexível.",
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
    },
    {
      nome: "Arco Longo",
      quantidade: 1,
      espacos: 2,
      desc: "Um arco longo para ataques à distância.",
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
  const [itemSelecionado, setItemSelecionado] = useState<Item>({
    nome: "Item",
    quantidade: 0,
    espacos: 0,
    desc: "",
  });
  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen w-full font-tormenta">
        <Navbar back={"/"} />
        <article className="bg-gray-50 bg-opacity-30 w-3/4 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
          <h1 className="text-3xl text-center text-white drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            {personagem.nome}
          </h1>
          <article className="flex-col flex justify-center mx-7 rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 px-5 desktop:px-12">
            <section className="flex flex-wrap justify-between">
              {[
                { label: "Raça", value: personagem.raca },
                { label: "Origem", value: personagem.origem },
                { label: "Classe", value: personagem.classe },
                { label: "Nível", value: personagem.nivel },
                { label: "Divindade", value: personagem.divindade },
              ].map((item) => (
                <div>
                  <h1 className="shadow-[5px_5px_0px_0px_rgba(155,0,0)] bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md">
                    {item.value}
                  </h1>
                  <h1 className="text-center text-red-900 drop-shadow-2xl text-xl">
                    {item.label}
                  </h1>
                </div>
              ))}
              <img className="h-12" src="./img/bannerT20.png" />
            </section>
            <section className="flex justify-between gap-3">
              <div className="flex flex-col justify-between w-2/3">
                <section className="w-full flex">
                  <div className="w-1/2">
                    <div className="flex justify-evenly">
                      {Object.keys(personagem.atributos).map((atributo) => (
                        <div className="bg-white rounded-xl bg-opacity-70 border border-black flex flex-col p-3 w-13 h-16">
                          <h1 className="text-center mt-[-15px] text-red-900 drop-shadow-2xl text-md">
                            {atributo.substring(0, 3).toUpperCase()}
                          </h1>
                          <h1 className="text-center text-3xl text-red-900 drop-shadow-2xl text-md mb-3">
                            {personagem.atributos[atributo]}
                          </h1>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="w-1/2"></div>
                </section>
                <section className="w-full">
                  <h1 className="text-center text-xl mb-4 text-red-900">
                    Equipamento
                  </h1>
                  <div className="bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md border-black border flex">
                    <section className="grid border-black border-r">
                      <div className="grid grid-cols-5 gap-2">
                        <div className="col-span-2">
                          <h1>Nome</h1>
                        </div>
                        <div>
                          <h1>Quantidade</h1>
                        </div>
                        <div>
                          <h1>Espaços</h1>
                        </div>
                        <div></div>
                      </div>
                      {personagem.itens.map((item: any, index: number) => (
                        <>
                          <div
                            className="grid grid-cols-5 gap-2 my-2"
                            key={index}
                          >
                            <button className="bg-black text-white w-fit h-fit my-auto hover:bg-red-600 hover:tranform hover:scale-110 transition-all">
                              <X />
                            </button>
                            <div>
                              <h1>{item.nome}</h1>
                            </div>
                            <div>
                              <h1>{item.quantidade}</h1>
                            </div>
                            <div>
                              <h1>{item.espacos}</h1>
                            </div>
                            <button
                              className="hover:text-red-600 w-fit h-fit my-auto hover:bg-opacity-60 hover:tranform hover:scale-110 transition-all"
                              onClick={() => {
                                setItemSelecionado(item);
                              }}
                            >
                              <Edit />
                            </button>
                          </div>
                        </>
                      ))}
                    </section>
                    <section className="font-serif w-2/3 h-full px-4 py-4 flex flex-col gap-20">
                      <div className="my-auto h-full px-4 py-2">
                        <h1 className="text-center font-bold text-xl">
                          {itemSelecionado.nome}
                        </h1>
                        <p className="text-justify w-full h-24 border rounded-lg border-black mt-4 p-2">
                          {itemSelecionado.desc}
                        </p>
                      </div>
                      <div className="flex justify-end w-full pr-2 mt-auto">
                        <button className="hover:bg-red-600 w-fit h-fit rounded-md my-auto bg-black text-white hover:tranform hover:scale-110 transition-all">
                          <Plus />
                        </button>
                      </div>
                    </section>
                  </div>
                </section>
              </div>
              <div className="w-1/3 bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md border-black border">
                <h1 className="text-center text-red-900 drop-shadow-2xl text-xl">
                  Perícias
                </h1>
                {TabelaPericias.map((pericia) => {
                  const treinada = personagem.periciasTreinadas.includes(
                    pericia.nome
                  );
                  return (
                    <div className="flex justify-between hover:border-red-950 rounded px-2 hover:transform hover:scale-110 transition-all border border-transparent">
                      <Tooltip
                        bgColor={"red.700"}
                        label={`${pericia.descricao}`}
                      >
                        <h1 className="text-left w-2/4 text-red-900 drop-shadow-2xl text-md">
                          {pericia.nome}
                        </h1>
                      </Tooltip>
                      <h1 className="text-left w-2/4 text-red-500 drop-shadow-2xl text-md">
                        {pericia.atributo}
                      </h1>
                      <Tooltip
                        bgColor={"red.700"}
                        label={`${treinada ? 5 : 0} + ${pericia.atributo}(${
                          personagem.atributos[pericia.atributo]
                        }) + metade do nivel(${Math.floor(
                          personagem.nivel / 2
                        )})`}
                      >
                        <h1 className="text-right text-red-900 drop-shadow-2xl text-md">
                          {(treinada ? 5 : 0) +
                            personagem.atributos[pericia.atributo] +
                            Math.floor(personagem.nivel / 2)}
                        </h1>
                      </Tooltip>
                    </div>
                  );
                })}
              </div>
            </section>
          </article>
        </article>
      </body>
    </>
  );
};

export default Ficha;

import { useToast } from "@chakra-ui/react";
import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";
import {
  TabelasArmasSimles,
  tabelaArmaduras,
  tabelaArmas,
  tabelaItens,
} from "../../classes/Tabelas/Itens";
import Ficha, {
  Mochila,
  armaFicha,
  armaduraFicha,
  itemFicha,
} from "../../classes/Construtores/Ficha";
import React from "react";

interface Props {
  personagem: Ficha;
  setPersonagem: (personagem: Ficha) => void;
}

export default function Equipamento({ personagem, setPersonagem }: Props) {
  const todosItens = [
    ...tabelaArmaduras,
    ...TabelasArmasSimles,
    ...tabelaArmas,
    ...tabelaItens,
  ];
  let toast = useToast();
  const [itemSelecionado, setItemSelecionado] = useState({
    nome: "",
    desc: "",
  });
  function typeFicha(item: armaFicha | armaduraFicha | itemFicha) {
    if ("dano" in item) {
      return "arma";
    } else if ("defesa" in item) {
      return "armadura";
    } else {
      return "item";
    }
  }
  let mochila = [
    ...personagem.mochila.armas,
    ...personagem.mochila.armaduras,
    ...personagem.mochila.itens,
  ];
  const removeItem = (item: string) => {
    let confirmar = prompt(
      `Digite o nome do item: ${item} para confirmar exclusão.`
    );
    if (confirmar !== item) {
      toast({
        title: "Item não deletado.",
        description: "O nome digitado não corresponde ao nome do item.",
        status: "error",
        isClosable: true,
      });
      return;
    } else {
      let index = mochila.findIndex((i) => i.nome === item);
      if (index !== -1) {
        mochila.splice(index, 1);
      }
      const itens = mochila.filter(
        (e): e is itemFicha => typeFicha(e) === "item"
      );
      const armas = mochila.filter(
        (e): e is armaFicha => typeFicha(e) === "arma"
      );
      const armaduras = mochila.filter(
        (e): e is armaduraFicha => typeFicha(e) === "armadura"
      );
      setPersonagem({
        ...personagem,
        mochila: {
          ...personagem.mochila,
          armas: armas,
          armaduras: armaduras,
          itens: itens,
        },
      });
      toast({
        title: "Item deletado.",
        description: "O item foi deletado com sucesso.",
        status: "success",
        isClosable: true,
      });
    }
  };
  return (
    <>
      <section className="w-full">
        <h1 className="text-center text-xl mb-4 text-red-900">Equipamento</h1>
        <div className="bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md border-black border flex flex-col w-full desktop:flex-row">
          <section className="flex flex-col w-full">
            <div className="flex justify-between my-2 w-full">
              <div className="text-transparent w-fit h-fit">
                <X />
              </div>
              <div className="w-1/3">
                <h1>Nome</h1>
              </div>
              <div className="w-1/3">
                <h1>Quantidade</h1>
              </div>
              <div className="w-1/3">
                <h1>Espaços</h1>
              </div>
              <div className="text-transparent w-fit h-fit">
                <Edit />
              </div>
            </div>
            {mochila.map((item: any, index: number) => (
              <>
                <div className="flex justify-between  my-2 w-full" key={index}>
                  <button
                    onClick={() => removeItem(item)}
                    className="bg-black text-white w-fit h-fit hover:bg-red-600 hover:tranform hover:scale-110 transition-all"
                  >
                    <X />
                  </button>
                  <div className="w-1/3">
                    <h1>{item.nome}</h1>
                  </div>
                  <div className="w-1/3">
                    <h1>{item.quantidade}</h1>
                  </div>
                  <div className="w-1/3">
                    <h1>
                      {todosItens.find((i) => i.nome === item.nome)?.espacos ||
                        0}
                    </h1>
                  </div>
                  <button
                    className="hover:text-red-600 w-fit h-fit hover:bg-opacity-60 hover:tranform hover:scale-110 transition-all"
                    onClick={() => {
                      const x = todosItens.find(
                        (i) => i.nome === item.nome
                      ) || {
                        nome: "",
                        descricao: "",
                      };
                      setItemSelecionado({
                        nome: x.nome,
                        desc: x.descricao,
                      });
                    }}
                  >
                    <Edit />
                  </button>
                </div>
              </>
            ))}
          </section>
          <section className="font-serif h-full px-4 py-4 w-full">
            <div className="w-full flex gap-2">
              <div className="my-auto h-full w-full">
                <h1 className="text-center font-bold text-xl">
                  {itemSelecionado.nome || "Descrição"}
                </h1>
                <p className="text-justify w-full min-h-[100px] border rounded-lg border-black mt-4 p-2">
                  &nbsp;&nbsp;&nbsp;{itemSelecionado.desc}
                </p>
              </div>
              <div className="flex justify-end pr-2 mt-auto">
                <button className="hover:bg-red-600 w-fit h-fit rounded-md my-auto bg-black text-white hover:tranform hover:scale-110 transition-all">
                  <Plus />
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

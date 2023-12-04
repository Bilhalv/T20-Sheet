import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  useToast,
} from "@chakra-ui/react";
import { Edit, Plus, X } from "lucide-react";
import { useState, useEffect } from "react";
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
  const [totalEspacos, setTotalEspacos] = useState(0);
  const pesoMax = 10 + personagem.atributos[0].valor * 2;
  useEffect(() => {
    let espacos = 0;
    mochila.forEach((item) => {
      espacos += item.espacos * item.quantidade;
    });
    setTotalEspacos(espacos);
  }, [mochila]);
  const [isOpen, setIsOpen] = useState(false);
  const handleAddItem = () => {
    if (typeFicha(itemAdd) === "arma") {
      const newItemAdd = {
        ...itemAdd,
        quantidade: 1,
      }
      const itens = mochila.filter(
        (e): e is itemFicha => typeFicha(e) === "arma"
      );
      setPersonagem({
        ...personagem,
        mochila: {
          ...personagem.mochila,
          armas: [...itens, newItemAdd],
        },
      });
    } else if (typeFicha(itemAdd) === "armadura") {
      const newItemAdd = {
        ...itemAdd,
        quantidade: 1,
      }
      const itens = mochila.filter(
        (e): e is itemFicha => typeFicha(e) === "armadura"
      );
      setPersonagem({
        ...personagem,
        mochila: {
          ...personagem.mochila,
          armaduras: [...itens, newItemAdd],
        },
      });
    } else if (typeFicha(itemAdd) === "item") {
      const newItemAdd = {
        ...itemAdd,
        quantidade: 1,
      }
      const itens = mochila.filter(
        (e): e is itemFicha => typeFicha(e) === "item"
      );
      setPersonagem({
        ...personagem,
        mochila: {
          ...personagem.mochila,
          itens: [...itens, newItemAdd],
        },
      });
    }
  };
  const [itemAdd, setItemAdd] = useState<any>();
  return (
    <>
      <section className="w-full">
        <h1
          className={
            "text-center text-xl mb-4 text-red-900 " +
            (totalEspacos > Number(pesoMax) ? "font-bold" : "")
          }
        >
          Equipamento {totalEspacos}/{pesoMax}
          {totalEspacos > Number(pesoMax) ? " - Excesso de peso" : ""}
        </h1>
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
                    onClick={() => removeItem(item.nome)}
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
                <textarea
                  value={itemSelecionado.desc}
                  className="text-justify w-full min-h-[100px] border rounded-lg border-black mt-4 p-2"
                  onChange={(e) => {
                    setItemSelecionado({
                      ...itemSelecionado,
                      desc: e.target.value,
                    });
                  }}
                />
              </div>
              <div className="flex justify-end pr-2 mt-auto">
                <button
                  onClick={() => setIsOpen(true)}
                  className="hover:bg-red-600 w-fit h-fit rounded-md my-auto bg-black text-white hover:tranform hover:scale-110 transition-all"
                >
                  <Plus />
                </button>
              </div>
            </div>
          </section>
        </div>
      </section>
      <Modal onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent className="font-tormenta">
          <ModalHeader>Adicionar item</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div className="flex flex-col gap-2">
              <Select
                placeholder="Selecione um item"
                onChange={(x) =>
                  setItemAdd(todosItens.find((e) => e.nome === x.target.value))
                }
              >
                {todosItens.map((item) => (
                  <option key={item.nome}>{item.nome}</option>
                ))}
              </Select>
              <h1 className="text-xl text-center">{itemAdd?.nome}</h1>
              <p className="text-lg text-justify font-serif">
                &nbsp;&nbsp;&nbsp;
                {itemAdd?.descricao}
              </p>
              {itemAdd && (
                <div className="flex justify-evenly">
                  <p>
                    <b>Espaços: </b>
                    {itemAdd?.espacos}
                  </p>
                  <p>
                    <b>Preço: </b>
                    T$ {(itemAdd?.preco).toFixed(2)}
                  </p>
                </div>
              )}
            </div>
          </ModalBody>
          <ModalFooter>
            <div className="flex justify-evenly w-full">
              <Button
                colorScheme="red"
                variant={"outline"}
                onClick={() => setIsOpen(false)}
              >
                Cancelar
              </Button>
              <Button colorScheme="red" onClick={handleAddItem}>
                Adicionar
              </Button>
            </div>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

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
  const [mochila, setMochila] = useState<Mochila>(personagem.mochila);
  const removeItem = (
    item: string,
    type: armaFicha | armaduraFicha | itemFicha
  ) => {
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
      let mochilatemp = mochila;
      if (type instanceof armaFicha) {
        mochilatemp.armas = mochilatemp.armas.filter((e) => e.nome !== item);
      } else if (type instanceof armaduraFicha) {
        mochilatemp.armaduras = mochilatemp.armaduras.filter(
          (e) => e.nome !== item
        );
      } else if (type instanceof itemFicha) {
        mochilatemp.itens = mochilatemp.itens.filter((e) => e.nome !== item);
      }
      setMochila(mochilatemp);
      setPersonagem({
        ...personagem,
        mochila: mochilatemp,
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
    [...mochila.armaduras, ...mochila.armas, ...mochila.itens].forEach(
      (item) => {
        espacos += item.espacos * item.quantidade;
      }
    );
    setTotalEspacos(espacos);
  }, [mochila]);
  const [isOpen, setIsOpen] = useState(false);
  const handleAddItem = () => {
    if (!itemAdd) {
      toast({
        title: "Erro",
        description: "Selecione um item para adicionar.",
        status: "error",
        isClosable: true,
      });
      return;
    }
    function addItemToCategory(category: any[]) {
      const index = category.findIndex((e) => e === itemAdd);
      const bolso: typeof category = [...category];
      let itemAddTemp: (typeof category)[0] = itemAdd;
      if (index === -1) {
        bolso.push(itemAddTemp);
      } else {
        bolso[index].quantidade++;
      }
      return bolso;
    }

    let mochilatemp = mochila as Mochila;

    if (itemAdd) {
      if ('crit' in itemAdd) {
        mochilatemp.armas = addItemToCategory(mochilatemp.armas);
        console.log(itemAdd);
      } else if ('defesa' in itemAdd) {
        mochilatemp.armaduras = addItemToCategory(mochilatemp.armaduras);
      } else {
        mochilatemp.itens = addItemToCategory(mochilatemp.itens);
      }
    }
    setMochila(mochilatemp);
    let personagemTemp = personagem;
    personagemTemp.mochila = mochilatemp;
    setPersonagem(personagemTemp);
    toast({
      title: "Item adicionado.",
      description: "O item foi adicionado com sucesso.",
      status: "success",
      isClosable: true,
    });
    setIsOpen(false);
  };
  const [itemAdd, setItemAdd] = useState<
    armaFicha | armaduraFicha | itemFicha
  >();
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
            {[...mochila.armaduras, ...mochila.armas, ...mochila.itens].map(
              (item: itemFicha | armaFicha | armaduraFicha, index: number) => (
                <>
                  <div
                    className="flex justify-between  my-2 w-full"
                    key={index}
                  >
                    <button
                      onClick={() => removeItem(item.nome, item)}
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
                        {todosItens.find((i) => i.nome === item.nome)
                          ?.espacos || 0}
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
              )
            )}
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
                defaultValue={itemAdd?.nome}
                onChange={(x) =>
                  setItemAdd({
                    ...(todosItens.find((e) => e.nome === x.target.value) ||
                      todosItens[0]),
                    quantidade: 1,
                    descUnica: "",
                  })
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

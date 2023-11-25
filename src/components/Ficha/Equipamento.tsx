import { useToast } from "@chakra-ui/react";
import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";
import { TabelasArmasSimles, tabelaArmaduras, tabelaArmas, tabelaItens } from "../../classes/Tabelas/Itens";

interface Props {
  personagem: any;
  setItens: any;
}

export default function Equipamento({ personagem, setItens }: Props) {
  const todosItens = [...tabelaArmaduras, ...TabelasArmasSimles, ...tabelaArmas, ...tabelaItens];
  let toast = useToast();
  const [itemSelecionado, setItemSelecionado] = useState({
    nome: "",
    desc: "",
  });
  const removeItem = (item: any) => {
    let itens = personagem.mochila;
    let confirmar = prompt(
      `Digite o nome do item: ${item.nome} para confirmar exclusão.`
    );
    if (confirmar !== item.nome) {
      toast({
        title: "Item não deletado.",
        description: "O nome digitado não corresponde ao nome do item.",
        status: "error",
        isClosable: true,
      });
      return;
    } else {
      itens.splice(itens.indexOf(item), 1);
      setItens(itens);
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
            {personagem.mochila.map((item: any, index: number) => (
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
                    <h1>{todosItens.find((i)=> i.nome === item.nome)?.espacos||0}</h1>
                  </div>
                  <button
                    className="hover:text-red-600 w-fit h-fit hover:bg-opacity-60 hover:tranform hover:scale-110 transition-all"
                    onClick={() => {
                      const x = todosItens.find((i) => i.nome === item.nome) || {
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
                  {itemSelecionado.nome||"Descrição"}
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

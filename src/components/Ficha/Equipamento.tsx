import { useToast } from "@chakra-ui/react";
import { Edit, Plus, X } from "lucide-react";
import { useState } from "react";

interface Props {
  personagem: any;
  setItens: any;
}

export default function Equipamento({ personagem, setItens }: Props) {
  let toast = useToast();
  const [itemSelecionado, setItemSelecionado] = useState({
    nome: "",
    desc: "",
    quantidade: 0,
    espacos: 0,
  });
  const removeItem = (item: any) => {
    let itens = personagem.itens;
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
        <div className="bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md border-black border flex flex-col w-full">
          <section className="flex flex-col">
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
            {personagem.itens.map((item: any, index: number) => (
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
                    <h1>{item.espacos}</h1>
                  </div>
                  <button
                    className="hover:text-red-600 w-fit h-fit hover:bg-opacity-60 hover:tranform hover:scale-110 transition-all"
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
          <section className="font-serif h-full px-4 py-4">
            <p className="text-left font-bold">Descrição</p>
            <div className="w-full flex gap-2">
              <div className="my-auto h-full w-full">
                <h1 className="text-center font-bold text-xl">
                  {itemSelecionado.nome}
                </h1>
                <p className="text-justify w-full h-24 border rounded-lg border-black mt-4 p-2">
                  {itemSelecionado.desc}
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
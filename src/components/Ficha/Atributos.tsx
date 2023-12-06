import Ficha from "../../classes/Construtores/Ficha";
import { RolarDado } from "../Geral/RolarDado";
import useCustomToast from "../Geral/Toasted";

interface Props {
  personagem: Ficha;
}

export default function Atributos({ personagem }: Props) {
  const { showCustomToast } = useCustomToast();
  const rolarAtributo = (e: number, nome: string) => {
    const dado = RolarDado({
      lados: 20,
      qtd: 1,
      mod: e,
    });
    showCustomToast({
      title: `Rolando...`,
      desc: `${nome} = ${e}`,
      status: "loading",
      duration: 1000,
      onCloseComplete() {
        showCustomToast({
          title: `Rolado!`,
          desc: `${nome}: ${dado.total} (${dado.dados}+${e})`,
          duration: 5000,
        });
      },
    });
  };
  return (
    <>
      <div className="flex justify-evenly desktop:w-fit w-full gap-2 mx-auto">
        {personagem.atributos.map((atributo) => (
          <button
            onClick={() => rolarAtributo(atributo.valor, atributo.atributo)}
            className="bg-gray-200 rounded-xl border border-black flex flex-col p-3 w-13 h-20 z-10 hover:transform hover:scale-105 transition-all ease-in-out hover:bg-white hover:text-red-500 text-red-900"
          >
            <h1 className="text-center mx-auto mt-[-15px] drop-shadow-2xl text-md">
              {atributo.atributo.substring(0, 3).toUpperCase()}
            </h1>
            <h1 className="text-center mx-auto text-3xl drop-shadow-2xl text-md mb-3">
              {Number(atributo.valor) >= 0 ? "+" : ""}
              {atributo.valor}
            </h1>
          </button>
        ))}
        <div className="bg-red-800 absolute z-0 mt-5 h-11 w-4/6 desktop:w-[300px]"></div>
      </div>
    </>
  );
}

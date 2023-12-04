import { Tooltip } from "@chakra-ui/react";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";
import Ficha, { PericiasFicha } from "../../classes/Construtores/Ficha";
import { Pericia } from "../../classes/Construtores/Pericia";
import useCustomToast from "../Geral/Toasted";
import { RolarDado } from "../Geral/RolarDado";

interface Props {
  personagem: Ficha;
}

export default function Pericias({ personagem }: Props) {
  const { showCustomToast } = useCustomToast();
  const rolarPericia = (e: number) => {
    const dado = RolarDado({
      lados: 20,
      qtd: 1,
      mod: e,
    });
    showCustomToast({
      title: `Rolando...`,
      desc: `1d20 = ${e}`,
      status: "loading",
      duration: 3000,
      onCloseComplete() {
        showCustomToast({
          title: `Rolado!`,
          desc: `Resultado: ${dado.total}`,
        });
      },
    });
  };
  return (
    <>
      <h1 className="text-center drop-shadow-2xl text-3xl desktop:hidden">
        Perícias
      </h1>
      <div className="bg-white bg-opacity-80 rounded-md p-4 px-8 text-center text-md border-black border">
        <h1 className="text-center text-red-900 drop-shadow-2xl text-xl hidden desktop:block">
          Perícias
        </h1>
        <div className="grid grid-cols-5 border-b border-b-red-500">
          <h1 className="text-red-900 drop-shadow-2xl text-xl text-left col-span-2">
            Nome
          </h1>
          <h1 className="text-red-500 drop-shadow-2xl text-xl text-right w-2/3 desktop:w-full mx-auto col-span-2">
            Atributo
          </h1>
          <h1 className="text-red-900 drop-shadow-2xl text-l text-right">
            Total
          </h1>
        </div>
        <div>
          {personagem.pericias.map((pericia: PericiasFicha) => {
            const treinada = pericia.treinada;
            const metadeNivel = Math.floor(personagem.nivel / 2);
            const atributo = TabelaPericias.find(
              (e) => e.nome.toLowerCase() === pericia.nome.toLowerCase()
            )?.atributo;
            const atributoNum =
              personagem.atributos.find(
                (e) => e.atributo.toLowerCase() === atributo?.toLowerCase()
              )?.valor || 0;
            return (
              <div className="grid grid-cols-5 hover:border-red-950 rounded hover:transform hover:scale-110 transition-all border border-transparent hover:bg-white hover:bg-opacity-80">
                <Tooltip
                  bgColor={"red.700"}
                  label={`${
                    TabelaPericias.find(
                      (e) => e.nome.toLowerCase() === pericia.nome.toLowerCase()
                    )?.descricao
                  }`}
                >
                  <h1 className="text-red-900 drop-shadow-2xl text-md desktop:text-sm text-left col-span-2">
                    {pericia.nome}
                  </h1>
                </Tooltip>
                <h1 className="text-red-500 drop-shadow-2xl text-md desktop:text-sm text-right w-full mx-auto col-span-2">
                  {
                    TabelaPericias.find(
                      (e) => e.nome.toLowerCase() === pericia.nome.toLowerCase()
                    )?.atributo
                  }
                </h1>
                <Tooltip
                  onClick={() =>
                    rolarPericia(atributoNum + metadeNivel + treinada)
                  }
                  bgColor={"red.700"}
                  label={`${atributo}(${atributoNum}) + metade do nivel(${metadeNivel}) ${treinada}`}
                >
                  <h1 className="text-red-900 drop-shadow-2xl text-md desktop:text-sm text-right">
                    {atributoNum + metadeNivel + treinada}
                  </h1>
                </Tooltip>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

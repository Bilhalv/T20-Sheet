import { Tooltip } from "@chakra-ui/react";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";

interface Props {
  personagem: any;
}

export default function Pericias({ personagem }: Props) {
  return (
    <>
      <div className="w-1/3 bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md border-black border">
        <h1 className="text-center text-red-900 drop-shadow-2xl text-xl">
          Perícias
        </h1>
        {TabelaPericias.map((pericia) => {
          const treinada = personagem.periciasTreinadas.includes(pericia.nome);
          return (
            <div className="flex justify-between hover:border-red-950 rounded px-2 hover:transform hover:scale-110 transition-all border border-transparent">
              <Tooltip bgColor={"red.700"} label={`${pericia.descricao}`}>
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
                }) + metade do nivel(${Math.floor(personagem.nivel / 2)})`}
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
    </>
  );
}

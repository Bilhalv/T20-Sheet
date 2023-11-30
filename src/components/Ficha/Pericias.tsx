import { Tooltip } from "@chakra-ui/react";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";

interface Props {
  personagem: any;
}

export default function Pericias({ personagem }: Props) {
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
          <h1 className="text-red-900 drop-shadow-2xl text-xl text-left col-span-2">Nome</h1>
          <h1 className="text-red-500 drop-shadow-2xl text-xl text-right w-2/3 desktop:w-full mx-auto col-span-2">Atributo</h1>
          <h1 className="text-red-900 drop-shadow-2xl text-l text-right">Total</h1>
        </div>
        <div>
          {TabelaPericias.map((pericia) => {
            const treinada = personagem.periciasTreinadas.includes(
              pericia.nome
            );
            return (
              <div className="grid grid-cols-5 hover:border-red-950 rounded hover:transform hover:scale-110 transition-all border border-transparent hover:bg-white hover:bg-opacity-80">
                <Tooltip bgColor={"red.700"} label={`${pericia.descricao}`}>
                  <h1 className="text-red-900 drop-shadow-2xl text-md text-left col-span-2">
                    {pericia.nome}
                  </h1>
                </Tooltip>
                <h1 className="text-red-500 drop-shadow-2xl text-md text-right w-full mx-auto col-span-2">
                  {pericia.atributo}
                </h1>
                <Tooltip
                  bgColor={"red.700"}
                  label={`${treinada ? 5 : 0} + ${pericia.atributo}(${
                    personagem.atributos[pericia.atributo]
                  }) + metade do nivel(${Math.floor(personagem.nivel / 2)})`}
                >
                  <h1 className="text-red-900 drop-shadow-2xl text-md text-right">
                    {(treinada ? 5 : 0) +
                      personagem.atributos[pericia.atributo] +
                      Math.floor(personagem.nivel / 2)}
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

import { tabelaDivindades } from "../../classes/Tabelas/Divindades";
import SelectList from "../Geral/SelectList";
import { useState } from "react";
import VerMais from "../Geral/VerMais";
import Confirmar from "../Geral/Confirmar";

interface DivindadesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Divindades({ setPagina, next }: DivindadesProps) {
  const mapear = (nome: string) => {
    const mapeado = tabelaDivindades.map((divindade) => {
      if (divindade.nome === nome) {
        return divindade;
      } else {
        return null;
      }
    });
    return mapeado.filter((item) => item !== null);
  };
  if (localStorage.getItem("divindade") === null) {
    localStorage.setItem("divindade", tabelaDivindades[0].nome);
  }
  const [selected, setSelected] = useState(
    localStorage.getItem("divindade") ?? tabelaDivindades[0].nome
  );

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
    localStorage.setItem("divindade", e.target.value);
  };

  const onChange = (e: any) => {
    setSelected(e.target.value);
    console.log(mapear(selected)[0]?.crencas);
  };
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha sua divindade
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] desktop:w-1/2">
          <div>
            <div className="desktop:hidden block">
              <SelectList
                tabela={tabelaDivindades}
                onChange={onChange}
                selected={selected}
                placeholder={"Escolha sua divindade"}
              />
            </div>
            <h1 className="text-lg font-bold text-center desktop:block hidden">
              {selected}
            </h1>
            <img
              src={mapear(selected)[0]?.imagens[0]}
              className="mx-auto transition-all ease-in-out"
            />
            <p className="text-center mt-3 font-serif ">
              Os devotos de {selected} {mapear(selected)[0]?.crencas}
            </p>
            <div className="flex justify-center mt-3 gap-2">
              <VerMais
                titulo={`Informações da divindade ${selected}`}
                handleSelect={handleSelect}
                selected={selected}
                pagina="Divindade"
              />
              <Confirmar onSelect={() => {}} pagina="Divindade" />
            </div>
          </div>
        </section>
        <section className="desktop:block hidden w-1/2">
          <div className="grid gap-5 grid-cols-4 place-items-center">
            {tabelaDivindades.map((divindade) => {
              return (
                <button
                  key={divindade.nome}
                  onClick={() => {
                    onChange({ target: { value: divindade.nome } });
                  }}
                  className={`${
                    selected === divindade.nome
                      ? "bg-red-950 text-red-200  "
                      : "bg-gray-200 hover:bg-gray-300"
                  } p-2 rounded-lg shadow-lx my-2 cursor-pointer w-full hover:shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out hover:scale-105 bg-opacity-90`}
                >
                  <img src={divindade.imagens[1]} className="mx-auto w-1/2" />
                  <h1 className="text-center">{divindade.nome}</h1>
                </button>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

import { tabelaDivindades } from "../../../classes/Tabelas/Divindades";
import SelectList from "../../Geral/SelectList";
import { useState } from "react";
import VerMais from "../../Geral/VerMais";

interface DivindadesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Divindades({ setPagina, next }: DivindadesProps) {
  const mapear = (nome: string) => {
    const mapeado = tabelaDivindades.map((divindade) => {
      if (divindade.nome === nome) {
        return divindade;
      }
    });
    return mapeado;
  };
  const [placeholder, setPlaceholder] = useState(
    localStorage.getItem("divindade") ?? tabelaDivindades[0].nome
  );
  if (localStorage.getItem("divindade") === null) {
    localStorage.setItem("divindade", tabelaDivindades[0].nome);
  }
  const [selected, setSelected] = useState(
    localStorage.getItem("divindade") ?? tabelaDivindades[0].nome
  );

  const handleSelect = (e: any) => {
    setSelected(e.target.value);
    localStorage.setItem("divindade", e.target.value);
    setPlaceholder(e.target.value);
  };

  const onChange = () => {};
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
            <img src={mapear(selected)[0]?.imagens[0]} className="mx-auto" />
            <p className="text-center mt-3 font-serif ">
              {mapear(selected)[0]?.crencas}
            </p>
            <div className="flex justify-center mt-3 gap-2">
              <VerMais
                titulo={`Informações da divindade ${selected}`}
                handleSelect={handleSelect}
                selected={selected}
                pagina="Divindade"
              />
              <button
                onClick={handleSelect}
                className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
              >
                Confirmar
              </button>
            </div>
          </div>
        </section>
        <section className="desktop:block hidden w-1/2">
          <div className="grid grid-cols-4 place-items-center">
            {tabelaDivindades.map((divindade) => {
              return (
                <div
                  key={divindade.nome}
                  onClick={() => {
                    setSelected(divindade.nome);
                    setPlaceholder(divindade.nome);
                  }}
                  className={`${
                    selected === divindade.nome
                      ? "bg-gray-300"
                      : "bg-gray-200 hover:bg-gray-300"
                  } p-2 rounded-lg shadow-lx my-2 cursor-pointer w-fit hover:shadow-[0px_5px_4px_0px_rgba(0,0,0,0.25)] transition-all ease-in-out hover:scale-105`}
                >
                  <img src={divindade.imagens[1]} className="mx-auto w-12" />
                  <h1 className="text-center">
                    {divindade.nome}
                  </h1>
                </div>
              );
            })}
          </div>
        </section>
      </div>
    </>
  );
}

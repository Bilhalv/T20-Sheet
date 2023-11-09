import { tabelaDivindades } from "../../../classes/Tabelas/Divindades";
import SelectList from "../../Geral/SelectList";
import { useState } from "react";

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
    mapear(localStorage.getItem("divindade"))[0]
  );

  const onChange = () => {};
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha sua divindade
      </h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
        <SelectList
          tabela={tabelaDivindades}
          onChange={onChange}
          selected={selected}
          placeholder={placeholder}
        />
      </section>
    </>
  );
}

import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { TabelaOrigens } from "../classes/TabelaOrigens";

const Origens: React.FC = () => {
  const [origem, setOrigem] = useState(TabelaOrigens[0]);

  const handleOrigemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrigem = TabelaOrigens.find((origem) => origem.nome === event.target.value);
    if (selectedOrigem) {
      setOrigem(selectedOrigem);
    }
  }

  const handleSelect = () => {
    console.log(`Origem Selecionada: ${origem.nome}`);
    localStorage.setItem("origem", origem.nome);
  };
  return (
    <>
      <h1 className="text-xl text-center mb-4">Origem</h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg h-fit">
        <section className="flex flex-col desktop:flex-row gap-2">
          <div className="desktop:w-[50%]">
            <Select
              placeholder="Escolha Sua Origem"
              onChange={handleOrigemChange}
            >
              {TabelaOrigens.map((origem) => (
                <option key={origem.nome} value={origem.nome}>
                  {origem.nome}
                </option>
              ))}
            </Select>
            <img className="mx-auto" src={origem.imagem} alt={origem.nome} />
          </div>
          <div className="desktop:w-[50%]">
            <h1 className="text-center text-2xl mb-2">{origem.nome}</h1>
            <p className="text-sm my-auto">&nbsp;&nbsp;{origem.descricao}</p>
            <ul className="mt-2">
              <li>
                <b>Itens.</b> {origem.itens.join(", ")}
              </li>
              <li>
                <b>Benefícios.</b> {origem.beneficios.pericias.join(", ")}
                (perícias) e {origem.beneficios.poderes.join(", ")} (poderes).
              </li>
            </ul>
            <h3 className="mt-2 font-bold">{origem.poder.nome}</h3>
            <p>{origem.poder.descricao}</p>
          </div>
        </section>
        <button onClick={handleSelect} className="my-2 text-red-800 bg-white hover:bg-gray-300 px-5 rounded w-full transition-all ease-in-out shadow-lg">
          Confirmar
        </button>
      </section>
    </>
  );
};

export default Origens;

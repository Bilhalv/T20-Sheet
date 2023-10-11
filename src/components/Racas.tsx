import React, { useState } from "react";
import { TabelaRacas } from "../classes/Tabelas/Racas";

interface RaceButtonProps {
  raceName: string;
  onClick: () => void;
}

const RaceButton: React.FC<RaceButtonProps> = ({ raceName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90 focus:bg-gray-600 focus:text-white"
    >
      {raceName}
    </button>
  );
};

const Racas: React.FC = () => {
  const [race, setRace] = useState(TabelaRacas[0]);

  const handleClick = (raceName: string) => {
    const selectedRace = TabelaRacas.find((race) => race.nome === raceName);
    if (selectedRace) {
      setRace(selectedRace);
    }
  };

  const handleSelect = () => {
    console.log(`Raça Selecionada: ${race.nome}`);
    localStorage.setItem("raca", race.nome);
  };

  return (
    <>
      <h1 className="text-xl text-center mb-4">Raça</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full">
          <h1 className="text-center text-2xl mb-2">{race.nome}</h1>
          <div className="flex">
            <img src={race.imagem} className="w-[50%] h-fit" alt="Personagem" />
            <p className="text-sm my-auto">{race.descricao}</p>
          </div>
          <h2 className="text-center text-xl my-2">
            {race.atributos.join(" | ")}
          </h2>
          <ul>
            {race.poderes.map((power, index) => (
              <li key={index} className="text-sm my-2">
                <i>
                  <b className="font-bold">{power.nome}</b> {power.descricao}{" "}
                </i>
              </li>
            ))}
          </ul>
          <button onClick={handleSelect} className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3">
            Confirmar
          </button>
        </section>
        <section className="grid grid-cols-3 gap-5 mx-auto h-fit transition-all ease-in-out">
          {TabelaRacas.map((raca) => (
            <RaceButton
              key={raca.nome}
              raceName={raca.nome}
              onClick={() => handleClick(raca.nome)}
            />
          ))}
        </section>
      </div>
    </>
  );
};

export default Racas;

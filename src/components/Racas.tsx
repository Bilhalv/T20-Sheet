import React, { useState } from "react";
import { TabelaRacas } from "../classes/TabelaRacas";

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

const racas = ["Humano", "Anão", "Dahllan", "Elfo", "Goblin", "Lefou", "Minotauro", "Qareen", "Golem", "Hynne", "Kliren", "Medusa", "Osteon", "Sereia/Tritão", "Sílfide", "Suraggel (Aggelus)", "Suraggel (Sulfure)", "Trog"]

const Racas: React.FC = () => {
  const [race, setRace] = useState(TabelaRacas[0].nome);
  const [raceDescription, setRaceDescription] = useState(TabelaRacas[0].descricao);
  const [racePowers, setRacePowers] = useState(TabelaRacas[0].poderes);
  const [atribute, setAtribute] = useState(TabelaRacas[0].atributos);
  const [raceImage, setRaceImage] = useState(TabelaRacas[0].imagem);

  const handleClick = (raceName: string) => {
    console.log(`Selected race: ${raceName}`);
    setRace(raceName);
    const selectedRace = TabelaRacas.find((race) => race.nome === raceName);
    if (selectedRace) {
      setRaceDescription(selectedRace.descricao);
      setAtribute(selectedRace.atributos);
      setRacePowers(selectedRace.poderes);
      setRaceImage(selectedRace.imagem);
    }
  };

  return (
    <>
      <h1 className="text-xl text-center mb-4">Raça</h1>
      <div className="flex flex-col desktop:flex-row gap-4 w-full">
        <section className="bg-gray-300 flex flex-col p-3 rounded-lg bg-opacity-80 shadow-lg h-fit desktop:w-[50%] w-full">
          <h1 className="text-center text-2xl mb-2">{race}</h1>
          <div className="flex">
            <img src={raceImage} className="w-[50%] h-fit" alt="Personagem" />
            <p className="text-sm my-auto">{raceDescription}</p>
          </div>
          <h2 className="text-center text-xl my-2">{atribute.join(" | ")}</h2>
          <ul>
            {racePowers.map((power, index) => (
              <li key={index} className="text-sm my-2">
                <i>
                  <b className="font-bold">{power.nome}</b> {power.descricao}{" "}
                </i>
              </li>
            ))}
          </ul>
          <button className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3">
            Confirmar
          </button>
        </section>
        <section className="grid grid-cols-3 gap-5 mx-auto h-fit">
          {racas.map((raca) => (
            <RaceButton raceName={raca} onClick={() => handleClick(raca)}/>
          ))}
        </section>
      </div>
    </>
  );
};

export default Racas;

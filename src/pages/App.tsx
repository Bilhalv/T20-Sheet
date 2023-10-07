import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { TabelaRacas } from "../classes/TabelaRacas";

interface RaceButtonProps {
  raceName: string;
  onClick: () => void;
}

const RaceButton: React.FC<RaceButtonProps> = ({ raceName, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-gray-300 p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-90"
    >
      {raceName}
    </button>
  );
};

const App: React.FC = () => {
  const [race, setRace] = useState("Humano");
  const [raceDescription, setRaceDescription] = useState(
    "Os humanos em Arton são a maioria e são vistos como os escolhidos dos deuses, governando o mundo. Eles são diversos, adaptáveis e estão presentes em todo o continente, desde os vales férteis do Reinado até o árido Deserto da Perdição. São conhecidos por sua ambição e espírito explorador."
  );
  const [racePowers, setRacePowers] = useState([
    {
      nome: "Versátil",
      descricao:
        " Você se torna treinado em duas perícias a sua escolha (não precisam ser da sua classe). Você pode trocar uma dessas perícias por um poder geral a sua escolha.",
      fonte: "Raça",
      pre_requisito: "",
    },
  ]);
  const [atribute, setAtribute] = useState(["+1 em três atributos diferentes"]);
  const [raceImage, setRaceImage] = useState("./img/personagem.png");

  const handleClick = (raceName: string) => {
    console.log(`Selected race: ${raceName}`);
    setRace(raceName);
    for (let i = 0; i < TabelaRacas.length; i++) {
      const element = TabelaRacas[i];
      if (element.nome === raceName) {
        setRaceDescription(element.descricao);
        setRacePowers(element.poderes);
        setAtribute(element.atributos);
        setRaceImage(element.imagem);
      }
    }
  };

  return (
    <>
      <Navbar titulo={"Inicio"} />
      <body className="bg-bgT20 cover overflow-y-scroll h-[94vh]">
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 border flex shadow-lg gap-4 mobile:flex-wrap">
          <section className="bg-gray-300 flex-col p-3 rounded-lg  bg-opacity-80 shadow-lg h-fit desktop:w-[50%]">
            <h1 className="text-center text-2xl mb-2">{race}</h1>
            <div className="flex">
              <img src={raceImage} className="w-[50%] h-fit" alt="Personagem" />
              <p className="text-sm my-auto">{raceDescription}</p>
            </div>
            <h2 className="text-center text-xl my-2">{atribute.join(" | ")}</h2>
            <ul>
              {racePowers.map((power) => (
                <li className="text-sm">
                  <i>
                    <b className="font-bold">{power.nome}</b> {power.descricao}{" "}
                    <i className="text-gray-700">{power.pre_requisito}</i>
                  </i>
                </li>
              ))}
            </ul>
            <button className="my-2 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3">
              Confirmar
            </button>
          </section>
          <section className="grid-cols-3 grid gap-5 mx-auto h-fit">
            <RaceButton
              raceName="Humano"
              onClick={() => handleClick("Humano")}
            />
            <RaceButton raceName="Anão" onClick={() => handleClick("Anão")} />
            <RaceButton
              raceName="Dahllan"
              onClick={() => handleClick("Dahllan")}
            />
            <RaceButton raceName="Elfo" onClick={() => handleClick("Elfo")} />
            <RaceButton
              raceName="Goblin"
              onClick={() => handleClick("Goblin")}
            />
            <RaceButton raceName="Lefou" onClick={() => handleClick("Lefou")} />
            <RaceButton
              raceName="Minotauro"
              onClick={() => handleClick("Minotauro")}
            />
            <RaceButton
              raceName="Qareen"
              onClick={() => handleClick("Qareen")}
            />
            <RaceButton raceName="Golem" onClick={() => handleClick("Golem")} />
            <RaceButton raceName="Hynne" onClick={() => handleClick("Hynne")} />
            <RaceButton
              raceName="Kliren"
              onClick={() => handleClick("Kliren")}
            />
            <RaceButton
              raceName="Medusa"
              onClick={() => handleClick("Medusa")}
            />
            <RaceButton
              raceName="Osteon"
              onClick={() => handleClick("Osteon")}
            />
            <RaceButton
              raceName="Sereia/Tritão"
              onClick={() => handleClick("Sereia/Tritão")}
            />
            <RaceButton
              raceName="Sílfide"
              onClick={() => handleClick("Sílfide")}
            />
            <RaceButton
              raceName="Suraggel (Aggelus)"
              onClick={() => handleClick("Suraggel (Aggelus)")}
            />
            <RaceButton
              raceName="Suraggel (Sulfure)"
              onClick={() => handleClick("Suraggel (Sulfure)")}
            />
            <RaceButton raceName="Trog" onClick={() => handleClick("Trog")} />
          </section>
        </article>
      </body>
    </>
  );
};

export default App;

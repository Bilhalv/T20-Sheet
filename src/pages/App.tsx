import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Racas from "../components/Racas";
import Inicio from "../components/Inicio";
import Classes from "../components/Classes";
import Origens from "../components/Origens";
import Atributos from "../components/Atributos";

const App: React.FC = () => {
  const paginas = ["Inicio", "Origens", "Racas", "Classes", "Atributos"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full font-tormenta">
        <Navbar titulo={"Inicio"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          {pagina === "Inicio" && <Inicio next="Origens" setPagina={setPagina} />}
          {pagina === "Origens" && <Origens next="Racas" setPagina={setPagina}/>}
          {pagina === "Racas" && <Racas next="Classes" setPagina={setPagina}/>}
          {pagina === "Classes" && <Classes next="Atributos" setPagina={setPagina}/>}
          {pagina === "Atributos" && <Atributos next="Atributos" setPagina={setPagina}/>}
          <div className="flex justify-around gap-5 mt-5 transition-all ease-in-out">
            {paginas.map((pagina) => (
              <button
                key={pagina}
                onClick={() => {
                  localStorage.setItem("pagina", pagina);
                  setPagina(pagina);
                }}
                className="text-white bg-red-800 hover:bg-gray-300 px-2 rounded-full transition-all ease-in-out shadow-lg font-[a]"
              >
                {paginas.indexOf(pagina)+1}
              </button>
            ))}
          </div>
        </article>
      </body>
    </>
  );
};

export default App;


import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";

const App: React.FC = () => {
  const paginas = ["Divindades", "Poderes", "Magias", "Equipamentos", "Alt"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full font-tormenta">
        <Navbar back={"/criarpt1"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          {pagina === "Divindades" && <h1>Divindades</h1>}
        </article>
      </body>
    </>
  );
};

export default App;

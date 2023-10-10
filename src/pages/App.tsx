import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Racas from "../components/Racas";
import Inicio from "../components/Inicio";
import Classes from "../components/Classes";
import Origens from "../components/Origens";

const App: React.FC = () => {
  const [curentPage, setCurentPage] = useState("Inicio");

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full">
        <Navbar titulo={"Inicio"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          {curentPage === "Inicio" && <Inicio />}
          {curentPage === "Origens" && <Origens />}
          {curentPage === "Racas" && <Racas />}
          {curentPage === "Classes" && <Classes />}
          <div className="flex justify-around gap-5 mt-5 transition-all ease-in-out">
            <button
              className="bg-red-950 text-white hover:text-black hover:bg-red-800 focus:bg-red-500 px-2 rounded-full w-fit transition-all ease-in-out shadow-lg"
              onClick={() => setCurentPage("Inicio")}
            >
              0
            </button>
            <button
              className="bg-red-950 text-white hover:text-black hover:bg-red-800   focus:bg-red-500 px-2 rounded-full w-fit transition-all ease-in-out shadow-lg"
              onClick={() => setCurentPage("Origens")}
            >
              1
            </button>
            <button
              className="bg-red-950 text-white hover:text-black hover:bg-red-800   focus:bg-red-500 px-2 rounded-full w-fit transition-all ease-in-out shadow-lg"
              onClick={() => setCurentPage("Racas")}
            >
              2
            </button>
            <button
              className="bg-red-950 text-white hover:text-black hover:bg-red-800   focus:bg-red-500 px-2 rounded-full w-fit transition-all ease-in-out shadow-lg"
              onClick={() => setCurentPage("Classes")}
            >
              3
            </button>
          </div>
        </article>
      </body>
    </>
  );
};

export default App;

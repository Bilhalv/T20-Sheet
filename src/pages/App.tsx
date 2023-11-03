import React, { useEffect, useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Racas from "../components/Racas/Racas";
import Inicio from "../components/Inicio/Inicio";
import Classes from "../components/Classes/Classes";
import Origens from "../components/Origens/Origens";
import Atributos from "../components/Atributos/Atributos";
import { Button, IconButton } from "@chakra-ui/react";
import { Info } from "lucide-react";
import InfoModal from "../components/Geral/InfoModal";

const App: React.FC = () => {
  const paginas = ["Inicio", "Origens", "Racas", "Classes", "Atributos"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full font-tormenta">
        <Navbar titulo={"Inicio"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <div className="flex flex-row-reverse mb-[-40px]">
            <InfoModal
              pagina={pagina}
            />
          </div>
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          {pagina === "Inicio" && (
            <Inicio next="Origens" setPagina={setPagina} />
          )}
          {pagina === "Origens" && (
            <Origens next="Racas" setPagina={setPagina} />
          )}
          {pagina === "Racas" && <Racas next="Classes" setPagina={setPagina} />}
          {pagina === "Classes" && (
            <Classes next="Atributos" setPagina={setPagina} />
          )}
          {pagina === "Atributos" && (
            <Atributos next="Atributos" setPagina={setPagina} />
          )}
          <div className="flex justify-evenly mt-5 transition-all ease-in-out">
            {paginas.map((pagina) => (
              <Button
                key={pagina}
                isActive={pagina === localStorage.getItem("pagina")}
                bg={"darkred"}
                color={"white"}
                _hover={{ bg: "red.600" }}
                width="auto"
                size={"sm"}
                borderRadius={"full"}
                boxShadow="lg"
                _active={{ bg: "red.600", color: "darkred" }}
                onClick={() => {
                  localStorage.setItem("pagina", pagina);
                  setPagina(pagina);
                }}
              >
                {paginas.indexOf(pagina) + 1}
              </Button>
            ))}
          </div>
        </article>
      </body>
    </>
  );
};

export default App;

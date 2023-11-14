import React, { useEffect, useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Racas from "../components/pagina 1/Racas";
import Inicio from "../components/pagina 1/Inicio";
import Classes from "../components/pagina 1/Classes";
import Origens from "../components/pagina 1/Origens";
import Atributos from "../components/pagina 1/Atributos";
import { Button } from "@chakra-ui/react";
import InfoModal from "../components/Geral/InfoModal";
import FichaModal from "../components/Geral/FichaModal";

const App: React.FC = () => {
  const paginas = ["Inicio", "Origens", "Racas", "Classes", "Atributos"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);
  useEffect(() => {
    if (!paginas.includes(pag??paginas[0])) {
      handleChange(paginas[0]);
    }
  }, [pag, paginas, setPagina]);

  const handleChange = (e: string) => {
    localStorage.setItem("pagina", e);
    setPagina(e);
  };

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full font-tormenta">
        <Navbar back={"/"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="flex flex-row-reverse mb-[-40px]">
            <InfoModal pagina={pagina} />
            <FichaModal pagina={1} setPagina={setPagina}/>
          </div>
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
            <Atributos next="Divindades" setPagina={setPagina} />
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

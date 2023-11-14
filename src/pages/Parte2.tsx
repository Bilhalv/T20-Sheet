import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Divindades from "../components/pagina 2/Divindades";
import { Button } from "@chakra-ui/react";
import Poderes from "../components/pagina 2/Poderes";
import Magias from "../components/pagina 2/Magias";
import Equipamentos from "../components/pagina 2/Equipamentos";
import Alt from "../components/pagina 2/Alt";
import InfoModal from "../components/Geral/InfoModal";
import FichaModal from "../components/Geral/FichaModal";

const App: React.FC = () => {
  const paginas = ["Divindades", "Poderes", "Magias", "Equipamentos", "Alt"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);

  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen pb-2 w-full font-tormenta">
        <Navbar back={"/criarpt1"} />
        <article className="bg-gray-50 bg-opacity-30 w-[75%] mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <div className="flex flex-row-reverse mb-[-40px]">
            <InfoModal pagina={pagina} />
            <FichaModal pagina={2} setPagina={setPagina} />
          </div>
          {pagina === "Divindades" && (
            <Divindades setPagina={setPagina} next="Poderes" />
          )}
          {pagina === "Poderes" && (
            <Poderes setPagina={setPagina} next="Magias" />
          )}
          {pagina === "Magias" && (
            <Magias setPagina={setPagina} next="Equipamentos" />
          )}
          {pagina === "Equipamentos" && (
            <Equipamentos setPagina={setPagina} next="Alt" />
          )}
          {pagina === "Alt" && <Alt setPagina={setPagina} next="Confirmar" />}

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

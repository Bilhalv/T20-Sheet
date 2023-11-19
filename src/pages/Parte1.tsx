import React, { useEffect, useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Racas from "../components/pagina 1/Racas";
import Inicio from "../components/pagina 1/Inicio";
import Classes from "../components/pagina 1/Classes";
import Origens from "../components/pagina 1/Origens";
import Atributos from "../components/pagina 1/Atributos";
import {
  Box,
  Button,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
} from "@chakra-ui/react";
import InfoModal from "../components/Geral/InfoModal";
import FichaModal from "../components/Geral/FichaModal";

const App: React.FC = () => {
  const paginas = ["Inicio", "Origens", "Racas", "Classes", "Atributos"];
  const [pag, setPag] = useState(localStorage.getItem("pagina") ?? paginas[0]);
  const [pagina, setPagina] = useState(pag);
  useEffect(() => {
    if (!paginas.includes(pag)) {
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
            <FichaModal pagina={1} setPagina={setPagina} />
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
          <Stepper
            colorScheme="red"
            index={paginas.indexOf(pagina)}
            className="mt-3"
          >
            {paginas.map((pagina, index) => (
              <>
                <Step key={index}>
                  <StepIndicator
                    className="hover:cursor-pointer hover:transform hover:scale-110 transition-all ease-in-out"
                    onClick={() => handleChange(pagina)}
                  >
                    <StepStatus
                      complete={<StepIcon color="white" />}
                      incomplete={<StepNumber />}
                      active={<StepNumber className="text-white" />}
                    />
                  </StepIndicator>
                  <Box flexShrink="0">
                    <StepTitle
                      className={`
                        hidden desktop:block
                        ${
                          index <=
                          paginas.indexOf(localStorage.getItem("pagina") || "")
                            ? "text-gray-200"
                            : ""
                        }
                          `}
                    >
                      {pagina}
                    </StepTitle>
                    <StepDescription></StepDescription>
                  </Box>
                  <StepSeparator />
                </Step>
              </>
            ))}
          </Stepper>
        </article>
      </body>
    </>
  );
};

export default App;

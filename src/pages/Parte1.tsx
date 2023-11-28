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

  const handleChange = (e: string) => {
    localStorage.setItem("pagina", e);
    setPagina(e);
  };

  return (
    <>
      <Navbar back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <div className="flex flex-col mb-[-80px] items-end ">
            <InfoModal pagina={pagina} />
            <FichaModal
              pagina={1}
              handleChange={handleChange}
              paginaAtual={pagina}
            />
          </div>
          {pagina === "Inicio" || !paginas.includes(pagina) ? (
            <Inicio next="Origens" handleChange={handleChange} />
          ) : null}
          {pagina === "Origens" && (
            <Origens next="Racas" handleChange={handleChange} />
          )}
          {pagina === "Racas" && (
            <Racas next="Classes" handleChange={handleChange} />
          )}
          {pagina === "Classes" && (
            <Classes next="Atributos" handleChange={handleChange} />
          )}
          {pagina === "Atributos" && (
            <Atributos next="Divindades" handleChange={handleChange} />
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
                    onClick={() => {
                      if (
                        index <
                        paginas.indexOf(localStorage.getItem("pagina") || "")
                      ) {
                        handleChange(pagina);
                      }
                    }}
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

import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Divindades from "../components/pagina 2/Divindades";
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
import Poderes from "../components/pagina 2/Poderes";
import Magias from "../components/pagina 2/Magias";
import Equipamentos from "../components/pagina 2/Equipamentos";
import Alt from "../components/pagina 2/Alt";
import InfoModal from "../components/Geral/InfoModal";
import FichaModal from "../components/Geral/FichaModal";

const App: React.FC = () => {
  const paginas = ["Divindades", "Poderes","Equipamentos", "Magias", "Alt"];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);
  const handleChange = (e: string) => {
    localStorage.setItem("pagina", e);
    setPagina(e);
  };

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

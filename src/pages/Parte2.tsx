import React, { useState } from "react";
import Navbar from "../components/Geral/Navbar";
import Divindades from "../components/pagina 2/Divindades";
import {
  Box,
  Step,
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
  const paginas = [
    "Divindades",
    "Equipamentos",
    "Magias",
    "Especificações",
    "Poderes",
  ];
  let pag = localStorage.getItem("pagina");
  const [pagina, setPagina] = useState(pag ?? paginas[0]);
  const handleChange = (e: string) => {
    localStorage.setItem("pagina", e);
    setPagina(e);
  };

  return (
    <>
      <Navbar back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <div className=" mb-[-80px] w-full">
            <div className="flex flex-col ml-auto rounded-full p-1 w-fit">
              <InfoModal pagina={pagina} />
              <FichaModal paginaAtual={pagina} pagina={2} handleChange={handleChange} />
            </div>
          </div>
          {pagina === paginas[0] && (
            <Divindades handleChange={handleChange} next={paginas[1]} />
          )}
          {pagina === paginas[1] && (
            <Equipamentos handleChange={handleChange} next={paginas[2]} />
          )}
          {pagina === paginas[2] && (
            <Magias handleChange={handleChange} next={paginas[3]} />
          )}
          {pagina === paginas[3] && (
            <Alt handleChange={handleChange} next={paginas[4]} />
          )}
          {pagina === paginas[4] && (
            <Poderes handleChange={handleChange} next={paginas[5]} />
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

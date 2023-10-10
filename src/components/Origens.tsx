import { Select } from "@chakra-ui/react";
import React, { useState } from "react";
import { TabelaOrigens } from "../classes/TabelaOrigens";

const Origens: React.FC = () => {
  const [origem, setOrigem] = useState(TabelaOrigens[0].nome);
  const [origemDesc, setOrigemDesc] = useState(TabelaOrigens[0].descricao
  );
  const [origemItens, setOrigemItens] = useState(TabelaOrigens[0].itens);
  const [origemBeneficios, setOrigemBeneficios] = useState(TabelaOrigens[0].beneficios);
  const [origemImage, setOrigemImage] = useState(TabelaOrigens[0].imagem);
  const [origemPoder, setOrigemPoder] = useState(TabelaOrigens[0].poder);
  console.log(origemPoder);
  
  return (
    <>
      <h1 className="text-xl text-center mb-4">Origem</h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg h-fit">
        <section className="flex flex-col desktop:flex-row gap-2">
          <div className="desktop:w-[50%]">
            <Select placeholder="Escolha Sua Origem">
              {TabelaOrigens.map((origem) => (
                <option
                  key={origem.nome}
                  value={origem.nome}
                  onClick={() => {
                    
                    setOrigem(origem.nome);
                    console.log("Selected Origin: ",origem.nome);
                    setOrigemDesc(origem.descricao);
                    setOrigemItens(origem.itens);
                    setOrigemBeneficios(origem.beneficios);
                    setOrigemImage(origem.imagem);
                    setOrigemPoder(origem.poder);
                  }}
                >
                  {origem.nome}
                </option>
              ))}
            </Select>
            <img src={origemImage} />
          </div>
          <div className="desktop:w-[50%]">
            <p className="text-sm my-auto">&nbsp;&nbsp;{origemDesc}</p>
            <ul className="mt-2">
              <li>
                <b>Itens.</b> {origemItens.join(", ")}
              </li>
              <li>
                <b>Benefícios.</b> {origemBeneficios.pericias.join(", ")};
                (perícias) e {origemBeneficios.poderes.join(", ")} (poderes).
              </li>
            </ul>
            <h3 className="mt-2 font-bold">{origemPoder.nome}</h3>
            <p>{origemPoder.descricao}</p>
          </div>
        </section>
        <button className="my-2 text-red-800 bg-white hover:bg-gray-300 px-5 rounded w-full transition-all ease-in-out shadow-lg">
          Confirmar
        </button>
      </section>
    </>
  );
};

export default Origens;

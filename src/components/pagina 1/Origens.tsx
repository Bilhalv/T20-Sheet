import React, { useState } from "react";
import { TabelaOrigens } from "../../classes/Tabelas/Origens";
import VerMais from "../Geral/VerMais";
import SelectList from "../Geral/SelectList";
import Botoes from "../Geral/Botoes";
import useCustomToast from "../Geral/Toasted";
import Confirmar from "../Geral/Confirmar";

interface OrigensProps {
  handleChange: (pagina: string) => void;
  next: string;
}

const Origens: React.FC<OrigensProps> = ({ handleChange, next }) => {
  const selectedOrigem = TabelaOrigens.find(
    (origem) => origem.nome === localStorage.getItem("origem")
  );
  const [origem, setOrigem] = useState(selectedOrigem ?? TabelaOrigens[0]);
  const [origemselecionada, setOrigemselecionada] = useState(
    selectedOrigem ?? TabelaOrigens[0]
  );
  let descricao2 = origem.descricao.split(".");
  let descricao1 = descricao2.shift() + ".";

  const handleOrigemChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOrigem = TabelaOrigens.find(
      (origem) => origem.nome === event.target.value
    );
    if (selectedOrigem) {
      setOrigem(selectedOrigem);
      setOrigemselecionada(selectedOrigem);
      descricao2 = selectedOrigem.descricao.split(".");
      descricao1 = descricao2.shift() + ".";
    }
  };
  const { showCustomToast } = useCustomToast();

  const handleSelect = () => {
      localStorage.setItem("pagina", next);
      localStorage.setItem("origem", origem.nome);
      showCustomToast({
        title: "Origem escolhida com sucesso!",
        desc: `Você escolheu a origem ${origem.nome}`,
      });
      handleChange(next);
  };
  return (
    <>
      <h1 className="text-center text-3xl font-bold text-white drop-shadow-[0px_5px_rgba(7,7,7,7)] mb-14">
        Escolha sua Origem
      </h1>
      <main className="flex gap-5">
        <section className="bg-gray-300 laptop:w-1/2 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] h-fit">
          <section className="flex flex-col gap-2">
            <div className="laptop:hidden">
              <SelectList
                onChange={handleOrigemChange}
                tabela={TabelaOrigens}
                selected={origemselecionada.nome}
                placeholder="Escolha sua origem"
              />
            </div>
            <div className="text-center">
              <h1 className="text-2xl">{origem.nome}</h1>
              <div className="flex flex-col desktop:flex-row items-center">
                <img
                  className="mx-auto w-1/4 laptop:w-1/4 desktop:mx-0 mb-3"
                  src={origem.imagem}
                  alt={origem.nome}
                  title={origem.nome}
                />
                <div className="desktop:ml-4 w-full laptop:w-5/6">
                  <p className="text-sm text-justify font-serif">
                    &nbsp;&nbsp;{descricao1}
                  </p>
                  <p className="text-sm text-justify font-serif laptop:hidden">
                    &nbsp;&nbsp;{descricao2.join(".")}{" "}
                  </p>
                </div>
              </div>
              <p className="text-sm text-justify font-serif laptop:block hidden">
                &nbsp;&nbsp;{descricao2.join(".")}{" "}
              </p>
            </div>
          </section>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <VerMais
              titulo={`Informações da origem ${origemselecionada.nome}`}
              handleSelect={handleSelect}
              selected={origemselecionada.nome}
              pagina={"Origem"}
            />
            <Confirmar onSelect={handleSelect} pagina="Origem" />
          </div>
        </section>
        <section className="hidden laptop:block p-3">
          <section className="order-2 grid-cols-5 gap-5 mx-auto h-fit transition-all ease-in-out hidden desktop:grid">
            <Botoes
              onChange={handleOrigemChange}
              tabela={TabelaOrigens}
              selected={origemselecionada.nome}
            />
          </section>
        </section>
      </main>
    </>
  );
};

export default Origens;

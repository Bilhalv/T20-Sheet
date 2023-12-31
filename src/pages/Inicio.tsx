import React from "react";
import Navbar from "../components/Geral/Navbar";
import { UserPlus, Plus } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const Inicio: React.FC = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <article className="flex-col flex justify-center mx-auto rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 w-5/6 px-5 desktop:px-12">
            <h1 className="text-red-800 text-xl desktop:text-4xl text-center drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
              Bem vindo ao criador de personagens para o RPG Tormenta20
            </h1>
            <p className="text-center desktop:text-lg">
              Esta ferramenta foi criada com o intuito de ajudar jogadores na
              criação do seus personagens, escolhendo a sua raça, classe,
              origem, divindade, distribuindo seus atributos e escolhendo suas
              pericias e os auxiliando nas rolagens de dados.
            </p>
            <div className="flex flex-col w-full justify-center gap-5 desktop:flex-row">
              <button
                onClick={() => {
                  navigate("/criarpt1");
                }}
                className="mx-auto desktop:mx-0 bg-gray-50 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex flex-col desktop:flex-row items-center desktop:text-base text-sm gap-1"
              >
                <Plus /> Novo Personagem
              </button>
              <button
                disabled={
                  localStorage.getItem("fichas") === null ? true : false
                }
                onClick={() => {
                  navigate("/personagens");
                }}
                className="mx-auto desktop:mx-0 bg-gray-50 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex flex-col desktop:flex-row items-center desktop:text-base text-sm gap-1 disabled:cursor-not-allowed disabled:opacity-30"
              >
                <UserPlus />
                Meus Personagens
              </button>
            </div>
          </article>
        </article>
      </body>
    </>
  );
};

export default Inicio;

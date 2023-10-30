import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { UserPlus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Inicio: React.FC = () => {
  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen w-full font-tormenta">
        <Navbar titulo={"Inicio"} />
        <article className="bg-gray-50 bg-opacity-30 w-3/4 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          <article className="flex-col flex justify-center mx-auto rounded-lg py-5 mt-5 gap-5 transition-all ease-in-out bg-white bg-opacity-50 w-5/6 px-12">
            <h1 className="text-red-800 text-2xl desktop:text-4xl text-center drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
              Bem vindo ao criador de personagens para o RPG Tormenta20
            </h1>
            <p className="text-center desktop:text-lg">
              Esta ferramenta foi criada com o intuito de ajudar jogadores na
              criação do seus personagens, escolhendo a sua raça, classe,
              origem, divindade, distribuindo seus atributos e escolhendo suas
              pericias e os auxiliando nas rolagens de dados.
            </p>
            <div className="flex flex-col mx-auto gap-5 desktop:flex-row">
              <Link to="/criar">
                <button className="mx-auto desktop:mx-0 bg-gray-50 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex gap-1">
                  <Plus /> Novo Personagem
                </button>
              </Link>
              <button className="bg-gray-50 opacity-20 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex gap-1 mx-auto desktop:mx-0">
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

import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { UserPlus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

const Inicio: React.FC = () => {
  return (
    <>
      <body className="bg-bgT20 bg-cover bg-bottom min-h-screen w-full">
      <Navbar titulo={"Inicio"} />
        <article className="bg-gray-50 bg-opacity-30 w-3/4 mx-auto py-8 px-4 rounded-lg border-gray-500 shadow-lg mt-5">
          <h1 className="text-3xl text-center text-red-800 drop-shadow-[_2px_2px_rgba(0,0,0,0.25)]">
            T20 CHARACTER CREATOR
          </h1>
          <article className="flex-col flex justify-center mt-5 gap-5 transition-all ease-in-out desktop:flex-row">
            <Link to="/criar">
              <button
                className="mx-auto desktop:mx-0 bg-gray-50 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex gap-1"
              >
                <Plus /> Novo Personagem
              </button>
            </Link>
            <button className="bg-gray-50 opacity-20 bg-opacity-50 p-5 text-red-950 font-bold rounded-lg hover:bg-opacity-70 transition-all ease-in-out flex gap-1 mx-auto desktop:mx-0">
              <UserPlus />
              Meus Personagens
            </button>
          </article>
        </article>
      </body>
    </>
  );
};

export default Inicio;
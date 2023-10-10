import React, { useState } from "react";

export default function Inicio() {
  const [nome, setNome] = useState("");
  const [lvl, setLvl] = useState(0);

  function HandleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nome, lvl);
    localStorage.setItem("nome", nome);
    localStorage.setItem("lvl", lvl.toString());
  }

  return (
    <>
      <h1 className="text-xl text-center mb-4">Escolha de Nome e Nivel</h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg flex flex-col gap-2">
        <form onSubmit={HandleClick}>
          <div className="flex justify-between desktop:flex-row flex-col">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nome:
            </h1>
            <input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300 w-full desktop:w-[25%] transition-all ease-in-out"
              type="text"
            />
          </div>
          <div className="flex justify-between desktop:flex-row flex-col">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nivel (max 5):
            </h1>
            <input
              value={lvl}
              onChange={(event) => setLvl(parseInt(event.target.value))}
              className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300 w-full desktop:w-[25%] transition-all ease-in-out"
              type="number"
              max={5}
              min={1}
            />
          </div>
          <button
            type="submit"
            className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3"
          >
            Confirmar
          </button>
        </form>
      </section>
    </>
  );
}

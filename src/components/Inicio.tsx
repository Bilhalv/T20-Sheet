import React from "react";

export default function Inicio() {
  return (
    <>
      <h1 className="text-xl text-center mb-4">Escolha de Nome e Nivel</h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg flex flex-col gap-2">
        <div className="flex justify-between desktop:flex-row flex-col">
          <h1 className="text-3xl text-center text-black">Escolha seu nome:</h1>
          <input
            className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300"
            type="text"
          />
        </div>
        <div className="flex justify-between desktop:flex-row flex-col">
          <h1 className="text-3xl text-center text-black">
            Escolha seu nivel (max 5):
          </h1>
          <input
            className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300"
            type="number"
          />
        </div>
        <button className="text-lg bg-[#09000d] text-white px-2 rounded-lg transition-all ease-in-out hover:bg-[#01000d]">
          Confirmar
        </button>
      </section>
    </>
  );
}

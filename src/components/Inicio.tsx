import React from "react";

export default function Inicio() {
  return (
    <>
      <div className="flex flex-col gap-2">
        <div className="flex justify-between">
          <h1 className="text-3xl text-center text-black">
            Escolha seu nome:
          </h1>
          <input className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300" type="text" />
        </div>
        <div className="flex justify-between">
          <h1 className="text-3xl text-center text-black">
            Escolha seu nivel (max 5):
          </h1>
          <input className="text-center text-red-800 rounded-lg focus:bg-slate-300 hover:bg-gray-300" type="number" />
        </div>
        <button className="my-2 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3">
          Confirmar
        </button>
      </div>
    </>
  );
}

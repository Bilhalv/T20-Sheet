import React from "react";
import Navbar from "../components/Navbar";

function App() {
  return (
    <>
      <Navbar titulo={"Inicio"} />
      <body className="bg-bgT20 w-full cover fixed">
        <article className="bg-gray-50 opacity-50 w-[75%] mx-auto mt-6 p-4 rounded-lg border-gray-500 border flex">
          <section className="bg-gray-400 flex-col p-3 w-[45%] rounded-lg">
            <h1 className="text-center text-2xl">Raça</h1>
            <div className="flex">
              <img src="./img/personagem.png" className="w-[50%]" />
              <p>Descrição da raça.</p>
            </div>
            <ul>
              <li>poder1: blablabla</li>
              <li>poder1: blablabla</li>
              <li>poder1: blablabla</li>
              <li>poder1: blablabla</li>
            </ul>
            <button className="text-red-900 my-2 bg-white hover:bg-gray-200 px-2 rounded w-full">
              Confirmar
            </button>
          </section>
          <section className="grid-cols-3 grid gap-5 mx-auto">
            <button className="bg-gray-300 p-2 rounded">Humano</button>
            <button className="bg-gray-300 p-2 rounded">Goblin</button>
            <button className="bg-gray-300 p-2 rounded">Golem</button>
            <button className="bg-gray-300 p-2 rounded">Anão</button>
            <button className="bg-gray-300 p-2 rounded">Lefou</button>
            <button className="bg-gray-300 p-2 rounded">Hynne</button>
            <button className="bg-gray-300 p-2 rounded">Dahllan</button>
            <button className="bg-gray-300 p-2 rounded">Minotauro</button>
            <button className="bg-gray-300 p-2 rounded">Kliren</button>
            <button className="bg-gray-300 p-2 rounded">Elfo</button>
            <button className="bg-gray-300 p-2 rounded">Qareen</button>
            <button className="bg-gray-300 p-2 rounded">Medusa</button>
            <button className="bg-gray-300 p-2 rounded">Osteon</button>
            <button className="bg-gray-300 p-2 rounded">Sereia/Tritão</button>
            <button className="bg-gray-300 p-2 rounded">Silfide</button>
            <button className="bg-gray-300 p-2 rounded">Suraggel (Aggelus)</button>
            <button className="bg-gray-300 p-2 rounded">Suraggel (Sulfure)</button>
            <button className="bg-gray-300 p-2 rounded">Trog</button>
          </section>
        </article>
      </body>
    </>
  );
}

export default App;

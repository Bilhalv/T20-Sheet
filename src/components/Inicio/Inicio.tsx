import { Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
interface InicioProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Inicio({ setPagina, next }: InicioProps) {
  const [nome, setNome] = useState("");
  const [lvl, setLvl] = useState(0);

  function HandleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log(nome, lvl);
    localStorage.setItem("nome", nome);
    localStorage.setItem("lvl", lvl.toString());
    localStorage.setItem("pagina", next);
    setPagina(next);
  }

  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha de Nome e Nivel
      </h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg flex flex-col gap-2">
        <form onSubmit={HandleClick}>
          <div className="flex justify-between flex-col desktop:w-1/2 mx-auto">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nome:
            </h1>
            <Input
              value={nome}
              onChange={(event) => setNome(event.target.value)}
              placeholder={localStorage.getItem("nome") ?? "Insira seu nome"}
              className="text-center text-red-800 rounded-lg w-full transition-all ease-in-out"
              type="text"
              defaultValue={localStorage.getItem("nome") ?? ""}
            />
          </div>
          <div className="flex desktop:mt-2 justify-between flex-col desktop:w-1/2 mx-auto">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nivel:
            </h1>
            <Select
              value={lvl}
              onChange={(event) => setLvl(parseInt(event.target.value))}
              className="text-center text-red-800 rounded-lg w-full transition-all ease-in-out"
              placeholder={
                localStorage.getItem("lvl")?.toString() ?? "Escolha seu nivel"
              }
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <option value={num} key={num}>
                  {num}
                </option>
              ))}
            </Select>
          </div>
          <div className="desktop:w-1/2 mx-auto">
            <button
              type="submit"
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3"
            >
              Confirmar
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
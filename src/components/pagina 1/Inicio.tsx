import { Button, Input, Select } from "@chakra-ui/react";
import React, { useState } from "react";
import useCustomToast from "../Geral/Toasted";
import Confirmar from "../Geral/Confirmar";
import { faker } from "@faker-js/faker";
interface InicioProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Inicio({ handleChange, next }: InicioProps) {
  const { showCustomToast } = useCustomToast();
  const [nome, setNome] = useState(localStorage.getItem("nome") || "");
  const [lvl, setLvl] = useState(Number(localStorage.getItem("lvl")) || 0);

  function HandleClick(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (nome === "" && lvl === 0) {
      showCustomToast({
        title: "Erro!",
        desc: "Escolha seu nome e nivel!",
        status: "error",
      });
      return;
    }
    if (nome === "") {
      showCustomToast({
        title: "Erro!",
        desc: "Escolha seu nome!",
        status: "error",
      });
      return;
    }
    if (lvl === 0) {
      showCustomToast({
        title: "Erro!",
        desc: "Escolha seu nivel!",
        status: "error",
      });
      return;
    }
    console.log(nome, lvl);
    localStorage.setItem("nome", nome);
    localStorage.setItem("lvl", lvl.toString());
    showCustomToast({
      title: "Nome e nivel salvos!",
      desc: `Nome: ${nome} | Nivel: ${lvl}`,
      status: "success",
    });
    localStorage.setItem("pagina", next);
    handleChange(next);
  }

  function HandleRandomName() {
    const nomeRandom = faker.person.firstName();
    setNome(nomeRandom);
  }

  return (
    <>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
        <form onSubmit={HandleClick}>
          <div className="flex justify-between flex-col desktop:w-1/2 mx-auto mb-2 mt-10">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nome:
            </h1>
            <Input
              value={nome}
              maxLength={30}
              onChange={(event) => setNome(event.target.value)}
              placeholder={localStorage.getItem("nome") ?? "Insira seu nome"}
              className="text-center text-red-800 rounded-lg w-full transition-all ease-in-out font-serif"
              type="text"
              defaultValue={localStorage.getItem("nome") ?? ""}
            />
            <Button
              textColor="red.600"
              borderColor={"red.600"}
              variant="outline"
              size="xs"
              _hover={{ bgColor: "red.600", textColor: "white" }}
              className="hover:cursor-pointer duration-300 w-fit select-none mt-1"
              onClick={HandleRandomName}
            >
              Gerar nome aleatorio
            </Button>
          </div>
          <div className="flex desktop:mt-2 justify-between flex-col desktop:w-1/2 mx-auto">
            <h1 className="text-3xl text-center text-black">
              Escolha seu nivel:
            </h1>
            <Select
              value={lvl}
              onChange={(event) => setLvl(parseInt(event.target.value))}
              className="text-center text-red-800 rounded-lg w-full transition-all ease-in-out"
              placeholder={"Escolha seu nivel"}
            >
              {Array.from({ length: 5 }, (_, i) => i + 1).map((num) => (
                <option
                  selected={num === Number(localStorage.getItem("lvl"))}
                  value={num}
                  key={num}
                >
                  {num}
                </option>
              ))}
            </Select>
          </div>
          <div className="desktop:w-1/2 mx-auto mt-10">
            <Confirmar pagina="inicio" onSelect={() => {}} />
          </div>
        </form>
      </section>
    </>
  );
}

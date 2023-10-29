import {
  Button,
  HStack,
  Input,
  Select,
  useNumberInput,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TabelaAtributos } from "../classes/Tabelas/Atributos";
import { MoveDown, MoveUp } from "lucide-react";

interface AtributosProps {
  setPagina: (pagina: string) => void;
  next: string;
}
interface HookUsageProps {
  setAtributosSelecionados: React.Dispatch<
    React.SetStateAction<{ nome: string; valor: number }[]>
  >;
  setPontos: React.Dispatch<React.SetStateAction<number>>;
  index: number;
}
function HookUsage({
  setAtributosSelecionados,
  index,
  setPontos,
}: HookUsageProps) {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 0,
      min: -1,
      max: 4,
    });
  const [valor, setValor] = useState(0);

  const inc = getIncrementButtonProps({
    onClick: () => {
      if (valor < 4) {
        setValor(valor + 1);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = valor + 1;
          }
          return newState;
        });
        setPontos(
          (prevPontos) => prevPontos - getPointsChange(valor, valor + 1)
        );
      }
    },
  });

  const dec = getDecrementButtonProps({
    onClick: () => {
      if (valor > -1) {
        setValor(valor - 1);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = valor - 1;
          }
          return newState;
        });
        setPontos(
          (prevPontos) => prevPontos - getPointsChange(valor, valor - 1)
        );
      }
    },
  });

  const input = getInputProps({
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      if (value >= -1 && value <= 4) {
        setValor(value);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = value;
          }
          return newState;
        });
        setPontos((prevPontos) => prevPontos - getPointsChange(valor, value));
      }
    },
    value: valor,
  });

  function getPointsChange(oldValue: number, newValue: number): number {
    const pointsTable = [-1, 0, 1, 3, 6, 14];
    if (newValue === 0 && oldValue === -1) {
      return 1;
    } else if (newValue === -1) {
      return -1;
    } else {
      return pointsTable[newValue + 1] - pointsTable[oldValue + 1];
    }
  }

  return (
    <HStack maxW="200px">
      <Button {...inc}>+</Button>
      <Input className="text-center" {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
}

export default function Atributos({ setPagina, next }: AtributosProps) {
  if (localStorage.getItem("atributos") === null) {
    localStorage.setItem(
      "atributos",
      JSON.stringify([
        { nome: "Força", valor: 0 },
        { nome: "Destreza", valor: 0 },
        { nome: "Constituição", valor: 0 },
        { nome: "Inteligência", valor: 0 },
        { nome: "Sabedoria", valor: 0 },
        { nome: "Carisma", valor: 0 },
      ])
    );
  }
  const [atributosSelecionados, setAtributosSelecionados] = useState([
    { nome: "Força", valor: 0 },
    { nome: "Destreza", valor: 0 },
    { nome: "Constituição", valor: 0 },
    { nome: "Inteligência", valor: 0 },
    { nome: "Sabedoria", valor: 0 },
    { nome: "Carisma", valor: 0 },
  ]);
  const [atributosRaca, setAtributosRaca] = useState([
    { nome: "Força", valor: 0 },
    { nome: "Destreza", valor: 0 },
    { nome: "Constituição", valor: 0 },
    { nome: "Inteligência", valor: 0 },
    { nome: "Sabedoria", valor: 0 },
    { nome: "Carisma", valor: 0 },
  ]);
  const [pontos, setPontos] = useState(10);
  const [tipo, setTipo] = useState("Pontos");
  const [destaque, setDestaque] = useState(TabelaAtributos[0]);
  const [rolagem, setRolagem] = useState([0]);

  useEffect(() => {
    setAtributosRaca(JSON.parse(localStorage.getItem("atributos") ?? "[]"));
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    setTipo(value);
    if (value === "Rolagem") {
      const resultado = Array.from({ length: 6 }, () => dados());
      setRolagem(
        resultado.map((valor) => {
          if (valor === 8 || valor === 9) return -1;
          if (valor === 10 || valor === 11) return 0;
          if (valor === 12 || valor === 13) return 1;
          if (valor === 14 || valor === 15) return 2;
          if (valor === 16 || valor === 17) return 3;
          if (valor === 18) return 4;
          return valor;
        })
      );
    }
  };

  const handleDestaque = (index: number) => setDestaque(TabelaAtributos[index]);

  const handleClick = () => {
    if (pontos === 0) {
      const atributos = atributosSelecionados.map((atributo, index) => {
        return {
          nome: atributo.nome,
          valor: atributo.valor + atributosRaca[index].valor,
        };
      });
      alert(
        "Seus atributos finais são:\n" +
          atributos
            .map((atributo) => "- " + atributo.nome + ": " + atributo.valor)
            .join("\n")
      );
      localStorage.setItem("atributosFinais", JSON.stringify(atributos));
      setPagina(next);
    } else if (pontos > 0) {
      alert("Você ainda tem pontos para distribuir");
    } else {
      alert("Você não pode ter pontos negativos");
    }
  };

  const dados = () => {
    const rolls = Array.from(
      { length: 4 },
      () => Math.floor(Math.random() * 6) + 1
    );
    const lowestRoll = Math.min(...rolls);
    return rolls.reduce(
      (sum, roll) => sum + (roll === lowestRoll ? 0 : roll),
      0
    );
  };

  const handleUp = (index: number) => {
    setRolagem((prevRolagem) => {
      const newState = [...prevRolagem];
      newState[index] = newState[index - 1];
      newState[index - 1] = prevRolagem[index];
      return newState;
    });
  };
  const handleDown = (index: number) => {
    setRolagem((prevRolagem) => {
      const newState = [...prevRolagem];
      newState[index] = newState[index + 1];
      newState[index + 1] = prevRolagem[index];
      return newState;
    });
  };

  return (
    <>
      <Select
        className="ml-3 mb-3"
        bgColor={"whiteAlpha.900"}
        width={"xs"}
        onChange={handleChange}
      >
        <option value={"Pontos"}>Pontos</option>
        <option value={"Rolagem"}>Rolagem</option>
      </Select>
      <section className="flex gap-5 flex-col desktop:flex-row">
        <article className="flex flex-col bg-white bg-opacity-60 desktop:w-1/3 w-full h-fit p-3 rounded-lg">
          {tipo == "Pontos" ? (
            <h1 className="text-center font-bold mb-3 text-red-900">
              Pontos : {pontos}
            </h1>
          ) : (
            <h1 className="text-center font-bold mb-3 text-red-900">
              Rolagem : {rolagem.join(" | ")}
            </h1>
          )}
          <h1 className="text-center text-2xl mb-2">{destaque.nome}</h1>
          <img src={destaque.img} className="w-1/2 rounded-2xl mx-auto" />
          <p className="text-center font-serif my-4">{destaque.descricao}</p>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <button className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3 bottom-0">
              Ver mais
            </button>
            <button
              onClick={handleClick}
              className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-1/2 transition-all ease-in-out shadow-lg py-1 mt-3"
            >
              Confirmar
            </button>
          </div>
        </article>
        <article className="order-2 flex flex-col flex-wrap w-2/3 h-[25rem] gap-5">
          {TabelaAtributos.map((atributo, index) => (
            <button
              className={`flex flex-row gap-5 bg-opacity-60 bg-white p-4 rounded-md  transition-all ease-in delay-100 hover:cursor-default ${
                atributo.nome === destaque.nome
                  ? "text-red-900 bg-gray-400"
                  : ""
              }`}
            >
              <img
                src={atributo.img}
                className="w-1/6 rounded-lg hover:cursor-pointer"
                onClick={() => {
                  handleDestaque(index);
                  return undefined;
                }}
              />
              <div className="flex flex-col w-fit m-auto gap-2">
                <h1 className="text-lg text-center">
                  {atributo.nome}{" "}
                  {atributosRaca[index].valor > 0 &&
                    "+" + atributosRaca[index].valor}
                  {atributosRaca[index].valor < 0 && atributosRaca[index].valor}
                </h1>
                {tipo === "Pontos" ? (
                  <HookUsage
                    setAtributosSelecionados={setAtributosSelecionados}
                    index={index}
                    setPontos={setPontos}
                  />
                ) : (
                  <div className="bg-d20 flex justify-center gap-6">
                    <button
                      disabled={index == 0}
                      onClick={() => handleUp(index)}
                      className="bg-white bg-opacity-70 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MoveUp />
                    </button>
                    <p className="text-red-800 text-lg my-auto">
                      {rolagem[index]}
                    </p>
                    <button
                      disabled={index == 5}
                      onClick={() => handleDown(index)}
                      className="bg-white bg-opacity-70 rounded-full p-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <MoveDown />
                    </button>
                  </div>
                )}
              </div>
            </button>
          ))}
        </article>
      </section>
    </>
  );
}

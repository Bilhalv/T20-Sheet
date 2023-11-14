import {
  Button,
  HStack,
  Input,
  Select,
  useNumberInput,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { TabelaAtributos } from "../../classes/Tabelas/Atributos";
import { MoveDown, MoveUp } from "lucide-react";
import useCustomToast from "../Geral/Toasted";
import { useNavigate } from "react-router-dom";
import Confirmar from "../Geral/Confirmar";
import VerMais from "../Geral/VerMais";

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
      if (value !== valor && value >= -1 && value <= 4) {
        setValor(value);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = value;
          }
          return newState;
        });
        setPontos((prevPontos) => prevPontos - getPointsChange(valor, value));
      } else if (value > 4) {
        setValor(4);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = 4;
          }
          return newState;
        });
        setPontos((prevPontos) => prevPontos - getPointsChange(valor, 4));
      } else if (value < -1 && valor > -1) {
        setValor(-1);
        setAtributosSelecionados((prevState) => {
          const newState = [...prevState];
          if (newState[index]) {
            newState[index].valor = -1;
          }
          return newState;
        });
        console.log(valor, value);
        setPontos((prevPontos) => prevPontos + 1);
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
    <HStack className="desktop:w-1/2 w-[150px] mx-auto">
      <Button {...dec}>-</Button>
      <Input
        className={`text-center ${
          valor > 0 ? "text-green-800" : valor < 0 && "text-red-900"
        }`}
        {...input}
      />
      <Button {...inc}>+</Button>
    </HStack>
  );
}

export default function Atributos({ setPagina, next }: AtributosProps) {
  const atributosDefault = [
    { nome: "Força", valor: 0 },
    { nome: "Destreza", valor: 0 },
    { nome: "Constituição", valor: 0 },
    { nome: "Inteligência", valor: 0 },
    { nome: "Sabedoria", valor: 0 },
    { nome: "Carisma", valor: 0 },
  ];
  const navigate = useNavigate();
  const { showCustomToast } = useCustomToast();
  if (localStorage.getItem("atributos") === null) {
    localStorage.setItem("atributos", JSON.stringify(atributosDefault));
  }
  const [atributosSelecionados, setAtributosSelecionados] =
    useState(atributosDefault);
  const [atributosRaca, setAtributosRaca] = useState(atributosDefault);
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
    setPontos(10);
    if (value === "Rolagem") {
      const resultado = Array.from({ length: 6 }, () => dados());
      const resultadoAtributos = resultado.map((valor) => {
        if (valor <= 9) {
          return -1;
        } else if (valor <= 11) {
          return 0;
        } else if (valor <= 13) {
          return 1;
        } else if (valor <= 15) {
          return 2;
        } else if (valor <= 17) {
          return 3;
        } else {
          return 4;
        }
      });
      setRolagem(resultadoAtributos);
      showCustomToast({
        title: "Rolagem de dados",
        desc: `Dados sendo rolados...`,
        status: "loading",
        duration: 1000,
        onCloseComplete: () => {
          showCustomToast({
            title: "Rolagem de dados",
            desc: `Resultado dos dados foi: ${resultadoAtributos.join(" | ")}`,
            status: "success",
          });
        },
      });
    }
  };
  const destaqueImgTable = [
    "./img/atributos/forca2.png",
    "./img/atributos/destreza2.png",
    "./img/atributos/constituicao2.png",
    "./img/atributos/inteligencia2.png",
    "./img/atributos/sabedoria2.png",
    "./img/atributos/carisma2.png",
  ];
  const [destaqueImg, setDestaqueImg] = useState("./img/atributos/forca2.png");

  const handleDestaque = (index: number) => {
    setDestaque(TabelaAtributos[index]);
    setDestaqueImg(destaqueImgTable[index]);
  };

  const handleClick = () => {
    if (tipo === "Rolagem") {
      const atributos = atributosSelecionados.map((atributo, index) => {
        return {
          nome: atributo.nome,
          valor: atributo.valor + atributosRaca[index].valor + rolagem[index],
        };
      });
      showCustomToast({
        title: "Atributos finais",
        desc: `Seus atributos finais são: ${atributos
          .map((atributo) => atributo.nome + ": " + atributo.valor)
          .join(" | ")}`,
      });
      localStorage.setItem("atributosFinais", JSON.stringify(atributos));
      localStorage.setItem("pagina", next);
      setPagina(next);
      navigate("/criarpt2");
    } else {
      if (pontos === 0) {
        const atributos = atributosSelecionados.map((atributo, index) => {
          return {
            nome: atributo.nome,
            valor: atributo.valor + atributosRaca[index].valor,
          };
        });
        showCustomToast({
          title: "Atributos finais",
          desc: `Seus atributos finais são: ${atributos
            .map((atributo) => atributo.nome + ": " + atributo.valor)
            .join(" | ")}`,
        });
        localStorage.setItem("atributosFinais", JSON.stringify(atributos));
        localStorage.setItem("pagina", next);
        setPagina(next);
      } else if (pontos > 0) {
        showCustomToast({
          title: "Você ainda tem pontos para distribuir",
          desc: `Você ainda tem ${pontos} pontos para distribuir`,
          status: "warning",
        });
      } else {
        showCustomToast({
          title: "Erro",
          desc: `Você não pode ter pontos negativos`,
          status: "error",
        });
      }
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
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha seus atributos
      </h1>
      <div className="desktop:w-1/4 desktop:mx-0 w-3/4">
        <Select
          className="ml-3 mb-3"
          bgColor={"whiteAlpha.900"}
          onChange={handleChange}
        >
          <option value={"Pontos"}>Pontos</option>
          <option value={"Rolagem"}>Rolagem</option>
        </Select>
      </div>
      <section className="flex gap-5 flex-col desktop:flex-row">
        <article className="flex flex-col bg-white bg-opacity-60 desktop:w-1/3 w-full h-fit p-3 rounded-lg desktop:order-1 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] order-2">
          {tipo == "Pontos" ? (
            <h1 className="text-center font-bold mb-3 text-red-900">
              Pontos : {pontos}
            </h1>
          ) : (
            <h1 className="text-center font-bold mb-3 text-red-900">
              Rolagem : {rolagem.join(" | ")}
            </h1>
          )}
          <h1 className="text-center text-3xl mb-2">{destaque.nome}</h1>
          <img src={destaqueImg} className="w-1/2 mx-auto p-3 bg-red-700" />
          <p className="text-center font-serif my-4">{destaque.descricao}</p>
          <div className="flex gap-2 mx-auto w-full justify-around">
            <VerMais
              selected={destaque.nome}
              titulo={`Pericias do atributo ${destaque.nome}`}
              pagina="Atributos"
              handleSelect={() => {}}
            />
            <Confirmar onSelect={handleClick} pagina="Atributos" />
          </div>
        </article>
        <article className="desktop:order-2 order-1 flex desktop:flex-col flex-wrap desktop:w-2/3 h-fit laptop:h-[20rem] gap-5 justify-center laptop:mr-5">
          {TabelaAtributos.map((atributo, index) => (
            <div
              key={atributo.nome}
              className={`laptop:w-1/2 w-[190px] desktop:w-full flex flex-col desktop:flex-row laptop:gap-0 gap-5 bg-opacity-60 rounded-md transition-all ease-in delay-100 hover:cursor-default py-4 desktop:py-0 ${
                atributo.nome === destaque.nome
                  ? "text-red-900 bg-gray-400"
                  : "bg-white"
              }`}
            >
              <h1 className="text-center text-lg desktop:hidden block">
                {atributo.nome}{" "}
                {atributosRaca[index].valor > 0 &&
                  "+" + atributosRaca[index].valor}
                {atributosRaca[index].valor < 0 && atributosRaca[index].valor}
              </h1>
              <img
                src={atributo.img}
                className={`desktop:w-1/5 w-2/4 desktop:h-full desktop:mx-0 mx-auto hover:cursor-pointer grayscale hover:grayscale-0 transition-all ease-in-out hover:shadow-2xl hover:transform hover:scale-110 bg-red-700 p-2 ${
                  atributo.nome === destaque.nome ? "grayscale-0" : "grayscale"
                }`}
                onClick={() => {
                  handleDestaque(index);
                  return undefined;
                }}
              />
              <div className="flex flex-col gap-2 mx-auto laptop:my-2 desktop:my-auto">
                <h1 className="text-lg text-center mx-auto desktop:block hidden">
                  {atributo.nome}{" "}
                  {atributosRaca[index].valor > 0 &&
                    "+" + atributosRaca[index].valor}
                  {atributosRaca[index].valor < 0 && atributosRaca[index].valor}
                </h1>
                <div className="mx-auto">
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
              </div>
            </div>
          ))}
        </article>
      </section>
    </>
  );
}

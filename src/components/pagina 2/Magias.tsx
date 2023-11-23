import { useState } from "react";
import {
  aprimoramentos,
  enumEscolas,
  enumTipo,
} from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";

interface MagiasProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Magias({ handleChange, next }: MagiasProps) {
  const classe = localStorage.getItem("classe");
  const nivel = localStorage.getItem("nivel");
  const escolas = JSON.parse(localStorage.getItem("alt") || "[]");
  let filtros = {
    tipo: "" as enumTipo,
    circulo: 0,
    escolas: [] as enumEscolas[],
  };
  if (classe === "Bardo" || classe === "Druida") {
    filtros.escolas = escolas;
  }
  if (classe === "Bardo" || classe === "Arcanista") {
    filtros.tipo = enumTipo.arcana;
  } else if (classe === "Druida" || classe === "Clérigo") {
    filtros.tipo = enumTipo.divina;
  }
  interface ArrayMagias {
    nome: string;
    descricao: string;
    circulo: number;
    alcance: string;
    alvo: string;
    duracao: string;
    resistencia: string;
    escola: enumEscolas;
    aprimoramentos: aprimoramentos[];
    tipo: enumTipo;
    selecionado: boolean;
  }
  const magiasSelecionadas = JSON.parse(localStorage.getItem("magias") || "[]");
  const [array, setArray] = useState<ArrayMagias[]>(() => {
    const magias = TabelaMagias.filter((magia) => {
      const selected = magiasSelecionadas.includes(magia.nome);
      if (
        (classe === "Bardo" || classe === "Druida") &&
        !filtros.escolas.includes(magia.escola)
      ) {
        console.log("escola");
        return false;
      }
      if (
        (filtros.tipo === enumTipo.arcana ||
          filtros.tipo === enumTipo.divina ||
          filtros.tipo === enumTipo.universal) &&
        filtros.tipo !== magia.tipo
      ) {
        return false;
      }
      const niveis = [1, 5, 9, 13, 17];

      if (Number(nivel) < niveis[magia.circulo]) {
        return false;
      }

      return true;
    });
    const newArray = magias.map((magia) => {
      const selected = magiasSelecionadas.includes(magia.nome);
      return {
        nome: magia.nome,
        descricao: magia.descricao,
        circulo: magia.circulo,
        alcance: magia.alcance,
        alvo: magia.alvo,
        duracao: magia.duracao,
        resistencia: magia.resistencia,
        escola: magia.escola,
        aprimoramentos: magia.aprimoramentos,
        tipo: magia.tipo,
        selecionado: selected,
      };
    });
    return newArray;
  });

  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha suas Magias
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
          {array.map((magia, index) => {
            return (
              <div
                key={index}
                className="flex flex-col gap-2 p-2 bg-gray-100 rounded-lg shadow-md"
              >
                <div className="flex justify-between">
                  <h1 className="font-bold">{magia.nome}</h1>
                  <button
                    onClick={() => {
                      const newArray = array.map((magia) => {
                        if (magia.nome === array[index].nome) {
                          magia.selecionado = !magia.selecionado;
                        }
                        return magia;
                      });
                      setArray(newArray);
                    }}
                    className={`${
                      magia.selecionado ? "bg-green-500" : "bg-red-500"
                    } w-6 h-6 rounded-full`}
                  ></button>
                </div>
                <p>{magia.descricao}</p>
                <div className="grid grid-cols-2 gap-1">
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold">Circulo:</span>{" "}
                      {magia.circulo}
                    </p>
                    <p>
                      <span className="font-bold">Alcance:</span>{" "}
                      {magia.alcance}
                    </p>
                    <p>
                      <span className="font-bold">Alvo:</span> {magia.alvo}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p>
                      <span className="font-bold">Duração:</span>{" "}
                      {magia.duracao}
                    </p>
                    <p>
                      <span className="font-bold">Resistência:</span>{" "}
                      {magia.resistencia}
                    </p>
                    <p>
                      <span className="font-bold">Escola:</span> {magia.escola}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <p className="font-bold">Aprimoramentos:</p>
                  {magia.aprimoramentos.map((aprimoramento, index) => {
                    return (
                      <p key={index}>
                        <span className="font-bold">
                          {aprimoramento.pm_a_mais}:
                        </span>{" "}
                        {aprimoramento.descricao}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </section>
      </div>
    </>
  );
}

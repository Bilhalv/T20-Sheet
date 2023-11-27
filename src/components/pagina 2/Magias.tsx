import { useState } from "react";
import {
  aprimoramentos,
  enumEscolas,
  enumTipo,
} from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import MagiasCards from "../Geral/Magias";
export interface ArrayMagias {
  nome: string;
  execucao: string;
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

interface MagiasProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Magias({ handleChange, next }: MagiasProps) {
  const classe = localStorage.getItem("classe");
  const nivel = localStorage.getItem("lvl");
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
  const magiasSelecionadas = JSON.parse(localStorage.getItem("magias") || "[]");
  const [array, setArray] = useState<ArrayMagias[]>(() => {
    const magias = TabelaMagias.filter((magia) => {
      const selected = magiasSelecionadas.includes(magia.nome);
      if (
        (classe === "Bardo" || classe === "Druida") &&
        !filtros.escolas.includes(magia.escola)
      ) {
        return false;
      }
      if (
        (filtros.tipo === enumTipo.arcana ||
          filtros.tipo === enumTipo.divina ||
          filtros.tipo === enumTipo.universal) &&
        filtros.tipo !== magia.tipo
      ) {
        if (enumTipo.universal !== magia.tipo) {
          return false;
        }
      }
      const niveis = [1, 5, 9, 13, 17];

      console.log(
        magia.nome,
        "nivelmin",
        niveis[magia.circulo - 1],
        "nivel",
        magia.circulo,
        "nivelchar",
        Number(nivel)
      );
      if (Number(nivel) + 1 <= niveis[magia.circulo - 1]) {
        return false;
      }

      return true;
    });
    const newArray = magias.map((magia) => {
      const selected = magiasSelecionadas.includes(magia.nome);
      return {
        nome: magia.nome,
        execucao: magia.execucao,
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
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha suas Magias
      </h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
        <MagiasCards magias={array} handleChange={handleChange} next={next}/>
      </section>
    </>
  );
}

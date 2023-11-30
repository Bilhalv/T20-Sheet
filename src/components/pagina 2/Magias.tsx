import { useState } from "react";
import {
  aprimoramentos,
  enumEscolas,
  enumTipo,
} from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import MagiasCards from "../Geral/MagiasCards";
import Confirmar from "../Geral/Confirmar";
import useCustomToast from "../Geral/Toasted";
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
  const nivel = Number(localStorage.getItem("lvl"));
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
  const calculateMaximoPrimeiro = (
    classe: string,
    alt: string,
    nivel: number
  ) => {
    if (classe === "Bardo" || classe === "Druida") {
      return 2 + Math.floor(nivel / 2);
    } else if (classe === "Arcanista" || classe === "Clérigo") {
      if (alt === "Mago") {
        return 4 + (nivel >= 5 ? nivel + 1 : nivel);
      } else if (alt === "Feiticeiro") {
        return 3 + Math.floor((nivel - 1) / 2);
      } else {
        return 3 + nivel - 1;
      }
    }
    return 0;
  };
  const alt = JSON.parse(localStorage.getItem("alt") || "[]");

  const [maximoPrimeiro, setMaximoPrimeiro] = useState<number>(
    calculateMaximoPrimeiro(classe || "", alt, nivel)
  );
  const calculateMaximoSegundo = (
    classe: string,
    alt: string,
    nivel: number
  ) => {
    if (classe === "Bardo" || classe === "Druida") {
      if (nivel >= 6) {
        return Math.floor(nivel / 2) - 1;
      }
    } else if (classe === "Arcanista" || classe === "Clérigo") {
      if (alt === "Mago") {
        if (nivel >= 5) {
          return nivel - 4 + 1;
        }
      } else if (alt === "Feiticeiro") {
        if (nivel >= 5) {
          return Math.floor((nivel - 1) / 2) - 1;
        }
      } else {
        if (nivel >= 5) {
          return nivel - 4;
        }
      }
    }
    return 0;
  };

  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  const [maximoSegundo, setMaximoSegundo] = useState<number>(
    calculateMaximoSegundo(classe || "", alt, nivel)
  );
  const { showCustomToast } = useCustomToast();
  const onSelect = () => {
    if (maximoPrimeiro !== 0 || maximoSegundo !== 0) {
      if (maximoPrimeiro !== 0) {
        showCustomToast({
          title: "Você ainda tem magias para escolher!",
          desc: `Você ainda tem ${maximoPrimeiro} magias de primeiro círculo para escolher!`,
          status: "warning",
        });
      } else {
        showCustomToast({
          title: "Você ainda tem magias para escolher!",
          desc: `Você ainda tem ${maximoPrimeiro} magias de primeiro círculo e ${maximoSegundo} magias de segundo círculo para escolher!`,
          status: "warning",
        });
      }
    } else {
      showCustomToast({
        title: "Magias selecionadas!",
        desc: `Você selecionou ${selecionadas.length} magias!`,
        status: "success",
      });
      localStorage.setItem("magias", JSON.stringify(selecionadas));
      handleChange(next);
    }
  };
  let padrao = maximoPrimeiro;
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha suas Magias
      </h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)]">
        {padrao !== 0 ? (
          <>
            <p className="flex flex-col">
              <p>Magias Para escolher:</p>
              <p className="ml-2 italic">
                {`Primeiro: ${maximoPrimeiro}`}
                {` Segundo: ${maximoSegundo}`}
              </p>
            </p>
            <MagiasCards
              magias={array}
              setMaximoPrimeiro={setMaximoPrimeiro}
              maximoPrimeiro={maximoPrimeiro}
              setMaximoSegundo={setMaximoSegundo}
              maximoSegundo={maximoSegundo}
              selecionadas={selecionadas}
              setSelecionadas={setSelecionadas}
            />
          </>
        ) : (
          <>
            <h1 className="text-center text-3xl font-bold my-10 text-red-900">
              Você não tem <span className="text-red-500">nenhuma</span> magia para escolher, clique em <span className="text-red-500">confirmar</span> para
              continuar
            </h1>
          </>
        )}
        <Confirmar onSelect={onSelect} />
      </section>
    </>
  );
}

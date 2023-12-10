import Ficha from "../../classes/Construtores/Ficha";
import { Magia } from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import MagiasCards from "../Geral/MagiasCards";
import { ArrayMagias } from "../pagina 2/Magias";

interface Props {
  personagem: Ficha;
}

export default function Magias({ personagem }: Props) {
  const magias: ArrayMagias[] = TabelaMagias.filter((magia: Magia) => {
    const magiaPersonagem = personagem.magias.find(
      (magiaPersonagem: string) => {
        if (magiaPersonagem.includes("(-1 PM)")) {
          const semExtra = magiaPersonagem.replace("(-1 PM)", "");
          return semExtra === magia.nome;
        } else {
          return magiaPersonagem === magia.nome;
        }
      }
    );
    if (magiaPersonagem) {
      return true;
    }
  });

  return (
    <>
      {magias.length !== 0 && (
        <section className="border border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white">
          <h1 className="text-center font-bold text-2xl text-red-700">
            Magias
          </h1>
          <MagiasCards magias={magias} tipo="ficha" />
        </section>
      )}
    </>
  );
}

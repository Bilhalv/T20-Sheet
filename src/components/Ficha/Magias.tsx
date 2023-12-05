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
        return magiaPersonagem === magia.nome;
      }
    );
    if (magiaPersonagem) {
      return true;
    }
  });

  return (
    <>
      <MagiasCards magias={magias} tipo="ficha" />
    </>
  );
}

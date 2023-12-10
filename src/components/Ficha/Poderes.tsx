import { useState } from "react";
import { poderesArcanista } from "../../classes/Classes/Arcanista";
import { poderesBarbaro } from "../../classes/Classes/Barbaro";
import { poderesBardo } from "../../classes/Classes/Bardo";
import { poderesBucaneiro } from "../../classes/Classes/Bucaneiro";
import { poderesCacador } from "../../classes/Classes/Cacador";
import { poderesCavaleiro } from "../../classes/Classes/Cavaleiro";
import { poderesClerigo } from "../../classes/Classes/Clerigo";
import { poderesDruida } from "../../classes/Classes/Druida";
import { poderesGuerreiro } from "../../classes/Classes/Guerreiro";
import { poderesInventor } from "../../classes/Classes/Inventor";
import { poderesLadino } from "../../classes/Classes/Ladino";
import { poderesLutador } from "../../classes/Classes/Lutador";
import { poderesNobre } from "../../classes/Classes/Nobre";
import { poderesPaladino } from "../../classes/Classes/Paladino";
import Ficha from "../../classes/Construtores/Ficha";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { RolarDado } from "../Geral/RolarDado";
import useCustomToast from "../Geral/Toasted";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { Poder } from "../../classes/Construtores/Poder";
import { TabelaRacas } from "../../classes/Tabelas/Racas";
import { infos } from "../../classes/Construtores/Infos";
import { TabelaClasses } from "../../classes/Tabelas/Classes";

interface Props {
  personagem: Ficha;
}

export default function Poderes({ personagem }: Props) {
  const { showCustomToast } = useCustomToast();

  const poderesRaca: infos[] = TabelaRacas.filter(
    (raca) => raca.nome === personagem.raca
  )[0].poderes.map((poder) => {
    return {
      nome: poder.nome,
      descricao: poder.descricao + ` (${personagem.raca})`,
    };
  });

  const poderesClasse: infos[] = TabelaClasses.filter(
    (classe) => classe.nome === personagem.classe.nome
  )[0].habilidades.map((poder) => {
    return {
      nome: poder.nome,
      descricao: poder.descricao + ` (${personagem.classe.nome})`,
      nivel: poder.nivel,
    };
  });

  const [tabelaTodosPoderes, setTabelaTodosPoderes] = useState<
    Poder[] | infos[]
  >([
    ...[
      ...TabelaPoderes,
      ...poderesArcanista,
      ...poderesBarbaro,
      ...poderesBardo,
      ...poderesBucaneiro,
      ...poderesCacador,
      ...poderesCavaleiro,
      ...poderesClerigo,
      ...poderesDruida,
      ...poderesGuerreiro,
      ...poderesPaladino,
      ...poderesNobre,
      ...poderesLutador,
      ...poderesLadino,
      ...poderesInventor,
    ].filter((poder) => personagem.poderes.includes(poder.nome)),
    ...poderesClasse.filter((poder) => personagem.nivel >= (poder.nivel || 0)),
    ...poderesRaca,
  ]);
  return (
    <>
      <Accordion
        className="border border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white"
        allowToggle
      >
        <h1 className="text-center font-bold text-2xl text-red-700">Poderes</h1>
        {tabelaTodosPoderes.map((poder: any) => (
          <AccordionItem borderColor={"red.400"}>
            <AccordionButton className="flex justify-between">
              <p>{poder.nome}</p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel className="bg-white bg-opacity-40 text-justify">
              <p className="font-serif">
                &nbsp;&nbsp;&nbsp;&nbsp;{poder.descricao}
              </p>
            </AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

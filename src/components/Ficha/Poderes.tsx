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

interface Props {
  personagem: Ficha;
}

export default function Poderes({ personagem }: Props) {
  const { showCustomToast } = useCustomToast();
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
    ...TabelaRacas.filter(
      (raca) => raca.nome === personagem.raca
    )[0].poderes.map((poder) => {
      return { nome: poder.nome, descricao: poder.descricao + ` (${personagem.raca})` };
    }),
  ]);
  return (
    <>
      <Accordion
        className="flex flex-col justify-evenly desktop:w-fit w-full gap-2 mx-auto"
        allowToggle
      >
        {tabelaTodosPoderes.map((poder: any) => (
          <AccordionItem>
            <AccordionButton className="flex justify-between">
              <p>{poder.nome}</p>
              <AccordionIcon />
            </AccordionButton>
            <AccordionPanel>
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

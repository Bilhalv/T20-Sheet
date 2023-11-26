import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { ArrayMagias } from "../pagina 2/Magias";
import { enumTipo } from "../../classes/Construtores/Magia";

interface MagiasProps {
  magias: ArrayMagias[];
}

export default function MagiasCards({ magias }: MagiasProps) {
  const imagens = magias.map(
    (magia: ArrayMagias) =>
      "./img/magias/" +
      magia.escola.toLowerCase().replace(/ç/g, "c").replace(/ã/g, "a") +
      ".svg"
  );
  return (
    <>
      <Accordion allowToggle>
        {magias.map((magia: ArrayMagias, index) => (
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <AccordionButton className="flex justify-between">
                  <div className="flex flex-col font-bold text-xl">
                    <p>{magia.nome}</p>
                    {isExpanded ? <p></p> : null}
                  </div>
                  <div
                    className={`bg-cover bg-center bg-${magia.tipo === enumTipo.arcana ? "arcana" : magia.tipo === enumTipo.divina ? "divina":"universal"} p-4`}
                  >
                    <img
                      src={imagens[index]}
                      alt={magia.escola}
                      className="w-6 h-6"
                    />
                  </div>
                </AccordionButton>
                <AccordionPanel pb={4}>{magia.descricao}</AccordionPanel>
              </>
            )}
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

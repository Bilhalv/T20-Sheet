import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
} from "@chakra-ui/react";
import { ArrayMagias } from "../pagina 2/Magias";

interface MagiasProps {
    magias: ArrayMagias[];
    }

export default function MagiasCards({magias}: MagiasProps) {
  return (
    <>
      <Accordion allowToggle>
        {magias.map((magia: ArrayMagias) => (
          <AccordionItem>
              <AccordionButton className="flex justify-between">
                {magia.nome}
                <AccordionIcon />
              </AccordionButton>
            <AccordionPanel pb={4}>{magia.descricao}</AccordionPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

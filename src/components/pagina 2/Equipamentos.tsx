import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";
import { TabelasArmasSimles } from "../../classes/Tabelas/Itens";

interface EquipamentosProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Equipamentos({ setPagina, next }: EquipamentosProps) {
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha seus Equipamentos
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <Accordion allowToggle>
            <div className="flex justify-evenly">
              <Checkbox isDisabled isChecked>
                Mochila
              </Checkbox>
              <Checkbox isDisabled isChecked>
                Saco de dormir
              </Checkbox>
              <Checkbox isDisabled isChecked>
                Traje de viajante
              </Checkbox>
            </div>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Simples</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4} className="flex flex-col">
                {TabelasArmasSimles.map((arma: any) => (
                  <div className="flex justify-evenly">
                    <p>{arma.nome}</p>
                    <Popover>
                      <PopoverTrigger>
                        <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500">
                          Ver descrição
                        </button>
                      </PopoverTrigger>
                      <PopoverContent color="red.900">
                        <PopoverArrow />
                        <PopoverCloseButton />
                        <PopoverHeader className="text-center">
                          {arma.nome}
                        </PopoverHeader>
                        <PopoverBody className="font-serif">
                          &nbsp;&nbsp;&nbsp;{arma.descricao}
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                    <p className="font-serif">T$ {arma.preco}</p>
                    <p>{arma.dano}</p>
                    <p>{arma.crit}</p>
                    <p>{arma.alcance}</p>
                    <p>{arma.tipo}</p>
                    <p className="w-fit">{arma.espacos}</p>
                  </div>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Arma Marcial</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <p className="text-justify font-serif italic">a</p>
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton className="flex justify-between">
                <h2 className="text-lg font-bold">Armadura</h2>
                <AccordionIcon />
              </AccordionButton>
              <AccordionPanel pb={4}>
                <p className="text-justify font-serif italic">a</p>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </section>
      </div>
    </>
  );
}

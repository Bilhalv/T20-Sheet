import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  IconButton,
  DrawerFooter,
  Button,
  useToast,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Tooltip,
} from "@chakra-ui/react";
import { Pin, PinOff, Brain } from "lucide-react";
import Condicao from "../../classes/Construtores/Condicao";
import { TabelaCondicoes } from "../../classes/Tabelas/Condicoes";
import { useState } from "react";

interface TipoCondicao {
  nome: string;
  descricao: string;
}
const tabelaTipoCondicao: TipoCondicao[] = [
  {
    nome: "Arcano",
    descricao:
      "Gerado pelas energias místicas de Arton. Todos efeitos arcanos são mágicos.",
  },
  {
    nome: "Atordoamento",
    descricao: "Afeta a capacidade de agir do alvo.",
  },
  {
    nome: "Cansaço",
    descricao:
      "Diminui as capacidades físicas do alvo. Construtos e mortos-vivos são imunes a efeitos de cansaço.",
  },
  {
    nome: "Climático",
    descricao: "Gerado pelas forças da natureza.",
  },
  {
    nome: "Cura",
    descricao: "Cura pontos de vida do alvo.",
  },
  {
    nome: "Dano",
    descricao:
      "Reduz os PV do alvo. Efeitos deste tipo são subdivididos em tipos de dano (veja a página 230).",
  },
  {
    nome: "Divino",
    descricao:
      "Gerado pela energia de um deus, direta ou indiretamente. Todos efeitos divinos são mágicos.",
  },
  {
    nome: "Luz",
    descricao:
      "Efeitos relacionados a dano e cura de luz, iluminação e energia positiva (sinônimo de luz).",
  },
  {
    nome: "Mágico",
    descricao:
      "Energizados por forças arcanas ou divinas, envolvem magias, efeitos gerados por itens mágicos ou marcados com o símbolo e. Podem ser subdivididos em escolas de magia (veja a página 172).",
  },
  {
    nome: "Medo",
    descricao:
      "Medo capaz de prejudicar o alvo. Criaturas com Inteligência nula são imunes a medo.",
  },
  {
    nome: "Mental",
    descricao:
      "Afeta a mente do alvo, diminuindo suas capacidades ou influenciando-a. Criaturas com Inteligência nula são imunes a efeitos mentais.",
  },
  {
    nome: "Metabolismo",
    descricao:
      "Afeta a fisiologia do alvo. Incluem doenças, sangramento e fome. Construtos e mortos-vivos são imunes a efeitos de metabolismo.",
  },
  {
    nome: "Metamorfose",
    descricao:
      "Altera a forma ou composição corporal do alvo. Inclui petrificação.",
  },
  {
    nome: "Movimento",
    descricao: "Afeta ou remove a capacidade de se movimentar do alvo.",
  },
  {
    nome: "Perda de Vida",
    descricao:
      "Reduz os PV do alvo. Ao contrário de dano, não é afetado por redução de dano.",
  },
  {
    nome: "Sentidos",
    descricao:
      "Afeta os sentidos físicos do alvo, por exemplo, deixando-o cego ou surdo.",
  },
  {
    nome: "Trevas",
    descricao:
      "Efeitos relacionados a necromancia, escuridão e energia negativa (sinônimo de trevas).",
  },
  {
    nome: "Veneno",
    descricao:
      "Efeitos gerados por venenos. Construtos e mortos-vivos são imunes a venenos.",
  },
];

export default function Condicoes() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  const toast = useToast();
  return (
    <>
      <Drawer
        isOpen={isOpenDrawer}
        placement="left"
        onClose={() => setIsOpenDrawer(false)}
      >
        <DrawerOverlay />
        <DrawerContent className="font-tormenta">
          <DrawerCloseButton />
          <DrawerHeader>Condições</DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              {TabelaCondicoes.map((condicao: Condicao) => (
                <AccordionItem
                  borderColor={"red"}
                  rounded={"xl"}
                  border={"1px solid red"}
                  mb={2}
                >
                  <AccordionButton className="flex justify-between">
                    <h1 className="text-red-600 text-lg font-bold">
                      {condicao.nome}
                    </h1>
                    <IconButton
                      icon={<Pin size={18} />}
                      overflow={"hidden"}
                      onClick={() => {
                        toast({
                          position: "top-right",
                          duration: null,
                          isClosable: true,
                          render: ({ onClose }) => (
                            <div className="bg-red-600 text-white p-4 rounded-xl w-1/2 ml-auto relative">
                              <div className="flex justify-between">
                                <h1 className="text-xl font-bold font-tormenta">
                                  {condicao.nome}
                                </h1>
                                <IconButton
                                  aria-label="Fechar"
                                  icon={<PinOff size={18} />}
                                  onClick={onClose}
                                  rounded={"full"}
                                  bgColor={"red"}
                                  color={"white"}
                                  size="xs"
                                  _hover={{
                                    color: "red",
                                    transform: "scale(1.1)",
                                    zIndex: 1,
                                    borderColor: "red",
                                    bg: "transparent",
                                    border: "2px solid",
                                  }}
                                />
                              </div>
                              <p className="text-justify text-sm">
                                &nbsp;&nbsp;{condicao.descricao}
                                <i>&nbsp;{condicao?.tipo}</i>
                              </p>
                            </div>
                          ),
                        });
                      }}
                      aria-label="Condições"
                      rounded={"full"}
                      bgColor={"red"}
                      color={"white"}
                      size="xs"
                      _hover={{
                        color: "red",
                        transform: "scale(1.1)",
                        zIndex: 1,
                        borderColor: "red",
                        bg: "transparent",
                        border: "2px solid",
                      }}
                    />
                  </AccordionButton>
                  <AccordionPanel className="text-justify font-serif text-sm">
                    &nbsp;&nbsp;{condicao.descricao}
                    <Tooltip
                      bg="red"
                      color="white"
                      label={
                        tabelaTipoCondicao.find(
                          (e) => e.nome === condicao?.tipo
                        )?.descricao || "Descrição não encontrada"
                      }
                    >
                      <i className="text-red-600 hover:cursor-pointer">
                        &nbsp;{condicao?.tipo}.
                      </i>
                    </Tooltip>
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </DrawerBody>
          <DrawerFooter>
            <Button
              colorScheme="red"
              ml={3}
              onClick={() => setIsOpenDrawer(false)}
            >
              Fechar
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <IconButton
        icon={<Brain />}
        overflow={"hidden"}
        onClick={() => {
          setIsOpenDrawer(true);
        }}
        aria-label="Condições"
        rounded={"full"}
        bgColor={"red"}
        color={"white"}
        size="sm"
        _hover={{
          color: "red",
          transform: "scale(1.1)",
          zIndex: 1,
          borderColor: "red",
          bg: "transparent",
          border: "2px solid",
        }}
      />
    </>
  );
}

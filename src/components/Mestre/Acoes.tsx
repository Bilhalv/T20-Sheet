import {
  useToast,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Accordion,
  AccordionItem,
  AccordionButton,
  IconButton,
  AccordionPanel,
  DrawerFooter,
  Button,
  Tab,
  Tabs,
  TabList,
  TabPanels,
  TabPanel,
  AccordionIcon,
  Tooltip,
} from "@chakra-ui/react";
import { AlarmClock } from "lucide-react";
import { useState } from "react";
import { TabelaAcoes } from "../../classes/Tabelas/Mestre/Acoes";
import Acao from "../../classes/Construtores/Acao";

function ConstrutorDeAccordions(acao: Acao): JSX.Element {
  return (
    <>
      <AccordionItem
        borderColor={"red"}
        rounded={"xl"}
        border={"1px solid red"}
        mb={2}
      >
        <AccordionButton className="flex justify-between text-red-600 rounded-xl">
          <p className="font-tormenta">{acao.nome}</p>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel className="font-serif text-sm text-justify">
          {acao.descricao}
        </AccordionPanel>
      </AccordionItem>
    </>
  );
}

export default function Acoes() {
  const [isOpenDrawer, setIsOpenDrawer] = useState(false);
  return (
    <>
      <Drawer
        isOpen={isOpenDrawer}
        onClose={() => setIsOpenDrawer(false)}
        size={"lg"}
      >
        <DrawerOverlay />
        <DrawerContent className="font-tormenta">
          <DrawerCloseButton />
          <DrawerHeader>Ações</DrawerHeader>
          <DrawerBody>
            <Tabs isLazy colorScheme="red" variant={"solid-rounded"}>
              <TabList flexDirection={"row"} flexWrap={"wrap"}>
                <Tab w={"20%"}>Manobras</Tab>
                <Tab w={"20%"}>Padrão</Tab>
                <Tab w={"20%"}>Movimento</Tab>
                <Tab w={"20%"}>Completa</Tab>
                <Tab w={"20%"}>Livre</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>
                  <h1 className="text-center">Manobras</h1>
                  <div className="font-serif text-sm italic mb-4">
                    <p>
                      &nbsp;&nbsp;&nbsp;Uma manobra é um ataque corpo a corpo
                      para fazer algo diferente de causar dano — como arrancar a
                      arma do oponente ou empurrá-lo para um abismo. Não é
                      possível fazer manobras de combate com ataques à
                      distância.
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;Faça um teste de manobra (um teste de
                      ataque corpo a corpo) oposto com a criatura. Mesmo que ela
                      esteja usando uma arma de ataque à distância, deve fazer o
                      teste usando seu valor de Luta. Em caso de empate, o
                      personagem com o maior bônus vence. Se os bônus forem
                      iguais, outro teste deve ser feito. Em geral, você pode
                      usar qualquer arma corpo a corpo para fazer manobras de
                      combate.
                    </p>
                    <p>
                      &nbsp;&nbsp;&nbsp;Estas são as manobras que você pode
                      fazer.
                    </p>
                  </div>
                  <Accordion allowToggle>
                    {TabelaAcoes.filter((e) => e.tipo === "manobra").map(
                      (manobra) => {
                        return ConstrutorDeAccordions(manobra);
                      }
                    )}
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <h1 className="text-center">Padrão</h1>
                  <p className="font-serif mb-4">
                    &nbsp;&nbsp;&nbsp;Sua ação padrão normalmente representa a
                    coisa mais importante que você vai fazer em seu turno.
                  </p>
                  <Accordion allowToggle>
                    {TabelaAcoes.filter((e) => e.tipo === "padrao").map(
                      (padrao) => {
                        return ConstrutorDeAccordions(padrao);
                      }
                    )}
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <h1 className="text-center">Movimento</h1>
                  <p className="font-serif mb-4">
                    &nbsp;&nbsp;&nbsp;Uma ação de movimento serve para mudar
                    algo de posição — seja você, seja um item.
                  </p>
                  <Accordion allowToggle>
                    {TabelaAcoes.filter((e) => e.tipo === "movimento").map(
                      (movimento) => {
                        return ConstrutorDeAccordions(movimento);
                      }
                    )}
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <h1 className="text-center">Completa</h1>
                  <p className="font-serif mb-4">
                    &nbsp;&nbsp;&nbsp;Ações completas exigem muito tempo e
                    esforço. Leia mais sobre isso na página 233.
                  </p>
                  <Accordion allowToggle>
                    {TabelaAcoes.filter((e) => e.tipo === "completa").map(
                      (completa) => {
                        return ConstrutorDeAccordions(completa);
                      }
                    )}
                  </Accordion>
                </TabPanel>
                <TabPanel>
                  <h1 className="text-center">Livre</h1>
                  <p className="font-serif mb-4">
                    &nbsp;&nbsp;&nbsp;Uma ação livre demanda pouco ou nenhum
                    tempo, esforço ou atenção. Normalmente você pode executar
                    quantas ações livres quiser por turno, mas o mestre pode
                    limitar ou proibir ações complexas.
                  </p>
                  <Accordion allowToggle>
                    {TabelaAcoes.filter((e) => e.tipo === "livre").map(
                      (livre) => {
                        return ConstrutorDeAccordions(livre);
                      }
                    )}
                  </Accordion>
                </TabPanel>
              </TabPanels>
            </Tabs>
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
      <Tooltip label="Ações" bgColor="red.600">
        <IconButton
          icon={<AlarmClock />}
          overflow={"hidden"}
          onClick={() => {
            setIsOpenDrawer(true);
          }}
          aria-label="Ações"
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
      </Tooltip>
    </>
  );
}

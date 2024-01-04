import {
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
  AccordionIcon,
} from "@chakra-ui/react";
import { HelpCircle } from "lucide-react";
import { useState } from "react";
import { TabelaPericias } from "../../classes/Tabelas/Pericias";

export default function Pericias() {
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
          <DrawerHeader>Pericias</DrawerHeader>
          <DrawerBody>
            <Accordion allowToggle>
              {TabelaPericias.map((pericia) => {
                return (
                  <AccordionItem
                    borderColor={"red"}
                    rounded={"xl"}
                    border={"1px solid red"}
                    mb={2}
                  >
                    <AccordionButton className="flex justify-between text-red-600 rounded-xl">
                      <p className="font-tormenta">{pericia.nome}</p>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel className="font-serif text-sm text-justify">
                      {pericia.descricao}({pericia.atributo})
                      {pericia.penalidadearmadura && (
                        <>
                          <br />
                          <b>Penalidade de armadura</b>
                        </>
                      )}
                      {pericia.somentetreinada && (
                        <>
                          <br />
                          <b>Somente treinada</b>
                        </>
                      )}
                    </AccordionPanel>
                  </AccordionItem>
                );
              })}
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
        icon={<HelpCircle />}
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
    </>
  );
}

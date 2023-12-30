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
} from "@chakra-ui/react";
import { AlarmClock } from "lucide-react";
import { useState } from "react";
import { TabelaAcoes } from "../../classes/Tabelas/Acoes";
const Manobras = (
  <>
    <Accordion allowToggle>
      {TabelaAcoes.filter((e) => e.tipo === "manobra").map((manobra) => (
        <AccordionItem
          borderColor={"red"}
          rounded={"xl"}
          border={"1px solid red"}
          mb={2}
        >
          <AccordionButton className="flex justify-between text-red-600 rounded-xl">
            <p className="font-tormenta">{manobra.nome}</p>
            <AccordionIcon />
          </AccordionButton>
          <AccordionPanel className="font-serif text-sm text-justify">
            <i>&nbsp;&nbsp;{manobra.descricao}</i>
          </AccordionPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </>
);

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
                <Tab w={"33%"}>Manobras</Tab>
                <Tab w={"33%"}>Padrão</Tab>
                <Tab w={"33%"}>Movimento</Tab>
                <Tab w={"33%"}>Completa</Tab>
                <Tab w={"33%"}>Livre</Tab>
                <Tab w={"33%"}>Reação</Tab>
              </TabList>
              <TabPanels>
                <TabPanel>{Manobras}</TabPanel>
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
    </>
  );
}

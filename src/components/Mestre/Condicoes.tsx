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
} from "@chakra-ui/react";
import { Pin, PinOff, Brain } from "lucide-react";
import Condicao from "../../classes/Construtores/Condicao";
import { TabelaCondicoes } from "../../classes/Tabelas/Condicoes";
import { useState } from "react";

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
                  border={("1px solid red")}
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
                    <i>&nbsp;{condicao?.tipo}</i>
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

import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tooltip,
  useDisclosure,
} from "@chakra-ui/react";
import { BookUser, Pencil } from "lucide-react";
import React from "react";

interface Props {
  setPagina: any;
  pagina: number;
}

export default function FichaModal({ setPagina, pagina }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Tooltip bg={"red.800"} label="Ficha">
        <IconButton
          zIndex={2}
          borderRadius={"full"}
          aria-label="Info"
          bg={"transparent"}
          onClick={onOpen}
          _hover={{ bg: "transparent", color: "gray.200", mouse: "pointer" }}
        >
          <BookUser size={32} />
        </IconButton>
      </Tooltip>
      <Modal
        size={"xl"}
        finalFocusRef={finalRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">Personagem</ModalHeader>
          <ModalBody>
            {pagina === 1 && (
              <>
                <div className="flex flex-col">
                  <div className="w-1/2">
                    <Pencil />
                  </div>
                  <div className="w-1/2">
                    <Pencil />
                  </div>
                </div>
              </>
            )}
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mx={"auto"} onClick={onClose}>
              Entendi
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

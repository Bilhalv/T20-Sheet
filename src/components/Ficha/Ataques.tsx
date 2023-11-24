import {
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { Eye } from "lucide-react";
import { EntendiOnModal } from "../Geral/Botoes";
import { useState } from "react";

interface Props {
  personagem: any;
}

export default function Ataques({ personagem }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const [ataqueModal, setAtaqueModal] = useState({
    nome: "",
    bonus: 0,
    dano: "",
    critico: "",
    tipo: "",
    alcance: "",
    descricao: "",
  });
  return (
    <>
      <div className="border border-black rounded-lg flex flex-col shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center">
        <div className="grid desktop:grid-cols-7 grid-cols-4 mb-4">
          <h1 className=" text-red-900">Ataques</h1>
          <h1 className=" ">Bônus</h1>
          <h1 className=" ">Dano</h1>
          <h1 className="hidden desktop:block">Crítico</h1>
          <h1 className="hidden desktop:block">Tipo</h1>
          <h1 className="hidden desktop:block">Alcance</h1>
          <h1 className="">Info</h1>
        </div>
        <div className="flex flex-col">
          {personagem.ataques.map((ataque: any) => (
            <div className="grid desktop:grid-cols-7 grid-cols-4 items-center border-b">
              <p className="font-serif">{ataque.nome}</p>
              <p className="font-serif">{ataque.bonus}</p>
              <p className="font-serif">{ataque.dano}</p>
              <p className="font-serif hidden desktop:block">{ataque.critico}</p>
              <p className="font-serif hidden desktop:block">{ataque.tipo}</p>
              <p className="font-serif hidden desktop:block">{ataque.alcance}</p>
              <IconButton
                onClick={() => {
                  const novoataque = {
                    nome: ataque.nome,
                    bonus: ataque.bonus,
                    dano: ataque.dano,
                    critico: ataque.critico,
                    tipo: ataque.tipo,
                    alcance: ataque.alcance,
                    descricao: ataque.descricao,
                  };
                  setAtaqueModal(novoataque);
                  setIsOpen(true);
                }}
                icon={<Eye />}
                aria-label={"VerMais"}
                rounded={"full"}
                colorScheme="red"
                className="transition-all hover:transform hover:scale-110 border-[2px] border-white mx-auto w-fit"
                _hover={{
                  bg: "transparent",
                  border: "2px",
                  borderColor: "red.500",
                  color: "red.500",
                }}
              />
            </div>
          ))}
        </div>
      </div>
      <Modal size={"xl"} onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">{ataqueModal.nome}</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-center">
              <div>
                <h1 className="text-xl">Descrição</h1>
                <Input className="font-serif" contentEditable onChange={
                  (e) => {
                    const changedesc = e.target.value;
                    personagem.ataques.map((ataque: any) => {
                      if (ataque.nome === ataqueModal.nome) {
                        ataque.descricao = changedesc;
                      }
                    });
                  }
                } placeholder={ataqueModal.descricao||"Adicione a descrição"}/>
              </div>
              <div>
                <h1 className="text-xl">Bônus</h1>
                <p className="text-lg font-serif italic">{ataqueModal.bonus}</p>
              </div>
              <div>
                <h1 className="text-xl">Dano</h1>
                <p className="text-lg font-serif italic">{ataqueModal.dano}</p>
              </div>
              <div>
                <h1 className="text-xl">Crítico</h1>
                <p className="text-lg font-serif italic">
                  {ataqueModal.critico}
                </p>
              </div>
              <div>
                <h1 className="text-xl">Tipo</h1>
                <p className="text-lg font-serif italic">{ataqueModal.tipo}</p>
              </div>
              <div>
                <h1 className="text-xl">Alcance</h1>
                <p className="text-lg font-serif italic">
                  {ataqueModal.alcance}
                </p>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <EntendiOnModal onClose={() => setIsOpen(false)} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

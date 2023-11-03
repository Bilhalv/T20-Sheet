import {
  Button,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Info } from "lucide-react";

interface Props {
  pagina: string;
}

export default function InfoModal({ pagina }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <IconButton
        zIndex={40}
        borderRadius={"full"}
        aria-label="Info"
        bg={"transparent"}
        onClick={onOpen}
        _hover={{ bg: "transparent", color: "gray.200", mouse: "pointer" }}
      >
        <Info size={32} />
      </IconButton>
      <Modal
        size={"xl"}
        finalFocusRef={finalRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">{pagina}</ModalHeader>
          <ModalBody>
            {pagina === "Inicio" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Aqui você escolherá o nome e nível do seu personagem.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Nome</h1>
                    <p className="italic font-serif">
                      Deixe sua imaginação fluir na hora de criar o nome do seu
                      personagem, não existe nome ruim.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Nivel</h1>
                    <p className="italic font-serif">
                      Determina o quão experiente é o seu personagem. Para
                      personagens iniciantes recomendasse escolher o nivel 1.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Origens" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    A sua origem revela a sua ocupação antes de ser um
                    aventureiro, o que você fazia até começar sua aventura. Cada
                    origem tem seu beneficio, sendo eles.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Itens</h1>
                    <p className="italic font-serif">
                      Você começa com todos os itens descritos na linha “Itens”
                      de sua origem sem pagar por eles.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Perícias</h1>
                    <p className="italic font-serif">
                      Você se torna treinado na perícia escolhida, representando
                      aprendizado adquirido em sua vida pregressa.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Poderes e poder único</h1>
                    <p className="italic font-serif">
                      Você recebe um poder escolhido, mas ainda precisa cumprir
                      seus pré-requisitos. Cada origem possui um poder único,
                      que só pode ser escolhidos por personagens com a origem
                      relacionada
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Racas" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    A sua raça determina como você nasceu Arton(Mundo de
                    tormenta20). Cada raça tem suas características distintas,
                    como aparencia, atributos e habilidade.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">
                      Modificador de atributos
                    </h1>
                    <p className="italic font-serif">
                      Sua raça modifica seus atributos, podendo aumentá-los
                      acima de 4 ou diminuí-los abaixo de –1.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Habilidades de Raça</h1>
                    <p className="italic font-serif">
                      Cada raça possui habilidades especiais, você possui todas
                      habilidades de sua raça.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Classes" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Uma classe é a forma que você escolheu para enfrentar os
                    perigos do mundo e perseguir seus objetivos seja com armas,
                    perícias ou magias. Cada classe tem caracteriscas distintas,
                    sendo elas;
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Pontos de vida (PV) </h1>
                    <p className="italic font-serif">
                      Representam a saúde e a vitalidade do personagem. Quando
                      seu personagem é ferido, seja por cair de um barranco, ou
                      por tomar uma facada, sofre dano. O dano diminui seus PV.
                      Caso seus PV cheguem a 0, você começa a morrer.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Pontos de mana (PM)</h1>
                    <p className="italic font-serif">
                      Representam a energia e a determinação do personagem. Você
                      gasta PM para usar suas habilidades.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Proficiencias</h1>
                    <p className="italic font-serif">
                      Representam os itens que seu personagem sabe usar com
                      dominio, como armas e armaduras.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Habilidades</h1>
                    <p className="italic font-serif">
                      Com o passar dos niveis, seu personagem ganha novas
                      habilidades, o tornando mais forte.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Poderes</h1>
                    <p className="italic font-serif">
                      Todas as classes possuem uma habilidade “Poder”, que
                      permite que você escolha um poder de uma lista. Alguns
                      poderes têm pré-requisitos. Para escolhê-los e usá-los,
                      você deve possuir todos os requerimentos mencionados. A
                      menos que especificado o contrário, você não pode escolher
                      um mesmo poder mais de uma vez. Você sempre pode
                      substituir um poder de classe por um poder geral.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Atributos" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Todo personagem tem seis atributos, que definem suas
                    competências básicas: Força, Destreza, Constituição,
                    Inteligência, Sabedoria e Carisma. Atributos são medidos
                    numericamente. Um valor 0 representa a média humana, valores
                    1 ou 2 estão acima da média e valores 3 ou 4 representam
                    pessoas extraordinárias. Existem 2 formas de definir estes
                    atributos.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Pontos</h1>
                    <p className="italic font-serif">
                      Você começa com todos os atributos em 0 e recebe 10 pontos
                      para aumentá-los. Cada numero tem um preço que nem sempre
                      são iguais ao numero em si.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Rolagem</h1>
                    <p className="italic font-serif">
                      Alternativamente você pode rolar seus atributos e escolher
                      qual desses numeros irão para qual atributo. Os dados
                      rolados são 4d6 eliminando o menor valor.
                    </p>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p>Error</p>
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

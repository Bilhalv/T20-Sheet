import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
import React from "react";
import { Info } from "lucide-react";
import { EntendiOnModal } from "./Botoes";

interface Props {
  pagina: string;
}

export default function InfoModal({ pagina }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const finalRef = React.useRef(null);
  return (
    <>
      <Tooltip bg={"red.800"} label="Tutorial">
        <IconButton
          zIndex={2}
          borderRadius={"full"}
          aria-label="Info"
          bg={"transparent"}
          onClick={onOpen}
          _hover={{
            bg: "transparent",
            color: "white",
            transform: "scale(1.1)",
          }}
          icon={<Info size={32} />}
        />
      </Tooltip>
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
                      personagens iniciantes recomenda-se escolher o nivel 1.
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
                      substituir um poder de classe por um poder geral. Você
                      poderá escolher seus poderes mais tarde na criação do
                      personagem.
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
                    <Accordion allowToggle>
                      <AccordionItem>
                        <h2>
                          <AccordionButton className="flex justify-between">
                            <p className="font-bold">Tabela de pontos</p>
                            <AccordionIcon />
                          </AccordionButton>
                        </h2>
                        <AccordionPanel>
                          <table className="border border-gray-300 p-2 w-full">
                            <thead>
                              <tr>
                                <th className="border border-gray-300 p-2 w-1/2 text-red-800">
                                  Numero
                                </th>
                                <th className="border border-gray-300 p-2 w-1/2 text-red-800">
                                  Preço
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {[
                                [-1, -1],
                                [0, 0],
                                [1, 1],
                                [2, 2],
                                [3, 4],
                                [4, 7],
                              ].map(([num, price]) => (
                                <tr key={num}>
                                  <td className="border border-gray-300 p-2">
                                    {num}
                                  </td>
                                  <td className="border border-gray-300 p-2">
                                    {price}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
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
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Modificador de raça</h1>
                    <p className="italic font-serif">
                      Ao lado de alguns atributos, você encontrará um numero
                      positivo ou negativo entre -1 e +2, esse é seu modificador
                      de raça, ele é somado ao valor do atributo no final da sua
                      distribuição de pontos ou dados.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Divindades" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Em Arton, você pode trabalhar a serviço dos deuses,
                    cumprindo seus desígnios. Um personagem que serve a uma
                    divindade é chamado devoto e, em troca de seguir certas
                    obrigações, recebe poderes. Ser devoto é uma escolha. Por
                    exemplo, você pode ser um cavaleiro normal, sem obrigações,
                    ou um cavaleiro devoto de Khalmyr, com obrigações e poderes.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Símbolo Sagrado</h1>
                    <p className="italic font-serif">
                      O símbolo do deus, normalmente usado como um medalhão ou
                      na roupa.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Canalizar Energia</h1>
                    <p className="italic font-serif">
                      O tipo de energia que a divindade canaliza. Devotos de
                      alguns deuses podem escolher o tipo de energia (nesse
                      caso, uma vez feita, a escolha não pode ser mudada).
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Arma Preferida</h1>
                    <p className="italic font-serif">
                      A arma típica de devotos do deus, importante para certas
                      habilidades e magias.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Equipamentos" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Espadas afiadas e armaduras resplandecentes. Símbolos
                    sagrados e tomos ancestrais. Ou simplesmente um bom prato de
                    comida! Aventureiros precisam de diversos equipamentos em
                    suas missões.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">
                      Equipamentos iniciais{" "}
                    </h1>
                    <p className="italic font-serif">
                      No início da sua jornada, os heróis recebem
                      equipamentos básicos, como armaduras simples, armas
                      básicas e itens essenciais. Nesta página, você visualizará
                      os itens iniciais e terá a oportunidade de escolher os
                      próximos, dando forma ao destino do seu personagem em
                      Arton.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Magias" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus aperiam, facilis dicta velit maxime pariatur. Sequi
                    harum beatae recusandae ab!
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Lorem, ipsum.</h1>
                    <p className="italic font-serif">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quo dolores deserunt, saepe non placeat aliquid.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Especificações" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Possimus aperiam, facilis dicta velit maxime pariatur. Sequi
                    harum beatae recusandae ab!
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Lorem, ipsum.</h1>
                    <p className="italic font-serif">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Quo dolores deserunt, saepe non placeat aliquid.
                    </p>
                  </div>
                </div>
              </>
            ) : pagina === "Poderes" ? (
              <>
                <div className="text-center flex flex-col gap-3">
                  <p className="italic font-serif mt-[-20px]">
                    Poderes são habilidades únicas disponíveis para todos os
                    personagens que os deixam mais fortes.
                  </p>
                  <hr />
                  <div>
                    <h1 className="text-md font-bold">Poderes de classe</h1>
                    <p className="italic font-serif">
                      Cada classe possui seus próprios poderes exclusivos, e os
                      jogadores podem escolher um deles, contanto que satisfaçam
                      os pré-requisitos.
                    </p>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold">Poderes gerais</h1>
                    <p className="italic font-serif">
                      Poderes gerais são disponiveis para todos os personagens.
                      A seleção de poderes gerais pode ocorrer em vários níveis
                      do personagem, permitindo inclusive a substituição de um
                      poder de classe por um poder geral. Poderes gerais são
                      divididos em 5 categorias:
                      <ul>
                        <li>
                          Combate: Poderes que melhoram características
                          relacionadas a combate.
                        </li>
                        <li>
                          Destino: Poderes que melhoram características não
                          relacionadas a combate.
                        </li>
                        <li>
                          Magia: Poderes ligados a magias e itens mágicos.
                        </li>
                        <li>Tormenta: Poderes ligados à tempestade rubra.</li>
                      </ul>
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
            <EntendiOnModal onClose={onClose} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

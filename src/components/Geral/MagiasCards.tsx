import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  IconButton,
  Tooltip,
} from "@chakra-ui/react";
import { ArrayMagias } from "../pagina 2/Magias";
import { enumTipo } from "../../classes/Construtores/Magia";
import { XCircle } from "lucide-react";

interface MagiasProps {
  magias: ArrayMagias[];
  maximoPrimeiro?: number;
  maximoSegundo?: number;
  selecionadas?: any;
  handleChangeCheckbox?: any;
  tipo: "criar" | "ficha";
  removerMagia?: any;
}

export default function MagiasCards({
  magias,
  maximoPrimeiro = 0,
  maximoSegundo = 0,
  selecionadas,
  handleChangeCheckbox,
  tipo,
  removerMagia,
}: MagiasProps) {
  const imagens = magias.map(
    (magia: ArrayMagias) =>
      "./img/magias/escolas/" +
      magia.escola.toLowerCase().replace(/ç/g, "c").replace(/ã/g, "a") +
      ".svg"
  );
  return (
    <>
      <div className="max-h-[500px] w-full overflow-y-scroll rounded-lg p-2">
        <Accordion allowToggle className="flex flex-col gap-3">
          {magias.map((magia: ArrayMagias, index) => (
            <AccordionItem
              borderRadius={"2xl"}
              className="bg-bgT20 pb-2 px-2 rounded-xl"
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _expanded={{
                      transform: "scale(1.03)",
                    }}
                    display="flex"
                    flexDirection="column"
                    color="white"
                    bg="transparent"
                    fontWeight="bold"
                    fontSize="xl"
                    bgImage="url('/path/to/your/image')"
                    bgPosition="top"
                    _hover={{
                      transform: "scale(1.03)",
                    }}
                    transition="all 0.5s ease"
                    paddingX={5}
                  >
                    <div className="flex justify-between w-full">
                      <p className="text-left my-auto">
                        {tipo === "criar" ? (
                          <>
                            <Checkbox
                              colorScheme="red"
                              isDisabled={
                                ((magia.circulo === 1 && maximoPrimeiro <= 0) ||
                                  (magia.circulo === 2 &&
                                    maximoSegundo <= 0)) &&
                                !selecionadas.includes(magia.nome)
                              }
                              isChecked={selecionadas.includes(magia.nome)}
                              onChange={(e) => {
                                handleChangeCheckbox(
                                  e.target.checked,
                                  magia.nome,
                                  magia.circulo
                                );
                              }}
                              className="mr-2 mt-1"
                              size={"lg"}
                            ></Checkbox>
                            {magia.nome}
                          </>
                        ) : (
                          <>
                              {magia.nome}
                          </>
                        )}
                      </p>
                      <Tooltip
                        label={
                          <p>
                            Circulo: {magia.circulo}
                            <br />
                            Escola: {magia.escola}
                            <br />
                            Classificação: {magia.tipo}
                          </p>
                        }
                        bgColor="red.600"
                      >
                        <div
                          className={`bg-cover flex bg-center ${
                            magia.tipo === enumTipo.arcana
                              ? "bg-arcana"
                              : magia.tipo === enumTipo.divina
                              ? "bg-divina"
                              : "bg-universal"
                          } p-4`}
                        >
                          <img
                            src={imagens[index]}
                            alt={magia.escola}
                            className="w-6 h-6"
                          />
                          <p className="text-center">{magia.circulo}</p>
                        </div>
                      </Tooltip>
                    </div>
                    {isExpanded ? (
                      <p className="flex justify-evenly flex-wrap w-full">
                        <p className="flex text-base">
                          <img
                            src="./img/magias/dados/execucao.svg"
                            className="w-6"
                          />
                          <p className="my-auto">{magia.execucao}</p>
                        </p>
                        <p className="flex text-base">
                          <img
                            src="./img/magias/dados/alcance.svg"
                            className="w-6"
                          />
                          <p className="my-auto">{magia.alcance}</p>
                        </p>
                        <p className="flex text-base">
                          <img
                            src="./img/magias/dados/duracao.svg"
                            className="w-6"
                          />
                          <p className="my-auto">{magia.duracao}</p>
                        </p>
                        <p className="flex text-base">
                          <img
                            src="./img/magias/dados/alvo.svg"
                            className="w-6"
                          />
                          <p className="my-auto">{magia.alvo}</p>
                        </p>
                        {magia.resistencia === "" ? null : (
                          <p className="flex text-base">
                            <img
                              src="./img/magias/dados/resistencia.svg"
                              className="w-6"
                            />
                            <p className="my-auto">{magia.resistencia}</p>
                          </p>
                        )}
                      </p>
                    ) : null}
                  </AccordionButton>
                  <AccordionPanel
                    pb={4}
                    className="font-serif text-justify bg-gray-200 rounded-xl"
                  >
                    &nbsp;&nbsp;&nbsp;{magia.descricao}
                    <br />
                    <Accordion allowToggle>
                      <AccordionItem borderColor={"gray.400"}>
                        <AccordionButton className="flex justify-between font-bold text-xl font-tormenta">
                          <p className="text-left my-auto">Aprimoramentos</p>
                          <AccordionIcon />
                        </AccordionButton>
                        <AccordionPanel pb={4}>
                          {magia.aprimoramentos.map((aprimoramento) => (
                            <>
                              <p className="text-left my-auto">
                                <span className="text-left my-auto text-red-900">
                                  +{aprimoramento.pm_a_mais} PM:{" "}
                                </span>
                                {aprimoramento.descricao}
                              </p>
                            </>
                          ))}
                        </AccordionPanel>
                      </AccordionItem>
                    </Accordion>
                  </AccordionPanel>
                </>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

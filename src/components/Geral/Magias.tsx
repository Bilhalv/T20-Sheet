import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Checkbox,
  Tooltip,
} from "@chakra-ui/react";
import { ArrayMagias } from "../pagina 2/Magias";
import { enumTipo } from "../../classes/Construtores/Magia";
import { useState, useEffect } from "react";
import Confirmar from "./Confirmar";
import useCustomToast from "./Toasted";

interface MagiasProps {
  magias: ArrayMagias[];
  handleChange: (pagina: string) => void;
  next: string;
}

export default function MagiasCards({
  magias,
  handleChange,
  next,
}: MagiasProps) {
  const classe = localStorage.getItem("classe");
  const alt = JSON.parse(localStorage.getItem("alt") || "[]");
  const nivel = Number(localStorage.getItem("lvl"));
  const calculateMaximoPrimeiro = (
    classe: string,
    alt: string,
    nivel: number
  ) => {
    if (classe === "Bardo" || classe === "Druida") {
      return 2 + Math.floor(nivel / 2);
    } else if (classe === "Arcanista" || classe === "Clérigo") {
      if (alt === "Mago") {
        return 4 + (nivel >= 5 ? nivel + 1 : nivel);
      } else if (alt === "Feiticeiro") {
        return 3 + Math.floor((nivel - 1) / 2);
      } else {
        return 3 + nivel - 1;
      }
    }
    return 0;
  };

  const [maximoPrimeiro, setMaximoPrimeiro] = useState<number>(
    calculateMaximoPrimeiro(classe || "", alt, nivel)
  );
  const calculateMaximoSegundo = (
    classe: string,
    alt: string,
    nivel: number
  ) => {
    if (classe === "Bardo" || classe === "Druida") {
      if (nivel >= 6) {
        return Math.floor(nivel / 2) - 1;
      }
    } else if (classe === "Arcanista" || classe === "Clérigo") {
      if (alt === "Mago") {
        if (nivel >= 5) {
          return nivel - 4 + 1;
        }
      } else if (alt === "Feiticeiro") {
        if (nivel >= 5) {
          return Math.floor((nivel - 1) / 2) - 1;
        }
      } else {
        if (nivel >= 5) {
          return nivel - 4;
        }
      }
    }
    return 0;
  };

  const [maximoSegundo, setMaximoSegundo] = useState<number>(
    calculateMaximoSegundo(classe || "", alt, nivel)
  );
  const [selecionadas, setSelecionadas] = useState<string[]>([]);

  const imagens = magias.map(
    (magia: ArrayMagias) =>
      "./img/magias/escolas/" +
      magia.escola.toLowerCase().replace(/ç/g, "c").replace(/ã/g, "a") +
      ".svg"
  );

  const { showCustomToast } = useCustomToast();
  const onSelect = () => {
    if (maximoPrimeiro !== 0 || maximoSegundo !== 0) {
      if (maximoPrimeiro !== 0) {
        showCustomToast({
          title: "Você ainda tem magias para escolher!",
          desc: `Você ainda tem ${maximoPrimeiro} magias de primeiro círculo para escolher!`,
          status: "warning",
        });
      } else {
        showCustomToast({
          title: "Você ainda tem magias para escolher!",
          desc: `Você ainda tem ${maximoPrimeiro} magias de primeiro círculo e ${maximoSegundo} magias de segundo círculo para escolher!`,
          status: "warning",
        });
      }
    } else {
      showCustomToast({
        title: "Magias selecionadas!",
        desc: `Você selecionou ${selecionadas.length} magias!`,
        status: "success",
      });
      localStorage.setItem("magias", JSON.stringify(selecionadas));
      handleChange(next);
    }
  };
  return (
    <>
      <p className="flex flex-col">
        <p>Magias Para escolher:</p>
        <p className="ml-2 italic">
          {`Primeiro: ${maximoPrimeiro}`}
          {` Segundo: ${maximoSegundo}`}
        </p>
      </p>
      <div className="max-h-[500px] w-full overflow-y-scroll rounded-lg p-2">
        <Accordion allowToggle className="flex flex-col gap-3">
          {magias.map((magia: ArrayMagias, index) => (
            <AccordionItem
              border={"solid"}
              borderColor={"red.900"}
              borderRadius={"2xl"}
            >
              {({ isExpanded }) => (
                <>
                  <AccordionButton
                    _expanded={{ bgColor: "red.600", roundedBottom: "none" }}
                    _hover={{ bgColor: "red.600" }}
                    rounded={"xl"}
                    className="flex flex-col text-white bg-red-800 font-bold text-xl"
                  >
                    <div className="flex justify-between w-full">
                      <p className="text-left my-auto">
                        <Checkbox
                          colorScheme="red"
                          isDisabled={
                            ((magia.circulo === 1 && maximoPrimeiro <= 0) ||
                              (magia.circulo === 2 && maximoSegundo <= 0)) &&
                            !selecionadas.includes(magia.nome)
                          }
                          isChecked={selecionadas.includes(magia.nome)}
                          onChange={(e) => {
                            if (e.target.checked) {
                              setSelecionadas([...selecionadas, magia.nome]);
                              setMaximoPrimeiro(maximoPrimeiro - 1);
                              if (magia.circulo === 2) {
                                setMaximoSegundo(maximoSegundo - 1);
                              }
                            } else {
                              setSelecionadas(
                                selecionadas.filter(
                                  (nome) => nome !== magia.nome
                                )
                              );
                              setMaximoPrimeiro(maximoPrimeiro + 1);
                              if (magia.circulo === 2) {
                                setMaximoSegundo(maximoSegundo + 1);
                              }
                            }
                          }}
                          className="mr-2 mt-1"
                        />
                        {magia.nome}
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
                      <p className="desktop:flex gap-4 grid grid-cols-2 desktop:flex-row mr-auto">
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
                  <AccordionPanel pb={4} className="font-serif text-justify">
                    &nbsp;&nbsp;&nbsp;{magia.descricao}
                    <br />
                    <Accordion allowToggle>
                      <AccordionItem>
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
      <Confirmar onSelect={onSelect} />
    </>
  );
}

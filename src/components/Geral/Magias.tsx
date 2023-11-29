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
import { useState } from "react";
import Confirmar from "./Confirmar";
import useCustomToast from "./Toasted";

interface MagiasProps {
  magias: ArrayMagias[];
  handleChange: (pagina: string) => void;
  next: string;
  maximoPrimeiro: number;
  maximoSegundo: number
  setMaximoPrimeiro: any;
  setMaximoSegundo: any;
}

export default function MagiasCards({
  magias,
  handleChange,
  next,
  maximoPrimeiro,
  maximoSegundo,
  setMaximoPrimeiro,
  setMaximoSegundo
}: MagiasProps) {
  
  
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

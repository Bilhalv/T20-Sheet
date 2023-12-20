import {
  IconButton,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  ModalOverlay,
  ModalContent,
  Select,
} from "@chakra-ui/react";
import Ficha from "../../classes/Construtores/Ficha";
import {
  Magia,
  enumTipo,
} from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import MagiasCards from "../Geral/MagiasCards";
import { ArrayMagias } from "../pagina 2/Magias";
import { Plus } from "lucide-react";
import { useState } from "react";
import { ConfirmarOnModal, FecharOnModal } from "../Geral/Botoes";

interface Props {
  personagem: Ficha;
  setPersonagem: (personagem: Ficha) => void;
}

export default function Magias({ personagem, setPersonagem }: Props) {
  const [magias, setMagias] = useState<ArrayMagias[]>(
    TabelaMagias.filter((magia: Magia) => {
      const magiaPersonagem = personagem.magias.find(
        (magiaPersonagem: string) => {
          if (magiaPersonagem.includes("(-1 PM)")) {
            const semExtra = magiaPersonagem.replace("(-1 PM)", "");
            return semExtra === magia.nome;
          } else {
            return magiaPersonagem === magia.nome;
          }
        }
      );
      if (magiaPersonagem) {
        return true;
      }
    })
  );
  const [isOpen, setIsOpen] = useState(false);
  const [magiaSelecionada, setMagiaSelecionada] = useState<ArrayMagias>();
  const handleAddMagia = (magia: ArrayMagias) => {
    setMagias([...magias, magia]);
    setPersonagem({
      ...personagem,
      magias: [...personagem.magias, magia.nome],
    });
  };

  return (
    <>
      {magias.length !== 0 && (
        <section className="border border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white">
          <h1 className="text-center font-bold text-2xl text-red-700">
            Magias
            <IconButton
              icon={<Plus />}
              aria-label="Add"
              bgColor={"red"}
              color={"white"}
              size="sm"
              position={"absolute"}
              right={10}
              borderRadius={"full"}
              border={"2px solid transparent"}
              _hover={{
                color: "red",
                transform: "scale(1.1)",
                zIndex: 1,
                borderColor: "red",
                bg: "transparent",
              }}
              onClick={() => setIsOpen(true)}
            />
          </h1>
          <MagiasCards magias={magias} tipo="ficha" />
          <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
            <ModalOverlay backdropFilter="blur(5px)" />
            <ModalContent>
              <ModalHeader>
                Escolha uma magia para adicionar a ficha
              </ModalHeader>
              <ModalBody>
                <Select
                  placeholder="Escolha uma magia"
                  className="font-tormenta mb-2"
                  onChange={(e) => {
                    const magia = TabelaMagias.find(
                      (magia: Magia) => magia.nome === e.target.value
                    );
                    if (magia) {
                      const magiaArray: ArrayMagias = {
                        nome: magia.nome,
                        descricao: magia.descricao,
                        escola: magia.escola,
                        alcance: magia.alcance,
                        alvo: magia.alvo,
                        duracao: magia.duracao,
                        resistencia: magia.resistencia,
                        aprimoramentos: magia.aprimoramentos,
                        circulo: magia.circulo,
                        execucao: magia.execucao,
                        tipo: magia.tipo,
                      };
                      setMagiaSelecionada(magiaArray);
                    }
                  }}
                >
                  {TabelaMagias.map((magia: Magia) => {
                    const magiaPersonagem = personagem.magias.find(
                      (magiaPersonagem: string) => {
                        if (magiaPersonagem.includes("(-1 PM)")) {
                          const semExtra = magiaPersonagem.replace(
                            "(-1 PM)",
                            ""
                          );
                          return semExtra === magia.nome;
                        } else {
                          return magiaPersonagem === magia.nome;
                        }
                      }
                    );
                    if (!magiaPersonagem) {
                      return (
                        <option
                          key={magia.nome}
                          value={magia.nome}
                          onClick={() => {
                            setMagiaSelecionada(magia);
                          }}
                        >
                          {magia.nome}
                        </option>
                      );
                    }
                  })}
                </Select>
                {magiaSelecionada && (
                  <div className="bg-bgT20 pb-2 px-2 rounded-xl font-tormenta">
                    <div className="flex justify-between w-full text-white">
                      <p className="text-left my-auto">
                        {magiaSelecionada.nome}
                      </p>
                      <div
                        className={`bg-cover flex bg-center ${
                          magiaSelecionada.tipo === enumTipo.arcana
                            ? "bg-arcana"
                            : magiaSelecionada.tipo === enumTipo.divina
                            ? "bg-divina"
                            : "bg-universal"
                        } p-4`}
                      >
                        <img
                          src={
                            "./img/magias/escolas/" +
                            magiaSelecionada.escola
                              .toLowerCase()
                              .replace(/ç/g, "c")
                              .replace(/ã/g, "a") +
                            ".svg"
                          }
                          alt={magiaSelecionada.escola}
                          className="w-6 h-6"
                        />
                        <p className="text-center">
                          {magiaSelecionada.circulo}
                        </p>
                      </div>
                    </div>
                    <p className="flex justify-evenly flex-wrap w-full text-white">
                      <p className="flex text-base">
                        <img
                          src="./img/magias/dados/execucao.svg"
                          className="w-6"
                        />
                        <p className="my-auto">{magiaSelecionada.execucao}</p>
                      </p>
                      <p className="flex text-base">
                        <img
                          src="./img/magias/dados/alcance.svg"
                          className="w-6"
                        />
                        <p className="my-auto">{magiaSelecionada.alcance}</p>
                      </p>
                      <p className="flex text-base">
                        <img
                          src="./img/magias/dados/duracao.svg"
                          className="w-6"
                        />
                        <p className="my-auto">{magiaSelecionada.duracao}</p>
                      </p>
                      <p className="flex text-base">
                        <img
                          src="./img/magias/dados/alvo.svg"
                          className="w-6"
                        />
                        <p className="my-auto">{magiaSelecionada.alvo}</p>
                      </p>
                      {magiaSelecionada.resistencia === "" ? null : (
                        <p className="flex text-base">
                          <img
                            src="./img/magias/dados/resistencia.svg"
                            className="w-6"
                          />
                          <p className="my-auto">
                            {magiaSelecionada.resistencia}
                          </p>
                        </p>
                      )}
                    </p>
                    <p className="font-serif text-justify bg-gray-200 rounded-xl px-3 py-1">
                      &nbsp;&nbsp;&nbsp;{magiaSelecionada.descricao}
                      <br />
                      {magiaSelecionada.aprimoramentos.map((aprimoramento) => (
                        <>
                          <p className="text-left my-auto">
                            <span className="text-left my-auto text-red-900">
                              +{aprimoramento.pm_a_mais} PM:{" "}
                            </span>
                            {aprimoramento.descricao}
                          </p>
                        </>
                      ))}
                    </p>
                  </div>
                )}
              </ModalBody>
              <ModalFooter>
                <FecharOnModal onClose={() => setIsOpen(false)} />
                <ConfirmarOnModal
                  onSelect={() => {
                    if (magiaSelecionada) {
                      handleAddMagia(magiaSelecionada);
                      setIsOpen(false);
                    }
                  }}
                />
              </ModalFooter>
            </ModalContent>
          </Modal>
        </section>
      )}
    </>
  );
}

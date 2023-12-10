import {
  IconButton,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Textarea,
} from "@chakra-ui/react";
import { Eye } from "lucide-react";
import { EntendiOnModal } from "../Geral/Botoes";
import { useState } from "react";
import Ficha, { Ataque, armaFicha } from "../../classes/Construtores/Ficha";
import { TabelasArmasSimles, tabelaArmas } from "../../classes/Tabelas/Itens";
import { RolarDado } from "../Geral/RolarDado";
import useCustomToast from "../Geral/Toasted";

interface Props {
  personagem: Ficha;
  setPersonagem: (personagem: Ficha) => void;
}

export default function Ataques({ personagem, setPersonagem }: Props) {
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
  const [vantagem, setVantagem] = useState<"adv" | "des" | undefined>(
    undefined
  );
  const { showCustomToast } = useCustomToast();
  const [ataques, setAtaques] = useState<Ataque[]>(() => {
    return personagem.mochila.armas.map((arma: armaFicha) => {
      const tabela = [...TabelasArmasSimles, ...tabelaArmas].find((tabela) => {
        return tabela.nome === arma.nome;
      });

      if (!tabela) {
        throw new Error(`No table found for weapon ${arma.nome}`);
      }

      const ataque: Ataque = {
        nome: arma.nome,
        bonus: 0,
        dano: tabela.dano,
        critico: tabela.crit,
        tipo: tabela.tipo,
        alcance: tabela.alcance,
        observacao: tabela.descricao,
        ataque(bonus: number, adv: "adv" | "des" | undefined) {
          if (!tabela || !tabela.dano) {
            throw new Error("tabela or tabela.dano is undefined");
          }
          const duasMaos = tabela.dano.split("/");
          let dano: any;
          if (duasMaos.length > 1) {
            dano = duasMaos[1].split("d");
          } else {
            dano = tabela.dano.split("d");
          }
          if (
            dano.length !== 2 ||
            isNaN(parseInt(dano[0])) ||
            isNaN(parseInt(dano[1]))
          ) {
            throw new Error("tabela.dano is not in the correct format");
          }
          if (this.bonus === undefined || isNaN(this.bonus)) {
            throw new Error("this.bonus is undefined or not a number");
          }
          const critico = tabela.crit.split("/");
          const ameaca = parseInt(critico[0]);
          const multiplicador = parseInt(critico[1].split("x")[1]);
          const rolagem = RolarDado({
            qtd: 1,
            lados: 20,
            rerola: adv,
            mod: bonus,
            ameaca: ameaca,
          });
          const total = rolagem.total;
          const dados = [...rolagem.dados];
          adv !== undefined && dados.push(...rolagem.reroll);
          const danoRolado = RolarDado({
            qtd: rolagem.critou
              ? parseInt(dano[0]) * multiplicador
              : parseInt(dano[0]),
            lados: parseInt(dano[1]),
          });
          const danoRoladoTotal = danoRolado.total;
          const danoRoladoDados = danoRolado.dados;
          showCustomToast({
            title: "Rolando...",
            desc: `Rolando um ataque com ${arma.nome}`,
            status: "loading",
            duration: 1000,
            onCloseComplete: () => {
              showCustomToast({
                title: "Ataque",
                desc: (
                  <p>
                    Você rolou{" "}
                    <b
                      className={
                        rolagem.critou
                          ? "text-green-400"
                          : rolagem.falha
                          ? "text-red-400"
                          : ""
                      }
                    >
                      {total}
                    </b>{" "}
                    ({dados.join(", ")}) no dado de ataque e {danoRoladoTotal} (
                    {dano.join("d")} ={danoRoladoDados.join(", ")}) no dado de
                    dano
                  </p>
                ),
                status: "success",
                duration: 5000,
              });
            },
          });
          return danoRoladoTotal;
        },
      };
      return ataque;
    });
  });
  return (
    <>
      <section className="border border-black rounded-lg shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white">
        <h1 className="text-center font-bold text-2xl text-red-700">Ataques</h1>
        <div className="flex flex-col">
          <Select
            className="font-serif"
            placeholder={undefined}
            onChange={(e) => {
              if (e.target.value === "Normal") {
                setVantagem(undefined);
              } else {
                setVantagem(e.target.value as "adv" | "des" | undefined);
              }
              console.log(e.target.value);
            }}
          >
            <option value={undefined}>Normal</option>
            <option value={"adv"}>Vantagem</option>
            <option value={"des"}>Desvantagem</option>
          </Select>
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
            {ataques.map((ataque: Ataque, index) => (
              <div className="grid desktop:grid-cols-7 grid-cols-4 items-center border-b font-serif">
                <a
                  onClick={() => ataque.ataque(ataque.bonus, vantagem)}
                  className="text-red-900 hover:no-underline underline hover:cursor-pointer"
                >
                  {ataque.nome}
                </a>
                <Input
                  className="text-center"
                  type="number"
                  onChange={(e) => {
                    const bonus = Number(e.target.value);
                    const novoataque: Ataque = {
                      nome: ataque.nome,
                      bonus: bonus,
                      dano: ataque.dano,
                      critico: ataque.critico,
                      tipo: ataque.tipo,
                      alcance: ataque.alcance,
                      observacao: ataque.observacao,
                      ataque: ataque.ataque,
                    };
                    const ataquesnovos: Ataque[] = ataques.map((ataque, i) => {
                      if (i === index) {
                        return novoataque;
                      }
                      return ataque;
                    });
                    setAtaques(ataquesnovos);
                  }}
                  borderColor={"red.600"}
                  defaultValue={ataque.bonus}
                />
                <p>{ataque.dano}</p>
                <p className="hidden desktop:block">{ataque.critico}</p>
                <p className="hidden desktop:block text-sm">{ataque.tipo}</p>
                <p className="hidden desktop:block">{ataque.alcance}</p>
                <IconButton
                  onClick={() => {
                    const novoataque = {
                      nome: ataque.nome,
                      bonus: ataque.bonus,
                      dano: ataque.dano,
                      critico: ataque.critico,
                      tipo: ataque.tipo,
                      alcance: ataque.alcance,
                      descricao: ataque.observacao,
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
      </section>
      <Modal size={"xl"} onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">{ataqueModal.nome}</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-center">
              <div>
                <h1 className="text-xl">Descrição</h1>
                <Textarea
                  className="font-serif text-justify"
                  contentEditable
                  onChange={(e) => {
                    const changedesc = e.target.value;
                    ataques.map((ataque: any) => {
                      if (ataque.nome === ataqueModal.nome) {
                        ataque.descricao = changedesc;
                      }
                    });
                  }}
                  defaultValue={ataqueModal.descricao || "Adicione a descrição"}
                />
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

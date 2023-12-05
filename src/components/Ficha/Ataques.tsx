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
  const handleChangeBonus = (e: Ataque, bonusNovo: number) => {
    const ataquesnovos: Ataque[] = personagem.ataques.map((ataque: Ataque) => {
      if (ataque === e) {
        return {
          nome: ataque.nome,
          alcance: ataque.alcance,
          bonus: bonusNovo,
          critico: ataque.critico,
          dano: ataque.dano,
          tipo: ataque.tipo,
          observacao: ataque.observacao,
          ataque: ataque.ataque,
        };
      } else {
        return ataque;
      }
    });
    setPersonagem({ ...personagem, ataques: ataquesnovos });
  };
  const [vantagem, setVantagem] = useState<"adv" | "des" | undefined>(
    undefined
  );
  const handleChangeVantagem = (vantagem: "adv" | "des" | undefined) => {
    setVantagem(vantagem as "adv" | "des" | undefined);
  };
  const { showCustomToast } = useCustomToast();
  var ataques: Ataque[] = personagem.mochila.armas.map((arma: armaFicha) => {
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
        const rolagem = RolarDado({
          qtd: 1,
          lados: 20,
          rerola: adv,
          mod: bonus,
        });
        const total = rolagem.total;
        const dados = [...rolagem.dados];
        adv !== undefined && dados.push(...rolagem.reroll);
        const danoRolado = RolarDado({
          qtd: parseInt(dano[0]),
          lados: parseInt(dano[1]),
        });
        const danoRoladoTotal = danoRolado.total;
        const danoRoladoDados = danoRolado.dados;
        showCustomToast({
          title: "Rolando...",
          desc: `Rolando um ataque com ${arma.nome}`,
          status: "loading",
          duration: 1000,
        });
        setTimeout(() => {
          showCustomToast({
            title: "Ataque",
            desc: `Você rolou ${total} (${dados.join(
              ", "
            )}) no dado de ataque e ${danoRoladoTotal} (${dano.join(
              "d"
            )} = ${danoRoladoDados.join(", ")}) no dado de dano`,
            status: "success",
          });
        }, 1000);
        // showCustomToast({
        //   title: "Ataque",
        //   desc: `Você rolou ${total} (${dados.join(
        //     ", "
        //   )}) no dado de ataque e ${danoRoladoTotal} (${
        //     dano.join("d")
        //   } = ${danoRoladoDados.join(", ")}) no dado de dano`,
        //   status: "success",
        // });
        return danoRoladoTotal;
      },
    };
    return ataque;
  });
  return (
    <>
      <div className="border border-black rounded-lg flex flex-col shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white">
        <Select
          className="font-serif"
          placeholder={undefined}
          onChange={(e) =>
            handleChangeVantagem(e.target.value as "adv" | "des" | undefined)
          }
        >
          <option value={undefined}>Normal</option>
          <option value="adv">Vantagem</option>
          <option value="des">Desvantagem</option>
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
          {ataques.map((ataque: Ataque) => (
            <div className="grid desktop:grid-cols-7 grid-cols-4 items-center border-b font-serif">
              <a
                onClick={() => ataque.ataque(ataque.bonus, vantagem)}
                className="text-red-900 hover:no-underline underline hover:cursor-pointer"
              >
                {ataque.nome}
              </a>
              <input
                type="number"
                onChange={(e) =>
                  handleChangeBonus(ataque, Number(e.target.value))
                }
                className="text-center rounded-md border border-red-800 w-16 mx-auto"
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
      <Modal size={"xl"} onClose={() => setIsOpen(false)} isOpen={isOpen}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">{ataqueModal.nome}</ModalHeader>
          <ModalBody>
            <div className="flex flex-col gap-2 text-center">
              <div>
                <h1 className="text-xl">Descrição</h1>
                <Input
                  className="font-serif"
                  contentEditable
                  onChange={(e) => {
                    const changedesc = e.target.value;
                    personagem.ataques.map((ataque: any) => {
                      if (ataque.nome === ataqueModal.nome) {
                        ataque.descricao = changedesc;
                      }
                    });
                  }}
                  placeholder={ataqueModal.descricao || "Adicione a descrição"}
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

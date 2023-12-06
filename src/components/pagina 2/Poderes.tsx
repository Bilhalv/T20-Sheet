import {
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
  IconButton,
  Badge,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Input,
  Select,
} from "@chakra-ui/react";
import { Eye, Filter } from "lucide-react";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { useState } from "react";
import { TipoPoder } from "../../classes/Construtores/Poder";
import { ConfirmarOnModal, FecharOnModal } from "../Geral/Botoes";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { PreRequisitos } from "../Geral/Prerequisitos";
import { useEffect } from "react";
import useCustomToast from "../Geral/Toasted";
import Confirmar from "../Geral/Confirmar";
import addFichaToLocalStorage from "../Geral/addFicha";
import { useNavigate } from "react-router-dom";

interface PoderesProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Poderes({ handleChange, next }: PoderesProps) {
  const totalPoderes = TabelaPoderes.filter(
    (poder) => poder.tipo !== TipoPoder.origem
  );
  TabelaClasses.forEach((classe) => {
    if (classe.nome === localStorage.getItem("classe")) {
      classe.poderesunicos.forEach((poder) => {
        totalPoderes.push(poder);
      });
    }
  });
  const { isOpen, onOpen, onClose } = useDisclosure();
  const nivel = Number(localStorage.getItem("lvl"));
  const [limite, setLimite] = useState(nivel);
  const [poderesSelecionados, setPoderesSelecionados] = useState<string[]>(
    JSON.parse(localStorage.getItem("poderes") || "[]") as string[]
  );
  interface ArrayPoderes {
    nome: string;
    descricao: string;
    requisito: string[];
    tipo: TipoPoder;
    selecionado: boolean;
  }
  const [array, setArray] = useState<ArrayPoderes[]>(() => {
    const newArray = totalPoderes.map((poder) => {
      const selected = poderesSelecionados.includes(poder.nome);
      return {
        nome: poder.nome,
        descricao: poder.descricao,
        requisito: poder.requisitos_descricao,
        tipo: poder.tipo,
        selecionado: selected,
      };
    });
    return newArray;
  });
  function renderSwitch(tipo: TipoPoder) {
    switch (tipo) {
      case TipoPoder.combate:
        return "blue";
      case TipoPoder.classe:
        return "purple";
      case TipoPoder.tormenta:
        return "red";
      case TipoPoder.destino:
        return;
      default:
        return "green";
    }
  }
  interface Filter {
    nome: string;
    requisito: boolean;
    tipo: string;
  }
  const [filters, setFilters] = useState<Filter>({
    nome: "",
    requisito: false,
    tipo: "default",
  });
  const handleFilter = () => {
    let filtered = totalPoderes.filter((poder) => {
      return (
        (filters.nome === "" ||
          poder.nome.toLowerCase().includes(filters.nome.toLowerCase())) &&
        (!filters.requisito ||
          !poderesIndisponiveis.some(
            (poderIndisponivel) => poder.nome === poderIndisponivel.nome
          )) &&
        (filters.tipo === "default" || poder.tipo === filters.tipo)
      );
    });
    let secondArray: ArrayPoderes[] = [];
    filtered.forEach((poder) => {
      let selected = poderesSelecionados.includes(poder.nome);
      secondArray.push({
        nome: poder.nome,
        descricao: poder.descricao,
        requisito: poder.requisitos_descricao,
        tipo: poder.tipo,
        selecionado: selected,
      });
    });
    setArray(secondArray);
    onClose();
  };
  useEffect(() => {
    setPoderesSelecionados(JSON.parse(localStorage.getItem("poderes") ?? "[]"));
  }, [setPoderesSelecionados]);
  const poderesIndisponiveis = PreRequisitos(totalPoderes);

  const { showCustomToast } = useCustomToast();
  const navigate = useNavigate();
  const handleSelect = () => {
    if (
      poderesSelecionados.length -
        JSON.parse(localStorage.getItem("poderes") ?? "[]").length <
      limite
    ) {
      showCustomToast({
        title: "Poderes",
        desc: `Você deve escolher mais ${
          limite - poderesSelecionados.length
        } poderes.`,
        status: "error",
      });
      return;
    } else {
      let temIndisponivel = false;
      poderesSelecionados.forEach((poder) => {
        if (
          poderesIndisponiveis.some(
            (poderIndisponivel) => poderIndisponivel.nome === poder
          )
        ) {
          showCustomToast({
            title: "Poderes",
            desc: `Você não pode escolher o poder ${poder} pois não possui os pré-requisitos.`,
            status: "error",
          });
          setPoderesSelecionados(
            poderesSelecionados.filter((poder1) => poder1 !== poder)
          );
          temIndisponivel = true;
          return;
        }
      });
      if (temIndisponivel) return;
      localStorage.setItem("poderes", JSON.stringify(poderesSelecionados));
      const temCerteza = window.confirm(
        "Você tem certeza que deseja continuar?"
      );
      if (!temCerteza) return;
      showCustomToast({
        title: "Poderes",
        desc: "Poderes escolhidos com sucesso.",
        status: "success",
      });
      const poderesAntigos = JSON.parse(
        localStorage.getItem("poderes") ?? "[]"
      );
      poderesAntigos.push(...poderesSelecionados);
      localStorage.setItem("poderes", JSON.stringify(poderesAntigos));
      addFichaToLocalStorage();
      navigate("/personagens");
    }
  };
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha seus Poderes
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <IconButton
            aria-label="filter"
            rounded={"full"}
            colorScheme="red"
            className="transition-all hover:transform hover:scale-110 border-[2px] border-white ml-3"
            position={"absolute"}
            _hover={{
              bg: "transparent",
              border: "2px",
              borderColor: "red.500",
              color: "red.500",
            }}
            icon={<Filter />}
            onClick={onOpen}
          />
          <div className="px-4 flex font-bold pb-1 border-x border-gray-400 border-opacity-70 py-4">
            <h1 className="w-3/5 text-center border-r border-gray-400 border-opacity-70">
              Poder
            </h1>
            <h1 className="w-1/5 text-center border-r border-gray-400 border-opacity-70">
              Tipo
            </h1>
            <h1 className="w-1/5 text-center text-sm">Selecionar</h1>
          </div>
          <div className="max-h-[500px] w-full overflow-y-scroll rounded-lg bg-gray-200">
            <div className="flex flex-col px-4 pt-2">
              {array.map((poder, index) => {
                return (
                  <div
                    key={index}
                    className="flex border-b border-gray-300 items-center py-2 gap-2"
                  >
                    <div className="w-3/5 flex justify-between items-center gap-1">
                      <div className="w-fit">
                        <Popover>
                          <PopoverTrigger>
                            <IconButton
                              icon={<Eye />}
                              aria-label={poder.nome + "-VerMais"}
                              rounded={"full"}
                              colorScheme="red"
                              className="transition-all hover:transform hover:scale-110 border-[2px] border-white ml-3"
                              _hover={{
                                bg: "transparent",
                                border: "2px",
                                borderColor: "red.500",
                                color: "red.500",
                              }}
                            />
                          </PopoverTrigger>
                          <PopoverContent color="red.900">
                            <PopoverArrow />
                            <PopoverCloseButton />
                            <PopoverHeader textAlign={"center"}>
                              {poder.nome}
                            </PopoverHeader>
                            <PopoverBody className="font-serif text-justify">
                              <p>&nbsp;&nbsp;&nbsp;{poder.descricao}</p>
                              {poder.requisito.length > 0 && (
                                <i className="text-sm">
                                  Pré-requisito: {poder.requisito.join(", ")}
                                </i>
                              )}
                            </PopoverBody>
                          </PopoverContent>
                        </Popover>
                      </div>
                      <p className="text-center w-full">{poder.nome}</p>
                    </div>
                    <p className="w-1/5 text-center">
                      <Badge
                        colorScheme={renderSwitch(poder.tipo)}
                        variant="solid"
                        rounded={"lg"}
                        p={1}
                        fontSize={"md"}
                      >
                        {poder.tipo}
                      </Badge>
                    </p>
                    <p className="w-1/5 text-center">
                      <Checkbox
                        checked={poder.selecionado}
                        isDisabled={
                          (poderesSelecionados.length -
                            JSON.parse(localStorage.getItem("poderes") ?? "[]")
                              .length >
                            limite &&
                            !poderesSelecionados.includes(poder.nome)) ||
                          (poderesIndisponiveis.some(
                            (poderIndisponivel) =>
                              poder.nome === poderIndisponivel.nome
                          ) &&
                            !poder.selecionado)
                        }
                        onChange={(e) => {
                          const isChecked = e.target.checked;
                          let updatedPoderesSelecionados;

                          if (isChecked) {
                            updatedPoderesSelecionados = [
                              ...poderesSelecionados,
                              poder.nome,
                            ];
                          } else {
                            updatedPoderesSelecionados =
                              poderesSelecionados.filter(
                                (poder1) => poder1 !== poder.nome
                              );
                          }

                          setPoderesSelecionados(updatedPoderesSelecionados);
                        }}
                        defaultChecked={poder.selecionado ?? false}
                        colorScheme="red"
                        className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                      />
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
          <Confirmar onSelect={handleSelect} />
        </section>
      </div>
      <Modal onClose={onClose} isOpen={isOpen}>
        <ModalOverlay backdropFilter="blur(5px)" />
        <ModalContent className="font-tormenta">
          <ModalHeader className="text-center">
            Escolha seus filtros
          </ModalHeader>
          <ModalBody className="flex flex-col gap-4 items-center">
            <div className="flex">
              <Input
                onChange={(e) => (filters.nome = e.target.value)}
                className="mr-2"
                placeholder="Nome do poder"
                defaultValue={filters.nome}
              />
              <Select
                onChange={(e) => (filters.tipo = e.target.value as string)}
                defaultValue={filters.tipo}
              >
                <option value="default">Todos os tipos</option>
                {Object.keys(TipoPoder)
                  .filter(
                    (tipo) =>
                      tipo !== TipoPoder.origem && tipo !== TipoPoder.concedidos
                  )
                  .map((tipo) => (
                    <option key={tipo} value={tipo}>
                      {tipo}
                    </option>
                  ))}
              </Select>
            </div>
            <Checkbox
              defaultChecked={filters.requisito}
              onChange={(e) => (filters.requisito = e.target.checked)}
            >
              Mostrar apenas poderes disponíveis
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <FecharOnModal onClose={onClose} />
            <ConfirmarOnModal onSelect={handleFilter} />
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

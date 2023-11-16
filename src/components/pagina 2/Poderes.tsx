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
import { Filter } from "lucide-react";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { useState } from "react";
import { TipoPoder } from "../../classes/Construtores/Poder";
import { ConfirmarOnModal, FecharOnModal } from "../Geral/Botoes";

interface PoderesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Poderes({ setPagina, next }: PoderesProps) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [limite, setLimite] = useState<number>(2);
  const [poderesSelecionados, setPoderesSelecionados] = useState<string[]>(
    localStorage.getItem("poderes")?.split(",") ?? []
  );
  interface ArrayPoderes {
    nome: string;
    descricao: string;
    requisito: string[];
    tipo: TipoPoder;
    selecionado: boolean;
  }
  const [array, setArray] = useState<ArrayPoderes[]>(() => {
    const newArray = TabelaPoderes.map((poder) => {
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
        return "green";
      case TipoPoder.classe:
        return "blue";
      case TipoPoder.tormenta:
        return "red";
      case TipoPoder.destino:
        return "yellow";
      default:
        return "purple";
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
    let filtered = TabelaPoderes.filter((poder) => {
      return (
        (filters.nome === "" ||
          poder.nome.toLowerCase().includes(filters.nome.toLowerCase())) &&
        (!filters.requisito || poder.requisitos_descricao.length === 0) &&
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
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-4 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
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
            <h1 className="w-1/5 text-center">Selecionar</h1>
          </div>
          <div className="max-h-[500px] w-full overflow-y-scroll rounded-lg bg-gray-200">
            <div className="flex flex-col px-4 pt-2">
              {array.map((poder) => (
                <div className="flex border-b border-gray-300 items-center py-2 gap-2">
                  <div className="w-3/5 flex justify-between items-center">
                    <p className="w-2/3">{poder.nome}</p>
                    <div className="w-1/3">
                      <Popover>
                        <PopoverTrigger>
                          <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500">
                            Ver descrição
                          </button>
                        </PopoverTrigger>
                        <PopoverContent color="red.900">
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader textAlign={"center"}>
                            {poder.nome}
                          </PopoverHeader>
                          <PopoverBody className="font-serif text-justify">
                            <p>&nbsp;&nbsp;&nbsp;{poder.descricao}</p>
                            <i className="text-sm">
                              {" "}
                              Pré-requisito: {poder.requisito.join(", ")}
                            </i>
                          </PopoverBody>
                        </PopoverContent>
                      </Popover>
                    </div>
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
                      isDisabled={
                        poderesSelecionados.length > limite &&
                        !poder.selecionado
                      }
                      onChange={(e) => {
                        poder.selecionado = e.target.checked;
                        if (poder.selecionado) {
                          localStorage.setItem(
                            "poderes",
                            [...poderesSelecionados, poder.nome].join(",")
                          );
                          setPoderesSelecionados([
                            ...poderesSelecionados,
                            poder.nome,
                          ]);
                        } else {
                          setPoderesSelecionados(
                            poderesSelecionados.filter(
                              (poder1) => poder1 !== poder.nome
                            )
                          );
                          localStorage.setItem(
                            "poderes",
                            poderesSelecionados
                              .filter((poder1) => poder1 !== poder.nome)
                              .join(",")
                          );
                        }
                      }}
                      defaultChecked={poder.selecionado ?? false}
                      colorScheme="red"
                      className="border-red-500 rounded-lg transition-all hover:transform hover:scale-110"
                    />
                  </p>
                </div>
              ))}
            </div>
          </div>
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
                {Object.keys(TipoPoder).map((tipo) => (
                  <option value={tipo}>{tipo}</option>
                ))}
              </Select>
            </div>
            <Checkbox
              defaultChecked={filters.requisito}
              onChange={(e) => (filters.requisito = e.target.checked)}
            >
              Poderes com pré-requisitos
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

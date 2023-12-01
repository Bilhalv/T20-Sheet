import { Button } from "@chakra-ui/react";

interface Props {
  onChange: any;
  tabela: any[];
  selected: string;
  isDisabled?: boolean;
}

export default function Botoes({ onChange, tabela, selected, isDisabled }: Props) {
  return (
    <>
      {tabela.map((tabelaItem) => (
        <Button
          isDisabled={isDisabled}
          onClick={onChange}
          className={`p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-80 mb-2 hover:shadow-2xl hover:transform hover:scale-110`}
          key={tabelaItem.nome}
          value={tabelaItem.nome}
          bg={"gray.300"}
          color={"black"}
          _hover={{ bg: "gray.400" }}
          width="auto"
          whiteSpace="normal"
          wordBreak="break-word"
          opacity={0.8}
          boxShadow="lg"
          mb={2}
          _active={{ bg: "darkred", color: "red.200" }}
          isActive={tabelaItem.nome == selected}
        >
          {tabelaItem.nome}
        </Button>
      ))}
    </>
  );
}

interface ConfirmarProps {
  onSelect: any;
}

export function ConfirmarOnModal({ onSelect }: ConfirmarProps) {
  return (
    <Button
      _hover={{ bgColor: "red.400" }}
      bgColor={"red.600"}
      textColor={"white"}
      mx={"auto"}
      onClick={onSelect}
    >
      Confirmar
    </Button>
  );
}
interface EntendiProps {
  onClose: any;
}

export function EntendiOnModal({ onClose }: EntendiProps) {
  return (
    <Button
      _hover={{ bgColor: "red.400" }}
      bgColor={"red.600"}
      textColor={"white"}
      mx={"auto"}
      onClick={onClose}
    >
      Entendi
    </Button>
  );
}

interface FecharProps {
  onClose: any;
}

export function FecharOnModal({ onClose }: FecharProps) {
  return (
    <Button colorScheme="red" variant={"outline"} mx={"auto"} onClick={onClose}>
      Fechar
    </Button>
  );
}

import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  onChange: any;
  tabela: any[];
  selected: string;
}

export default function Botoes({ onChange, tabela, selected }: Props) {
  return (
    <>
      {tabela.map((tabelaItem) => (
        <Button
          onClick={onChange}
          className={`p-2 rounded hover:bg-gray-400 transition-all ease-in-out shadow-lg bg-opacity-80 mb-2`}
          key={tabelaItem.nome}
          value={tabelaItem.nome}
          bg={tabelaItem.nome == selected ? "red.300" : "gray.300"}
          color={tabelaItem.nome == selected ? "red.900" : "black"}
          _hover={{ bg: "gray.400" }}
          width="auto"
          whiteSpace="normal"
          wordBreak="break-word"
          opacity={0.8}
          boxShadow="lg"
          mb={2}
          isActive={tabelaItem.nome == selected}
          _active={{ bg: "red.300", color: "red.900" }}
        >
          {tabelaItem.nome}
        </Button>
      ))}
    </>
  );
}

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
          _active={{ bg: "red.300", color: "red.900" }}
          isActive={tabelaItem.nome == selected}
        >
          {tabelaItem.nome}
        </Button>
      ))}
    </>
  );
}

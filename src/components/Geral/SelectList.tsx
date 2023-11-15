import { Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  tabela: any[];
  selected: string;
  placeholder: string;
  isDisabled?: boolean;
  filter?: string[];
}

export default function SelectList({
  onChange,
  tabela,
  selected,
  placeholder,
  isDisabled,
  filter,
}: Props) {
  if (filter === undefined) {
    filter = tabela.map((tabelaItem) => tabelaItem.nome);
  }
  return (
    <>
      <Select
        placeholder={placeholder}
        onChange={onChange}
        isDisabled={isDisabled}
      >
        {tabela.map((tabelaItem) =>
            (filter ?? []).includes(tabelaItem.nome) ? (
            <option
              selected={tabelaItem.nome === selected}
              key={tabelaItem.nome}
              value={tabelaItem.nome}
            >
              {tabelaItem.nome}
            </option>
          ) : null
        )}
      </Select>
    </>
  );
}

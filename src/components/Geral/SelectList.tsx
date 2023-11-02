import { Select } from "@chakra-ui/react";
import React from "react";

interface Props {
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
  tabela: any[];
  selected: string;
  placeholder: string;
}

export default function SelectList({ onChange, tabela, selected, placeholder }: Props) {
  return (
    <>
      <Select placeholder={placeholder} onChange={onChange}>
        {tabela.map((tabelaItem) => (
          <option
            selected={tabelaItem.nome == selected ?? ""}
            key={tabelaItem.nome}
            value={tabelaItem.nome}
          >
            {tabelaItem.nome}
          </option>
        ))}
      </Select>
    </>
  );
}

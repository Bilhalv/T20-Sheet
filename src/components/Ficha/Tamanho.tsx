import { Select } from "@chakra-ui/react";
import Ficha from "../../classes/Construtores/Ficha";
import { useState } from "react";

interface Props {
  personagem: Ficha;
}

export default function Tamanho({ personagem }: Props) {
  var tamanhoDefault = "Médio";
  const pequenos = ["Anão", "Goblin", "Hynne"];
  if (pequenos.includes(personagem.raca)) {
    tamanhoDefault = "Pequeno";
  } else if (personagem.raca === "Sílfide") {
    tamanhoDefault = "Minúsculo";
  }
  const tamanhoporvalor = [
    { valor: "+5/-5", tamanho: "Minúsculo" },
    { valor: "+2/-2", tamanho: "Pequeno" },
    { valor: "0/0", tamanho: "Médio" },
    { valor: "-2/+2", tamanho: "Grande" },
    { valor: "-5/+5", tamanho: "Enorme" },
    { valor: "-10/+10", tamanho: "Colossal" },
  ];
  const [valor, setValor] = useState(
    tamanhoporvalor.find((e) => e.tamanho === tamanhoDefault)?.valor || "0/0"
  );
  return (
    <>
      <div className="bg-gray-200 rounded-xl border border-black flex flex-col p-1">
        <h1 className="text-center text-red-900 text-xl">Tamanho</h1>
        <Select
          size="xs"
          defaultValue={tamanhoDefault}
          className="text-red-600"
          onChange={(x) => {
            setValor(
              tamanhoporvalor.find((e) => e.tamanho === x.target.value)
                ?.valor || "0/0"
            );
          }}
        >
          <option value="Minúsculo">Minúsculo</option>
          <option value="Pequeno">Pequeno</option>
          <option value="Médio">Médio</option>
          <option value="Grande">Grande</option>
          <option value="Enorme">Enorme</option>
          <option value="Colossal">Colossal</option>
        </Select>
        <div className="flex flex-col justify-evenly w-full">
          <div className=" flex p-1 text-center text-3xl text-red-900 drop-shadow-2xl text-md mb-3 mx-auto">
            <h1>{valor}</h1>
          </div>
        </div>
      </div>
    </>
  );
}
// Minúsculo: +5/–5
// Pequeno: +2/–2
// Médio: 0
// Grande: –2/+2
// Enorme: –5/+5
// Colossal: –10/+10

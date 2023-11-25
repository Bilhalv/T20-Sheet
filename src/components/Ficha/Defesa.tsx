import { useEffect, useState } from "react";
import { tabelaArmaduras } from "../../classes/Tabelas/Itens";
import { Armadura } from "../../classes/Construtores/Armadura";
import {
  Checkbox,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
} from "@chakra-ui/react";

interface Props {
  personagem: any;
}

export default function Defesa({ personagem }: Props) {
  const armaduras = tabelaArmaduras.filter((armadura) =>
    personagem.mochila.some((item: any) => item.nome === armadura.nome)
  );
  const [armadurasEquipadas, setArmadurasEquipadas] = useState<Armadura[]>([
    ...armaduras,
  ]);
  const totalPenalidade = armadurasEquipadas.reduce(
    (acc, armadura) => acc + armadura.penalidade,
    0
  );
  const totalArmadura = armadurasEquipadas.reduce(
    (acc, armadura) =>
      armadura.tipo === "Armadura" ? acc + armadura.defesa : acc,
    0
  );
  const totalEscudo = armadurasEquipadas.reduce(
    (acc, armadura) =>
      armadura.tipo === "Escudo" ? acc + armadura.defesa : acc,
    0
  );
  const [totalOutros, setTotalOutros] = useState(0);
  const [atributo, setAtributo] = useState(personagem.atributos.destreza);
  return (
    <>
      <div className="border border-black rounded-lg flex flex-col shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80 text-center bg-white">
        <div className="border border-black m-2 rounded-lg">
          <section>
            <div>
              <div className="absolute mt-[-20px] w-1/4 ml-[-20px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="90"
                  height="90"
                  viewBox="0 0 72 72"
                  fill="none"
                >
                  <g filter="url(#filter0_d_400_463)">
                    <path
                      d="M33.1625 0L56.6119 9.66549L66.3249 33L56.6119 56.3346L33.1625 66.0001L9.71306 56.3346L0 33L9.71306 9.66549L33.1625 0Z"
                      fill="white"
                    />
                    <path
                      d="M9.90407 9.85716L33.1625 0.270405L56.4209 9.85716L66.0541 33L56.4209 56.1429L33.1625 65.7297L9.90407 56.1429L0.270794 33L9.90407 9.85716Z"
                      stroke="black"
                      stroke-width="0.5"
                    />
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_400_463"
                      x="0"
                      y="0"
                      width="71.3242"
                      height="72.0001"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dx="3" dy="4" />
                      <feGaussianBlur stdDeviation="1" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_400_463"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_400_463"
                        result="shape"
                      />
                    </filter>
                  </defs>
                  <text
                    x="50%"
                    y="50%"
                    textAnchor="middle"
                    fill="black"
                    dominantBaseline="middle"
                  >
                    <tspan
                      dy="-15px"
                      style={{ fill: "#7A0000", fontSize: "12px" }}
                    >
                      Defesa
                    </tspan>
                    <tspan x="50%" dy="1em" style={{ fontSize: "20px" }}>
                      {totalArmadura +
                        totalEscudo +
                        totalOutros +
                        10 +
                        atributo}
                    </tspan>
                  </text>
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  viewBox="0 0 25 25"
                  fill="none"
                  className="mt-[-65px] ml-[70px]"
                >
                  <path
                    d="M8.14371 1.25531C10.4342 0.47677 12.9178 0.476771 15.2083 1.25531C17.4306 2.01065 19.3522 3.45848 20.6911 5.38628L20.8353 5.59398L21.0407 5.45137L20.8353 5.59398C22.2015 7.56095 22.9336 9.89855 22.9336 12.2934V12.603C22.9336 14.9978 22.2015 17.3354 20.8353 19.3024L20.6911 19.5101C19.3522 21.4379 17.4306 22.8857 15.2083 23.6411C12.9178 24.4196 10.4342 24.4196 8.14371 23.6411C5.92142 22.8857 3.9998 21.4379 2.66089 19.5101L2.51663 19.3024C1.15052 17.3354 0.418379 14.9978 0.418379 12.603V12.2934C0.418379 9.89855 1.15051 7.56095 2.51663 5.59398L2.66089 5.38628C3.9998 3.45848 5.92142 2.01065 8.14371 1.25531Z"
                    fill="white"
                    stroke="black"
                    stroke-width="0.5"
                  />
                  <text>
                    <tspan
                      x="50%"
                      y="50%"
                      textAnchor="middle"
                      fill="black"
                      dominantBaseline="middle"
                      style={{ fontSize: "12px" }}
                    >
                      +10
                    </tspan>
                  </text>
                </svg>
              </div>
              <div className="grid grid-cols-4 w-3/4 ml-auto">
                <h1>Armadura</h1>
                <h1>Escudo</h1>
                <h1>Outros</h1>
                <h1>Atributo</h1>
                <h1>{totalArmadura}</h1>
                <h1>{totalEscudo}</h1>
                <NumberInput
                  onChange={(value) => (setTotalOutros(Number(value)))}
                  defaultValue={totalOutros}
                  rounded={"full"}
                  className="w-16 mx-auto"
                >
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <Select
                  defaultValue={personagem.atributos.destreza}
                  onChange={(e) => {
                    setAtributo(Number(e.target.value));
                  }}
                >
                  <option value={personagem.atributos.forca}>
                    For ({personagem.atributos.forca})
                  </option>
                  <option value={personagem.atributos.destreza}>
                    Des ({personagem.atributos.destreza})
                  </option>
                  <option value={personagem.atributos.constituicao}>
                    Con ({personagem.atributos.constituicao})
                  </option>
                  <option value={personagem.atributos.inteligencia}>
                    Int ({personagem.atributos.inteligencia})
                  </option>
                  <option value={personagem.atributos.sabedoria}>
                    Sab ({personagem.atributos.sabedoria})
                  </option>
                  <option value={personagem.atributos.carisma}>
                    Car ({personagem.atributos.carisma})
                  </option>
                </Select>
              </div>
            </div>
            <div>
              <h1>Penalidade total de Armadura: {totalPenalidade}</h1>
            </div>
          </section>
          <section className="flex flex-col border-t border-t-black">
            <div className="grid grid-cols-3 text-sm border-b">
              <h1>Nome</h1>
              <h1>Defesa</h1>
              <h1>Penalidade</h1>
            </div>
            {armaduras.map((armadura) => (
              <div className="grid grid-cols-3 border-b">
                <h1 className="flex gap-2 ml-2">
                  <Checkbox
                    isChecked={armadurasEquipadas.includes(armadura)}
                    onChange={(e) => {
                      const novasArmaduras = [...armadurasEquipadas];
                      if (e.target.checked) {
                        novasArmaduras.push(armadura);
                      } else {
                        novasArmaduras.splice(
                          novasArmaduras.indexOf(armadura),
                          1
                        );
                      }
                      setArmadurasEquipadas(novasArmaduras);
                    }}
                  />
                  {armadura.nome}
                </h1>
                <h1>{armadura.defesa}</h1>
                <h1>{armadura.penalidade}</h1>
              </div>
            ))}
          </section>
        </div>
      </div>
    </>
  );
}

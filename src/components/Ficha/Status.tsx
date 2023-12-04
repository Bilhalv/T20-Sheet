import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";
import Ficha from "../../classes/Construtores/Ficha";

interface Props {
  personagem: Ficha;
  setPersonagem: (personagem: Ficha) => void;
}

export default function Status({ personagem, setPersonagem }: Props) {
  const handleChange = (value: number, type: string) => {
    let pm = personagem.pm;
    let pv = personagem.pv;
    let personagemAtualizado = personagem;
    if (type === "pm") {
      pm = value;
    } else {
      pv = value;
    }
    personagemAtualizado = {
      ...personagemAtualizado,
      pv: pv,
      pm: pm,
    };
    setPersonagem(personagemAtualizado);
  };
  return (
    <>
      <div className="flex justify-center w-fit mx-auto gap-6">
        <div className="flex">
          <div className="bg-white rounded-2xl border border-black flex flex-col gap-2 px-6 z-20">
            <h1 className="font-bold text-center text-lg">PV</h1>
            <p className="font-bold text-center text-2xl">{personagem.pvMax}</p>
            <p className="text-center font-serif text-xs">Máx.</p>
          </div>
          <div className="bg-white my-auto rounded-r-2xl border-l-transparent h-fit px-2 border border-black pl-6 ml-[-15px] z-10 flex flex-col gap-1">
            <h1 className="text-center text-sm">Pontos de Vida</h1>
            <NumberInput
              rounded={"full"}
              className="w-20 mx-auto"
              size={"sm"}
              defaultValue={personagem.pv}
              onChange={(e) => handleChange(Number(e), "pv")}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <p className="text-center font-serif text-xs">Atuais</p>
          </div>
        </div>
        <div className="flex mr-8">
          <div className="bg-white rounded-2xl border border-black flex flex-col gap-2 px-6 z-20">
            <h1 className="font-bold text-center text-lg">PM</h1>
            <p className="font-bold text-center text-2xl">{personagem.pmMax}</p>
            <p className="text-center font-serif text-xs">Máx.</p>
          </div>
          <div className="bg-white my-auto rounded-r-2xl border-l-transparent h-fit px-2 border border-black pl-6 ml-[-15px] z-10 flex flex-col gap-1">
            <h1 className="text-center text-sm">Pontos de Mana</h1>
            <NumberInput
              rounded={"full"}
              className="w-20 mx-auto"
              size={"sm"}
              defaultValue={personagem.pm}
              onChange={(e) => handleChange(Number(e), "pm")}
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <p className="text-center font-serif text-xs">Atuais</p>
          </div>
        </div>
        <p className="absolute z-0 bg-red-600 w-3/5 desktop:w-[320px] ml-20 mt-4 rounded-2xl h-16">
           
        </p>
      </div>
    </>
  );
}

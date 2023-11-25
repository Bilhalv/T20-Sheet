import {
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
} from "@chakra-ui/react";

interface Props {
  personagem: any;
}

export default function Status({ personagem }: Props) {
  return (
    <>
      <div className="flex justify-between w-3/4 mx-auto">
        <div className="flex">
          <div className="bg-white rounded-2xl border border-black flex flex-col gap-2 px-6 z-20">
            <h1 className="font-bold text-center text-lg">PV</h1>
            <p className="font-bold text-center text-2xl">
              {personagem.status.pvMax}
            </p>
            <p className="text-center font-serif text-xs">Máx.</p>
          </div>
          <div className="bg-white my-auto rounded-r-2xl border-l-transparent h-fit px-2 border border-black pl-6 ml-[-15px] z-10 flex flex-col gap-1">
            <h1 className="text-center text-sm">Pontos de Vida</h1>
            <NumberInput
              rounded={"full"}
              className="w-20 mx-auto"
              size={"sm"}
              defaultValue={personagem.status.pv}
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
            <p className="font-bold text-center text-2xl">
              {personagem.status.pmMax}
            </p>
            <p className="text-center font-serif text-xs">Máx.</p>
          </div>
          <div className="bg-white my-auto rounded-r-2xl border-l-transparent h-fit px-2 border border-black pl-6 ml-[-15px] z-10 flex flex-col gap-1">
            <h1 className="text-center text-sm">Pontos de Mana</h1>
            <NumberInput
              rounded={"full"}
              className="w-20 mx-auto"
              size={"sm"}
              defaultValue={personagem.status.pm}
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
        <p className="absolute z-0 bg-red-600 w-3/5 ml-20 mt-4 rounded-2xl h-16"> </p>
      </div>
    </>
  );
}

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Checkbox,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  PopoverHeader,
} from "@chakra-ui/react";

interface PoderesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Poderes({ setPagina, next }: PoderesProps) {
  const array = [];
  for (let i = 0; i < 100; i++) {
    array.push(i);
  }
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha seu Poderes
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] w-full">
          <div className="px-4 flex font-bold pb-1 border-x border-gray-400 border-opacity-70">
            <h1 className="w-3/6 text-center border-r border-gray-400 border-opacity-70">
              Poder
            </h1>
            <h1 className="w-1/6 text-center border-r border-gray-400 border-opacity-70">
              Requisitos
            </h1>
            <h1 className="w-1/6 text-center border-r border-gray-400 border-opacity-70">
              Tipo
            </h1>
            <h1 className="w-1/6 text-center">Selecionar</h1>
          </div>
          <div className="max-h-[500px] w-full overflow-y-scroll rounded-lg bg-gray-200">
            <div className="flex flex-col px-4 pt-2">
              {array.map((index) => (
                <div className="flex border-b border-gray-300 items-center py-2">
                  <div className="w-3/6 flex justify-between items-center">
                    <p>{index + 1}</p>
                    <Popover>
                      <PopoverTrigger>
                        <button className="rounded-lg bg-red-300 text-sm py-3 px-6 transition-all hover:transform hover:scale-110 hover:bg-red-500">
                          Ver descrição
                        </button>
                      </PopoverTrigger>
                      <PopoverContent>
                        <PopoverArrow/>
                        <PopoverCloseButton/>
                        <PopoverHeader>Descrição do poder</PopoverHeader>
                        <PopoverBody>
                          <p>Texto</p>
                        </PopoverBody>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <p className="w-1/6 text-center">Requisito</p>
                  <p className="w-1/6 text-center">Tipo</p>
                  <p className="w-1/6 text-center">
                    <Checkbox
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
    </>
  );
}

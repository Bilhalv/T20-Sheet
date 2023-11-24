import { IconButton } from "@chakra-ui/react";
import { Eye } from "lucide-react";

interface Props {
  personagem: any;
}

export default function Ataques({ personagem }: Props) {
  return (
    <>
      <div className="border border-black rounded-lg flex justify-evenly shadow-[5px_5px_0px_0px_rgba(155,0,0)] p-4 bg-opacity-80">
        <div className="flex flex-col">
          <h1 className="text-center text-xl mb-4 text-red-900">Ataques</h1>
          {

          }
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-xl mb-4 ">Bônus</h1>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-xl mb-4 ">Dano</h1>
        </div>
        <div className="desktop:flex hidden flex-col">
          <h1 className="text-center text-xl mb-4 ">Crítico</h1>
        </div>
        <div className="desktop:flex hidden flex-col">
          <h1 className="text-center text-xl mb-4 ">Tipo</h1>
        </div>
        <div className="desktop:flex hidden flex-col">
          <h1 className="text-center text-xl mb-4 ">Alcance</h1>
        </div>
        <div className="desktop:hidden flex flex-col">
          <h1 className="text-center text-xl mb-4 ">Info</h1>
          {/* <IconButton
            icon={<Eye />}
            aria-label={"VerMais"}
            rounded={"full"}
            colorScheme="red"
            className="transition-all hover:transform hover:scale-110 border-[2px] border-white ml-3 w-fit"
            _hover={{
              bg: "transparent",
              border: "2px",
              borderColor: "red.500",
              color: "red.500",
            }}
          /> */}
        </div>
      </div>
    </>
  );
}

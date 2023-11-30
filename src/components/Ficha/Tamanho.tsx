import { Select } from "@chakra-ui/react";

interface Props {
    personagem: any;
}

export default function Tamanho({ personagem }: Props) {
    return (
        <>
            <div className="bg-gray-200 rounded-xl border border-black flex flex-col p-1">
                < h1 className="text-center text-red-900 text-xl">Tamanho</h1>
                        <Select size='xs' className="text-red-600">
                            <option value="Minúsculo">Minúsculo</option>
                            <option value="Pequeno">Pequeno</option>
                            <option value="Médio">Médio</option>
                            <option value="Grande">Grande</option>
                            <option value="Enorme">Enorme</option>
                            <option value="Colossal">Colossal</option>  
                        </Select>
                <div className="flex flex-col justify-evenly w-fit">
                    <div className=" flex p-1 text-center text-3xl text-red-900 drop-shadow-2xl text-md mb-3">
                        <h1>
                            -14/+14
                        </h1>
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
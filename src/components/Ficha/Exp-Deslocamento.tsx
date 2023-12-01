interface Props {
    personagem: any;
}

export default function Exp({ personagem }: Props) {
    return (
        <div className="flex flex-col items-center">
                <h1>
                    Experiência
                </h1>
            <div className="bg-gray-200 rounded-xl border border-black flex justify-center p-1 w-full">
                <h1 className="text-xl">
                    0/1000
                </h1>
            </div>
                <h1>
                    Deslocamento
                </h1>
            <div className="bg-gray-200 rounded-xl border border-black flex justify-center p-1 w-full">
                <h1 className="text-xl">
                    9m
                </h1>
            </div>
        </div>
    );
}
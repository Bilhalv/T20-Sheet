import Ficha from "../../classes/Construtores/Ficha";

interface Props {
  personagem: Ficha;
}

export default function Atributos({ personagem }: Props) {
  return (
    <>
      <div className="flex justify-evenly desktop:w-fit w-full gap-2 mx-auto">
        {personagem.atributos.map((atributo) => (
          <div className="bg-gray-200 rounded-xl border border-black flex flex-col p-3 w-13 h-20 z-10">
            <h1 className="text-center mt-[-15px] text-red-900 drop-shadow-2xl text-md">
              {atributo.atributo.substring(0, 3).toUpperCase()}
            </h1>
            <h1 className="text-center text-3xl text-red-900 drop-shadow-2xl text-md mb-3">
              {Number(atributo.valor) > 0 ? "+" : ""}
              {atributo.valor}
            </h1>
          </div>
        ))}
        <div className="bg-red-800 absolute z-0 mt-5 h-11 w-4/6 desktop:w-[300px]" ></div>
      </div>
    </>
  );
}

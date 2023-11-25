interface Props {
  personagem: any;
}

export default function Atributos({ personagem }: Props) {
  return (
    <>
      <div className="flex justify-evenly w-full gap-4">
        {Object.keys(personagem.atributos).map((atributo) => (
          <div className="bg-gray-200 rounded-xl border border-black flex flex-col p-3 w-13 h-20 z-10">
            <h1 className="text-center mt-[-15px] text-red-900 drop-shadow-2xl text-md">
              {atributo.substring(0, 3).toUpperCase()}
            </h1>
            <h1 className="text-center text-3xl text-red-900 drop-shadow-2xl text-md mb-3">
              {Number(personagem.atributos[atributo]) > 0 ? "+" : ""}
              {personagem.atributos[atributo]}
            </h1>
          </div>
        ))}
        <div className="bg-red-800 absolute z-0 mt-5 h-11 w-3/5 desktop:w-[408px]" ></div>
      </div>
    </>
  );
}

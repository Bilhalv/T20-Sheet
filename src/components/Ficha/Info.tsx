import Ficha from "../../classes/Construtores/Ficha";

interface Props {
  personagem: Ficha;
}

export default function Info({ personagem }: Props) {
  return (
    <>
      <div className="hidden desktop:block">
        <section className="flex justify-between gap-3">
          {[
            { label: "Raça", value: personagem.raca },
            { label: "Origem", value: personagem.origem },
            { label: "Classe", value: personagem.classe.nome },
            { label: "Nível", value: personagem.nivel },
            { label: "Divindade", value: personagem.divindade },
          ].map((item) => (
            <div className="w-full">
              <h1 className="shadow-[5px_5px_0px_0px_rgba(155,0,0)] bg-white bg-opacity-80 rounded-md px-4 py-2 text-center text-md">
                {item.value}
              </h1>
              <h1 className="text-center text-red-900 drop-shadow-2xl text-xl">
                {item.label}
              </h1>
            </div>
          ))}
          <img className="h-12" src="./img/bannerT20.png" />
        </section>
      </div>
      <div className="block desktop:hidden shadow-[5px_5px_0px_0px_rgba(155,0,0)] rounded-xl">
        {[
          { label: "Raça", value: personagem.raca },
          { label: "Origem", value: personagem.origem },
          { label: "Classe", value: personagem.classe.nome },
          { label: "Nível", value: personagem.nivel },
          { label: "Divindade", value: personagem.divindade ??"Nenhuma" },
        ].map((item, index) => (
          <div
            className={
              "flex w-full justify-between" +
              (index === 0 ? "rounded-t-2xl " : "") +
              (index === 4 ? "rounded-b-2xl " : "")
            }
          >
            <h1
              className={
                "bg-red-500 text-white text-center w-1/2 py-2 " +
                (index === 0 ? "rounded-tl-xl " : "") +
                (index === 4 ? "rounded-bl-xl " : "") +
                (index !== 4 ? "border-b border-white" : "")
              }
            >
              {item.label}
            </h1>
            <h1
              className={
                "bg-white text-red-600 text-center w-1/2 py-2 " +
                (index === 0 ? "rounded-tr-xl " : "") +
                (index === 4 ? "rounded-br-xl " : "") +
                (index !== 4 ? "border-b border-red-600" : "")
              }
            >
              {item.value}
            </h1>
          </div>
        ))}
      </div>
    </>
  );
}

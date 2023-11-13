interface PoderesProps {
  setPagina: (pagina: string) => void;
  next: string;
}

export default function Poderes({ setPagina, next }: PoderesProps) {
  return (
    <>
      <h1 className="text-center text-lg font-bold mb-3">
        Escolha seu Poderes
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] desktop:w-1/2">
        </section>
      </div>
    </>
  );
}

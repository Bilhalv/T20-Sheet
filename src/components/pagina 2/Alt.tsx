interface AltProps {
  handleChange: (pagina: string) => void;
  next: string;
}

export default function Alt({ handleChange, next }: AltProps) {
  return (
    <>
      <h1 className="text-center text-3xl font-bold mb-14 text-white drop-shadow-[0px_5px_rgba(7,7,7,7)]">
        Escolha seu alt
      </h1>
      <div className="flex gap-5">
        <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-[7px_5px_4px_0px_rgba(0,0,0,0.25)] desktop:w-1/2"></section>
      </div>
    </>
  );
}

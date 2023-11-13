interface Props {
  onSelect: any;
  pagina: string;
}

export default function Confirmar({ onSelect, pagina }: Props) {
  return (
    <>
      {pagina === "inicio" ? (
        <button
          type="submit"
          className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3"
        >
          Confirmar
        </button>
      ) : (
        <button
          onClick={onSelect}
          className="my-2 text-red-800 bg-white hover:bg-gray-300 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3"
        >
          Confirmar
        </button>
      )}
    </>
  );
}

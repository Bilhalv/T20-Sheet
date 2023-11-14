interface Props {
  onSelect: any;
  pagina: string;
}

export default function Confirmar({ onSelect, pagina }: Props) {
  return (
    <button
      type="submit"
      onClick={pagina !== "inicio" && onSelect}
      className="my-2 text-white bg-red-800 hover:bg-red-500 px-2 rounded w-full transition-all ease-in-out shadow-lg mt-3"
    >
      Confirmar
    </button>
  );
}

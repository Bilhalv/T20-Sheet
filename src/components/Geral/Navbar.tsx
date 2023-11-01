import { Link } from "react-router-dom";

interface Props {
  titulo: string;
}

export default function Navbar({ titulo }: Props) {
  return (
    <>
      <nav className="z-10 flex sticky top-0 justify-between bg-[#10000d] p-5 text-white shadow-lg">
        <Link to="/">
        <img className="h-8" src="./img/bannerT20.png" />
        </Link>
        <Link to="/">
          <button className="text-lg bg-[#09000d] px-2 rounded-lg transition-all ease-in-out hover:bg-[#05000d]">
            {titulo}
          </button>
        </Link>
      </nav>
    </>
  );
}

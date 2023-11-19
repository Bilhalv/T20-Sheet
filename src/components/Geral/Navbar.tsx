import { Link } from "react-router-dom";

interface NavbarProps {
  back: any;
}

export default function Navbar({ back }: NavbarProps) {
  return (
    <>
      <nav className="z-40 flex sticky top-0 justify-between bg-[#10000d] desktop:p-5 p-3 text-white shadow-lg">
        <div className="w-1/3">
          <Link to="/" className="w-1/3">
            <img className="h-8" src="./img/bannerT20.png" />
          </Link>
        </div>
        <h1 className="text-lg w-1/3 text-center hidden desktop:block">
          <span className="text-3xl">T20</span>Character Creator
        </h1>
        <div className="w-1/3 text-right"> 
          <Link to={back}>
            <button className="text-lg bg-[#09000d] px-2 rounded-lg transition-all ease-in-out hover:bg-[#05000d]">
              Voltar
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}

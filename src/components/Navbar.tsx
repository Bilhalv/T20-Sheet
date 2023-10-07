import React from "react";

interface Props {
  titulo: string;
}

export default function Navbar({ titulo }: Props) {
  return (
    <>
      <nav className="flex justify-between bg-black p-5 text-white shadow-lg">
        <img className="h-8" src="https://i.ibb.co/k4FHRNK/image-1.png"/>
        <button className="text-lg bg-slate-900 px-2 rounded-lg transition-all ease-in-out hover:bg-slate-500">{titulo}</button>
      </nav>
    </>
  );
}

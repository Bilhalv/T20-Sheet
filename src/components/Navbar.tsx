import React from "react";

interface Props {
  titulo: string;
}

export default function Navbar({ titulo }: Props) {
  return (
    <>
      <nav className="flex justify-between bg-black p-5 text-white">
        <img className="h-8" src="https://i.ibb.co/k4FHRNK/image-1.png"/>
        <h1 className="text-lg">{titulo}</h1>
      </nav>
    </>
  );
}

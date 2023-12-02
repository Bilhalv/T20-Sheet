import React from "react";
import Navbar from "../components/Geral/Navbar";
import { IconButton } from "@chakra-ui/react";
import { Eye } from "lucide-react";

const personagem = [{
  nome: "Sauron",
  raca: "Trog",
  racaImg: `./img/racas/perfil/trog.png`,
  classe: "Guerreiro",
  classeImg: `./img/classes/guerreiro.png`,
  origem: "Nobre",
  nivel: 1,
  divindade: "Tanna-Toh",
  atributos: {
    forca: 18,
    destreza: 16,
    constituicao: 14,
    inteligencia: 12,
    sabedoria: 10,
    carisma: 8,
  },
  pericias: [
    "Acrobacia",
    "Atletismo",
    "Cavalgar",
    "Conhecimento (Guerra)",
    "Diplomacia",
    "Fortitude",
    "Furtividade",
    "Iniciativa",
    "Intuição",
    "Intimidação",
    "Ladinagem",
    "Luta",
    "Ofício",
    "Percepção",
    "Pontaria",
    "Reflexos",
    "Sobrevivência",
    "Vontade",
  ],
  itens: [
    { nome: "Espada curta", quantidade: 1, tipo: "arma" },
    { nome: "Adaga", quantidade: 1, tipo: "arma" },
    { nome: "Gibão de peles", quantidade: 1, tipo: "armadura" },
    { nome: "Escudo leve", quantidade: 1, tipo: "armadura" },
    { nome: "Algemas", quantidade: 1, tipo: "item" },
    { nome: "Água benta", quantidade: 4, tipo: "item" },
  ],
  ataques: [
    {
      nome: "Espada curta",
      bonus: 5,
      dano: "1d6+4",
      critico: "19-20/x2",
      tipo: "Corte",
      alcance: "Corpo a corpo",
    },
    {
      nome: "Adaga",
      bonus: 5,
      dano: "1d4+4",
      critico: "19-20/x2",
      tipo: "Perfuração",
      alcance: "Corpo a corpo",
    },
  ],
  status: {
    pv: 20,
    pvMax: 20,
    pm: 20,
    pmMax: 20,
  },
},
{
  nome: "Gladimir",
  raca: "Minotauro",
  racaImg: `./img/racas/perfil/minotauro.png`,
  classe: "Paladino",
  classeImg: `./img/classes/paladino.png`,
  origem: "Professor",
  nivel: 5,
  divindade: "Arsenal",
  atributos: {
    forca: 1,
    destreza: -1,
    constituicao: 1,
    inteligencia: 3,
    sabedoria: 1,
    carisma: 4,
  },
  pericias: [
    "Acrobacia",
    "Atletismo",
    "Cavalgar",
    "Conhecimento (Guerra)",
    "Diplomacia",
    "Fortitude",
    "Furtividade",
    "Iniciativa",
    "Intuição",
    "Intimidação",
    "Ladinagem",
    "Luta",
    "Ofício",
    "Percepção",
    "Pontaria",
    "Reflexos",
    "Sobrevivência",
    "Vontade",
  ],
  itens: [
    { nome: "Espada curta", quantidade: 1, tipo: "arma" },
    { nome: "Adaga", quantidade: 1, tipo: "arma" },
    { nome: "Gibão de peles", quantidade: 1, tipo: "armadura" },
    { nome: "Escudo leve", quantidade: 1, tipo: "armadura" },
    { nome: "Algemas", quantidade: 1, tipo: "item" },
    { nome: "Água benta", quantidade: 4, tipo: "item" },
  ],
  ataques: [
    {
      nome: "Espada curta",
      bonus: 5,
      dano: "1d6+4",
      critico: "19-20/x2",
      tipo: "Corte",
      alcance: "Corpo a corpo",
    },
    {
      nome: "Adaga",
      bonus: 5,
      dano: "1d4+4",
      critico: "19-20/x2",
      tipo: "Perfuração",
      alcance: "Corpo a corpo",
    },
  ],
  status: {
    pv: 20,
    pvMax: 20,
    pm: 20,
    pmMax: 20,
  },
},
];

const listaPersonagens = personagem.map((personagem) => {
  return (
    <article className="bg-gray-50 bg-opacity-90 desktop:w-1/2 mx-auto rounded-lg border-gray-500 shadow-lg">
      <div className="flex flex-col w-full justify-center">
        <div className="flex ">
          <img src={personagem.classeImg} alt="" className="w-8 h-8 self-center" />
          <h1 className="text-red-800 text-xl desktop:text-4xl">
            {personagem.nome}
          </h1>
        </div>
        <div className="flex">
          <div className="flex flex-col justify-end">
            <img src={personagem.racaImg} alt="" />
          </div>
          <div className="flex w-3/4 flex-wrap pb-2">
            <div className="flex flex-col items-center w-1/2">
              <p className="text-center desktop:text-lg">
                Raça
              </p>
              <div className="text-center desktop:text-lg bg-white border border-black rounded p-2 w-3/4">
                <p>
                  {personagem.raca}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p className="text-center desktop:text-lg">
                Classe
              </p>
              <div className="text-center desktop:text-lg bg-white border border-black rounded p-2 w-3/4">
                <p>
                  {personagem.classe}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p className="text-center desktop:text-lg">
                Nivel
              </p>
              <div className="text-center desktop:text-lg bg-white border border-black rounded p-2 w-3/4">
                <p>
                  {personagem.nivel}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-1/2">
              <p className="text-center desktop:text-lg">
                Origem
              </p>
              <div className="text-center desktop:text-lg bg-white border border-black rounded p-2 w-3/4">
                <p>
                  {personagem.origem}
                </p>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <IconButton
              icon={<Eye />}
              aria-label={"VerMais"}
              rounded={"full"}
              colorScheme="red"
              className="transition-all hover:transform hover:scale-110 border-[2px] border-white"
              _hover={{
                bg: "transparent",
                border: "2px",
                borderColor: "red.500",
                color: "red.500",
              }}
            />
          </div>
        </div>
      </div>
    </article>
  );
})

const Personagens: React.FC = () => {
  return (
    <>
      <Navbar back={"/"} />
      <body className="bg-bgT20 bg-fixed bg-center min-h-screen w-full font-tormenta py-10 bg-cover">
        <article className="bg-gray-50 bg-opacity-30 desktop:w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <h1 className="text-center text-3xl font-bold text-white drop-shadow-[0px_5px_rgba(7,7,7,7)] mb-14">
            Meus personagens
          </h1>
          <main className="flex gap-2 justify-center">
            {listaPersonagens}
          </main>
        </article>
      </body>
    </>
  );
};

export default Personagens;

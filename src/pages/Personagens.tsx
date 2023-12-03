import React from "react";
import Navbar from "../components/Geral/Navbar";
import { IconButton } from "@chakra-ui/react";
import { Eye, Trash } from "lucide-react";

const personagem = [{
  nome: "pseudopseudohypoparathyroidism",
  raca: "Minotauro",
  racaImg: `./img/racas/perfil/minotauro.png`,
  classe: "Guerreiro",
  classeImg: `./img/classes/guerreiro.png`,
  origem: "Assistente de laboratorio",
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
  raca: "Humano",
  racaImg: `./img/racas/perfil/humano.png`,
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
{
  nome: "Gladimiro",
  raca: "Humano",
  racaImg: `./img/racas/perfil/humano.png`,
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
      alcance: "Corpo"
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
    <article className="bg-gray-50 bg-opacity-90 w-11/12 desktop:w-[49%] mx-auto rounded-lg border-gray-500 shadow-lg">
      <div className="flex flex-col w-full justify-center">
        <div className="flex ">
          <img src={personagem.classeImg} alt="" className="w-8 h-8 self-center" />
          <h1 className="text-red-800 text-l align-middle desktop:text-2xl">
            {personagem.nome}
          </h1>
        </div>
        <div className="flex flex-col desktop:flex-row items-center desktop:items-end">
          <div className="flex w-[27%] border-2 border-red-500 rounded-full desktop:border-none desktop:justify-center desktop:content-end">
            <img className="rounded-full desktop:rounded-none w-full" src={personagem.racaImg} alt="" />
          </div>
          <div className="flex w-[63%] flex-wrap pb-2">
            <div className="flex flex-col items-center w-full desktop:w-1/2">
              <p className="text-center desktop:text-lg">
                Raça
              </p>
              <div className="text-center leading-loose bg-white border border-black rounded p-2 w-11/12">
                <p>
                  {personagem.raca}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full desktop:w-1/2">
              <p className="text-center desktop:text-lg">
                Classe
              </p>
              <div className="text-center leading-loose bg-white border border-black rounded p-2 w-11/12">
                <p>
                  {personagem.classe}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full desktop:w-1/2">
              <p className="text-center desktop:text-lg">
                Nivel
              </p>
              <div className="text-center leading-loose bg-white border border-black rounded p-2 w-11/12">
                <p>
                  {personagem.nivel}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center w-full desktop:w-1/2">
              <p className="text-center desktop:text-lg">
                Origem
              </p>
              <div className="flex justify-center items-center text-center leading-3 bg-white border border-black rounded p-2 w-11/12 desktop:h-full self-center">
                <p>
                  {personagem.origem}
                </p>
              </div>
            </div>
          </div>
          <div className="flex desktop:flex-wrap gap-8 justify-center w-[10%] p-2 desktop:mb-6">
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
            <IconButton
              icon={<Trash />}
              aria-label={"Excluir"}
              rounded={"full"}
              colorScheme="white"
              color={"red.500"}
              className="transition-all hover:transform hover:scale-110 border-[2px] border-red-500"
              _hover={{
                bg: "transparent",
                border: "2px",
                borderColor: "black",
                color: "black",
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
        <article className="bg-gray-50 bg-opacity-30 w-3/4 mx-auto my-6 py-8 px-4 rounded-lg border-gray-500 shadow-lg">
          <h1 className="text-center text-3xl font-bold text-white drop-shadow-[0px_5px_rgba(7,7,7,7)] mb-14">
            Meus personagens
          </h1>
          <main className="flex flex-wrap gap-2 justify-center">
            {listaPersonagens}
          </main>
        </article>
      </body>
    </>
  );
};

export default Personagens;

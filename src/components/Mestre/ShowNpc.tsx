import {
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  Input,
  Button,
} from "@chakra-ui/react";
import { ArrowLeft, ArrowRight, Check, Trash } from "lucide-react";
import { Magia } from "../../classes/Construtores/Magia";
import { ataque, poder } from "../../classes/Construtores/Mestre/NPC";
import { NPCShown } from "../../pages/Mestre";

interface Props {
  npc: NPCShown;
  rolar: (
    e: number,
    nome: string,
    tipo: "Atributo" | "Pericia" | "Ataque"
  ) => void;
  ataqueRoll: (
    nome: string,
    mod: number,
    dado: string,
    modDano: number,
    crit: string
  ) => void;
  trash?: (id: number) => void;
  isNotModal: boolean;
  teasureReroll: (npc: NPCShown) => void;
  statusChange: (id: number, status: "PV" | "PM", toChange: string) => void;
  handleMove?: (id: number, direction: "up" | "down") => void;
  setWillDelete?: React.Dispatch<
    React.SetStateAction<{
      will: boolean;
      id: number;
    }>
  >;
  willDelete?: { will: boolean; id: number };
}

export default function ShowNPC({
  npc,
  rolar,
  ataqueRoll,
  trash,
  isNotModal,
  teasureReroll,
  statusChange,
  handleMove,
  setWillDelete,
  willDelete,
}: Props) {
  return (
    <div
      className="bg-white bg-opacity-70 p-5 rounded-lg w-[400px] h-fit"
    >
      {isNotModal && (
        <div className="flex justify-between mb-[-40px] w-full">
          {handleMove && (
            <IconButton
              isDisabled={
                JSON.parse(localStorage.getItem("npcs") || "[]").findIndex(
                  (e: NPCShown) => {
                    return e.id === npc.id;
                  }
                ) === 0
              }
              aria-label="Up"
              rounded={"full"}
              bgColor={"red"}
              color={"white"}
              size="sm"
              _hover={{
                color: "red",
                transform: "scale(1.1)",
                zIndex: 1,
                borderColor: "red",
                bg: "transparent",
                border: "2px solid",
              }}
              icon={<ArrowLeft />}
              onClick={() => handleMove(npc.id, "up")}
            />
          )}
          <IconButton
            aria-label="id"
            className="font-tormenta"
            zIndex={10}
            rounded={"full"}
            bgColor={"red"}
            color={"white"}
            size="sm"
            _hover={{
              cursor: "default",
            }}
            icon={<p>{npc.id}</p>}
          />
          {handleMove && (
            <IconButton
              isDisabled={
                JSON.parse(localStorage.getItem("npcs") || "[]").findIndex(
                  (e: NPCShown) => {
                    return e.id === npc.id;
                  }
                ) ===
                JSON.parse(localStorage.getItem("npcs") || "[]").length - 1
              }
              aria-label="Down"
              rounded={"full"}
              bgColor={"red"}
              color={"white"}
              size="sm"
              _hover={{
                color: "red",
                transform: "scale(1.1)",
                zIndex: 1,
                borderColor: "red",
                bg: "transparent",
                border: "2px solid",
              }}
              icon={<ArrowRight />}
              onClick={() => handleMove(npc.id, "down")}
            />
          )}
        </div>
      )}
      {npc.img && <img className="w-3/4 mx-auto" src={npc.img} />}
      <div className="flex flex-col gap-2">
        <Popover>
          <PopoverTrigger>
            <button
              disabled={!isNotModal}
              className="bg-red-200 rounded-lg h-5 hover:transform hover:scale-95 hover:cursor-pointer transition-all"
            >
              <div
                style={{
                  width: `${Math.floor(((npc.pvAtual || 0) * 100) / npc.pv)}%`,
                }}
                className={
                  "bg-red-600 h-5 rounded-lg transition-all text-center"
                }
              ></div>
              <p className="text-center mt-[-23px] text-white font-tormenta">
                {npc.pv} / {npc.pvAtual}
              </p>
            </button>
          </PopoverTrigger>
          <PopoverContent>
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader>Alterando Vida atual</PopoverHeader>
            <PopoverBody>
              <form
                className="flex gap-2"
                onSubmit={(e) => {
                  e.preventDefault();
                  const form = e.target as HTMLFormElement;
                  const inputValue = (form.elements[0] as HTMLInputElement)
                    .value;
                  statusChange(npc.id, "PV", inputValue);
                }}
              >
                <Input
                  className="w-full"
                  defaultValue={npc.pvAtual}
                  autoFocus
                />
                <Button
                  className="w-full"
                  type="submit"
                  aria-label="Confirmar"
                  bgColor={"red"}
                  color={"white"}
                >
                  Confirmar
                </Button>
              </form>
            </PopoverBody>
          </PopoverContent>
        </Popover>
        {npc.pm > 0 && (
          <Popover>
            <PopoverTrigger>
              <div className="bg-blue-200 rounded-lg h-5 hover:transform hover:scale-95 hover:cursor-pointer transition-all">
                <div
                  style={{
                    width: `${Math.floor(
                      ((npc.pmAtual || 0) * 100) / npc.pm
                    )}%`,
                  }}
                  className={
                    "bg-blue-600 h-5 rounded-lg transition-all text-center"
                  }
                ></div>
                <p className="text-center mt-[-23px] text-white font-tormenta">
                  {npc.pm} / {npc.pmAtual}
                </p>
              </div>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Alterando Mana atual</PopoverHeader>
              <PopoverBody>
                <form
                  className="flex gap-2"
                  onSubmit={(e) => {
                    e.preventDefault();
                    const form = e.target as HTMLFormElement;
                    const inputValue = (form.elements[0] as HTMLInputElement)
                      .value;
                    statusChange(npc.id, "PM", inputValue);
                  }}
                >
                  <Input defaultValue={npc.pmAtual} autoFocus />
                  <Button type="submit" aria-label="Confirmar">
                    Confirmar
                  </Button>
                </form>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        )}
      </div>
      <div className="flex justify-between font-bold text-red-700 font-tormenta text-2xl">
        <h2>{npc.nome}</h2>
        <h2>
          {isNotModal && (
            <IconButton
              aria-label="Trash"
              rounded={"full"}
              bgColor={"red"}
              color={"white"}
              size="sm"
              mr={2}
              _hover={{
                color: "red",
                transform: "scale(1.1)",
                zIndex: 1,
                borderColor: "red",
                bg: "transparent",
                border: "2px solid",
              }}
              icon={
                willDelete && willDelete.will && willDelete.id === npc.id ? (
                  <Check />
                ) : (
                  <Trash />
                )
              }
              onClick={() => {
                if (setWillDelete === undefined || trash === undefined) return;
                if (willDelete?.will && willDelete?.id === npc.id) {
                  trash(npc.id);
                  setWillDelete({ will: false, id: -1 });
                  return;
                } else {
                  setWillDelete({ will: true, id: npc.id });
                  return;
                }
              }}
            />
          )}
          ND {npc.nd}
        </h2>
      </div>
      <div className="italic text-sm w-full border-b-2 border-b-red-600 text-gray-600">
        <h1>
          {npc.raca} {npc.tamanho} ({npc.tipo})
        </h1>
      </div>
      <div className="text-sm">
        <div className="flex gap-3">
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.iniciativa, `Iniciativa`, "Pericia")}
          >
            <h1>
              <b className="text-red-600">Iniciativa </b>
              {npc.iniciativa > 0 && "+"}
              {npc.iniciativa}
            </h1>
          </a>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.percepcao, "Percepção", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Percepção </b>
              {npc.percepcao > 0 && "+"}
              {npc.percepcao}
            </h1>
          </a>
        </div>
        <div className="flex">
          <h1>
            <b className="text-red-600">Defesa</b> {npc.defesa}
          </h1>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.fort, "Fortitude", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Fort </b>
              {npc.fort > 0 && "+"}
              {npc.fort}
            </h1>
          </a>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.ref, "Reflexos", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Ref </b>
              {npc.ref > 0 && "+"}
              {npc.ref}
            </h1>
          </a>
          <p>,&nbsp;</p>
          <a
            className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
            onClick={() => rolar(npc.von, "Vontade", "Pericia")}
          >
            <h1>
              <b className="text-red-600">Von </b>
              {npc.von > 0 && "+"}
              {npc.von}
            </h1>
          </a>
        </div>
        <h1>
          <b className="text-red-600">Resistências </b>
          {npc.resistencias?.join(", ") || "Nenhuma"}
        </h1>
        <h1 className="border-b-2 border-b-red-600">
          <b className="text-red-600">Deslocamento </b>
          {npc.deslocamento}m ({npc.deslocamento / 1.5}▢)
        </h1>
        {npc.corpoAcorpo && npc.corpoAcorpo?.length > 0 && (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <h1 className="text-red-600 font-bold">Corpo a Corpo </h1>
              {npc.corpoAcorpo?.map((arma: ataque) => (
                <div className="flex gap-2 ml-4">
                  <a
                    className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold"
                    onClick={() =>
                      ataqueRoll(
                        arma.nome,
                        arma.mod,
                        arma.dano,
                        arma.modDano,
                        arma.crit
                      )
                    }
                  >
                    {arma.nome}{" "}
                  </a>
                  <p>
                    {arma.mod > 0 && "+"}
                    {arma.mod}
                  </p>
                  <p>
                    ({arma.dano}+{arma.modDano})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.distancia && npc.distancia?.length > 0 && (
          <div className="flex gap-2">
            <div className="flex flex-col">
              <h1 className="text-red-600 font-bold">Distância </h1>
              {npc.distancia?.map((arma: ataque) => (
                <div className="flex gap-2 ml-4">
                  <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold">
                    {arma.nome}{" "}
                  </a>
                  <p>
                    {arma.mod > 0 && "+"}
                    {arma.mod}
                  </p>
                  <p>
                    ({arma.dano}+{arma.modDano})
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.magias && npc.magias?.length > 0 && (
          <div className="flex gap-2">
            <h1 className="text-red-600 font-bold">Magias </h1>
            <div>
              {npc.magias?.map((magia: Magia) => (
                <div className="flex gap-2">
                  <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-700 font-bold">
                    {magia.nome}{" "}
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
        {npc.poderes && npc.poderes?.length > 0 && (
          <div>
            {npc.poderes?.map((poder: poder) => (
              <div className="flex gap-2">
                <p className="text-justify">
                  <b className="text-red-600">
                    {poder.nome}
                    &nbsp;{poder.execucao && `(${poder.execucao})`}
                  </b>
                  &nbsp;
                  {poder.descricao}
                </p>
              </div>
            ))}
          </div>
        )}
        <div className="border-y-2 border-y-red-600 flex justify-evenly">
          {[
            { nome: "Força", valor: npc.atributos.for },
            { nome: "Destreza", valor: npc.atributos.des },
            { nome: "Constituição", valor: npc.atributos.con },
            { nome: "Inteligência", valor: npc.atributos.int },
            { nome: "Sabedoria", valor: npc.atributos.sab },
            { nome: "Carisma", valor: npc.atributos.car },
          ].map((atributo) => (
            <a
              className="flex gap-2 items-center hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
              onClick={() => rolar(atributo.valor, atributo.nome, "Atributo")}
            >
              <h1 className="text-red-600 font-bold">
                {atributo.nome.substring(0, 3).toUpperCase()}
              </h1>
              <h1>
                {atributo.valor > 0 && "+"}
                {atributo.valor}
              </h1>
            </a>
          ))}
        </div>
        <div className="flex gap-2">
          <h1 className="text-red-600 font-bold">Perícias </h1>
          <div className="flex flex-wrap gap-2">
            {npc.pericias?.map((pericia) => (
              <a
                className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all"
                onClick={() => rolar(pericia.mod, pericia.nome, "Pericia")}
              >
                <h1>
                  {pericia.nome}
                  {pericia.mod > 0 && "+"}
                  {pericia.mod}
                </h1>
              </a>
            ))}
          </div>
        </div>
        {npc.equipamentos && npc.equipamentos?.length > 0 && (
          <div className="flex gap-2">
            <h1 className="text-red-600 font-bold">Equipamentos </h1>
            <div className="flex flex-wrap gap-2">
              {npc.equipamentos?.map((equipamento) => (
                <a className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all">
                  <h1>{equipamento}</h1>
                </a>
              ))}
            </div>
          </div>
        )}
        <div className="flex gap-2">
          <p className="text-justify">
            {!npc.tesouroFinal.includes("") ? (
              <>
                <a
                  onClick={() => teasureReroll(npc)}
                  className="hover:bg-red-600 hover:bg-opacity-10 hover:cursor-pointer hover:select-none transition-all text-red-600 font-bold mr-1"
                >
                  Tesouro
                </a>{" "}
                {!(
                  npc.tesouroFinal[0] === "Nenhum" &&
                  npc.tesouroFinal[1] === "Nenhum"
                ) ? (
                  <>
                    {npc.tesouroFinal[0] !== "Nenhum" && (
                      <>Itens: {npc.tesouroFinal[0]}</>
                    )}
                    {!npc.tesouroFinal.includes("Nenhum") && " | "}
                    {npc.tesouroFinal[1] !== "Nenhum" && (
                      <>Dinheiro: {npc.tesouroFinal[1]}</>
                    )}
                  </>
                ) : (
                  <>Nenhum</>
                )}
              </>
            ) : (
              <>
                <b className="text-red-600">Tesouro </b>
                {npc.tesouro}
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}

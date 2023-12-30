import {
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
import Player from "../../classes/Construtores/Mestre/Player";

interface Props {
  player: Player;
  setPlayersLista: React.Dispatch<React.SetStateAction<Player[]>>;
}
export default function Players({ player, setPlayersLista }: Props) {
  const statusChange = (
    jogador: string,
    status: "PV" | "PM",
    value: string
  ) => {
    const players = JSON.parse(localStorage.getItem("PlayersLista") || "[]");
    const playerIndex = players.findIndex(
      (player: Player) => player.player === jogador
    );
    if (playerIndex === -1) return;
    const player = players[playerIndex];
    let numFinal = Number(value);
    if (value.includes("+") || value.includes("-")) {
      numFinal = player[status === "PV" ? "pvAtual" : "pmAtual"] + numFinal;
    }
    player[status === "PV" ? "pvAtual" : "pmAtual"] = numFinal;
    players[playerIndex] = player;
    localStorage.setItem("PlayersLista", JSON.stringify(players));
    setPlayersLista(players);
  };
  const widthCalc = (min: number, max: number) => {
    const width = Math.floor((min * 100) / max);
    return width >= 0 ? width : 0;
  };
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg w-[200px] h-fit">
      <img className="w-full mx-auto" src={player.img} />
      <Popover>
        <PopoverTrigger>
          <button className="bg-red-200 rounded-lg h-5 w-full hover:transform hover:scale-95 hover:cursor-pointer transition-all">
            <div
              style={{
                width: `${widthCalc(player.pvAtual, player.pvMax)}%`,
              }}
              className={"bg-red-600 h-5 rounded-lg transition-all text-center"}
            ></div>
            <p className="text-center mt-[-23px] text-white font-tormenta">
              {player.pvMax} / {player.pvAtual}
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
                const inputValue = (form.elements[0] as HTMLInputElement).value;
                statusChange(player.player, "PV", inputValue);
              }}
            >
              <Input
                className="w-full"
                defaultValue={player.pvAtual}
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
      <Popover>
        <PopoverTrigger>
          <button className="bg-blue-200 rounded-lg h-5 w-full hover:transform hover:scale-95 hover:cursor-pointer transition-all">
            <div
              style={{
                width: `${widthCalc(player.pmAtual, player.pmMax)}%`,
              }}
              className={
                "bg-blue-600 h-5 rounded-lg transition-all text-center"
              }
            ></div>
            <p className="text-center mt-[-23px] text-white font-tormenta">
              {player.pmMax} / {player.pmAtual}
            </p>
          </button>
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
                const inputValue = (form.elements[0] as HTMLInputElement).value;
                statusChange(player.player, "PM", inputValue);
              }}
            >
              <Input
                className="w-full"
                defaultValue={player.pmAtual}
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
      <div className="flex justify-between font-bold text-red-700 font-tormenta text-2xl">
        <h1>
          {player.nome}
        </h1>
        <h1>{player.nivel}</h1>
      </div>
      <div className="italic text-sm w-full border-b-2 border-b-red-600 text-gray-600">
        <h1>
          {player.raca} {player.classe} ({player.player})
        </h1>
      </div>
      <div className="text-sm">
        <div className="flex gap-3">
          <b className="text-red-600">Defesa</b> {player.defesa}
        </div>
      </div>
      {player.poderes.map((poder) => (
        <div className="flex gap-2 text-sm">
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
  );
}
/*
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
*/

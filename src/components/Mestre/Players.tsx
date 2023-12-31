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
  Tooltip,
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
  const espacosTotal = player.mochila
    ? player.mochila.reduce((acc, item) => acc + item.espacos, 0)
    : 0;
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg laptop:w-[200px] h-fit">
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
        <h1>{player.nome}</h1>
        <h1>{player.nivel}</h1>
      </div>
      <div className="italic text-sm w-full text-gray-600">
        <h1>
          {player.raca} {player.classe} ({player.player})
        </h1>
      </div>
      <div className="border-y-2 border-y-red-600 flex justify-evenly text-xs">
        {[
          {
            nome: "Força",
            valor: player.atributos.for,
          },
          {
            nome: "Destreza",
            valor: player.atributos.des,
          },
          {
            nome: "Constituição",
            valor: player.atributos.con,
          },
          {
            nome: "Inteligência",
            valor: player.atributos.int,
          },
          {
            nome: "Sabedoria",
            valor: player.atributos.sab,
          },
          {
            nome: "Carisma",
            valor: player.atributos.car,
          },
        ].map((atributo) => (
          <div className="flex gap-2 items-center">
            <p className="text-red-600 font-bold">
              {atributo.nome.substring(0, 3).toUpperCase()}
            </p>
            <p>
              {atributo.valor > 0 && "+"}
              {atributo.valor}
            </p>
          </div>
        ))}
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
      {player.magias && (
        <div className="flex flex-col gap-2 text-sm">
          <h1 className="text-center text-red-600 font-bold">Magias</h1>
          {player.magias.map((magia) => (
            <Popover>
              <PopoverTrigger>
                <div className="flex justify-between font-bold hover:transform hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20 hover:cursor-pointer">
                  <p className="text-red-600">{magia.nome}</p>
                  <p>{magia.escola}</p>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{magia.nome}</PopoverHeader>
                <PopoverBody>{magia.descricao}</PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
        </div>
      )}
      <div className="flex flex-col gap-2 text-sm">
        <h1 className="text-center text-red-600 font-bold">
          Mochila ({espacosTotal}/{10 + player.atributos.for * 2})
        </h1>
        {player.mochila &&
          player.mochila.map((item) => (
            <Popover>
              <PopoverTrigger>
                <div className="flex justify-between font-bold hover:transform hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20 hover:cursor-pointer">
                  <p className="text-red-600">{item.nome}</p>
                  <p>{item.espacos}</p>
                </div>
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverCloseButton />
                <PopoverHeader>{item.nome}</PopoverHeader>
                <PopoverBody>{item.descricao}</PopoverBody>
              </PopoverContent>
            </Popover>
          ))}
      </div>
    </div>
  );
}

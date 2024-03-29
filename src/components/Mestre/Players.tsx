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
import { enumTipo } from "../../classes/Construtores/Magia";

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
  const imagensMagias = player.magias
    ? player.magias.map(
        (magia) =>
          "./img/magias/escolas/" +
          magia.escola.toLowerCase().replace(/ç/g, "c").replace(/ã/g, "a") +
          ".svg"
      )
    : [];
  return (
    <div className="bg-white bg-opacity-70 p-5 rounded-lg w-1/3 laptop:w-1/4 h-fit">
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
      <div className="border-y-2 border-y-red-600 flex flex-wrap justify-evenly text-xs gap-2">
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
          <div className="flex items-center">
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
      <div className="text-sm">
        <div className="flex gap-3">
          <b className="text-red-600">Morte</b> -
          {player.pvMax > 20 ? Math.floor(player.pvMax / 2) : 10}
        </div>
      </div>
      <div className="text-sm">
        <div className="flex gap-3">
          <b className="text-red-600">Movimento</b>
          {player.movimento} ({player.movimento / 1.5}▢)
        </div>
      </div>
      <div className="flex flex-col mb-2 text-sm">
        <h1 className="text-red-600 text-sm font-bold text-center">Poderes</h1>
        {player.poderes.map((poder) => (
          <Tooltip
            label={<p>{poder.descricao}</p>}
            openDelay={800}
            placement="right"
            closeDelay={1000}
            closeOnClick={true}
            bgColor="red.600"
          >
            <div className="px-2 hover:transform hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20 select-none text-red-600 font-bold">
              <p>
                {poder.nome} {poder.execucao && `(${poder.execucao})`}
              </p>
            </div>
          </Tooltip>
        ))}
      </div>
      {player.magias && (
        <div className="flex flex-col gap-2 text-sm">
          <h1 className="text-center text-red-600 font-bold">Magias</h1>
          {player.magias.map((magia, idx) => (
            <Tooltip
              label={
                <div className="bg-bgT20 rounded-xl p-1 w-[400px]">
                  <div className="flex justify-between items-center">
                    <p className="flex flex-col">
                      <p className="text-center">{magia.nome}</p>
                      <p className="flex justify-evenly flex-wrap w-full">
                        <p className="flex text-xs">
                          <img
                            src="./img/magias/dados/execucao.svg"
                            className="w-3"
                          />
                          <p className="my-auto">{magia.execucao}</p>
                        </p>
                        <p className="flex text-xs">
                          <img
                            src="./img/magias/dados/alcance.svg"
                            className="w-3"
                          />
                          <p className="my-auto">{magia.alcance}</p>
                        </p>
                        <p className="flex text-xs">
                          <img
                            src="./img/magias/dados/duracao.svg"
                            className="w-3"
                          />
                          <p className="my-auto">{magia.duracao}</p>
                        </p>
                        <p className="flex text-xs">
                          <img
                            src="./img/magias/dados/alvo.svg"
                            className="w-3"
                          />
                          <p className="my-auto">{magia.alvo}</p>
                        </p>
                        {magia.resistencia === "" ? null : (
                          <p className="flex text-xs">
                            <img
                              src="./img/magias/dados/resistencia.svg"
                              className="w-3"
                            />
                            <p className="my-auto">{magia.resistencia}</p>
                          </p>
                        )}
                      </p>
                    </p>
                    <div
                      className={`bg-cover flex bg-center ${
                        magia.tipo === enumTipo.arcana
                          ? "bg-arcana"
                          : magia.tipo === enumTipo.divina
                          ? "bg-divina"
                          : "bg-universal"
                      } p-3`}
                    >
                      <img
                        src={imagensMagias[idx]}
                        alt={magia.escola}
                        className="w-4 h-4"
                      />
                      <p className="text-center text-xs">{magia.circulo}</p>
                    </div>
                  </div>
                  <div className="m-2 bg-white text-black px-3 py-1 text-justify bg-opacity-70 rounded-xl">
                    {magia.descricao}
                    {magia.aprimoramentos.map((aprimoramento) => (
                      <div className="flex gap-2 text-sm mb-2">
                        <p className="text-justify">
                          <b className="text-red-600">
                            {aprimoramento.pm_a_mais}PM:
                          </b>
                          &nbsp;
                          {aprimoramento.descricao}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              }
              bgColor="transparent"
              p={0}
              openDelay={800}
              placement="right"
              closeDelay={1000}
              closeOnClick={true}
            >
              <div className="px-2 hover:transform hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20 select-none text-red-600 font-bold">
                <p>{magia.nome}</p>
              </div>
            </Tooltip>
            // <Popover>
            //   <PopoverTrigger>
            //     <div className="flex justify-between font-bold hover:transform hover:scale-110 transition-all hover:bg-white hover:bg-opacity-20 hover:cursor-pointer">
            //       <p className="text-red-600">{magia.nome}</p>
            //     </div>
            //   </PopoverTrigger>
            //   <PopoverContent>
            //     <div className="bg-bgT20 rounded-md">
            //       <PopoverArrow />
            //       <PopoverHeader className="text-white font-bold font-tormenta">
            //         <div className="flex justify-between items-center">
            //           <p className="flex flex-col">
            //             <p className="text-center">{magia.nome}</p>
            //             <p className="flex justify-evenly flex-wrap w-full">
            //               <p className="flex text-xs">
            //                 <img
            //                   src="./img/magias/dados/execucao.svg"
            //                   className="w-3"
            //                 />
            //                 <p className="my-auto">{magia.execucao}</p>
            //               </p>
            //               <p className="flex text-xs">
            //                 <img
            //                   src="./img/magias/dados/alcance.svg"
            //                   className="w-3"
            //                 />
            //                 <p className="my-auto">{magia.alcance}</p>
            //               </p>
            //               <p className="flex text-xs">
            //                 <img
            //                   src="./img/magias/dados/duracao.svg"
            //                   className="w-3"
            //                 />
            //                 <p className="my-auto">{magia.duracao}</p>
            //               </p>
            //               <p className="flex text-xs">
            //                 <img
            //                   src="./img/magias/dados/alvo.svg"
            //                   className="w-3"
            //                 />
            //                 <p className="my-auto">{magia.alvo}</p>
            //               </p>
            //               {magia.resistencia === "" ? null : (
            //                 <p className="flex text-xs">
            //                   <img
            //                     src="./img/magias/dados/resistencia.svg"
            //                     className="w-3"
            //                   />
            //                   <p className="my-auto">{magia.resistencia}</p>
            //                 </p>
            //               )}
            //             </p>
            //           </p>
            //           <div
            //             className={`bg-cover flex bg-center ${
            //               magia.tipo === enumTipo.arcana
            //                 ? "bg-arcana"
            //                 : magia.tipo === enumTipo.divina
            //                 ? "bg-divina"
            //                 : "bg-universal"
            //             } p-3`}
            //           >
            //             <img
            //               src={imagensMagias[idx]}
            //               alt={magia.escola}
            //               className="w-4 h-4"
            //             />
            //             <p className="text-center text-xs">{magia.circulo}</p>
            //           </div>
            //         </div>
            //       </PopoverHeader>
            //       <PopoverBody className="m-2 bg-white bg-opacity-70 rounded-xl">
            //         {magia.descricao}
            //         {magia.aprimoramentos.map((aprimoramento) => (
            //           <div className="flex gap-2 text-sm">
            //             <p className="text-justify">
            //               <b className="text-red-600">
            //                 {aprimoramento.pm_a_mais}PM:
            //               </b>
            //               &nbsp;
            //               {aprimoramento.descricao}
            //             </p>
            //           </div>
            //         ))}
            //       </PopoverBody>
            //     </div>
            //   </PopoverContent>
            // </Popover>
          ))}
        </div>
      )}
      <h1 className="text-sm mt-3">
        <b className="text-red-600 font-bold">Tibares</b>
        T${player.tibares.toFixed(2)}
      </h1>
    </div>
  );
}

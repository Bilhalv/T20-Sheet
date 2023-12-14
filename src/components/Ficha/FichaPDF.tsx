import { IconButton } from "@chakra-ui/react";
import {
  pdf,
  Document,
  Page,
  Text,
  View,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";
import { Download } from "lucide-react";
import useCustomToast from "../Geral/Toasted";
import Ficha from "../../classes/Construtores/Ficha";
import { Font } from "@react-pdf/renderer";
import Tormenta from "../../Tormenta.ttf";
import { tabelaDivindades } from "../../classes/Tabelas/Divindades";
import { useState } from "react";
import { poderesArcanista } from "../../classes/Classes/Arcanista";
import { poderesBarbaro } from "../../classes/Classes/Barbaro";
import { poderesBardo } from "../../classes/Classes/Bardo";
import { poderesBucaneiro } from "../../classes/Classes/Bucaneiro";
import { poderesCacador } from "../../classes/Classes/Cacador";
import { poderesCavaleiro } from "../../classes/Classes/Cavaleiro";
import { poderesClerigo } from "../../classes/Classes/Clerigo";
import { poderesDruida } from "../../classes/Classes/Druida";
import { poderesGuerreiro } from "../../classes/Classes/Guerreiro";
import { poderesInventor } from "../../classes/Classes/Inventor";
import { poderesLadino } from "../../classes/Classes/Ladino";
import { poderesLutador } from "../../classes/Classes/Lutador";
import { poderesNobre } from "../../classes/Classes/Nobre";
import { poderesPaladino } from "../../classes/Classes/Paladino";
import { infos } from "../../classes/Construtores/Infos";
import { Poder } from "../../classes/Construtores/Poder";
import { TabelaPoderes } from "../../classes/Tabelas/Poderes";
import { TabelaRacas } from "../../classes/Tabelas/Racas";
import { TabelaClasses } from "../../classes/Tabelas/Classes";
import { Magia } from "../../classes/Construtores/Magia";
import { TabelaMagias } from "../../classes/Tabelas/Magias";
import { ArrayMagias } from "../pagina 2/Magias";

Font.register({
  family: "Tormenta",
  src: Tormenta,
});

Font.register({
  family: "Arial",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-light-webfont.ttf",
});

Font.register({
  family: "Arial Italic",
  src: "https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-lightitalic-webfont.ttf",
  fontStyle: "italic",
});

interface Props {
  personagem: Ficha;
}

export default function FichaPDF({ personagem }: Props) {
  const racaImg = personagem.raca
    ? `./img/racas/perfil/${personagem.raca
        .toLowerCase()
        .replace(/ç/g, "c")
        .replace(/ã/g, "a")
        .replace(/á/g, "a")
        .replace(/é/g, "e")}.png`
    : "";

  const classeImg =
    personagem.classe && personagem.classe.nome
      ? `./img/classes/${personagem.classe.nome
          .toLowerCase()
          .replace(/ç/g, "c")
          .replace(/ã/g, "a")
          .replace(/á/g, "a")
          .replace(/é/g, "e")}.png`
      : "";
  const divindadeImg = tabelaDivindades.find(
    (divindade) => divindade.nome === personagem.divindade
  )?.imagens[1];
  const poderesRaca: infos[] =
    TabelaRacas.find((e) => personagem.raca === e.nome)?.poderes || [];
  const poderesClasse: infos[] =
    TabelaClasses.find((e) => personagem.classe.nome === e.nome)?.habilidades ||
    [];
  const [tabelaTodosPoderes, setTabelaTodosPoderes] = useState<
    Poder[] | infos[]
  >([
    ...[
      ...TabelaPoderes,
      ...poderesArcanista,
      ...poderesBarbaro,
      ...poderesBardo,
      ...poderesBucaneiro,
      ...poderesCacador,
      ...poderesCavaleiro,
      ...poderesClerigo,
      ...poderesDruida,
      ...poderesGuerreiro,
      ...poderesPaladino,
      ...poderesNobre,
      ...poderesLutador,
      ...poderesLadino,
      ...poderesInventor,
    ].filter((poder) => personagem.poderes.includes(poder.nome)),
    ...poderesClasse.filter((poder) => personagem.nivel >= (poder.nivel || 0)),
    ...poderesRaca,
  ]);
  const magias: ArrayMagias[] = TabelaMagias.filter((magia: Magia) => {
    const magiaPersonagem = personagem.magias.find(
      (magiaPersonagem: string) => {
        if (magiaPersonagem.includes("(-1 PM)")) {
          const semExtra = magiaPersonagem.replace("(-1 PM)", "");
          return semExtra === magia.nome;
        } else {
          return magiaPersonagem === magia.nome;
        }
      }
    );
    if (magiaPersonagem) {
      return true;
    }
  });

  const InfoPage = () => (
    <Page style={{ fontFamily: "Tormenta", padding: "60px" }}>
      <Text style={{ fontSize: 30, textAlign: "center", marginBottom: 20 }}>
        Ficha de {personagem.nome}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          marginBottom: 20,
        }}
      >
        <Image src={racaImg} style={{ width: 100, height: 100 }} />
        <Image src={classeImg} style={{ width: 100, height: 100 }} />
        {divindadeImg && (
          <Image src={divindadeImg} style={{ width: 100, height: 100 }} />
        )}
      </View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 20,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View style={{ flexDirection: "column", alignItems: "flex-end" }}>
              <Text>Nome:</Text>
              <Text>Raça:</Text>
              <Text>Classe:</Text>
              <Text>Divindade:</Text>
              <Text>Nível:</Text>
            </View>
            <View style={{ flexDirection: "column", marginLeft: 10 }}>
              <Text>{personagem.nome}</Text>
              <Text>{personagem.raca}</Text>
              <Text>{personagem.classe.nome}</Text>
              <Text>
                {personagem.divindade ? personagem.divindade : "Nenhuma"}
              </Text>
              <Text>{personagem.nivel}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View
            style={{
              flexDirection: "column",
              marginRight: 10,
            }}
          >
            <Text>PV:</Text>
            <Text>PM:</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text>{personagem.pv}</Text>
            <Text>{personagem.pm}</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text>/</Text>
            <Text>/</Text>
          </View>
          <View
            style={{
              flexDirection: "column",
            }}
          >
            <Text>{personagem.pvMax}</Text>
            <Text>{personagem.pmMax}</Text>
          </View>
        </View>
      </View>
      <Text style={{ fontSize: 20, textAlign: "center", marginTop: 20 }}>
        Atributos
      </Text>
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {personagem.atributos.map((atributo) => (
          <View
            key={atributo.atributo}
            style={{
              flexDirection: "column",
              marginBottom: 10,
              backgroundColor: "red",
              color: "white",
              padding: 5,
              borderRadius: 5,
              marginRight: 10,
              alignItems: "center",
              width: 50,
            }}
          >
            <Text>{atributo.valor}</Text>
            <Text>{atributo.atributo.substring(0, 3).toUpperCase()}</Text>
          </View>
        ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Perícias</Text>
        {personagem.pericias
          .filter((pericia) => pericia.treinada > 0)
          .map((pericia) => (
            <View
              key={pericia.nome}
              style={{ flexDirection: "row", justifyContent: "center" }}
            >
              <Text>{pericia.nome}: </Text>
              <Text>{pericia.treinada}</Text>
            </View>
          ))}
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontSize: 20, textAlign: "center", fontWeight: "bold" }}>
          Equipamentos
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 10,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "column",
                flexWrap: "wrap",
                fontSize: 15,
                marginRight: 10,
              }}
            >
              {personagem.mochila.itens.map((item, index) => (
                <Text key={index}>
                  {item.espacos} - {item.nome}
                </Text>
              ))}
            </View>
            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "column",
                flexWrap: "wrap",
                fontSize: 15,
              }}
            >
              {[
                ...personagem.mochila.armaduras,
                ...personagem.mochila.armas,
              ].map((item, index) => (
                <Text key={index}>
                  {item.espacos} - {item.nome}
                </Text>
              ))}
            </View>
          </View>
          <View style={{ fontSize: 15, alignItems: "flex-end", flex: 1 }}>
            <Text style={{ textAlign: "center", fontWeight: "bold" }}>
              Tibares (T$)
            </Text>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "column",
                  alignItems: "flex-end",
                  marginRight: 10,
                }}
              >
                <Text>Cobre:</Text>
                <Text>Prata:</Text>
                <Text>Ouro:</Text>
              </View>
              <View style={{ flexDirection: "column" }}>
                <Text>TC {personagem.mochila.tibares.TibaresCobre}</Text>
                <Text>TP {personagem.mochila.tibares.TibaresNormal}</Text>
                <Text>TO {personagem.mochila.tibares.TibaresOuro}</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </Page>
  );

  const ataques = personagem.mochila.armas.map((arma) => {
    return {
      nome: arma.nome,
      dano: arma.dano,
      crit: arma.crit,
      tipo: arma.tipo,
    };
  });

  const escudo =
    personagem.mochila.armaduras.find((armadura) => armadura.tipo === "Escudo")
      ?.defesa || 0;
  const armadura =
    personagem.mochila.armaduras.find(
      (armadura) => armadura.tipo === "Armadura"
    )?.defesa || 0;
  const total = escudo + armadura + 10;

  const DefesaView = () => (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: "center",
          marginTop: 20,
        }}
      >
        Defesa
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: 10,
          textAlign: "center",
        }}
      >
        <View style={{ fontWeight: "bold", flex: 1, flexDirection: "column" }}>
          <Text>Total</Text>
          <Text>{total}</Text>
        </View>
        <View style={{ fontWeight: "bold", flex: 1, flexDirection: "column" }}>
          <Text>Escudo</Text>
          <Text>{escudo}</Text>
        </View>
        <View style={{ fontWeight: "bold", flex: 1, flexDirection: "column" }}>
          <Text>Armadura</Text>
          <Text>{armadura}</Text>
        </View>
      </View>
    </View>
  );

  const AtaquesView = () => (
    <View style={{ flex: 1 }}>
      <Text style={{ fontSize: 20, textAlign: "center" }}>Ataques</Text>
      <View style={{ flexDirection: "column", gap: "20px" }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 10,
            textAlign: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", flex: 1 }}>Nome</Text>
          <Text style={{ fontWeight: "bold", flex: 1 }}>Dano</Text>
          <Text style={{ fontWeight: "bold", flex: 1 }}>Crit</Text>
          <Text style={{ fontWeight: "bold", flex: 1 }}>Tipo</Text>
        </View>
        {ataques.map((ataque) => (
          <View
            key={ataque.nome}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              fontSize: 15,
              textAlign: "center",
            }}
          >
            <Text style={{ flex: 1 }}>{ataque.nome}</Text>
            <Text style={{ flex: 1 }}>{ataque.dano}</Text>
            <Text style={{ flex: 1 }}>{ataque.crit}</Text>
            <Text style={{ flex: 1 }}>{ataque.tipo}</Text>
          </View>
        ))}
      </View>
    </View>
  );

  const AtaquesPage = () => (
    <Page
      style={{
        padding: "60px",
        fontFamily: "Tormenta",
      }}
    >
      <View
        style={{
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        <AtaquesView />
        <DefesaView />
      </View>
    </Page>
  );

  const PoderesPage = () => (
    <Page
      style={{
        padding: "60px",
        fontFamily: "Tormenta",
      }}
    >
      <View style={{ flexDirection: "column", gap: "20px" }}>
        <Text style={{ fontSize: 20, textAlign: "center" }}>Habilidades</Text>
        {tabelaTodosPoderes.map((poder) => (
          <View key={poder.nome} style={{ flexDirection: "column" }}>
            <Text style={{ textAlign: "center", fontSize: 15 }}>
              {poder.nome}
            </Text>
            <Text
              style={{
                textAlign: "justify",
                fontSize: 12,
                fontFamily: "Arial",
              }}
            >
              &nbsp;&nbsp;&nbsp;{poder.descricao}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  );

  const MagiasPage = () => (
    <Page
      style={{
        padding: "60px",
        fontFamily: "Tormenta",
      }}
    >
      <View style={{ flexDirection: "column", gap: "10px" }}>
        <Text style={{ fontSize: 22, textAlign: "center" }}>Magias</Text>
        {magias.map((magia: ArrayMagias, index) => (
          <View key={index}>
            <Text
              style={{
                textAlign: "center",
                fontSize: 20,
              }}
              key={index}
            >
              {magia.nome}
            </Text>
            <View
              style={{
                flexDirection: "column",
                flexWrap: "wrap",
                fontSize: 12,
              }}
            >
              <Text>{magia.circulo}º Circulo</Text>
              <Text>Execução: {magia.execucao}</Text>
              <Text>Alcance: {magia.alcance}</Text>
              <Text>Duracao: {magia.duracao}</Text>
              <Text>Alvo: {magia.alvo}</Text>
              {magia.resistencia && (
                <Text>Resistência: {magia.resistencia}</Text>
              )}
            </View>
            <Text
              style={{
                textAlign: "justify",
                fontSize: 12,
                fontFamily: "Arial",
              }}
            >
              &nbsp;&nbsp;&nbsp;{magia.descricao}
            </Text>
          </View>
        ))}
      </View>
    </Page>
  );

  const MyDocument = () => (
    <Document>
      <InfoPage />
      <PoderesPage />
      <AtaquesPage />
      {personagem.magias.length > 0 && <MagiasPage />}
    </Document>
  );

  const { showCustomToast } = useCustomToast();
  const downloadPdf = async () => {
    const blob = await pdf(<MyDocument />).toBlob();
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `${personagem.nome}.pdf`;
    link.click();
    showCustomToast({
      title: "Transformando em PDF...",
      desc: "Aguarde um momento",
      status: "loading",
      duration: 3000,
      onCloseComplete: () => {
        showCustomToast({
          title: "PDF baixado com sucesso!",
          desc: "Verifique sua pasta de downloads",
          status: "success",
        });
      },
    });
  };
  return (
    <>
      <IconButton
        className="hover:bg-opacity-80 hover:bg-white hover:border-red-600 hover:text-red-600 hover:transform hover:scale-125 transition-all mb-[-10px] ml-auto mr-4 z-10"
        color={"white"}
        bg={"red"}
        rounded={"full"}
        _hover={{}}
        border={"2px solid white"}
        aria-label="Download"
        icon={<Download />}
        onClick={downloadPdf}
      />
    </>
  );
}

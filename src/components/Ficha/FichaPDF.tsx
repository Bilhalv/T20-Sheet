import { Button, IconButton } from "@chakra-ui/react";
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

Font.register({
  family: "Tormenta",
  src: Tormenta,
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
  const MyDocument = () => (
    <Document>
      <Page style={{ fontFamily: "Tormenta", padding: "60px" }}>
        <Text style={{ fontSize: 30, textAlign: "center" }}>
          Ficha do personagem {personagem.nome}
        </Text>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-evenly",
          }}
        >
          <Image src={racaImg} style={{ width: 100, height: 100 }} />
          <Image src={classeImg} style={{ width: 100, height: 100 }} />
          {personagem.divindade !== "Todas" &&
            personagem.divindade !== "Nenhuma" && (
              <Image
                src={divindadeImg}
                style={{ width: 100, height: 100 }}
              />
            )}
        </View>
        <View
          style={{
            flexDirection: "row",
            marginBottom: 10,
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Classe: </Text>
            <Text>{personagem.classe.nome}</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Raça: </Text>
            <Text>{personagem.raca}</Text>
          </View>
          <View style={{ flexDirection: "row", marginBottom: 10 }}>
            <Text>Nível: </Text>
            <Text>{personagem.nivel}</Text>
          </View>
        </View>
      </Page>
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
      <PDFViewer width="100%" height="600">
        <MyDocument />
      </PDFViewer>
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

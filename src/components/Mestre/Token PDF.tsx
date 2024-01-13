import React from "react";
import {
  Page,
  View,
  Document,
  Image,
  PDFViewer,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { IconButton, useToast } from "@chakra-ui/react";
import useCustomToast from "../Geral/Toasted";
import { Download } from "lucide-react";
interface Props {
  img: string;
  size: "Pequeno" | "Médio" | "Grande";
  amount: number;
  nome: string;
}

const styles = StyleSheet.create({
  section: {
    padding: 10,
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    gap: 10,
    justifyContent: "space-evenly",
    flexWrap: "wrap",
    width: "100%",
  },
});

export default function TokenPDF({ img, size, amount, nome }: Props) {
  const tamanho: Record<string, number> = {
    Pequeno: 1.25,
    Médio: 2.5,
    Grande: 5,
  };
  const MyDocument = () => (
    <Document>
      <Page size="A4">
        <View style={styles.section}>
          {Array.from({ length: amount }).map((_, idx) => (
            <Image
              key={idx}
              style={{
                width: `${tamanho[size]}cm`,
                height: `${tamanho[size]}cm`,
              }}
              src={img}
            />
          ))}
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
    link.download = `${nome}x${amount}.pdf`;
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
        aria-label="Baixar PDF"
        icon={<Download />}
        onClick={() => downloadPdf()}
      />
      <PDFViewer className="w-full h-fit">
        <MyDocument />
      </PDFViewer>
    </>
  );
}

import React from "react";
import {
  Page,
  View,
  Document,
  Image,
  StyleSheet,
  pdf,
} from "@react-pdf/renderer";
import { IconButton, Input, NumberInput, useToast } from "@chakra-ui/react";
import useCustomToast from "../Geral/Toasted";
import { Download } from "lucide-react";
interface Props {
  img: string;
  size: "Pequeno" | "Médio" | "Grande";
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

export default function TokenPDF({ img, size, nome }: Props) {
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
  const [amount, setAmount] = React.useState(0);
  return (
    <>
      <div className="flex justify-between">
        <IconButton
          aria-label="Baixar PDF"
          bgColor={"red"}
          size={"sm"}
          color={"white"}
          rounded={"full"}
          transition={"all 0.2s ease-in-out"}
          _hover={{
            bgColor: "transparent",
            color: "red",
            transform: "scale(1.1)",
            border: "2px solid red",
          }}
          icon={<Download />}
          onClick={() => downloadPdf()}
        />
        <Input
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          className="text-center"
          size="sm"
          w={"50px"}
          borderRadius={"full"}
        />
      </div>
    </>
  );
}

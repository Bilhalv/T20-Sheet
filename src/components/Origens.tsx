import { Select } from "@chakra-ui/react";
import React, { useState } from "react";

const Origens: React.FC = () => {
  const [origem, setOrigem] = useState("Acólito");
  const [origemDesc, setOrigemDesc] = useState(
    "Neste mundo agraciado com tantos deuses e igrejas, muitos ingressam cedo em alguma ordem religiosa o que, dependendo de quem é seu deus padroeiro, pode ser motivo de admiração ou repulsa. Talvez você tenha ouvido o chamado da fé, seguiu a tradição espiritual de sua família, ou apenas foi abandonado quando pequeno às portas de um templo ou mosteiro. Tenha ou não se tornado um devoto, suas lembranças são carregadas de orações, evangelhos e outros ensinamentos."
  );
  const [origemItens, setOrigemItens] = useState([
    "Símbolo sagrado",
    "traje de sacerdote",
  ]);
  const [origemBeneficios, setOrigemBeneficios] = useState({
    pericias: ["Cura", "Religião", "Vontade"],
    poderes: ["Medicina", "Membro da Igreja", "Vontade de Ferro"],
  });
  const [origemImage, setOrigemImage] = useState("./img/personagem.png");
  const [origemPoder, setOrigemPoder] = useState({
    nome: "Membro da Igreja",
    desc: "Você consegue hospedagem confortável e informação em qualquer templo de sua divindade, para você e seus aliados.",
  });
  return (
    <>
      <h1 className="text-xl text-center mb-4">Origem</h1>
      <section className="bg-gray-300 p-3 rounded-lg bg-opacity-80 shadow-lg h-fit">
        <section className="flex">
          <div className="w-[50%]">
            <Select placeholder="Escolha Sua Origem">
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
            </Select>
            <img src={origemImage} />
          </div>
          <div>
            <p className="text-sm my-auto">&nbsp;&nbsp;{origemDesc}</p>
            <ul className="mt-2">
              <li>
                <b>Itens.</b> {origemItens.join(", ")}
              </li>
              <li>
                <b>Benefícios.</b> {origemBeneficios.pericias.join(", ")};
                (perícias) e {origemBeneficios.poderes.join(", ")} (poderes).
              </li>
            </ul>
            <h3 className="mt-2 font-bold">{origemPoder.nome}</h3>
            <p>{origemPoder.desc}</p>
          </div>
        </section>
        <button className="my-2 text-red-800 bg-white hover:bg-gray-300 px-5 rounded w-fit transition-all ease-in-out shadow-lg">
          Confirmar
        </button>
      </section>
    </>
  );
};

export default Origens;

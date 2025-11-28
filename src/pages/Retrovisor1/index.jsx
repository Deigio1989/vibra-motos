import React from "react";
import Retrovisor from "../../components/Retrovisor";
import { withPageLoader } from "../../hoc/withPageLoader";
import retrovisorBack1 from "../../assets/retrovisor-back.png";

const Retrovisor1Base = () => {
  const paragraphs = [
    "O Brasil é, sem dúvida, um país de motociclistas. A moto simboliza liberdade, praticidade e paixão, mas também carrega riscos elevados. Entender o contexto, respeitar as regras e pilotar de forma consciente é o que transforma essa liberdade em algo sustentável.",
    <>
      Ao final, fica uma verdade simples e poderosa:{" "}
      <b>
        não importa se o destino é o trabalho, a estrada ou a trilha… A chegada
        só tem sentido se for com vida.
      </b>
    </>,
    "O Brasil é apaixonado por motos. Mas paixão sem consciência pode virar tragédia. Vale mais chegar um pouco depois do que não chegar. Concorda?",
  ];

  return (
    <Retrovisor
      paragraphs={paragraphs}
      nextRoute="/quiz1"
      nextButtonAlt="Ir para Quiz"
    />
  );
};

const Retrovisor1 = withPageLoader(Retrovisor1Base, {
  imageSources: [retrovisorBack1],
  minLoadingTime: 400,
  loadingText: "Carregando...",
});

export default Retrovisor1;

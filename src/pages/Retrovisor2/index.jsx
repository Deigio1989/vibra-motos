import React from "react";
import Retrovisor from "../../components/Retrovisor";
import { withPageLoader } from "../../hoc/withPageLoader";
import retrovisorBack2 from "../../assets/retrovisor-back-2.png";

const Retrovisor2Base = () => {
  const paragraphs = [
    "Pilotar com segurança é mais do que seguir regras, é assumir um compromisso diário com a vida. Cada vez que um motociclista veste o capacete, revisa sua moto e decide respeitar os limites, ele aumenta as chances de voltar para casa.",
    "A moto pode representar liberdade, praticidade ou aventura, mas nenhuma dessas experiências tem valor se não forem vividas com responsabilidade.",
    <>
      No fim, o verdadeiro destino de cada viagem é sempre o mesmo:{" "}
      <b>voltar vivo e inteiro, pronto para a próxima jornada.</b>
    </>,
  ];

  return (
    <Retrovisor
      imgSrc={retrovisorBack2}
      paragraphs={paragraphs}
      nextRoute="/quiz2"
      nextButtonAlt="Ir para Quiz 2"
    />
  );
};

const Retrovisor2 = withPageLoader(Retrovisor2Base, {
  imageSources: [retrovisorBack2],
  minLoadingTime: 400,
  loadingText: "Carregando...",
});

export default Retrovisor2;

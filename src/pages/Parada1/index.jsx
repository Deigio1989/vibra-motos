import React from "react";
import { ParadaContainer } from "./styles";
import PitstopTitle from "../../components/PitstopTitle";
import ParadaContent1_1 from "../../components/ParadaContent1-1";
import ParadaContent1_2 from "../../components/ParadaContent1-2";
import ParadaContent1_3 from "../../components/ParadaContent1-3";
import ParadaContent1_4 from "../../components/ParadaContent1-4";
import ParadaContent1_5 from "../../components/ParadaContent1-5";
import ParadaContent1_6 from "../../components/ParadaContent1-6";
import ParadaContent1_7 from "../../components/ParadaContent1-7";
import placa from "../../assets/placa.png";
import Roadmap from "../../components/Roadmap";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import ContentAnimation from "../../components/ContentAnimation";

// Componente interno que usa o navigation
const ParadaContent = () => {
  const { activeContentId } = useNavigation();

  // Função para renderizar apenas o content ativo com animação
  const renderActiveContent = () => {
    const content = (() => {
      switch (activeContentId) {
        case 1:
          return <ParadaContent1_1 />;
        case 2:
          return <ParadaContent1_2 />;
        case 3:
          return <ParadaContent1_3 />;
        case 4:
          return <ParadaContent1_4 />;
        case 5:
          return <ParadaContent1_5 />;
        case 6:
          return <ParadaContent1_6 />;
        case 7:
          return <ParadaContent1_7 />;
        default:
          return <ParadaContent1_1 />; // Fallback para o primeiro
      }
    })();

    // Envolve o content com animação, usando activeContentId como key para forçar re-animação
    return (
      <ContentAnimation key={activeContentId}>
        {content}
      </ContentAnimation>
    );
  };

  return renderActiveContent();
};

const Parada1 = () => {
  return (
    <NavigationProvider>
      <ParadaContainer className="container">
        <PitstopTitle
          title="PRIMEIRA PARADA"
          iconSrc={placa}
          iconAlt="placa parar"
        />
        <Roadmap />

        {/* Renderiza apenas o content ativo */}
        <ParadaContent />
      </ParadaContainer>
    </NavigationProvider>
  );
};

export default Parada1;

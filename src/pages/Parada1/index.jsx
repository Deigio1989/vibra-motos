import React from "react";
import { useNavigate } from "react-router-dom";
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
import avancar from "../../assets/avancar.png";
import back from "../../assets/back.png";

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
    return <ContentAnimation key={activeContentId}>{content}</ContentAnimation>;
  };

  return renderActiveContent();
};

// Componente interno que usa navigation e navigate
const ParadaNavigation = () => {
  const { activeContentId, setActiveContent } = useNavigation();
  const navigate = useNavigate();

  const totalContents = 7; // Total de conteúdos da Parada1

  const handleNext = () => {
    if (activeContentId < totalContents) {
      setActiveContent(activeContentId + 1);
      // Scroll para o topo ao avançar conteúdo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se está no último conteúdo, navega para Quiz1
      navigate("/quiz1");
    }
  };

  const handleBack = () => {
    if (activeContentId > 1) {
      setActiveContent(activeContentId - 1);
      // Scroll para o topo ao voltar conteúdo
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const isFirstContent = activeContentId === 1;
  const isLastContent = activeContentId === totalContents;

  return (
    <div className="navigation">
      <img
        className="back-button"
        src={back}
        alt="Voltar"
        onClick={handleBack}
        style={{
          opacity: isFirstContent ? 0 : 1,
          cursor: isFirstContent ? "not-allowed" : "pointer",
          pointerEvents: isFirstContent ? "none" : "auto",
        }}
      />
      <img
        className="next-button"
        src={avancar}
        alt={isLastContent ? "Ir para Quiz" : "Avançar"}
        onClick={handleNext}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
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

        {/* Navegação com funcionalidade */}
        <ParadaNavigation />
      </ParadaContainer>
    </NavigationProvider>
  );
};

export default Parada1;

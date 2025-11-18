import React from "react";
import { useNavigate } from "react-router-dom";
import { ParadaContainer } from "../../styles/ParadaContentStyles";
import { NextButton } from "../../styles/ButtonStyles";
import PitstopTitle from "../../components/PitstopTitle";
import ParadaContent2_1 from "../../components/ParadaContent2-1";
import ParadaContent2_2 from "../../components/ParadaContent2-2";
import ParadaContent2_3 from "../../components/ParadaContent2-3";
import ParadaContent2_4 from "../../components/ParadaContent2-4";
import ParadaContent2_5 from "../../components/ParadaContent2-5";
import ParadaContent2_6 from "../../components/ParadaContent2-6";
import placa from "../../assets/placa.png";
import avancar from "../../assets/avancar.png";
import back from "../../assets/back.png";
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap2";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import { ProgressionProvider } from "../../store/progressionStore";
import ContentAnimation from "../../components/ContentAnimation";

// Componente interno que usa o navigation
const ParadaContent = () => {
  const { activeContentId } = useNavigation();

  // Função para renderizar apenas o content ativo com animação
  const renderActiveContent = () => {
    const content = (() => {
      switch (activeContentId) {
        case 1:
          return <ParadaContent2_1 />;
        case 2:
          return <ParadaContent2_2 />;
        case 3:
          return <ParadaContent2_3 />;
        case 4:
          return <ParadaContent2_4 />;
        case 5:
          return <ParadaContent2_5 />;
        case 6:
          return <ParadaContent2_6 />;

        default:
          return <ParadaContent2_1 />; // Fallback para o primeiro
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

  const totalContents = 6; // Total de conteúdos da Parada2

  const handleNext = () => {
    if (activeContentId < totalContents) {
      setActiveContent(activeContentId + 1);
      // Scroll para o topo ao avançar conteúdo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se está no último conteúdo, navega para Retrovisor2
      navigate("/retrovisor2");
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
      <NextButton
        src={avancar}
        alt={isLastContent ? "Ir para Quiz" : "Avançar"}
        onClick={handleNext}
      />
    </div>
  );
};

const Parada2 = () => {
  return (
    <ProgressionProvider>
      <NavigationProvider>
        <ParadaContainer className="container">
          <PitstopTitle
            title="SEGUNDA PARADA"
            iconSrc={placa}
            iconAlt="placa parar"
          />
          <Roadmap />

          {/* Renderiza apenas o content ativo */}
          <ParadaContent />

          {/* Navegação com funcionalidade */}
          <ParadaNavigation />

          {/* Tarja listra no final */}
          <div className="tarja-listra">
            <img src={tarjaListra} alt="" />
          </div>
        </ParadaContainer>
      </NavigationProvider>
    </ProgressionProvider>
  );
};

export default Parada2;

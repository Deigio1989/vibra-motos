import React from "react";
import { useNavigate } from "react-router-dom";
import { ParadaContainer } from "../../styles/ParadaContentStyles";
import { NextButton } from "../../styles/ButtonStyles";
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
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap";
import ModularIntro from "../../components/ModularIntro";
import { PARADA1_INTRO_DATA } from "../../data/parada1IntroData";
import { withPageLoader } from "../../hoc/withPageLoader";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import {
  ProgressionProvider,
  useProgression,
} from "../../store/progressionStore";
import ContentAnimation from "../../components/ContentAnimation";
import { useContentTimer } from "../../hooks/useContentTimer";

// Importar todas as imagens para pré-carregamento
import mapaMoto from "../../assets/mapa-moto.png";
import imgParada12 from "../../assets/img-parada-1-2.png";
import imgParada13 from "../../assets/img-parada-1-3.png";
import imgParada14 from "../../assets/img-parada-1-4.png";
import imgParada15 from "../../assets/img-parada-1-5.png";
import imgParada16 from "../../assets/img-parada-1-6.png";
import imgParada171 from "../../assets/img-parada-1-7-1.png";
import imgParada172 from "../../assets/img-parada-1-7-2.png";
import imgParada173 from "../../assets/img-parada-1-7-3.png";
import imgParada174 from "../../assets/img-parada-1-7-4.png";
import Timer from "../../components/Timer";

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
  const { updateProgression } = useProgression();
  const navigate = useNavigate();
  const { canAdvance } = useContentTimer(
    `parada1-content${activeContentId}`,
    60
  );

  const totalContents = 7; // Total de conteúdos da Parada1

  const handleNext = () => {
    if (activeContentId < totalContents) {
      const nextContentId = activeContentId + 1;
      setActiveContent(nextContentId);
      updateProgression(nextContentId); // Atualiza a progressão igual ao anchor point
      // Scroll para o topo ao avançar conteúdo
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    } else {
      // Se está no último conteúdo, navega para Retrovisor1
      navigate("/retrovisor1");
    }
  };

  const handleBack = () => {
    if (activeContentId > 1) {
      setActiveContent(activeContentId - 1);
      // Scroll para o topo ao voltar conteúdo
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
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
      <Timer contentId={`parada1-content${activeContentId}`} />
      <NextButton
        onClick={handleNext}
        disabled={!canAdvance}
        $canAdvance={canAdvance}
      >
        <img src={avancar} alt={isLastContent ? "Ir para Quiz" : "Avançar"} />
      </NextButton>
    </div>
  );
};

// Componente que usa o hook dentro do provider
const Parada1Content = () => {
  const { activeContentId } = useNavigation();

  return (
    <ParadaContainer className="container">
      <PitstopTitle
        title="PRIMEIRA PARADA"
        iconSrc={placa}
        iconAlt="placa parar"
      />
      {/* ModularIntro só aparece no primeiro bloco */}
      {activeContentId === 1 && <ModularIntro sections={PARADA1_INTRO_DATA} />}
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
  );
};

const Parada1Base = () => {
  return (
    <ProgressionProvider>
      <NavigationProvider>
        <Parada1Content />
      </NavigationProvider>
    </ProgressionProvider>
  );
};

// Aplicar loading screen com pré-carregamento de imagens
const Parada1 = withPageLoader(Parada1Base, {
  imageSources: [
    placa,
    avancar,
    back,
    tarjaListra,
    mapaMoto,
    imgParada12,
    imgParada13,
    imgParada14,
    imgParada15,
    imgParada16,
    imgParada171,
    imgParada172,
    imgParada173,
    imgParada174,
  ],
  minLoadingTime: 500,
  loadingText: "Preparando conteúdo...",
});

export default Parada1;

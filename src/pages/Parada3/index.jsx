import React from "react";
import { useNavigate } from "react-router-dom";
import { ParadaContainer } from "../../styles/ParadaContentStyles";
import { NextButton } from "../../styles/ButtonStyles";
import PitstopTitle from "../../components/PitstopTitle";
import ParadaContent3_1 from "../../components/ParadaContent3-1";
import ParadaContent3_2 from "../../components/ParadaContent3-2";
import ParadaContent3_3 from "../../components/ParadaContent3-3";
import ParadaContent3_4 from "../../components/ParadaContent3-4";
import ParadaContent3_5 from "../../components/ParadaContent3-5";
import ParadaContent3_6 from "../../components/ParadaContent3-6";
import ParadaContent3_7 from "../../components/ParadaContent3-7";
import ParadaContent3_8 from "../../components/ParadaContent3-8";
import placa from "../../assets/placa.png";
import avancar from "../../assets/avancar.png";
import back from "../../assets/back.png";
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap3";
import ModularIntro from "../../components/ModularIntro";
import { PARADA3_INTRO_DATA } from "../../data/parada3IntroData";
import { withPageLoader } from "../../hoc/withPageLoader";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import {
  ProgressionProvider,
  useProgression,
} from "../../store/progressionStore";
import ContentAnimation from "../../components/ContentAnimation";

// Importar imagens para pré-carregamento
import imgParada14 from "../../assets/img-parada-1-4.png";
import imgParada32 from "../../assets/img-parada-3-2.png";
import imgParada33 from "../../assets/img-parada-3-3.png";
import imgParada34 from "../../assets/img-parada-3-4.png";
import imgParada35 from "../../assets/img-parada-3-5.png";
import imgParada36 from "../../assets/img-parada-3-6.png";
import imgParada37 from "../../assets/img-parada-3-7.png";

// Componente interno que usa o navigation
const ParadaContent = () => {
  const { activeContentId } = useNavigation();

  // Função para renderizar apenas o content ativo com animação
  const renderActiveContent = () => {
    const content = (() => {
      switch (activeContentId) {
        case 1:
          return <ParadaContent3_1 />;
        case 2:
          return <ParadaContent3_2 />;
        case 3:
          return <ParadaContent3_3 />;
        case 4:
          return <ParadaContent3_4 />;
        case 5:
          return <ParadaContent3_5 />;
        case 6:
          return <ParadaContent3_6 />;
        case 7:
          return <ParadaContent3_7 />;
        case 8:
          return <ParadaContent3_8 />;

        default:
          return <ParadaContent3_1 />; // Fallback para o primeiro
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

  const totalContents = 8; // Total de conteúdos da Parada3

  const handleNext = () => {
    if (activeContentId < totalContents) {
      const nextContentId = activeContentId + 1;
      setActiveContent(nextContentId);
      updateProgression(nextContentId); // Atualiza a progressão igual ao anchor point
      // Scroll para o topo ao avançar conteúdo
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Se está no último conteúdo, navega para Retrovisor3
      navigate("/retrovisor3");
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
      <NextButton onClick={handleNext}>
        <img src={avancar} alt={isLastContent ? "Ir para Quiz" : "Avançar"} />
      </NextButton>
    </div>
  );
};

// Componente que usa o hook dentro do provider
const Parada3Content = () => {
  const { activeContentId } = useNavigation();

  return (
    <ParadaContainer className="container">
      <PitstopTitle
        title="TERCEIRA PARADA"
        iconSrc={placa}
        iconAlt="placa parar"
      />
      {/* ModularIntro só aparece no primeiro bloco */}
      {activeContentId === 1 && <ModularIntro sections={PARADA3_INTRO_DATA} />}
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

const Parada3Base = () => {
  return (
    <ProgressionProvider>
      <NavigationProvider>
        <Parada3Content />
      </NavigationProvider>
    </ProgressionProvider>
  );
};

// Aplicar loading screen com pré-carregamento de imagens
const Parada3 = withPageLoader(Parada3Base, {
  imageSources: [
    placa,
    avancar,
    back,
    tarjaListra,
    imgParada14,
    imgParada32,
    imgParada33,
    imgParada34,
    imgParada35,
    imgParada36,
    imgParada37,
  ],
  minLoadingTime: 500,
  loadingText: "Preparando conteúdo...",
});

export default Parada3;

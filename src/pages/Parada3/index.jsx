import React, { useState } from "react";
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
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap3";
import ModularIntro from "../../components/ModularIntro";
import ContentModal from "../../components/ContentModal";
import { PARADA3_INTRO_DATA } from "../../data/parada3IntroData";
import { withPageLoader } from "../../hoc/withPageLoader";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import {
  ProgressionProvider,
  useProgression,
} from "../../store/progressionStore";
import { useContentTimer } from "../../hooks/useContentTimer";

// Importar imagens para pré-carregamento
import imgParada14 from "../../assets/img-parada-1-4.png";
import imgParada32 from "../../assets/img-parada-3-2.png";
import imgParada33 from "../../assets/img-parada-3-3.png";
import imgParada34 from "../../assets/img-parada-3-4.png";
import imgParada35 from "../../assets/img-parada-3-5.png";
import imgParada36 from "../../assets/img-parada-3-6.png";
import imgParada37 from "../../assets/img-parada-3-7.png";

const TOTAL_CONTENTS = 8;

const Parada3Content = () => {
  const navigate = useNavigate();
  const { activeContentId, setActiveContent } = useNavigation();
  const { updateProgression } = useProgression();
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitedContents, setVisitedContents] = useState(new Set());

  const { canAdvance } = useContentTimer(`parada3-content${activeContentId}`);

  const handleIntroAdvance = () => {
    setShowIntro(false);
  };

  const handleAnchorClick = (anchorId) => {
    setActiveContent(anchorId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    // Marca conteúdo como visitado
    setVisitedContents((prev) => new Set([...prev, activeContentId]));

    // Fecha a modal
    setIsModalOpen(false);

    // Se é o último conteúdo, navega para o próximo destino
    if (activeContentId === TOTAL_CONTENTS) {
      navigate("/retrovisor3");
    } else {
      // Se não é o último, apenas abre o próximo anchor (mas não a modal)
      const nextContentId = activeContentId + 1;
      setActiveContent(nextContentId);
      updateProgression(nextContentId);
    }
  };

  const handleFinalAdvance = () => {
    if (visitedContents.size === TOTAL_CONTENTS) {
      navigate("/retrovisor3");
    }
  };

  const allContentsVisited = visitedContents.size === TOTAL_CONTENTS;

  const renderModalContent = () => {
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
        return null;
    }
  };

  return (
    <ParadaContainer className="container">
      <PitstopTitle
        title="TERCEIRA PARADA"
        iconSrc={placa}
        iconAlt="placa parar"
      />
      {showIntro && (
        <>
          <ModularIntro sections={PARADA3_INTRO_DATA} />
          <NextButton
            onClick={handleIntroAdvance}
            style={{ marginTop: "40px", marginBottom: "40px" }}
          >
            <img src={avancar} alt="Avançar" />
          </NextButton>
        </>
      )}
      {!showIntro && (
        <>
          <Roadmap onAnchorClick={handleAnchorClick} />
          {/*  {allContentsVisited && (
            <NextButton
              onClick={handleFinalAdvance}
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              <img src={avancar} alt="Avançar para Retrovisor 3" />
            </NextButton>
          )} */}
        </>
      )}
      <div className="tarja-listra">
        <img src={tarjaListra} alt="" />
      </div>
      <ContentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contentId={`parada3-content${activeContentId}`}
        canAdvance={canAdvance}
      >
        {renderModalContent()}
      </ContentModal>
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

import React, { useState } from "react";
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
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap2";
import ModularIntro from "../../components/ModularIntro";
import ContentModal from "../../components/ContentModal";
import { PARADA2_INTRO_DATA } from "../../data/parada2IntroData";
import { withPageLoader } from "../../hoc/withPageLoader";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import {
  ProgressionProvider,
  useProgression,
} from "../../store/progressionStore";
import { useContentTimer } from "../../hooks/useContentTimer";

// Importar imagens para pré-carregamento
import imgParada21 from "../../assets/img-parada-2-1.png";
import imgParada221 from "../../assets/img-parada-2-2-1.png";
import imgParada222 from "../../assets/img-parada-2-2-2.png";
import imgParada223 from "../../assets/img-parada-2-2-3.png";
import imgParada23 from "../../assets/img-parada-2-3.png";
import imgParada14 from "../../assets/img-parada-1-4.png";
import imgParada25 from "../../assets/img-parada-2-5.png";
import imgParada26 from "../../assets/img-parada-2-6.png";

const TOTAL_CONTENTS = 6;

const Parada2Content = () => {
  const navigate = useNavigate();
  const { activeContentId, setActiveContent } = useNavigation();
  const { updateProgression } = useProgression();
  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitedContents, setVisitedContents] = useState(new Set());

  const { canAdvance } = useContentTimer(`parada2-content${activeContentId}`);

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

    // Se não é o último, apenas abre o próximo anchor (mas não a modal)
    if (activeContentId < TOTAL_CONTENTS) {
      const nextContentId = activeContentId + 1;
      setActiveContent(nextContentId);
      updateProgression(nextContentId);
    } else {
      // Último conteúdo visitado
      updateProgression(activeContentId);
    }
  };

  const handleFinalAdvance = () => {
    if (visitedContents.size === TOTAL_CONTENTS) {
      navigate("/retrovisor2");
    }
  };

  const allContentsVisited = visitedContents.size === TOTAL_CONTENTS;

  const renderModalContent = () => {
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
        return null;
    }
  };

  return (
    <ParadaContainer className="container">
      <PitstopTitle
        title="SEGUNDA PARADA"
        iconSrc={placa}
        iconAlt="placa parar"
      />
      {showIntro && (
        <>
          <ModularIntro sections={PARADA2_INTRO_DATA} />
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
          {allContentsVisited && (
            <NextButton
              onClick={handleFinalAdvance}
              style={{ marginTop: "40px", marginBottom: "40px" }}
            >
              <img src={avancar} alt="Avançar para Retrovisor 2" />
            </NextButton>
          )}
        </>
      )}
      <div className="tarja-listra">
        <img src={tarjaListra} alt="" />
      </div>
      <ContentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contentId={`parada2-content${activeContentId}`}
        canAdvance={canAdvance}
      >
        {renderModalContent()}
      </ContentModal>
    </ParadaContainer>
  );
};

const Parada2Base = () => {
  return (
    <ProgressionProvider>
      <NavigationProvider>
        <Parada2Content />
      </NavigationProvider>
    </ProgressionProvider>
  );
};

// Aplicar loading screen com pré-carregamento de imagens
const Parada2 = withPageLoader(Parada2Base, {
  imageSources: [
    placa,
    avancar,
    tarjaListra,
    imgParada21,
    imgParada221,
    imgParada222,
    imgParada223,
    imgParada23,
    imgParada14,
    imgParada25,
    imgParada26,
  ],
  minLoadingTime: 500,
  loadingText: "Preparando conteúdo...",
});

export default Parada2;

import React, { useState } from "react";
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
import tarjaListra from "../../assets/tarja-listra.jpg";

import Roadmap from "../../components/Roadmap";
import ModularIntro from "../../components/ModularIntro";
import ContentModal from "../../components/ContentModal";
import { PARADA1_INTRO_DATA } from "../../data/parada1IntroData";
import { withPageLoader } from "../../hoc/withPageLoader";
import { NavigationProvider, useNavigation } from "../../store/navigationStore";
import {
  ProgressionProvider,
  useProgression,
} from "../../store/progressionStore";
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

const TOTAL_CONTENTS = 7;

// Componente que gerencia a modal e conteúdo
const Parada1Content = () => {
  const { activeContentId, setActiveContent } = useNavigation();
  const { updateProgression } = useProgression();
  const navigate = useNavigate();

  const [showIntro, setShowIntro] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visitedContents, setVisitedContents] = useState(new Set());

  const { canAdvance } = useContentTimer(`parada1-content${activeContentId}`);

  // Função para renderizar o conteúdo na modal
  const renderModalContent = () => {
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
        return <ParadaContent1_1 />;
    }
  };

  // Handler para avançar do ModularIntro para Roadmap
  const handleIntroAdvance = () => {
    setShowIntro(false);
  };

  // Handler quando clica em um anchor do roadmap
  const handleAnchorClick = (contentId) => {
    setActiveContent(contentId);
    setIsModalOpen(true);
  };

  // Handler para fechar modal e avançar
  const handleModalClose = () => {
    // Marca conteúdo como visitado
    setVisitedContents((prev) => new Set([...prev, activeContentId]));

    // Fecha a modal
    setIsModalOpen(false);

    // Se é o último conteúdo, navega para o próximo destino
    if (activeContentId === TOTAL_CONTENTS) {
      navigate("/retrovisor1");
    } else {
      // Se não é o último, apenas abre o próximo anchor (mas não a modal)
      const nextContentId = activeContentId + 1;
      setActiveContent(nextContentId);
      updateProgression(nextContentId);
    }
  };

  // Handler para avançar para próxima página (só funciona se todos visitados)
  const handleFinalAdvance = () => {
    if (visitedContents.size === TOTAL_CONTENTS) {
      navigate("/retrovisor1");
    }
  };

  const allContentsVisited = visitedContents.size === TOTAL_CONTENTS;

  return (
    <ParadaContainer className="container">
      <PitstopTitle
        title="PRIMEIRA PARADA"
        iconSrc={placa}
        iconAlt="placa parar"
      />

      {showIntro ? (
        <>
          <ModularIntro sections={PARADA1_INTRO_DATA} />
          <div className="navigation">
            <NextButton onClick={handleIntroAdvance} $canAdvance={true}>
              <img src={avancar} alt="Avançar" />
            </NextButton>
          </div>
        </>
      ) : (
        <>
          <Roadmap onAnchorClick={handleAnchorClick} />

          {/*     <div className="navigation">
            <NextButton
              onClick={handleFinalAdvance}
              disabled={!allContentsVisited}
              $canAdvance={allContentsVisited}
            >
              <img src={avancar} alt="Ir para Retrovisor" />
            </NextButton>
          </div> */}
        </>
      )}

      {/* Modal com conteúdo */}
      <ContentModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        contentId={`parada1-content${activeContentId}`}
        canAdvance={canAdvance}
      >
        {renderModalContent()}
      </ContentModal>

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

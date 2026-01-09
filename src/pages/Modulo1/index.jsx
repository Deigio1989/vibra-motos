import React from "react";
import { useNavigate } from "react-router-dom";
import { withPageLoader } from "../../hoc/withPageLoader";
import tarjaCabeçalho from "../../assets/tarja-cabeçalho.png";
import logoVibra from "../../assets/logo-vibra.png";
import marcaFundo from "../../assets/marca-dobra.png";
import motoDobra from "../../assets/moto-dobra.png";
import semaforo from "../../assets/semaforo.png";
import PitstopTitle from "../../components/PitstopTitle";
import avancar from "../../assets/avancar.png";
import videoTest from "../../assets/moto-dobra.webm";
import teaserVideo from "../../assets/video-teaser.mp4";

import {
  ModuleMain,
  ModuleContainer,
  BackgroundImages,
  IntroSection,
  VideoSection,
  NextButton,
} from "./styles";

const Modulo1Base = () => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate("/parada1");
  };

  return (
    <ModuleMain>
      <img className="tarja" src={tarjaCabeçalho} alt="" />
      <IntroSection>
        <BackgroundImages>
          <img className="marca" src={marcaFundo} alt="" />
          {/*  <img className="intro-image" src={motoDobra} alt="" /> */}
          <video
            className="video-test"
            src={videoTest}
            autoPlay
            loop
            muted
          ></video>
        </BackgroundImages>

        <ModuleContainer>
          <div className="intro">
            <img className="logo" src={logoVibra} alt="Logo Vibra" />
            <h1 className="title">
              Treinamento EAD para Condutores de Motocicletas
            </h1>
          </div>
          <PitstopTitle
            title="COMECE AQUI"
            iconSrc={semaforo}
            iconAlt="Semáforo"
          />
        </ModuleContainer>
      </IntroSection>
      <VideoSection>
        <div className="video-container">
          <video
            src={teaserVideo}
            title="Teaser Vibra Motos"
            controls
            width="100%"
          ></video>
        </div>
        <NextButton onClick={handleNext}>
          <img src={avancar} alt="Avançar" />
        </NextButton>
      </VideoSection>
    </ModuleMain>
  );
};

const Modulo1 = withPageLoader(Modulo1Base, {
  imageSources: [
    tarjaCabeçalho,
    logoVibra,
    marcaFundo,
    motoDobra,
    semaforo,
    avancar,
  ],
  minLoadingTime: 500,
  loadingText: "Carregando módulo...",
});

export default Modulo1;

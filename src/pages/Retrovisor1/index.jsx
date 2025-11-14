import React from "react";
import tarjaCabeçalho from "../../assets/tarja-cabeçalho.png";
import logoVibra from "../../assets/logo-vibra.png";
import marcaFundo from "../../assets/marca-fundo.png";
import motoDobra from "../../assets/moto-dobra.png";
import semaforo from "../../assets/semaforo.png";
import PitstopTitle from "../../components/PitstopTitle";
import {
  ModuleMain,
  ModuleContainer,
  BackgroundImages,
  IntroSection,
  VideoSection,
} from "./styles";

const Modulo1 = () => {
  return (
    <ModuleMain>
      <img className="tarja" src={tarjaCabeçalho} alt="" />
      <IntroSection>
        <BackgroundImages>
          <img className="marca" src={marcaFundo} alt="" />
          <img className="intro-image" src={motoDobra} alt="" />
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
          <iframe
            src="https://www.youtube.com/embed/NpEaa2P7qZI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </VideoSection>
    </ModuleMain>
  );
};

export default Modulo1;

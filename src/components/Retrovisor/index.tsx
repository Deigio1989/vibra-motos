import React from "react";
import { useNavigate } from "react-router-dom";
import { NextButton } from "../../styles/ButtonStyles";
import avancar from "../../assets/avancar.png";
import retrovisor from "../../assets/retrovisor.png";
import retrovisorBody from "../../assets/retrovisor-body.png";
import retrovisorBack from "../../assets/retrovisor-back.png";
import retrovisorTitle from "../../assets/retrovisor-title.png";
import tarjaListra from "../../assets/tarja-listra.jpg";

import { ModuleMain, RetrovisorContainer, FooterImage } from "./styles";

interface RetrovisorProps {
  paragraphs: (string | React.ReactNode)[];
  nextRoute: string;
  nextButtonAlt?: string;
  imgSrc?: string;
}

const Retrovisor: React.FC<RetrovisorProps> = ({
  paragraphs,
  nextRoute,
  nextButtonAlt = "Avançar",
  imgSrc,
}) => {
  const navigate = useNavigate();

  const handleNext = () => {
    navigate(nextRoute);
  };

  return (
    <ModuleMain>
      <RetrovisorContainer>
        <div className="section-title">
          <img className="section-title-image" src={retrovisorTitle} alt="" />
          <div className="section-title-text">HORA DE AJUSTAR O RETROVISOR</div>
        </div>
        <div className="section-body">
          <img className="section-body-image" src={retrovisorBody} alt="" />
          <div className="paragraphs">
            {paragraphs.map((paragraph, index) => (
              <p key={index}>
                {typeof paragraph === "string" ? paragraph : paragraph}
              </p>
            ))}
          </div>
          <div className="retrovisor-image">
            <img
              className="retrovisor-image-back"
              src={imgSrc || retrovisorBack}
              alt=""
            />
            <img className="retrovisor-image-front" src={retrovisor} alt="" />
          </div>
        </div>

        <NextButton onClick={handleNext}>
          <img src={avancar} alt={nextButtonAlt} />
        </NextButton>
      </RetrovisorContainer>
      <FooterImage src={tarjaListra} alt="" />
    </ModuleMain>
  );
};

export default Retrovisor;

import React, { useState } from "react";
import { ContentWrapper, Card, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-5.png";
import seta from "../../assets/seta.png";
import back from "../../assets/seta-retornar.png";
import placaParar from "../../assets/placa-parar.png";

interface ParadaContent1_5Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent1_5: React.FC<ParadaContent1_5Props> = ({
  number = "5",

  paragraphs = [
    "Excesso de velocidade: responsável por boa parte dos acidentes graves.",
    "Falta de capacete: o uso correto reduz em até 70% o risco de morte em colisões (OMS).",
    "Zigue-zague no corredor: aumenta exponencialmente as chances de colisão lateral.",
    "Ignorar essas regras não significa apenas correr risco de multa. Significa colocar a própria vida em perigo, e também a de terceiros.",
  ],
  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3; // 1 intro + 1 lista + 1 conclusão

  const handleNext = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const renderSlide = () => {
    if (currentSlide === 0) {
      // Slide 0: Card com título, imagem e chamada
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex slide-0">
            <div className="carousel-img">
              <ContentImage
                src={imageSrc}
                alt={imageAlt}
                width={"100%"}
                objectFit="contain"
              />
            </div>

            <div className="content-text">
              <Title>
                <h1 className="number">{number}</h1>
                <div className="title-text">
                  <h2 className="title">
                    As infrações <span>mais comuns</span>
                  </h2>
                  <h2 className="title">(e mais perigosas)</h2>
                </div>
              </Title>
              <Paragraphs>
                <div className="chamada">
                  A legislação de trânsito é clara. Ainda assim, muitas das
                  infrações cometidas diariamente estão diretamente ligadas às
                  maiores causas de acidentes fatais. Entre elas:
                </div>
              </Paragraphs>
            </div>

            {currentSlide < totalSlides - 1 && (
              <img
                src={seta}
                className="arrow-button"
                alt="Avançar"
                onClick={handleNext}
              />
            )}
          </div>
        </Card>
      );
    } else if (currentSlide === 1) {
      // Slide 1: Lista dos 3 primeiros parágrafos
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex">
            {currentSlide > 0 && (
              <img
                src={back}
                className="arrow-button"
                alt="Voltar"
                onClick={handlePrev}
              />
            )}

            <div className="content-text">
              <Paragraphs>
                {paragraphs.slice(0, 3).map((paragraph, index) => {
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);
                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p key={index} className="card-paragraph">
                        <span className="paragraph-title">{title}</span>
                        <br /> {content}
                      </p>
                    );
                  }
                  return (
                    <p style={{ textAlign: "center !important" }} key={index}>
                      {paragraph}
                    </p>
                  );
                })}
              </Paragraphs>
            </div>

            {currentSlide < totalSlides - 1 && (
              <img
                src={seta}
                className="arrow-button"
                alt="Avançar"
                onClick={handleNext}
              />
            )}
          </div>
        </Card>
      );
    } else {
      // Slide 2: Conclusão em destaque
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex conclusion-slide">
            {currentSlide > 0 && (
              <img
                src={back}
                className="arrow-button"
                alt="Voltar"
                onClick={handlePrev}
              />
            )}

            <div className="content-center">
              <div className="carousel-img">
                <ContentImage
                  src={placaParar}
                  alt="Placa de Pare"
                  width={"150px"}
                  objectFit="contain"
                />
              </div>

              <Paragraphs>
                <p className="conclusao">{paragraphs[3]}</p>
              </Paragraphs>
            </div>

            {currentSlide < totalSlides - 1 && (
              <img
                src={seta}
                className="arrow-button"
                alt="Avançar"
                onClick={handleNext}
              />
            )}
          </div>
        </Card>
      );
    }
  };

  return <ContentWrapper className="content">{renderSlide()}</ContentWrapper>;
};

export default ParadaContent1_5;

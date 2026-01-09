import React, { useState } from "react";
import { ContentWrapper, Card, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-3-2.png";
import paradaVideo from "../../assets/video-parada-3-2.webm";
import seta from "../../assets/seta.png";
import back from "../../assets/seta-retornar.png";

interface ParadaContent3_2Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_2: React.FC<ParadaContent3_2Props> = ({
  number = "2",

  paragraphs = [
    "Fazer curvas é um dos maiores prazeres da pilotagem, mas também um dos momentos mais críticos. Muitos acidentes ocorrem por erros de cálculo ou excesso de confiança.",
    "Equilíbrio entre dianteiro e traseiro: o freio dianteiro é responsável por cerca de 70% da frenagem. Ele deve ser usado progressivamente, sem travar a roda.",
    "Freio traseiro: complementa a frenagem e ajuda a estabilizar a moto.",
    "Frenagem de emergência: pressione os dois freios simultaneamente, com firmeza, mas de forma controlada. Se a roda dianteira travar, alivie levemente e reaplique a pressão.",
    "Com garupa: use mais o freio traseiro para evitar que o passageiro seja projetado para frente.",
    "Pisos escorregadios: em postos de combustível, faixas pintadas ou pisos molhados, dê preferência ao freio traseiro para não perder o equilíbrio.",
    "Treinar em locais seguros é essencial. Clubes de motociclistas e pistas de treinamento oferecem ambientes controlados para desenvolver essas habilidades.",
  ],
  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // 1 intro + 2 slides duplos + 1 conclusão

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
      // Slide 0: Card com título
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex slide-0">
            <div className="carousel-img">
              <video src={paradaVideo} autoPlay loop muted></video>
            </div>

            <div className="content-text">
              <Title>
                <h1 className="number">{number}</h1>
                <div className="title-text">
                  <h2 className="title">
                    Frenagem correta: <br />
                    <span>parar sem cair</span>
                  </h2>
                </div>
              </Title>
              <Paragraphs>
                <p>{paragraphs[0]}</p>
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
    } else if (currentSlide >= 1 && currentSlide <= 2) {
      // Slides 1-2: Dois itens da lista por slide
      const startIndex = (currentSlide - 1) * 2 + 1;
      const items = [paragraphs[startIndex], paragraphs[startIndex + 1]];

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

            <div
              className="content-text"
              style={{ flex: "none", width: "80%", margin: "0 auto" }}
            >
              <Paragraphs>
                {items.map((paragraph, idx) => {
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p key={idx} className="card-paragraph">
                        <span
                          className="paragraph-title"
                          style={{
                            padding: "8px 16px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                          }}
                        >
                          {title}
                        </span>
                        <br /> {content}
                      </p>
                    );
                  }

                  return (
                    <p key={idx} className="card-paragraph">
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
      // Slide 3: Último item + Conclusão
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

            <div
              className="content-text"
              style={{ flex: "none", width: "80%", margin: "0 auto" }}
            >
              <Paragraphs>
                {/* Pisos escorregadios */}
                {(() => {
                  const paragraph = paragraphs[5];
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p
                        className="card-paragraph"
                        style={{ marginBottom: "2rem" }}
                      >
                        <span
                          className="paragraph-title"
                          style={{
                            padding: "8px 16px",
                            marginBottom: "16px",
                            borderRadius: "8px",
                          }}
                        >
                          {title}
                        </span>
                        <br /> {content}
                      </p>
                    );
                  }
                  return (
                    <p
                      className="card-paragraph"
                      style={{ marginBottom: "2rem" }}
                    >
                      {paragraph}
                    </p>
                  );
                })()}

                {/* Conclusão */}
                <p
                  style={{
                    color: "var(--secondary-color)",
                    fontStyle: "normal",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {paragraphs[6]}
                </p>
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

export default ParadaContent3_2;

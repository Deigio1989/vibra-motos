import React, { useState } from "react";
import { ContentWrapper, Card, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import mapaMoto from "../../assets/img-parada-2-1.png";
import seta from "../../assets/seta.png";
import back from "../../assets/seta-retornar.png";

interface ParadaContent2_1Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent2_1: React.FC<ParadaContent2_1Props> = ({
  number = "1",

  paragraphs = [
    "Antes de ligar a moto, a segurança começa na mente. A forma como o piloto encara o trânsito é determinante para o desfecho de cada trajeto.",
    "Postura mental preventiva: cada deslocamento deve ser tratado como único. Estudos da Associação Brasileira de Medicina de Tráfego (Abramet) mostram que boa parte dos acidentes ocorre a menos de 5 km de casa ou do trabalho. A familiaridade com o trajeto gera excesso de confiança, e é justamente aí que muitos se descuidam.",
    "Autocontrole emocional: pressa, raiva ou competitividade no trânsito transformam situações simples em riscos desnecessários. Pesquisas indicam que condutores agressivos têm até 70% mais chances de se envolver em colisões.",
    "Consciência coletiva: cada atitude influencia não só o motociclista, mas pedestres, ciclistas, motoristas e passageiros. A moto pode ser ágil, mas a vulnerabilidade exige que o motociclista aja sempre com empatia.",
    "Essa mentalidade cria a base para as práticas de segurança que veremos a seguir.",
  ],
  imageSrc = mapaMoto,
  imageAlt = "alt prosivório",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 4; // 0 (com título) + 3 cards (1, 2, 3)

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
                    O <span>pacto diário</span>
                  </h2>
                  <h2 className="title">da segurança</h2>
                </div>
              </Title>
              <Paragraphs>
                {(() => {
                  const paragraph = paragraphs[0];
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p className="card-paragraph">
                        <span className="paragraph-title">{title}</span> <br />{" "}
                        {content}
                      </p>
                    );
                  }

                  return <p>{paragraph}</p>;
                })()}
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
      // Slides 1, 2, 3: Cards sem título
      const index = currentSlide;
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
              style={{ flex: "none", width: "50%", margin: " auto" }}
            >
              <Paragraphs>
                {(() => {
                  const paragraph = paragraphs[index];
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p className="card-paragraph">
                        <span
                          className="paragraph-title"
                          style={{
                            display: "inline-block",
                            backgroundColor: "var(--secondary-color)",
                            color: "#fff",
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

                  return <p>{paragraph}</p>;
                })()}
                {(() => {
                  if (index === 3) {
                    return (
                      <p
                        style={{
                          color: "var(--secondary-color)",
                          fontStyle: "normal",
                          fontWeight: "bold",
                          margin: "0 auto",
                          textAlign: "center",
                        }}
                      >
                        {paragraphs[4]}
                      </p>
                    );
                  }
                })()}
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

export default ParadaContent2_1;

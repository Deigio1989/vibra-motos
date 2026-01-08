import React, { useState } from "react";
import { ContentWrapper, Card, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import image1 from "../../assets/marca-dobra.png";
import image2 from "../../assets/refactor-1-2-1.png";
import image3 from "../../assets/refactor-1-2-2.png";
import image4 from "../../assets/refactor-1-2-3.png";
import seta from "../../assets/seta.png";
import back from "../../assets/seta-retornar.png";

interface ParadaContent1_2Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string[];
  imageAlt?: string;
}

const ParadaContent1_2: React.FC<ParadaContent1_2Props> = ({
  number = "2",

  paragraphs = [
    "A pilotagem muda radicalmente de acordo com o ambiente. Cada cenário traz riscos próprios e exige comportamentos diferentes do motociclista.",
    "Na cidade: O trânsito urbano concentra cruzamentos perigosos, pontos cegos de carros e ônibus, pedestres distraídos e motoristas impacientes. Pequenos deslocamentos, como ir até o trabalho ou buscar algo próximo, podem parecer simples, mas escondem armadilhas. A falsa sensação de segurança em trajetos curtos faz com que muitos acidentes aconteçam justamente nesses momentos.",
    "Na estrada: O prazer de rodar em alta velocidade vem acompanhado de riscos maiores. Ventos laterais, ultrapassagens de caminhões, buracos no asfalto, curvas de raio fechado e até animais soltos na pista são cenários comuns nas rodovias brasileiras. O impacto de um acidente em alta velocidade tende a ser muito mais grave.",
    "Na trilha ou em estradas de terra: Aqui, a aventura é o combustível. Terrenos irregulares, lama, pedras, cascalho, falta de aderência na pista e de sinalização exigem habilidades específicas. O risco não está apenas no ambiente natural, mas também na ausência de infraestrutura de socorro. O motociclista que se arrisca em trilhas sem preparo técnico ou equipamentos adequados aumenta significativamente sua vulnerabilidade.",
    'Cada ambiente exige adaptação. A consciência de que não existe uma "forma única" de pilotar é fundamental para reduzir riscos.',
  ],
  imageSrc = [image1, image2, image3, image4],
  imageAlt = "estrada",
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
                src={imageSrc[0]}
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
                    Onde a <span>estrada muda</span>,
                  </h2>
                  <h2 className="title">
                    <span>os riscos</span> também mudam
                  </h2>
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

            <div className="carousel-img">
              <ContentImage
                src={imageSrc[index]}
                alt={imageAlt}
                width={"100%"}
                objectFit="contain"
              />
            </div>

            <div className="content-text">
              <Paragraphs>
                {(() => {
                  const paragraph = paragraphs[index];
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p className="card-paragraph">
                        <span className="paragraph-title">{title}</span>
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

export default ParadaContent1_2;

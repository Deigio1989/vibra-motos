import React, { useState } from "react";
import { ContentWrapper, Card, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage1 from "../../assets/img-parada-2-3.png";
import paradaVideo from "../../assets/video-parada-2-3.webm";
import paradaImage2 from "../../assets/refactor-2-3-2.png";
import paradaImage3 from "../../assets/refactor-2-3-3-.png";
import seta from "../../assets/seta.png";
import back from "../../assets/seta-retornar.png";

interface ParadaContent2_3Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string[];
  imageAlt?: string;
}

const ParadaContent2_3: React.FC<ParadaContent2_3Props> = ({
  number = "3",

  paragraphs = [
    "Pneus: inspecione semanalmente. Sulcos gastos ou bolhas reduzem a aderência e aumentam o risco de derrapagens e aquaplanagem. Pneus carecas estão presentes em 1 a cada 5 acidentes em estradas brasileiras.",
    "Freios: as pastilhas devem ser verificadas a cada 1.000 km. O freio dianteiro responde por até 70% da força de parada. A falha desse sistema costuma ser fatal.",
    "Óleo e filtros: o óleo lubrifica e protege o motor. Trocas irregulares aumentam o risco de travamento. Em média, deve ser trocado a cada 2.000 a 3.000 km ou a cada 6 meses, conforme o fabricante.",
    "Corrente de transmissão: precisa estar tensionada e lubrificada. Uma corrente frouxa pode escapar, travar a roda e derrubar a moto em movimento.",
    'Luzes e retrovisores: fundamentais para "ver e ser visto". Qualquer falha elétrica cria zonas de invisibilidade, principalmente à noite.',
    "Bateria e parte elétrica: sinais de fraqueza não devem ser ignorados. Uma falha elétrica pode deixar o piloto vulnerável em locais perigosos. Manutenção não é gasto, é investimento em segurança.",
  ],
  imageAlt = "alt prosivório",
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

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
      // Slide 0: Título + chamada inicial
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex slide-0">
            <div className="carousel-img">
              <video
                src={paradaVideo}
                width={"100%"}
                style={{ opacity: "0.9" }}
                autoPlay
                loop
                muted
              />
            </div>

            <div
              className="content-text"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Title style={{}}>
                <h1 className="number">{number}</h1>
                <div className="title-text">
                  <h2 className="title">
                    <span>Moto em dia,</span>
                  </h2>
                  <h2 className="title">vida preservada</h2>
                </div>
              </Title>
              <Paragraphs>
                <p
                  className="chamada"
                  style={{ textAlign: "center", margin: "0 auto" }}
                >
                  Uma moto bem cuidada não é luxo: é ferramenta de
                  sobrevivência. De acordo com a PRF, cerca de 20% dos acidentes
                  com motos em rodovias federais envolvem falhas mecânicas
                  simples, que poderiam ter sido evitadas com manutenção
                  preventiva.
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
    } else if (currentSlide === 1) {
      // Slide 1: Chamada + primeiros 3 itens
      const firstThreeItems = paragraphs.slice(0, 3);
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex slide-0">
            <div className="carousel-img">
              <ContentImage
                src={paradaImage2}
                alt={imageAlt}
                width={"100%"}
                objectFit="contain"
              />
            </div>

            <div className="content-text">
              <Paragraphs>
                <p className="subtitle" style={{ margin: "0" }}>
                  <b style={{ margin: "0" }}>
                    Itens críticos a verificar regularmente:
                  </b>
                </p>
                {firstThreeItems.map((paragraph, index) => {
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p key={index}>
                        <span className="paragraph-title">{title}</span>{" "}
                        {content}
                      </p>
                    );
                  }

                  return <p key={index}>{paragraph}</p>;
                })}
              </Paragraphs>
            </div>

            {currentSlide > 0 && (
              <img
                src={back}
                className="arrow-button arrow-left"
                alt="Voltar"
                onClick={handlePrev}
              />
            )}
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
      // Slide 2: Últimos 3 itens
      const lastThreeItems = paragraphs.slice(3, 6);
      return (
        <Card key={currentSlide}>
          <div className="carousel-flex slide-0">
            <div className="carousel-img">
              <ContentImage
                src={paradaImage3}
                alt={imageAlt}
                width={"90%"}
                objectFit="contain"
              />
            </div>

            <div className="content-text">
              <Paragraphs>
                {lastThreeItems.map((paragraph, index) => {
                  const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

                  if (titleMatch) {
                    const [, title, content] = titleMatch;
                    return (
                      <p key={index}>
                        <span className="paragraph-title">{title}</span>{" "}
                        {content}
                      </p>
                    );
                  }

                  return <p key={index}>{paragraph}</p>;
                })}
              </Paragraphs>
            </div>

            {currentSlide > 0 && (
              <img
                src={back}
                className="arrow-button arrow-left"
                alt="Voltar"
                onClick={handlePrev}
              />
            )}
          </div>
        </Card>
      );
    }
  };

  return <ContentWrapper className="content">{renderSlide()}</ContentWrapper>;
};

export default ParadaContent2_3;

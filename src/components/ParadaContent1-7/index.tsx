import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
  ImageContainer,
} from "./styles";
import paradaImage1 from "../../assets/img-parada-1-7-1.png";
import paradaImage2 from "../../assets/img-parada-1-7-2.png";
import paradaImage3 from "../../assets/img-parada-1-7-3.png";
import paradaImage4 from "../../assets/img-parada-1-7-4.png";

interface ParadaContent1_7Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string[];
  imageAlt?: string;
}
const ParadaContent1_7: React.FC<ParadaContent1_7Props> = ({
  number = "7",

  paragraphs = [
    "As leis de trânsito nasceram de tragédias. Cada regra representa uma vida perdida no passado e a tentativa de evitar novas mortes no futuro.",
    "Capacete obrigatório, farol aceso, limites de velocidade e tolerância zero ao álcool não são burocracias: são medidas que salvam milhares de vidas todos os anos. Respeitar a lei é respeitar a vida.",
    ,
  ],
  imageSrc = [paradaImage1, paradaImage2, paradaImage3, paradaImage4],

  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Leis que <span>salvam vidas</span>
          </h2>
        </div>
      </Title>
      <ImageContainer>
        {imageSrc.map((src, index) => (
          <ContentImage key={index} src={src} alt={imageAlt} />
        ))}
      </ImageContainer>

      <div className="flex">
        <Text>
          <Paragraphs>
            {paragraphs.map((paragraph, index) => {
              // Sistema de detecção de títulos com dois pontos (caso necessário)

              return <p key={index}>{paragraph}</p>;
            })}
          </Paragraphs>
        </Text>
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent1_7;

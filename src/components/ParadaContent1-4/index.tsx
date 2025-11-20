import React from "react";
import { ContentWrapper, Text, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-4.png";

interface ParadaContent1_4Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent1_4: React.FC<ParadaContent1_4Props> = ({
  number = "4",

  paragraphs = [
    "Em São Paulo, 43% das mortes no trânsito em 2022 foram de motociclistas, detalhe que o Brasil está em 3⁰ lugar no ranking mundial de mortes no trânsito.  (Fonte: Infosiga-SP).",
    "Nas rodovias federais, a PRF aponta que 3 em cada 10 vítimas fatais são motociclistas.",
    "Em 10 anos, a taxa de internações por acidentes com motos cresceu mais de 70% no Brasil (Ministério da Saúde).",
    "Estima-se que, por ano, mais de 12 mil motociclistas morram no país (DATASUS, 2022).",
  ],
  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Os<span> números</span> não mentem
          </h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <b>Os números mostram o tamanho do desafio:</b>
          <Paragraphs>
            {paragraphs.map((paragraph, index) => {
              return <p key={index}>{paragraph}</p>;
            })}
          </Paragraphs>
          <p className="conclusao">
            Esses comportamentos, somados à vulnerabilidade natural da moto,
            transformam a conscientização em uma ferramenta de sobrevivência.
          </p>
        </Text>
        <ContentImage
          src={imageSrc}
          alt={imageAlt}
          width="52%"
          objectFit="contain"
          margin="-4rem 0 0 0"
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent1_4;

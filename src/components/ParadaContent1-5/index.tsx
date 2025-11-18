import React from "react";
import { ContentWrapper, Text, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-5.png";

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
  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            As infrações <span>mais comuns</span>
          </h2>
          <h2 className="title">(e mais perigosas)</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <div className="chamada">
            A legislação de trânsito é clara. Ainda assim, muitas das infrações
            cometidas diariamente estão diretamente ligadas às maiores causas de
            acidentes fatais. Entre elas:
          </div>

          <Paragraphs>
            {paragraphs.map((paragraph, index) => {
              // Detectar se o parágrafo começa com um título seguido de ":"
              const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

              if (titleMatch) {
                const [, title, content] = titleMatch;
                return (
                  <p key={index}>
                    <span className="paragraph-title">{title}</span> {content}
                  </p>
                );
              }

              return <p key={index}>{paragraph}</p>;
            })}
          </Paragraphs>
        </Text>
        <ContentImage
          src={imageSrc}
          alt={imageAlt}
          width="50%"
          objectFit="contain"
          margin="-7rem 0 0 0"
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent1_5;

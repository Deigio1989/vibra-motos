import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-7.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_7Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_7: React.FC<ParadaContent3_7Props> = ({
  number = "7",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Áreas de conflito: </span>
          </h2>
          <h2>cruzamentos e conversões</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              Cruzamentos, rotatórias e saídas de vias estão entre os locais
              mais perigosos para motociclistas.
            </NormalParagraph>

            <TitledList
              items={[
                "Reduza a velocidade, mesmo que a preferência seja sua.",
                "Sinalize sempre antes de converter.",
                "Olhe para os dois lados, mesmo quando o sinal está aberto.",
                "Desconfie: motoristas distraídos podem ignorar a sinalização.",
              ]}
            />
            <NormalParagraph>
              Segundo o Infosiga-SP, grande parte dos acidentes fatais
              envolvendo motos acontece justamente em áreas de conversão e
              cruzamentos.{" "}
            </NormalParagraph>
          </Paragraphs>
        </Text>

        <ContentImage
          className="content-image"
          src={imageSrc}
          alt={imageAlt}
          width={"45%"}
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent3_7;

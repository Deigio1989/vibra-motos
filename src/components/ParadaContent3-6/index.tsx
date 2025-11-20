import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-6.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_6Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_6: React.FC<ParadaContent3_6Props> = ({
  number = "6",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Postura: </span>o corpo
          </h2>
          <h2>também pilota</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              A forma como o corpo se posiciona na moto influencia diretamente o
              controle e o cansaço.
            </NormalParagraph>

            <TitledList
              items={[
                "Cabeça erguida: olhar sempre para frente amplia o campo de visão.",
                "Coluna reta e ombros relaxados: reduzem a fadiga em trajetos longos.",
                "Cotovelos flexionados: ajudam a absorver impactos.",
                "Mãos firmes, mas não tensas: polegares voltados para baixo no centro das manoplas.",
                "Pernas junto ao tanque: aumentam a estabilidade.",
              ]}
            />
            <NormalParagraph>
              Uma postura correta reduz dores, aumenta a confiança e garante
              maior controle da moto em qualquer situação.
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

export default ParadaContent3_6;

import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-3.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_3Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_3: React.FC<ParadaContent3_3Props> = ({
  number = "3",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Curvas:</span> prazer e desafio
          </h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              Frenar uma moto não é apenas apertar os manetes. A distribuição de
              peso e a forma como o piloto aciona os freios mudam totalmente o
              resultado.
            </NormalParagraph>

            <TitledList
              items={[
                "Equilíbrio entre dianteiro e traseiro: o freio dianteiro é responsável por cerca de 70% da frenagem. Ele deve ser usado progressivamente, sem travar a roda.",
                "Freio traseiro: complementa a frenagem e ajuda a estabilizar a moto.",
                "Frenagem de emergência: pressione os dois freios simultaneamente, com firmeza, mas de forma controlada. Se a roda dianteira travar, alivie levemente e reaplique a pressão.",
                "Com garupa: use mais o freio traseiro para evitar que o passageiro seja projetado para frente.",
                "Pisos escorregadios: em postos de combustível, faixas pintadas ou pisos molhados, dê preferência ao freio traseiro para não perder o equilíbrio.",
              ]}
            />
            <NormalParagraph>
              Com a introdução do sistema ABS, muitas motos modernas oferecem
              mais segurança. Segundo a Abraciclo, o ABS pode reduzir em até 40%
              o risco de quedas em freadas bruscas.
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

export default ParadaContent3_3;

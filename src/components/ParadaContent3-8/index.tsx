import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-8.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_8Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_8: React.FC<ParadaContent3_8Props> = ({
  number = "8",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Dicas do dia a dia: </span>
          </h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              Além das técnicas específicas, algumas atitudes tornam a rotina
              mais segura:{" "}
            </NormalParagraph>

            <TitledList
              items={[
                "Planeje rotas seguras: evite áreas perigosas ou mal iluminadas.",
                "Varie trajetos: alternar caminhos reduz o risco de assaltos.",
                "Ande em grupo quando possível: aumenta a visibilidade e reduz vulnerabilidade.",
                "Use roupas visíveis: cores chamativas e faixas reflexivas ajudam motoristas a perceberem a moto.",
              ]}
            />
            <NormalParagraph>
              Essas pequenas escolhas, somadas às técnicas, constroem um
              trânsito mais seguro.
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

export default ParadaContent3_8;

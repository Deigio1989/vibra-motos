import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-5.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_5Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_5: React.FC<ParadaContent3_5Props> = ({
  number = "5",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Clima:</span> quando a
          </h2>
          <h2>natureza dita o ritmo</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              O clima é um fator determinante para a segurança na pilotagem.{" "}
            </NormalParagraph>

            <TitledList
              items={[
                "Chuva: reduza a velocidade, dobre a distância de segurança e use capa impermeável. Freadas bruscas devem ser evitadas. Pneus novos e bem calibrados fazem toda a diferença.",
                "Vento lateral: segure o guidão firme, incline levemente contra o vento e reduza a velocidade. Em pontes e viadutos, a instabilidade pode ser maior.",
                "Neblina: utilize farol baixo, evite ultrapassagens e mantenha distância dos veículos à frente. O uso de roupas reflexivas é indispensável.",
                "À noite: a atenção precisa ser dobrada. Regule os faróis, evite trechos sem iluminação e utilize roupas claras ou com elementos refletivos.",
              ]}
            />
            <NormalParagraph>
              Cada condição exige adaptação. Um piloto consciente nunca desafia
              os limites da natureza.
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

export default ParadaContent3_5;

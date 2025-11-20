import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-4.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_4Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_4: React.FC<ParadaContent3_4Props> = ({
  number = "4",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span>Obstáculos:</span>
          </h2>
          <h2>buracos, lombadas e surpresas</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              As ruas e estradas brasileiras estão longe da perfeição. Saber
              lidar com irregularidades é parte fundamental da pilotagem.
            </NormalParagraph>

            <TitledList
              items={[
                "Lombadas: reduza a velocidade antes, passe em linha reta e solte os freios.",
                "Buracos: nunca freie em cima do buraco. Se não houver como desviar, alivie o peso da roda dianteira deslocando o corpo para trás.",
                "Faixas pintadas e tachões: são extremamente escorregadios em dias de chuva. Evite passar inclinado ou acelerando sobre eles.",
                "Tampas de bueiro: muitas vezes são lisas e escorregadias. Cruze em linha reta e sem frear.",
              ]}
            />
            <NormalParagraph>
              Treinar em locais seguros é essencial. Clubes de motociclistas e
              pistas de treinamento oferecem ambientes controlados para
              desenvolver essas habilidades.
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

export default ParadaContent3_4;

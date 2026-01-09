import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
  ContentVideo,
} from "./styles";
import mapaMoto from "../../assets/img-parada-2-6.png";
import image from "../../assets/video-parada-2-6.webm";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent2_6Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent2_6: React.FC<ParadaContent2_6Props> = ({
  number = "6",

  imageSrc = mapaMoto,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span> Casos reais</span> deixam claro que:
          </h2>
        </div>
      </Title>

      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              A segurança não depende apenas da moto ou dos equipamentos, mas
              principalmente das atitudes diárias do motociclista.
            </NormalParagraph>

            <TitledList
              items={[
                "Respeitar limites de velocidade: eles são definidos após estudos técnicos sobre as vias.",
                "Nunca pilotar alcoolizado ou sob efeito de drogas: o álcool reduz em até 30% os reflexos e triplica o risco de acidentes.",
                "Evitar disputas no trânsito: a moto pode ser ágil, mas não resiste a uma colisão com carros ou caminhões.",
                "Planejar rotas: escolher caminhos iluminados e seguros reduz o risco de assaltos e colisões.",
                "Descansar antes de pilotar: fadiga tem efeitos semelhantes à embriaguez. Uma noite mal dormida pode reduzir a atenção em até 50%.",
              ]}
            />
            <NormalParagraph>
              Cada decisão responsável aumenta exponencialmente a chance de
              chegar bem ao destino.
            </NormalParagraph>
          </Paragraphs>
        </Text>

        <video
          className="content-image"
          src={image}
          width={"45%"}
          autoPlay
          loop
          muted
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent2_6;

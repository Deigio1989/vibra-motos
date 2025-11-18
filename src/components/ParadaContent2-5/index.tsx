import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import mapaMoto from "../../assets/img-parada-2-5.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent2_5Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent2_5: React.FC<ParadaContent2_5Props> = ({
  number = "5",

  imageSrc = mapaMoto,
  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            <span> Atitudes </span>
            que salvam vidas
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

        <ContentImage
          className="content-image"
          src={imageSrc}
          alt={imageAlt}
          width={"50%"}
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent2_5;

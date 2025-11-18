import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import mapaMoto from "../../assets/img-parada-2-1.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent2_1Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent2_1: React.FC<ParadaContent2_1Props> = ({
  number = "1",

  imageSrc = mapaMoto,
  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            O <span> pacto diário </span>
          </h2>
          <h2>da segurança</h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              Antes de ligar a moto, a segurança começa na mente. A forma como o
              piloto encara o trânsito é determinante para o desfecho de cada
              trajeto.
            </NormalParagraph>

            <TitledList
              items={[
                "Postura mental preventiva: cada deslocamento deve ser tratado como único. Estudos da Associação Brasileira de Medicina de Tráfego (Abramet) mostram que boa parte dos acidentes ocorre a menos de 5 km de casa ou do trabalho. A familiaridade com o trajeto gera excesso de confiança, e é justamente aí que muitos se descuidam.",
                "Autocontrole emocional: pressa, raiva ou competitividade no trânsito transformam situações simples em riscos desnecessários. Pesquisas indicam que condutores agressivos têm até 70% mais chances de se envolver em colisões.",
                "Consciência coletiva: cada atitude influencia não só o motociclista, mas pedestres, ciclistas, motoristas e passageiros. A moto pode ser ágil, mas a vulnerabilidade exige que o motociclista aja sempre com empatia.",
              ]}
            />
            <NormalParagraph>
              Essa mentalidade cria a base para as práticas de segurança que
              veremos a seguir.
            </NormalParagraph>
          </Paragraphs>
        </Text>

        <ContentImage
          className="content-image"
          src={imageSrc}
          alt={imageAlt}
          objectFit="contain"
        />
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent2_1;

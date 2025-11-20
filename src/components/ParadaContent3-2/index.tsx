import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-3-2.png";
import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../SmartParagraphs";

interface ParadaContent3_2Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent3_2: React.FC<ParadaContent3_2Props> = ({
  number = "2",

  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2>
            Frenagem correta: <span>parar sem cair</span>
          </h2>
        </div>
      </Title>
      <div className="flex">
        <Text>
          <Paragraphs>
            <NormalParagraph>
              Fazer curvas é um dos maiores prazeres da pilotagem, mas também um
              dos momentos mais críticos. Muitos acidentes ocorrem por erros de
              cálculo ou excesso de confiança.
            </NormalParagraph>

            <TitledList
              items={[
                "Velocidade de entrada: reduza antes da curva, nunca durante.",
                "Olhar: direcione a visão para a saída da curva, e não para o chão. A moto tende a seguir para onde você olha.",
                "Inclinação: em curvas normais, incline o corpo junto com a moto. Em pisos escorregadios, incline mais o corpo e menos a moto.",
                "Aceleração constante: mantenha uma aceleração suave. Frear ou soltar o acelerador dentro da curva pode desestabilizar o veículo.",
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

export default ParadaContent3_2;

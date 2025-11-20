import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import { TitledParagraph } from "../SmartParagraphs";
import paradaImage from "../../assets/img-parada-2-2-1.png";
import paradaImage2 from "../../assets/img-parada-2-2-2.png";
import paradaImage3 from "../../assets/img-parada-2-2-3.png";

interface ParadaContent2_2Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string[];
  imageAlt?: string;
}
const ParadaContent2_2: React.FC<ParadaContent2_2Props> = ({
  number = "2",

  paragraphs = [
    "Previsão constante: imagine sempre o pior cenário. Considere que um carro pode mudar de faixa sem aviso, que um pedestre pode atravessar sem olhar, que um buraco pode surgir em uma curva. Essa antecipação dá ao motociclista segundos preciosos para reagir.",
    "Distância de segurança: mantenha ao menos 3 segundos do veículo à frente em condições normais. Em chuva ou pista molhada, dobre para 6 segundos. Essa margem evita colisões em freadas bruscas.",
  ],
  imageSrc = [paradaImage, paradaImage2, paradaImage3],
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">Condução defensiva:</h2>
          <h2 className="title">
            <span>prever </span>
            para não sofrer
          </h2>
        </div>
      </Title>

      <Text>
        <p className="chamada">
          A condução defensiva é a essência da segurança no trânsito. Segundo o
          Observatório Nacional de Segurança Viária, ela pode reduzir em até 80%
          o risco de acidentes quando aplicada corretamente.
        </p>
        <b>Princípios básicos:</b>
        <Paragraphs>
          {paragraphs.map((paragraph, index) => {
            // Detectar se o parágrafo começa com um título seguido de ":"
            const titleMatch = paragraph.match(/^([^:]+:)\s*(.*)$/);

            if (titleMatch) {
              const [, title, content] = titleMatch;
              return (
                <p key={index}>
                  <span className="paragraph-title">{title}</span> {content}
                </p>
              );
            }

            return <p key={index}>{paragraph}</p>;
          })}
        </Paragraphs>
        <div className="flex">
          <ContentImage
            className="content-image"
            src={imageSrc[0]}
            alt={imageAlt}
          />
          <ContentImage
            className="content-image"
            src={imageSrc[1]}
            alt={imageAlt}
          />
        </div>

        <Paragraphs>
          <TitledParagraph text="Seja visível: use sempre o farol aceso, mesmo durante o dia, e posicione-se de forma a ser visto pelos retrovisores dos carros. Estudos da PRF mostram que boa parte dos acidentes acontece porque o motorista não viu a moto." />
          <TitledParagraph text="Comunicação clara: setas, luzes de freio e até sinais manuais devem ser usados sempre. Nunca presuma que os outros entendem sua intenção sem sinalização." />
          <div className="flex">
            <ContentImage
              className="content-image"
              src={imageSrc[2]}
              alt={imageAlt}
            />
          </div>
          <TitledParagraph text="Estilo previsível: movimentos bruscos e mudanças repentinas confundem os outros motoristas. Fluidez é sinônimo de segurança." />
          <p>
            Conduzir de forma defensiva é pilotar como se todos ao redor
            pudessem cometer erros porque, na prática, podem.
          </p>
        </Paragraphs>
      </Text>
    </ContentWrapper>
  );
};

export default ParadaContent2_2;

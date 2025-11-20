import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/img-parada-1-3.png";

interface ParadaContent1_3Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent1_3: React.FC<ParadaContent1_3Props> = ({
  number = "3",

  paragraphs = [
    "Excesso de velocidade: reduz drasticamente o tempo de reação em situações imprevistas.",
    "Álcool e drogas: comprometem reflexos, equilíbrio e percepção de risco.",
    "Imprudência: ultrapassagens arriscadas, avanço de sinais, uso inadequado de corredores.",
    "Fadiga e distração: cansaço prolongado e uso de celular são causas recorrentes de acidentes graves.",
    "Excesso de confiança: pilotos experientes às vezes subestimam riscos, acreditando dominar qualquer situação.",
  ],
  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <div className="flex">
        <Title>
          <div className="title-text">
            <h1 className="number">{number}</h1>
            <h2 className="title">
              O <span>fator humano</span>:
            </h2>
            <h2 className="title">
              o <span>maior risco</span>
            </h2>
            <h2 className="title">na pista</h2>
          </div>
        </Title>

        <ContentImage className="content-image" src={imageSrc} alt={imageAlt} />
      </div>
      <Text>
        <p className="chamada">
          Mais de 90% dos acidentes de trânsito estão ligados a falhas humanas,
          segundo estudos internacionais da Organização Mundial da Saúde (OMS).
          No Brasil, esse número se repete: não é a moto que falha, mas sim a
          forma como ela é conduzida.
        </p>
        <b>Os principais fatores de risco são:</b>
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
        <p className="conclusao">
          Esses comportamentos, somados à vulnerabilidade natural da moto,
          transformam a conscientização em uma ferramenta de sobrevivência.
        </p>
      </Text>
    </ContentWrapper>
  );
};

export default ParadaContent1_3;

import React from "react";
import { ContentWrapper, Text, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import paradaImage from "../../assets/img-parada-1-6.png";

interface ParadaContent1_6Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  listItems?: string[];
  conclusionParagraph?: string;
  imageSrc?: string;
  imageAlt?: string;
}
const ParadaContent1_6: React.FC<ParadaContent1_6Props> = ({
  number = "6",

  listItems = [
    "Na lei: o Código de Trânsito Brasileiro não proíbe explicitamente o uso do corredor, mas exige prudência.",
    "Na prática: em cidades como São Paulo, a CET chegou a delimitar faixas exclusivas para motos em algumas avenidas.",
    "No risco: motoristas que mudam de faixa sem sinalizar, distrações com celular e pontos cegos tornam o corredor imprevisível.",
  ],
  conclusionParagraph = "Especialistas recomendam: se for usar, que seja em baixa velocidade e com atenção redobrada.",
  imageSrc = paradaImage,
  imageAlt = "alt prosivório",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            O corredor <span>vilão</span> ou <span> aliado</span> ?
          </h2>
        </div>
      </Title>
      <ContentImage
        src={imageSrc}
        alt={imageAlt}
        width="100%"
        objectFit="contain"
      />
      <div className="flex">
        <Text>
          <div className="chamada">
            O famoso “corredor”, espaço entre carros parados ou em baixa
            velocidade, é uma realidade no trânsito brasileiro. Mas também é uma
            das áreas mais perigosas para quem pilota.
          </div>

          <Paragraphs>
            <ul>
              {listItems.map((item, index) => {
                // Detectar se o item começa com um título seguido de ":"
                const titleMatch = item.match(/^([^:]+:)\s*(.*)$/);

                if (titleMatch) {
                  const [, title, content] = titleMatch;
                  return (
                    <li key={index}>
                      <span className="bullet-title">{title}</span> {content}
                    </li>
                  );
                }

                return <li key={index}>{item}</li>;
              })}
            </ul>

            {/* Parágrafo de conclusão com sistema de detecção de título */}
            {conclusionParagraph &&
              (() => {
                const titleMatch =
                  conclusionParagraph.match(/^([^:]+:)\s*(.*)$/);

                if (titleMatch) {
                  const [, title, content] = titleMatch;
                  return (
                    <p className="conclusion">
                      <span className="paragraph-title">{title}</span> {content}
                    </p>
                  );
                }

                return <p className="conclusion">{conclusionParagraph}</p>;
              })()}
          </Paragraphs>
        </Text>
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent1_6;

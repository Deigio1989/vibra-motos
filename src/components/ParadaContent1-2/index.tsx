import React from "react";
import { ContentWrapper, Text, Title, Paragraphs } from "./styles";
import ContentImage from "../ContentImage";
import image1 from "../../assets/img-parada-1-2.png";

interface ParadaContent1_2Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent1_2: React.FC<ParadaContent1_2Props> = ({
  number = "2",

  paragraphs = [
    "A pilotagem muda radicalmente de acordo com o ambiente. Cada cenário traz riscos próprios e exige comportamentos diferentes do motociclista.",
    "Na cidade: O trânsito urbano concentra cruzamentos perigosos, pontos cegos de carros e ônibus, pedestres distraídos e motoristas impacientes. Pequenos deslocamentos, como ir até o trabalho ou buscar algo próximo, podem parecer simples, mas escondem armadilhas. A falsa sensação de segurança em trajetos curtos faz com que muitos acidentes aconteçam justamente nesses momentos.",
    "Na estrada: O prazer de rodar em alta velocidade vem acompanhado de riscos maiores. Ventos laterais, ultrapassagens de caminhões, buracos no asfalto, curvas de raio fechado e até animais soltos na pista são cenários comuns nas rodovias brasileiras. O impacto de um acidente em alta velocidade tende a ser muito mais grave.",
    "Na trilha ou em estradas de terra: Aqui, a aventura é o combustível. Terrenos irregulares, lama, pedras, cascalho, falta de aderência na pista e de sinalização exigem habilidades específicas. O risco não está apenas no ambiente natural, mas também na ausência de infraestrutura de socorro. O motociclista que se arrisca em trilhas sem preparo técnico ou equipamentos adequados aumenta significativamente sua vulnerabilidade.",
    'Cada ambiente exige adaptação. A consciência de que não existe uma "forma única" de pilotar é fundamental para reduzir riscos.',
  ],
  imageSrc = image1,
  imageAlt = "estrada",
}) => {
  return (
    <ContentWrapper className="content">
      <Title>
        <h1 className="number">{number}</h1>
        <div className="title-text">
          <h2 className="title">
            Onde a <span>estrada muda</span>,
          </h2>
          <h2 className="title">
            <span>os riscos</span> também mudam
          </h2>
        </div>
      </Title>
      <div className="flex">
        <ContentImage
          src={imageSrc}
          alt={imageAlt}
          width={"40%"}
          objectFit="contain"
        />

        <Text>
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
        </Text>
      </div>
    </ContentWrapper>
  );
};

export default ParadaContent1_2;

import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import mapaMoto from "../../assets/mapa-moto.png";

interface ParadaContent1_1Props {
  number?: string;
  secondaryTitle?: string;
  primaryTitle?: string;
  paragraphs?: string[];
  imageSrc?: string;
  imageAlt?: string;
}

const ParadaContent1_1: React.FC<ParadaContent1_1Props> = ({
  number = "1",

  paragraphs = [
    "O Brasil é um dos países com maior número de motocicletas no mundo. Segundo dados do Departamento Nacional de Trânsito (Denatran), em 2023 já eram mais de 31 milhões de motos registradas, representando cerca de 30% de toda a frota de veículos. Esse número não para de crescer, especialmente em cidades médias e pequenas, onde a moto é uma solução mais barata e prática do que o transporte público.",
    "Mas a moto não é apenas um meio de transporte. Para milhões de brasileiros, ela é uma ferramenta de trabalho: mototaxistas, entregadores, profissionais de manutenção e tantos outros dependem dela para garantir a própria renda. Por outro lado, para muitos apaixonados, a moto é também sinônimo de lazer, seja em passeios de fim de semana, seja em viagens longas pelas estradas do país.",
  ],
  imageSrc = mapaMoto,
  imageAlt = "Motocicleta com mapa do brasil no fundo",
}) => {
  return (
    <ContentWrapper className="content">
      <Text>
        <Title>
          <h1 className="number">{number}</h1>
          <div className="title-text">
            <h2>O país dos</h2>
            <h2>
              <span>motociclistas</span>
            </h2>
          </div>
        </Title>

        <Paragraphs>
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </Paragraphs>
      </Text>

      <ContentImage className="content-image" src={imageSrc} alt={imageAlt} />
    </ContentWrapper>
  );
};

export default ParadaContent1_1;

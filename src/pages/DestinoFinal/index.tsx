import React from "react";
import {
  ContentWrapper,
  Text,
  Title,
  Paragraphs,
  ContentImage,
} from "./styles";
import paradaImage from "../../assets/destino-final.png";

import tarjaListra from "../../assets/tarja-listra.png";

import iconeFinal from "../../assets/icone-final.png";

import {
  TitledParagraph,
  TitledList,
  NormalParagraph,
} from "../../components/SmartParagraphs";

const DestinoFinal: React.FC = ({}) => {
  return (
    <ContentWrapper className="content">
      <div className="image-header">
        <img className="icon-final" src={iconeFinal} />
        <img className="tarja-listra" src={tarjaListra} />
      </div>
      <div className="body">
        <Title>
          <div className="title-text">
            <h2>
              <span>Chegada </span>– O destino final
            </h2>
          </div>
        </Title>
        <div className="flex">
          <Text>
            <Paragraphs>
              <NormalParagraph>
                Toda viagem tem um destino. E o nosso aqui é simples:
                <b>chegar em segurança.</b>
              </NormalParagraph>

              <NormalParagraph>
                Passamos pela paixão do Brasil pelas motos, pela importância da
                segurança e pelas técnicas que fazem a diferença na prática.
                Agora, a decisão é sua: vai pilotar só pelo prazer ou vai
                pilotar com prazer e consciência?
              </NormalParagraph>

              <NormalParagraph>
                No fim das contas, a maior conquista não é a velocidade, nem a
                distância percorrida. É poder contar boas histórias.
              </NormalParagraph>
              <NormalParagraph>
                Porque a verdadeira vitória de cada viagem é sempre a mesma:
                <b> voltar para casa bem e pronto para a próxima jornada.</b>
              </NormalParagraph>
            </Paragraphs>
          </Text>

          <ContentImage
            className="content-image"
            src={paradaImage}
            alt="alt provisório"
            width={"40%"}
          />
        </div>
      </div>
    </ContentWrapper>
  );
};

export default DestinoFinal;

import styled from "styled-components";
import {
  ColumnLayout,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ModularParadaStyles";
import { FramedTextTarja2 } from "../FramedText";
import ContentImage from "../ContentImage";

// Layout em coluna específico para ParadaContent2-2
export const ContentWrapper = styled(ColumnLayout)`
  margin-left: 5rem;

  .flex {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
    margin-top: 1.5rem;
    align-items: center;
    width: 100%;
  }
`;

// Texto com FramedText e margens específicas
export const Text = styled(FramedTextTarja2)`
  margin-left: 0;
  margin-right: 5rem;
`;

// Título com customização de fonte
export const Title = styled(BaseTitle)`
  .title-text span {
    font-size: 64px;
  }
`;

// Parágrafos com destaque para títulos
export const Paragraphs = styled(BaseParagraphs)`
  p {
    text-align: justify;

    .paragraph-title {
      color: var(--paragraph-color);
    }
  }
`;

// Imagem configurável via props
export const StyledContentImage = styled(ContentImage)`
  width: 80%;
  object-fit: contain;
`;

// Export da imagem com configuração padrão
export { ContentImage };

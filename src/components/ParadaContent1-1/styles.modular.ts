import styled from "styled-components";
import {
  BaseLayout,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ModularParadaStyles";
import { FramedTextTarja1 } from "../FramedText";
import ContentImage from "../ContentImage";

// Layout específico para ParadaContent1-1
export const ContentWrapper = styled(BaseLayout)`
  .content-image {
    width: 55%;
    object-fit: contain;
  }
`;

// Texto com FramedText e configurações específicas
export const Text = styled(FramedTextTarja1)`
  margin-left: 5rem;
`;

// Título sem customizações adicionais
export const Title = styled(BaseTitle)``;

// Parágrafos padrão
export const Paragraphs = styled(BaseParagraphs)``;

// Imagem com configurações específicas
export { ContentImage };

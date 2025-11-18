import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseTitle,
  BaseParagraphs,
  TextVariant3,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja1 } from "../FramedText";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
  }

  .content-image {
    width: 55%;
    object-fit: contain;
  }
`;

export const Text = styled(FramedTextTarja1)`
  margin-left: 0;
  margin-right: 5rem;
`;

export const Title = styled(BaseTitle)`
  .title-text span {
    font-size: 64px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  p {
    text-align: justify;

    .paragraph-title {
      color: var(--paragraph-color);
    }
  }
`;

export const ContentImage = styled.img`
  /* Estilos para a imagem do conteúdo */
  max-width: 100%;
  height: auto;
`;

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
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
  }
`;

export const Text = styled(FramedTextTarja1)`
  .chamada {
    width: 100%;
  }
`;

export const Title = styled(BaseTitle)`
  padding-left: 5rem;
  .title-text span {
    font-size: 64px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  p {
    .paragraph-title {
      color: var(--paragraph-color);
    }
  }
`;

export const ContentImage = styled.img`
  /* Estilos para a imagem do conteúdo */
  width: 50%;
  padding: 0;
  object-fit: contain;
`;

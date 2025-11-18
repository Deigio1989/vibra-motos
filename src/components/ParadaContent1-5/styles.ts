import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja1 } from "../FramedText";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin-left: 5rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;

export const Text = styled(FramedTextTarja1)`
  flex: 1;
  width: 65%;
  margin-left: 0;
  margin-right: 1rem;

  .chamada,
  .conclusao {
    width: 100%;
  }
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

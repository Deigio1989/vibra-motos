import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja2 } from "../FramedText";

// Usando os componentes base com customizações específicas
export const ContentWrapper = styled(BaseContentWrapper)`
  margin: 0 5rem;
  margin-top: 3rem;
  flex-direction: column;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }
`;

export const Text = styled(FramedTextTarja2)`
  width: 90%;
  margin: 0 auto;

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
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    text-align: justify;
    margin: 0;
    position: relative;
    padding-left: 1.2rem;

    &::before {
      content: "•";
      color: var(--paragraph-color);
      font-size: 20px;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    .bullet-title {
      font-weight: 700;
      font-style: normal;
      color: var(--paragraph-color);
    }
  }

  p {
    text-align: justify;

    .paragraph-title {
      color: var(--secondary-color);
    }

    &.conclusion {
      margin-top: 2rem;
      padding-top: 1rem;
    }
  }
`;

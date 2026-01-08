import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja2 } from "../FramedText";

// Usando os componentes base com props específicas para manter resultado visual idêntico
export const ContentWrapper = styled(BaseContentWrapper)`
  flex-direction: column;
  .flex {
    gap: 0;
  }
`;

export const Card = styled(FramedTextTarja2)`
  margin: 0 auto;
  width: 90%;
  border-radius: 16px;
  overflow: hidden;
  animation: slideIn 0.5s ease-out;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  /* Aplicar border-radius e padding no container de conteúdo */
  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  /* Padding específico quando é o slide 0 */
  .carousel-flex {
    padding: 1.5rem;
  }

  .carousel-flex {
    display: flex;
    gap: 2rem;
    align-items: center;
    .carousel-img {
      flex: 2;
    }
    .content-text {
      flex: 5;
    }

    &.conclusion-slide {
      justify-content: space-between;

      .content-center {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
      }
    }

    .arrow-button {
      width: 50px;
      height: 50px;
      cursor: pointer;
      transition: all 0.3s ease;
      animation: pulse 2s ease-in-out infinite;

      &:hover {
        animation: none;
        transform: scale(1.15);
      }

      &:active {
        transform: scale(0.95);
      }
    }

    @keyframes pulse {
      0%,
      100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.05);
      }
    }
  }
  .card-paragraph {
    text-align: center;
  }
`;

export const Title = styled(BaseTitle)`
  flex: 3;
  margin: 0;
  .number {
    color: #96d6ac;
  }

  .title {
    color: #000 !important;
  }

  .title-text span {
    font-size: 52px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  .chamada {
    width: 100%;
    margin-bottom: 1rem;
  }

  p {
    text-align: justify;

    .paragraph-title {
      color: var(--paragraph-color);
      font-weight: bold;
    }
  }

  .conclusao {
    text-align: center;
    font-weight: bold;
    font-style: italic;
    font-size: 1.2rem;
    color: var(--secondary-color);
    margin-top: 0;
    margin: 0 auto;
  }
`;

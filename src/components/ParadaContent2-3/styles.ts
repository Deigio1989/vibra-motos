import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja2 } from "../FramedText";

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

  > div {
    border-radius: 16px 16px 0 0;
    padding: 2.2rem 2rem;
  }

  .carousel-flex.slide-0 {
    padding: 2rem;
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

      &.arrow-left {
        order: -1;
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
    font-size: 64px;
  }
`;

export const Paragraphs = styled(BaseParagraphs)`
  .paragraph-title {
    font-weight: bold;
    color: var(--secondary-color);
  }
  .subtitle {
    color: var(--secondary-color);
    font-size: 1.2rem;
    margin-bottom: 1rem;
  }
  p {
    text-align: justify;
  }
`;

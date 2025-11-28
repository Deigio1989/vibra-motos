import styled, { css } from "styled-components";

// ========================================
// BASE COMPONENTS - REUTILIZÁVEIS
// ========================================

interface BaseContentWrapperProps {
  variant?: "default" | "column" | "flex" | "centered";
  marginLeft?: string;
  margin?: string;
}

export const BaseContentWrapper = styled.div<BaseContentWrapperProps>`
  margin-top: 3rem;
  display: flex;

  ${(props) => {
    switch (props.variant) {
      case "column":
        return css`
          flex-direction: column;
          margin-left: ${props.marginLeft || "5rem"};
        `;
      case "flex":
        return css`
          flex-direction: column;
          .flex {
            display: flex;
          }
        `;
      case "centered":
        return css`
          flex-direction: column;
          margin: ${props.margin || "0 5rem"};
        `;
      default:
        return css``;
    }
  }}

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem;
  }

  .image-column {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

interface BaseTextProps {
  width?: string;
  marginLeft?: string;
  marginRight?: string;
  flex?: number;
  centered?: boolean;
}

export const BaseText = styled.div<BaseTextProps>`
  background-color: var(--text-background-color);
  padding: 1rem 2rem;
  color: #000;
  font-size: 20px;
  font-family: var(--font-family);

  ${(props) => css`
    width: ${props.width || "auto"};
    margin-left: ${props.marginLeft || "5rem"};
    margin-right: ${props.marginRight || "1rem"};
    ${props.flex && `flex: ${props.flex};`}
    ${props.centered && `margin: 0 auto;`}
  `}

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;

    text-align: justify;
    margin-bottom: 2rem;
    width: ${(props) => (props.width === "65%" ? "100%" : "75%")};
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }

  b {
    display: block;
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
`;

interface BaseTitleProps {
  spanSize?: "58px" | "64px";
  flex?: number;
  marginLeft?: string;
}

export const BaseTitle = styled.div<BaseTitleProps>`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-family);
  ${(props) => props.flex && `flex: ${props.flex};`}
  ${(props) => props.marginLeft && `margin-left: ${props.marginLeft};`}

  .number {
    font-size: 10rem;
    line-height: 1;
    color: var(--secondary-background);
    margin: 0;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 0.7;
      color: var(--primary-color);
      margin: 0;
    }

    span {
      font-size: ${(props) => props.spanSize || "58px"};
      font-weight: 700;
      line-height: 0.7;
      color: var(--secondary-color);
      margin: 0;
    }
  }
`;

interface BaseParagraphsProps {
  hasCustomBullets?: boolean;
}

export const BaseParagraphs = styled.div<BaseParagraphsProps>`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    margin: 0;
    ${(props) => !props.hasCustomBullets && "text-align: justify;"}

    .paragraph-title {
      font-weight: 700;
      font-style: normal;
      color: var(--secondary-color);
    }

    &.conclusion {
      margin-top: 2rem;
      padding-top: 1rem;
    }
  }

  ${(props) =>
    props.hasCustomBullets &&
    css`
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
    `}
`;

// ========================================
// VARIAÇÕES ESPECÍFICAS
// ========================================

// Para ParadaContent1-3 e similares - customizações específicas do Text
export const TextVariant3 = styled(BaseText)`
  .chamada,
  .conclusao {
    width: 75%;
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
`;

// Para ParadaContent1-6 e ParadaContent1-7 - customizações de parágrafos específicas
export const ParagraphsVariant6 = styled(BaseParagraphs)`
  p {
    text-align: justify;

    .paragraph-title {
      color: var(--secondary-color);
    }
  }
`;

// ========================================
// CONTENT IMAGES - VARIAÇÕES ESPECÍFICAS
// ========================================

export const ContentImage = styled.img`
  max-width: 100%;
  height: auto;
`;

export const ContentImageVariant2 = styled(ContentImage)`
  height: 150px;
`;

export const ContentImageVariant4 = styled(ContentImage)`
  width: 52%;
  height: auto;
  object-fit: contain;
  padding: 0 2rem;
  margin-top: -4rem;
`;

export const ContentImageVariant5 = styled(ContentImage)`
  width: 50%;
  object-fit: contain;
  margin-top: -7rem;
  padding: 3rem;
  padding-top: 0rem;
`;

export const ContentImageVariant6 = styled(ContentImage)`
  width: 100%;
  object-fit: contain;
  padding: 3rem;
  padding-top: 0rem;
`;

// ========================================
// PARADA CONTAINER - CENTRALIZADO
// ========================================

export const ParadaContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;

  .content {
    margin-top: 3rem;
    display: flex;
  }

  .navigation {
    margin-top: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .next-button,
    .back-button {
      width: 11rem;
      object-fit: contain;
      cursor: pointer;
    }
  }

  .tarja-listra {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    width: 100%;

    img {
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
`;

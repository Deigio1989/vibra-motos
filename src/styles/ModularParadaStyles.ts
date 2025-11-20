import styled, { css } from "styled-components";

// ========================================
// LAYOUT VARIANTS - ESTRUTURAS PRINCIPAIS
// ========================================

export interface LayoutProps {
  marginLeft?: string;
  marginRight?: string;
  margin?: string;
  width?: string;
  gap?: string;
}

// Layout Base - Flex horizontal com texto e imagem
export const BaseLayout = styled.div<LayoutProps>`
  margin-top: 3rem;
  display: flex;

  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: ${(props) => props.gap || "1rem"};
  }
`;

// Layout Coluna - Título + texto + imagem em coluna
export const ColumnLayout = styled(BaseLayout)`
  flex-direction: column;
  margin-left: ${(props) => props.marginLeft || "5rem"};
  margin-right: ${(props) => props.marginRight || "0"};
  margin: ${(props) => props.margin || "auto"};
`;

// Layout Flex - Flexível com controle total
export const FlexLayout = styled(BaseLayout)`
  flex-direction: column;
  margin: ${(props) => props.margin || "0 5rem"};
  margin-top: 3rem;
`;

// Layout Centrado - Conteúdo centralizado
export const CenteredLayout = styled(BaseLayout)`
  flex-direction: column;
  margin: ${(props) => props.margin || "0 5rem"};
  margin-top: 3rem;

  .image-column {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
  }
`;

// ========================================
// TEXT CONTAINER VARIANTS
// ========================================

export interface TextContainerProps {
  width?: string;
  margin?: string;
  flex?: number;
}

export const TextContainer = styled.div<TextContainerProps>`
  ${(props) => css`
    width: ${props.width || "auto"};
    margin: ${props.margin || "0"};
    ${props.flex && `flex: ${props.flex};`}
  `}

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
    width: 100%;
  }

  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
`;

// ========================================
// TITLE VARIANTS
// ========================================

export interface TitleProps {
  marginLeft?: string;
  marginBottom?: string;
  width?: string;
}

export const BaseTitle = styled.div<TitleProps>`
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  margin-left: ${(props) => props.marginLeft || "5rem"};
  margin-bottom: ${(props) => props.marginBottom || "2rem"};
  width: ${(props) => props.width || "auto"};

  .number {
    font-size: 120px;
    font-weight: bold;
    color: var(--secondary-color);
    margin: 0;
    line-height: 0.8;
    font-family: var(--font-family);
  }

  .title-text {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-family: var(--font-family);

    h2 {
      font-size: 52px;
      font-weight: bold;
      color: var(--primary-color);
      margin: 0;
      line-height: 1;

      span {
        color: var(--secondary-color);
      }
    }

    .title {
      color: var(--primary-color);
    }
  }
`;

// ========================================
// PARAGRAPHS VARIANTS
// ========================================

export const BaseParagraphs = styled.div`
  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--paragraph-color);
    text-align: justify;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }

    .paragraph-title,
    .bullet-title {
      font-weight: bold;
      color: var(--paragraph-color);
    }
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;

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
        top: -2px;
      }

      .bullet-title {
        font-weight: bold;
        color: var(--paragraph-color);
      }
    }
  }
`;

// ========================================
// LEGACY COMPATIBILITY
// Mantém compatibilidade com código existente
// ========================================

export const BaseContentWrapper = BaseLayout;
export const BaseText = TextContainer;

// Legacy image variants - mantém compatibilidade atual
export const ContentImage = styled.img`
  max-width: 100%;
  height: auto;
  object-fit: contain;
`;

export const ContentImageVariant2 = styled(ContentImage)`
  width: 100%;
  margin: 2rem 0;
`;

export const ContentImageVariant3 = styled(ContentImage)`
  width: 45%;
  margin-right: 2rem;
`;

export const ContentImageVariant4 = styled(ContentImage)`
  width: 35%;
  object-fit: contain;
`;

export const ContentImageVariant5 = styled(ContentImage)`
  width: 35%;
  margin-left: 1rem;
`;

export const ContentImageVariant6 = styled(ContentImage)`
  width: 100%;
  margin: 1rem 0;
`;

// Text variant 3 (legacy)
export const TextVariant3 = styled(TextContainer)`
  margin-left: 0;
  margin-right: 5rem;
`;

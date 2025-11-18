import React from "react";
import styled from "styled-components";

// Padrão de listras diagonais com as cores e proporções especificadas:
// 3x #268402, 2x #0101fc, 1x #fff, 1x #feda00, 2x #fff, 2x #288300
const stripePattern = `
  repeating-linear-gradient(
    115deg,
    #004415 0px,
    #004415 6px,       /* 3 partes = 12px */
    #0101fc 6px,
    #0101fc 10px,       /* 2 partes = 8px */
    #fff 10px,
    #fff 12px,          /* 1 parte = 4px */
    #feda00 12px,
    #feda00 16px,       /* 1 parte = 4px */
    #fff 16px,
    #fff 18px,          /* 2 partes = 8px */
    #288300 18px,
    #288300 22px        /* 2 partes = 8px */
  )
`;

interface FramedTextProps {
  children: React.ReactNode;
  tarjaHeight?: "1.5rem" | "1.75rem" | "2rem" | "2.25rem";
  className?: string;
  width?: string;
  marginLeft?: string;
  marginRight?: string;
  flex?: number;
  centered?: boolean;
}

// Container principal que gerencia as tarjas
const FramedTextWrapper = styled.div<{
  $tarjaHeight: string;
  $width?: string;
  $marginLeft?: string;
  $marginRight?: string;
  $flex?: number;
  $centered?: boolean;
}>`
  position: relative;

  /* Aplicar as props de layout que seriam do BaseText */
  width: ${(props) => props.$width || "auto"};
  margin-left: ${(props) => props.$marginLeft || "5rem"};
  margin-right: ${(props) => props.$marginRight || "1rem"};
  ${(props) => props.$flex && `flex: ${props.$flex};`}
  ${(props) => props.$centered && `margin: 0 auto;`}
  
  /* Tarja superior - sem padding, encosta na margem */
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: ${(props) => props.$tarjaHeight};
    background: ${stripePattern};
  }

  /* Tarja inferior - sem padding, encosta na margem */
  &::after {
    content: "";
    display: block;
    width: 100%;
    height: ${(props) => props.$tarjaHeight};
    background: ${stripePattern};
  }
`;

// Container do conteúdo - com padding apenas no texto
const ContentContainer = styled.div`
  background-color: var(--text-background-color);
  padding: 1rem 2rem; /* Padding apenas no conteúdo */
  color: #000;
  font-size: 20px;
  font-family: var(--font-family);

  .chamada,
  .conclusao {
    font-size: 20px;
    line-height: 1.6;
    text-align: justify;
    margin-bottom: 2rem;
    width: 75%;
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

export const FramedText: React.FC<FramedTextProps> = ({
  children,
  tarjaHeight = "1.75rem",
  className,
  width,
  marginLeft,
  marginRight,
  flex,
  centered,
}) => {
  return (
    <FramedTextWrapper
      $tarjaHeight={tarjaHeight}
      $width={width}
      $marginLeft={marginLeft}
      $marginRight={marginRight}
      $flex={flex}
      $centered={centered}
      className={className}
    >
      <ContentContainer>{children}</ContentContainer>
    </FramedTextWrapper>
  );
};

// Componentes pré-configurados para facilitar o uso
// Padrão agora é 1.75rem, mas mantemos as variantes para flexibilidade
export const FramedTextTarja1 = styled(FramedText).attrs({
  tarjaHeight: "1.75rem",
})``;

export const FramedTextTarja2 = styled(FramedText).attrs({
  tarjaHeight: "2.25rem",
})``;

// Variante com altura menor se necessário
export const FramedTextTarjaSmall = styled(FramedText).attrs({
  tarjaHeight: "1.5rem",
})``;

export default FramedText;

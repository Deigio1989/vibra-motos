import styled from "styled-components";

interface AnchorWrapperProps {
  $variant: "primary" | "secondary";
}

export const AnchorWrapper = styled.div<AnchorWrapperProps>`
  position: absolute;
  transform-origin: center;

  .line {
    position: absolute;
    left: 50%;
    width: 3px;
    height: 6.5rem; /* Altura fixa */
    opacity: 0.5;

    /* Transform-origin: primary cresce de cima, secondary de baixo */
    transform-origin: ${(props) =>
      props.$variant === "primary" ? "top center" : "bottom center"};

    /* Começa "comprimida" com scaleY(0) */
    transform: translateX(-50%) scaleY(0);

    background-color: ${(props) =>
      props.$variant === "primary"
        ? "var(--accent-green-primary)"
        : "var(--accent-green-secondary)"};

    /* Secondary precisa ficar posicionada acima para crescer para cima */
    top: ${(props) => (props.$variant === "primary" ? "0" : "-6.5rem")};

    transition: all 0.3s ease;

    &.open {
      opacity: 1;
      /* Expande para tamanho completo */
      transform: translateX(-50%) scaleY(1);
    }
  }

  .point {
    position: absolute;
    transform-origin: center;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: var(--primary-color);
    border: solid
      ${(props) =>
        props.$variant === "primary"
          ? "var(--accent-green-primary)"
          : "var(--accent-green-secondary)"}
      3.5px;
    transform: translateX(-50%) translateY(-50%);
    cursor: pointer;
    transition: all 0.5s ease;
    z-index: 10;

    &:hover {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
    }
  }

  .icon {
    transform-origin: center;
    position: absolute;
    background-color: ${(props) =>
      props.$variant === "primary"
        ? "var(--accent-green-primary)"
        : "var(--accent-green-secondary)"};
    transform: translateX(-50%) translateY(-50%);
    width: 16px;
    height: 16px;
    padding: 8px;
    opacity: 0.1; /* Tornar visível para debug */
    border-radius: 50%;
    filter: drop-shadow(0px 8px 8px rgba(0, 0, 0, 0.25));
    transition: all 0.5s ease;

    /* Centralizar e estilizar a imagem dentro */
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
    }

    &.open {
      opacity: 1;
      transform: translateX(-50%)
        translateY(
          ${(props) =>
            props.$variant === "primary"
              ? "calc(-50% + 6.5rem)"
              : "calc(-50% - 6.5rem)"}
        );
      width: 7rem;
      height: 7rem;
      padding: 1rem;

      img {
        /* A imagem mantém as mesmas proporções quando expandida */
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }

  .text-box {
    position: absolute;
    top: ${(props) =>
      props.$variant === "primary"
        ? "calc(-50% + 7rem)"
        : "calc(-50% - 18rem)"};
    left: 50%;
    transform: translateX(-50%)
      translateY(
        ${(props) => (props.$variant === "primary" ? "-10px" : "10px")}
      );
    text-align: center;
    background-color: var(--secondary-background);
    padding: ${(props) =>
      props.$variant === "primary"
        ? "3.5rem 0.7rem 1.5rem"
        : "1rem 0.7rem 3.5rem"};
    border-radius: 16px;

    /* Estado inicial - invisível e levemente deslocado */
    /* Primary: slide para cima (aparece acima), Secondary: slide para baixo (aparece abaixo) */
    opacity: 0;
    /* Transição rápida para saída (sem delay) */
    transition: all 0.2s ease;
    width: 6.5rem;
    &.open {
      opacity: 1;
      transform: translateX(-50%) translateY(0);

      /* Transição mais lenta com delay para entrada */
      transition: all 0.4s ease 0.3s;
    }

    .number {
      color: var(--secondary-color);
      font-size: 4rem;
      line-height: 0.8;
      margin: 5px 0;
    }
    .title {
      font-size: 1rem;
      line-height: 1;
      margin: 0;
    }
  }
`;

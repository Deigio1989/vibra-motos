import styled from "styled-components";

interface AnchorWrapperProps {
  $variant: "primary" | "secondary";
  $isPrevious?: boolean;
  $isBlocked?: boolean;
}

export const AnchorWrapper = styled.div<AnchorWrapperProps>`
  position: absolute;
  transform-origin: center;

  /* Anchors anteriores ficam visíveis mas sem opacidade reduzida no wrapper geral */

  .line {
    position: absolute;
    left: 50%;
    width: 3px;
    height: 6.5rem; /* Altura fixa */
    opacity: 1;

    /* Transform-origin: primary cresce de cima, secondary de baixo */
    transform-origin: ${(props) =>
      props.$variant === "primary" ? "top center" : "bottom center"};

    /* Começa "comprimida" com scaleY(0) */
    transform: translateX(-50%) scaleY(0);

    background-color: ${(props) => {
      if (props.$isBlocked) {
        // Cores bem escuras para anchors bloqueados
        return props.$variant === "primary"
          ? "var(--primary-color-blocked)"
          : "var(--secondary-color-blocked)";
      }
      if (props.$isPrevious) {
        // Cores acinzentadas para anchors anteriores (cores diferenciadas, opacidade 1)
        return props.$variant === "primary"
          ? "var(--accent-green-primary-grayed)"
          : "var(--accent-green-secondary-grayed)";
      }
      return props.$variant === "primary"
        ? "var(--accent-green-primary)"
        : "var(--accent-green-secondary)";
    }};

    /* Secondary precisa ficar posicionada acima para crescer para cima */
    top: ${(props) => (props.$variant === "primary" ? "0" : "-6.5rem")};

    transition: all 0.3s ease;

    /* Estados dos anchors */
    opacity: 1; /* Line sempre mantém opacidade 1 */
    transform: ${(props) => {
      if (props.$isBlocked) return "translateX(-50%) scaleY(0)"; // Bloqueados ficam "fechados"
      if (props.$isPrevious) return "translateX(-50%) scaleY(1)"; // Anteriores ficam "abertos"
      return "translateX(-50%) scaleY(0)"; // Normal
    }};

    &.open {
      opacity: 1; /* Line sempre mantém opacidade 1 */
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
    background-color: ${(props) => {
      if (props.$isBlocked) return "var(--primary-color-blocked)";
      if (props.$isPrevious) return "var(--primary-color-grayed)";
      return "var(--primary-color)";
    }};
    border: solid
      ${(props) => {
        if (props.$isBlocked) {
          return "var(--secondary-color-blocked)";
        }
        if (props.$isPrevious) {
          return props.$variant === "primary"
            ? "var(--accent-green-primary-grayed)"
            : "var(--accent-green-secondary-grayed)";
        }
        return props.$variant === "primary"
          ? "var(--accent-green-primary)"
          : "var(--accent-green-secondary)";
      }}
      3.5px;
    transform: translateX(-50%) translateY(-50%);
    cursor: ${(props) => (props.$isBlocked ? "not-allowed" : "pointer")};
    transition: all 0.5s ease;
    z-index: 10;

    /* Point mantém opacidade 1, apenas muda cor */
    opacity: 1;
    filter: none; /* Remove filtros, usa cores diretas */

    &:hover {
      transform: translateX(-50%) translateY(-50%) scale(1.2);
    }
  }

  .icon {
    transform-origin: center;
    position: absolute;
    background-color: ${(props) => {
      if (props.$isBlocked) {
        return props.$variant === "primary"
          ? "var(--accent-green-primary-blocked)"
          : "var(--accent-green-secondary-blocked)";
      }
      if (props.$isPrevious) {
        // Ícones com cor acinzentada direta
        return props.$variant === "primary"
          ? "var(--accent-green-primary-grayed)"
          : "var(--accent-green-secondary-grayed)";
      }
      return props.$variant === "primary"
        ? "var(--accent-green-primary)"
        : "var(--accent-green-secondary)";
    }};
    transform: translateX(-50%) translateY(-50%);
    width: 16px;
    height: 16px;
    padding: 8px;
    /* Ícones anteriores ficam sempre visíveis (como ativos) */
    opacity: ${(props) =>
      props.$isPrevious ? "1" : "0.1"}; /* Ícone mantém opacidade 1 */
    transform: ${(props) =>
      props.$isPrevious
        ? "translateX(-50%) translateY(-50%) scale(1)"
        : "translateX(-50%) translateY(-50%)"};
    border-radius: 50%;
    filter: drop-shadow(
      0px 8px 8px rgba(0, 0, 0, 0.25)
    ); /* Remove grayscale, mantém apenas drop-shadow */
    transition: all 0.5s ease;

    /* Centralizar e estilizar a imagem dentro */
    display: flex;
    align-items: center;
    justify-content: center;

    @keyframes pulsePrimary {
      0% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1);
      }
      50% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1.1);
      }
      100% {
        transform: translateX(-50%) translateY(calc(-50% + 6.5rem)) scale(1);
      }
    }

    @keyframes pulseSecondary {
      0% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1);
      }
      50% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1.1);
      }
      100% {
        transform: translateX(-50%) translateY(calc(-50% - 6.5rem)) scale(1);
      }
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      border-radius: inherit;
      /* Apenas a imagem fica com opacidade reduzida para anchors anteriores */
      opacity: ${(props) => (props.$isPrevious ? "0.7" : "1")};
    }

    &.open {
      opacity: 1; /* Ícone sempre opacidade 1 quando aberto */
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

      /* Aplicar animação pulse apenas quando está aberto E não está bloqueado/acinzentado */
      animation: ${(props) => {
        if (props.$isBlocked || props.$isPrevious) return "none";
        return props.$variant === "primary"
          ? "pulsePrimary 2s ease-in-out infinite"
          : "pulseSecondary 2s ease-in-out infinite";
      }};

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
    background-color: ${(props) =>
      props.$isPrevious
        ? "var(--secondary-background-grayed)"
        : "var(--secondary-background)"};
    padding: ${(props) =>
      props.$variant === "primary"
        ? "3.5rem 0.7rem 1.5rem"
        : "1rem 0.7rem 3.5rem"};
    border-radius: 16px;

    /* Estado inicial - anchors anteriores ficam sempre visíveis (como ativos) */
    opacity: ${(props) => (props.$isPrevious ? "0.7" : "0")};
    transform: ${(props) =>
      props.$isPrevious
        ? "translateX(-50%) translateY(0)" // Anteriores sempre "abertos"
        : `translateX(-50%) translateY(${
            props.$variant === "primary" ? "-10px" : "10px"
          })`};
    /* Transição rápida para saída (sem delay) */
    transition: all 0.2s ease;
    width: 6.5rem;

    &.open {
      opacity: ${(props) => (props.$isPrevious ? "0.3" : "1")};
      transform: translateX(-50%) translateY(0);

      /* Transição mais lenta com delay para entrada */
      transition: all 0.4s ease 0.3s;
    }

    .number {
      color: ${(props) =>
        props.$isPrevious
          ? "var(--secondary-color-grayed)"
          : "var(--secondary-color)"};
      font-size: 4rem;
      line-height: 0.8;
      margin: 5px 0;
    }
    .title {
      color: ${(props) =>
        props.$isPrevious
          ? "var(--primary-color-grayed)"
          : "var(--primary-color)"};
      font-size: 1rem;
      line-height: 1;
      margin: 0;
    }
  }
`;

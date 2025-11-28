import styled, { keyframes } from "styled-components";

// Animação de pulsar suave
const pulse = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

// Componente Next Button unificado
export const NextButton = styled.button<{ $canAdvance?: boolean }>`
  align-self: flex-end;
  width: 11rem;
  cursor: ${(props) =>
    props.$canAdvance !== false ? "pointer" : "not-allowed"};
  border: none;
  background: transparent;
  padding: 0;

  /* Estilos condicionais baseados em $canAdvance */
  opacity: ${(props) => (props.$canAdvance !== false ? 1 : 0.5)};
  filter: ${(props) =>
    props.$canAdvance !== false ? "none" : "grayscale(100%)"};

  /* Animação de pulsar suave */
  animation: ${pulse} 2s ease-in-out infinite;
  animation-play-state: ${(props) =>
    props.$canAdvance !== false ? "running" : "paused"};

  /* Transição suave para hover */
  transition: all 0.3s ease;

  &:hover {
    transform: ${(props) =>
      props.$canAdvance !== false ? "scale(1.1)" : "scale(1)"};
    animation-play-state: paused; /* Para a animação no hover */
  }

  &:active {
    transform: ${(props) =>
      props.$canAdvance !== false ? "scale(0.95)" : "scale(1)"};
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

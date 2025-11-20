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
export const NextButton = styled.button`
  margin-top: 2rem;
  align-self: flex-end;
  width: 11rem;
  cursor: pointer;
  border: none;
  background: transparent;
  padding: 0;

  /* Animação de pulsar suave */
  animation: ${pulse} 2s ease-in-out infinite;

  /* Transição suave para hover */
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    animation-play-state: paused; /* Para a animação no hover */
  }

  &:active {
    transform: scale(0.95);
  }

  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

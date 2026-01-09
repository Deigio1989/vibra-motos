import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const zoomBounceIn = keyframes`
  0% {
    transform: scale(0.8);
    opacity: 0;
  }
  85% {
    transform: scale(1.05);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
  animation: ${fadeIn} 0.3s ease-out;
`;

export const ModalCard = styled.div<{ $isOpen: boolean }>`
  background-color: #004d21;
  border-radius: 20px;
  max-width: 1200px;
  width: 90%;
  max-height: 92vh;
  overflow: hidden;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  animation: ${zoomBounceIn} 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
`;

export const ModalContent = styled.div`
  flex: 1;
  overflow-y: auto;

  .children {
    padding: 2rem;
  }
  /* Custom scrollbar */
  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-top: 20px; /* Margem no topo para não cortar border-radius */
    margin-bottom: 20px;
    padding-right: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background: var(--primary-color);
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--accent-green-primary);
  }
`;

export const ModalFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.25rem 2rem;
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  background-color: var(--background-color);
  gap: 1rem;
`;

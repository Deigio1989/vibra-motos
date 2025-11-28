import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const LoadingContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(135deg, #1d5527 0%, #2d2d2d 100%);
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  animation: ${fadeIn} 0.3s ease-in;
`;

const Spinner = styled.div`
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255, 255, 255, 0.1);
  border-top: 6px solid var(--secondary-color, #00ff00);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 32px;
  color: var(--primary-color, #ffffff);
  font-weight: 500;
  letter-spacing: 1px;
`;

const LoadingScreen: React.FC = ({}) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText> CARREGANDO...,</LoadingText>
    </LoadingContainer>
  );
};

export default LoadingScreen;

import styled, { keyframes } from "styled-components";
import { GlobalContainer } from "../../styles/GlobalStyles";

// Keyframes para as animações
const fadeInFromLeft = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeIn = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const zoomIn = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(1);
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1);
  }
`;

export const ModuleMain = styled.main`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const RetrovisorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;

  padding: 1rem 5rem;
  .section-title {
    position: relative;
    animation: ${fadeInFromLeft} 1s ease-out forwards;
  }

  .section-title-image {
    width: 500px;
  }
  .section-title-text {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 32px;
    text-align: center;
  }

  .section-body {
    position: relative;
    opacity: 0;
    animation: ${fadeIn} 1s ease-out 0.5s forwards;
  }
  .paragraphs {
    position: absolute;
    left: 0;
    top: 0;
    padding: 4rem 4.6rem;
    color: #000;
    p {
      margin-bottom: 0.5rem;
    }
  }

  .section-body-image {
    width: 600px;
    margin-bottom: 4rem;
  }
  .retrovisor-image {
    position: absolute;
    top: 85%;
    left: 50%;
    width: 600px;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .retrovisor-image-back {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    animation: ${zoomIn} 1.5s ease-out 1s forwards;
  }
  .retrovisor-image-front {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 450px;
    z-index: 1;
  }
`;

export const FooterImage = styled.img`
  width: 100%;
  margin-top: 2rem;
  z-index: -1;
`;

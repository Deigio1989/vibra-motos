import styled, { keyframes } from "styled-components";
import { GlobalContainer } from "../../styles/GlobalStyles";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const fadeInDelay = keyframes`

    0% {
      opacity: 0;
    }
    35% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

// Exportar NextButton para uso neste módulo
export { NextButton } from "../../styles/ButtonStyles";

export const ModuleMain = styled.main`
  overflow-x: hidden;
  .tarja {
    height: 3rem;
    width: 100%;
  }
`;

export const IntroSection = styled.section`
  height: 941px;
  position: relative;
`;

export const ModuleContainer = styled(GlobalContainer)`
  height: 100%;
  margin: 0 auto;
  margin-top: -1rem;
  z-index: 11;
  display: flex;
  flex-direction: column;

  animation: ${fadeInDelay} 2s ease-in-out;

  justify-content: space-between;

  .intro {
    margin-top: 3rem;
  }
  .logo {
    height: 6rem;
    margin-bottom: 6rem;
  }
  .title {
    max-width: 500px;
    font-weight: 700;
    font-style: Bold Italic;
    font-size: 40px;
    line-height: 1.2;
  }
`;

export const BackgroundImages = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0;
  background-color: #004d21;
  img {
    position: absolute;
  }

  .video-test {
    position: absolute;
    top: 0;
    right: 0;
    height: 80%;
    @keyframes slideLeft {
      from {
        transform: translateX(10%);
      }
      to {
        transform: translateX(0);
      }
    }

    animation: ${fadeIn} 1.5s ease-in-out, slideLeft 1s ease-in-out;
    z-index: 5;
  }

  .intro-image {
    top: 0;
    right: 0;
    height: 80%;
    @keyframes slideLeft {
      from {
        transform: translateX(10%);
      }
      to {
        transform: translateX(0);
      }
    }

    animation: ${fadeIn} 1.5s ease-in-out, slideLeft 1s ease-in-out;
  }
  .marca {
    bottom: 0;
    left: 0;
    transform: translateX(-30%);

    height: 80%;
    animation: ${fadeInDelay} 2s ease-in-out;
  }
`;

export const VideoSection = styled.section`
  padding: 4rem 20% 6rem;
  background-color: var(--secondary-background);
  display: flex;

  justify-content: center;
  flex-direction: column;

  align-items: center;

  .video-container {
    width: 100%;
    padding: 2rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
    margin-bottom: 2rem;
  }

  video {
    width: 100%;
    height: 100%;
    border: none;
    border-radius: 12px;
    display: block;
    box-shadow: 0 0 3px 1px rgba(0, 0, 0, 0.7);
  }
`;

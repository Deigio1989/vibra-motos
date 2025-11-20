import styled from "styled-components";
import { GlobalContainer } from "../../styles/GlobalStyles";

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
    font-size: 48px;
    line-height: 1.2;
  }
`;
export const BackgroundImages = styled.div`
  position: absolute;
  z-index: -1;
  height: 100%;
  width: 100%;
  top: 0;
  img {
    position: absolute;
  }
  .intro-image {
    top: 0;
    right: 0;
    height: 80%;
  }
  .marca {
    top: 65%;
    left: 40%;
    transform: translateX(-50%);
    width: 30%;
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
    padding: 1rem;
    background: linear-gradient(to right, #7d7676ff, #3f3b3bff, #686767ff);
    border-radius: 16px;
    border: #808080 solid 2px;
    box-shadow: 4px 10px 12px rgba(0, 0, 0, 0.5);
  }

  iframe {
    width: 100%;
    aspect-ratio: 16/9;
    border: none;
    border-radius: 12px;
  }
`;

import styled from "styled-components";

export const FeedbackContainer = styled.div`
  width: 50%;
  display: flex;
  margin: 2rem auto;
  display: flex;

  position: relative;

  flex-direction: column;
  align-items: center;

  border-radius: 40px;

  background-color: var(--secondary-background);
  padding: 3rem 4rem;

  .next-button-container {
    position: absolute;
    bottom: -6.5rem;
    left: 50%;
    transform: translateX(-50%);
  }
`;

export const TitleContainer = styled.div`
  position: relative;
  .title-bg {
    height: 5.5rem;
  }
  .title-content {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    font-size: 2rem;
    font-weight: bold;
    z-index: 12;
    margin: 0;
    text-align: center;
    line-height: 1;
  }
`;

export const Content = styled.div`
  display: flex;

  position: relative;
  background-color: #c2eecb;
  color: var(--paragraph-color);
  border-radius: 40px;
  padding: 3rem 3rem;
  .feedback-text {
    font-size: 20px;
    line-height: 1.5;
  }
  .feedback-title {
    font-style: normal;
    font-weight: 700;
  }

  .semaphore {
    width: 5rem;
    object-fit: contain;
  }
`;

interface ScoreProps {
  scoreBackground?: string;
  scoreTextColor?: string;
}

export const Score = styled.div<ScoreProps>`
  color: ${(props) => props.scoreTextColor || "var(--primary-color)"};
  position: absolute;
  top: 0;
  right: 0;
  width: 10rem;
  padding: 0.9rem 2rem 0.8rem;
  text-align: center;
  line-height: 1.2;
  border-radius: 40px;
  background-color: ${(props) => props.scoreBackground || "#008300"};
  font-family: Acumin Pro Condensed;
  font-weight: 700;
  font-style: Bold Italic;
  font-size: 16px;
`;

import styled from "styled-components";
import { FramedTextTarja2 } from "../../components/FramedText";

export const AtividadeContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

export const ActivityCard = styled(FramedTextTarja2)`
  margin: 0 auto;
  width: 80%;
  border-radius: 16px;
  overflow: hidden;

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }

  &::before {
    display: none;
  }
  &::after {
    border-radius: 0 0 16px 16px;
  }

  > div {
    border-radius: 16px 16px 0 0;
    padding: 0;
  }
`;

export const InstructionHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 3rem;
  padding: 1rem 2rem;
  background-color: #96d6ac;

  .atividade-title {
    height: 100px;
  }

  .instruction-text {
    color: #49594c;
    font-family: "Acumin Pro Condensed";
    font-size: 2.1rem;
    font-style: italic;
    font-weight: 700;
    line-height: 30px; /* 83.333% */
  }
  .instruction-text-2 {
    color: #115727;
    font-family: "Acumin Pro Condensed";
    font-size: 1.5rem;
    font-style: italic;
    font-weight: 700;
    line-height: 24px; /* 100% */
  }
`;

export const GameArea = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  padding: 0 3rem;
  min-height: 360px;
`;

export const SvgCanvas = styled.svg`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
`;

export const LeftColumn = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

export const RightColumn = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  z-index: 2;
`;

export const ConnectionRow = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  min-height: 80px;

  &.right-item {
    justify-content: flex-start;
  }

  .text-content {
    flex: 1;
    display: flex;
    align-items: center;
  }

  .left-text {
    font-family: "Acumin Pro Condensed", sans-serif;
    font-size: 1.24rem;
    font-weight: 600;
    font-style: italic;
    line-height: 28px;
    color: #000;
    width: 100%;
    text-align: right;
  }

  .right-text {
    font-family: "Acumin Pro Condensed", sans-serif;
    font-size: 1.25rem;
    font-weight: 600;
    font-style: normal;
    line-height: 28px;
    color: #000;
    width: 100%;
    text-align: left;
  }

  .activity-icon {
    width: 80px;
    height: 80px;
    min-width: 80px;
    object-fit: contain;
    transform: scale(1.2);
  }
`;

interface DotProps {
  $active?: boolean;
  $connected?: boolean;
  $error?: boolean;
}

export const LeftDot = styled.div<DotProps>`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-color: ${(props) =>
    props.$connected ? "#137b1a" : props.$active ? "#56AA43" : "#115727"};
  border: ${(props) => (props.$active ? "3px solid #fff" : "none")};
  border-radius: 50%;
  cursor: ${(props) => (props.$connected ? "not-allowed" : "pointer")};
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);

  &:hover:not([style*="not-allowed"]) {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.3);
  }
`;

export const RightDot = styled.div<DotProps>`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  background-color: ${(props) =>
    props.$error
      ? "#ff0000"
      : props.$connected
      ? "#137b1a"
      : props.$active
      ? "#7bc794"
      : "#56AA43"};
  border: ${(props) =>
    props.$active && !props.$connected ? "3px solid #fff" : "none"};
  border-radius: 50%;
  cursor: ${(props) =>
    props.$connected ? "not-allowed" : props.$active ? "pointer" : "default"};
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);

  ${(props) =>
    props.$error &&
    `
    animation: errorBlink 0.5s ease;
    
    @keyframes errorBlink {
      0%, 100% {
        background-color: #56AA43;
      }
      50% {
        background-color: #ff0000;
      }
    }
  `}

  ${(props) =>
    props.$active &&
    !props.$connected &&
    !props.$error &&
    `
    animation: pulse 2s ease-in-out infinite;
    
    @keyframes pulse {
      0%, 100% {
        transform: scale(1);
      }
      50% {
        transform: scale(1.2);
      }
    }
  `}
`;

export const BottomContainer = styled.div`
  width: calc(100% - 4rem);
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const ProgressBar = styled.div<{ $completed: boolean }>`
  flex: 1;
  height: 50px;
  background-color: ${(props) => (props.$completed ? "#137b1a" : "#2d5f44")};
  border-radius: 30px;
  overflow: visible;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  position: relative;
  display: flex;
  align-items: center;
  padding: 5px;
  transition: background-color 0.5s ease;
`;

export const ProgressText = styled.span<{ $completed: boolean }>`
  color: #fff;
  text-align: center;
  font-family: "Acumin Pro Condensed";
  font-size: 1.2rem;
  font-style: italic;
  font-weight: 700;
  line-height: 30px; /* 125% */
  z-index: 2;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  white-space: nowrap;
  transition: opacity 0.5s ease;
  opacity: ${(props) => (props.$completed ? 0 : 1)};

  &.completed {
    opacity: ${(props) => (props.$completed ? 1 : 0)};
  }
`;

interface ProgressFillProps {
  $progress: number;
}

export const ProgressFill = styled.div<ProgressFillProps>`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;

  &::after {
    content: "";
    position: absolute;
    left: ${(props) => (props.$progress === 100 ? "calc(100% - 40px)" : "0")};
    top: 50%;
    transform: translateY(-50%);
    width: 40px;
    height: 40px;
    background-color: ${(props) =>
      props.$progress === 100 ? "#96d6ac" : "#fff"};
    border-radius: 50%;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    transition: left 0.8s ease, background-color 0.5s ease 0.3s;
  }
`;

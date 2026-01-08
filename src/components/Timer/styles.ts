import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--text-background-color);
  border-radius: 40px;
  width: fit-content;
  p {
    color: var(--paragraph-color);
    line-height: 1;
    padding: 0 2.5rem;
    text-align: center;
    font-size: 16px;
  }
`;

export const TimerDisplay = styled.div<{ $isCompleted?: boolean }>`
  font-size: 2rem;
  font-weight: bold;
  font-family: "ds-digib", monospace;
  color: var(--primary-color);
  background-color: ${(props) =>
    props.$isCompleted ? "var(--secondary-color)" : "var(--yellow)"};
  padding: 0.35rem;
  border-radius: 40px;

  text-align: center;
  transition: background-color 0.3s ease;
`;

export const CircularProgress = styled.div`
  position: relative;
  width: 2.7rem;
  height: 2.7rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircularProgressSvg = styled.svg`
  width: 100%;
  height: 100%;
  transform: rotate(-90deg); /* Começa no topo */
  position: absolute;
  top: 0;
  left: 0;
`;

export const CircularProgressCircleBackground = styled.circle`
  fill: none;
  stroke: rgba(255, 255, 255, 0.2);
  stroke-width: 5;
`;

export const CircularProgressCircle = styled.circle<{
  $progress: number;
  $isCompleted?: boolean;
}>`
  fill: none;
  stroke: ${(props) =>
    props.$isCompleted
      ? "var( --accent-green-secondary-grayed:)"
      : "var(--primary-color)"};
  stroke-width: 5;
  stroke-linecap: round;
  stroke-dasharray: ${2 * Math.PI * 18}; /* Circunferência do círculo (2πr) */
  stroke-dashoffset: ${(props) =>
    2 * Math.PI * 18 * (1 - props.$progress / 100)};
  transition: stroke-dashoffset 0.5s ease, stroke 0.3s ease;
`;

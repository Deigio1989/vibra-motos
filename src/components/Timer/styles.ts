import styled from "styled-components";

export const TimerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: var(--text-background-color);
  border-radius: 40px;
  min-width: 450px;
  p {
    color: var(--paragraph-color);
    line-height: 1;
    padding: 0 2.5rem;
    text-align: center;
    font-size: 16px;
  }
`;

export const TimerDisplay = styled.div<{ $isCompleted?: boolean }>`
  width: 9rem;
  font-size: 2rem;
  font-weight: bold;
  font-family: "ds-digib", monospace;
  color: var(--primary-color);
  background-color: ${(props) =>
    props.$isCompleted
      ? "var(--secondary-color)"
      : "var(--accent-green-primary)"};
  padding: 0.5rem 2rem;
  border-radius: 40px;
  min-width: 100px;
  text-align: center;
  transition: background-color 0.3s ease;
`;

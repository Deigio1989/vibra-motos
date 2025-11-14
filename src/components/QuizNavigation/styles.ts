import styled from "styled-components";

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
  width: 100%;

  .progress {
    font-size: 14px;
    color: var(--background-color);
    font-family: var(--font-family);
    font-weight: 500;
  }

  .buttons {
    display: flex;
    gap: 1rem;
  }

  .quiz-button {
    padding: 0.8rem 1.5rem;
    font-size: 16px;
    font-weight: 600;
    font-style: italic;
    font-family: var(--font-family);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease;

    &.primary {
      background-color: var(--accent-green-primary);
      color: var(--primary-color);

      &:hover {
        background-color: var(--accent-green-secondary);
        transform: translateY(-2px);
      }

      &:disabled {
        background-color: #ccc;
        cursor: not-allowed;
        transform: none;
      }
    }

    &.secondary {
      background-color: transparent;
      color: var(--background-color);
      border: 2px solid var(--background-color);

      &:hover {
        background-color: var(--background-color);
        color: var(--primary-color);
      }
    }
  }
`;

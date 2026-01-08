import styled from "styled-components";

export const QuizContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  .provisional-screen {
    color: var(--secondary-color);
  }
`;

export const QuizBackground = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;

  .progress-indicator {
    position: absolute;
    bottom: 4px;
    left: 7rem;
    font-size: 14px;
    color: var(--background-color);
    font-family: var(--font-family);
    font-weight: 500;
    z-index: 10;
  }

  .bg-image {
    background-color: var(--secondary-background);
    padding: 3rem 4rem;
    border-radius: 40px;
    position: absolute;
    width: 100%;
    min-width: 600px;
    height: auto;
    z-index: -1;
  }
  .text-container {
    min-height: 275px;
    width: 55%;
    min-width: 340px;

    .title {
      font-size: 24px;
      color: var(--background-color);
      font-weight: 700;
      margin: 1rem auto 0.7rem;
      font-family: var(--font-family);

      justify-self: center;
    }

    .question-title {
      color: var(--primary-color);
      font-style: normal;
      font-weight: 700;
      font-family: var(--font-family);
      padding: 8px 16px 6px;

      background-color: var(--accent-green-primary);
      border-radius: 50px;
    }

    .question-text {
      color: black;
      font-style: italic;
      font-family: var(--font-family);
      line-height: 1;
      margin: 1rem 0 0.7rem;
    }

    .options {
      list-style: none;
      padding: 0;
      margin: 0;

      li {
        color: #000;
        font-weight: 300;
        font-style: normal;
        font-family: var(--font-family);
        border: 1px solid transparent;
        border-radius: 50px;
        padding: 4px 12px 2px;
        margin: 2px 0;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        padding-left: 25px;

        .feedback-icon {
          width: 20px;
          height: 20px;
          position: absolute;
          left: -2em;
          top: 50%;
          transform: translateY(-50%);
        }

        &:hover {
          border: 1px solid var(--accent-green-primary);
        }

        &.selected {
          background-color: var(--primary-color);
          border: 1px solid var(--accent-green-primary);
        }

        /* Estados após responder */
        &.correct {
          border: 1px solid #22c55e !important; /* Verde */
          background-color: #22c55e;
          color: #fff !important;
        }

        &.incorrect {
          background-color: #ef4444 !important; /* Vermelho claro */
          border: 1px solid #ef4444 !important; /* Vermelho */
          color: #fff !important;
        }

        /* Bullet que fica da cor accent-primary quando selecionado */
        &::before {
          content: "●";
          position: absolute;
          left: 8px;
          color: ${(props) =>
            props.className?.includes("selected") ? "#000" : "#838181ff"};
        }

        &.selected::before {
          color: var(--accent-green-primary);
        }
      }
    }
  }

  .quiz-button {
    margin-top: 3.6rem;
    position: relative;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-style: italic;
    color: var(--primary-color);
    border: none;
    font-family: var(--font-family);
    width: 30%;
    padding: 8px 16px 6px;
    line-height: 1;
    background-color: var(--accent-green-primary);
    border-radius: 50px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover:not(:disabled) {
      transform: translateY(-2px);
    }

    &:disabled {
      background-color: var(--disabled-color);
      cursor: not-allowed;
    }

    .button-text {
      margin: 0;
    }

    .seta {
      position: absolute;
      right: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 16px;
      height: 16px;
    }
  }

  .score {
    text-align: center;
    padding: 2rem;

    p {
      font-size: 18px;
      color: var(--background-color);
      font-family: var(--font-family);
      margin: 1rem 0;

      &:first-child {
        font-size: 24px;
        font-weight: 700;
        color: var(--accent-green-primary);
      }

      &:last-child {
        font-weight: 600;
        font-style: italic;
      }
    }
  }
`;

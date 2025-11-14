import styled from "styled-components";

export const QuestionContainer = styled.div`
  .question-title {
    color: var(--primary-color);
    font-style: normal;
    font-weight: 700;
    font-family: var(--font-family);
    padding: 8px 16px 6px;
    background-color: var(--accent-green-primary);
    border-radius: 50px;
    display: inline-block;
    margin-bottom: 1rem;
  }

  .question-text {
    color: black;
    font-style: italic;
    font-family: var(--font-family);
    line-height: 1.4;
    margin: 1rem 0 1.5rem;
    font-size: 16px;
  }

  .options {
    list-style: none;
    padding: 0;
    margin: 0;

    li {
      font-size: 16px;
      color: black;
      font-weight: 300;
      font-style: normal;
      font-family: var(--font-family);
      margin: 0.8rem 0;
      padding: 0.8rem 1rem;
      cursor: pointer;
      border-radius: 8px;
      transition: all 0.3s ease;
      position: relative;
      padding-left: 40px;

      &:nth-child(1)::before {
        content: "a) ";
      }
      &:nth-child(2)::before {
        content: "b) ";
      }
      &:nth-child(3)::before {
        content: "c) ";
      }
      &:nth-child(4)::before {
        content: "d) ";
      }

      &::before {
        position: absolute;
        left: 15px;
        font-weight: 400;
        color: var(--accent-green-primary);
      }

      &:hover {
        background-color: rgba(71, 173, 77, 0.1);
        border-left: 4px solid var(--accent-green-primary);
      }

      &.selected {
        background-color: var(--accent-green-primary);
        color: var(--primary-color);
        border-left: 4px solid var(--accent-green-secondary);

        &::before {
          color: var(--primary-color);
        }
      }
    }
  }
`;

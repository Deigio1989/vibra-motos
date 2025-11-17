import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
  }

  .image-column {
    padding: 0 5rem;
    display: flex;
    flex-direction: column;
    gap: -10px;
    flex: 2;
  }
`;

export const Text = styled.div`
  margin-left: 1rem;
  margin-right: 5rem;
  font-size: 16px;
  font-family: var(--font-family);
  width: 65%;
`;

export const Title = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-family);
  margin-left: 5rem;

  .number {
    font-size: 10rem;
    line-height: 1;
    color: var(--secondary-background);
    margin: 0;
  }

  .title-text {
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 {
      font-size: 40px;
      font-weight: 700;
      line-height: 0.7;
      color: var(--primary-color);
      margin: 0;
    }

    span {
      font-size: 64px;
      font-weight: 700;
      line-height: 0.7;
      color: var(--secondary-color);
      margin: 0;
    }
  }
`;

export const Paragraphs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--primary-color);
    margin: 0;

    .paragraph-title {
      font-weight: 700;
      font-style: normal; /* Remove italic apenas dos títulos */
      color: var(--secondary-color);
    }
  }
`;

export const ContentImage = styled.img`
  height: 200px;
`;

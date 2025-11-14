import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  display: flex;

  .content-image {
    width: 55%;
    object-fit: contain;
  }
`;

export const Text = styled.div`
  margin-left: 5rem;
  margin-right: 1rem;
  font-size: 16px;
  font-family: var(--font-family);
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 2rem;
  font-family: var(--font-family);

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
      font-size: 58px;
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
  }
`;

export const ContentImage = styled.img`
  /* Estilos para a imagem do conteúdo */
  max-width: 100%;
  height: auto;
`;

import styled from "styled-components";

export const ContentWrapper = styled.div`
  margin-top: 3rem;
  margin: 0 5rem;
  display: flex;
  flex-direction: column;
  .flex {
    display: flex;
    margin-bottom: 2rem;
    gap: 1rem; /* Espaço entre os elementos */

    /* Força o tamanho da imagem */
  }
`;

export const Text = styled.div`
  width: 75%;
  margin: 0 auto;
  font-size: 16px;
  font-family: var(--font-family);
  .chamada,
  .conclusao {
    font-size: 16px;
    line-height: 1.6;
    color: var(--primary-color);
    text-align: justify;
    margin-bottom: 2rem;
    width: 100%;
  }
  .conclusao {
    margin-bottom: 0;
    margin-top: 2.5rem;
  }
  b {
    display: block; /* Torna o elemento block para respeitar margin vertical */
    font-size: 20px;
    color: var(--secondary-color);
    margin-bottom: 1rem;
  }
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

  ul {
    list-style: none; /* Remove bullets padrão para customizar */
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  li {
    font-size: 16px;
    line-height: 1.6;
    color: var(--primary-color);
    text-align: justify;
    margin: 0;
    position: relative;
    padding-left: 1.2rem; /* Espaço para bullet customizado */

    /* Bullet customizado */
    &::before {
      content: "•";
      color: var(--primary-color);
      font-size: 20px;
      position: absolute;
      left: 0;
      top: -0.2rem;
    }

    .bullet-title {
      font-weight: 700;
      font-style: normal; /* Remove italic apenas dos títulos */
      color: var(--primary-color); /* Títulos em verde */
    }
  }

  p {
    font-size: 16px;
    line-height: 1.6;
    color: var(--primary-color);
    text-align: justify;
    margin: 0;

    .paragraph-title {
      font-weight: 700;
      font-style: normal; /* Remove italic apenas dos títulos */
      color: var(--secondary-color); /* Títulos em verde */
    }

    &.conclusion {
      margin-top: 2rem; /* Espaçamento extra para separar da lista */
      padding-top: 1rem;
    }
  }
`;

export const ContentImage = styled.img`
  height: auto;
  width: 100%;
  object-fit: contain;
  padding: 3rem;
  padding-top: 0rem;
`;

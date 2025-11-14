import styled from "styled-components";
import { GlobalContainer } from "../../styles/GlobalStyles";

export const ParadaContainer = styled.div`
  margin-top: 7rem;
  margin-bottom: 7rem;
  display: flex;
  flex-direction: column;
  .content {
    margin-top: 3rem;
    display: flex;
    .content-image {
      width: 55%;
      object-fit: contain;
    }
  }
  .navigation {
    display: flex;
    justify-content: space-between;

    .next-button,
    .back-button {
      margin-top: 4rem;

      width: 10rem;
      cursor: pointer;
    }
  }
`;

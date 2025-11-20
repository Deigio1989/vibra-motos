import styled from "styled-components";

export const PitstopTitleStyled = styled.div`
  position: relative;
  height: 3rem;
  width: 100%;
  font-family: var(--font-family);

  .title {
    position: absolute;
    left: 8rem;
    top: 50%;
    padding-top: 0.5rem;
    line-height: 1;
    transform: translateY(-50%);
    font-size: 34px;
  }

  .tarja-paradas {
    height: 3rem;
    width: 100%;
  }

  .tarja-icon {
    position: absolute;
    left: 2rem;
    bottom: 0;
    height: 8.9rem;
  }
`;

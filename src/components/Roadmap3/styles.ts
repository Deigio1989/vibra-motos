import styled, { keyframes } from "styled-components";

export const fadeInDelay = keyframes`
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
export const Container = styled.div`
  position: relative;
  margin-top: 1rem;
  margin: 0 auto;
  animation: ${fadeInDelay} 1.55s ease-in-out forwards;
  .path {
    width: 1100px;
    margin: 14.5rem 0 11rem;
  }
`;

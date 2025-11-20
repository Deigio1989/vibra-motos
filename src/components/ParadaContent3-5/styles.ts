import styled from "styled-components";
import {
  BaseContentWrapper,
  BaseText,
  BaseTitle,
  BaseParagraphs,
  ContentImage as BaseContent,
} from "../../styles/ParadaContentStyles";
import { FramedTextTarja1 } from "../FramedText";

// Usando os componentes base - resultado visual idêntico
export const ContentWrapper = styled(BaseContentWrapper)`
  flex-direction: column;
  .flex {
    display: flex;
    padding: 0;
    justify-content: center;
  }
`;
export const Text = styled(FramedTextTarja1)`
  margin-left: 5rem;
`;
export const Title = styled(BaseTitle)`
  margin-left: 5rem;
  margin-bottom: 0;
`;
export const Paragraphs = BaseParagraphs;

// ContentImage já é idêntico ao base
export const ContentImage = styled(BaseContent)`
  object-fit: contain;
`;

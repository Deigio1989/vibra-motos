import styled from "styled-components";
import {
  BaseLayout,
  BaseTitle,
  BaseParagraphs,
} from "../../styles/ModularParadaStyles";
import { FramedTextTarja1 } from "../FramedText";
import ContentImage from "../ContentImage";

// Layout horizontal básico com flex personalizado
export const ContentWrapper = styled(BaseLayout)`
  .flex {
    display: flex;
    flex-direction: column;
  }
`;
export const Text = styled(FramedTextTarja1)`
  margin-right: 0;
  margin-left: 5rem;
`;
export const Title = styled(BaseTitle)`
  margin-left: 5rem;
  margin-bottom: 0;
`;
export const Paragraphs = BaseParagraphs;

// ContentImage já é idêntico ao base
export { ContentImage };

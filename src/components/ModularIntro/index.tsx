import React from "react";
import styled from "styled-components";

// Styled Components
const IntroContainer = styled.div`
  margin: 3rem 5rem;
  display: flex;

  @keyframes fadeInDelay {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  animation: fadeInDelay 1.55s ease-in-out forwards;

  flex-direction: column;
  gap: 4rem;
`;

const SectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 1rem;

  h2 {
    font-size: 40px;
    font-weight: 700;
    line-height: 0.7;
    color: var(--primary-color);
    margin: 0;
    display: inline;
  }

  span {
    font-size: 58px;
    font-weight: 700;
    line-height: 0.7;
    color: var(--secondary-color);
    margin: 0;
    display: inline;
  }

  .title-line {
    display: block;
  }
`;

const ParagraphsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  p {
    font-size: 20px;
    line-height: 1.6;
    color: var(--primary-color);
    margin: 0;
    text-align: justify;
  }
`;

// Interfaces
export interface IntroSection {
  title: string;
  paragraphs: string[];
}

interface ModularIntroProps {
  sections: IntroSection[];
}

// Função auxiliar para processar títulos
const renderTitle = (title: string) => {
  // Dividir por '/' para títulos separados
  const parts = title.split("/").map((part) => part.trim());

  return (
    <TitleContainer>
      {parts.map((part, index) => {
        // Processar texto com ** para spans verdes
        if (part.includes("*") && part.includes("*")) {
          const beforeSpan = part.split("*")[0];
          const spanText = part.split("*")[1];
          const afterSpan = part.split("*")[2] || "";

          return (
            <div key={index} className="title-line">
              {beforeSpan && <h2>{beforeSpan}</h2>}
              <span>{spanText}</span>
              {afterSpan && <h2>{afterSpan}</h2>}
            </div>
          );
        } else {
          return (
            <h2 key={index} className="title-line">
              {part}
            </h2>
          );
        }
      })}
    </TitleContainer>
  );
};

// Função auxiliar para processar parágrafos com spans
const renderParagraph = (text: string, index: number) => {
  // Processar texto com *texto* para spans verdes
  const processedText = text.split("*").map((part, partIndex) => {
    if (partIndex % 2 === 1) {
      // Texto dentro dos asteriscos - aplicar span verde
      return (
        <span
          key={partIndex}
          style={{ color: "var(--secondary-color)", fontWeight: "bold" }}
        >
          {part}
        </span>
      );
    }
    return part;
  });

  return <p key={index}>{processedText}</p>;
};

const ModularIntro: React.FC<ModularIntroProps> = ({ sections }) => {
  return (
    <IntroContainer>
      {sections.map((section, sectionIndex) => (
        <SectionContainer key={sectionIndex}>
          {renderTitle(section.title)}
          <ParagraphsContainer>
            {section.paragraphs.map((paragraph, paragraphIndex) =>
              renderParagraph(paragraph, paragraphIndex)
            )}
          </ParagraphsContainer>
        </SectionContainer>
      ))}
    </IntroContainer>
  );
};

export default ModularIntro;

import React from "react";
import styled from "styled-components";

// Styled components para os diferentes tipos de parágrafos
const StyledParagraph = styled.p`
  margin: 1rem 0;
  line-height: 1.5;

  .paragraph-title {
    color: var(--paragraph-color);
    font-weight: bold;
  }
`;

const StyledListItem = styled.li`
  text-align: justify;
  margin: 0.5rem 0;
  line-height: 1.5;

  .bullet-title {
    color: var(--paragraph-color);
    font-weight: bold;
  }
`;

const StyledList = styled.ul`
  padding-left: 1.5rem;
  margin: 1rem 0;
`;

// Interfaces
interface BaseParagraphProps {
  children: React.ReactNode;
  className?: string;
}

interface SmartParagraphProps {
  text: string;
  className?: string;
}

interface SmartListProps {
  items: string[];
  className?: string;
}

// 1. Componente para Parágrafo Normal
export const NormalParagraph: React.FC<BaseParagraphProps> = ({
  children,
  className,
}) => {
  return <StyledParagraph className={className}>{children}</StyledParagraph>;
};

// 2. Componente para Parágrafo com Título Bold + :
export const TitledParagraph: React.FC<SmartParagraphProps> = ({
  text,
  className,
}) => {
  // Detectar se o texto começa com um título seguido de ":"
  const titleMatch = text.match(/^([^:]+:)\s*(.*)$/);

  if (titleMatch) {
    const [, title, content] = titleMatch;
    return (
      <StyledParagraph className={className}>
        <span className="paragraph-title">{title}</span> {content}
      </StyledParagraph>
    );
  }

  // Se não tiver título, renderizar como parágrafo normal
  return <StyledParagraph className={className}>{text}</StyledParagraph>;
};

// 3. Componente para Lista com Títulos Bold + :
export const TitledList: React.FC<SmartListProps> = ({ items, className }) => {
  return (
    <StyledList className={className}>
      {items.map((item, index) => {
        const titleMatch = item.match(/^([^:]+:)\s*(.*)$/);

        if (titleMatch) {
          const [, title, content] = titleMatch;
          return (
            <StyledListItem key={index}>
              <span className="bullet-title">{title}</span> {content}
            </StyledListItem>
          );
        }

        return <StyledListItem key={index}>{item}</StyledListItem>;
      })}
    </StyledList>
  );
};

// 4. Componente Smart que detecta automaticamente o tipo
export const SmartParagraphs: React.FC<{
  texts: string[];
  className?: string;
}> = ({ texts, className }) => {
  return (
    <div className={className}>
      {texts.map((text, index) => (
        <TitledParagraph key={index} text={text} />
      ))}
    </div>
  );
};

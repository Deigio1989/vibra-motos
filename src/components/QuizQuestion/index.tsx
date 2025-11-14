import React from "react";
import { QuizQuestion as QuizQuestionType } from "../../types/quiz";
import { QuestionContainer } from "./styles";

interface QuizQuestionProps {
  question: QuizQuestionType;
  selectedAnswer?: string;
  onAnswerSelect: (answerId: string) => void;
}

const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
}) => {
  return (
    <QuestionContainer>
      <span className="question-title">Pergunta {question.id}</span>
      <p className="question-text">{question.question}</p>

      <ul className="options">
        {question.options.map((option) => (
          <li
            key={option.id}
            className={selectedAnswer === option.id ? "selected" : ""}
            onClick={() => onAnswerSelect(option.id)}
          >
            {option.text}
          </li>
        ))}
      </ul>
    </QuestionContainer>
  );
};

export default QuizQuestion;

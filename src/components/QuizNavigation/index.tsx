import React from "react";
import { NavigationContainer } from "./styles";

interface QuizNavigationProps {
  currentQuestion: number;
  totalQuestions: number;
  hasSelectedAnswer: boolean;
  canGoPrevious: boolean;
  onNext: () => void;
  onPrevious: () => void;
  isLastQuestion: boolean;
}

const QuizNavigation: React.FC<QuizNavigationProps> = ({
  currentQuestion,
  totalQuestions,
  hasSelectedAnswer,
  canGoPrevious,
  onNext,
  onPrevious,
  isLastQuestion,
}) => {
  return (
    <NavigationContainer>
      <div className="progress">
        <span>
          {currentQuestion + 1} de {totalQuestions}
        </span>
      </div>

      <div className="buttons">
        {canGoPrevious && (
          <button className="quiz-button secondary" onClick={onPrevious}>
            Anterior
          </button>
        )}

        <button
          className="quiz-button primary"
          onClick={onNext}
          disabled={!hasSelectedAnswer}
        >
          {isLastQuestion ? "Finalizar" : "Próxima"}
        </button>
      </div>
    </NavigationContainer>
  );
};

export default QuizNavigation;

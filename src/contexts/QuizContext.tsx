import React, { createContext, useContext, useState, ReactNode } from "react";
import { QuizData, QuizQuestion } from "../types/quiz";
import { useScorm } from "../hooks/useScorm";

interface QuizContextData {
  currentQuestionIndex: number;
  selectedAnswers: Record<number, string>;
  quizData: QuizData | null;
  isCompleted: boolean;
  score: number;

  setQuizData: (data: QuizData) => void;
  selectAnswer: (questionId: number, answerId: string) => void;
  nextQuestion: () => void;
  previousQuestion: () => void;
  resetQuiz: () => void;
  calculateScore: () => number;
}

const QuizContext = createContext<QuizContextData>({} as QuizContextData);

interface QuizProviderProps {
  children: ReactNode;
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [quizData, setQuizDataState] = useState<QuizData | null>(null);
  const [isCompleted, setIsCompleted] = useState(false);
  const [score, setScore] = useState(0);

  const { completeLesson } = useScorm();

  const setQuizData = (data: QuizData) => {
    setQuizDataState(data);
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setScore(0);
  };

  const selectAnswer = (questionId: number, answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const nextQuestion = () => {
    if (!quizData) return;

    if (currentQuestionIndex < quizData.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz completo
      const finalScore = calculateScore();
      setScore(finalScore);
      setIsCompleted(true);

      // Reporta para SCORM
      completeLesson(finalScore, finalScore >= 70);
    }
  };

  const previousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex((prev) => prev - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setIsCompleted(false);
    setScore(0);
  };

  const calculateScore = () => {
    if (!quizData) return 0;

    let correct = 0;
    quizData.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });

    return Math.round((correct / quizData.questions.length) * 100);
  };

  return (
    <QuizContext.Provider
      value={{
        currentQuestionIndex,
        selectedAnswers,
        quizData,
        isCompleted,
        score,
        setQuizData,
        selectAnswer,
        nextQuestion,
        previousQuestion,
        resetQuiz,
        calculateScore,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export const useQuiz = () => {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
};

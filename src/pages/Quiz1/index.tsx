import React, { useState } from "react";
import { QuizContainer, QuizBackground } from "./styles";
import quizBackground from "../../assets/quiz-background.png";
import seta from "../../assets/seta.png";
import { QUIZ1_DATA } from "../../data/quiz1Data";
import { useScorm } from "../../hooks/useScorm";

const Quiz1: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<number, string>
  >({});
  const [isCompleted, setIsCompleted] = useState(false);

  // Hook SCORM para comunicação com LMS
  const { completeLesson } = useScorm();

  // Função para calcular pontuação
  const calculateScore = () => {
    let correct = 0;
    QUIZ1_DATA.questions.forEach((question) => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / QUIZ1_DATA.questions.length) * 100);
  };

  // Se o quiz foi concluído, mostrar resultado
  if (isCompleted) {
    const finalScore = calculateScore();
    const passed = finalScore >= 70;

    return (
      <div>
        <QuizContainer>
          <QuizBackground>
            <img
              className="bg-image"
              src={quizBackground}
              alt="Quiz Background"
            />
            <div className="text-container">
              <h3 className="title">Quiz Concluído!</h3>
              <div className="score-result">
                <p className="score-text">Sua pontuação: {finalScore}%</p>
                <p className="result-text">
                  {passed
                    ? "🎉 Parabéns! Você foi aprovado!"
                    : "😔 Você não atingiu a pontuação mínima (70%)"}
                </p>
                {!passed && (
                  <button
                    className="quiz-button retry"
                    onClick={() => {
                      setCurrentQuestionIndex(0);
                      setSelectedAnswers({});
                      setIsCompleted(false);
                    }}
                  >
                    <p className="button-text">TENTAR NOVAMENTE</p>
                  </button>
                )}
              </div>
            </div>
          </QuizBackground>
        </QuizContainer>
      </div>
    );
  }

  const currentQuestion = QUIZ1_DATA.questions[currentQuestionIndex];
  const selectedAnswer = selectedAnswers[currentQuestion.id];

  const handleAnswerSelect = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestionIndex < QUIZ1_DATA.questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    } else {
      // Quiz finalizado - calcular pontuação e enviar para SCORM
      const finalScore = calculateScore();
      const passed = finalScore >= 70; // Critério de aprovação: 70%

      // Reportar para SCORM/LMS
      completeLesson(finalScore, passed);

      setIsCompleted(true);

      console.log(
        `Quiz finalizado! Pontuação: ${finalScore}% - ${
          passed ? "APROVADO" : "REPROVADO"
        }`
      );
    }
  };

  return (
    <div>
      <QuizContainer>
        <QuizBackground>
          <img
            className="bg-image"
            src={quizBackground}
            alt="Quiz Background"
          />

          {/* Indicador de progresso em posição absoluta */}
          <div className="progress-indicator">
            {currentQuestionIndex + 1} de {QUIZ1_DATA.questions.length}
          </div>

          <div className="text-container">
            <h3 className="title">{QUIZ1_DATA.title}</h3>
            <span className="question-title">
              Pergunta {currentQuestion.id}
            </span>
            <p className="question-text">{currentQuestion.question}</p>

            <ul className="options">
              {currentQuestion.options.map((option) => (
                <li
                  key={option.id}
                  className={selectedAnswer === option.id ? "selected" : ""}
                  onClick={() => handleAnswerSelect(option.id)}
                >
                  {option.id}) {option.text}
                </li>
              ))}
            </ul>
          </div>

          <button
            className="quiz-button"
            onClick={handleNext}
            disabled={!selectedAnswer}
          >
            <p className="button-text">
              {currentQuestionIndex === QUIZ1_DATA.questions.length - 1
                ? "FINALIZAR"
                : "PRÓXIMA"}
            </p>
            <img className="seta" src={seta} alt="Seta" />
          </button>
        </QuizBackground>
      </QuizContainer>
    </div>
  );
};

export default Quiz1;

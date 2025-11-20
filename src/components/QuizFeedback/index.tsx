import React from "react";
import { NormalParagraph } from "../SmartParagraphs";
import sinalVermelho from "../../assets/sinal-vermelho.png";
import sinalVerde from "../../assets/sinal-verde.png";
import SinalAmarelo from "../../assets/sinal-amarelo.png";
import quizTitle from "../../assets/quiz-title.png";
import { FeedbackContainer, TitleContainer, Content, Score } from "./styles";

export type QuizFeedbackType = "all-correct" | "some-correct" | "all-wrong";

interface QuizFeedbackProps {
  type?: QuizFeedbackType; // Opcional, será determinado automaticamente se não fornecido
  score: {
    correct: number;
    total: number;
    percentage: number;
  };
  nextButton?: React.ReactNode; // Botão opcional para navegação
}

// Função para determinar o tipo automaticamente baseado no score
const determineType = (score: QuizFeedbackProps["score"]): QuizFeedbackType => {
  if (score.correct === score.total) {
    return "all-correct";
  } else if (score.correct === 0) {
    return "all-wrong";
  } else {
    return "some-correct";
  }
};

const QuizFeedback: React.FC<QuizFeedbackProps> = ({
  type,
  score,
  nextButton,
}) => {
  // Determina o tipo automaticamente se não foi fornecido
  const feedbackType = type || determineType(score);
  // Configuração dos dados baseado no tipo
  const getFeedbackData = () => {
    switch (feedbackType) {
      case "all-correct":
        return {
          title: "Mandou bem!",
          text: "Você domina o contexto das motos no Brasil e conhece os principais riscos da estrada. Conhecimento assim salva vidas. Bora para a próxima parada?",
          semaphore: sinalVerde,
          scoreBackground: "var(--secondary-color)",
          scoreTextColor: "#fff",
        };
      case "some-correct":
        return {
          title: "Acertou algumas!",
          text: "Está no caminho certo, mas ainda dá para afinar esse conhecimento. Revise os pontos que ficaram para trás e siga em frente com mais atenção. A próxima etapa te espera!",
          semaphore: SinalAmarelo,
          scoreBackground: "#FFC300",
          scoreTextColor: "var(--paragraph-color)",
        };
      case "all-wrong":
        return {
          title: "Errou todas!",
          text: "Opa, parece que essa parada precisa de mais atenção! Que tal revisar o conteúdo com calma antes de seguir? O conhecimento aqui pode fazer toda diferença lá na pista.",
          semaphore: sinalVermelho,
          scoreBackground: "#FF0000",
          scoreTextColor: "var(--primary-color)",
        };
      default:
        return {
          title: "Mandou bem!",
          text: "Você domina o contexto das motos no Brasil e conhece os principais riscos da estrada. Conhecimento assim salva vidas. Bora para a próxima parada?",
          semaphore: sinalVerde,
          scoreBackground: "var(--secondary-color)",
          scoreTextColor: "#fff",
        };
    }
  };

  const feedbackData = getFeedbackData();

  return (
    <FeedbackContainer>
      <TitleContainer>
        <img className="title-bg" src={quizTitle} />
        <h2 className="title-content">RESULTADO</h2>
      </TitleContainer>
      <Content>
        <div className="text">
          <h2 className="feedback-title">{feedbackData.title}</h2>
          <p className="feedback-text">{feedbackData.text}</p>
        </div>

        <Score
          scoreBackground={feedbackData.scoreBackground}
          scoreTextColor={feedbackData.scoreTextColor}
        >
          {score.correct}/{score.total} acertos
        </Score>
        <img className="semaphore" src={feedbackData.semaphore} />
      </Content>
      {nextButton && <div className="next-button-container">{nextButton}</div>}
    </FeedbackContainer>
  );
};

export default QuizFeedback;

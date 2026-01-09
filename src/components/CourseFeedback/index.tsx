import React from "react";
import sinalVermelho from "../../assets/sinal-vermelho.png";
import sinalVerde from "../../assets/sinal-verde.png";
import SinalAmarelo from "../../assets/sinal-amarelo.png";
import quizTitle from "../../assets/quiz-title.png";
import {
  FeedbackContainer,
  TitleContainer,
  Content,
  Score,
} from "../QuizFeedback/styles";

export type CourseFeedbackType =
  | "high-performance"
  | "medium-performance"
  | "low-performance";

interface CourseFeedbackProps {
  type?: CourseFeedbackType; // Opcional, será determinado automaticamente se não fornecido
  totalScore: {
    correct: number;
    total: number;
    percentage: number;
  };
  nextButton?: React.ReactNode; // Botão para avançar (usado em high/medium performance)
  restartButton?: React.ReactNode; // Botão para reiniciar (usado em low performance)
}

// Função para determinar o tipo automaticamente baseado no score total
const determineType = (
  totalScore: CourseFeedbackProps["totalScore"]
): CourseFeedbackType => {
  const { correct } = totalScore;

  if (correct >= 8) {
    return "high-performance";
  } else if (correct >= 6) {
    return "medium-performance";
  } else {
    return "low-performance";
  }
};

const CourseFeedback: React.FC<CourseFeedbackProps> = ({
  type,
  totalScore,
  nextButton,
  restartButton,
}) => {
  // Determina o tipo automaticamente se não foi fornecido
  const feedbackType = type || determineType(totalScore);

  // Configuração dos dados baseado no tipo
  const getFeedbackData = () => {
    switch (feedbackType) {
      case "high-performance":
        return {
          title: "Desempenho Alto!",
          text: "Parabéns, piloto! Você mostrou que leva a sério tanto a liberdade das duas rodas quanto a responsabilidade que vem com ela. Conhecimento assim protege você e quem está ao seu redor. Agora é colocar em prática e rodar com segurança!",
          semaphore: sinalVerde,
          scoreBackground: "var(--secondary-color)",
          scoreTextColor: "#fff",
        };
      case "medium-performance":
        return {
          title: "Desempenho Médio!",
          text: 'Passou, mas foi no limite! Você absorveu o essencial, mas alguns pontos importantes ficaram para trás. Vale a pena revisar o material para garantir que, na prática, você esteja realmente preparado. Segurança não aceita "mais ou menos".',
          semaphore: SinalAmarelo,
          scoreBackground: "#FFC300",
          scoreTextColor: "var(--paragraph-color)",
        };
      case "low-performance":
        return {
          title: "Desempenho Baixo!",
          text: "Infelizmente você não atingiu o mínimo necessário desta vez. Mas calma: isso não é sobre passar ou reprovar, é sobre estar preparado para preservar sua vida. Recomendamos que você refaça o treinamento desde o início, com atenção aos detalhes. Cada informação aqui pode fazer a diferença lá na pista.",
          semaphore: sinalVermelho,
          scoreBackground: "#FF0000",
          scoreTextColor: "var(--primary-color)",
        };
      default:
        return {
          title: "Desempenho Alto!",
          text: "Parabéns, piloto! Você mostrou que leva a sério tanto a liberdade das duas rodas quanto a responsabilidade que vem com ela. Conhecimento assim protege você e quem está ao seu redor. Agora é colocar em prática e rodar com segurança!",
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
        <h2 className="title-content">FINAL</h2>
      </TitleContainer>
      <Content>
        <div className="text">
          <h2 className="feedback-title">{feedbackData.title}</h2>
          <p className="feedback-text">{feedbackData.text}</p>
        </div>

        <Score
          $scoreBackground={feedbackData.scoreBackground}
          $scoreTextColor={feedbackData.scoreTextColor}
        >
          {totalScore.correct}/{totalScore.total} acertos
        </Score>
        <img className="semaphore" src={feedbackData.semaphore} />
      </Content>
      {feedbackType === "low-performance" && restartButton && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {restartButton}
        </div>
      )}
      {feedbackType !== "low-performance" && nextButton && (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          {nextButton}
        </div>
      )}
    </FeedbackContainer>
  );
};

export default CourseFeedback;

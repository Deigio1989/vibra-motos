import React from "react";
import { useContentTimer } from "../../hooks/useContentTimer";
import * as S from "./styles";

interface TimerProps {
  contentId: string;
  duration?: number; // Duração em segundos (padrão: 60)
}

const Timer: React.FC<TimerProps> = ({ contentId, duration = 60 }) => {
  const { formattedTimeRemaining, isCompleted } = useContentTimer(
    contentId,
    duration
  );

  return (
    <S.TimerContainer>
      <p>
        {isCompleted
          ? "Conteúdo concluído! Você pode avançar."
          : "Você tem 1 minuto para concluir este conteúdo."}
        <br />
        {!isCompleted && "Clique em avançar ao final da contagem."}
      </p>
      <S.TimerDisplay $isCompleted={isCompleted}>
        {formattedTimeRemaining}
      </S.TimerDisplay>
    </S.TimerContainer>
  );
};

export default Timer;

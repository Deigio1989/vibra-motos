import { useEffect, useRef } from "react";
import { useTimerStore } from "../store/timerStore";
import { useContentProgress } from "./useContentProgress";
import { DEFAULT_TIMER_DURATION } from "../constants/timer";

/**
 * Hook que gerencia o timer de um content específico
 * @param contentId - ID único do content (ex: "parada1-content1")
 * @param timerDuration - Duração em segundos (padrão definido em constants/timer.ts)
 */
export const useContentTimer = (
  contentId: string,
  timerDuration: number = DEFAULT_TIMER_DURATION
) => {
  const currentContentTimer = useTimerStore(
    (state) => state.currentContentTimer
  );
  const canAdvanceCurrentContent = useTimerStore(
    (state) => state.canAdvanceCurrentContent
  );
  const isContentCompleted = useTimerStore((state) => state.isContentCompleted);
  const startTimer = useTimerStore((state) => state.startTimer);
  const updateTimer = useTimerStore((state) => state.updateTimer);

  const { completeContent } = useContentProgress();
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Iniciar timer quando o contentId muda
  useEffect(() => {
    // Limpa intervalo anterior se existir
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Inicia o timer com a duração específica
    startTimer(contentId, timerDuration);

    // Se já estava completado, não precisa contar
    if (isContentCompleted(contentId)) {
      return;
    }

    // Inicia a contagem de 1 em 1 segundo
    let seconds = 0;
    intervalRef.current = setInterval(() => {
      seconds++;
      updateTimer(seconds, timerDuration);

      // Ao completar o tempo, marca como completado
      if (seconds >= timerDuration) {
        completeContent(contentId);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 1000);

    // Cleanup ao desmontar ou quando contentId mudar
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentId, timerDuration]);

  // Tempo restante
  const timeRemaining = Math.max(0, timerDuration - currentContentTimer);

  // Progresso percentual (0-100)
  const progressPercentage = Math.min(
    100,
    (currentContentTimer / timerDuration) * 100
  );

  return {
    currentTime: currentContentTimer,
    timeRemaining,
    canAdvance: canAdvanceCurrentContent,
    progressPercentage,
    isCompleted: isContentCompleted(contentId),
  };
};

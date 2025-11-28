import { useEffect, useRef } from "react";
import { useTimerStore } from "../store/timerStore";
import { useContentProgress } from "./useContentProgress";

/**
 * Hook que gerencia o timer de um content específico
 * @param contentId - ID único do content (ex: "parada1-content1")
 * @param timerDuration - Duração em segundos (padrão: 60s)
 */
export const useContentTimer = (
  contentId: string,
  timerDuration: number = 60
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
    console.log(`[useContentTimer] Iniciando timer para: ${contentId}`);

    // Limpa intervalo anterior se existir
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    // Inicia o timer (já verifica se está completado internamente)
    startTimer(contentId);

    // Se já estava completado, não precisa contar
    if (isContentCompleted(contentId)) {
      console.log(`[useContentTimer] Content ${contentId} já completado`);
      return;
    }

    // Inicia a contagem de 1 em 1 segundo
    let seconds = 0;
    intervalRef.current = setInterval(() => {
      seconds++;
      console.log(`[useContentTimer] ${contentId}: ${seconds}s`);
      updateTimer(seconds);

      // Ao completar o tempo, marca como completado
      if (seconds >= timerDuration) {
        console.log(`[useContentTimer] Timer completado para ${contentId}`);
        completeContent(contentId);
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
      }
    }, 1000);

    // Cleanup ao desmontar ou quando contentId mudar
    return () => {
      console.log(`[useContentTimer] Cleanup para ${contentId}`);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [contentId, timerDuration]);

  // Formatar tempo para exibição (MM:SS)
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  // Tempo restante
  const timeRemaining = Math.max(0, timerDuration - currentContentTimer);

  // Progresso em porcentagem
  const progressPercentage = Math.min(
    100,
    (currentContentTimer / timerDuration) * 100
  );

  return {
    currentTime: currentContentTimer,
    timeRemaining,
    formattedTime: formatTime(currentContentTimer),
    formattedTimeRemaining: formatTime(timeRemaining),
    canAdvance: canAdvanceCurrentContent,
    progressPercentage,
    isCompleted: isContentCompleted(contentId),
  };
};

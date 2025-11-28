import { useEffect } from "react";
import { useTimerStore } from "../store/timerStore";

// Funções diretas para SCORM (simuladas por enquanto)
const scormAPI = {
  getSuspendData: (): string | null => {
    try {
      // window.API?.LMSGetValue('cmi.suspend_data') || null;
      return null; // Retorna null por enquanto (modo simulação)
    } catch (error) {
      console.warn("Erro ao acessar SCORM getSuspendData:", error);
      return null;
    }
  },

  setSuspendData: (data: string) => {
    try {
      console.log("SCORM: Salvando suspend_data:", data);
      // window.API?.LMSSetValue('cmi.suspend_data', data);
      // window.API?.LMSCommit('');
    } catch (error) {
      console.warn("Erro ao salvar SCORM suspend_data:", error);
    }
  },
};

/**
 * Hook que sincroniza a progressão de contents completados
 * entre SCORM (quando disponível) e localStorage (fallback)
 */
export const useContentProgress = () => {
  const {
    setCompletedContents,
    getCompletedContentsArray,
    markContentAsCompleted,
  } = useTimerStore();

  // Carregar progressão salva ao iniciar
  useEffect(() => {
    const loadProgress = () => {
      // Tentar carregar do SCORM primeiro
      const scormData = scormAPI.getSuspendData();

      if (scormData) {
        try {
          const parsed = JSON.parse(scormData);
          if (
            parsed.completedContents &&
            Array.isArray(parsed.completedContents)
          ) {
            setCompletedContents(parsed.completedContents);
            console.log(
              "✅ Progressão carregada do SCORM:",
              parsed.completedContents
            );
            return;
          }
        } catch (error) {
          console.warn(
            "⚠️ Erro ao carregar progressão do SCORM, usando localStorage"
          );
        }
      }
      // localStorage é automaticamente carregado pelo persist middleware do Zustand
      console.log("✅ Progressão carregada do localStorage");
    };

    loadProgress();
  }, [setCompletedContents]);

  /**
   * Marca um content como completado e salva no SCORM + localStorage
   */
  const completeContent = (contentId: string) => {
    markContentAsCompleted(contentId);

    const completedContents = [...getCompletedContentsArray(), contentId];

    // Salvar no SCORM imediatamente
    const dataToSave = JSON.stringify({ completedContents });
    scormAPI.setSuspendData(dataToSave);
    console.log("✅ Content completado e salvo:", contentId);

    // localStorage é automaticamente salvo pelo persist middleware do Zustand
  };

  return {
    completeContent,
  };
};

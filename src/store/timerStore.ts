import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DEFAULT_TIMER_DURATION } from "../constants/timer";

interface TimerState {
  // Timer do content atual
  currentContentTimer: number;
  currentTimerDuration: number; // Duração do timer atual
  canAdvanceCurrentContent: boolean;

  // Contents completados (sincronizado com SCORM + localStorage como fallback)
  completedContents: Set<string>;

  // Actions
  startTimer: (contentId: string, duration?: number) => void;
  updateTimer: (seconds: number, duration: number) => void;
  resetTimer: () => void;
  markContentAsCompleted: (contentId: string) => void;
  isContentCompleted: (contentId: string) => boolean;
  setCompletedContents: (contents: string[]) => void;
  getCompletedContentsArray: () => string[];
}

export const useTimerStore = create<TimerState>()(
  persist(
    (set, get) => ({
      currentContentTimer: 0,
      currentTimerDuration: DEFAULT_TIMER_DURATION,
      canAdvanceCurrentContent: false,
      completedContents: new Set<string>(),

      startTimer: (contentId: string, duration = DEFAULT_TIMER_DURATION) => {
        const isCompleted = get().completedContents.has(contentId);

        if (isCompleted) {
          // Se já foi completado, libera imediatamente
          set({
            currentContentTimer: duration,
            currentTimerDuration: duration,
            canAdvanceCurrentContent: true,
          });
        } else {
          // Inicia do zero
          set({
            currentContentTimer: 0,
            currentTimerDuration: duration,
            canAdvanceCurrentContent: false,
          });
        }
      },

      updateTimer: (seconds: number, duration: number) => {
        set({
          currentContentTimer: seconds,
          currentTimerDuration: duration,
          canAdvanceCurrentContent: seconds >= duration,
        });
      },

      resetTimer: () => {
        set({
          currentContentTimer: 0,
          canAdvanceCurrentContent: false,
        });
      },

      markContentAsCompleted: (contentId: string) => {
        set((state) => ({
          completedContents: new Set(state.completedContents).add(contentId),
        }));
      },

      isContentCompleted: (contentId: string) => {
        return get().completedContents.has(contentId);
      },

      setCompletedContents: (contents: string[]) => {
        set({
          completedContents: new Set(contents),
        });
      },

      getCompletedContentsArray: () => {
        return Array.from(get().completedContents);
      },
    }),
    {
      name: "timer-storage", // Nome da chave no localStorage (fallback)
      // Serialização customizada para Set
      storage: {
        getItem: (name) => {
          const str = localStorage.getItem(name);
          if (!str) return null;
          const parsed = JSON.parse(str);
          return {
            state: {
              ...parsed.state,
              completedContents: new Set(parsed.state.completedContents || []),
            },
          };
        },
        setItem: (name, value) => {
          const toStore = {
            state: {
              ...value.state,
              completedContents: Array.from(value.state.completedContents),
            },
          };
          localStorage.setItem(name, JSON.stringify(toStore));
        },
        removeItem: (name) => localStorage.removeItem(name),
      },
      // Não persistir o timer atual, apenas contents completados
      partialize: (state) => ({
        completedContents: state.completedContents,
      }),
    }
  )
);

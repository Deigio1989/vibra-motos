import React, { createContext, useReducer, useEffect } from "react";
import useScorm from "../hooks/useScorm";

// Estados da aplicação
const initialState = {
  currentModule: null,
  currentPage: 0,
  userProgress: {},
  moduleAnswers: {},
  isCompleted: false,
  totalScore: 0,
};

// Ações
const appActions = {
  SET_CURRENT_MODULE: "SET_CURRENT_MODULE",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SAVE_ANSWER: "SAVE_ANSWER",
  SAVE_PROGRESS: "SAVE_PROGRESS",
  LOAD_PROGRESS: "LOAD_PROGRESS",
  COMPLETE_MODULE: "COMPLETE_MODULE",
  RESET_COURSE: "RESET_COURSE",
};

// Reducer
function appReducer(state, action) {
  switch (action.type) {
    case appActions.SET_CURRENT_MODULE:
      return {
        ...state,
        currentModule: action.payload,
        currentPage: 0,
      };

    case appActions.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };

    case appActions.SAVE_ANSWER: {
      const { moduleId, pageId, answer } = action.payload;
      return {
        ...state,
        moduleAnswers: {
          ...state.moduleAnswers,
          [moduleId]: {
            ...state.moduleAnswers[moduleId],
            [pageId]: answer,
          },
        },
      };
    }

    case appActions.SAVE_PROGRESS:
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          [action.payload.moduleId]: action.payload.progress,
        },
      };

    case appActions.LOAD_PROGRESS:
      return {
        ...state,
        ...action.payload,
      };

    case appActions.COMPLETE_MODULE:
      return {
        ...state,
        userProgress: {
          ...state.userProgress,
          [action.payload.moduleId]: {
            ...state.userProgress[action.payload.moduleId],
            completed: true,
            score: action.payload.score,
          },
        },
      };

    case appActions.RESET_COURSE:
      return initialState;

    default:
      return state;
  }
}

// Context
const AppContext = createContext();

// Provider
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const scorm = useScorm();

  // Carrega progresso salvo quando SCORM inicializa
  useEffect(() => {
    if (scorm.isInitialized && !scorm.isLoading) {
      const savedProgress = scorm.loadProgress();
      if (savedProgress) {
        dispatch({
          type: appActions.LOAD_PROGRESS,
          payload: savedProgress,
        });
      }
    }
  }, [scorm]);

  // Salva progresso automaticamente quando state muda
  useEffect(() => {
    if (scorm.isInitialized) {
      const progressData = {
        currentModule: state.currentModule,
        currentPage: state.currentPage,
        userProgress: state.userProgress,
        moduleAnswers: state.moduleAnswers,
        timestamp: new Date().toISOString(),
      };
      scorm.saveProgress(progressData);
    }
  }, [state, scorm]);

  // Funções auxiliares
  const setCurrentModule = (moduleId) => {
    dispatch({
      type: appActions.SET_CURRENT_MODULE,
      payload: moduleId,
    });
  };

  const setCurrentPage = (pageIndex) => {
    dispatch({
      type: appActions.SET_CURRENT_PAGE,
      payload: pageIndex,
    });
  };

  const saveAnswer = (moduleId, pageId, answer) => {
    dispatch({
      type: appActions.SAVE_ANSWER,
      payload: { moduleId, pageId, answer },
    });
  };

  const completeModule = (moduleId, score) => {
    dispatch({
      type: appActions.COMPLETE_MODULE,
      payload: { moduleId, score },
    });
  };

  const resetCourse = () => {
    dispatch({ type: appActions.RESET_COURSE });
  };

  const value = {
    // Estado
    ...state,
    scorm,

    // Ações
    setCurrentModule,
    setCurrentPage,
    saveAnswer,
    completeModule,
    resetCourse,

    // Utilitários
    getModuleProgress: (moduleId) => state.userProgress[moduleId] || {},
    getModuleAnswers: (moduleId) => state.moduleAnswers[moduleId] || {},
    isModuleCompleted: (moduleId) =>
      state.userProgress[moduleId]?.completed || false,
    getTotalProgress: () => {
      const completedModules = Object.values(state.userProgress).filter(
        (p) => p.completed
      ).length;
      return completedModules;
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppContext;

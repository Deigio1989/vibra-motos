import { useEffect, useState, useCallback } from "react";
import scormService from "../services/scormService";

export const useScorm = () => {
  const [isInitialized, setIsInitialized] = useState(false);
  const [lessonStatus, setLessonStatus] = useState("");
  const [studentName, setStudentName] = useState("");
  const [score, setScore] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  // Inicialização do SCORM
  useEffect(() => {
    const initScorm = async () => {
      setIsLoading(true);
      try {
        const initialized = await scormService.initialize();
        setIsInitialized(initialized);

        // Carrega dados iniciais
        setLessonStatus(scormService.getLessonStatus());
        setStudentName(scormService.getStudentName());
        setScore(scormService.getScore());

        console.log("Hook inicializado:", {
          initialized,
          status: scormService.getLessonStatus(),
          student: scormService.getStudentName(),
        });
      } catch (error) {
        console.error("Erro na inicialização:", error);
        setIsInitialized(false);
      } finally {
        setIsLoading(false);
      }
    };

    initScorm();

    // Cleanup
    return () => {
      scormService.terminate();
    };
  }, []);

  // Atualiza status da lição
  const updateLessonStatus = useCallback((status) => {
    if (scormService.setLessonStatus(status)) {
      scormService.commit();
      setLessonStatus(status);
      return true;
    }
    return false;
  }, []);

  // Atualiza pontuação
  const updateScore = useCallback((newScore, min = 0, max = 100) => {
    if (scormService.setScore(newScore, min, max)) {
      scormService.commit();
      setScore(newScore);
      return true;
    }
    return false;
  }, []);

  // Salva progresso
  const saveProgress = useCallback((data) => {
    if (scormService.setSuspendData(data)) {
      scormService.commit();
      return true;
    }
    return false;
  }, []);

  // Carrega progresso
  const loadProgress = useCallback(() => {
    return scormService.getSuspendData();
  }, []);

  // Completa o curso
  const completeCourse = useCallback((finalScore = null) => {
    const success = scormService.completeCourse(finalScore);
    if (success) {
      setLessonStatus("completed");
      if (finalScore !== null) {
        setScore(finalScore);
      }
    }
    return success;
  }, []);

  // Aprova o aluno
  const passCourse = useCallback((finalScore = null) => {
    const success = scormService.passCourse(finalScore);
    if (success) {
      setLessonStatus("passed");
      if (finalScore !== null) {
        setScore(finalScore);
      }
    }
    return success;
  }, []);

  // Reprova o aluno
  const failCourse = useCallback((finalScore = null) => {
    const success = scormService.failCourse(finalScore);
    if (success) {
      setLessonStatus("failed");
      if (finalScore !== null) {
        setScore(finalScore);
      }
    }
    return success;
  }, []);

  return {
    // Estados
    isInitialized,
    isLoading,
    lessonStatus,
    studentName,
    score,

    // Ações
    updateLessonStatus,
    updateScore,
    saveProgress,
    loadProgress,
    completeCourse,
    passCourse,
    failCourse,

    // Acesso direto
    scormService,
  };
};

export default useScorm;

import React, { createContext, useContext, useState } from "react";

// Contexto para gerenciar a progressão dos anchors
const ProgressionContext = createContext();

// Provider que gerencia a progressão
export const ProgressionProvider = ({ children }) => {
  // Estado da progressão máxima alcançada (inicialmente 1)
  const [maxReached, setMaxReached] = useState(1);

  // Função para verificar o estado de um anchor
  const getAnchorState = (anchorId, currentActiveId) => {
    if (anchorId < currentActiveId) {
      return "previous"; // Anchors anteriores (cinza acinzentado)
    }
    if (anchorId === currentActiveId) {
      return "active"; // Anchor atual (verde normal)
    }
    if (anchorId <= maxReached) {
      return "available"; // Disponível (já foi visitado pelo botão avançar)
    }
    return "blocked"; // Anchors bloqueados (cinza bem escuro, não clicável)
  };

  // Função para verificar se um anchor é clicável
  // Só permite clicar em anchors já visitados (não no próximo)
  const isAnchorClickable = (anchorId) => {
    return anchorId <= maxReached;
  };

  // Função para avançar a progressão quando um anchor é acessado via botão avançar
  const updateProgression = (anchorId) => {
    if (anchorId > maxReached) {
      setMaxReached(anchorId);
      console.log(`Progressão atualizada: maxReached = ${anchorId}`);
    }
  };

  // Função para resetar a progressão (útil para testes)
  const resetProgression = () => {
    setMaxReached(1);
  };

  const value = {
    maxReached,
    getAnchorState,
    isAnchorClickable,
    updateProgression,
    resetProgression,
  };

  return (
    <ProgressionContext.Provider value={value}>
      {children}
    </ProgressionContext.Provider>
  );
};

// Hook para usar o contexto de progressão
export const useProgression = () => {
  const context = useContext(ProgressionContext);
  if (!context) {
    throw new Error(
      "useProgression deve ser usado dentro de um ProgressionProvider"
    );
  }
  return context;
};

export default ProgressionProvider;

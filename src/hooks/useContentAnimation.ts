import { useEffect, useState } from 'react';

// Hook para controlar animações de conteúdo
export const useContentAnimation = (activeId: number | null) => {
  const [animationKey, setAnimationKey] = useState(0);

  useEffect(() => {
    if (activeId !== null) {
      // Incrementa a key para forçar re-animação
      setAnimationKey(prev => prev + 1);
    }
  }, [activeId]);

  return animationKey;
};

// Opções de animação personalizáveis
export const animationPresets = {
  fadeDown: {
    duration: '0.6s',
    easing: 'ease-out',
    delay: '0s'
  },
  fadeUp: {
    duration: '0.6s', 
    easing: 'ease-out',
    delay: '0s'
  },
  slideIn: {
    duration: '0.8s',
    easing: 'ease-out', 
    delay: '0.1s'
  }
};
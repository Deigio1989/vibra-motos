import React, { ReactNode } from 'react';
import styled, { keyframes, css } from 'styled-components';

// Animações disponíveis
const fadeDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeUp = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const slideIn = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-30px);
  }
  100% {
    opacity: 1;
    transform: translateX(0);
  }
`;

// Mapeamento de animações
const animations = {
  fadeDown,
  fadeUp,
  slideIn,
};

// Container animado com props dinâmicas
const AnimatedContainer = styled.div<{
  $animation: keyof typeof animations;
  $duration: string;
  $easing: string;
  $delay: string;
}>`
  ${({ $animation, $duration, $easing, $delay }) => css`
    animation: ${animations[$animation]} ${$duration} ${$easing} ${$delay};
    animation-fill-mode: both;
  `}
`;

interface ContentAnimationProps {
  children: ReactNode;
  animation?: keyof typeof animations;
  duration?: string;
  easing?: string;
  delay?: string;
}

const ContentAnimation: React.FC<ContentAnimationProps> = ({ 
  children,
  animation = 'fadeDown',
  duration = '0.6s',
  easing = 'ease-out',
  delay = '0s'
}) => {
  return (
    <AnimatedContainer
      $animation={animation}
      $duration={duration}
      $easing={easing}
      $delay={delay}
    >
      {children}
    </AnimatedContainer>
  );
};

export default ContentAnimation;
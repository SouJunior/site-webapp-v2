import React from 'react';
import styled, { keyframes } from 'styled-components';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  text?: string;
  ariaLabel?: string;
}

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div<{ size: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;

  ${(props) =>
    props.size === 'small' &&
    `
    gap: 0.5rem;
    padding: 0.5rem;
  `}

  ${(props) =>
    props.size === 'large' &&
    `
    gap: 1.5rem;
    padding: 1.5rem;
  `}
`;

const Spinner = styled.div<{ size: string }>`
  border: 3px solid #f3f3f3;
  border-top: 3px solid var(--primary-color, #0056b3);
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;

  ${(props) =>
    props.size === 'small' &&
    `
    width: 20px;
    height: 20px;
    border-width: 2px;
  `}

  ${(props) =>
    props.size === 'medium' &&
    `
    width: 40px;
    height: 40px;
  `}
  
  ${(props) =>
    props.size === 'large' &&
    `
    width: 60px;
    height: 60px;
    border-width: 4px;
  `}

  /* Respect reduced motion preferences */
  @media (prefers-reduced-motion: reduce) {
    animation: none;
    border-top-color: transparent;
    border-left-color: var(--primary-color, #0056b3);
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    border-color: currentColor;
    border-top-color: var(--primary-color, #0056b3);
  }
`;

const LoadingText = styled.p<{ size: string }>`
  margin: 0;
  color: var(--secondary-color, #6c757d);
  font-weight: 500;

  ${(props) =>
    props.size === 'small' &&
    `
    font-size: 0.875rem;
  `}

  ${(props) =>
    props.size === 'medium' &&
    `
    font-size: 1rem;
  `}
  
  ${(props) =>
    props.size === 'large' &&
    `
    font-size: 1.125rem;
  `}
`;

const Loading: React.FC<LoadingProps> = ({
  size = 'medium',
  text = 'Carregando...',
  ariaLabel,
}) => {
  return (
    <LoadingContainer
      size={size}
      role="status"
      aria-live="polite"
      aria-label={ariaLabel || text}
    >
      <Spinner size={size} aria-hidden="true" />
      <LoadingText size={size}>{text}</LoadingText>
    </LoadingContainer>
  );
};

export default Loading;

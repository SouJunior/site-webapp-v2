import type { ErrorInfo, ReactNode } from 'react';
import React, { Component } from 'react';
import styled from 'styled-components';

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

const ErrorContainer = styled.div`
  padding: 2rem;
  text-align: center;
  background-color: #f8d7da;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  margin: 1rem;
  color: #721c24;

  /* High contrast mode */
  @media (prefers-contrast: high) {
    background-color: #fff;
    border: 2px solid #721c24;
  }
`;

const ErrorTitle = styled.h2`
  color: #721c24;
  margin-bottom: 1rem;
  font-size: 1.5rem;
`;

const ErrorMessage = styled.p`
  margin-bottom: 1.5rem;
  font-size: 1rem;
  line-height: 1.5;
`;

const RetryButton = styled.button`
  background-color: #721c24;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  min-height: 44px;
  min-width: 44px;

  &:hover {
    background-color: #5a1518;
  }

  &:focus {
    outline: 2px solid #721c24;
    outline-offset: 2px;
  }

  &:focus:not(:focus-visible) {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid #721c24;
    outline-offset: 2px;
  }

  /* High contrast mode */
  @media (prefers-contrast: high) {
    border: 1px solid currentColor;
  }
`;

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);

    // Announce error to screen readers
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'assertive');
    announcement.setAttribute('role', 'alert');
    announcement.className = 'sr-only';
    announcement.textContent =
      'Ocorreu um erro na aplicação. Por favor, tente novamente.';
    document.body.appendChild(announcement);

    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 3000);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: undefined });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <ErrorContainer
          role="alert"
          aria-live="assertive"
          aria-labelledby="error-title"
          aria-describedby="error-message"
        >
          <ErrorTitle id="error-title">Oops! Algo deu errado</ErrorTitle>
          <ErrorMessage id="error-message">
            Ocorreu um erro inesperado na aplicação. Você pode tentar recarregar
            a página ou entrar em contato com o suporte se o problema persistir.
          </ErrorMessage>
          <RetryButton
            onClick={this.handleRetry}
            aria-describedby="error-message"
          >
            Tentar Novamente
          </RetryButton>
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;

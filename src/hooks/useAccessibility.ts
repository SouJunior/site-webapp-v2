import { useEffect, useRef } from 'react';

/**
 * Hook para anúncios de screen reader
 * Cria uma live region para anunciar mensagens aos usuários de tecnologia assistiva
 */
export const useScreenReaderAnnouncer = () => {
  const liveRegionRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Criar live region se não existir
    if (!liveRegionRef.current) {
      const liveRegion = document.createElement('div');
      liveRegion.setAttribute('aria-live', 'polite');
      liveRegion.setAttribute('aria-atomic', 'true');
      liveRegion.className = 'sr-only';
      liveRegion.id = 'screen-reader-announcer';
      document.body.appendChild(liveRegion);
      liveRegionRef.current = liveRegion;
    }

    return () => {
      // Cleanup na desmontagem
      if (
        liveRegionRef.current &&
        document.body.contains(liveRegionRef.current)
      ) {
        document.body.removeChild(liveRegionRef.current);
      }
    };
  }, []);

  const announce = (
    message: string,
    priority: 'polite' | 'assertive' = 'polite',
  ) => {
    if (liveRegionRef.current) {
      liveRegionRef.current.setAttribute('aria-live', priority);
      liveRegionRef.current.textContent = message;

      // Limpar mensagem após um tempo para evitar repetições
      setTimeout(() => {
        if (liveRegionRef.current) {
          liveRegionRef.current.textContent = '';
        }
      }, 1000);
    }
  };

  return { announce };
};

/**
 * Hook para gerenciar foco programático
 * Útil para navegação por single page applications
 */
export const useFocusManagement = () => {
  const focusElement = (
    selector: string | HTMLElement,
    options?: FocusOptions,
  ) => {
    const element =
      typeof selector === 'string'
        ? document.querySelector(selector)
        : selector;

    if (element && element instanceof HTMLElement) {
      // Garantir que o elemento seja focalizável
      if (element.tabIndex < 0) {
        element.tabIndex = -1;
      }

      element.focus(options);
    }
  };

  const focusFirstError = () => {
    const firstError = document.querySelector(
      '[aria-invalid="true"]',
    ) as HTMLElement;
    if (firstError) {
      focusElement(firstError);
      return true;
    }
    return false;
  };

  const focusMainContent = () => {
    focusElement('#main-content');
  };

  return {
    focusElement,
    focusFirstError,
    focusMainContent,
  };
};

/**
 * Hook para detecção de tecnologia assistiva
 */
export const useAssistiveTechnology = () => {
  const isScreenReaderActive = () => {
    // Verificar se existem elementos específicos de screen reader
    return !!(
      window.speechSynthesis ||
      navigator.userAgent.match(/NVDA|JAWS|VoiceOver|TalkBack|ChromeVox/i) ||
      document.querySelector('[aria-live]')
    );
  };

  const prefersReducedMotion = () => {
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  };

  const prefersHighContrast = () => {
    return window.matchMedia('(prefers-contrast: high)').matches;
  };

  return {
    isScreenReaderActive,
    prefersReducedMotion,
    prefersHighContrast,
  };
};

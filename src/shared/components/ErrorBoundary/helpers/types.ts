import { ReactNode } from 'react';

export interface ErrorBoundaryProps {
  children: ReactNode;
  fallbackRender?: (props: {
    error: Error | null;
    resetErrorBoundary: () => void;
  }) => ReactNode;
}

export interface ErrorBoundaryState {
  hasError: boolean;
  info: { componentStack?: string | null | undefined };
  error: { message: string; stack: string };
}

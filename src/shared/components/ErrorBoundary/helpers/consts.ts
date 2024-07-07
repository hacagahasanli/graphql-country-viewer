import { ErrorBoundaryState } from './types';

export const BoundaryDefaultState: ErrorBoundaryState = {
  hasError: false,
  info: { componentStack: '' },
  error: { message: '', stack: '' },
};

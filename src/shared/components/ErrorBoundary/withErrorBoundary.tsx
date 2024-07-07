import React, { ComponentType, ErrorInfo, ReactNode } from 'react';

import { BoundaryDefaultState } from './helpers/consts';

import { FallBack } from '..';

import type { ErrorBoundaryState } from './helpers/types';

const withErrorBoundary = <P extends object>(
  WrappedComponent: ComponentType<P>
) => {
  class ErrorBoundary extends React.Component<P, ErrorBoundaryState> {
    constructor(props: P) {
      super(props);
      this.state = BoundaryDefaultState;
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
      return {
        hasError: true,
        info: { componentStack: '' },
        error: { message: error?.message, stack: '' },
      };
    }

    componentDidCatch(error: Error, info: ErrorInfo): void {
      this.setState({
        info,
        error: { message: error?.message, stack: error?.stack || '' },
      });
    }

    render(): ReactNode {
      const { hasError, error, info } = this.state;

      return hasError ? (
        <FallBack error={error.message} info={info.componentStack!} />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  }

  return ErrorBoundary;
};

export default withErrorBoundary;

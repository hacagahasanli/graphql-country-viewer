import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { DEFAULT_NOT_FOUND_DATA_TEST_ID } from '@shared/constants';

import { DEFAULT_NOT_FOUND_MESSAGE } from '../helpers/consts';

import NotFound from '../NotFound';

describe('NotFound Component', () => {
  test('should renders with default message', () => {
    render(<NotFound />);

    const messageElement = screen.getByText(DEFAULT_NOT_FOUND_MESSAGE);
    expect(messageElement).toBeInTheDocument();
  });

  test('should renders with custom message', () => {
    const customMessage = 'No data available!';
    render(<NotFound message={customMessage} />);

    const messageElement = screen.getByText(customMessage);
    expect(messageElement).toBeInTheDocument();
  });

  test('should applies default data-testid', () => {
    render(<NotFound />);

    const containerElement = screen.getByTestId(DEFAULT_NOT_FOUND_DATA_TEST_ID);
    expect(containerElement).toBeInTheDocument();
  });

  test('should applies custom data-testid', () => {
    const customTestId = 'custom-not-found';
    render(<NotFound dataTestId={customTestId} />);

    const containerElement = screen.getByTestId(customTestId);
    expect(containerElement).toBeInTheDocument();
  });
});

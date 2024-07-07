import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { DEFAULT_ERROR_MESSAGE_DATA_TEST_ID } from '@shared/constants';

import { DEFAULT_ERROR_MESSAGE } from '../helpers/consts';

import Error from '../ErrorMessage';

describe('Error Component', () => {
  const errorMessage = 'Something went wrong';

  test('renders with default data-testid and message', () => {
    render(<Error />);

    const errorContainer = screen.getByTestId(
      DEFAULT_ERROR_MESSAGE_DATA_TEST_ID
    );
    const errorMessageElement = screen.getByText(DEFAULT_ERROR_MESSAGE);

    expect(errorContainer).toBeInTheDocument();
    expect(errorMessageElement).toBeInTheDocument();
  });

  test('renders with custom data-testid', () => {
    const customTestId = 'custom-error';
    render(<Error dataTestId={customTestId} />);

    const errorContainer = screen.getByTestId(customTestId);

    expect(errorContainer).toBeInTheDocument();
  });

  test('renders error message correctly', () => {
    render(<Error message={errorMessage} />);

    const errorMessageElement = screen.getByText(errorMessage);

    expect(errorMessageElement).toBeInTheDocument();
  });
});

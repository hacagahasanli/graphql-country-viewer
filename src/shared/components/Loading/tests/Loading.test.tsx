import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { DEFAULT_LOADING_DATA_TEST_ID } from '@shared/constants';

import Loading from '../Loading';

describe('Loading Component', () => {
  test('renders with default data-testid', () => {
    render(<Loading />);

    const spinnerElement = screen.getByTestId(DEFAULT_LOADING_DATA_TEST_ID);
    expect(spinnerElement).toBeInTheDocument();
  });

  test('renders with custom data-testid', () => {
    const customTestId = 'custom-loading-spinner';
    render(<Loading dataTestId={customTestId} />);

    const spinnerElement = screen.getByTestId(customTestId);
    expect(spinnerElement).toBeInTheDocument();
  });
});

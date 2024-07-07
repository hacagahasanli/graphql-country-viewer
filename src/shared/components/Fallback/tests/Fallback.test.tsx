import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { DEFAULT_FALLBACK_DATA_TEST_ID } from '@shared/constants';

import FallBack from '../FallBack';

describe('FallBack Component', () => {
  const infoMock = 'Additional info';
  const errorMock = 'Something went wrong';

  test('renders with default data-testid and messages', () => {
    render(<FallBack error={errorMock} info={infoMock} />);

    const infoElement = screen.getByText(infoMock);
    const errorElement = screen.getByText(errorMock);
    const fallbackContainer = screen.getByTestId(DEFAULT_FALLBACK_DATA_TEST_ID);

    expect(infoElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
    expect(fallbackContainer).toBeInTheDocument();
  });

  test('renders with custom data-testid', () => {
    const customTestId = 'custom-fallback';
    render(
      <FallBack error={errorMock} info={infoMock} dataTestId={customTestId} />
    );

    const fallbackContainer = screen.getByTestId(customTestId);

    expect(fallbackContainer).toBeInTheDocument();
  });

  test('renders fallback messages correctly', () => {
    render(<FallBack error={errorMock} info={infoMock} />);

    const infoElement = screen.getByText(infoMock);
    const errorElement = screen.getByText(errorMock);

    expect(infoElement).toBeInTheDocument();
    expect(errorElement).toBeInTheDocument();
  });

  test('renders only error message if info is not provided', () => {
    render(<FallBack error={errorMock} info={''} />);

    const errorElement = screen.getByText(errorMock);

    expect(errorElement).toBeInTheDocument();
    expect(screen.queryByText(infoMock)).not.toBeInTheDocument();
  });

  test('renders only info message if error is not provided', () => {
    render(<FallBack info={infoMock} error={''} />);

    const infoElement = screen.getByText(infoMock);

    expect(infoElement).toBeInTheDocument();
    expect(screen.queryByText(errorMock)).not.toBeInTheDocument();
  });
});

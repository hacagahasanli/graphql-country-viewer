import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import BaseSizes from '@shared/constants/BaseSizes';

import { INPUT_WIDTHS } from '../helpers/consts';

import Input from '../Input';

import { INPUT_DATA_TEST_ID } from './mocks';

const { S, M, L } = BaseSizes;

describe('Input Component', () => {
  test('renders with default size and data-testid', () => {
    const { container } = render(<Input />);

    const inputElement = screen.getByTestId(INPUT_DATA_TEST_ID);

    expect(inputElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(
      `width: ${INPUT_WIDTHS[M]}`
    );
  });

  test('renders with custom data-testid', () => {
    const customTestId = 'custom-input-data-testid';
    render(<Input dataTestId={customTestId} />);

    const inputElement = screen.getByTestId(customTestId);

    expect(inputElement).toBeInTheDocument();
  });

  test('accepts additional props', () => {
    render(<Input placeholder='Enter text' />);

    const inputElement = screen.getByPlaceholderText('Enter text');

    expect(inputElement).toBeInTheDocument();
  });

  test('renders with custom size', () => {
    const { container } = render(<Input size={L} />);

    const inputElement = screen.getByTestId(INPUT_DATA_TEST_ID);

    expect(inputElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(
      `width: ${INPUT_WIDTHS[L]}`
    );
  });

  test('renders with small size', () => {
    const { container } = render(<Input size={S} />);

    const inputElement = screen.getByTestId(INPUT_DATA_TEST_ID);

    expect(inputElement).toBeInTheDocument();
    expect(container.firstChild).toHaveStyle(`width: ${INPUT_WIDTHS[S]}`);
  });
});

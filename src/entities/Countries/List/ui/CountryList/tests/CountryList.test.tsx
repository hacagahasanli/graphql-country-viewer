// CountryList.test.tsx

import { describe, expect, test } from 'vitest';

import { render, screen, waitFor } from '@testing-library/react';

import { MockedProvider } from '@apollo/client/testing';

import userEvent from '@testing-library/user-event';

import { DEFAULT_LOADING_DATA_TEST_ID } from '@shared/constants';

import { GET_COUNTRY_LIST } from '@entities/Countries/List/api';

import { INPUT_PLACEHOLDER } from '../consts';

import { mocks } from './mocks';

import CountryList from '../CountryList';

describe('CountryList Component', () => {
  test('renders loading state initially', async () => {
    render(
      <MockedProvider mocks={[]} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    const loadingElement = screen.getByTestId(DEFAULT_LOADING_DATA_TEST_ID);
    expect(loadingElement).toBeInTheDocument();
  });

  test('renders error message if query fails', async () => {
    const errorMock = {
      request: {
        query: GET_COUNTRY_LIST,
      },
      error: new Error('An error occurred.'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      const errorElement = screen.getByText('An error occurred.');
      expect(errorElement).toBeInTheDocument();
    });
  });

  test('renders table with country data on successful query', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      const tableElement = screen.getByRole('table');
      expect(tableElement).toBeInTheDocument();

      const countryNames = screen.getAllByRole('cell').map((cell) => cell.textContent);
      expect(countryNames).toContain('Canada');
      expect(countryNames).toContain('United States');
      expect(countryNames).toContain('United Kingdom');
    });
  });

  test('filters countries by country code', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <CountryList />
      </MockedProvider>
    );

    await waitFor(() => {
      const tableElement = screen.getByRole('table');
      expect(tableElement).toBeInTheDocument();
    });

    const filterInput = screen.getByPlaceholderText(INPUT_PLACEHOLDER);
    expect(filterInput).toBeInTheDocument();

    userEvent.type(filterInput, 'US');

    await waitFor(() => {
      const tableRows = screen.getAllByRole('row').slice(1);
      expect(tableRows.length).toBe(1);

      const countryNames = screen.getAllByRole('cell').map((cell) => cell.textContent);
      expect(countryNames).toEqual(["United States", "US"]);
    });
  });
});

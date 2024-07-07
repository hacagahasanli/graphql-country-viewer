import { describe, expect, test } from 'vitest';

import { render, screen } from '@testing-library/react';

import { DEFAULT_TABLE_DATA_TEST_ID } from '@shared/constants';

import Table from '../Table';

import { columns, data } from './mocks';

describe('Table Component', () => {
  test('should renders table headers correctly', () => {
    render(<Table columns={columns} data={data} />);

    columns.forEach((column) => {
      expect(screen.getByText(column.headingRender)).toBeInTheDocument();
    });
  });

  test('should renders table data correctly', () => {
    render(<Table columns={columns} data={data} />);

    data.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
      expect(screen.getByText(item.code)).toBeInTheDocument();
    });
  });

  test('should renders NotFound component when data is empty', () => {
    render(<Table columns={columns} data={[]} />);

    expect(screen.getByTestId(DEFAULT_TABLE_DATA_TEST_ID)).toBeInTheDocument();
  });

  test('should does not render table when data is empty', () => {
    render(<Table columns={columns} data={[]} />);

    expect(screen.queryByRole('table')).not.toBeInTheDocument();
  });
});

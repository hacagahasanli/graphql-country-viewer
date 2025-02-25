import NotFound from '../NotFound/NotFound';

import { DEFAULT_TABLE_DATA_TEST_ID } from '@shared/constants';

import type { TableProps } from './helpers/types';

import { TableWrapper, TableContainer, Th, Td, Tr } from './Table.styled';

const Table = <T extends any>({
  data,
  columns,
  dataTestId = DEFAULT_TABLE_DATA_TEST_ID,
}: TableProps<T>) => {
  const isEmpty = !data?.length;

  return (
    <div data-testid={dataTestId}>
      {!isEmpty && (
        <TableContainer>
          <TableWrapper>
            <thead>
              <tr>
                {columns?.map((column) => (
                  <Th key={column.headingRender}>{column.headingRender}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, o) => (
                <Tr key={o}>
                  {columns.map((column) => (
                    <Td key={String(column.name)}>{item[column.name]}</Td>
                  ))}
                </Tr>
              ))}
            </tbody>
          </TableWrapper>
        </TableContainer>
      )}

      {isEmpty && <NotFound />}
    </div>
  );
};

export default Table;

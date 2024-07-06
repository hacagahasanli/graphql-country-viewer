import NotFound from '../NotFound/NotFound';

import { TableWrapper, TableContainer, Th, Td, Tr } from './Table.styled';

import type { TableProps } from './types';

const Table = <T extends any>({ columns, data }: TableProps<T>) => {
  const isEmpty = !data?.length;

  return (
    <div>
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

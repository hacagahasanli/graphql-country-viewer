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
                {columns?.map((column, index) => (
                  <Th key={index}>{column.headingRender}</Th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data?.map((item, index) => (
                <Tr key={index}>
                  {columns.map((column, columnIndex) => (
                    <Td key={columnIndex}>{item[column.name]}</Td>
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

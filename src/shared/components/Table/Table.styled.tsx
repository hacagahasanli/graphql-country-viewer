import styled from 'styled-components';

export const TableContainer = styled.div`
  font-family: Arial, sans-serif;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  background-color: #f2f2f2;
  padding: 12px;
  text-align: left;
`;

export const Td = styled.td`
  padding: 12px;
  border-top: 1px solid #ddd;
`;

export const Tr = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
  &:hover {
    background-color: #e9ecef;
  }
`;

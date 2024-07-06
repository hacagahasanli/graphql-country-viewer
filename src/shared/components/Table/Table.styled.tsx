import styled from 'styled-components';

export const TableContainer = styled.div`
  overflow: hidden;
  border-radius: 8px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  font-family: Arial, sans-serif;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const TableWrapper = styled.table`
  width: 100%;
  border-collapse: collapse;

  tr{
    display: grid;
    grid-template-columns: 2fr 1fr;
  }
`;

export const Th = styled.th`
  padding: 12px;
  text-align: left;
  background-color: #f2f2f2;
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

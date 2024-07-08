import type { IDataTestId } from '@shared/types';

export interface Column<T> {
  name: keyof T;
  headingRender: string;
}

export interface TableProps<T> extends IDataTestId {
  columns: Column<T>[];
  data: T[];
}

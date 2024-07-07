import type { IDateTestId } from '@shared/types';

export interface Column<T> {
  name: keyof T;
  headingRender: string;
}

export interface TableProps<T> extends IDateTestId {
  columns: Column<T>[];
  data: T[];
}

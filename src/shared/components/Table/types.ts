export interface Column<T> {
  name: keyof T;
  headingRender: string;
}

export interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
}

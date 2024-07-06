import type { Column } from '@shared/components/Table/types';

import type { ICountries } from '../../model/types';

export const COLUMNS: Column<ICountries>[] = [
  {
    name: 'name',
    headingRender: 'Country Name',
  },
  {
    name: 'code',
    headingRender: 'Country Code',
  },
];

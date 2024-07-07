import type { Column } from '../helpers/types';

import type { IMockData } from './mocks.types';

export const columns: Column<IMockData>[] = [
  { headingRender: 'Country Name', name: 'name' },
  { headingRender: 'Country Code', name: 'code' },
];

export const data: IMockData[] = [
  { name: 'United States', code: 'US' },
  { name: 'Canada', code: 'CA' },
];

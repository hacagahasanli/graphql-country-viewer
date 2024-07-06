import { Column } from "@shared/components/Table/Table";

import type ICountries from "../../model/types/Countries";

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

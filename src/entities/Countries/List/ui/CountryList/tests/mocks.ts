import { GET_COUNTRY_LIST } from "@entities/Countries/List/api";

export const mocks = [
  {
    request: {
      query: GET_COUNTRY_LIST,
    },
    result: {
      data: {
        countries: [
          { code: 'US', name: 'United States' },
          { code: 'CA', name: 'Canada' },
          { code: 'GB', name: 'United Kingdom' },
        ],
      },
    },
  },
];

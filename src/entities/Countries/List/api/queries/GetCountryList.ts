import { gql } from "src/__generated__/gql";

const GET_COUNTRY_LIST = gql(`
  query getCountries{
    countries {
      name
      code
    }
  }
`);

export default GET_COUNTRY_LIST
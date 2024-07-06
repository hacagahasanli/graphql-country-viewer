import React, { useCallback, useMemo, useState } from 'react';

import { useQuery } from '@apollo/client';

import { BaseSizes } from '@shared/constants';
import { ONLY_LETTERS } from '@shared/lib/regex';

import {
  Table,
  Input,
  Loading,
  ErrorMessage,
  withErrorBoundary,
} from '@shared/components';

import { GET_COUNTRY_LIST } from '../../api/queries';

import { COLUMNS } from './consts';

import type ICountries from '../../model/types/Countries';
import type ICountryList from '../../model/types/CountryList';

import { CounryListWrapper } from './CountryList.styled';

function onfilterCountries(countries: ICountries[], countryCode: string) {
  return countries?.filter((country) =>
    country?.code.toLowerCase().includes(countryCode.toLowerCase())
  );
}

const CountryList: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>('');

  const { loading, error, data } = useQuery(GET_COUNTRY_LIST);

  const { countries } = data ?? ({} as ICountryList);

  const onFilterChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      if (ONLY_LETTERS.test(event.target.value))
        setCountryCode(event.target.value);
    },
    []
  );

  const filteredCountries = useMemo(
    () => onfilterCountries(countries, countryCode),
    [countries, countryCode]
  );

  if (loading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <CounryListWrapper>
      <Input
        type='text'
        size={BaseSizes.L}
        value={countryCode}
        onChange={onFilterChange}
        placeholder='Filter by country code...'
      />
      {!!countries.length && (
        <Table
          columns={COLUMNS}
          data={countryCode ? filteredCountries : countries}
        />
      )}
    </CounryListWrapper>
  );
};

export default withErrorBoundary(CountryList);

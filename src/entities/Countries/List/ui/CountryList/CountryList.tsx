import React, { useCallback, useMemo, useState, ChangeEvent } from 'react';

import { useQuery } from '@apollo/client';

import { BaseSizes } from '@shared/constants';
import { ONLY_LETTERS_REGEX } from '@shared/lib/regex';

import {
  Table,
  Input,
  Loading,
  ErrorMessage,
  withErrorBoundary,
} from '@shared/components';

import { GET_COUNTRY_LIST } from '../../api/queries';

import { COLUMNS, INPUT_PLACEHOLDER } from './consts';

import type { ICountries, ICountryList } from '../../model/types';

import { CounryListWrapper } from './CountryList.styled';

function onfilterCountries(countries: ICountries[], countryCode: string) {
  return countries?.filter((country) =>
    country?.code.toLowerCase().includes(countryCode.toLowerCase())
  );
}

const CountryList: React.FC = () => {
  const [countryCode, setCountryCode] = useState<string>('');

  const { loading: isLoading, error, data } = useQuery(GET_COUNTRY_LIST);

  const { countries } = data ?? ({} as ICountryList);

  const onFilterChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (ONLY_LETTERS_REGEX.test(event.target.value))
      setCountryCode(event.target.value);
  }, []);

  const filteredCountries = useMemo(
    () => onfilterCountries(countries, countryCode),
    [countries, countryCode]
  );

  const tableData = countryCode ? filteredCountries : countries;

  if (isLoading) return <Loading />;
  if (error) return <ErrorMessage />;

  return (
    <CounryListWrapper>
      <Input
        type='text'
        size={BaseSizes.L}
        value={countryCode}
        onChange={onFilterChange}
        placeholder={INPUT_PLACEHOLDER}
      />
      {!!countries?.length && <Table data={tableData} columns={COLUMNS} />}
    </CounryListWrapper>
  );
};

export default withErrorBoundary(CountryList);

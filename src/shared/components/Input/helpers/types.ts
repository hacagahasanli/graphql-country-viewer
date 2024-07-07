import type { IDateTestId } from '@shared/types';

import BaseSizes from '@shared/constants/BaseSizes';

export interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>, IDateTestId  {
  size?: BaseSizes;
}

